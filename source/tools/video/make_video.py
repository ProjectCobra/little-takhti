#!/usr/bin/env python3
"""Little Takhti lesson videos, built from the same topic data as the worksheets.

usage: python3 source/tools/video/make_video.py science-t11 [g2-maths-t3 ...]
       VOICE=0 to skip the voiceover (silent preview with timed scenes)

Needs: source/index.html (run source/src/build.py first), playwright + chromium, ffmpeg,
       fonts from source/tools/setup.sh, and edge-tts for the voice (pip install edge-tts).
Writes: source/tools/video/out/<id>/lesson.mp4, thumb.jpg, meta.json
"""
import asyncio, json, os, re, subprocess, sys, shutil, html
from pathlib import Path
from playwright.sync_api import sync_playwright

HERE = Path(__file__).resolve().parent
SRC = HERE.parent.parent            # source/
OUT = HERE / 'out'
IMG = SRC / 'img'
FONTS = SRC / 'tools' / 'fonts' / 'node_modules' / '@fontsource'
W, H, FPS = 1920, 1080, 30
VOICE_ON = os.environ.get('VOICE', '1') != '0'
VOICES = {'en': 'en-GB-SoniaNeural', 'ur': 'ur-PK-UzmaNeural'}
SITE = 'littletakhti.netlify.app'

EXTRACT = r"""(id)=>{
 const r=RID[id];if(!r)return null;const s=SUB[r.sub],k=s.topics.indexOf(r.topic),ur=!!s.rtl;
 const g=(GUIDE[s.id]||[])[k]||['',[],[],''];const plan=(PLAN[s.id]||[]).find(p=>p&&p[0]===r.topic)||[];
 const strip=t=>String(t||'').replace(/<span class="qbl"><\/span>/g,'____').replace(/<span class="qarrow">→<\/span>/g,'→').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
 const fillAns=t=>String(t).replace(/\{\{([^}]*)\}\}/g,(m,a)=>a.split('|')[0]);
 let idea=null;const ex=[];
 r.pages.forEach(i=>{const p=PAGES[s.id][i];(p.blocks||[]).forEach(b=>{
   if(b.t==='concept'&&!idea)idea={text:b.text,img:b.img||[],title:b.title||''};
   if(b.t==='fill'&&b.img&&ex.length<4)b.items.forEach((it,j)=>{if(ex.length<4&&b.img[j])ex.push({img:b.img[j],text:fillAns(it)})});
 })});
 if(ex.length<3)r.pages.forEach(i=>{const p=PAGES[s.id][i];(p.blocks||[]).forEach(b=>{if(b.t==='fill'&&!b.img)b.items.slice(0,2).forEach(it=>{if(ex.length<4&&/\{\{/.test(it))ex.push({img:null,text:fillAns(it)})})})});
 let qs=[];try{qs=buildQuiz(r).filter(q=>q.opts&&q.opts.length>=2)}catch(e){}
 const pick=[...qs.filter(q=>q.kind==='fill'),...qs.filter(q=>q.kind!=='fill')].slice(0,3).map(q=>({q:strip(q.q),sub:strip(q.sub||''),opts:q.opts.slice(0,3).includes(q.ans)?q.opts.slice(0,3):[q.ans,...q.opts.filter(o=>o!==q.ans).slice(0,2)],ans:q.ans}));
 const story=plan[4]||null;
 return {id:r.id,sub:s.id,kind:s.kind,grade:GR[s.grade].name,gradeId:s.grade,subject:s.name,ur,topic:r.topic,topicEn:ur?(UR_EN[r.topic]||''):'',
  what:g[0]||'',steps:g[1]||[],watch:g[3]||'',idea,ex,qs:pick,story,obj:(r.obj||[]).slice(0,4),
  colour:getComputedStyle(document.documentElement).getPropertyValue('--k-'+s.kind).trim()||'#1F7A4C'}}"""


def font_css():
    def ff(fam, file, w):
        p = FONTS / fam / 'files' / file
        return f"@font-face{{font-family:'{fam}';src:url('{p.as_uri()}') format('woff2');font-weight:{w}}}" if p.exists() else ''
    return ''.join([ff('baloo-2', 'baloo-2-latin-800-normal.woff2', 800), ff('baloo-2', 'baloo-2-latin-700-normal.woff2', 700),
                    ff('lexend', 'lexend-latin-500-normal.woff2', 500), ff('lexend', 'lexend-latin-700-normal.woff2', 700),
                    ff('noto-nastaliq-urdu', 'noto-nastaliq-urdu-arabic-400-normal.woff2', 400), ff('noto-nastaliq-urdu', 'noto-nastaliq-urdu-arabic-700-normal.woff2', 700)])


