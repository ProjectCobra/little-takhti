"""1280x720 song thumbnail: garden, topic art, Takhti waving, grade chip, big title, 'Sing along song + quiz' pill, logo pill.
Usage: python3 source/video/thumbs/song_thumb.py <grade chip> <title html> <art html file> <out.jpg>"""
import base64, sys
from pathlib import Path
from playwright.sync_api import sync_playwright
R = Path(__file__).resolve().parents[3]
def b64(p, mime): return f'data:{mime};base64,' + base64.b64encode(Path(p).read_bytes()).decode()
G = R / 'source/tools/video2/assets/glow'; F = R / 'source/tools/fonts/node_modules/@fontsource'
chip, title, art, out = sys.argv[1:5]
html = f"""<html><head><style>
@font-face{{font-family:b2;src:url({b64(F/'baloo-2/files/baloo-2-latin-800-normal.woff2','font/woff2')})}}
@font-face{{font-family:lx;src:url({b64(F/'lexend/files/lexend-latin-600-normal.woff2','font/woff2')})}}
body{{margin:0;width:1280px;height:720px;overflow:hidden;position:relative;font-family:b2}}
.bg{{position:absolute;inset:0;background:url({b64(G/'bg-garden.webp','image/webp')}) center/cover}}
.shade{{position:absolute;inset:0;background:linear-gradient(90deg,rgba(18,59,40,.0) 30%,rgba(18,59,40,.35))}}
.logo{{position:absolute;left:26px;top:22px;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.94);padding:7px 20px 7px 8px;border-radius:999px;box-shadow:0 5px 0 rgba(18,59,40,.18)}}
.logo span{{font-size:34px;color:#123B28;line-height:1;padding-top:5px}}
.chip{{position:absolute;right:48px;top:58px;background:#FFD93B;color:#123B28;font-size:44px;padding:8px 34px 0;border-radius:999px;border:5px solid #123B28;box-shadow:0 6px 0 #123B28}}
.title{{position:absolute;right:40px;top:150px;width:720px;text-align:right;color:#fff;font-size:118px;line-height:.98;-webkit-text-stroke:14px #123B28;paint-order:stroke fill;text-shadow:0 10px 0 #123B28}}
.pill{{position:absolute;right:48px;top:470px;background:#fff;color:#123B28;font-family:lx;font-size:34px;padding:14px 30px;border-radius:999px;border:5px solid #1F7A4C;box-shadow:0 6px 0 #1F7A4C}}
.pill b{{color:#1F7A4C}}
.tk{{position:absolute;left:330px;bottom:-10px;height:330px;filter:drop-shadow(0 14px 12px rgba(0,0,0,.3))}}
.art{{position:absolute;left:50px;top:185px}}
</style></head><body><div class="bg"></div><div class="shade"></div>
<div class="art">{Path(art).read_text()}</div>
<img class="tk" src="{b64(G/'tk-wave.webp','image/webp')}">
<div class="logo"><img src="{b64(R/'site/favicon.svg','image/svg+xml')}" width="50" height="50"><span>Little Takhti</span></div>
<div class="chip">{chip}</div><div class="title">{title}</div><div class="pill">&#9834; <b>Sing along</b> song + quiz</div>
</body></html>"""
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 1280, 'height': 720})
    pg.set_content(html); pg.wait_for_timeout(400); pg.screenshot(path=out, type='jpeg', quality=90); b.close()
print('saved', out)
