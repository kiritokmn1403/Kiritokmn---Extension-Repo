# Generates the 128x128 icons embedded in Aidoku packages: aidoku/icons/<id>.png
# (the site's own icon.png when the source has one, otherwise a coloured tile with the source initials).
# Usage: python tools/gen/aidoku_icons.py   (after `npm run build`, reads .build/aidoku/sources.json)
import json, os, hashlib, unicodedata
from PIL import Image, ImageDraw, ImageFont
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = os.path.join(ROOT, 'aidoku', 'icons'); os.makedirs(OUT, exist_ok=True)
FONT = next((f for f in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 'C:/Windows/Fonts/arialbd.ttf'] if os.path.exists(f)), None)
srcs = json.load(open(os.path.join(ROOT, '.build', 'aidoku', 'sources.json'), encoding='utf-8'))
def initials(s):
    name = ''.join(c for c in unicodedata.normalize('NFKD', s['name']) if ord(c) < 128)
    words = [w for w in ''.join(c if c.isalnum() else ' ' for c in name).split() if w]
    if not words: words = [s['id']]
    t = (words[0][0] + (words[1][0] if len(words) > 1 else words[0][1:2])).upper()
    return t or s['id'][:2].upper()
for s in srcs:
    out = os.path.join(OUT, s['id'] + '.png')
    own = os.path.join(ROOT, 'sources', s['id'], 'icon.png')
    if os.path.exists(own):
        try:
            im = Image.open(own).convert('RGBA').resize((128, 128), Image.LANCZOS)
            bgw = Image.new('RGB', (128, 128), (255, 255, 255)); bgw.paste(im, mask=im.split()[3])  # Aidoku requires opaque icons
            bgw.save(out, optimize=True); continue
        except Exception: pass
    h = hashlib.md5(s['id'].encode()).digest()
    bg = (60 + h[0] % 150, 60 + h[1] % 150, 60 + h[2] % 150)
    im = Image.new('RGB', (128, 128), bg); d = ImageDraw.Draw(im)
    f = ImageFont.truetype(FONT, 54) if FONT else ImageFont.load_default()
    t = initials(s); w = d.textbbox((0, 0), t, font=f)
    d.text(((128 - (w[2] - w[0])) / 2 - w[0], (128 - (w[3] - w[1])) / 2 - w[1]), t, fill='white', font=f)
    if s['nsfw']: d.rectangle([84, 104, 124, 124], fill=(200, 30, 30)); d.text((88, 105), '18+', fill='white', font=ImageFont.truetype(FONT, 15) if FONT else None)
    im.save(out, optimize=True)
print('icons:', len(srcs))
