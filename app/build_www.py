#!/usr/bin/env python3
"""Builds app/www from the finished website in site/.
The app bundles the pages, pictures and fonts so it opens instantly and works offline;
worksheet PDFs are fetched from the website when a parent opens them, or saved ahead with "Download this week".
App mode: no ads, no web analytics (store rules for children's apps), no Google sign-in
(Google blocks sign-in inside app web views; profiles are kept on the device for now).
App-only code lives in app/native (native.js, native.css): back button, parent PIN, PDF viewer,
offline downloads, tablet layout. The website is not changed by any of it."""
import re, shutil, json
from pathlib import Path
APP = Path(__file__).resolve().parent
ROOT = APP.parent
SITE, WWW, NM = ROOT / 'site', APP / 'www', APP / 'node_modules'
REMOTE = 'https://littletakhti.netlify.app/'
VERSION = json.loads((APP / 'package.json').read_text())['version']
shutil.rmtree(WWW, ignore_errors=True); WWW.mkdir()

# ---- fonts: bundle the same families the website loads from Google Fonts (works offline, nothing sent to Google)
FONTS = {'andika': (400, 700), 'baloo-2': (600, 700, 800), 'lexend': (400, 500, 600, 700),
         'nunito': (500, 600, 700, 800, 900), 'noto-naskh-arabic': (700,), 'noto-nastaliq-urdu': (400, 700)}
SUBSETS = ('latin', 'latin-ext', 'arabic')
(WWW / 'fonts').mkdir()
css = []
for fam, weights in FONTS.items():
    pkg = NM / '@fontsource' / fam
    for w in weights:
        f = pkg / f'{w}.css'
        if not f.exists(): continue
        for block in re.findall(r'/\*[^*]*\*/\s*@font-face\s*{[^}]*}', f.read_text()):
            sub = re.search(r'/\*\s*[\w-]+-(latin-ext|latin|arabic|[\w]+)-\d+-normal\s*\*/', block)
            name = re.search(r'url\(\./files/([^)]+\.woff2)\)', block)
            if not name: continue
            fn = name.group(1)
            if not any(f'-{s}-{w}-normal' in fn for s in SUBSETS): continue
            if '-latin-ext-' not in fn and '-latin-' not in fn and '-arabic-' not in fn: continue
            shutil.copy(pkg / 'files' / fn, WWW / 'fonts' / fn)
            b = re.sub(r'/\*[^*]*\*/\s*', '', block)
            b = re.sub(r'src:[^;]*;', f"src:url({fn}) format('woff2');", b)
            css.append(b)
(WWW / 'fonts' / 'fonts.css').write_text('\n'.join(css))

# ---- pdf.js (in-app worksheet viewer, works offline)
PJ = NM / 'pdfjs-dist'
(WWW / 'pdfjs').mkdir()
for f in ('pdf.min.mjs', 'pdf.worker.min.mjs'):
    shutil.copy(PJ / 'legacy' / 'build' / f, WWW / 'pdfjs' / f)
shutil.copytree(PJ / 'standard_fonts', WWW / 'pdfjs' / 'standard_fonts')

# ---- the page
h = (SITE / 'index.html').read_text(encoding='utf-8')
h = re.sub(r'<script[^>]*googletagmanager[^>]*></script>', '', h)
h = re.sub(r'<script[^>]*adsbygoogle[^>]*></script>', '', h)
h = re.sub(r'<script type="module">.*?</script>', '', h, flags=re.S)          # Firebase sign-in (web only)
h = re.sub(r'<link[^>]*fonts\.(googleapis|gstatic)\.com[^>]*>', '', h)        # Google Fonts (bundled instead)
h = h.replace('window.LT_STATIC=1;', f"window.LT_STATIC=1;window.LT_APP=1;window.LT_REMOTE='{REMOTE}';window.LT_APP_VERSION='{VERSION}';", 1)
h = re.sub(r'window\.LT_ADS=\{[^<]*?\}\}', 'window.LT_ADS=null', h)
h = re.sub(r'gtag\("config"[^)]*\)', 'void 0', h)
h = h.replace('window.LTFB_READY=new Promise(r=>window.__ltfbResolve=r);', 'window.LTFB_READY=Promise.resolve();', 1)
h = re.sub(r'<meta name="viewport"[^>]*>', '', h)
NATIVE = APP / 'native'
h = h.replace('<head>', '<head><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">'
              '<link rel="stylesheet" href="fonts/fonts.css">'
              '<style>html.app .gsignin,html.app [data-gsignin],html.app .ad,html.app .ads,html.app ins.adsbygoogle{display:none!important}'
              'html.app body{padding-top:env(safe-area-inset-top)}</style><script>document.documentElement.classList.add("app")</script>', 1)
h = h.replace('</head>', '<style>' + (NATIVE / 'native.css').read_text(encoding='utf-8') + '</style></head>', 1)
i = h.rindex('</body>')
h = h[:i] + '<script>' + (NATIVE / 'native.js').read_text(encoding='utf-8') + '</script>' + h[i:]
(WWW / 'index.html').write_text(h, encoding='utf-8')
for d in ('img',):
    shutil.copytree(SITE / d, WWW / d)
for f in ('favicon.svg', 'apple-touch-icon.png'):
    if (SITE / f).exists(): shutil.copy(SITE / f, WWW / f)
print('www ready:', sum(p.stat().st_size for p in WWW.rglob('*') if p.is_file()) // 1024, 'KB,', len(css), 'font faces')
