var BASE_URL = "https://e-hentai.org";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?f_cats=0&f_search={q}",
 "item": "table.itg.gltc > tr",
 "title": "[class*=name] a",
 "link": "[class*=name] a@href",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "ch_list": "#gd5 a",
 "cover": "img@img",
 "pages": "p.g2.gsp img"
};
