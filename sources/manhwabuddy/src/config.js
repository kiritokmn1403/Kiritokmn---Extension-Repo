var BASE_URL = "https://manhwabuddy.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/search/?s={q}[&page={p}]",
 "item": ".latest-left",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};
