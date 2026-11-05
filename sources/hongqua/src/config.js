var BASE_URL = "https://hongguoduanju.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "div.pc-actors-xnd4C2.m-actors-sBQbhN a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "item": "div.m-card-rail-ZAMiX2.m-card-rail-mask-right-nAETKt > a.m-card-vMOsDf",
 "link": ":self@href",
 "title": "[class*=title]",
 "cover": "img@img"
};
