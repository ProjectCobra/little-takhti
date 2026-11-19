from playwright.sync_api import sync_playwright
import os,json,sys
ROOT=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','index.html')
PAGES=['home','kids','quiz','fun','powerups','stickers','stories','class','parents','account','map','help','share','search','subject-maths','subject-g1-english','subject-g1-urdu','res-science-t10','res-maths-t2','play-maths-t2','game-ws','game-mem','game-bee','tools','report','rewards','prep','spell-maker','privacy','policy']
JS=r'''()=>{
 const vis=e=>{const r=e.getBoundingClientRect();const cs=getComputedStyle(e);return r.width>2&&r.height>2&&cs.visibility!=='hidden'&&cs.display!=='none'&&+cs.opacity>0.05};
 const app=document.getElementById('app');
 const deco=[...app.querySelectorAll('img,svg,.dimg,.sart,.ph-art,.qb-art,.hero-art,.lp-art,.fart,.hk')].filter(e=>vis(e)&&!e.closest('.sheet,.frame,button,a.btn,.btn,.sic,.gi,.ic,.qo')&&e.getBoundingClientRect().width>40);
 const texts=[];const w=document.createTreeWalker(app,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.nodeValue.trim().length>2?1:3});
 while(w.nextNode()){const n=w.currentNode,p=n.parentElement;if(!p||p.closest('.sheet,.frame,.hero-art,.demo,svg')||!vis(p))continue;const rg=document.createRange();rg.selectNodeContents(n);for(const r of rg.getClientRects()){if(r.width>4)texts.push([r,p,n.nodeValue.trim().slice(0,30)])}}
 const out=[];const ov=(a,b)=>{const x=Math.min(a.right,b.right)-Math.max(a.left,b.left),y=Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top);return x>6&&y>6?x*y:0};
 for(const d of deco){const dr=d.getBoundingClientRect();for(const [r,p,t] of texts){if(d.contains(p)||p.contains(d))continue;const a=ov(dr,r);if(a>60)out.push([(d.className&&d.className.baseVal!==undefined?d.className.baseVal:d.className)||d.tagName,t,Math.round(a)])}}
 /* horizontal overflow */
 const W=document.documentElement.clientWidth;const wide=[...app.querySelectorAll('*')].filter(e=>{const r=e.getBoundingClientRect();return vis(e)&&r.right>W+2&&!e.closest('.strip,.ksub,.tabs,.filters,.weeks,.sheet,.frame,.cm-weeks,.quick,.hero-art')}).slice(0,3).map(e=>e.className||e.tagName);
 /* text clipped by its own box */
 return {ov:out.slice(0,12),wide}}'''
res={}
with sync_playwright() as p:
  b=p.chromium.launch()
  for W in [360,390,768,1024,1366]:
    ctx=b.new_context(viewport={'width':W,'height':900});pg=ctx.new_page()
    pg.goto('file://'+ROOT);pg.wait_for_timeout(1200)
    for h in PAGES:
      pg.evaluate(f"location.hash='{h}'");pg.wait_for_timeout(450)
      try:r=pg.evaluate(JS)
      except Exception as e:r={'err':str(e)[:80]}
      if r.get('ov') or r.get('wide') or r.get('err'):res[f'{W} {h}']=r
    ctx.close()
for k,v in res.items():print(k,json.dumps(v)[:400])
print('pages with issues:',len(res))
