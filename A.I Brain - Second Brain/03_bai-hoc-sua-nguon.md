# 03 – Bài học khi sửa nguồn

## Cách làm nhanh (0.0.4)
- `node tools/test/run-tests.mjs --record <dir> --only a,b` (Windows, mạng thật) → kéo `<dir>` về → `--replay <dir>` (đám mây) cho kết quả **giống hệt**. Khoá bản ghi = sha1(method + url + body). Bản ghi không có URL nào thì báo `replay miss` (HTTP 0) và liệt kê trong `_misses.json`; vòng record sau sẽ lấy.
- `node tools/test/one.mjs <id> --replay <dir>` in từng bước: popular → search → detail → chapters → nội dung, gồm cả URL. Dùng để tìm đúng trang cần xem.
- Công cụ phân tích trong phiên: `cards.py` (đoán thẻ truyện lặp lại), `an.py` (tiêu đề, khối chữ lớn nhất, nhóm liên kết), `getrec.py` (lấy trang đã ghi theo URL), `peek.py`.
- Sửa `config.js` (mẫu generic) bằng `patch.py` (đọc/ghi khối `var G = {...}` JSON). Đổi tên miền dùng `set_domain()`: sửa **cả** `plugin.json` (metadata.source, DOMAIN.default/values, regexp) **và** BASE_URL trong config.js. Chỉ sửa config.js thì DOMAIN mặc định trong plugin.json vẫn đè lên.

## Bẫy hay gặp
- **Danh sách lấy nhầm menu** ("Manhwa | Manhua | Manga", "MORE", liên kết `/the-loai/`). Bộ chọn chung như `.item` dễ dính menu. Từ 0.0.4, `run-tests` đánh trượt khi ≥50% mục giống menu. Nhớ: liên kết Douyin `/search/…` cũng bị coi là menu, nên Douyin dùng `/hot/<từ khoá>`.
- **Trang chủ là trang giới thiệu**, danh sách thật nằm ở `/tim-truyen` (NetTruyenViet).
- **Tên truyện ở `h2`**, còn `h1` là logo (Navy Team).
- **Một trang "Novel" lẫn cả truyện tranh**: dùng trang danh mục tiểu thuyết.
- **Chương mới nhất bị khoá**: dùng `ch_reverse` để chương 1 đứng đầu.
- **Kiểm tra tên miền trước khi kết luận chết**: thử mọi tên miền trong `DOMAIN.values` + tên miền đoán thêm (`domprobe.mjs`), xem `<title>`. Tên miền "sống" nhưng thành trang cờ bạc (LaskarTogel, SINGTOTO), trang rao bán (Spaceship) hay "Tạm biệt!" thì vẫn tính là chết.
- **Tên miền mặc định là trang demo của Wayback Downloader** (PhimMoi): HTTP 200 nhưng chỉ có 4 trang.
- Các trường hợp **không sửa được bằng bộ chọn** (đừng sa lầy, ghi vào `data/status.json`):
  - Cloudflare challenge → app vượt bằng WebView.
  - Cổng đăng nhập Google (WP Manga Images Protection).
  - Trình phát dùng dấu vân tay WebGL hoặc bytecode/nonce (LuPhim, streamfree.vip của HHPanda).
  - Ảnh chương cấp qua token (MoeTruyen).
  - Nội dung tải bằng JS (8book).
  - SPA cần API (bilibili, iQIYI, MGTV, Twitch, VTV Go…).
- `data/status.json`: `dead` (build tự thêm "(Ngừng hoạt động)" vào tên ở mọi định dạng, kể cả tiện ích YomiHub cùng host), `blocked`, `login`, `protected`, `api` → README hiện ký hiệu tương ứng.

## Logo
- `_work/x/logofetch.mjs` (Windows) gom mọi icon ứng viên → `tools/gen/make_icons.py` chọn ảnh lớn nhất, bỏ ảnh trống và ảnh trùng giữa các host khác nhau (hamming ≤ 12 trên average-hash 12×12), rồi tạo logo chữ nếu không còn ảnh nào. Xem lại bằng bảng ghép (contact sheet) và bổ sung `FORCE_LETTER` cho logo rác còn sót.
- Aidoku yêu cầu logo **không trong suốt**. Lưu PNG bảng màu 128 màu cho nhẹ.

## 0.0.5 (13/11/2026)
- **"Có link phát" chưa phải "phát được".** Dùng `run-tests.mjs --stream`: bước `stream` tải thử vài KB, thử cả HTTP/2.
- **CDN chỉ nhận HTTP/2** (NguonC: segment `.png` trả 403 với HTTP/1.1). Trong `track.js`, trả cờ `http2: true`. APK sẽ phát qua `Http2Bridge.kt`. Mangayomi/YomiHub chưa có cầu nối.
- Nguồn có hình và tiếng tách rời: `track.js` trả `audios: [{data, label}]`.
- Sửa `lib/*.js` thì phải tăng `version` của **mọi** nguồn dùng lib đó, không thì app không cập nhật (bản 0.0.5 tăng cả 196 nguồn).
