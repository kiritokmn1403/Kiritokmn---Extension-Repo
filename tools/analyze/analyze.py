#!/usr/bin/env python3
"""Summarise a page snapshot so selectors can be written quickly:
search form, repeated 'card' blocks (link + image), sample card HTML, pagination, generator hints."""
import sys, re, collections
from bs4 import BeautifulSoup

def css_path(el):
    parts = []
    for p in [el] + list(el.parents)[:2]:
        if p.name in (None, '[document]', 'html', 'body'):
            break
        c = '.'.join((p.get('class') or [])[:2])
        parts.append(p.name + ('.' + c if c else ''))
    return ' < '.join(parts)

def clean(html, n):
    html = re.sub(r'\s+', ' ', str(html))
    html = re.sub(r'(srcset|style|sizes)="[^"]*"', '', html)
    return html[:n]

def analyze(path, base='', cards=2, width=700):
    raw = open(path, encoding='utf-8', errors='replace').read()
    s = BeautifulSoup(raw, 'lxml')
    out = []
    t = s.title.get_text(strip=True) if s.title else ''
    gen = s.find('meta', attrs={'name': 'generator'})
    out.append(f'TITLE: {t[:90]} | GEN: {gen.get("content") if gen else ""} | len={len(raw)}')
    for f in s.find_all('form')[:3]:
        inp = [i.get('name') for i in f.find_all('input') if i.get('name')]
        out.append(f'FORM action={f.get("action")} method={f.get("method")} inputs={inp}')
    # card candidates: elements whose class repeats and that contain an <a href> and <img>
    cnt = collections.Counter(); ex = {}
    for el in s.find_all(True):
        cls = el.get('class')
        if not cls or el.name in ('a', 'img', 'span', 'i'):
            continue
        if not el.find('a', href=True) or not el.find('img'):
            continue
        key = el.name + '.' + '.'.join(cls[:2])
        cnt[key] += 1
        ex.setdefault(key, el)
    best = [(k, v) for k, v in cnt.most_common(40) if 4 <= v <= 120]
    # prefer the smallest repeating block (deepest)
    best.sort(key=lambda kv: (-kv[1], len(str(ex[kv[0]]))))
    shown = 0
    for k, v in best[:6]:
        out.append(f'CARD {k} x{v} parent={css_path(ex[k].parent)}')
    for k, v in best[:cards]:
        out.append('  SAMPLE ' + clean(ex[k], width))
        shown += 1
    pag = s.select('.pagination, .page-numbers, .pagenavi, .wp-pagenavi, nav[aria-label*=agination], ul.pager, .paging')
    if pag:
        out.append('PAGINATION ' + clean(pag[0], 400))
    nd = s.find('script', id='__NEXT_DATA__')
    if nd:
        out.append('NEXT_DATA ' + clean(nd.string or '', 500))
    links = collections.Counter()
    for a in s.find_all('a', href=True):
        h = a['href']
        h = re.sub(r'^https?://[^/]+', '', h)
        m = re.match(r'^(/[^/?#]+/)', h)
        if m:
            links[m.group(1)] += 1
    out.append('LINK PREFIXES ' + ', '.join(f'{k}{v}' for k, v in links.most_common(12)))
    return '\n'.join(out)

if __name__ == '__main__':
    for p in sys.argv[1:]:
        print('#####', p)
        try:
            print(analyze(p))
        except Exception as e:
            print('ERR', e)