def img(name, size):
    p = IMG / f'{name}.svg'
    return f'<img src="{p.as_uri()}" style="width:{size}px;height:{size}px">' if name and p.exists() else ''


LOGO = '''<svg viewBox="0 0 64 64" width="64" height="64"><rect width="64" height="64" rx="16" fill="#123B28"/><rect x="14" y="14" width="36" height="40" rx="8" fill="#FFD93B"/><rect x="26" y="8" width="12" height="10" rx="3" fill="#FFD93B"/><circle cx="26" cy="32" r="3" fill="#123B28"/><circle cx="38" cy="32" r="3" fill="#123B28"/><path d="M25 40q7 6 14 0" stroke="#123B28" stroke-width="3" fill="none" stroke-linecap="round"/></svg>'''


def page(d, body, caption='', kicker=''):
    ur = d['ur']
    fam = "'noto-nastaliq-urdu'" if ur else "'lexend'"
    cap = f'<div class="cap" dir="{"rtl" if ur else "ltr"}">{html.escape(caption)}</div>' if caption else ''
    return f'''<!doctype html><html><head><meta charset="utf-8"><style>{font_css()}
*{{box-sizing:border-box;margin:0}}body{{width:{W}px;height:{H}px;overflow:hidden;background:#fff;font-family:'lexend',sans-serif;color:#123B28;position:relative}}
.top{{position:absolute;left:70px;right:70px;top:46px;display:flex;align-items:center;gap:18px}}
.brand{{font-family:'baloo-2';font-weight:800;font-size:40px}}
.pill{{margin-left:auto;font-weight:700;font-size:28px;padding:10px 26px;border-radius:999px;background:{d['colour']};color:#fff}}
.stage{{position:absolute;left:110px;right:110px;top:160px;bottom:{170 if caption else 90}px;display:flex;flex-direction:column;justify-content:center}}
.card{{background:#F2F7F3;border-radius:40px;padding:60px 70px;border-bottom:8px solid #DCE8DD}}
h1{{font-family:'baloo-2';font-weight:800;font-size:110px;line-height:1.02;letter-spacing:-1px}}
h2{{font-family:'baloo-2';font-weight:800;font-size:72px;line-height:1.1}}
.kick{{font-weight:700;font-size:30px;letter-spacing:2px;text-transform:uppercase;color:{d['colour']};margin-bottom:14px}}
p.big{{font-size:46px;line-height:1.45;font-weight:500}}
.ur{{font-family:'noto-nastaliq-urdu';direction:rtl;line-height:2.1}}
.cap{{position:absolute;left:110px;right:110px;bottom:46px;font-family:{fam};font-size:{30 if ur else 32}px;line-height:{1.9 if ur else 1.35};color:#3E5C4B;background:#fff;border:2px solid #E1EAE2;border-radius:22px;padding:14px 28px;text-align:center}}
.opt{{max-width:1380px;display:flex;align-items:center;gap:24px;font-size:48px;font-weight:700;padding:22px 34px;border-radius:26px;border:3px solid #DCE8DD;border-bottom-width:8px;background:#fff;margin-top:20px}}
.opt b{{display:grid;place-items:center;width:70px;height:70px;border-radius:18px;background:#FFD93B;font-family:'baloo-2';font-size:44px;flex:none}}
.opt.ok{{border-color:#1F7A4C;background:#E6F4EA}}.opt.ok b{{background:#1F7A4C;color:#fff}}
.timer{{position:absolute;inset-inline-end:0;top:-10px;width:170px;height:170px;border-radius:50%;background:#FFD93B;display:grid;place-items:center;font-family:'baloo-2';font-weight:800;font-size:110px}}
.yel{{position:absolute;width:520px;height:520px;border-radius:50%;background:#FFD93B;right:-120px;bottom:-160px;z-index:-1}}
</style></head><body><div class="top">{LOGO}<span class="brand">Little Takhti</span><span class="pill">{html.escape(d['grade'])} · {html.escape(d['subject'])}</span></div>
<div class="stage" dir="{'rtl' if ur else 'ltr'}">{body}</div>{cap}</body></html>'''


