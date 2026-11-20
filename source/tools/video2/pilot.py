"""Animated pilot lesson: KG Maths, Adding to 10.
Usage: python3 source/tools/video2/pilot.py [--frames 3,20,40] [--start S --end E]
VOICE=0 estimates timings without speech (for local previews).
Output: source/tools/video2/out/pilot-kg-maths-t4/{lesson.mp4,thumb.jpg,meta.json}
"""
import json, os, re, subprocess, sys, base64, math, shutil
from pathlib import Path
import numpy as np

HERE = Path(__file__).resolve().parent
SRC = HERE.parent.parent
OUT = HERE / 'out' / 'pilot-kg-maths-t4'
TMP = OUT / 'tmp'
SR = 44100
FPS = 30
VOICE = os.environ.get('VOICE', '1') != '0'
GKEY = os.environ.get('GEMINI_API_KEY', '').strip()
GBASE = 'https://generativelanguage.googleapis.com/v1beta'
G_VOICES = {'N': ('Sulafat', 'Read warmly and clearly, like a kind teacher telling a story to young children, at a gentle pace'),
            'T': ('Leda', 'Say it in a bright, bouncy, playful cartoon character voice, excited and friendly, for little children')}
G_LOG = []
VOICES = {'N': ('en-GB-SoniaNeural', '-6%', '+0Hz'), 'T': ('en-GB-MaisieNeural', '-4%', '+0Hz')}
VOICE_FALLBACK = {'T': ('en-GB-SoniaNeural', '-4%', '+30Hz')}

# (kind, ...) events. say: speaker, key, text
SCRIPT = [
    ('mark', 'intro'), ('wait', 1.7),
    ('say', 'T', 'hi', "Hi friends! I'm Takhti."),
    ('say', 'T', 'today', "Today we are adding numbers, all the way to ten!"), ('wait', 0.8),
    ('mark', 'story'), ('wait', 0.9),
    ('say', 'N', 'basket', "Nana has a big basket."),
    ('say', 'N', 'm4', "She puts in one, two, three, four mangoes."), ('wait', 0.4),
    ('say', 'N', 'z3', "Then Zara adds three more."), ('wait', 1.0),
    ('say', 'T', 'howmany', "How many mangoes now? Let's count!"),
    ('say', 'T', 'count', "Start at four. Then five, six, seven!"), ('wait', 0.3),
    ('say', 'N', 'eq', "Four plus three makes seven."), ('wait', 1.6),
    ('mark', 'hop'), ('wait', 1.0),
    ('say', 'T', 'trick', "Here is another trick. Hop on the number line!"),
    ('say', 'T', 'hop', "Start at four, and hop three times. One! Two! Three!"), ('wait', 0.4),
    ('say', 'T', 'land', "We land on seven!"), ('wait', 1.6),
    ('mark', 'ten'), ('wait', 0.9),
    ('say', 'N', 'ten1', "Now let's make ten. Ten spots fill the frame."), ('wait', 0.3),
    ('say', 'N', 'p73', "Seven and three make ten."), ('wait', 1.0),
    ('say', 'N', 'p64', "Six and four make ten."), ('wait', 1.0),
    ('say', 'N', 'p55', "Five and five make ten!"), ('wait', 1.3),
    ('mark', 'quiz'), ('wait', 0.6),
    ('say', 'T', 'turn', "Your turn! Shout the answer before the time runs out."), ('wait', 0.4),
    ('mark', 'q1'), ('wait', 0.8),
    ('say', 'N', 'q1', "Ali has five kites. He gets three more. How many kites?"),
    ('mark', 'cd1'), ('wait', 5.2),
    ('say', 'N', 'a1', "Eight! Five plus three makes eight."), ('wait', 1.4),
    ('mark', 'q2'), ('wait', 0.8),
    ('say', 'N', 'q2', "Two ducks swim. Four more ducks come. How many ducks?"),
    ('mark', 'cd2'), ('wait', 5.2),
    ('say', 'N', 'a2', "Six! Two plus four makes six."), ('wait', 1.4),
    ('mark', 'q3'), ('wait', 0.8),
    ('say', 'N', 'q3', "Here are nine dots. Nine and how many more make ten?"),
    ('mark', 'cd3'), ('wait', 5.2),
    ('say', 'N', 'a3', "One! Nine and one make ten."), ('wait', 1.4),
    ('mark', 'recap'), ('wait', 0.8),
    ('say', 'T', 'tip', "Great job! Remember, start with the bigger number, then count on."), ('wait', 1.6),
    ('mark', 'end'), ('wait', 0.9),
    ('say', 'T', 'bye', "Find more fun worksheets at Little Takhti. Bye bye!"), ('wait', 2.6),
]


