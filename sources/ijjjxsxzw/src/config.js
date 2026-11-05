var BASE_URL = "https://m.ijjjxsxzw.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "item": "div.sosuo > ul > li.selected",
 "title": "a",
 "link": "a@href",
 "ch_list": "div.saixuan a",
 "d_title": "meta[property=og:title]@content || title",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "content": "div.main"
};
