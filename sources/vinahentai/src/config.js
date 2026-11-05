var BASE_URL = "https://vinahentai.bio";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?q={q}",
 "ch_list": "div.flex-wrap.justify-center a",
 "item": "div.-mx-2.grid-cols-2 > div > a.group.bg-bgc-layer1",
 "link": ":self@href",
 "title": ":self",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "pages": "div.inset-0 img",
 "s_item": "div.space-y-3.transition-opacity > a.group.border-bd-default",
 "s_title": "h2",
 "s_link": ":self@href",
 "s_cover": "img@img"
};
