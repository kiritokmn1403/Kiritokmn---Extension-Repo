#!/usr/bin/env python3
"""Generate vBook source packages (sources/<id>/) from data/specs.json + data/sources.json.
Each spec chooses a template from lib/ ; per-site differences go into src/config.js (BASE_URL + options)."""
import json, os, re, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../..'))
REG = {s['id']: s for s in json.load(open(os.path.join(ROOT, 'data/sources.json'), encoding='utf-8'))}
SPECS = json.load(open(os.path.join(ROOT, 'data/specs.json'), encoding='utf-8'))
TYPE = {'movie': 'video', 'comic': 'comic', 'novel': 'novel'}
LOCALE = {'vi': 'vi', 'zh': 'zh-CN', 'en': 'en', 'ja': 'ja', 'all': 'global'}

def js(v): return json.dumps(v, ensure_ascii=False)

# template -> {script_key: body}. `LIB` is the template library; every script loads config + common + LIB.
TEMPLATES = {
    'madara': {
        'lib': 'lib_madara.js',
        'home': 'function execute() { return Response.success([{ title: "Mới cập nhật", input: "latest", script: "browse.js" }, { title: "Xem nhiều", input: "views", script: "browse.js" }, { title: "Đánh giá cao", input: "rating", script: "browse.js" }, { title: "Truyện mới", input: "new-manga", script: "browse.js" }]); }',
        'browse': 'function execute(input, page) { return M.browse(input, page); }',
        'search': 'function execute(key, page) { return M.search(key, page); }',
        'detail': 'function execute(url) { return M.detail(url); }',
        'toc': 'function execute(url) { return M.toc(url); }',
        'chap_comic': 'function execute(url) { return M.pages(url); }',
        'chap_novel': 'function execute(url) { return M.text(url); }',
    },
    'generic': {
        'lib': 'lib_generic.js',
        'home': 'function execute() { var t = []; for (var k in G.tabs) t.push({ title: k, input: k, script: "browse.js" }); return Response.success(t); }',
        'browse': 'function execute(input, page) { return X.browse(input, page); }',
        'search': 'function execute(key, page) { return X.search(key, page); }',
        'extra_genre': 'function execute() { return X.genre(); }',
        'detail': 'function execute(url) { return X.detail(url); }',
        'toc': 'function execute(url) { return X.toc(url); }',
        'chap_comic': 'function execute(url) { return X.pages(url); }',
        'chap_novel': 'function execute(url) { return X.text(url); }',
        'chap_video': 'function execute(url) { return X.servers(url); }',
        'track': 'function execute(data) { return X.track(data); }',
    },
}

