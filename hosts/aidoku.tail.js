// ---- Aidoku host adapter (appended after the bundled engine `__VB`) ----
// Aidoku (iOS) runs sources as WebAssembly; our Rust bridge (aidoku/bridge) keeps one JavaScriptCore
// context per source and drives this adapter with a step protocol, because JS cannot call back into
// the WASM host synchronously:
//   __A.start(op, args, cfg) -> task id      (starts an async engine call)
//   __A.poll(id)  -> JSON {s:'f', q:[requests]} | {s:'d', v:result, st?:store} | {s:'e', m:message} | {s:'w'}
//   __A.resume(responses)                    (Rust performed the HTTP requests; resolve the pending promises)
// JavaScriptCore drains the microtask queue at the end of every evaluateScript call, so each poll sees
// the state reached after all synchronous continuations ran.
var __A = (function () {
  var cfg = {}, store = {}, dirty = false, seq = 0, tseq = 0;
  var pend = {}, tasks = {};
  var B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var B64R = {}; for (var bi = 0; bi < 64; bi++) B64R[B64.charCodeAt(bi)] = bi;
  function b64bytes(s) {
    s = String(s || '').replace(/[^A-Za-z0-9+/]/g, '');
    var n = s.length, out = new Uint8Array((n * 3) >> 2), o = 0, i = 0;
    for (; i + 4 <= n; i += 4) {
      var v = (B64R[s.charCodeAt(i)] << 18) | (B64R[s.charCodeAt(i + 1)] << 12) | (B64R[s.charCodeAt(i + 2)] << 6) | B64R[s.charCodeAt(i + 3)];
      out[o++] = v >> 16; out[o++] = (v >> 8) & 255; out[o++] = v & 255;
    }
    if (n - i === 2) { var v2 = (B64R[s.charCodeAt(i)] << 18) | (B64R[s.charCodeAt(i + 1)] << 12); out[o++] = v2 >> 16; }
    else if (n - i === 3) { var v3 = (B64R[s.charCodeAt(i)] << 18) | (B64R[s.charCodeAt(i + 1)] << 12) | (B64R[s.charCodeAt(i + 2)] << 6); out[o++] = v3 >> 16; out[o++] = (v3 >> 8) & 255; }
    return out.subarray(0, o);
  }
  function utf8(b) {
    var s = '', chunk = [], i = 0, n = b.length;
    while (i < n) {
      var c = b[i++], cp;
      if (c < 0x80) cp = c;
      else if (c < 0xe0 && i < n) cp = ((c & 31) << 6) | (b[i++] & 63);
      else if (c < 0xf0 && i + 1 < n) { cp = ((c & 15) << 12) | ((b[i] & 63) << 6) | (b[i + 1] & 63); i += 2; }
      else if (i + 2 < n) { cp = ((c & 7) << 18) | ((b[i] & 63) << 12) | ((b[i + 1] & 63) << 6) | (b[i + 2] & 63); i += 3; }
      else cp = 0xfffd;
      if (cp > 0xffff) { cp -= 0x10000; chunk.push(0xd800 + (cp >> 10), 0xdc00 + (cp & 1023)); } else chunk.push(cp);
      if (chunk.length > 8000) { s += String.fromCharCode.apply(null, chunk); chunk = []; }
    }
    return s + String.fromCharCode.apply(null, chunk);
  }
  function latin1(b) { var s = ''; for (var i = 0; i < b.length; i += 8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 8000)); return s; }
  // JavaScriptCore contexts have no TextDecoder: provide utf-8 / gbk (Chinese sites) / latin1.
  if (typeof TextDecoder === 'undefined') {
    globalThis.TextDecoder = function (label) { this.enc = String(label || 'utf-8').toLowerCase(); };
    globalThis.TextDecoder.prototype.decode = function (b) {
      b = b instanceof Uint8Array ? b : new Uint8Array(b || []);
      if (/gbk|gb2312|gb18030/.test(this.enc)) {
        if (typeof __GBK_TABLE !== 'string') throw new Error('gbk table missing');
        var t = latin1(b), o = '';
        for (var i = 0; i < t.length; i++) {
          var c = t.charCodeAt(i);
          if (c < 0x80) { o += t[i]; continue; }
          var c2 = t.charCodeAt(i + 1);
          if (c >= 0x81 && c <= 0xfe && c2 >= 0x40 && c2 <= 0xfe && c2 !== 0x7f) { o += __GBK_TABLE[(c - 0x81) * 190 + (c2 - 0x40) - (c2 > 0x7f ? 1 : 0)]; i++; } else o += '�';
        }
        return o;
      }
      if (/latin1|iso-8859-1|windows-1252/.test(this.enc)) return latin1(b);
      return utf8(b);
    };
  }
  var host = {
    name: 'Aidoku',
    request: function (r) {
      return new Promise(function (res) { var i = ++seq; pend[i] = { r: r, res: res, sent: false }; });
    },
    storageGet: function (k) { return store[k] == null ? null : store[k]; },
    storageSet: function (k, v) { if (v == null) delete store[k]; else store[k] = String(v); dirty = true; },
    config: function (k) { var v = cfg[k]; return v == null || v === '' ? null : String(v); },
    log: function () { },
  };
  var eng = null;
  function E() { return eng || (eng = __VB.create(host)); }
  var M = __VB.META;
  var str = function (v) { return v == null ? '' : String(v); };
  function base() { return E().base; }
  function origin(u) { var m = /^https?:\/\/[^/?#]+/i.exec(str(u)); return m ? m[0] : base(); }
  // vBook HTML chapter -> Markdown paragraphs for Aidoku's text reader
  function md(html) {
    var t = str(html)
      .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, '')
      .replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|h[1-6]|li|blockquote|tr)>/gi, '\n')
      .replace(/<(h[1-6])[^>]*>/gi, '\n**').replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'")
      .replace(/&#(\d+);/g, function (m, d) { return String.fromCharCode(+d); }).replace(/&#x([0-9a-f]+);/gi, function (m, h) { return String.fromCharCode(parseInt(h, 16)); })
      .replace(/&amp;/g, '&');
    return t.split(/\n/).map(function (l) { return l.replace(/\s+/g, ' ').trim(); }).filter(Boolean)
      .map(function (l) { return l.replace(/^([#>*+-]|\d+\.)(\s)/, '\\$1$2').replace(/\*\*$/, ''); }).join('\n\n');
  }
  function num(name, i) { var m = /(?:chương|chuong|chapter|ch\.?|tập|tap|episode|ep\.?|第)\s*(\d+(?:\.\d+)?)/i.exec(str(name)); return m ? parseFloat(m[1]) : i + 1; }
  function entries(r) { return { e: r.items.map(function (i) { return { k: i.link, t: i.name, c: i.cover || null }; }), n: !!r.hasNext }; }
  var OPS = {
    listings: async function () {
      var tabs = await E().tabs();
      return tabs.map(function (t, i) { return { id: 'tab' + i, name: str(t.title || t.name || ('Tab ' + (i + 1))) }; });
    },
    list: async function (a) {
      var e = E(), p = a.page || 1;
      if (a.q != null && a.q !== '') return entries(await e.search(a.q, p));
      var id = str(a.id);
      if (/^tab\d+$/.test(id)) {
        var tabs = await e.tabs(), t = tabs[+id.slice(3)];
        if (t) return entries(await e.list(e.scriptFile(t.script), str(t.input), p));
      }
      return entries(id === 'latest' ? await e.latest(p) : await e.popular(p));
    },
    manga: async function (a) {
      var e = E(), out = {};
      if (a.d) {
        var d = await e.detail(a.k);
        out.t = d.name; out.c = d.cover || null; out.a = d.author ? [d.author] : null; out.d = d.description || d.detail || null;
        out.g = d.genres && d.genres.length ? d.genres.slice(0, 255) : null; out.s = d.ongoing ? 1 : 2;
      }
      if (a.c) {
        var ch = await e.chapters(a.k);
        out.ch = ch.map(function (c, i) { return { k: c.url, t: c.name, n: num(c.name, i), l: !!c.pay }; }).reverse();
      }
      return out;
    },
    pages: async function (a) {
      var e = E();
      if (M.type === 'novel') { var c = await e.content(a.k); return { x: (c.title ? '**' + c.title.trim() + '**\n\n' : '') + md(c.html) }; }
      var ref = origin(e.decanon(a.k)) + '/';
      return { p: (await e.pages(a.k)).map(function (u) { return { u: u, r: ref }; }) };
    },
  };
  return {
    meta: function () { return JSON.stringify({ id: M.id, name: M.name, type: M.type, source: M.source, ua: __VB.UA }); },
    init: function (st) { try { store = st ? JSON.parse(st) || {} : {}; } catch (e) { store = {}; } return 'ok'; },
    start: function (op, args, conf) {
      var id = ++tseq, t = tasks[id] = { s: 'r' };
      try { cfg = conf ? JSON.parse(conf) : {}; } catch (e) { cfg = {}; }
      var a; try { a = JSON.parse(args || '{}'); } catch (e) { a = {}; }
      Promise.resolve().then(function () { if (!OPS[op]) throw new Error('unknown op ' + op); return OPS[op](a); })
        .then(function (v) { t.s = 'd'; t.v = v; }, function (err) { t.s = 'e'; t.m = str(err && err.message || err); });
      return String(id);
    },
    poll: function (id) {
      var t = tasks[id];
      if (!t) return JSON.stringify({ s: 'e', m: 'no task ' + id });
      if (t.s === 'd' || t.s === 'e') {
        delete tasks[id];
        var o = t.s === 'd' ? { s: 'd', v: t.v } : { s: 'e', m: t.m };
        if (dirty) { o.st = JSON.stringify(store); dirty = false; }
        return JSON.stringify(o);
      }
      var q = [];
      for (var k in pend) {
        var p = pend[k]; if (p.sent) continue; p.sent = true;
        var r = p.r, h = r.headers || {};
        if (!Object.keys(h).some(function (x) { return x.toLowerCase() === 'referer'; })) h.Referer = origin(r.url) + '/';
        q.push({ i: +k, u: str(r.url), m: str(r.method || 'GET'), h: h, b: r.body == null ? null : str(r.body) });
      }
      return JSON.stringify(q.length ? { s: 'f', q: q } : { s: 'w' });
    },
    resume: function (list) {
      for (var j = 0; j < list.length; j++) {
        var x = list[j], p = pend[x.i]; if (!p) continue; delete pend[x.i];
        var bytes = b64bytes(x.b), hd = x.h || {}, ct = '';
        for (var hk in hd) if (hk.toLowerCase() === 'content-type') ct = str(hd[hk]);
        var cs = (/charset=["']?([\w-]+)/i.exec(ct) || [])[1] || '';
        if (!cs && typeof __GBK_TABLE === 'string') cs = (/<meta[^>]+charset=["']?(gbk|gb2312|gb18030)/i.exec(latin1(bytes.subarray(0, 4096))) || [])[1] || '';
        var text = /gbk|gb2312|gb18030/i.test(cs) && typeof __GBK_TABLE === 'string' ? new TextDecoder('gbk').decode(bytes) : utf8(bytes);
        p.res({ status: x.s | 0, url: x.u || p.r.url, headers: hd, bytes: bytes, text: text, error: x.e || undefined });
      }
      return 'ok';
    },
  };
})();