# ---------------- speech ----------------
TTS_HELPER = r'''
import sys, json, asyncio, edge_tts
text, voice, rate, pitch, mp3, js = sys.argv[1:7]
async def go():
    try: c = edge_tts.Communicate(text, voice, rate=rate, pitch=pitch, boundary="WordBoundary")
    except TypeError: c = edge_tts.Communicate(text, voice, rate=rate, pitch=pitch)
    words = []
    with open(mp3, "wb") as f:
        async for ch in c.stream():
            if ch["type"] == "audio": f.write(ch["data"])
            elif ch["type"] == "WordBoundary": words.append({"w": ch["text"], "t": ch["offset"]/1e7, "d": ch["duration"]/1e7})
    json.dump(words, open(js, "w"))
asyncio.run(go())
'''


def decode(path):
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', str(path), '-f', 'f32le', '-ac', '1', '-ar', str(SR), '-'], capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32).copy()


def trim_silence(a, thr=0.012):
    idx = np.where(np.abs(a) > thr)[0]
    if not len(idx): return a, 0.0
    s = max(0, idx[0] - int(0.02 * SR)); e = min(len(a), idx[-1] + int(0.08 * SR))
    return a[s:e], s / SR


def g_req(path, body=None, tries=6):
    import urllib.request, time
    for i in range(tries):
        try:
            req = urllib.request.Request(f'{GBASE}/{path}', data=json.dumps(body).encode() if body is not None else None,
                                         headers={'x-goog-api-key': GKEY, 'Content-Type': 'application/json'})
            with urllib.request.urlopen(req, timeout=300) as r: return json.loads(r.read())
        except Exception as e:
            msg = getattr(e, 'read', lambda: b'')().decode('utf-8', 'ignore')[:300] if hasattr(e, 'read') else ''
            G_LOG.append(f'{path}: {e} {msg}')
            code = getattr(e, 'code', 0)
            if code in (400, 401, 403, 404): raise
            time.sleep(min(60, 6 * (i + 1)))
    raise RuntimeError('gemini failed ' + path)


_GM = {}
def g_models():
    if not _GM:
        out, tok = [], ''
        for _ in range(10):
            r = g_req('models?pageSize=200' + (f'&pageToken={tok}' if tok else ''))
            out += [m['name'].split('/', 1)[1] for m in r.get('models', [])]
            tok = r.get('nextPageToken')
            if not tok: break
        _GM['all'] = out
        G_LOG.append('models: ' + ', '.join(m for m in out if 'tts' in m or 'lyria' in m))
    return _GM['all']


def g_pick(kind):
    ms = g_models()
    c = [m for m in ms if kind in m]
    def ver(m):
        n = re.findall(r'(\d+(?:\.\d+)?)', m); return float(n[0]) if n else 0
    c.sort(key=lambda m: (ver(m), 'pro' not in m, 'preview' not in m), reverse=True)
    return c


def gemini_tts(text, spk):
    import wave, io, time
    voice, style = G_VOICES[spk]
    body = {'contents': [{'parts': [{'text': f'{style}: {text}'}]}],
            'generationConfig': {'responseModalities': ['AUDIO'], 'speechConfig': {'voiceConfig': {'prebuiltVoiceConfig': {'voiceName': voice}}}}}
    last = None
    for m in g_pick('tts')[:3]:
        try:
            r = g_req(f'models/{m}:generateContent', body)
            part = r['candidates'][0]['content']['parts'][0]['inlineData']
            pcm = base64.b64decode(part['data'])
            rate = int(re.findall(r'rate=(\d+)', part.get('mimeType', ''))[0]) if 'rate=' in part.get('mimeType', '') else 24000
            a = np.frombuffer(pcm, dtype='<i2').astype(np.float32) / 32768
            if rate != SR:
                a = np.interp(np.arange(int(len(a) * SR / rate)) * rate / SR, np.arange(len(a)), a).astype(np.float32)
            G_LOG.append(f'tts ok {m} {voice}')
            time.sleep(2)
            return a
        except Exception as e:
            last = e
    raise RuntimeError(f'tts failed: {last}')