# Ready-made selector sets for site families (merged with per-site "G" overrides in specs.json)
PRESETS = {
    'nettruyen': {
        'tabs': {'Mới cập nhật': '/?page={p}', 'Top ngày': '/tim-truyen?status=-1&sort=13&page={p}', 'Truyện mới': '/tim-truyen?status=-1&sort=15&page={p}', 'Hoàn thành': '/tim-truyen?status=2&page={p}'},
        'search': '/tim-truyen?keyword={q}&page={p}',
        'item': '.items .item, .ModuleContent .items .item',
        'link': 'figcaption h3 a@href || .image a@href || a@href', 'title': 'figcaption h3 a || h3 a || a@title', 'cover': 'img@img', 'desc': '.comic-item li.chapter a || .chapter a',
        'next': '.pagination a[rel=next], .pagination li.active + li a, a.next-page',
        'd_title': 'h1.title-detail || h1', 'd_cover': '.col-image img@img || meta[property=og:image]@content', 'd_author': 'li.author .col-xs-8 || li.author p:last-child',
        'd_desc': '.detail-content p@html || .detail-content@html || meta[name=description]@content', 'd_genres': 'li.kind a, .kind a', 'd_status': 'li.status .col-xs-8 || li.status p:last-child',
        'ch_list': '#nt_listchapter li .chapter a, .list-chapter li .chapter a, .list-chapter li a', 'ch_reverse': True,
        'pages': '.page-chapter img, .reading-detail img', 'genre': '.dropdown-menu .megamenu a, ul.nav li.dropdown .megamenu a',
    },
    'truyenfull': {
        'tabs': {'Truyện mới cập nhật': '/danh-sach/truyen-moi/[trang-{p}/]', 'Truyện hot': '/danh-sach/truyen-hot/[trang-{p}/]', 'Truyện full': '/danh-sach/truyen-full/[trang-{p}/]'},
        'search': '/tim-kiem/?tukhoa={q}[&page={p}]',
        'item': '.list-truyen .row[itemtype], .list-truyen div.row', 'link': 'h3.truyen-title a@href', 'title': 'h3.truyen-title a', 'cover': '[data-image]@data-image || img@img', 'desc': '.text-info a || .author',
        'next': '.pagination li.active + li a, .pagination a[title*=sau]',
        'd_title': 'h3.title || h1', 'd_cover': '.book img@img', 'd_author': '.info a[itemprop=author] || .info a[href*=tac-gia]', 'd_desc': '.desc-text@html', 'd_genres': '.info a[href*=the-loai]', 'd_status': '.info .text-success || .info .text-primary',
        'ch_list': '#list-chapter .list-chapter li a', 'ch_next': '#list-chapter .pagination li.active + li a', 'ch_maxPages': 200,
        'content': '#chapter-c, .chapter-c', 'c_title': '.chapter-title || h2',
        'genre': '.dropdown-menu a[href*=the-loai]',
    },
    'halim': {
        'tabs': {'Phim mới': '/[page/{p}/]', 'Phim bộ': '/phim-bo/[page/{p}/]', 'Phim lẻ': '/phim-le/[page/{p}/]'},
        'search': '/[page/{p}/]?s={q}',
        'item': '.halim-item, article.thumb', 'link': 'a.halim-thumb@href || a@href', 'title': '.entry-title || a@title', 'cover': 'img@img', 'desc': '.episode || .status',
        'next': '.pagination a.next, a.next.page-numbers, .page-numbers.next',
        'd_title': 'h1.entry-title || .movie-title || h1', 'd_cover': '.movie-thumb img@img || meta[property=og:image]@content', 'd_desc': '.entry-content@html || .film-content@html || meta[name=description]@content',
        'd_genres': '.post-category a, .halim-movie-genres a', 'd_status': '.halim-movie-status || .status',
        'ch_list': '.halim-list-eps a, ul.halim-list-eps li a, .list-episode a, .halim-server a', 'ch_url': 'a.watch-movie@href || a.btn-see@href || a[href*=xem-phim]@href',
        'genre': '.dropdown-menu a[href*=the-loai]',
    },
}

def merge_g(spec):
    g = dict(PRESETS.get(spec.get('preset'), {}))
    g.update(spec.get('G') or {})
    return g

