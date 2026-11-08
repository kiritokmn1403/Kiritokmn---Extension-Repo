// vBook API emulation for asynchronous JavaScript hosts.
// A host adapter supplies: request({url,method,headers,body}) -> {status,url,headers,text,bytes?},
// storage get/set (persistent), and config(key).
import { parseHtml, cleanHtml, Elements, Element } from './dom.js';
import { b64 } from './url.js';

export const DEFAULT_UA = 'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36';

function b64encodeBytes(bytes) {
  if (typeof Buffer !== 'undefined') return Buffer.from(bytes).toString('base64');
  let s = ''; for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return b64(s);
}
function utf8Bytes(str) { return typeof TextEncoder !== 'undefined' ? new TextEncoder().encode(str) : Uint8Array.from(unescape(encodeURIComponent(str)), c => c.charCodeAt(0)); }

function gbkDecode(t) {
  let o = '';
  for (let i = 0; i < t.length; i++) {
    const c = t.charCodeAt(i);
    if (c < 0x80) { o += t[i]; continue; }
    if (c === 0x80) { o += '\u20ac'; continue; }
    const c2 = t.charCodeAt(i + 1);
    if (c >= 0x81 && c <= 0xfe && c2 >= 0x40 && c2 <= 0xfe && c2 !== 0x7f) { o += __GBK_TABLE[(c - 0x81) * 190 + (c2 - 0x40) - (c2 > 0x7f ? 1 : 0)]; i++; }
    else o += '\ufffd';
  }
  return o;
}

class VResponse {
  constructor(raw, req) {
    this.status = raw.status | 0;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = raw.statusText || String(this.status);
    this.url = raw.url || req.url;
    this.headers = raw.headers || {};
    this._raw = raw;
    this.request = { url: req.url, headers: req.headers || {} };
  }
  header(k) { const key = Object.keys(this.headers).find(h => h.toLowerCase() === String(k).toLowerCase()); return key ? this.headers[key] : ''; }
  text(charset) {
    if (charset && this._raw.bytes && typeof TextDecoder !== 'undefined') {
      try { return new TextDecoder(String(charset).toLowerCase()).decode(this._raw.bytes); } catch (e) { /* fall through */ }
    }
    const t = this._raw.text == null ? '' : String(this._raw.text);
    if (!charset) charset = (String(this.header('content-type') || '').match(/charset=([\w-]+)/i) || [])[1];
    // Hosts without byte access (Mangayomi/Dart) decode unknown charsets as Latin-1: recover GBK from it.
    if (charset && /^(gbk|gb2312|gb18030)$/i.test(String(charset)) && typeof __GBK_TABLE === 'string' && /[\x80-\xff]/.test(t) && !/[^\x00-\xff]/.test(t)) return gbkDecode(t);
    return t;
  }
  string(charset) { return this.text(charset); }
  html(charset) { return parseHtml(this.text(charset), this.url); }
  json() { try { return JSON.parse(this.text()); } catch (e) { return null; } }
  base64() { return b64encodeBytes(this._raw.bytes || utf8Bytes(this.text())); }
  blob() { const self = this; const b = this._raw.bytes || utf8Bytes(this.text()); return { size: b.length, type: this.header('content-type'), base64() { return self.base64(); } }; }
}

function normalizeHeaders(h) {
  const out = {};
  if (!h) return out;
  if (typeof h.forEach === 'function' && !Array.isArray(h) && typeof h.entries === 'function') { h.forEach((v, k) => { out[k] = v; }); return out; }
  for (const k of Object.keys(h)) out[k] = String(h[k]);
  return out;
}

