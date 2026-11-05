import { fileURLToPath } from 'node:url';
// Runs built plugin files inside simulated host runtimes (Node vm):
//   - Mangayomi/YomiHub: MProvider, Client, SharedPreferences globals, `new DefaultExtension()`
//   - LNReader/IReader: CommonJS loader with @libs/fetch + @libs/storage
// Usage: node tools/test/host-sim.mjs <id> [query] [--json out.json]
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

async function httpFetch(url, init = {}) {
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 25000);
  try { return await fetch(url, { ...init, redirect: 'follow', signal: ctl.signal }); } finally { clearTimeout(t); }
}

export function loadMangayomi(id) {
  const code = fs.readFileSync(path.join(ROOT, 'repo/mangayomi', id + '.js'), 'utf8');
  const prefs = {};
  const ctx = {
    console, setTimeout, clearTimeout, URL, TextDecoder, TextEncoder,
    MProvider: class { get source() { return {}; } },
    Client: class {
      async get(url, headers) { const r = await httpFetch(url, { headers }); return { statusCode: r.status, body: await r.text(), headers: Object.fromEntries(r.headers), request: { url: r.url } }; }
      async post(url, headers, body) { const r = await httpFetch(url, { method: 'POST', headers, body: typeof body === 'string' ? body : JSON.stringify(body) }); return { statusCode: r.status, body: await r.text(), headers: Object.fromEntries(r.headers), request: { url: r.url } }; }
    },
    SharedPreferences: class { get(k) { return prefs[k]; } getString(k, d) { return k in prefs ? prefs[k] : d; } setString(k, v) { prefs[k] = v; } },
  };
  vm.createContext(ctx);
  vm.runInContext(code + '\n;globalThis.__ext = new DefaultExtension();', ctx, { filename: id + '.mangayomi.js' });
  return ctx.__ext;
}

export function loadLNReader(id) {
  const file = path.join(ROOT, 'repo/lnreader', id + '.js');
  if (!fs.existsSync(file)) return null;
  const code = fs.readFileSync(file, 'utf8');
  const store = {};
  const libs = {
    '@libs/fetch': { fetchApi: (u, i) => httpFetch(u, i) },
    '@libs/storage': { storage: { get: k => store[k], set: (k, v) => { store[k] = v; }, delete: k => { delete store[k]; } } },
  };
  // Same wrapper as LNReader's src/plugins/pluginManager.ts initPlugin(): the plugin is whatever ends up in the
  // ORIGINAL exports object's `default` (a bundle that only reassigns module.exports is seen as broken by the app).
  const fn = new Function('require', 'module', 'const exports = module.exports = {};\n' + code + ';\nreturn exports.default');
  const plugin = fn(n => { if (libs[n]) return libs[n]; throw new Error('module not provided by LNReader: ' + n); }, {});
  if (!plugin) throw new Error('LNReader would reject this plugin: exports.default is undefined');
  return plugin;
}

// quick CLI
if (process.argv[1] && process.argv[1].endsWith('host-sim.mjs')) {
  const id = process.argv[2]; const q = process.argv[3] || '';
  const mg = loadMangayomi(id);
  const out = {};
  const pop = await mg.getPopular(1); out.popular = { n: pop.list.length, first: pop.list[0], hasNext: pop.hasNextPage };
  const pop2 = await mg.getPopular(2); out.popular2 = pop2.list.length;
  if (q) { const s = await mg.search(q, 1, []); out.search = s.list.length; }
  const first = pop.list[0];
  if (first) {
    const d = await mg.getDetail(first.link); out.detail = { name: d.name, author: d.author, genres: d.genre, chapters: (d.chapters || d.episodes || []).length, status: d.status, img: d.imageUrl };
    const ch = (d.chapters || d.episodes || []).slice(-1)[0];
    if (ch) out.content = (await mg.getHtmlContent('', ch.url)).slice(0, 120);
  }
  const ln = loadLNReader(id);
  if (ln) {
    const p = await ln.popularNovels(1, { showLatestNovels: false, filters: {} });
    const n = p[0] && await ln.parseNovel(p[0].path);
    out.lnreader = { popular: p.length, novel: n && n.name, chapters: n && n.chapters.length, chapter: n && n.chapters[0] && (await ln.parseChapter(n.chapters[0].path)).slice(0, 80) };
  }
  console.log(JSON.stringify(out, null, 1));
}
