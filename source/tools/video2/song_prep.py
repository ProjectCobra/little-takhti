"""Transcribe a sung track for a song lesson (runs in GitHub Actions; the song host is blocked in the workspace).
Usage: python3 source/tools/video2/song_prep.py <url> <outdir>
Writes <outdir>/transcript.json: duration, tempo, beats, and word-timed segments from faster-whisper,
on the full mix and on demucs-separated vocals (if demucs works), so the better one can be used.
"""
import json, subprocess, sys, urllib.request
from pathlib import Path

url, out = sys.argv[1], Path(sys.argv[2])
# optional lines in the song file (SONGFILE): "segments: 12-31, 123-130" re-transcribes only those windows,
# guided by "prompt: <known lyrics>" (for verses whisper skipped on the full pass)
import os
SEGS, PROMPT, TOPIC = [], '', ''
if os.environ.get('SONGFILE'):
    for ln in Path(os.environ['SONGFILE']).read_text().splitlines():
        if ln.startswith('segments:'): SEGS = [tuple(float(x) for x in p.split('-')) for p in ln[9:].split(',') if p.strip()]
        if ln.startswith('prompt:'): PROMPT = ln[7:].strip()
        if ln.startswith('topic:'): TOPIC = ln[6:].strip()
out.mkdir(parents=True, exist_ok=True)
src = out / 'song.m4a'
urllib.request.urlretrieve(url, src)
wav = out / 'song.wav'
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(src), '-ac', '1', '-ar', '44100', str(wav)], check=True)

import librosa, numpy as np
y, sr = librosa.load(str(wav), sr=22050, mono=True)
tempo, beats = librosa.beat.beat_track(y=y, sr=sr, units='time')
res = {'duration': round(len(y) / sr, 3), 'tempo': float(np.atleast_1d(tempo)[0]), 'beats': [round(float(b), 3) for b in beats]}
rms = librosa.feature.rms(y=y, hop_length=2205)[0]
on = librosa.onset.onset_detect(y=y, sr=sr, units='time', backtrack=False)
res['onsets'] = [round(float(t), 3) for t in on]
# high band energy per 100 ms (tick-tock percussion shows up here when vocals stop)
S = np.abs(librosa.stft(y, n_fft=2048, hop_length=2205)); f = librosa.fft_frequencies(sr=sr, n_fft=2048)
res['hi_db_per_100ms'] = [round(float(20 * np.log10(v + 1e-9)), 1) for v in S[f > 3000].mean(0)]
res['rms_db_per_100ms'] = [round(float(20 * np.log10(v + 1e-9)), 1) for v in rms]

if SEGS:
    from faster_whisper import WhisperModel
    model = WhisperModel('medium.en', device='cpu', compute_type='int8')
    res['segments'] = []
    for a, b in SEGS:
        seg = out / f'seg_{a}.wav'
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', str(a), '-t', str(b - a), '-i', str(wav), str(seg)], check=True)
        for vad in (False, True):
            segs, _ = model.transcribe(str(seg), language='en', word_timestamps=True, vad_filter=vad, beam_size=5,
                                       initial_prompt=PROMPT or None, condition_on_previous_text=False)
            ws = [{'w': w.word.strip(), 's': round(a + w.start, 2), 'e': round(a + w.end, 2), 'p': round(w.probability, 2)} for sg in segs for w in (sg.words or [])]
            res['segments'].append({'from': a, 'to': b, 'vad': vad, 'words': ws})
            print(a, b, vad, ' '.join(w['w'] for w in ws))
    (out / 'transcript.json').write_text(json.dumps(res, indent=1))
    sys.exit(0)

vocals = None
try:
    subprocess.run([sys.executable, '-m', 'demucs', '--two-stems', 'vocals', '-n', 'htdemucs', '-o', str(out / 'sep'), str(wav)], check=True, timeout=1500)
    vocals = next((out / 'sep').rglob('vocals.wav'))
except Exception as e:
    res['demucs_error'] = str(e)[:300]

if vocals:
    yv, _ = librosa.load(str(vocals), sr=22050, mono=True)
    rv = librosa.feature.rms(y=yv, hop_length=2205)[0]
    res['vocals_rms_db_per_100ms'] = [round(float(20 * np.log10(v + 1e-9)), 1) for v in rv]
    # what is left without the voice: music, claps and the tick-tock in the quiz breaks
    acc = next((out / 'sep').rglob('no_vocals.wav'), None)
    if acc:
        ya, _ = librosa.load(str(acc), sr=22050, mono=True)
        res['accomp_onsets'] = [round(float(t), 3) for t in librosa.onset.onset_detect(y=ya, sr=22050, units='time')]

from faster_whisper import WhisperModel
model = WhisperModel('medium.en', device='cpu', compute_type='int8')
prompt = TOPIC or 'A cheerful children\'s song about the parts of a plant: roots, stem, leaves, flower, seeds, sunlight, water, air, soil.'
def run(path):
    segs, _ = model.transcribe(str(path), language='en', word_timestamps=True, vad_filter=False, beam_size=5,
                               initial_prompt=prompt, condition_on_previous_text=False)
    return [{'start': round(s.start, 2), 'end': round(s.end, 2), 'text': s.text.strip(),
             'words': [{'w': w.word.strip(), 's': round(w.start, 2), 'e': round(w.end, 2), 'p': round(w.probability, 2)} for w in (s.words or [])]} for s in segs]
res['mix'] = run(wav)
if vocals: res['vocals'] = run(vocals)
(out / 'transcript.json').write_text(json.dumps(res, indent=1))
for k in ('mix', 'vocals'):
    for s in res.get(k, []): print(k, s['start'], s['end'], s['text'])
