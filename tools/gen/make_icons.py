#!/usr/bin/env python3
"""0.0.4 — build one 256x256 opaque PNG logo per source: sources/<id>/icon.png

Input: a folder made by _work/x/logofetch.mjs (logos/<id>/<n>.bin + logos/_meta.json): every icon the site declares
(apple-touch-icon, <link rel=icon>, web manifest, /favicon.ico) plus the Google / DuckDuckGo favicon services.
The largest decodable image wins (site's own icons are preferred over the favicon services at equal size).
Sources without any usable logo get a generated letter mark (initials on a colour derived from the id) so every
extension still looks different in every app. A small corner badge shows the content type
(red = Phim/Video, blue = Truyện tranh, green = Tiểu thuyết) and an "18" badge marks NSFW sources.
The result is fully opaque (Aidoku `verify` rejects transparent icons).

Usage: python3 tools/gen/make_icons.py <logos dir> [--force]   (existing icon.png files are kept unless --force)
"""
import io, json, os, sys, hashlib, colorsys
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../..'))
SIZE = 256
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
# logos checked by eye on the 0.0.4 contact sheet: Cloudflare error page, WordPress default, document placeholder
FORCE_LETTER = {'novelpiaglobal', 'truyenchu', 'truyenmoikk', 'sweetastes', 'phim4k', 'showbox', 'truyencv'}
TYPE_COLOR = {'video': (229, 57, 53), 'comic': (30, 136, 229), 'novel': (67, 160, 71)}
TYPE_GLYPH = {'video': '▶', 'comic': 'T', 'novel': 'N'}


def load_image(data, ct):
    if data[:5] == b'<?xml' or b'<svg' in data[:300] or 'svg' in (ct or ''):
        try:
            import cairosvg
            data = cairosvg.svg2png(bytestring=data, output_width=SIZE, output_height=SIZE)
        except Exception:
            return None
    try:
        im = Image.open(io.BytesIO(data))
        if getattr(im, 'format', '') == 'ICO':
            sizes = sorted(im.info.get('sizes', []) or [im.size], key=lambda s: s[0] * s[1])
            im.size = sizes[-1]
        im.load()
        return im.convert('RGBA')
    except Exception:
        return None


def is_generic_globe(im):
    # Google's "no favicon" globe is 16x16 grey/blue; anything that tiny and nearly monochrome is not a logo
    if im.width <= 16 and im.height <= 16:
        return True
    colors = im.convert('RGB').resize((16, 16)).getcolors(256)
    return colors is not None and len(colors) <= 2


def pick(meta, folder):
    best, best_score = None, -1
    for c in meta.get('got', []):
        try:
            data = open(os.path.join(folder, c['file']), 'rb').read()
        except OSError:
            continue
        im = load_image(data, c.get('ct'))
        if im is None or im.width < 16 or im.height < 16:
            continue
        if c['src'] in ('google256', 'ddg') and is_generic_globe(im):
            continue
        ratio = min(im.width, im.height) / max(im.width, im.height)
        score = min(im.width, im.height) * (1.0 if ratio > 0.75 else 0.45) * (1.15 if c['src'].startswith(('link:apple', 'manifest')) else 1.0)
        if score > best_score:
            best, best_score = im, score
    return best


def letter_mark(name, sid):
    h = int(hashlib.md5(sid.encode()).hexdigest()[:6], 16)
    r, g, b = colorsys.hls_to_rgb((h % 360) / 360.0, 0.42, 0.55)
    img = Image.new('RGB', (SIZE, SIZE), (int(r * 255), int(g * 255), int(b * 255)))
    latin = lambda t: ''.join(ch if (ch.isascii() and ch.isalnum()) or ch in 'ĐđÂâĂăÊêÔôƠơƯư' else ' ' for ch in t)
    words = [w for w in latin(name).split() if w] or [w for w in latin(sid).split() if w]
    text = (words[0][0] + (words[1][0] if len(words) > 1 else (words[0][1] if len(words[0]) > 1 else ''))).upper() if words else '?'
    d = ImageDraw.Draw(img)
    font = ImageFont.truetype(FONT, 118 if len(text) > 1 else 150)
    bb = d.textbbox((0, 0), text, font=font)
    d.text(((SIZE - (bb[2] - bb[0])) / 2 - bb[0], (SIZE - (bb[3] - bb[1])) / 2 - bb[1]), text, font=font, fill=(255, 255, 255))
    return img


