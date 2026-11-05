var BASE_URL = "https://gioitruyen.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
// gioitruyen.com is a client-rendered app; everything comes from its JSON API under /api/v1.
var API = BASE_URL + "/api/v1";
function api(path) {
  var r = fetch(API + path, { headers: { "Accept": "application/json", "Referer": BASE_URL + "/" } });
  if (!r.ok) throw new Error("HTTP " + r.status + " " + API + path);
  return r.json();
}
function cover(s) { var c = s && (s.coverAssetId || s.coverUrl || s.cover); return c ? (/^https?:/.test(c) ? c : BASE_URL + c) : ""; }
function story(s) {
  return {
    name: s.title, link: BASE_URL + "/truyen/" + s.slug, cover: cover(s),
    description: s.latestChapterNumber ? "Chương " + s.latestChapterNumber : (s.teamName || ""), host: BASE_URL
  };
}
function slugOf(url) { var m = /\/truyen\/([^\/?#]+)/.exec(url); return m ? m[1] : url; }