export function createEnv(host, meta) {
  const store = (prefix) => ({
    getItem: k => { const v = host.storageGet(prefix + k); return v == null ? null : v; },
    setItem: (k, v) => host.storageSet(prefix + k, v == null ? null : String(v)),
    removeItem: k => host.storageSet(prefix + k, null),
    clear: () => host.storageClear && host.storageClear(prefix),
  });
  const cookieKey = '__cookie__';
  const env = {};
  env.Response = {
    success: (data, data2) => ({ code: 0, data: data === undefined ? null : data, data2: data2 === undefined ? null : data2 }),
    error: (msg) => ({ code: 1, data: msg == null ? '' : String(msg) }),
  };
  env.fetch = async function fetch(url, opts) {
    opts = opts || {};
    let u = String(url);
    if (opts.queries) {
      const q = Object.entries(opts.queries).map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v)).join('&');
      if (q) u += (u.includes('?') ? '&' : '?') + q;
    }
    const headers = Object.assign({ 'User-Agent': DEFAULT_UA }, normalizeHeaders(opts.headers));
    const ck = host.storageGet(cookieKey);
    if (ck && !Object.keys(headers).some(h => h.toLowerCase() === 'cookie')) headers.Cookie = ck;
    let body = opts.body;
    if (body != null && typeof body === 'object') {
      const ct = Object.keys(headers).find(h => h.toLowerCase() === 'content-type');
      if (ct && /json/i.test(headers[ct])) body = JSON.stringify(body);
      else { body = Object.entries(body).map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v)).join('&'); if (!ct) headers['Content-Type'] = 'application/x-www-form-urlencoded'; }
    }
    const req = { url: u, method: (opts.method || (body != null ? 'POST' : 'GET')).toUpperCase(), headers, body, timeout: opts.timeout };
    let raw;
    try { raw = await host.request(req); } catch (e) { raw = { status: 0, url: u, headers: {}, text: '', error: String(e && e.message || e) }; }
    return new VResponse(raw, req);
  };
  env.Http = {
    get: (url) => httpBuilder(env, 'GET', url),
    post: (url) => httpBuilder(env, 'POST', url),
  };
  env.Html = { parse: (s, base) => parseHtml(s, base || ''), clean: (s, tags) => cleanHtml(s, tags) };
  env.localStorage = store('ls:');
  env.cacheStorage = store('cs:');
  env.resumeStorage = {
    get: function(k) {
      try {
        var v = host.storageGet('resume:' + k);
        return v ? parseFloat(v) || 0 : 0;
      } catch (e) { return 0; }
    },
    set: function(k, s) {
      try { host.storageSet('resume:' + k, String(Math.max(0, s || 0))); } catch (e) {}
    }
  };
  env.localConfig = { getItem: k => host.config(k) };
  env.localCookie = {
    setCookie: c => { host.storageSet(cookieKey, String(c).split(';')[0]); },
    getCookie: () => host.storageGet(cookieKey) || '',
  };
  env.sleep = ms => new Promise(r => (typeof setTimeout === 'function' ? setTimeout(r, Math.min(Number(ms) || 0, 10000)) : r()));
  const log = (...a) => { try { host.log && host.log(a.map(x => typeof x === 'string' ? x : JSON.stringify(x)).join(' ')); } catch (e) { } };
  env.Log = { log };
  env.console = { log, error: log, warn: log, info: log };
  env.Console = env.console;
  env.log = log;
  env.UserAgent = { system: () => DEFAULT_UA, chrome: () => DEFAULT_UA, android: () => DEFAULT_UA, ios: () => 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' };
  env.Engine = { newBrowser: () => { throw new Error('Headless browser is not available in this app (' + (host.name || 'host') + ')'); } };
  env.Graphics = { createCanvas: () => { throw new Error('Graphics API is not available in this app'); }, createImage: () => { throw new Error('Graphics API is not available in this app'); } };
  env.Script = { execute: () => { throw new Error('Script.execute is not available'); } };
  env.Elements = Elements; env.Element = Element;
  env.__meta = meta;
  return env;
}

function httpBuilder(env, method, url) {
  const st = { method, url, headers: {}, body: undefined, queries: undefined };
  const b = {
    headers(h) { Object.assign(st.headers, h || {}); return b; },
    header(k, v) { st.headers[k] = v; return b; },
    params(q) { st.queries = q; return b; },
    queries(q) { st.queries = q; return b; },
    body(x) { st.body = x; return b; },
    async html(cs) { return (await env.fetch(st.url, st)).html(cs); },
    async string(cs) { return (await env.fetch(st.url, st)).text(cs); },
    async text(cs) { return (await env.fetch(st.url, st)).text(cs); },
    async json() { return (await env.fetch(st.url, st)).json(); },
  };
  return b;
}

// Names of env members whose calls must be awaited after the async transform.
export const ASYNC_ENV_CALLS = ['fetch', 'sleep'];
export const ASYNC_MEMBER_CALLS = { Http: ['get', 'post'] }; // chain ends .html()/.string() are awaited via member names
export const ASYNC_CHAIN_METHODS = ['html', 'string', 'text', 'json']; // only when chained on Http.get/post builders