def gemini_music(total):
    """instrumental bed from Lyria; returns mono float array at SR or None"""
    prompt = ("Cheerful, gentle instrumental music for a preschool learning cartoon. Ukulele, glockenspiel, soft hand claps, "
              "light pizzicato strings and a warm bass, major key, about 105 BPM, playful and bouncy but calm enough to sit under a voice. "
              "Simple loopable structure, no big drops. Instrumental only, no vocals, no singing.")
    for m in [x for x in g_pick('lyria') if 'realtime' not in x][:3]:
        try:
            body = {'model': m, 'input': prompt + (f' Length about {int(total)+5} seconds.' if 'clip' not in m else '')}
            r = g_req('interactions', body)
            data = None
            for st in r.get('steps', []):
                for c in st.get('content', []) or []:
                    if c.get('type') == 'audio' and c.get('data'): data = c['data']
            if not data: G_LOG.append(f'lyria {m}: no audio {str(r)[:200]}'); continue
            mp3 = TMP / 'music.mp3'; mp3.write_bytes(base64.b64decode(data))
            a = decode(mp3); G_LOG.append(f'lyria ok {m} {len(a)/SR:.1f}s')
            return a
        except Exception as e:
            G_LOG.append(f'lyria {m} failed {e}')
    return None


def loop_to(a, n, xf=2.0):
    if len(a) >= n: return a[:n]
    x = int(xf * SR); out = a.copy()
    while len(out) < n:
        fade = np.linspace(0, 1, x)
        out[-x:] = out[-x:] * (1 - fade) + a[:x] * fade
        out = np.concatenate([out, a[x:]])
    return out[:n]


def speak(key, spk, text):
    if VOICE and GKEY:
        try:
            a, _ = trim_silence(gemini_tts(text, spk))
            dur = len(a) / SR
            return a, even(text.split(), dur), dur
        except Exception as e:
            G_LOG.append(f'tts fallback {key}: {e}')
    return speak_edge(key, spk, text)


def speak_edge(key, spk, text):
    """returns (audio np array or None, words[{w,t,d}] relative to line start, duration)"""
    toks = text.split()
    if VOICE:
        helper = TMP / 'tts_helper.py'; helper.write_text(TTS_HELPER)
        mp3, js = TMP / f'{key}.mp3', TMP / f'{key}.json'
        for v in [VOICES[spk]] + ([VOICE_FALLBACK[spk]] if spk in VOICE_FALLBACK else []):
            r = subprocess.run([sys.executable, str(helper), text, *v, str(mp3), str(js)], capture_output=True, text=True)
            if r.returncode == 0 and mp3.exists() and mp3.stat().st_size > 2000: break
            print('tts fail', key, v[0], r.stderr[-300:])
        a, off = trim_silence(decode(mp3))
        bw = json.loads(js.read_text()) if js.exists() else []
        dur = len(a) / SR
        words = []
        if bw and len(bw) >= len(toks) * 0.6:
            # map boundary words onto display tokens in order
            bi = 0
            for tok in toks:
                n = re.sub(r'[^a-z0-9]', '', tok.lower())
                hit = None
                for j in range(bi, min(bi + 3, len(bw))):
                    if re.sub(r'[^a-z0-9]', '', bw[j]['w'].lower()) == n: hit = j; break
                if hit is None and bi < len(bw): hit = bi
                if hit is not None:
                    words.append({'w': tok, 't': max(0, bw[hit]['t'] - off), 'd': bw[hit]['d']}); bi = hit + 1
                else:
                    words.append({'w': tok, 't': words[-1]['t'] + 0.3 if words else 0, 'd': 0.3})
        else:
            words = even(toks, dur)
        return a, words, dur
    dur = 0.35 + len(toks) / 2.6
    return None, even(toks, dur), dur


