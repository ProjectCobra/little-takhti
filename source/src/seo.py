"""Static, search-friendly pages for the public website: one page per worksheet pack,
hub pages per class and subject, sitemap.xml and robots.txt. Run after `build.py --static`."""
import os, json, re, html, shutil, sys, datetime
D = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(D, '..')
OUT = os.path.join(ROOT, '..', 'little-takhti-netlify')
SITE = (sys.argv[1] if len(sys.argv) > 1 else 'https://littletakhti.netlify.app').rstrip('/')
TODAY = datetime.date.today().isoformat()
data = json.load(open(os.path.join(ROOT, 'seo', 'data.json')))
e = lambda s: html.escape(str(s or ''), quote=True)
GSLUG = {'nursery': 'nursery', 'kg': 'kg', 'g1': 'class-1', 'g2': 'class-2', 'g3': 'class-3'}
GNAME = {'nursery': 'Nursery', 'kg': 'KG', 'g1': 'Class 1', 'g2': 'Class 2', 'g3': 'Class 3'}
KNAME = {'english': 'English', 'maths': 'Maths', 'science': 'Science', 'social': 'Social Studies', 'history': 'History',
         'geography': 'Geography', 'gk': 'General Knowledge', 'urdu': 'Urdu', 'islamiat': 'Islamiat', 'computer': 'Computer'}
KSLUG = {'english': 'english', 'maths': 'maths', 'science': 'science', 'social': 'social-studies', 'history': 'history',
         'geography': 'geography', 'gk': 'general-knowledge', 'urdu': 'urdu', 'islamiat': 'islamiat', 'computer': 'computer'}
COL = {'english': '#1CB0F6', 'maths': '#FF9600', 'science': '#58CC02', 'social': '#FF4B4B', 'history': '#E5873A',
       'geography': '#2B70C9', 'gk': '#00CD9C', 'urdu': '#CE82FF', 'islamiat': '#0F9D6E', 'computer': '#64748B'}
slug = lambda s: re.sub(r'-+', '-', re.sub(r'[^a-z0-9]+', '-', s.lower())).strip('-')
def topic_en(r):
    if r['set']: return 'Revision'
    if r['rtl']: return r['topicEn'] or r['en'] or 'Urdu'
    return re.sub(r' Practice$', '', r['title'])
for r in data:
    r['tEn'] = topic_en(r)
    r['slug'] = f"{GSLUG[r['grade']]}-{KSLUG[r['kind']]}-{slug(r['tEn'])}-worksheets"
    r['hub'] = f"{GSLUG[r['grade']]}-{KSLUG[r['kind']]}-worksheets"

