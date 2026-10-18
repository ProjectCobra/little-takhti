import re, sys, os, json
from playwright.sync_api import sync_playwright

SITE = '/home/claude/little-takhti'
SP = os.path.dirname(os.path.abspath(__file__))
F = SP + '/fonts/node_modules/@fontsource'
faces = []
def face(fam, path, w):
    faces.append(f"@font-face{{font-family:'{fam}';src:url('file://{path}') format('woff2');font-weight:{w};font-display:block}}")
for w in (600, 700, 800):
    face('Baloo 2', f'{F}/baloo-2/files/baloo-2-latin-{w}-normal.woff2', w)
for w in (400,500,600,700):
    face('Lexend', f'{F}/lexend/files/lexend-latin-{w}-normal.woff2', w)
face('Noto Naskh Arabic', f'{F}/noto-naskh-arabic/files/noto-naskh-arabic-arabic-700-normal.woff2', 700)
for w in (500,600,700,800,900):
    face('Nunito', f'{F}/nunito/files/nunito-latin-{w}-normal.woff2', w)
for w in (400, 700):
    face('Andika', f'{F}/andika/files/andika-latin-{w}-normal.woff2', w)
    face('Noto Nastaliq Urdu', f'{F}/noto-nastaliq-urdu/files/noto-nastaliq-urdu-arabic-{w}-normal.woff2', w)
html = open(SITE + '/index.html').read()
html = re.sub(r'<link id="gfonts"[^>]*>', '<style>' + ''.join(faces) + '</style>', html)
doc = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0">' + html + '</body></html>'
local = SP + '/local.html'
open(local, 'w').write(doc)

mode = sys.argv[1] if len(sys.argv) > 1 else 'check'
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1280, 'height': 900})
    errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('file://' + local)
    pg.wait_for_timeout(800)
    ids = pg.evaluate('RES.map(r=>r.id)')
    if mode == 'check':
        # overflow check: render every sheet (worksheet + key) at full size
        over = pg.evaluate('''()=>{const out=[];const box=document.createElement('div');document.body.appendChild(box);
          for(const s of SUBJECTS){PAGES[s.id].forEach((p,i)=>{for(const k of [false,true]){box.innerHTML=sheetHTML(s.id,i,k);
            const b=box.querySelector('.sh-body');if(b.scrollHeight>b.clientHeight+1)out.push([s.id,i+1,k,b.scrollHeight-b.clientHeight]);
            const br=b.getBoundingClientRect();for(const el of b.querySelectorAll('*')){const r=el.getBoundingClientRect();if(r.width&&(r.right>br.right+1||r.left<br.left-1)){out.push(['W',s.id,i+1,k,el.className]);break}}}})}box.remove();return out}''')
        print('overflow:', over)
        print('errors:', errs)
        os.makedirs(SP + '/shots', exist_ok=True)
        for h in ['home', 'subject-urdu', 'res-maths-set', 'class']:
            pg.goto('file://' + local + '#' + h); pg.wait_for_timeout(500)
            pg.screenshot(path=f'{SP}/shots/{h}.png', full_page=False)
        m = b.new_page(viewport={'width': 390, 'height': 844}, device_scale_factor=2)
        m.goto('file://' + local + '#home'); m.wait_for_timeout(600)
        m.screenshot(path=f'{SP}/shots/mobile.png')
        print('hscroll mobile:', m.evaluate('document.documentElement.scrollWidth'))
    elif mode == 'sheets':
        os.makedirs(SP + '/sheets', exist_ok=True)
        for sid in sys.argv[2].split(','):
            sub, n = sid.rsplit('-', 1)
            pg.set_viewport_size({'width': 800, 'height': 1130})
            pg.evaluate(f'''()=>{{let x=document.getElementById('x');if(!x){{x=document.createElement('div');x.id='x';x.style.cssText='position:fixed;top:0;left:0;z-index:99999';document.body.appendChild(x)}}x.innerHTML=sheetHTML('{sub}',{int(n)-1},{str(len(sys.argv)>3).lower()})}}''')
            pg.wait_for_timeout(300)
            pg.screenshot(path=f'{SP}/sheets/{sid}.png', clip={'x': 0, 'y': 0, 'width': 794, 'height': 1123})
    elif mode == 'pdf':
        os.makedirs(SITE + '/pdf', exist_ok=True)
        for rid in ids:
            pg.goto('file://' + local + '#print-' + rid); pg.wait_for_timeout(250)
            pg.evaluate('document.fonts.ready')
            pg.pdf(path=f'{SITE}/pdf/little-takhti-{rid}.pdf', format='A4', print_background=True, prefer_css_page_size=True, margin={'top': '0', 'bottom': '0', 'left': '0', 'right': '0'})
        print('pdfs:', len(ids), 'errors:', errs)
    b.close()

if mode == 'zoom':
    with sync_playwright() as p:
        b = p.chromium.launch(); pg = b.new_page()
        pg.goto('file://' + local); pg.wait_for_timeout(1000)
        z = pg.evaluate('''()=>{const box=document.createElement('div');document.body.appendChild(box);const out={};
          for(const k in ZOOM)delete ZOOM[k];const fits=(sid,i,zz)=>[false,true].every(k=>{ZOOM[sid+'-'+(i+1)]=zz;box.innerHTML=sheetHTML(sid,i,k);const b=box.querySelector('.sh-body'),c=box.querySelector('.sh-in');const br=b.getBoundingClientRect();if(c.getBoundingClientRect().height>b.clientHeight-8)return false;for(const el of c.querySelectorAll('*')){const r=el.getBoundingClientRect();if(r.width&&(r.right>br.right+1||r.left<br.left-1))return false}return true});
          for(const s of SUBJECTS)PAGES[s.id].forEach((p,i)=>{let lo=1,hi=1.45;if(!fits(s.id,i,1)){out[s.id+'-'+(i+1)]=1;return}
            for(let n=0;n<10;n++){const m=(lo+hi)/2;fits(s.id,i,m)?lo=m:hi=m}out[s.id+'-'+(i+1)]=Math.floor(lo*100)/100});box.remove();return out}''')
        b.close()
    print(z)
    h = open(SITE + '/src/render.js').read()
    h = re.sub(r'const ZOOM=\{[^}]*\};', 'const ZOOM=' + json.dumps(z, separators=(',', ':')) + ';', h)
    open(SITE + '/src/render.js', 'w').write(h)
    import subprocess; subprocess.run(['python3', SITE + '/src/build.py'])