def even(toks, dur):
    w = [len(t) + 2 for t in toks]; tot = sum(w); t = 0.05; out = []
    for tok, x in zip(toks, w):
        d = (dur - 0.1) * x / tot; out.append({'w': tok, 't': t, 'd': d}); t += d
    return out


def build_timeline():
    clock = 0.0; lines = {}; marks = {}; voice = []
    for ev in SCRIPT:
        if ev[0] == 'mark': marks[ev[1]] = round(clock, 3)
        elif ev[0] == 'wait': clock += ev[1]
        elif ev[0] == 'say':
            _, spk, key, text = ev
            a, words, dur = speak(key, spk, text)
            lines[key] = {'speaker': spk, 'text': text, 'start': round(clock, 3), 'end': round(clock + dur, 3),
                          'words': [{'w': w['w'], 't': round(clock + w['t'], 3), 'd': round(w['d'], 3)} for w in words]}
            if a is not None: voice.append((clock, a))
            clock += dur + 0.3
    return {'lines': lines, 'marks': marks, 'total': round(clock, 3)}, voice


# ---------------- sound ----------------
def env(n, a=0.005, decay=4.0):
    t = np.arange(n) / SR
    return np.minimum(1, t / a) * np.exp(-t * decay)


def tone(freq, dur, parts=((1, 1, 3), (2, .5, 5), (3, .25, 8)), att=0.004):
    n = int(dur * SR); t = np.arange(n) / SR; y = np.zeros(n)
    for m, g, d in parts: y += g * np.sin(2 * np.pi * freq * m * t) * np.exp(-t * d)
    return y * np.minimum(1, t / att)


def midi(m): return 440 * 2 ** ((m - 69) / 12)


def music(total):
    bpm = 108; beat = 60 / bpm; n = int((total + 2) * SR); y = np.zeros(n)
    chords = [[60, 64, 67], [55, 59, 62], [57, 60, 64], [53, 57, 60]]
    arp = [0, 1, 2, 1, 0, 1, 2, 1]
    mel = [(0, 76), (1, 79), (2, 81), (3, 79), (4, 74), (6, 74), (7, 76), (8, 72), (9, 76), (10, 81), (11, 79), (12, 81), (13, 79), (14, 76)]
    bars = int(total / (4 * beat)) + 2
    def add(start, sig, g):
        i = int(start * SR); j = min(n, i + len(sig))
        if i < n: y[i:j] += g * sig[:j - i]
    for b in range(bars):
        ch = chords[b % 4]; t0 = b * 4 * beat
        for k in range(8):
            notes = ch + [ch[0] + 12]
            add(t0 + k * beat / 2, tone(midi(notes[arp[k]]), 0.6, ((1, 1, 6), (2, .35, 9), (4, .12, 14))), 0.16)
        for k in (0, 2):
            add(t0 + k * beat, tone(midi(ch[0] - 12), 0.9, ((1, 1, 3.5), (2, .25, 6))), 0.30)
        for k in range(8):
            nz = np.random.default_rng(b * 8 + k).standard_normal(int(0.05 * SR))
            nz = np.diff(nz, prepend=0) * env(len(nz), 0.002, 70)
            add(t0 + k * beat / 2 + (beat / 4 if k % 2 else 0), nz, 0.025 if k % 2 else 0.012)
        cyc = (b // 4) % 2
        if cyc == 1:
            for bt, m in mel:
                if bt // 4 == b % 4: pass
            for bt, m in mel:
                if (b % 4) == bt // 4:
                    add(t0 + (bt % 4) * beat, tone(midi(m), 0.7, ((1, 1, 5), (3, .3, 12), (5.4, .15, 18))), 0.09)
    # loop-safe fades
    y[:int(1.0 * SR)] *= np.linspace(0, 1, int(1.0 * SR))
    return y


def sfx_sound(name, p=1.0):
    t = lambda d: np.arange(int(d * SR)) / SR
    if name == 'pop':
        x = t(0.11); f = (380 + 900 * x / 0.11) * p
        return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-x * 38)
    if name == 'ding':
        return tone(midi(79) * p, 1.0, ((1, 1, 4), (2.76, .4, 7), (5.4, .2, 11)))
    if name == 'boing':
        x = t(0.42); f = (200 + 380 * x / 0.42) * p * (1 + 0.08 * np.sin(2 * np.pi * 16 * x))
        return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-x * 7) * np.minimum(1, x / 0.01)
    if name == 'tick':
        x = t(0.08); return (np.sin(2 * np.pi * 1800 * p * x) * 0.6 + np.sin(2 * np.pi * 900 * p * x)) * np.exp(-x * 60)
    if name in ('whoosh', 'swoosh'):
        from scipy.signal import butter, lfilter
        d = 0.55; x = t(d); nz = np.random.default_rng(3).standard_normal(len(x))
        b, a = butter(2, [500 / (SR / 2), 3200 / (SR / 2)], btype='band'); nz = lfilter(b, a, nz)
        return nz * np.sin(np.pi * x / d) ** 2 * 1.4
    if name == 'sparkle':
        y = np.zeros(int(0.9 * SR))
        for i, m in enumerate([88, 91, 95, 93, 100]):
            s = tone(midi(m), 0.5, ((1, 1, 10), (2.76, .3, 16))); k = int(i * 0.07 * SR); y[k:k + len(s)] += s[:len(y) - k] * 0.5
        return y
    if name == 'tada':
        y = np.zeros(int(1.4 * SR))
        for i, m in enumerate([72, 76, 79, 84]):
            s = tone(midi(m), 1.0 if i == 3 else 0.35, ((1, 1, 3), (2, .6, 4), (3, .45, 5), (4, .3, 6)))
            k = int(i * 0.09 * SR); y[k:k + len(s)] += s[:len(y) - k] * 0.55
        sp = sfx_sound('sparkle'); y[int(.3 * SR):int(.3 * SR) + len(sp)] += sp[:len(y) - int(.3 * SR)] * 0.6
        return y
    return np.zeros(10)