HEAD_TAGS = '''<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap">
<link rel="icon" href="/favicon.svg" type="image/svg+xml"><meta name="theme-color" content="#58CC02">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SLZBZQEBGQ"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","G-SLZBZQEBGQ",{allow_google_signals:false,allow_ad_personalization_signals:false})</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7392407974381857" crossorigin="anonymous"></script>'''
CSS = '''*{box-sizing:border-box}body{margin:0;font-family:Nunito,system-ui,sans-serif;color:#4B4B4B;background:#fff;font-weight:600;line-height:1.6}
a{color:#1899D6}.w{max-width:1100px;margin:0 auto;padding:0 18px}
header{border-bottom:2px solid #E5E5E5}header .w{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:12px;padding-bottom:12px}
.logo{font-weight:900;font-size:22px;color:#58CC02;text-decoration:none;display:flex;align-items:center;gap:8px}
.cta{display:inline-flex;align-items:center;gap:8px;padding:11px 18px;border-radius:16px;font-weight:900;text-transform:uppercase;letter-spacing:.05em;font-size:14px;text-decoration:none;border:2px solid #E5E5E5;border-bottom-width:4px;color:#1CB0F6;background:#fff}
.cta.g{background:#58CC02;border-color:#58A700;color:#fff}.cta.b{background:#1CB0F6;border-color:#1899D6;color:#fff}
.crumb{font-size:14px;margin:18px 0 8px}.crumb a{color:#777;text-decoration:none}.crumb span{color:#AFAFAF;margin:0 6px}
h1{font-size:clamp(28px,4vw,42px);line-height:1.15;color:#3C3C3C;margin:6px 0 10px;font-weight:900}
h2{font-size:22px;color:#3C3C3C;margin:28px 0 10px;font-weight:900}
.ur{font-family:'Noto Nastaliq Urdu',serif;font-weight:400;line-height:2.1}
.tags{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 16px}.tags span{background:#F7F7F7;border:2px solid #E5E5E5;border-radius:12px;padding:3px 10px;font-size:13px;font-weight:800}
.grid{display:grid;grid-template-columns:minmax(0,360px) minmax(0,1fr);gap:32px;align-items:start}
.thumb{width:100%;height:auto;border-radius:10px;border:2px solid #E5E5E5;box-shadow:0 20px 40px -26px rgba(0,0,0,.4);display:block}
.acts{display:flex;flex-wrap:wrap;gap:10px;margin:16px 0}
ul.c{padding-left:20px}ul.c li{margin:4px 0}ol.s li{margin:6px 0}
.tip{background:#FFF8D6;border-radius:18px;padding:14px 18px;margin-top:14px}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;margin-top:12px}
.card{display:block;text-decoration:none;color:inherit;border:2px solid #E5E5E5;border-bottom-width:4px;border-radius:18px;overflow:hidden;background:#fff}
.card img{width:100%;height:auto;display:block;border-bottom:2px solid #E5E5E5;aspect-ratio:480/679;object-fit:cover;object-position:top}
.card b{display:block;padding:10px 12px 2px;color:#3C3C3C;font-weight:900;line-height:1.3}.card small{display:block;padding:0 12px 12px;color:#777}
.hubs{display:flex;flex-wrap:wrap;gap:8px}.hubs a{border:2px solid #E5E5E5;border-bottom-width:4px;border-radius:14px;padding:8px 12px;text-decoration:none;font-weight:800;color:#4B4B4B}
.ad{margin:34px 0;text-align:center}.ad small{display:block;color:#AFAFAF;font-size:11px;text-transform:uppercase;letter-spacing:.08em}
footer{margin-top:56px;background:#58CC02;color:#fff;padding:26px 0}footer a{color:#fff}
@media(max-width:720px){.grid{grid-template-columns:minmax(0,1fr)}.thumb{max-width:320px;margin:0 auto}}'''
LOGO = '<svg width="28" height="32" viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="14" width="44" height="44" rx="12" fill="#FFD93B" stroke="#123B28" stroke-width="4"/><path d="M24 14v-4a8 8 0 0 1 16 0v4" fill="none" stroke="#123B28" stroke-width="4"/><path d="M24 34c3 5 13 5 16 0" fill="none" stroke="#2E9E4F" stroke-width="4" stroke-linecap="round"/></svg>'
def ad(slot):
    return f'<div class="ad"><small>Advertisement</small><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7392407974381857" data-ad-slot="{slot}" data-ad-format="auto" data-full-width-responsive="true" data-tag-for-age-treatment="1"></ins><script>(adsbygoogle=window.adsbygoogle||[]).push({{}})</script></div>'
def page(path, title, desc, body, crumbs, image=None, jsonld=None):
    url = f"{SITE}/{path}/" if path else f"{SITE}/"
    cr = ''.join(f'<a href="{h}">{e(t)}</a><span>/</span>' for t, h in crumbs[:-1]) + f'<b>{e(crumbs[-1][0])}</b>'
    bl = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": i + 1, "name": t, "item": SITE + h if h.startswith('/') else url} for i, (t, h) in enumerate(crumbs)]}
    ld = [bl] + ([jsonld] if jsonld else [])
    doc = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(title)}</title><meta name="description" content="{e(desc)}"><link rel="canonical" href="{url}">
