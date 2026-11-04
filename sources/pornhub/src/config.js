var BASE_URL = "https://www.pornhub.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};
