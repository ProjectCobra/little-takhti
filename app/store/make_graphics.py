"""Makes the Google Play graphics from the app build (app/www) with Playwright.
   python3 app/build_www.py && python3 app/store/make_graphics.py
Writes app/store/feature-graphic.png (1024x500), icon-512.png and screenshots/ for phone, 7-inch and 10-inch tablets."""
import os, threading, http.server, functools, shutil
from playwright.sync_api import sync_playwright
from PIL import Image
STORE = os.path.dirname(os.path.abspath(__file__))
APP = os.path.dirname(STORE)
WWW, PDFS, OUT = os.path.join(APP, 'www'), os.path.join(APP, '..', 'site', 'pdf'), os.path.join(STORE, 'screenshots')
H = functools.partial(type('Q', (http.server.SimpleHTTPRequestHandler,), {'log_message': lambda *a: None}), directory=WWW)
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), H); threading.Thread(target=srv.serve_forever, daemon=True).start()
BASE = f'http://127.0.0.1:{srv.server_address[1]}/'
shutil.rmtree(OUT, ignore_errors=True); os.makedirs(OUT)

# name: (css width, css height, scale) -> 1080x1920, 1200x1920, 1600x2560, 2560x1600
DEVICES = {'phone': (360, 640, 3), 'tablet7': (600, 960, 2), 'tablet10': (800, 1280, 2), 'tablet10-land': (1280, 800, 2)}
SHOTS = [('1-home', '#home', None), ('2-play', '#kids', None), ('4-topic', '#res-maths-t2', None),
         ('5-week', '#class', None), ('6-worksheet', '#res-maths-t2', 'viewer'), ('3-quiz', '#play-maths-t2', 'quiz')]  # quiz last: it guards leaving

def new_page(b, w, h, s):
    ctx = b.new_context(viewport={'width': w, 'height': h}, device_scale_factor=s, is_mobile=w < 1000, has_touch=True)
    def rt(r):
        u = r.request.url
        if u.startswith('https://littletakhti.netlify.app/pdf/'):
            return r.fulfill(path=os.path.join(PDFS, u.split('/pdf/')[1]), content_type='application/pdf')
        return r.continue_() if u.startswith(BASE) or u.startswith('blob:') or u.startswith('data:') else r.abort()
    ctx.route('**/*', rt)
    ctx.add_init_script("localStorage.setItem('lt-gradeAsked','1');localStorage.setItem('lt-grade','\"g1\"');")
    pg = ctx.new_page(); pg.goto(BASE); pg.wait_for_timeout(1000)
    pg.evaluate("document.fonts.ready")
    return ctx, pg

with sync_playwright() as p:
    b = p.chromium.launch()
    for dev, (w, h, s) in DEVICES.items():
        ctx, pg = new_page(b, w, h, s)
        for name, route, extra in SHOTS:
            if dev == 'tablet10-land' and name not in ('1-home', '2-play', '4-topic', '6-worksheet'): continue
            pg.evaluate("document.getElementById('ltn-viewer')&&document.querySelector('#ltn-viewer [data-v=close]').click()")
            pg.evaluate(f"location.hash='{route}'"); pg.wait_for_timeout(700)
            if extra == 'quiz':
                pg.click('[data-start]'); pg.wait_for_timeout(700)
            if extra == 'viewer':
                pg.click('#app .detail [data-print]'); pg.wait_for_timeout(3500)
            pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(200)
            pg.screenshot(path=os.path.join(OUT, f'{dev}-{name}.png'))
        ctx.close()
    # feature graphic: uses the phone home screenshot
    fg = f'''<html><head><meta charset="utf-8"><link rel="stylesheet" href="fonts/fonts.css"><style>
    body{{margin:0;width:1024px;height:500px;overflow:hidden;background:#123B28;font-family:Lexend,sans-serif;position:relative}}
    .sun{{position:absolute;right:-120px;top:-160px;width:560px;height:560px;border-radius:50%;background:#1d5a3d}}
    .txt{{position:absolute;left:64px;top:92px;width:520px;color:#fff}}
    .logo{{display:flex;align-items:center;gap:16px}} .logo svg{{width:84px;height:84px}}
    h1{{font-family:"Baloo 2";font-weight:800;font-size:64px;margin:0;line-height:1}}
    p{{font-size:27px;line-height:1.35;margin:26px 0 22px;color:#FFFBEA}} p b{{color:#FFD93B;font-weight:700}}
    .ur{{font-family:"Noto Nastaliq Urdu";font-size:26px;color:#FFD93B;direction:rtl;text-align:left;line-height:2}}
    .ph{{position:absolute;right:92px;top:44px;width:250px;height:444px;border-radius:34px;background:#0b2618;padding:10px;box-shadow:0 30px 60px -20px rgba(0,0,0,.6);transform:rotate(4deg)}}
    .ph img{{width:100%;height:100%;border-radius:26px;object-fit:cover;object-position:top}}
    .chip{{position:absolute;background:#FFD93B;color:#123B28;font-weight:700;font-size:20px;border-radius:999px;padding:10px 20px;box-shadow:0 10px 24px -10px rgba(0,0,0,.5)}}
    </style></head><body><div class="sun"></div>
    <div class="txt"><div class="logo"><svg viewBox="0 0 220 220"><rect width="220" height="220" rx="50" fill="#FFD93B"/><rect x="88" y="34" width="44" height="34" rx="13" fill="#123B28"/><circle cx="110" cy="50" r="6" fill="#FFD93B"/><rect x="46" y="58" width="128" height="128" rx="32" fill="#123B28"/><path d="M80 112c12 20 48 20 60 0" fill="none" stroke="#FFD93B" stroke-width="13" stroke-linecap="round"/><circle cx="110" cy="156" r="10" fill="#FFD93B"/></svg><h1>Little Takhti</h1></div>
    <p>Free <b>worksheets</b>, <b>quiz games</b> and parent guides for Nursery to Grade 3</p>
    <div class="ur">ننھے قدم، اونچی اڑان</div></div>
    <div class="ph"><img src="_fg.png"></div>
    <div class="chip" style="right:330px;top:330px">No ads</div><div class="chip" style="right:40px;top:400px">Works offline</div>
    </body></html>'''
    fgp = os.path.join(WWW, '_fg.html'); open(fgp, 'w').write(fg); shutil.copy(os.path.join(OUT, 'phone-2-play.png'), os.path.join(WWW, '_fg.png'))
    pg = b.new_page(viewport={'width': 1024, 'height': 500}); pg.goto(BASE + '_fg.html'); pg.wait_for_timeout(500); pg.evaluate('document.fonts.ready'); pg.wait_for_timeout(800)
    pg.screenshot(path=os.path.join(STORE, 'feature-graphic.png')); os.remove(fgp); os.remove(os.path.join(WWW, '_fg.png'))
    b.close()

Image.open(os.path.join(APP, 'assets', 'icon-only.png')).convert('RGB').resize((512, 512), Image.LANCZOS).save(os.path.join(STORE, 'icon-512.png'))
for f in sorted(os.listdir(OUT)):
    im = Image.open(os.path.join(OUT, f)); print(f, im.size)
print('feature-graphic.png', Image.open(os.path.join(STORE, 'feature-graphic.png')).size)
