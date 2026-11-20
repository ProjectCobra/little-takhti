#!/usr/bin/env python3
"""Builds app/www from the finished website in site/.
The app bundles the pages, pictures and fonts so it opens instantly and works offline;
worksheet PDFs are fetched from the website when a parent prints or downloads them.
App mode: no ads, no web analytics (store rules for children's apps), no Google sign-in
(Google blocks sign-in inside app web views; profiles are kept on the device for now)."""
import re, shutil
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
SITE, WWW = ROOT / 'site', Path(__file__).resolve().parent / 'www'
REMOTE = 'https://littletakhti.netlify.app/'
shutil.rmtree(WWW, ignore_errors=True); WWW.mkdir()
h = (SITE / 'index.html').read_text(encoding='utf-8')
h = re.sub(r'<script[^>]*googletagmanager[^>]*></script>', '', h)
h = re.sub(r'<script[^>]*adsbygoogle[^>]*></script>', '', h)
h = re.sub(r'<script type="module">.*?</script>', '', h, flags=re.S)          # Firebase sign-in (web only)
h = h.replace('window.LT_STATIC=1;', f"window.LT_STATIC=1;window.LT_APP=1;window.LT_REMOTE='{REMOTE}';", 1)
h = re.sub(r'window\.LT_ADS=\{[^<]*?\}\}', 'window.LT_ADS=null', h)
h = re.sub(r'gtag\("config"[^)]*\)', 'void 0', h)
h = h.replace('window.LTFB_READY=new Promise(r=>window.__ltfbResolve=r);', 'window.LTFB_READY=Promise.resolve();', 1)
h = h.replace('<head>', '<head><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
              '<style>html.app .gsignin,html.app [data-gsignin],html.app .ad,html.app .ads,html.app ins.adsbygoogle{display:none!important}'
              'html.app body{padding-top:env(safe-area-inset-top)}</style><script>document.documentElement.classList.add("app")</script>', 1)
(WWW / 'index.html').write_text(h, encoding='utf-8')
for d in ('img',):
    shutil.copytree(SITE / d, WWW / d)
for f in ('favicon.svg', 'apple-touch-icon.png'):
    if (SITE / f).exists(): shutil.copy(SITE / f, WWW / f)
print('www ready:', sum(p.stat().st_size for p in WWW.rglob('*') if p.is_file()) // 1024, 'KB')
