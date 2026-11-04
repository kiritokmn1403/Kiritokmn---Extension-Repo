// Rhino (Android) prelude for Aniyomi / Nekoyomi APKs. ES5 only.
// Provides the vBook API on top of `__host` (Kotlin: OkHttp + jsoup) and exposes __call() to Kotlin.
var __DEFAULT_UA = 'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36';
function __s(v) { return v == null ? '' : String(v); }

// ---------- jsoup wrappers (same surface as runtime/dom.js) ----------
function __El(j) { this.j = j; }
__El.prototype = {
  select: function (c) { return __wrapEls(this.j.select(c)); },
  selectFirst: function (c) { var r = this.j.selectFirst(c); return r == null ? null : new __El(r); },
  is: function (c) { return !!this.j.is(c); },
  text: function () { return __s(this.j.text()); },
  ownText: function () { return __s(this.j.ownText()); },
  wholeText: function () { return __s(this.j.wholeText()); },
  data: function () { return __s(this.j.data()); },
  html: function () { return __s(this.j.html()); },
  outerHtml: function () { return __s(this.j.outerHtml()); },
  toString: function () { return __s(this.j.outerHtml()); },
  tagName: function () { return __s(this.j.tagName()); },
  nodeName: function () { return __s(this.j.nodeName()); },
  id: function () { return __s(this.j.id()); },
  className: function () { return __s(this.j.className()); },
  hasClass: function (c) { return !!this.j.hasClass(c); },
  attr: function (n, v) { if (v !== undefined) { this.j.attr(n, __s(v)); return this; } return __s(this.j.attr(n)); },
  absUrl: function (n) { return __s(this.j.absUrl(n)); },
  hasAttr: function (n) { return !!this.j.hasAttr(n); },
  removeAttr: function (n) { this.j.removeAttr(n); return this; },
  attributes: function () { var o = {}; var it = this.j.attributes().iterator(); while (it.hasNext()) { var a = it.next(); o[__s(a.getKey())] = __s(a.getValue()); } return o; },
  val: function () { return __s(this.j.val()); },
  parent: function () { var p = this.j.parent(); return p == null ? null : new __El(p); },
  parents: function () { return __wrapEls(this.j.parents()); },
  closest: function (c) { var p = this.j.closest(c); return p == null ? null : new __El(p); },
  children: function () { return __wrapEls(this.j.children()); },
  child: function (i) { try { return new __El(this.j.child(i)); } catch (e) { return null; } },
  childrenSize: function () { return this.j.childrenSize(); },
  nextElementSibling: function () { var n = this.j.nextElementSibling(); return n == null ? null : new __El(n); },
  previousElementSibling: function () { var n = this.j.previousElementSibling(); return n == null ? null : new __El(n); },
  siblingElements: function () { return __wrapEls(this.j.siblingElements()); },
  elementSiblingIndex: function () { return this.j.elementSiblingIndex(); },
  getElementsByTag: function (t) { return __wrapEls(this.j.getElementsByTag(t)); },
  getElementsByClass: function (c) { return __wrapEls(this.j.getElementsByClass(c)); },
  getElementById: function (i) { var r = this.j.getElementById(i); return r == null ? null : new __El(r); },
  remove: function () { this.j.remove(); return this; },
  empty: function () { this.j.empty(); return this; },
  title: function () { try { return __s(this.j.title()); } catch (e) { var t = this.j.selectFirst('title'); return t ? __s(t.text()) : ''; } },
  body: function () { try { return new __El(this.j.body()); } catch (e) { return this; } },
  head: function () { try { return new __El(this.j.head()); } catch (e) { return this; } },
  location: function () { return __s(this.j.baseUri()); }
};
var __EP = [];
function __wrapEls(jl) { var a = []; if (jl != null) { var n = jl.size(); for (var i = 0; i < n; i++) a.push(new __El(jl.get(i))); } return __mkEls(a); }
function __mkEls(a) { Object.setPrototypeOf(a, __ElsProto); return a; }
var __ElsProto = Object.create(Array.prototype);
(function () {
  var m = {
    size: function () { return this.length; }, isEmpty: function () { return this.length === 0; },
    get: function (i) { return this[i] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; },
    eq: function (i) { return __mkEls(this[i] ? [this[i]] : []); },
    text: function () { var o = []; for (var i = 0; i < this.length; i++) { var t = this[i].text(); if (t) o.push(t); } return o.join(' '); },
    eachText: function () { var o = []; for (var i = 0; i < this.length; i++) { var t = this[i].text(); if (t) o.push(t); } return o; },
    html: function () { var o = []; for (var i = 0; i < this.length; i++) o.push(this[i].html()); return o.join('\n'); },
    outerHtml: function () { var o = []; for (var i = 0; i < this.length; i++) o.push(this[i].outerHtml()); return o.join('\n'); },
    toString: function () { return this.outerHtml(); },
    attr: function (n, v) { var i; if (v !== undefined) { for (i = 0; i < this.length; i++) this[i].attr(n, v); return this; } for (i = 0; i < this.length; i++) if (this[i].hasAttr(n.replace(/^abs:/, ''))) return this[i].attr(n); return ''; },
    eachAttr: function (n) { var o = []; for (var i = 0; i < this.length; i++) if (this[i].hasAttr(n)) o.push(this[i].attr(n)); return o; },
    hasAttr: function (n) { for (var i = 0; i < this.length; i++) if (this[i].hasAttr(n)) return true; return false; },
    hasClass: function (c) { for (var i = 0; i < this.length; i++) if (this[i].hasClass(c)) return true; return false; },
    val: function () { return this.length ? this[0].val() : ''; },
    select: function (c) { var o = []; for (var i = 0; i < this.length; i++) { var r = this[i].select(c); for (var k = 0; k < r.length; k++) if (o.indexOf(r[k]) < 0) o.push(r[k]); } return __mkEls(o); },
    selectFirst: function (c) { for (var i = 0; i < this.length; i++) { var r = this[i].selectFirst(c); if (r) return r; } return null; },
    is: function (c) { for (var i = 0; i < this.length; i++) if (this[i].is(c)) return true; return false; },
    not: function (c) { var o = []; for (var i = 0; i < this.length; i++) if (!this[i].is(c)) o.push(this[i]); return __mkEls(o); },
    next: function () { var o = []; for (var i = 0; i < this.length; i++) { var n = this[i].nextElementSibling(); if (n) o.push(n); } return __mkEls(o); },
    prev: function () { var o = []; for (var i = 0; i < this.length; i++) { var n = this[i].previousElementSibling(); if (n) o.push(n); } return __mkEls(o); },
    parents: function () { var o = []; for (var i = 0; i < this.length; i++) o = o.concat(this[i].parents()); return __mkEls(o); },
    remove: function () { for (var i = 0; i < this.length; i++) this[i].remove(); return this; },
    empty: function () { for (var i = 0; i < this.length; i++) this[i].empty(); return this; },
    removeAttr: function (n) { for (var i = 0; i < this.length; i++) this[i].removeAttr(n); return this; }
  };
  for (var k in m) Object.defineProperty(__ElsProto, k, { value: m[k], writable: true, configurable: true });
})();