def is_ur(s):
    """mostly Urdu script? (mixed English sentences with one Urdu word stay left to right)"""
    a = len(re.findall('[\u0600-\u06FF]', s or '')); l = len(re.findall('[A-Za-z]', s or ''))
    return a > l


def T(d, s):
    """wrap Urdu text in the Urdu font"""
    return f'<span class="ur">{html.escape(s)}</span>' if d['ur'] and re.search('[؀-ۿ]', s) else html.escape(s)


def scenes(d):
    ur = d['ur']
    S = []  # (name, html, narration, extra_seconds)
    topic = d['topic']
    hello = (f'ہیلو بچو! آج ہم سیکھیں گے: {topic}۔' if ur else f"Hello! Today in {d['grade']} {d['subject']}, we are learning about {topic}.")
    tpic = (d['idea'] or {}).get('img', [None])[0] if d['idea'] and d['idea'].get('img') else (d['ex'][0]['img'] if d['ex'] and d['ex'][0]['img'] else None)
    S.append(('title', page(d, f'''<div class="yel"></div>{f'<div style="position:absolute;right:120px;bottom:40px">{img(tpic, 380)}</div>' if tpic else ''}<div class="kick">Today's lesson</div><h1 style="max-width:1300px">{T(d, topic)}</h1>
      {f'<p class="big" style="margin-top:20px;color:#3E5C4B">{html.escape(d["topicEn"])}</p>' if d['topicEn'] else ''}
      <p class="big" style="margin-top:34px;color:#3E5C4B">{html.escape(d['grade'])} · {html.escape(d['subject'])}</p>'''), hello, 0.6))
    idea = d['idea'] or {'text': d['what'], 'img': [], 'title': ''}
    if idea['text']:
        pics = ''.join(img(i, 190) for i in idea['img'][:4])
        S.append(('idea', page(d, f'''<div class="card"><div class="kick">{'بڑا خیال' if ur else 'Big idea'}{(' · ' + html.escape(idea['title'])) if idea.get('title') else ''}</div>
          {f'<div style="display:flex;gap:30px;margin:10px 0 30px">{pics}</div>' if pics else ''}<p class="big {'ur' if is_ur(idea['text']) else ''}" dir="{'rtl' if is_ur(idea['text']) else 'ltr'}">{html.escape(idea['text'])}</p></div>'''), idea['text'], 0.8))
    for i, e in enumerate(d['ex'][:4]):
        pic = img(e['img'], 380) if e['img'] else ''
        S.append((f'ex{i+1}', page(d, f'''<div style="display:flex;align-items:center;gap:80px">{f'<div class="card" style="padding:50px">{pic}</div>' if pic else ''}
          <div style="flex:1"><div class="kick">{'مثال' if ur else 'Example'} {i+1}</div><h2 class="{'ur' if is_ur(e['text']) else ''}" dir="{'rtl' if is_ur(e['text']) else 'ltr'}">{html.escape(e['text'])}</h2></div></div>'''), e['text'], 0.6))
    for i, q in enumerate(d['qs'][:3]):
        opts = q['opts']
        letters = 'ABC'
        intro = ('اب آپ کی باری! ' if ur else 'Your turn! ') + q['q'].replace('____', 'blank' if not ur else '...')
        say = intro + ' ' + ' '.join((f'{letters[j]}, {o}.' if not ur else f'{o}۔') for j, o in enumerate(opts))
        def qhtml(ok=None, t=None):
            o = ''.join(f'<div class="opt{" ok" if ok is not None and opts[j] == q["ans"] else ""}"><b>{letters[j]}</b><span class="{"ur" if ur and re.search("[؀-ۿ]", oo) else ""}">{html.escape(oo)}</span></div>' for j, oo in enumerate(opts))
            tm = f'<div class="timer">{t}</div>' if t else ''
            return f'''{tm}<div class="kick">{'سوال' if ur else 'Pause and try'} {i+1}</div><h2 class="{'ur' if is_ur(q['q']) else ''}" dir="{'rtl' if is_ur(q['q']) else 'ltr'}" style="max-width:1450px">{html.escape(q['q'])}</h2><div style="margin-top:16px">{o}</div>'''
        S.append((f'q{i+1}', page(d, qhtml()), say, 0.4))
        for t in (5, 4, 3, 2, 1):
            S.append((f'q{i+1}t{t}', page(d, qhtml(t=t), 'سوچیں...' if ur else 'Think...'), None, 1.0))
        ans = (f'صحیح جواب ہے: {q["ans"]}۔' if ur else f"The answer is {q['ans']}. Well done!")
        S.append((f'q{i+1}a', page(d, qhtml(ok=True), ans), ans, 0.6))
    if d['story']:
        title, text = d['story'][0], d['story'][1]
        m = re.split(r'\s*(Ask:|پوچھیں:)\s*', text, maxsplit=1)
        body_t, ask = (m[0], m[2]) if len(m) == 3 else (text, '')
        S.append(('story', page(d, f'''<div class="card"><div class="kick">{'کہانی' if ur else 'Story time'}</div><h2 class="{'ur' if ur else ''}" style="margin-bottom:24px">{html.escape(title)}</h2>
          <p class="big {'ur' if ur else ''}" style="font-size:42px">{html.escape(body_t)}</p></div>''', ''), f'{title}. {body_t}', 0.8))
        if ask:
            S.append(('ask', page(d, f'''<div class="yel"></div><div class="kick">{'سوچیں اور بتائیں' if ur else 'Think and tell'}</div><h1 class="{'ur' if ur else ''}" style="font-size:90px;max-width:1450px">{html.escape(ask)}</h1>''', ''), ask, 3.0))
    pts = [x.strip() for x in re.split(r'(?<=[.۔!?])\s+', d['what']) if x.strip()][:3]
    if pts:
        li = ''.join(f'<div class="opt" style="font-weight:600;font-size:42px"><b>✓</b><span class="{"ur" if ur else ""}">{html.escape(x)}</span></div>' for x in pts)
        S.append(('recap', page(d, f'<div class="kick">{"یاد رکھیں" if ur else "Let us remember"}</div>{li}', ''), (' '.join(pts)), 0.8))
    bye = ('شاباش! مفت ورک شیٹس پرنٹ کریں: لٹل تختی ڈاٹ نیٹلیفائی ڈاٹ ایپ۔' if ur else 'Great work! Print the free worksheets and play the quiz game at little takhti dot netlify dot app. See you next time!')
    S.append(('end', page(d, f'''<div class="yel"></div><div class="kick">Great work!</div><h1 style="font-size:96px">Print the free worksheets</h1>
      <p class="big" style="margin-top:26px">Worksheets, answer keys and a quiz game for this topic:</p><h2 style="margin-top:12px;color:#1F7A4C">{SITE}</h2>''', ''), bye, 1.5))
    return S


