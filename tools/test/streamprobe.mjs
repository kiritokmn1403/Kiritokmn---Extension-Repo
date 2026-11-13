// 0.0.5: check that a stream returned by a source is really playable: fetch it with the headers the source
// returned; for HLS (also data: URIs) follow one master -> variant level and fetch the first KB of the first segment.
// Streams flagged `http2` (host refuses HTTP/1.1, e.g. NguonC) are retried over HTTP/2 when HTTP/1.1 is refused.
import http2 from 'node:http2';

// Minimal HTTP/2 GET returning a fetch-style Response (at most `max` bytes of body).
export function h2fetch(url, o = {}) {
  const u = new URL(url), max = o.max || 4 << 20;
  return new Promise((resolve, reject) => {
    const c = http2.connect(u.origin); let done = false;
    const fin = (f, v) => { if (!done) { done = true; try { c.close(); } catch { } f(v); } };
    const t = setTimeout(() => { try { c.destroy(); } catch { } fin(reject, new Error('h2 timeout ' + u.host)); }, 30000);
    c.on('error', e => { clearTimeout(t); fin(reject, e); });
    const h = { ':method': 'GET', ':path': u.pathname + u.search };
    for (const [k, v] of Object.entries(o.headers || {})) h[k.toLowerCase()] = String(v);
    const r = c.request(h); let status = 0; const headers = {}; const chunks = []; let n = 0;
    const end = () => { clearTimeout(t); const res = new Response(status === 204 || status === 304 ? null : Buffer.concat(chunks), { status: status || 502, headers }); Object.defineProperty(res, 'url', { value: String(url) }); fin(resolve, res); };
    r.on('response', hh => { status = hh[':status']; for (const [k, v] of Object.entries(hh)) if (k[0] !== ':' && k !== 'content-length' && k !== 'content-encoding') headers[k] = String(v); });
    r.on('data', d => { chunks.push(d); n += d.length; if (n >= max) { r.close(); end(); } });
    r.on('end', end); r.on('error', e => { clearTimeout(t); fin(reject, e); });
    r.end();
  });
}

const isM3u8 = t => /^﻿?#EXTM3U/.test(t);
const dataUri = u => { const m = /^data:([^,]*),(.*)$/s.exec(u); if (!m) return null; return /;base64/i.test(m[1]) ? Buffer.from(m[2], 'base64') : Buffer.from(decodeURIComponent(m[2])); };

// s = { url, headers, mimeType, http2 }  ->  { ok, status, kind, via, target, bytes, ct, error? }
// f1 / f2: fetch functions for HTTP/1.1 and HTTP/2 (run-tests passes its record/replay wrappers).
export async function probeStream(s, f1 = globalThis.fetch, f2 = h2fetch) {
  const hdr = Object.assign({}, s.headers || {}); let via = 'h1';
  const get = async (url, range) => {
    const d = dataUri(url); if (d) return { status: 200, buf: d, ct: 'data', url };
    const headers = range ? Object.assign({ Range: 'bytes=0-1023' }, hdr) : hdr;
    let r = null, err = null;
    if (via === 'h1') { try { r = await f1(url, { headers }); } catch (e) { err = e; } }
    if (s.http2 && (via === 'h2' || !r || r.status === 403)) { via = 'h2'; r = await f2(url, { headers }); }
    if (!r) throw err;
    const buf = Buffer.from(await r.arrayBuffer());
    return { status: r.status, buf, ct: r.headers.get('content-type') || '', url: r.url || url };
  };
  const res = { ok: false, kind: 'file', via, target: String(s.url).slice(0, 200) };
  const good = st => st === 200 || st === 206;
  try {
    const hls = /mpegurl/i.test(s.mimeType || '') || /\.m3u8(\?|$)/i.test(s.url) || /^data:[^,]*mpegurl/i.test(s.url);
    let r = await get(s.url, !hls); res.status = r.status; res.ct = r.ct; res.bytes = r.buf.length; res.via = via;
    let text = r.buf.slice(0, 2 << 20).toString('utf8');
    if (!good(r.status)) { res.error = 'HTTP ' + r.status + ' ' + res.target; return res; }
    if (!isM3u8(text)) { if (hls) res.error = 'not an HLS playlist: ' + text.slice(0, 60).replace(/\s+/g, ' '); else res.ok = r.buf.length > 0; return res; }
    res.kind = 'hls'; let base = r.url;
    const uris = t => t.split(/\r?\n/).map(l => l.trim()).filter(l => l && l[0] !== '#');
    const abs = (b, u) => { try { return /^data:/.test(b) ? new URL(u).href : new URL(u, b).href; } catch { return null; } };
    if (/#EXT-X-STREAM-INF/.test(text)) {
      const v = abs(base, uris(text)[0] || ''); if (!v) { res.error = 'master playlist without a usable variant'; return res; }
      r = await get(v, false); res.status = r.status; res.via = via; res.target = v.slice(0, 200);
      if (!good(r.status)) { res.error = 'variant HTTP ' + r.status + ' ' + res.target; return res; }
      text = r.buf.slice(0, 2 << 20).toString('utf8'); base = r.url;
      if (!isM3u8(text)) { res.error = 'variant is not a playlist'; return res; }
    }
    res.segments = uris(text).length;
    const seg = abs(base, uris(text)[0] || ''); if (!seg) { res.error = 'playlist without segments'; return res; }
    r = await get(seg, true); res.status = r.status; res.ct = r.ct; res.bytes = r.buf.length; res.via = via; res.target = seg.slice(0, 200);
    if (!good(r.status)) { res.error = 'segment HTTP ' + r.status + ' ' + res.target; return res; }
    if (/^\s*<(!doctype|html)/i.test(r.buf.slice(0, 64).toString('latin1'))) { res.error = 'segment is an HTML page'; return res; }
    res.ok = r.buf.length > 0;
  } catch (e) { res.via = via; res.error = String(e.message || e).slice(0, 200); }
  return res;
}