<meta property="og:type" content="website"><meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(desc)}"><meta property="og:url" content="{url}">{f'<meta property="og:image" content="{SITE}{image}">' if image else ''}
<meta name="twitter:card" content="summary_large_image">
{HEAD_TAGS}<style>{CSS}</style>
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script></head><body>
<header><div class="w"><a class="logo" href="/">{LOGO}Little Takhti</a><a class="cta g" href="/#home">Open the app</a></div></header>
<main class="w"><nav class="crumb" aria-label="Breadcrumb">{cr}</nav>{body}</main>
<footer><div class="w"><b>Little Takhti</b> · Free printable worksheets, quiz games and parent guides for Nursery to Class 3, made for Pakistan.<br>
<a href="/worksheets/">All worksheets</a> · <a href="/#quiz">Quiz games</a> · <a href="/#parents">Parents' corner</a> · <a href="/#privacy">Privacy</a></div></footer></body></html>'''
    d = os.path.join(OUT, path) if path else OUT
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, 'index.html'), 'w').write(doc)
    return url
def card(r):
    t = f"{GNAME[r['grade']]} {KNAME[r['kind']]}: {r['tEn']}"
    return f'<a class="card" href="/{r["slug"]}/"><img src="/thumbs/{r["id"]}.jpg" alt="{e(t)} worksheet preview" loading="lazy" width="480" height="679"><b>{e(r["tEn"])}{" " + "<span class=ur>" + e(r["topic"]) + "</span>" if r["rtl"] and not r["set"] else ""}</b><small>{GNAME[r["grade"]]} · {KNAME[r["kind"]]} · {len(r["pages"])} pages</small></a>'

urls = []
shutil.rmtree(os.path.join(OUT, 'thumbs'), ignore_errors=True)
shutil.copytree(os.path.join(ROOT, 'thumbs'), os.path.join(OUT, 'thumbs'))
# --- one page per worksheet pack ---
for r in data:
    g, k = GNAME[r['grade']], KNAME[r['kind']]
    urd = f" ({r['topic']})" if r['rtl'] and not r['set'] else ''
    title = f"{g} {k} Worksheets: {r['tEn']}{urd} PDF Free | Little Takhti"
    desc = (f"Free printable {g} {k} worksheets on {r['tEn']}{urd}: {len(r['pages'])} A4 pages with answer key" +
            (", plus an online quiz game" if r['quiz'] else '') + f". {r['desc']}")[:300]
    gd = r.get('guide') or {}
    rel = [x for x in data if x['sub'] == r['sub'] and x['id'] != r['id']][:4]
    body = f'''<h1>{e(g)} {e(k)} Worksheets: {e(r['tEn'])}{f' <span class="ur" lang="ur" dir="rtl">{e(r["topic"])}</span>' if r['rtl'] and not r['set'] else ''}</h1>
<div class="tags"><span>{e(g)}</span><span>{e(r['age'])}</span><span>{e(k)}</span><span>{len(r['pages'])} A4 pages</span><span>Answer key included</span>{'<span>Quiz game</span>' if r['quiz'] else ''}</div>
<div class="grid"><div><img class="thumb" src="/thumbs/{r['id']}.jpg" alt="First page of the {e(g)} {e(k)} {e(r['tEn'])} worksheet" width="480" height="679"></div>
<div><p>{e(r['desc'])}</p>
<div class="acts"><a class="cta g" href="/pdf/little-takhti-{r['id']}.pdf" download>Download free PDF</a><a class="cta" href="/#print-{r['id']}">Print</a>{f'<a class="cta b" href="/#play-{r["id"]}">Play the quiz</a>' if r['quiz'] else ''}<a class="cta" href="/#res-{r['id']}">Open online</a></div>
<h2>What your child will learn</h2><ul class="c">{''.join(f'<li>{e(o)}</li>' for o in r['obj'])}</ul>
<h2>Pages in this pack</h2><ol class="s">{''.join(f'<li>{"<span class=ur dir=rtl>" + e(p["title"]) + "</span>" if re.search("[؀-ۿ]", p["title"]) else e(p["title"])}</li>' for p in r['pages'])}</ol>
{f'<h2>Tips for parents and teachers</h2><p>{e(gd.get("what"))}</p><ol class="s">{"".join(f"<li>{e(s)}</li>" for s in (gd.get("steps") or []))}</ol>' if gd else ''}
{f'<div class="tip"><b>Try at home:</b> {e(" ".join(h if h.rstrip().endswith((".","!","?")) else h+"." for h in (gd.get("home") or [])))}</div>' if gd and gd.get('home') else ''}
{f'<h2>Key words</h2><p>{", ".join(("<span class=ur>"+e(w)+"</span>") if re.search("[؀-ۿ]", w) else e(w) for w in r["words"][:10])}</p>' if r['words'] else ''}
</div></div>
{ad('2232109685')}
<h2>More {e(g)} {e(k)} worksheets</h2><div class="cards">{''.join(card(x) for x in rel)}</div>
<p style="margin-top:18px"><a href="/{r['hub']}/">See all {e(g)} {e(k)} worksheets</a> · <a href="/{GSLUG[r['grade']]}-worksheets/">All {e(g)} worksheets</a></p>'''
    ld = {"@context": "https://schema.org", "@type": "LearningResource", "name": title.split(' | ')[0], "description": desc,
          "educationalLevel": g, "about": r['tEn'], "inLanguage": "ur" if r['rtl'] else "en", "isAccessibleForFree": True,
          "learningResourceType": "Worksheet", "image": f"{SITE}/thumbs/{r['id']}.jpg", "url": f"{SITE}/{r['slug']}/",
          "provider": {"@type": "Organization", "name": "Little Takhti", "url": SITE}}
    urls.append(page(r['slug'], title, desc, body,
        [('Home', '/'), ('Worksheets', '/worksheets/'), (g, f"/{GSLUG[r['grade']]}-worksheets/"), (k, f"/{r['hub']}/"), (r['tEn'], f"/{r['slug']}/")],
        image=f"/thumbs/{r['id']}.jpg", jsonld=ld))
