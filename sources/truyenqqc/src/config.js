var BASE_URL = "https://truyenqq.com.vn";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?s={q}[&page={p}]",
 "item": "div.inner > div.item, .item:has(div.info h3.name)",
 "title": "h3.name a || .caption h3 || h3 || img@alt",
 "link": "h3.name a@href || a@href",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};