def mix_audio(tl, voice, sfxs):
    total = tl['total']; n = int((total + 1) * SR)
    vt = np.zeros(n)
    for st, a in voice:
        i = int(st * SR); j = min(n, i + len(a)); vt[i:j] += a[:j - i]
    if vt.max() > 0: vt *= 0.9 / np.abs(vt).max()
    mu = None
    if GKEY:
        g = gemini_music(total)
        if g is not None:
            g = g / max(1e-6, np.abs(g).max()) * 0.5
            mu = loop_to(g, n)
            mu[-int(2.5 * SR):] *= np.linspace(1, 0, int(2.5 * SR))
    if mu is None: mu = music(total)[:n]
    # ducking from voice activity
    act = np.convolve(np.abs(vt) > 0.02, np.ones(int(0.25 * SR)) / int(0.25 * SR), mode='same')
    act = np.convolve(np.minimum(1, act * 4), np.ones(int(0.3 * SR)) / int(0.3 * SR), mode='same')
    gain = 1 - 0.62 * act
    for c in ('cd1', 'cd2', 'cd3'):
        a, b = int(tl['marks'][c] * SR), int((tl['marks'][c] + 5) * SR); gain[a:b] *= 0.45
    e = int(tl['marks']['end'] * SR); gain[e:] *= 1.15
    fo = int(1.5 * SR); gain[-fo:] *= np.linspace(1, 0, fo)
    out = vt + mu * gain * 0.55
    st = np.zeros(n)
    for t0, name, g, p in sfxs:
        s = sfx_sound(name, p); i = int(t0 * SR)
        if i < 0 or i >= n: continue
        j = min(n, i + len(s)); st[i:j] += s[:j - i] * g
    out += st * 0.32
    out /= max(1.0, np.abs(out).max() / 0.95)
    wav = TMP / 'mix.wav'
    import wave
    with wave.open(str(wav), 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((out * 32767).astype('<i2').tobytes())
    return wav


# ---------------- pictures ----------------
def font_css():
    F = SRC / 'tools' / 'fonts' / 'node_modules' / '@fontsource'
    def ff(fam, f, w):
        p = F / fam / 'files' / f
        return f"@font-face{{font-family:'{fam}';src:url('data:font/woff2;base64,{base64.b64encode(p.read_bytes()).decode()}') format('woff2');font-weight:{w}}}" if p.exists() else ''
    return ff('baloo-2', 'baloo-2-latin-800-normal.woff2', 800) + ff('lexend', 'lexend-latin-500-normal.woff2', 500) + ff('lexend', 'lexend-latin-600-normal.woff2', 600) + ff('lexend', 'lexend-latin-700-normal.woff2', 700)


def page_html(tl):
    logo = 'data:image/svg+xml;base64,' + base64.b64encode((SRC.parent / 'site' / 'favicon.svg').read_bytes()).decode()
    h = (HERE / 'stage.html').read_text()
    return h.replace('__FONTS__', font_css()).replace('__TL__', json.dumps(tl)).replace('__LOGO__', logo)


def main():
    args = sys.argv[1:]
    OUT.mkdir(parents=True, exist_ok=True); TMP.mkdir(parents=True, exist_ok=True)
    tl, voice = build_timeline()
    (TMP / 'timeline.json').write_text(json.dumps(tl, indent=1))
    html = TMP / 'stage.html'; html.write_text(page_html(tl))
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        b = p.chromium.launch(); pg = b.new_page(viewport={'width': 1920, 'height': 1080})
        errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.goto(html.as_uri()); pg.wait_for_timeout(600)
        if errs: print('JS errors:', errs); sys.exit(1)
        if '--frames' in args:
            ts = [float(x) for x in args[args.index('--frames') + 1].split(',')]
            for t in ts:
                pg.evaluate(f'render({t})'); pg.screenshot(path=str(OUT / f'f{t:06.2f}.jpg'), type='jpeg', quality=85)
            print('frames', ts, 'total', tl['total']); return
        sfxs = pg.evaluate('getSfx()')
        wav = mix_audio(tl, voice, sfxs)
        start = float(args[args.index('--start') + 1]) if '--start' in args else 0
        end = float(args[args.index('--end') + 1]) if '--end' in args else tl['total']
        nf = int((end - start) * FPS)
        tmp_mp4 = OUT / 'lesson.part.mp4'
        ff = subprocess.Popen(['ffmpeg', '-v', 'error', '-y', '-f', 'image2pipe', '-framerate', str(FPS), '-c:v', 'mjpeg', '-i', '-',
                               '-ss', str(start), '-t', str(end - start), '-i', str(wav),
                               '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-c:v', 'libx264', '-crf', '20', '-preset', 'veryfast', '-pix_fmt', 'yuv420p',
                               '-c:a', 'aac', '-b:a', '160k', '-ar', '44100', '-shortest', '-movflags', '+faststart', '-f', 'mp4', str(tmp_mp4)], stdin=subprocess.PIPE)
        for i in range(nf):
            t = start + i / FPS
            pg.evaluate(f'render({t:.4f})')
            ff.stdin.write(pg.screenshot(type='jpeg', quality=90))
            if i % 300 == 0: print(f'frame {i}/{nf}', flush=True)
        ff.stdin.close(); assert ff.wait() == 0
        tmp_mp4.rename(OUT / 'lesson.mp4')
        pg.evaluate(f"render({tl['marks']['intro'] + 3.6})"); pg.screenshot(path=str(OUT / 'thumb.jpg'), type='jpeg', quality=90)
        b.close()
    meta = {'id': 'kg-maths-t4', 'title': 'Adding to 10 | KG Maths for Kids | Little Takhti',
            'description': 'Learn to add up to 10 with mangoes, a number line hop and a ten frame, then try a quick quiz. Free worksheets: https://littletakhti.netlify.app',
            'madeForKids': True, 'language': 'en', 'duration': tl['total'], 'gemini_log': G_LOG[-40:]}
    (OUT / 'meta.json').write_text(json.dumps(meta, indent=1))
    if not os.environ.get('KEEP_TMP'): shutil.rmtree(TMP, ignore_errors=True)
    print('done', OUT / 'lesson.mp4', tl['total'])


if __name__ == '__main__':
    main()
