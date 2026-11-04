var BASE_URL = "https://destinteam.xyz";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[page/{p}/]"
 },
 "search": "/?username={q}[&page={p}]",
 "item": ".uk-panel",
 "title": "h3 a || a@title || img@alt",
 "link": "a@href",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};