# --- hub pages: class + subject, class, and all ---
grades = [g for g in GSLUG if any(r['grade'] == g for r in data)]
for gid in grades:
    g = GNAME[gid]; rs = [r for r in data if r['grade'] == gid]
    kinds = list(dict.fromkeys(r['kind'] for r in rs))
    for kd in kinds:
        k = KNAME[kd]; rk = [r for r in rs if r['kind'] == kd]
        topics = ', '.join(r['tEn'] for r in rk if not r['set'])
        title = f"{g} {k} Worksheets PDF Free Download | Little Takhti"
        desc = f"Free {g} {k} worksheets for Pakistani schools: {topics}. Printable A4 PDFs with answer keys, plus quiz games."[:300]
        body = f'''<h1>{e(g)} {e(k)} Worksheets</h1><p>Free printable {e(g)} ({e(rk[0]['age'])}) {e(k)} worksheets: {e(topics)}. Every pack prints on A4 with an answer key, and most come with an online quiz game.</p>
<div class="cards">{''.join(card(r) for r in rk)}</div>{ad('2232109685')}
<h2>Other {e(g)} subjects</h2><div class="hubs">{''.join(f'<a href="/{GSLUG[gid]}-{KSLUG[x]}-worksheets/">{e(g)} {e(KNAME[x])}</a>' for x in kinds if x != kd)}</div>'''
        urls.append(page(f"{GSLUG[gid]}-{KSLUG[kd]}-worksheets", title, desc, body,
            [('Home', '/'), ('Worksheets', '/worksheets/'), (g, f"/{GSLUG[gid]}-worksheets/"), (k, f"/{GSLUG[gid]}-{KSLUG[kd]}-worksheets/")]))
    title = f"{g} Worksheets PDF Free: {', '.join(KNAME[k] for k in kinds)} | Little Takhti"
    desc = f"Free {g} worksheets for Pakistan in {', '.join(KNAME[k] for k in kinds)}. Printable A4 PDFs with answer keys, weekly guides and quiz games."[:300]
    body = f'''<h1>{e(g)} Worksheets</h1><p>Free printable worksheets for {e(g)} ({e(rs[0]['age'])}), following the Pakistani school year. Pick a subject:</p>
<div class="hubs">{''.join(f'<a href="/{GSLUG[gid]}-{KSLUG[k]}-worksheets/">{e(g)} {e(KNAME[k])} worksheets</a>' for k in kinds)}</div>
<div class="cards" style="margin-top:22px">{''.join(card(r) for r in rs)}</div>'''
    urls.append(page(f"{GSLUG[gid]}-worksheets", title, desc, body, [('Home', '/'), ('Worksheets', '/worksheets/'), (g, f"/{GSLUG[gid]}-worksheets/")]))
