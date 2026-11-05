// High-level driver: turns a set of vBook scripts into the operations every host needs
// (popular / latest / search / detail / chapter list / pages / novel text / video streams).
import { createEnv } from './vbook.js';
import { resolveUrl } from './url.js';

function abs(base, u) {
  if (!u) return '';
  u = String(u).trim();
  if (/^data:|^blob:/.test(u)) return u;
  if (u.startsWith('//')) return 'https:' + u;
  if (typeof __abs === 'function') return __abs(base, u); // Rhino: resolved by java.net.URI
  try { return resolveUrl(base, u); } catch (e) { return u; }
}
const str = v => (v == null ? '' : String(v));
const uniq = a => a.filter((x, i) => x && a.indexOf(x) === i);

export class VBookEngine {
  constructor(opts) {
    const meta = opts.meta, scripts = opts.scripts, host = opts.host;
    this.meta = meta;
    this.host = host;
    this.env = opts.env || createEnv(host, meta);
    this.scripts = scripts; // name -> async factory(env, cfg) returning execute
    this.cache = {};
    this.tokens = {};
  }
  get base() { return str(this.host.config('DOMAIN') || this.meta.source).replace(/\/+$/, ''); }
  has(name) { return !!this.scripts[name]; }
  async run(name, ...args) {
    const factory = this.scripts[name];
    // vBook also accepts script file names ("search.js") in tabs
    if (!factory) throw new Error('script ' + name + ' missing');
    const cfg = k => { const v = this.host.config(k); return v == null ? (this.meta.configDefaults || {})[k] : v; };
    const exec = await factory(this.env, cfg);
    if (typeof exec !== 'function') throw new Error(name + ': execute() not defined');
    const res = await exec(...args.map(str));
    if (!res) throw new Error(name + ': empty result');
    if (res.code !== 0) throw new Error(name + ': ' + str(res.data || 'error'));
    return res;
  }
  scriptFile(s) { return str(s).replace(/\.js$/, ''); }
  async tabs() {
    if (this.cache.tabs) return this.cache.tabs;
    let tabs = [];
    try { if (this.has('home')) tabs = (await this.run('home')).data || []; } catch (e) { this.host.log && this.host.log('home: ' + e.message); }
    if (!tabs.length && this.has('genre')) { try { tabs = ((await this.run('genre')).data || []).slice(0, 2); } catch (e) { } }
    this.cache.tabs = tabs.filter(t => t && t.script);
    return this.cache.tabs;
  }
  async list(scriptName, input, page) {
    const key = scriptName + '|' + input;
    page = Math.max(1, page | 0);
    const tok = page === 1 ? '' : this.tokens[key + '|' + page];
    if (page > 1 && tok == null) return { items: [], hasNext: false };
    const r = await this.run(scriptName, input, tok);
    const next = str(r.data2);
    if (next) this.tokens[key + '|' + (page + 1)] = next;
    const items = (r.data || []).filter(Boolean).map(it => ({
      name: str(it.name).trim(), link: abs(it.host || this.base + '/', it.link), cover: abs(it.host || this.base + '/', it.cover),
      description: str(it.description), tag: str(it.tag),
    })).filter(it => it.name && it.link);
    return { items, hasNext: !!next && items.length > 0 };
  }
  async popular(page) {
    const tabs = await this.tabs();
    if (tabs[0]) return this.list(this.scriptFile(tabs[0].script), str(tabs[0].input), page);
    return this.search('', page);
  }
  async latest(page) {
    const tabs = await this.tabs();
    const t = tabs[1] || tabs[0];
    if (t) return this.list(this.scriptFile(t.script), str(t.input), page);
    return this.search('', page);
  }
  async search(q, page) {
    if (!this.has('search')) return { items: [], hasNext: false };
    return this.list('search', q, page);
  }
  async detail(url) {
    const d = (await this.run('detail', url)).data || {};
    const genres = [].concat(d.genres || [], d.tags || []).map(g => (typeof g === 'string' ? g : g && g.title)).filter(Boolean);
    return {
      name: str(d.name).trim(), cover: abs(d.host || this.base + '/', d.cover), author: str(d.author).trim(),
      description: stripHtml(str(d.description)), detail: stripHtml(str(d.detail)), ongoing: d.ongoing !== false && d.ongoing !== 'false',
      genres: uniq(genres.map(s => String(s).trim())), url: url, format: str(d.format),
    };
  }
  async chapters(url) {
    let list = [];
    if (this.meta.type === 'novel' && this.has('page') && this.has('toc')) {
      // legacy contract: page.js lists TOC pages, toc.js parses each page
      const pages = (await this.run('page', url)).data || [url];
      for (const p of pages) list = list.concat((await this.run('toc', str(p))).data || []);
    } else if (this.has('toc')) list = (await this.run('toc', url)).data || [];
    return list.filter(c => c && c.url && c.type !== 'section').map((c, i) => ({ name: str(c.name).trim() || ('#' + (i + 1)), url: abs(c.host || this.base + '/', c.url), pay: !!(c.pay || c.lock) }));
  }
  async pages(url) {
    let data;
    if (this.has('chap') && this.meta.type === 'comic') data = (await this.run('chap', url)).data;
    else if (this.has('page')) data = (await this.run('page', url)).data;
    else data = [url];
    if (typeof data === 'string') data = data.split(/[\n,]+/);
    // vBook pages may be {link, fallback:[...]}: hosts without fallback support need the best single URL.
    const ph = u => !u || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(u));
    const pick = p => {
      if (typeof p === 'string') return p;
      if (!p) return '';
      const main = p.link || p.url || p.data, fb = Array.isArray(p.fallback) ? p.fallback.filter(Boolean) : [];
      return ph(main) && fb.length ? fb[0] : main;
    };
    return (data || []).map(p => abs(this.base + '/', pick(p))).filter(Boolean);
  }
  async content(url) {
    const r = await this.run('chap', url);
    return { html: str(r.data), title: str(r.data2) };
  }
  async videos(url) {
    let servers = [{ title: 'Default', data: url }];
    if (this.has('chap')) {
      const d = (await this.run('chap', url)).data;
      if (Array.isArray(d) && d.length) servers = d.map(s => (typeof s === 'string' ? { title: 'Server', data: s } : { title: str(s.title || s.name || 'Server'), data: str(s.data || s.url || s.link) }));
    }
    const out = [];
    for (const s of servers) {
      try {
        const t = (await this.run('track', s.data)).data || {};
        const tracks = Array.isArray(t) ? t : [t];
        for (const tr of tracks) {
          if (!tr || !tr.data) continue;
          if (tr.type === 'webview') continue; // embed pages cannot be played by native players
          out.push({
            url: abs(tr.host || this.base + '/', tr.data), quality: s.title + (tr.quality ? ' ' + tr.quality : ''), headers: tr.headers || { Referer: this.base + '/' },
            subtitles: (tr.subtitles || (tr.subtitle ? [{ data: tr.subtitle, label: 'Sub' }] : [])).map(x => ({ file: abs(this.base + '/', x.data || x.file), label: str(x.label || x.language || 'Sub') })),
            mimeType: str(tr.mimeType),
          });
        }
      } catch (e) { this.host.log && this.host.log('track ' + s.title + ': ' + e.message); }
    }
    return out;
  }
}

export function stripHtml(h) {
  return String(h).replace(/<br\s*\/?>/gi, '\n').replace(/<\/p>/gi, '\n').replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, '\n\n').trim();
}