VOICE_LOG = []


async def _edge(text, voice, path):
    import edge_tts
    await edge_tts.Communicate(text, voice, rate='-8%').save(str(path))


def tts(text, voice, path):
    """Microsoft neural voice first; Google voice as a backup (also has Urdu)."""
    try:  # separate process: Playwright's sync API already runs an event loop here
        r = subprocess.run([sys.executable, '-m', 'edge_tts', '--voice', voice, '--rate=-8%', '--text', text, '--write-media', str(path)], capture_output=True, text=True, timeout=120)
        if path.exists() and path.stat().st_size > 1000:
            return 'edge'
        VOICE_LOG.append('edge: ' + (r.stderr or '')[-160:])
    except Exception as e:
        VOICE_LOG.append('edge: ' + repr(e)[:160])
    from gtts import gTTS
    lang = 'ur' if voice.startswith('ur') else 'en'
    gTTS(text, lang=lang, tld='co.uk' if lang == 'en' else 'com', slow=False).save(str(path))
    return 'gtts'


def dur(path):
    out = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(path)], capture_output=True, text=True).stdout.strip()
    return float(out or 0)


def build(ids):
    OUT.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        b = p.chromium.launch()
        app = b.new_page()
        app.goto((SRC / 'index.html').as_uri()); app.wait_for_timeout(1000)
        shot = b.new_page(viewport={'width': W, 'height': H})
        for rid in ids:
            d = app.evaluate(EXTRACT, rid)
            if not d:
                print('skip, not found:', rid); continue
            od = OUT / rid; tmp = od / 'tmp'
            shutil.rmtree(od, ignore_errors=True); tmp.mkdir(parents=True)
            S = scenes(d)
            voice = VOICES['ur' if d['ur'] else 'en']
            segs, auds, chapters, t = [], [], [], 0.0
            for n, (name, htm, say, extra) in enumerate(S):
                hf = tmp / f'{n:02d}.html'; hf.write_text(htm, encoding='utf-8')
                shot.goto(hf.as_uri()); shot.wait_for_timeout(250)
                jp = tmp / f'{n:02d}.jpg'; shot.screenshot(path=str(jp), type='jpeg', quality=92)
                a = None; seconds = extra
                if say and VOICE_ON:
                    a = tmp / f'{n:02d}.mp3'
                    try:
                        used = tts(say, voice, a); seconds = dur(a) + extra
                    except Exception as e:
                        VOICE_LOG.append('gtts: ' + repr(e)[:160]); print('voice failed:', e); a = None; used = None
                if say and not a:
                    seconds = max(2.0, len(say.split()) / 2.4) + extra
                seconds = round(max(seconds, 1.0), 2)
                if name in ('title', 'idea', 'ex1', 'q1', 'story', 'recap', 'end'):
                    chapters.append((t, {'title': 'Introduction', 'idea': 'Big idea', 'ex1': 'Examples', 'q1': 'Pause and try', 'story': 'Story time', 'recap': 'Recap', 'end': 'Print the worksheets'}[name]))
                seg = tmp / f'{n:02d}.mp4'; part = tmp / f'{n:02d}.part.mp4'
                fade = '' if name[-2:-1] == 't' else f',fade=t=in:st=0:d=0.25'
                subprocess.run(['ffmpeg', '-y', '-v', 'error', '-framerate', str(FPS), '-i', str(jp), '-vf', f'format=yuv420p,loop=-1:1,trim=duration={seconds}{fade}',
                                '-c:v', 'libx264', '-crf', '18', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', '-r', str(FPS), str(part)], check=True)
                part.rename(seg); segs.append(seg)
                # audio for this scene, padded with silence to the scene length
                aud = tmp / f'{n:02d}.wav'
                if a:
                    subprocess.run(['ffmpeg', '-y', '-v', 'error', '-i', str(a), '-af', f'apad,atrim=0:{seconds}', '-ar', '44100', '-ac', '2', str(aud)], check=True)
                else:
                    subprocess.run(['ffmpeg', '-y', '-v', 'error', '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=stereo', '-t', str(seconds), str(aud)], check=True)
                auds.append(aud); t += seconds
            lst = tmp / 'v.txt'; lst.write_text(''.join(f"file '{s}'\n" for s in segs))
            alst = tmp / 'a.txt'; alst.write_text(''.join(f"file '{s}'\n" for s in auds))
            subprocess.run(['ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', str(lst), '-c', 'copy', str(tmp / 'video.mp4')], check=True)
            subprocess.run(['ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', str(alst), '-c:a', 'pcm_s16le', str(tmp / 'audio.wav')], check=True)
            part = od / 'lesson.part.mp4'
            subprocess.run(['ffmpeg', '-y', '-v', 'error', '-i', str(tmp / 'video.mp4'), '-i', str(tmp / 'audio.wav'), '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '160k', '-shortest', '-movflags', '+faststart', str(part)], check=True)
            part.rename(od / 'lesson.mp4')
            shutil.copy(tmp / '00.jpg', od / 'thumb.jpg')
            mmss = lambda s: f'{int(s // 60)}:{int(s % 60):02d}'
            title = f"{d['topic']}{(' (' + d['topicEn'] + ')') if d['topicEn'] else ''} | {d['grade']} {d['subject']} | Little Takhti"
            desc = (f"{d['grade']} {d['subject']}: {d['topic']}.\n{d['what']}\n\nFree printable worksheets with answer keys and a quiz game for this topic: https://{SITE}/#res-{rid}\n\n"
                    + '\n'.join(f'{mmss(c[0])} {c[1]}' for c in chapters) + f"\n\nFor parents: {d['watch']}\n\n#LittleTakhti #{d['subject'].replace(' ', '')} #{d['grade'].replace(' ', '')}")
            meta = {'id': rid, 'title': title[:100], 'description': desc, 'grade': d['gradeId'], 'subject': d['sub'], 'topic': d['topic'],
                    'duration': round(t, 1), 'madeForKids': True, 'language': 'ur' if d['ur'] else 'en', 'chapters': chapters, 'voice': VOICE_ON, 'voice_errors': sorted(set(VOICE_LOG))[:5]}
            (od / 'meta.json').write_text(json.dumps(meta, ensure_ascii=False, indent=1), encoding='utf-8')
            if os.environ.get('KEEP_TMP') != '1':
                shutil.rmtree(tmp)
            print(f'{rid}: {round(t)}s, {len(S)} scenes -> {od / "lesson.mp4"}')
        b.close()


if __name__ == '__main__':
    build(sys.argv[1:] or ['science-t11'])
