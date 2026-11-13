var BASE_URL = "https://www.suduguu.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "div.itemtxt a",
 "item": "ul.list.top > li",
 "link": "a@href",
 "title": "img@alt || p a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "content": "div.con"
};
