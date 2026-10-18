"""Add new resources to seo/data.json and make thumbnails for any resource missing one.
Usage: python3 gen_seo.py <local.html path>"""
import os, sys, json, subprocess
from playwright.sync_api import sync_playwright
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
local = sys.argv[1]
dpath = os.path.join(ROOT, 'seo', 'data.json')
data = json.load(open(dpath)); have = {r['id'] for r in data}
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(); pg.goto('file://' + local); pg.wait_for_timeout(1000)
    new = pg.evaluate('''(have)=>RES.filter(r=>!have.includes(r.id)&&!r.quizOnly).map(r=>{const s=SUB[r.sub],ti=s.topics.indexOf(r.topic),g=(GUIDE[s.id]||[])[r.set?0:Math.max(0,ti)]||['',[],[],''];
      const q=hasQuiz(r)?buildQuiz(r):[];
      return {id:r.id,set:!!r.set,title:r.title,en:r.en||'',topic:r.topic,topicEn:s.rtl?(UR_EN[r.topic]||''):'',sub:r.sub,subject:s.name,kind:s.kind,rtl:!!s.rtl,grade:s.grade,gradeName:GR[s.grade].name,age:GR[s.grade].age,
       desc:r.desc||'',obj:r.obj||[],pages:r.pages.map(i=>{const pp=PAGES[s.id][i];return {title:pp.title,en:pp.en||'',topic:pp.topic}}),quiz:q.length>0,
       guide:{what:g[0],steps:g[1],home:g[2],watch:g[3]},words:[...new Set(q.map(x=>String(x.ans)).filter(a=>a.length<30))].slice(0,8)}})''', list(have))
    b.close()
data += new
json.dump(data, open(dpath, 'w'), ensure_ascii=False)
print('added', len(new))
td = os.path.join(ROOT, 'thumbs'); os.makedirs(td, exist_ok=True)
for r in data:
    t = os.path.join(td, r['id'] + '.jpg')
    if os.path.exists(t): continue
    pdf = os.path.join(ROOT, 'pdf', f"little-takhti-{r['id']}.pdf")
    tmp = os.path.join(td, '_tmp')
    subprocess.run(['pdftoppm', '-f', '1', '-l', '1', '-scale-to-x', '480', '-scale-to-y', '-1', '-jpeg', '-jpegopt', 'quality=82', pdf, tmp], check=True)
    os.rename(tmp + '-1.jpg' if os.path.exists(tmp + '-1.jpg') else [os.path.join(td, f) for f in os.listdir(td) if f.startswith('_tmp')][0], t)
print('thumbs', len(os.listdir(td)))