// ---------- vBook environment ----------
function __VResp(r, req) {
  this._r = r; this.status = r.status; this.ok = r.status >= 200 && r.status < 300; this.url = __s(r.url);
  this.statusText = String(r.status);
  try { this.headers = JSON.parse(__s(r.headers)); } catch (e) { this.headers = {}; }
  this.request = { url: req.url, headers: req.headers };
}
__VResp.prototype = {
  header: function (k) { for (var h in this.headers) if (h.toLowerCase() === String(k).toLowerCase()) return this.headers[h]; return ''; },
  text: function (cs) { return __s(this._r.text(cs || null)); },
  string: function (cs) { return this.text(cs); },
  html: function (cs) { return new __El(__host.parse(this.text(cs), this.url)); },
  json: function () { try { return JSON.parse(this.text()); } catch (e) { return null; } },
  base64: function () { return __s(this._r.base64()); },
  blob: function () { var self = this; return { size: this._r.size(), type: this.header('content-type'), base64: function () { return self.base64(); } }; }
};
function __qs(o) { var p = []; for (var k in o) p.push(encodeURIComponent(k) + '=' + encodeURIComponent(o[k])); return p.join('&'); }
var __env = {
  Response: { success: function (d, d2) { return { code: 0, data: d === undefined ? null : d, data2: d2 === undefined ? null : d2 }; }, error: function (m) { return { code: 1, data: __s(m) }; } },
  fetch: function (url, opts) {
    opts = opts || {}; var u = String(url);
    if (opts.queries) { var q = __qs(opts.queries); if (q) u += (u.indexOf('?') >= 0 ? '&' : '?') + q; }
    var h = { 'User-Agent': __DEFAULT_UA }; var k;
    if (opts.headers) for (k in opts.headers) h[k] = String(opts.headers[k]);
    var ck = __host.storageGet('__cookie__'); var hasCk = false; for (k in h) if (k.toLowerCase() === 'cookie') hasCk = true;
    if (ck && !hasCk) h.Cookie = __s(ck);
    var body = opts.body;
    if (body != null && typeof body === 'object') {
      var ct = null; for (k in h) if (k.toLowerCase() === 'content-type') ct = h[k];
      if (ct && /json/i.test(ct)) body = JSON.stringify(body); else { body = __qs(body); if (!ct) h['Content-Type'] = 'application/x-www-form-urlencoded'; }
    }
    var method = (opts.method || (body != null ? 'POST' : 'GET')).toUpperCase();
    var r = __host.request(u, method, JSON.stringify(h), body == null ? null : String(body));
    return new __VResp(r, { url: u, headers: h });
  },
  Html: { parse: function (s, b) { return new __El(__host.parse(__s(s), __s(b))); }, clean: function (s) { return __s(s); } },
  localStorage: { getItem: function (k) { var v = __host.storageGet('ls:' + k); return v == null ? null : __s(v); }, setItem: function (k, v) { __host.storageSet('ls:' + k, v == null ? null : String(v)); }, removeItem: function (k) { __host.storageSet('ls:' + k, null); }, clear: function () { } },
  cacheStorage: { getItem: function (k) { var v = __host.storageGet('cs:' + k); return v == null ? null : __s(v); }, setItem: function (k, v) { __host.storageSet('cs:' + k, v == null ? null : String(v)); }, removeItem: function (k) { __host.storageSet('cs:' + k, null); }, clear: function () { } },
  localConfig: { getItem: function (k) { var v = __host.config(k); return v == null ? null : __s(v); } },
  localCookie: { setCookie: function (c) { __host.storageSet('__cookie__', String(c).split(';')[0]); }, getCookie: function () { return __s(__host.storageGet('__cookie__')); } },
  sleep: function (ms) { __host.sleep(Number(ms) || 0); },
  Log: { log: function (m) { __host.log(typeof m === 'string' ? m : JSON.stringify(m)); } },
  console: { log: function (m) { __host.log(typeof m === 'string' ? m : JSON.stringify(m)); }, error: function (m) { __host.log(String(m)); }, warn: function (m) { __host.log(String(m)); }, info: function (m) { __host.log(String(m)); } },
  log: function (m) { __host.log(String(m)); },
  UserAgent: { system: function () { return __DEFAULT_UA; }, chrome: function () { return __DEFAULT_UA; }, android: function () { return __DEFAULT_UA; }, ios: function () { return __DEFAULT_UA; } },
  Engine: { newBrowser: function () { throw new Error('Headless browser is not available in Aniyomi/Nekoyomi'); } },
  Graphics: { createCanvas: function () { throw new Error('Graphics API not available'); }, createImage: function () { throw new Error('Graphics API not available'); } },
  Script: { execute: function () { throw new Error('Script.execute not available'); } }
};
__env.Http = {
  get: function (u) { return __httpB('GET', u); }, post: function (u) { return __httpB('POST', u); }
};
function __httpB(m, u) {
  var st = { method: m, headers: {}, body: undefined, queries: undefined };
  var b = {
    headers: function (h) { for (var k in h) st.headers[k] = h[k]; return b; }, header: function (k, v) { st.headers[k] = v; return b; },
    params: function (q) { st.queries = q; return b; }, queries: function (q) { st.queries = q; return b; }, body: function (x) { st.body = x; return b; },
    html: function (cs) { return __env.fetch(u, st).html(cs); }, string: function (cs) { return __env.fetch(u, st).text(cs); }, text: function (cs) { return __env.fetch(u, st).text(cs); }, json: function () { return __env.fetch(u, st).json(); }
  };
  return b;
}
// URL resolution for the engine (Rhino has no URL class)
function __abs(base, u) { u = __s(u).trim(); if (!u) return ''; if (/^data:|^blob:/.test(u)) return u; if (u.indexOf('//') === 0) return 'https:' + u; return __s(__host.resolve(base, u)); }

var __SRC = null, __ENG = null;
function __register(def) { __SRC = def; }
function __call(method) {
  var args = Array.prototype.slice.call(arguments, 1);
  try {
    if (!__ENG) {
      __ENG = new VBookEngine({ meta: __SRC.META, scripts: __SRC.SCRIPTS, env: __env, host: { config: function (k) { var v = __host.config(k); return v == null ? null : __s(v); }, log: function (m) { __host.log(String(m)); } } });
    }
    if (method === 'popular' || method === 'latest') args[0] = parseInt(args[0], 10) || 1;
    if (method === 'search') args[1] = parseInt(args[1], 10) || 1;
    var r = __ENG[method].apply(__ENG, args.map(function (a) { return typeof a === 'number' ? a : __s(a); }));
    return JSON.stringify({ ok: true, result: r });
  } catch (e) {
    return JSON.stringify({ error: true, message: __s(e && (e.message || e)) });
  }
}
