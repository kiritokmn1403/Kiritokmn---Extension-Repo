var BASE_URL = "https://moyue.app";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/search?q={q}",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]",
 "item": "div.ranking-panel > a.ranking-item",
 "link": ":self@href",
 "title": "[class*=title]",
 "cover": "img@img",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content"
};
