# Cách viết / sửa một nguồn

Mỗi nguồn nằm trong `sources/<id>/` theo **chuẩn vBook** (cùng định dạng gói `.zip` của vBook):

```
sources/<id>/plugin.json      metadata + danh sách script + config (DOMAIN)
sources/<id>/src/config.js    BASE_URL (+ G = cấu hình selector với mẫu generic)
sources/<id>/src/*.js         home, browse, search, genre, detail, toc, chap, track
```

Script dùng API vBook (`fetch`, `Html.parse`, `Response.success/error`, `localStorage`, ...). Thư viện dùng chung nằm ở `lib/` và được nạp bằng `load('lib_xxx.js')` — khi build, thư viện được chép vào gói vBook và nhúng vào bản Mangayomi / LNReader / APK.

## Sinh nguồn tự động

`data/specs.json` (tự tạo bởi `tools/analyze/autospec.py` từ ảnh chụp trang) + `data/specs.manual.json` (sửa tay, ưu tiên cao hơn) → `python3 tools/gen/gen_sources.py` tạo lại `sources/`.

Các mẫu (`tpl`):

| tpl | Dùng cho |
|---|---|
| `madara` | WordPress Madara (wp-manga) — truyện tranh & chữ |
| `generic` | Cấu hình selector `G` (kèm `preset`: `nettruyen`, `truyenfull`, `halim`) |
| `ref` | Tái sử dụng tiện ích vBook mã nguồn mở (ghi công tác giả gốc) |

Cú pháp selector trong `G`: `"css"` (text), `"css@attr"`, `"css@html"`, `"css@img"` (ảnh tốt nhất: data-src/src/srcset), nhiều lựa chọn cách nhau `" || "`. Mẫu URL: `{p}` trang, `{q}` từ khoá, `[...]` phần chỉ thêm từ trang 2.

| Khoá G | Ý nghĩa |
|---|---|
| `tabs` | `{ "Tên tab": "/duong-dan?page={p}" }` |
| `search` | mẫu URL tìm kiếm |
| `item`, `link`, `title`, `cover`, `desc`, `next` | danh sách |
| `d_title`, `d_cover`, `d_author`, `d_desc`, `d_genres`, `d_status` | trang chi tiết |
| `ch_list`, `ch_url`, `ch_next`, `ch_reverse`, `single` | mục lục |
| `content`, `c_title` | nội dung chữ |
| `pages`, `pages_next` | ảnh truyện tranh |
| `servers`, `server_data`, `iframe` | video (tự dò m3u8/mp4, theo iframe 2 tầng) |

## Build & kiểm thử

```
npm run build                       # sources/ -> repo/ (vBook, Mangayomi, LNReader) + android assets
node tools/test/run-tests.mjs       # kiểm thử trực tiếp (cần mạng tới các trang nguồn)
node tools/test/offline.mjs <snap>  # kiểm thử offline trên ảnh chụp trang
powershell android/build_apks.ps1   # APK Aniyomi/Nekoyomi (Windows, Android SDK)
```
