var BASE_URL = "https://global.novelpia.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "item": "div.section-line > span.more",
 "title": "a",
 "link": "a@href",
 "d_title": "meta[property=og:title]@content || title",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "ch_list": "div.nv-cover a",
 "content": "#synopsis"
};
