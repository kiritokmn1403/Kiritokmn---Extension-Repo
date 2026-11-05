#!/usr/bin/env python3
"""Draft data/specs.json from page snapshots: detect family (Madara / NetTruyen / TruyenFull / Halim) or
derive generic selectors (repeating card, detail fields, chapter list). Manual specs in data/specs.manual.json win."""
import json, os, re, sys, collections
from urllib.parse import urlparse, urljoin
from bs4 import BeautifulSoup

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../..'))
SNAP = sys.argv[1] if len(sys.argv) > 1 else '/home/claude/snaps/snap'
src = json.load(open(os.path.join(ROOT, 'data/sources.json'), encoding='utf-8'))
home = json.load(open(os.path.join(SNAP, '_summary_home.json')))
det = {}
p = os.path.join(SNAP, '_summary_jobs_detail.json')
if os.path.exists(p): det = json.load(open(p))
manual = {}
mp = os.path.join(ROOT, 'data/specs.manual.json')
if os.path.exists(mp): manual = json.load(open(mp, encoding='utf-8'))

def soup(path):
    return BeautifulSoup(open(path, encoding='utf-8', errors='replace').read(), 'lxml') if os.path.exists(path) else None

def card_selector(s):
    cnt = collections.Counter(); ex = {}
    for el in s.find_all(True):
        cls = el.get('class')
        if not cls or el.name in ('a', 'img', 'span', 'i', 'figure', 'picture'): continue
        if not el.find('a', href=True) or not el.find('img'): continue
        if len(str(el)) > 6000: continue
        key = el.name + '.' + cls[0]
        cnt[key] += 1; ex.setdefault(key, el)
    best = [(k, v) for k, v in cnt.most_common(30) if 5 <= v <= 150]
    if not best: return None, None
    best.sort(key=lambda kv: (-kv[1], len(str(ex[kv[0]]))))
    return best[0][0], ex[best[0][0]]

def title_sel(card):
    for sel in ['h3 a', 'h2 a', 'h4 a', '.title a', '[class*=title] a', 'h3', 'h2', 'h4', '[class*=title]', '[class*=name]']:
        e = card.select_one(sel)
        if e and e.get_text(strip=True): return sel
    return 'a@title || img@alt'

CH_TEXT = re.compile(r'(chương|chuong|chapter|chap\b|chap\s*\d|tập\s*\d|tap\s*\d|episode|ep\.?\s*\d|第\s*[0-9一二三四五六七八九十百千]+\s*[章话話回集]|^\s*\d+\s*$|full|vietsub|hd)', re.I)
def chapter_selector(s, base):
    host = urlparse(base).netloc.replace('www.', '')
    best = None; bestn = 0
    for cont in s.find_all(['ul', 'ol', 'div', 'table', 'tbody', 'dl', 'section']):
        links = cont.find_all('a', href=True)
        if len(links) < 2 or len(links) > 3000: continue
        good = [a for a in links if CH_TEXT.search(a.get_text(' ', strip=True)) and urlparse(urljoin(base, a['href'])).netloc.replace('www.', '') in (host, '')]
        n = len(good)
        # prefer the tightest container holding most chapter-like links
        if n >= 2 and (n > bestn or (n == bestn and len(links) < best[1])):
            bestn = n; best = (cont, len(links))
    if not best: return None
    c = best[0]
    if c.get('id'): sel = '#' + c['id']
    elif c.get('class'): sel = c.name + '.' + c['class'][0]
    else:
        p = c.parent
        sel = (('#' + p['id']) if p is not None and p.get('id') else (p.name + '.' + p['class'][0]) if p is not None and p.get('class') else p.name) + ' > ' + c.name
    return sel + ' a'

def family(html):
    if re.search(r'wp-manga|madara', html, re.I) and re.search(r'manga_|wp-manga-chapter|c-tabs-item|page-item-detail', html): return 'madara'
    if re.search(r'halim', html, re.I) and 'halim-item' in html: return 'halim'
    if 'truyen-title' in html and 'list-truyen' in html: return 'truyenfull'
    if re.search(r'ModuleContent|items-slide|title-detail|nt_listchapter', html) and 'figcaption' in html: return 'nettruyen'
    return None

specs = {}
for s in src:
    sid = s['id']
    if sid in manual and 'patch' not in manual[sid]: specs[sid] = manual[sid]; continue
    h = home.get(sid + ':home', {})
    final = h.get('final') or s['urls'][0]
    base = re.match(r'https?://[^/]+', final if final.startswith('http') else s['urls'][0]).group(0)
    spec = {'base': base, 'domains': [re.match(r'https?://[^/]+', u).group(0) for u in s['urls'] if re.match(r'https?://', u)], 'status': h.get('status'), 'auto': True}
    hp = os.path.join(SNAP, sid, 'home.html')
    hs = soup(hp)
    html = open(hp, encoding='utf-8', errors='replace').read() if hs else ''
    dp = os.path.join(SNAP, sid, 'detail2.html')
    if not os.path.exists(dp): dp = os.path.join(SNAP, sid, 'detail.html')
    ds = soup(dp)
    dhtml = open(dp, encoding='utf-8', errors='replace').read() if ds else ''
    fam = family(html + dhtml) if html else None
    if fam == 'madara':
        spec['tpl'] = 'madara'
        if re.search(r'href="[^"]*/truyen/[^"/]+/?"', html) and not re.search(r'href="[^"]*/manga/[^"/]+/?"', html): spec['opts'] = {'MADARA': {'path': 'truyen'}}
    elif fam:
        spec['tpl'] = 'generic'; spec['preset'] = fam
    else:
        spec['tpl'] = 'generic'
        G = {'tabs': {'Mới cập nhật': '/[page/{p}/]' if 'wp-content' in html else '/[?page={p}]'}, 'search': '/[page/{p}/]?s={q}' if 'wp-content' in html else '/tim-kiem?keyword={q}[&page={p}]'}
        if hs:
            ks, card = card_selector(hs)
            if ks:
                tag, cls = ks.split('.', 1)
                G['item'] = '.' + cls
                G['title'] = title_sel(card) + ' || a@title || img@alt'
                G['link'] = 'a@href'
            f = hs.find('form', attrs={'action': True})
            for form in hs.find_all('form'):
                names = [i.get('name') for i in form.find_all('input') if i.get('name') and i.get('type') not in ('hidden', 'submit', 'password')]
                if names and (form.get('method') or 'get').lower() == 'get' and not re.search(r'login|register', str(form.get('action'))):
                    act = form.get('action') or '/'
                    act = re.sub(r'^https?://[^/]+', '', act) or '/'
                    G['search'] = act + ('&' if '?' in act else '?') + names[0] + '={q}[&page={p}]'
                    break
        if ds:
            cs = chapter_selector(ds, base)
            if cs: G['ch_list'] = cs
            h1 = ds.find('h1')
            G['d_title'] = 'h1 || meta[property=og:title]@content'
            G['d_cover'] = 'meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img'
            G['d_desc'] = 'meta[name=description]@content'
        G.setdefault('ch_list', 'a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]')
        spec['G'] = G
    if sid in manual and 'patch' in manual[sid]:
        m = manual[sid]
        for k, v in m.items():
            if k == 'patch': spec.setdefault('G', {}).update(v)
            else: spec[k] = v
    if spec.get('base') and spec.get('domains') is not None and spec['base'] not in spec['domains']:
        spec['domains'] = [spec['base']] + spec['domains']
    specs[sid] = spec

json.dump(specs, open(os.path.join(ROOT, 'data/specs.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(collections.Counter((v.get('tpl'), v.get('preset')) for v in specs.values()))
