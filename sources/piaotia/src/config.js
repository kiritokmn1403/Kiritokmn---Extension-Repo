var BASE_URL = "https://www.piaotia.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "ul.navlist a",
 "d_title": "meta[property=og:title]@content || title",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "item": "table.hide > tr",
 "link": "a@href",
 "title": "a",
 "content": "div.main.m_foot"
};
