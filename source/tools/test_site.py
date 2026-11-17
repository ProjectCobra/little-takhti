"""Site tests on the built site/ folder.
   python3 source/tools/test_site.py          crawl main pages on desktop and phone + play every quiz
   python3 source/tools/test_site.py crawl    crawl only
   python3 source/tools/test_site.py quiz     quizzes only
Exits with code 1 if anything fails, and prints what failed."""
import sys, os, threading, http.server, functools, json
from playwright.sync_api import sync_playwright
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'site'))
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
H = functools.partial(Q, directory=ROOT)
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), H); PORT = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
BASE = f'http://127.0.0.1:{PORT}/'
BLOCK = ('gstatic', 'googlesyndication', 'googletagmanager', 'googleapis', 'firebase')
mode = sys.argv[1] if len(sys.argv) > 1 else 'all'
problems = []

def page(b, w, h=900):
    ctx = b.new_context(viewport={'width': w, 'height': h}, is_mobile=w < 500, has_touch=w < 500)
    ctx.route('**/*', lambda r: r.abort() if any(x in r.request.url for x in BLOCK) else r.continue_())
    pg = ctx.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    return pg, errs

with sync_playwright() as p:
    b = p.chromium.launch()
    if mode in ('all', 'crawl'):
        for w in (1280, 390, 360):
            pg, errs = page(b, w)
            pg.goto(BASE); pg.wait_for_timeout(1200)
            routes = ['#home', '#quiz', '#fun', '#class', '#parents', '#map', '#help', '#policy', '#search']
            routes += pg.evaluate("['nursery','kg','g1','g2','g3'].flatMap(g=>{setGrade&&setGrade(g,true);return subjectsOf(g).map(s=>'#subject-'+s.id)})")
            routes += pg.evaluate("RES.filter((r,i)=>i%7===0).map(r=>'#res-'+r.id)")
            routes += ['#game-ws', '#game-mem', '#game-spell']
            for r in routes:
                pg.evaluate(f"location.hash='{r}'"); pg.wait_for_timeout(120)
                sw = pg.evaluate('document.documentElement.scrollWidth')
                if sw > w + 1: problems.append(f'{w}px {r}: page scrolls sideways ({sw}px)')
            for e in errs: problems.append(f'{w}px script error: {e}')
            print(f'crawl {w}px: {len(routes)} pages')
    if mode in ('all', 'quiz'):
        pg, errs = page(b, 1280)
        pg.goto(BASE); pg.wait_for_timeout(1200)
        ids = pg.evaluate('RES.filter(r=>hasQuiz(r)).map(r=>r.id)')
        bad = pg.evaluate('''ids=>{const out=[];for(const id of ids){try{const q=buildQuiz(RID[id]);
           if(!q||q.length<3)out.push(id+': only '+(q?q.length:0)+' questions');
           q.forEach((x,i)=>{const o=x.opts||x.options||[];if(new Set(o).size!==o.length)out.push(id+' q'+(i+1)+': repeated option');
             if(/undefined|NaN/.test(JSON.stringify(x)))out.push(id+' q'+(i+1)+': undefined text')})}catch(e){out.push(id+': '+e.message)}}return out}''', ids)
        problems += bad
        # play a sample of quizzes end to end in the real interface
        for id in ids[::12]:
            pg.evaluate("document.getElementById('leaveq')&&document.getElementById('leaveq').remove();if(window.G)G.live=false")
            pg.evaluate(f"location.hash='#play-{id}'"); pg.wait_for_timeout(400)
            try:
                pg.click('[data-start]', timeout=2000)
                for _ in range(60):
                    if pg.locator('.qo').count() == 0: break
                    pg.locator('.qo:not([disabled])').first.click(timeout=8000)
                    try: pg.wait_for_selector('#gn', timeout=2500)
                    except Exception: pass
                    pg.evaluate("document.getElementById('gn')&&document.getElementById('gn').click()"); pg.wait_for_timeout(80)
                if pg.locator('.qo').count(): problems.append(f'quiz {id}: did not reach the end')
            except Exception as e:
                problems.append(f'quiz {id}: could not play through ({str(e)[:80]})')
        for e in errs: problems.append(f'quiz script error: {e}')
        print(f'quizzes: {len(ids)} checked, {len(ids[::12])} played through')
    b.close()

if problems:
    print('PROBLEMS:'); [print(' -', x) for x in problems[:60]]; sys.exit(1)
print('ALL OK')