def compose(logo):
    canvas = Image.new('RGB', (SIZE, SIZE), (255, 255, 255))
    # trim transparent borders, then fit into a 212px box (keeps room for the badge)
    bbox = logo.getchannel('A').getbbox()
    if bbox:
        logo = logo.crop(bbox)
    box = 212
    scale = min(box / logo.width, box / logo.height)
    nw, nh = max(1, round(logo.width * scale)), max(1, round(logo.height * scale))
    logo = logo.resize((nw, nh), Image.LANCZOS if scale < 1 or min(logo.size) >= 48 else Image.BICUBIC)
    canvas.paste(logo, ((SIZE - nw) // 2, (SIZE - nh) // 2), logo)
    return canvas


def badge(img, typ, nsfw):
    d = ImageDraw.Draw(img)
    col = TYPE_COLOR.get(typ, (120, 120, 120))
    r = 30
    cx, cy = SIZE - r - 6, SIZE - r - 6
    d.ellipse((cx - r - 4, cy - r - 4, cx + r + 4, cy + r + 4), fill=(255, 255, 255))
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=col)
    f = ImageFont.truetype(FONT, 34)
    g = TYPE_GLYPH.get(typ, '?')
    bb = d.textbbox((0, 0), g, font=f)
    d.text((cx - (bb[2] - bb[0]) / 2 - bb[0] + (2 if g == '▶' else 0), cy - (bb[3] - bb[1]) / 2 - bb[1]), g, font=f, fill=(255, 255, 255))
    if nsfw:
        r2 = 24
        x2, y2 = r2 + 6, SIZE - r2 - 6
        d.ellipse((x2 - r2 - 4, y2 - r2 - 4, x2 + r2 + 4, y2 + r2 + 4), fill=(255, 255, 255))
        d.ellipse((x2 - r2, y2 - r2, x2 + r2, y2 + r2), fill=(33, 33, 33))
        f2 = ImageFont.truetype(FONT, 24)
        bb = d.textbbox((0, 0), '18', font=f2)
        d.text((x2 - (bb[2] - bb[0]) / 2 - bb[0], y2 - (bb[3] - bb[1]) / 2 - bb[1]), '18', font=f2, fill=(255, 255, 255))
    return img


def ahash(im):
    g = Image.new('RGB', im.size, (255, 255, 255)); g.paste(im, (0, 0), im)
    g = g.convert('L').resize((12, 12))
    px = list(g.get_flattened_data()) if hasattr(g, 'get_flattened_data') else list(g.getdata()); avg = sum(px) / len(px)
    return ''.join('1' if v > avg else '0' for v in px)


def blank(im):
    g = Image.new('RGB', im.size, (255, 255, 255)); g.paste(im, (0, 0), im)
    from PIL import ImageStat
    return max(ImageStat.Stat(g.convert('L')).stddev) < 10


def main():
    logos = sys.argv[1]
    force = '--force' in sys.argv
    meta = json.load(open(os.path.join(logos, '_meta.json'), encoding='utf-8'))
    stats = {'site': 0, 'letter': 0, 'kept': 0}
    report = {}
    # pass 1: choose a logo per source; logos that are blank, or identical across sites on different hosts
    # (CMS / hosting default icons, Cloudflare error pages, WordPress "W"), are replaced by a letter mark
    chosen, hosts = {}, {}
    for sid in sorted(os.listdir(os.path.join(ROOT, 'sources'))):
        if sid in meta:
            lg = pick(meta[sid], os.path.join(logos, sid))
            if lg is not None and not blank(lg):
                chosen[sid] = lg
        try:
            hosts[sid] = json.load(open(os.path.join(ROOT, 'sources', sid, 'plugin.json'), encoding='utf-8'))['metadata']['source'].split('/')[2].replace('www.', '')
        except Exception:
            hosts[sid] = sid
    # near-identical logos (hamming distance of the 12x12 average hash) on different hosts = generic icon
    hs = {sid: ahash(lg) for sid, lg in chosen.items()}
    dist = lambda a, b: sum(1 for x, y in zip(a, b) if x != y)
    drop = set(FORCE_LETTER)
    keys = sorted(hs)
    for i, a in enumerate(keys):
        for b in keys[i + 1:]:
            if hosts[a] != hosts[b] and dist(hs[a], hs[b]) <= 12:
                drop.update((a, b))
    for x in drop:
        chosen.pop(x, None)
    for sid in sorted(os.listdir(os.path.join(ROOT, 'sources'))):
        pj_path = os.path.join(ROOT, 'sources', sid, 'plugin.json')
        if not os.path.exists(pj_path):
            continue
        md = json.load(open(pj_path, encoding='utf-8'))['metadata']
        out = os.path.join(ROOT, 'sources', sid, 'icon.png')
        logo = chosen.get(sid)
        if os.path.exists(out) and not force and logo is None:
            stats['kept'] += 1
            report[sid] = 'kept'
            continue
        if logo is not None:
            img = compose(logo)
            stats['site'] += 1
            report[sid] = 'site'
        else:
            img = letter_mark(md['name'], sid)
            stats['letter'] += 1
            report[sid] = 'letter'
        badge(img, md.get('type'), md.get('nsfw'))
        # 0.0.4 size: 128-colour palette PNG (~4x smaller than RGB, no visible loss at icon size)
        img.quantize(colors=128, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, 'PNG', optimize=True)
    json.dump(report, open(os.path.join(ROOT, 'data', 'icons.json'), 'w'), indent=1, sort_keys=True)
    print(stats)


if __name__ == '__main__':
    main()