def gen_ref(sid, spec):
    """Re-use an open-source vBook extension (credited) as the implementation of this source."""
    import shutil
    reg = REG[sid]
    d = os.path.join(ROOT, 'sources', sid)
    shutil.rmtree(d, ignore_errors=True)
    shutil.copytree(spec['ref'], d, ignore=shutil.ignore_patterns('*.zip', '.origin', '*.md', '.git'))
    pjp = os.path.join(d, 'plugin.json')
    pj = json.load(open(pjp, encoding='utf-8-sig'))
    md = pj['metadata']
    if md.get('type') in ('chinese_novel', 'novel_cn', 'translate_novel'): md['type'] = 'novel'
    orig = md.get('author', 'unknown')
    md['author'] = f'{orig} (Kiritokmn repack)'
    md['description'] = (md.get('description') or reg['name']) + f' — gốc: {orig}' + (f" ({spec.get('origin')})" if spec.get('origin') else '')
    md['nsfw'] = bool(reg['nsfw']) or bool(md.get('nsfw'))
    md['name'] = spec.get('name') or md.get('name') or reg['name']
    try: md['version'] = int(md.get('version', 1))
    except Exception: md['version'] = 1
    if spec.get('version'): md['version'] = max(md['version'], int(spec['version']))
    json.dump(pj, open(pjp, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)

def gen(sid, spec):
    reg = REG[sid]
    tpl = TEMPLATES[spec['tpl']]
    typ = TYPE[reg['type']]
    base = spec.get('base') or reg['urls'][0]
    base = re.sub(r'/+$', '', re.match(r'https?://[^/]+', base).group(0))
    domains = spec.get('domains') or []
    doms = [base] + [d for d in domains if d != base]
    d = os.path.join(ROOT, 'sources', sid)
    os.makedirs(os.path.join(d, 'src'), exist_ok=True)
    scripts = {}
    cfg = f'var BASE_URL = {js(base)};\ntry {{ if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\\/+$/, ""); }} catch (e) {{}}\n'
    for k, v in (spec.get('opts') or {}).items():
        cfg += f'var {k} = {js(v)};\n'
    if spec['tpl'] == 'generic':
        cfg += 'var G = ' + json.dumps(merge_g(spec), ensure_ascii=False, indent=1) + ';\n'
    open(os.path.join(d, 'src', 'config.js'), 'w', encoding='utf-8').write(cfg)
    header = "load('config.js');\nload('lib_common.js');\nload('%s');\n" % tpl['lib']
    keys = ['home', 'browse', 'search', 'detail', 'toc'] + [k for k in tpl if k.startswith('extra_')]
    if spec['tpl'] == 'generic' and not merge_g(spec).get('genre'): keys.remove('extra_genre')
    for k in keys:
        if k not in tpl: continue
        name = k.replace('extra_', '')
        open(os.path.join(d, 'src', name + '.js'), 'w', encoding='utf-8').write(header + tpl[k] + '\n')
        if k != 'browse': scripts[name] = name + '.js'
    chap = tpl.get('chap_' + reg['type']) or tpl.get('chap_' + typ) or tpl.get('chap')
    open(os.path.join(d, 'src', 'chap.js'), 'w', encoding='utf-8').write(header + chap + '\n')
    scripts['chap'] = 'chap.js'
    if typ == 'video' and 'track' in tpl:
        open(os.path.join(d, 'src', 'track.js'), 'w', encoding='utf-8').write(header + tpl['track'] + '\n')
        scripts['track'] = 'track.js'
    host = re.sub(r'^https?://(www\.)?', '', base)
    pj = {
        'metadata': {
            'name': spec.get('name') or reg['name'], 'author': 'Kiritokmn', 'version': spec.get('version', 1), 'source': base,
            'description': spec.get('description') or f"{reg['name']} — Kiritokmn Extension Repo",
            'locale': LOCALE[reg['lang_code']], 'regexp': re.escape(host.split('/')[0]).replace('\\-', '-'), 'type': typ, 'nsfw': bool(reg['nsfw']),
        },
        'script': scripts,
        'config': {'DOMAIN': {'title': 'Tên miền', 'subtitle': 'Đổi khi trang đổi tên miền', 'default': base, 'values': doms, 'mode': 'select' if len(doms) > 1 else 'input', 'format': 'single' if len(doms) > 1 else 'text'}},
    }
    json.dump(pj, open(os.path.join(d, 'plugin.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=2)

if __name__ == '__main__':
    only = set(sys.argv[1:])
    n = 0
    for sid, spec in SPECS.items():
        if only and sid not in only: continue
        if spec.get('tpl') == 'ref': gen_ref(sid, spec); n += 1; continue
        if spec.get('tpl') not in TEMPLATES: continue
        gen(sid, spec); n += 1
    print('generated', n)
