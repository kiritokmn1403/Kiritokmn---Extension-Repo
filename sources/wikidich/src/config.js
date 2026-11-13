var BASE_URL = "https://wikicv.org";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]",
 "item": "div.book-list > div.book-item",
 "link": "a@href",
 "title": ".book-title || h3 || img@alt || .info-col a",
 "d_title": "h2 || title",
 "d_cover": ".cover-wrapper img@img",
 "d_desc": ".book-desc-detail"
};
