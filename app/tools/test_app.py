"""Tests the app build (app/www) in a browser with no internet.
   python3 app/tools/test_app.py
Checks: pages open offline at phone and tablet sizes, no sideways scroll, no script errors, no request
leaves the device except worksheet PDFs, parent PIN (set, wrong, forgot), external links gated,
worksheet viewer renders a PDF. Exits 1 on problems."""
import sys, threading, http.server, functools, os
from playwright.sync_api import sync_playwright
APP = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
ROOT, PDFS = os.path.join(APP, 'www'), os.path.join(APP, '..', 'site', 'pdf')
H = functools.partial(type('Q', (http.server.SimpleHTTPRequestHandler,), {'log_message': lambda *a: None}), directory=ROOT)
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), H); threading.Thread(target=srv.serve_forever, daemon=True).start()
BASE = f'http://127.0.0.1:{srv.server_address[1]}/'
problems, outside = [], []

def ctx_for(b, w, h):
    ctx = b.new_context(viewport={'width': w, 'height': h}, is_mobile=w < 900, has_touch=True)
    def rt(r):
        u = r.request.url
        if u.startswith('https://littletakhti.com/pdf/'):
            f = os.path.join(PDFS, u.split('/pdf/')[1])
            if os.path.exists(f): return r.fulfill(path=f, content_type='application/pdf')
        if u.startswith(BASE) or u.startswith('blob:') or u.startswith('data:'): return r.continue_()
        outside.append(u); r.abort()
    ctx.route('**/*', rt)
    ctx.add_init_script("localStorage.setItem('lt-gradeAsked','1');localStorage.setItem('lt-grade','\"g1\"');")
    pg = ctx.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(BASE); pg.wait_for_timeout(900)
    return ctx, pg, errs

def pin(pg, digits):
    for d in digits: pg.click(f'#ltn-pin [data-k="{d}"]'); pg.wait_for_timeout(60)
    pg.wait_for_timeout(400)

with sync_playwright() as p:
    b = p.chromium.launch()
    for w, h in ((412, 915), (800, 1280), (1280, 800)):
        ctx, pg, errs = ctx_for(b, w, h)
        routes = ['#home', '#class', '#kids', '#quiz', '#fun', '#powerups', '#stories', '#map', '#privacy']
        routes += pg.evaluate("subjectsOf(grade).map(s=>'#subject-'+s.id)")
        routes += pg.evaluate("RES.filter((r,i)=>i%25===0).map(r=>'#res-'+r.id)")
        for r in routes:
            pg.evaluate(f"location.hash='{r}'"); pg.wait_for_timeout(120)
            sw = pg.evaluate('document.documentElement.scrollWidth')
            if sw > w + 1: problems.append(f'{w}px {r}: scrolls sideways ({sw}px)')
        if not pg.evaluate("getComputedStyle(document.querySelector('.tabbar')).display!=='none'"): problems.append(f'{w}px: no tab bar')
        if pg.evaluate("[...document.fonts].filter(f=>f.status==='error').length"): problems.append(f'{w}px: fonts failed to load')
        for e in errs: problems.append(f'{w}px script error: {e}')
        ctx.close()

    # parent PIN flow (phone)
    ctx, pg, errs = ctx_for(b, 412, 915)
    pg.evaluate("location.hash='#parents'"); pg.wait_for_timeout(400)
    if not pg.query_selector('#ltn-pin'): problems.append('PIN: Parents not gated')
    pin(pg, '1234'); pin(pg, '1234')
    if pg.query_selector('#ltn-pin') or not pg.query_selector('#ltn-appset'): problems.append('PIN: set PIN did not open Parents')
    pg.click('[data-ltn="lock"]'); pg.wait_for_timeout(300)
    pg.evaluate("location.hash='#account'"); pg.wait_for_timeout(300)
    pin(pg, '9999')
    if 'not right' not in (pg.text_content('#ltn-pin .ltn-err') or ''): problems.append('PIN: wrong PIN accepted')
    pg.click('#ltn-pin [data-k="forgot"]'); pg.wait_for_timeout(200)
    q = pg.text_content('#ltn-pin .ltn-ans').split('=')[0]
    a, rest = q.split('×'); bb, c = rest.split('+'); ans = int(a) * int(bb) + int(c)
    for d in str(ans): pg.click(f'#ltn-pin [data-k="{d}"]')
    pg.click('#ltn-pin [data-k="go"]'); pg.wait_for_timeout(200)
    if 'new PIN' not in pg.text_content('#ltn-pin h2'): problems.append('PIN: forgot path did not allow a new PIN')
    pin(pg, '4321'); pin(pg, '4321')
    if pg.query_selector('#ltn-pin') or pg.evaluate("location.hash")!='#account': problems.append('PIN: new PIN did not open account')
    # external link is gated after locking
    pg.evaluate("LTN.lockNow()"); pg.evaluate("location.hash='#kids'"); pg.wait_for_timeout(300)
    pg.evaluate("document.querySelector('#app').insertAdjacentHTML('beforeend','<a id=\"xl\" href=\"https://example.com/\">x</a>')")
    pg.click('#xl'); pg.wait_for_timeout(300)
    if not pg.query_selector('#ltn-pin'): problems.append('External link opened without PIN')
    pg.click('#ltn-pin [data-k="cancel"]')
    # worksheet viewer
    pg.evaluate("location.hash='#res-maths-t2'"); pg.wait_for_timeout(400)
    pg.click('#app .detail [data-print]'); pg.wait_for_timeout(4000)
    n = pg.evaluate("document.querySelectorAll('#ltn-viewer .ltn-pg img').length")
    if n < 1: problems.append('Viewer: no page rendered')
    pg.screenshot(path='/tmp/lt-viewer.png')
    for e in errs: problems.append(f'flow script error: {e}')
    ctx.close(); b.close()

out = sorted(set(u for u in outside if 'netlify.app/pdf/' not in u))
if out: problems.append('Requests leaving the device: ' + ', '.join(out[:5]))
print('\n'.join(problems) if problems else 'app tests passed')
sys.exit(1 if problems else 0)
