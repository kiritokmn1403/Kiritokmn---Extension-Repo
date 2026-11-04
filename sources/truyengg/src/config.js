var BASE_URL = "https://truyenggvn.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "item": ".book_avatar",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};
