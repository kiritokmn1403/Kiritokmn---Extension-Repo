// Aidoku host simulator: runs .build/aidoku/<id>.js exactly like the Rust bridge (aidoku/bridge) does inside
// Aidoku's JavaScriptCore context — a bare JS context (no fetch / TextDecoder / Buffer / timers), microtasks
// drained after every evaluation (vm microtaskMode 'afterEvaluate' = JSC's drain on lock release), and the
// start/poll/resume step protocol with the HTTP requests performed by the host.
// Usage: node tools/test/aidoku-sim.mjs <id[,id2...]|--all> [--query q] [--json out.json] [--conc 6]
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const AK = path.join(ROOT, '.build/aidoku');

let SNAP = null; // offline mode: url -> snapshot file (tools/win/snap.mjs layout)
const norm = u => String(u || '').replace(/^https?:\/\/(www\.|m\.)?/, '').replace(/[?#].*$/, '').replace(/\/+$/, '').toLowerCase();
async function http(q) {
  if (SNAP) { const f = SNAP[norm(q.u)]; return f ? { i: q.i, s: 200, u: q.u, h: { 'content-type': 'text/html' }, b: fs.readFileSync(f).toString('base64') } : { i: q.i, s: 404, u: q.u, h: {}, b: '' }; }
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 25000);
  try {
    const init = { method: q.m, headers: q.h, redirect: 'follow', signal: ctl.signal };
    if (q.b != null && q.m !== 'GET') init.body = q.b;
    const r = await fetch(q.u, init);
    const buf = Buffer.from(await r.arrayBuffer());
    const h = {}; r.headers.forEach((v, k) => { h[k] = v; });
    return { i: q.i, s: r.status, u: r.url, h, b: buf.toString('base64') };
  } catch (e) { return { i: q.i, s: 0, u: q.u, h: {}, b: '', e: String(e.message || e) }; } finally { clearTimeout(t); }
}

export class AidokuSim {
  constructor(id, conf = {}) {
    this.id = id; this.conf = conf; this.store = '{}'; this.requests = 0;
    const code = fs.readFileSync(path.join(AK, id + '.js'), 'utf8');
    // bare context: only what JavaScriptCore itself provides
    this.ctx = vm.createContext({}, { microtaskMode: 'afterEvaluate' });
    vm.runInContext(code, this.ctx, { filename: id + '.aidoku.js' });
    this.eval(`__A.init(${JSON.stringify(this.store)})`);
  }
  eval(js) { return String(vm.runInContext(js, this.ctx)); }
  async call(op, args) {
    const id = this.eval(`__A.start(${JSON.stringify(op)}, ${JSON.stringify(JSON.stringify(args || {}))}, ${JSON.stringify(JSON.stringify(this.conf))})`);
    for (let spins = 0; spins < 10000;) {
      const st = JSON.parse(this.eval(`__A.poll(${id})`));
      if (st.st) this.store = st.st;
      if (st.s === 'd') return st.v;
      if (st.s === 'e') throw new Error(st.m);
      if (st.s === 'w') { if (++spins > 50) throw new Error('stalled: no request and no result'); continue; }
      this.requests += st.q.length;
      const res = await Promise.all(st.q.map(http));
      this.eval(`__A.resume(${JSON.stringify(res)})`);
    }
    throw new Error('too many steps');
  }
}

async function testSnap(id, dir) {
  const home = JSON.parse(fs.readFileSync(path.join(dir, '_summary_home.json'), 'utf8'));
  let det = {}; try { det = JSON.parse(fs.readFileSync(path.join(dir, '_summary_jobs_detail.json'), 'utf8')); } catch { }
  const h = home[id + ':home'], d = det[id + ':detail'], map = {};
  const add = (j, names) => { if (j && j.status === 200) { const f = names.map(x => path.join(dir, id, x)).find(fs.existsSync); if (f) { map[norm(j.final)] = f; map[norm(j.req)] = f; } } };
  add(h, ['home.html', 'home.json']); add(d, ['detail.html', 'detail.json']);
  if (!Object.keys(map).length) return null;
  SNAP = map;
  const out = { id, steps: {} };
  const s = new AidokuSim(id);
  try { const lst = await s.call('listings'); out.steps.listings = lst.length; const p = await s.call('list', { id: lst[0] ? lst[0].id : 'popular', page: 1 }); out.steps.popular = p.e.length; out.first = p.e[0]; } catch (e) { out.popErr = String(e.message).slice(0, 120); }
  if (d && d.status === 200) { try { const m = await s.call('manga', { k: d.req, d: true, c: true }); out.steps.title = m.t; out.steps.chapters = (m.ch || []).length; } catch (e) { out.detErr = String(e.message).slice(0, 120); } }
  return out;
}

async function testOne(id, query) {
  const t0 = Date.now(), out = { id, ok: false, steps: {} };
  try {
    const s = new AidokuSim(id);
    const meta = JSON.parse(s.eval('__A.meta()')); out.type = meta.type;
    const lst = await s.call('listings'); out.steps.listings = lst.length;
    const pop = await s.call('list', { id: lst[0] ? lst[0].id : 'popular', page: 1 }); out.steps.popular = pop.e.length;
    if (query) { const sr = await s.call('list', { q: query, page: 1 }); out.steps.search = sr.e.length; }
    const first = pop.e[0];
    if (!first) throw new Error('empty list');
    const m = await s.call('manga', { k: first.k, d: true, c: true });
    out.steps.title = m.t; out.steps.chapters = (m.ch || []).length;
    const ch = (m.ch || []).filter(c => !c.l).slice(-1)[0];
    if (!ch) throw new Error('no chapters');
    const pg = await s.call('pages', { k: ch.k });
    if (meta.type === 'novel') { out.steps.textLen = (pg.x || '').length; if (!out.steps.textLen) throw new Error('empty text'); }
    else { out.steps.pages = (pg.p || []).length; if (!out.steps.pages) throw new Error('no pages'); }
    out.ok = true;
    out.requests = s.requests;
  } catch (e) { out.error = String(e.message || e).slice(0, 300); }
  out.ms = Date.now() - t0;
  return out;
}

if (process.argv[1] && process.argv[1].endsWith('aidoku-sim.mjs')) {
  const a = process.argv.slice(2);
  const opt = k => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : null; };
  const all = JSON.parse(fs.readFileSync(path.join(AK, 'sources.json'), 'utf8')).map(x => x.id);
  const ids = a[0] === '--all' ? all : String(a[0] || '').split(',').filter(Boolean);
  const conc = +(opt('--conc') || 6), query = opt('--query');
  if (opt('--snap')) {
    const res = {};
    for (const id of ids) { const r = await testSnap(id, opt('--snap')); if (r) { res[id] = r; console.log(id, JSON.stringify(r).slice(0, 300)); } }
    if (opt('--json')) fs.writeFileSync(opt('--json'), JSON.stringify(res, null, 1));
    process.exit(0);
  }
  const results = []; let next = 0;
  await Promise.all(Array.from({ length: Math.min(conc, ids.length) }, async () => {
    while (next < ids.length) { const id = ids[next++]; const r = await testOne(id, query); results.push(r); console.log((r.ok ? 'OK  ' : 'FAIL') + ' ' + id + ' ' + JSON.stringify(r.steps) + (r.error ? ' ' + r.error : '') + ' ' + r.ms + 'ms'); }
  }));
  const ok = results.filter(r => r.ok).length;
  console.log(`aidoku-sim: ${ok}/${results.length} sources passed the full chain`);
  if (opt('--json')) fs.writeFileSync(opt('--json'), JSON.stringify(results.sort((x, y) => x.id.localeCompare(y.id)), null, 1));
  process.exit(0); // a site that never closes its socket must not keep the build waiting
}
