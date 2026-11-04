// Node runtime bundle for the test runner: one shared engine, per-source script modules loaded separately.
import { VBookEngine } from '../runtime/engine.js';
export function makeEngineFor(META, SCRIPTS, opts = {}) {
  const store = {};
  return new VBookEngine({ meta: META, scripts: SCRIPTS, host: {
    name: 'Node',
    request: async (r) => {
      const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), opts.timeout || 25000);
      try {
        const res = await fetch(r.url, { method: r.method, headers: r.headers, body: r.method === 'GET' ? undefined : r.body, redirect: 'follow', signal: ctl.signal });
        const bytes = new Uint8Array(await res.arrayBuffer());
        const ct = res.headers.get('content-type') || '';
        let cs = (ct.match(/charset=([\w-]+)/i) || [])[1];
        let text = new TextDecoder('utf-8').decode(bytes);
        if (!cs) cs = (text.slice(0, 3000).match(/<meta[^>]+charset=["']?([\w-]+)/i) || [])[1];
        if (cs && !/utf-?8/i.test(cs)) { try { text = new TextDecoder(cs.toLowerCase()).decode(bytes); } catch (e) { } }
        const headers = {}; res.headers.forEach((v, k) => { headers[k] = v; });
        return { status: res.status, url: res.url, headers, text, bytes };
      } finally { clearTimeout(t); }
    },
    storageGet: k => (k in store ? store[k] : null),
    storageSet: (k, v) => { if (v == null) delete store[k]; else store[k] = v; },
    config: k => (opts.config || {})[k] ?? null,
    log: m => opts.log && opts.log(m),
  } });
}
