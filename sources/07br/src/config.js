var BASE_URL = "https://www.bqg603.cc";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
// The site is a client-rendered app over the apibi.cc JSON API (mirrors: apiqu.cc, apige.cc).
// book/booklist/sort/search take plain query params; chapter needs ?token=base64(AES-128-CBC(JSON)).
var API = "https://apibi.cc";
var AES_KEY = "a3dc22cf70418a51", AES_IV = "394c2c3202da6270";
function api(path) {
  var r = fetch(API + path, { headers: { "Accept": "application/json", "Referer": BASE_URL + "/" } });
  if (!r.ok) throw new Error("HTTP " + r.status + " " + API + path);
  return r.json();
}
function cover(id) { return BASE_URL + "/bookimg/" + Math.floor(id / 1000) + "/" + id + ".jpg"; }
function book(b) {
  return { name: b.title, link: BASE_URL + "/#/book/" + b.id + "/", cover: cover(b.id), description: String(b.author || "").trim(), host: BASE_URL };
}
function bookId(url) { var m = /book\/(\d+)/.exec(url); return m ? m[1] : String(url).replace(/\D/g, ""); }
// --- minimal AES-128-CBC encrypt (PKCS7), ES5 so it runs on every host ---
var AES = (function () {
  var S = [], X = [];
  (function () {
    var d = [], i, x = 0, xi = 0;
    for (i = 0; i < 256; i++) d[i] = i < 128 ? i << 1 : (i << 1) ^ 0x11b;
    for (i = 0; i < 256; i++) {
      var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
      sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63; S[x] = sx;
      if (!x) x = xi = 1; else { var x2 = d[x], x8 = d[d[x2]]; x = x2 ^ d[d[d[x8 ^ x2]]]; xi ^= d[d[xi]]; }
    }
    for (i = 0; i < 256; i++) X[i] = d[i];
  })();
  function expand(k) {
    var w = k.slice(), rc = 1;
    for (var i = 16; i < 176; i += 4) {
      var t = w.slice(i - 4, i);
      if (i % 16 === 0) { t = [S[t[1]] ^ rc, S[t[2]], S[t[3]], S[t[0]]]; rc = X[rc]; }
      for (var j = 0; j < 4; j++) w[i + j] = w[i - 16 + j] ^ t[j];
    }
    return w;
  }
  function block(s, w) {
    var r, i, c;
    for (i = 0; i < 16; i++) s[i] ^= w[i];
    for (r = 1; r <= 10; r++) {
      for (i = 0; i < 16; i++) s[i] = S[s[i]];
      s = [s[0], s[5], s[10], s[15], s[4], s[9], s[14], s[3], s[8], s[13], s[2], s[7], s[12], s[1], s[6], s[11]];
      if (r < 10) for (c = 0; c < 16; c += 4) {
        var a = s[c], b = s[c + 1], e = s[c + 2], f = s[c + 3], t = a ^ b ^ e ^ f;
        s[c] ^= t ^ X[a ^ b]; s[c + 1] ^= t ^ X[b ^ e]; s[c + 2] ^= t ^ X[e ^ f]; s[c + 3] ^= t ^ X[f ^ a];
      }
      for (i = 0; i < 16; i++) s[i] ^= w[r * 16 + i];
    }
    return s;
  }
  function bytes(str) { var u = unescape(encodeURIComponent(str)), o = []; for (var i = 0; i < u.length; i++) o.push(u.charCodeAt(i)); return o; }
  function b64(a) {
    var T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = "";
    for (var i = 0; i < a.length; i += 3) {
      var n = (a[i] << 16) | ((a[i + 1] || 0) << 8) | (a[i + 2] || 0);
      o += T.charAt(n >> 18 & 63) + T.charAt(n >> 12 & 63) + (i + 1 < a.length ? T.charAt(n >> 6 & 63) : "=") + (i + 2 < a.length ? T.charAt(n & 63) : "=");
    }
    return o;
  }
  return function (text, key, iv) {
    var w = expand(bytes(key)), p = bytes(text), prev = bytes(iv), out = [], n = 16 - p.length % 16, i, j;
    for (i = 0; i < n; i++) p.push(n);
    for (i = 0; i < p.length; i += 16) {
      var s = [];
      for (j = 0; j < 16; j++) s[j] = p[i + j] ^ prev[j];
      prev = block(s, w); out = out.concat(prev);
    }
    return b64(out);
  };
})();
function token(obj) { return encodeURIComponent(AES(JSON.stringify(obj), AES_KEY, AES_IV)); }
