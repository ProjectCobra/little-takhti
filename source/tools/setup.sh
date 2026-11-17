#!/usr/bin/env bash
# One-time setup in a fresh machine or session: Python and browser packages, local fonts for rendering.
set -e
T="$(cd "$(dirname "$0")" && pwd)"
pip install -q --break-system-packages playwright pillow 2>/dev/null || pip install -q playwright pillow
python3 -c "import playwright" 
if [ ! -d "$T/fonts/node_modules/@fontsource/andika" ]; then
  mkdir -p "$T/fonts" && cd "$T/fonts"
  [ -f package.json ] || echo '{"name":"lt-fonts","private":true}' > package.json
  npm install -s @fontsource/andika @fontsource/baloo-2 @fontsource/lexend @fontsource/nunito @fontsource/noto-nastaliq-urdu @fontsource/noto-naskh-arabic >/dev/null
fi
echo "setup done"
