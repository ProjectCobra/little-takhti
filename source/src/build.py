import os
D=os.path.dirname(os.path.abspath(__file__))
r=lambda f:open(os.path.join(D,f)).read()
head='''<title>Little Takhti</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link id="gfonts" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Andika:wght@400;700&family=Baloo+2:wght@600;700;800&family=Lexend:wght@400;500;600;700&family=Nunito:wght@500;600;700;800;900&family=Noto+Naskh+Arabic:wght@700&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap">
<style>
'''+r('site.css')+'\n'+r('sheet.css')+'''
</style>
<header class="top"><div class="wrap">
 <a class="logo" href="#home" aria-label="Little Takhti home"><svg viewBox="0 0 220 220" aria-hidden="true"><rect width="220" height="220" rx="50" fill="#123B28"/><rect x="88" y="34" width="44" height="34" rx="13" fill="#FFD93B"/><circle cx="110" cy="50" r="6" fill="#123B28"/><rect x="46" y="58" width="128" height="128" rx="32" fill="#FFD93B"/><path d="M80 112c12 20 48 20 60 0" fill="none" stroke="#123B28" stroke-width="13" stroke-linecap="round"/><circle cx="110" cy="156" r="10" fill="#123B28"/></svg><span>Little Takhti</span></a>
 <nav class="nav" aria-label="Main"><a href="#home" data-nav="home">Worksheets</a><a href="#class" data-nav="class">Weekly</a><a href="#quiz" data-nav="quiz">Quizzes</a><a href="#fun" data-nav="fun">Play</a><a href="#parents" data-nav="parents">Parents</a><a href="#powerups" data-nav="powerups">PowerUps</a></nav>
 <label class="gsel"><span>Grade</span><select id="gs" aria-label="Choose a grade"></select></label><span id="acct"></span>
</div></header>
<main id="app" class="wrap"></main>
<footer><div class="wrap">
 <div><a class="logo" href="#home"><svg viewBox="0 0 220 220" aria-hidden="true"><rect width="220" height="220" rx="50" fill="#123B28"/><rect x="88" y="34" width="44" height="34" rx="13" fill="#FFD93B"/><circle cx="110" cy="50" r="6" fill="#123B28"/><rect x="46" y="58" width="128" height="128" rx="32" fill="#FFD93B"/><path d="M80 112c12 20 48 20 60 0" fill="none" stroke="#123B28" stroke-width="13" stroke-linecap="round"/><circle cx="110" cy="156" r="10" fill="#123B28"/></svg><span>Little Takhti</span></a><p>Printable worksheets, weekly guides, parent guides and quiz games for Nursery to Grade 3. Made for homes and schools in Pakistan.</p></div>
 <div><h4>Learn</h4><ul><li><a href="#home">Worksheets</a></li><li><a href="#quiz">Quiz games</a></li><li class="cloud-only"><a href="#library">Community library</a></li><li><a href="#powerups">PowerUps</a></li><li><a href="#search">Search</a></li><li><a href="#privacy">Privacy</a></li><li><a href="#policy">Content policy</a></li><li class="static-only"><a href="/worksheets/">Worksheet directory</a></li></ul></div>
 <div><h4>Plan</h4><ul><li><a href="#class">Weekly guide</a></li><li><a href="#map">Curriculum map</a></li><li><a href="#parents">Parents' corner</a></li><li><a href="#account">Family profiles</a></li><li><a href="#share">Share material</a></li><li><a href="#help">Help and feedback</a></li></ul></div>
 <div class="cloud-only"><h4>Schools</h4><ul><li><a href="#contribute">Upload material</a></li><li><a href="#admin">Review uploads</a></li></ul></div>
 <div class="fm"><span>Every worksheet prints on A4 with an answer key.</span><span>Little steps, high flights · <span class="ur-t">ننھے قدم، اونچی اڑان</span></span><a class="nlfy" href="https://www.netlify.com" target="_blank" rel="noopener">This site is powered by Netlify</a></div>
</div></footer>
<nav class="tabbar" aria-label="Main">
 <a href="#home" data-nav="home"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg><span>Worksheets</span></a>
 <a href="#class" data-nav="class"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg><span>Weekly</span></a>
 <a href="#quiz" data-nav="quiz" class="tb-q"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l10.5-6.5z"/></svg><span>Quizzes</span></a>
 <a href="#parents" data-nav="parents"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg><span>Parents</span></a>
 <a href="#fun" data-nav="fun"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M15.5 12h.01M18 13.5h.01"/></svg><span>Play</span></a>
</nav>
<script>
'''+r('g1.js')+'\n'+r('grades.js')+'\n'+r('english_plus.js')+'\n'+r('english_g3.js')+'\n'+r('writing.js')+'\n'+r('urdu_weeks.js')+'\n'+r('plus_a.js')+'\n'+r('plus_b.js')+'\n'+r('plus_c.js')+'\n'+r('plus_d.js')+'\n'+r('plus_e.js')+'\n'+r('plus_f.js')+'\n'+r('plus_g.js')+'\n'+r('data.js')+'\n'+r('render.js')+'\n'+r('art.js')+'\n'+r('family.js')+'\n'+r('contrib.js')+'\n'+r('powerups.js')+'\n'+r('search.js')+'\n'+r('levels.js')+'\n'+r('quizbank.js')+'\n'+r('fun.js')+'\n'+r('help.js')+'\n'+r('app.js')+'''
</script>
'''
open(os.path.join(D,'..','index.html'),'w').write(head)
print('built',len(head))
# standalone website build (Netlify etc.): full document, cloud-only features hidden
import sys,shutil
if '--static' in sys.argv:
  out=os.path.join(D,'..','..','little-takhti-netlify');shutil.rmtree(out,ignore_errors=True);os.makedirs(out)
  fav=r('favicon.svg')
  open(os.path.join(out,'favicon.svg'),'w').write(fav)
  ap=os.path.join(D,'apple-touch-icon.png')
  os.path.exists(ap) and shutil.copy(ap,os.path.join(out,'apple-touch-icon.png'))
  doc=('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
   '<meta name="description" content="Free printable worksheets, quiz games and parent guides for Nursery, KG, Class 1, Class 2 and Class 3. English, Maths, Urdu, Science and more, made for homes and schools in Pakistan.">'
   '<meta name="theme-color" content="#123B28"><link rel="icon" href="favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="apple-touch-icon.png">'
   '<meta property="og:title" content="Little Takhti"><meta property="og:description" content="Worksheets and quiz games for every subject, Nursery to Grade 3.">'
   '<script>window.LT_STATIC=1;document.documentElement.classList.add("static");window.LTFB_READY=new Promise(r=>window.__ltfbResolve=r);window.LT_ADS={client:"ca-pub-7392407974381857",slots:{home:\"6635133987\",resource:\"2232109685\"}}</script>'
   '<script async src="https://www.googletagmanager.com/gtag/js?id=G-SLZBZQEBGQ"></script>'
   '<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","G-SLZBZQEBGQ",{allow_google_signals:false,allow_ad_personalization_signals:false,send_page_view:false})</script>'
   '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7392407974381857" crossorigin="anonymous"></script>'
   '<script type="module">'+r('fb.js')+'</script></head><body>'+head+'</body></html>').replace('<title>Little Takhti</title>','<title>Little Takhti | Free Worksheets and Quiz Games for Nursery to Class 3 (Pakistan)</title>',1)
  open(os.path.join(out,'index.html'),'w').write(doc)
  shutil.copytree(os.path.join(D,'..','pdf'),os.path.join(out,'pdf'))
  shutil.copytree(os.path.join(D,'..','img'),os.path.join(out,'img'))
  open(os.path.join(out,'ads.txt'),'w').write('google.com, pub-7392407974381857, DIRECT, f08c47fec0942fa0\n')
  open(os.path.join(out,'_headers'),'w').write('/pdf/*\n  Content-Disposition: attachment\n  Cache-Control: public, max-age=604800\n')
  print('static build ->',os.path.abspath(out))
