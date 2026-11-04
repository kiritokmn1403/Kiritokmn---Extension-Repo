// Pure-JS URL resolution (RFC 3986 §5.2) for hosts without the WHATWG URL class
// (Mangayomi/YomiHub QuickJS) or with partial polyfills (React Native/LNReader). Same result on every host.
function splitUrl(u) {
  const m = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(u) || [];
  return { scheme: m[1], auth: m[2], path: m[3] || '', query: m[4], frag: m[5] };
}
function removeDots(p) {
  const out = [];
  const segs = p.split('/');
  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    if (s === '..') { if (out.length > 1) out.pop(); if (i === segs.length - 1) out.push(''); }
    else if (s === '.') { if (i === segs.length - 1) out.push(''); }
    else out.push(s);
  }
  return out.join('/');
}
export function resolveUrl(base, rel) {
  rel = rel == null ? '' : String(rel).trim();
  const r = splitUrl(rel);
  if (r.scheme) return rel;
  if (!base) return rel;
  const b = splitUrl(String(base));
  if (!b.scheme) return rel;
  let auth = b.auth, path, query;
  if (r.auth !== undefined) { auth = r.auth; path = removeDots(r.path); query = r.query; }
  else if (!r.path) { path = b.path; query = r.query !== undefined ? r.query : b.query; }
  else {
    if (r.path.charAt(0) === '/') path = removeDots(r.path);
    else { const dir = (auth !== undefined && !b.path) ? '/' : b.path.slice(0, b.path.lastIndexOf('/') + 1); path = removeDots(dir + r.path); }
    query = r.query;
  }
  if (auth !== undefined && path.charAt(0) !== '/') path = '/' + path;
  return b.scheme + ':' + (auth !== undefined ? '//' + auth : '') + path + (query !== undefined ? '?' + query : '') + (r.frag !== undefined ? '#' + r.frag : '');
}
const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
export function b64(bin) {
  if (typeof btoa === 'function') return btoa(bin);
  let o = '';
  for (let i = 0; i < bin.length; i += 3) {
    const a = bin.charCodeAt(i), b = bin.charCodeAt(i + 1), c = bin.charCodeAt(i + 2);
    const n = (a << 16) | ((b || 0) << 8) | (c || 0);
    o += B64[(n >> 18) & 63] + B64[(n >> 12) & 63] + (i + 1 < bin.length ? B64[(n >> 6) & 63] : '=') + (i + 2 < bin.length ? B64[n & 63] : '=');
  }
  return o;
}