body = '<h1>Free Printable Worksheets for Nursery to Class 3</h1><p>Every Little Takhti worksheet pack, by class and subject. All packs are free A4 PDFs with answer keys, made for homes and schools in Pakistan.</p>' + ''.join(
    f'<h2>{e(GNAME[g])}</h2><div class="hubs">' + ''.join(f'<a href="/{GSLUG[g]}-{KSLUG[k]}-worksheets/">{e(GNAME[g])} {e(KNAME[k])}</a>' for k in dict.fromkeys(r['kind'] for r in data if r['grade'] == g)) + '</div>' for g in grades)
urls.append(page('worksheets', 'Free Printable Worksheets for Nursery to Class 3 (Pakistan) | Little Takhti',
    'Free printable worksheets for Nursery, KG, Class 1, Class 2 and Class 3: English, Maths, Urdu, Science, Social Studies, History, Geography and General Knowledge, with answer keys and quiz games.', body,
    [('Home', '/'), ('Worksheets', '/worksheets/')]))
# --- sitemap + robots ---
allu = [SITE + '/'] + sorted(set(urls))
open(os.path.join(OUT, 'sitemap.xml'), 'w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    ''.join(f'<url><loc>{u}</loc><lastmod>{TODAY}</lastmod></url>\n' for u in allu) + '</urlset>\n')
open(os.path.join(OUT, 'robots.txt'), 'w').write(f'User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n')
print('pages', len(urls), 'site', SITE)
# build summary and deploy history, read by the separate admin site
import datetime
res = {r['id']: [r['title'] if not r.get('rtl') else (r.get('en') or r['title']), r['gradeName'], r['subject']] for r in data}
pages = sum(len(r['pages']) for r in data if not r.get('set'))
build = {'built': datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ'), 'packs': sum(1 for r in data if not r.get('set')),
         'sets': sum(1 for r in data if r.get('set')), 'pages': pages, 'subjects': len({r['sub'] for r in data}),
         'quizzes': sum(1 for r in data if r.get('quiz')), 'seo': len(urls), 'res': res}
json.dump(build, open(os.path.join(OUT, 'build.json'), 'w'), separators=(',', ':'))
dp = os.path.join(ROOT, 'deploys.json')
shutil.copy(dp, os.path.join(OUT, 'deploys.json')) if os.path.exists(dp) else open(os.path.join(OUT, 'deploys.json'), 'w').write('[]')
hp = os.path.join(OUT, '_headers')
if '/build.json' not in open(hp).read():
  with open(hp, 'a') as h:
    h.write('/build.json\n  Access-Control-Allow-Origin: https://littletakhti-admin.netlify.app\n  Cache-Control: no-cache\n/deploys.json\n  Access-Control-Allow-Origin: https://littletakhti-admin.netlify.app\n  Cache-Control: no-cache\n')
print('build.json', build['packs'], 'packs', build['pages'], 'pages')
