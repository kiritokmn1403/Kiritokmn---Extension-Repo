var BASE_URL = "https://luvevalandn2.co";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Truyện mới": "/danh-sach/moi-dang[?page={p}]",
  "Hot tuần": "/danh-sach/truyen-hot-tuan[?page={p}]",
  "Xem nhiều": "/danh-sach/truyen-nhieu-nguoi-xem[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "td.list-chapter__name a",
 "item": ".book-vertical__item, tr.book__list-item",
 "title": ".book__lg-title a || td.book__list-name a || img@alt",
 "link": "a@href",
 "cover": "img@img",
 "pageSize": 10,
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .book__detail-image img@img",
 "d_desc": "#home",
 "d_genres": ".book__detail-text a[href*='/the-loai/']",
 "content": "#chapter-content",
 "c_title": "h1 || h2"
};
