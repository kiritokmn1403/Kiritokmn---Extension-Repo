var BASE_URL = "https://mottruyen.app";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
// mottruyen.app is a Vue app over api.mottruyen.app (public JSON, no auth for free chapters).
var API = "https://api.mottruyen.app/api/v1";
var IMG = "https://static.mottruyen.app/api/v1/storage";
function api(path) {
  var r = fetch(API + path, { headers: { "Accept": "application/json", "Referer": BASE_URL + "/", "Origin": BASE_URL } });
  if (!r.ok) throw new Error("HTTP " + r.status + " " + API + path);
  return r.json();
}
function img(p) { return !p ? "" : /^https?:/.test(p) ? p : IMG + p; }
function story(s) {
  return { name: String(s.name || "").trim(), link: BASE_URL + "/" + (s.slug || "truyen") + "/" + s.id, cover: img(s.image || s.thumbnail), description: s.author && s.author.name ? s.author.name : "", host: BASE_URL };
}
function storyId(url) { var m = /\/(\d+)(?:\/chuong\/\d+)?\/?(?:[?#].*)?$/.exec(url); return m ? m[1] : ""; }
function listPage(q, page) {
  var p = parseInt(page || "1", 10) || 1;
  var j = api("/story?collection=SEARCH&page=" + (p - 1) + "&size=20&keyword=" + encodeURIComponent(q.keyword || "") + "&categoryIds=" + encodeURIComponent(q.cat || "") + "&packageType=&type=");
  var meta = j.metaData || {};
  return Response.success((j.data || []).map(story), p < (meta.totalPage || 0) ? String(p + 1) : null);
}
