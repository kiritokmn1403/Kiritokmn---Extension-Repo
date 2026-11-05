var BASE_URL = "https://navyteams.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "item": "div.comic-grid.normal > div.comic-item",
 "title": "h3",
 "link": "a@href",
 "ch_list": "div.episode-cover a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "pages": "div.content-type-manga img",
 "cover": "img@img"
};
