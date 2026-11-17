#!/usr/bin/env bash
# Build the website from source/src into site/ (what Netlify publishes).
# Usage: source/tools/build.sh            rebuild pages (keeps existing PDFs and thumbnails)
#        source/tools/build.sh --pdf      also regenerate every worksheet PDF
#        ONLY=g2-maths source/tools/build.sh --pdf   regenerate only PDFs whose id contains this text
set -e
T="$(cd "$(dirname "$0")" && pwd)"; S="$T/.."; R="$S/.."
# PDFs and thumbnails live only in site/ to keep the repo small: bring them into source/ for the build
[ -d "$S/pdf" ] || cp -a "$R/site/pdf" "$S/pdf"
[ -d "$S/thumbs" ] || cp -a "$R/site/thumbs" "$S/thumbs"
python3 "$S/src/build.py" >/dev/null
if [ "$1" = "--pdf" ]; then python3 "$T/render_sheets.py" pdf; fi
python3 "$S/src/build.py" --static >/dev/null
python3 "$T/gen_seo.py" "$T/local.html" >/dev/null 2>&1 || true
python3 "$S/src/seo.py" | tail -1
rm -rf "$R/site" && cp -a "$R/little-takhti-netlify" "$R/site" && rm -rf "$R/little-takhti-netlify"
echo "site/ rebuilt: $(ls "$R/site/pdf" | wc -l) PDFs"
