var BASE_URL = "https://apptruyenchu.pro";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/truyen[?page={p}]",
  "Truyện dịch nổi bật": "/truyen?sort=1[&page={p}]",
  "Mới nhất": "/truyen?sort=2[&page={p}]",
  "Tiên hiệp": "/truyen?cate=tien-hiep[&page={p}]",
  "Huyền huyễn": "/truyen?cate=huyen-huyen[&page={p}]",
  "Đô thị": "/truyen?cate=do-thi[&page={p}]",
  "Ngôn tình": "/truyen?cate=ngon-tinh[&page={p}]",
  "Đọc nhiều": "/bang-xep-hang/doc-nhieu"
 },
 "search": "/truyen?keyword={q}[&page={p}]",
 "item": "li > a.group",
 "title": "img@alt || h3",
 "link": ":self@href",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]",
 "ch_action": {
  "name": "fetchChaptersOfBook",
  "id": "40846d9ab28025db6a72550e98f102a4cdecf4a9a7",
  "arg": "bookId\\\\?\"\\s*:\\s*\\\\?\"([0-9a-f]{24})",
  "title": "label",
  "slug": "slugId",
  "lock": "isLock"
 },
 "content_rsc": true,
 "c_locked": "Chương này đã kho[áa]",
 "c_title": "h1 || title",
 "cover": "img@img",
 "desc": "",
 "pageSize": 20
};
