var BASE_URL = "https://www.shubenshu.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "#list a",
 "item": "li:has(span.s2)",
 "link": "span.s2 a@href",
 "title": "span.s2 a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "content": "#booktxt"
};
