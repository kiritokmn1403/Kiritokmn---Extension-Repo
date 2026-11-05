var BASE_URL = "https://webtruyenchu.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?q={q}",
 "ch_list": "ol.divide-y.divide-zinc-100 a",
 "item": "ul.grid-cols-1 > li.rounded-xl.border",
 "link": "h3 a@href",
 "title": "h3 a",
 "cover": "img@img",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "content": "article.doc-noidung"
};
