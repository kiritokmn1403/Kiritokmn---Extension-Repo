var BASE_URL = "https://truyenqq.com.vn";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?s={q}[&page={p}]",
 "item": ".item",
 "title": "h3 || a@title || img@alt",
 "link": "a@href",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};
