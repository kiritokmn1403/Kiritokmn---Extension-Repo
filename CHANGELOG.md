# Kiritokmn Extension Repo — v0.0.3 (08/11/2026)

## Tính năng mới
- **Aidoku (iOS / iPadOS):** lần đầu có nguồn cho Aidoku, gồm **152 nguồn** (37 truyện tranh + 115 tiểu thuyết). Thêm vào Aidoku bằng đường dẫn `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/aidoku/index.min.json`, hoặc mở liên kết `aidoku://addSourceList?url=…`.
  - Mỗi nguồn là một gói `.aix`: WebAssembly viết bằng Rust (`aidoku/bridge`), bên trong chạy **chung engine JavaScript** với Mangayomi/LNReader/vBook qua JavaScriptCore của iOS. Nhờ vậy sửa nguồn một lần là cả 9 ứng dụng cùng được sửa.
  - Truyện chữ hiển thị bằng trình đọc chữ của Aidoku (Markdown). Ảnh truyện tranh gửi kèm `Referer` của trang chương. Đọc được trang mã hoá GBK (Trung Quốc). Mỗi tab trang chủ của nguồn thành một mục trong Browse. Đổi được tên miền trong cài đặt nguồn.
  - Cần Aidoku 0.8.3 trở lên. Chi tiết: `docs/AIDOKU.md`.
- **Resume A Video (làm lại cho đúng):** Aniyomi, Nekoyomi, Mangayomi và YomiHub tự lưu vị trí xem theo **địa chỉ (URL) của tập phim**. Từ bản này, địa chỉ phim/truyện/tập/chương luôn được ghi theo **tên miền mặc định** của nguồn, dù người dùng chọn tên miền nào trong cài đặt. Vì vậy khi trang đổi tên miền, ứng dụng vẫn nhận ra đúng tập cũ, vẫn **xem tiếp từ chỗ đã thoát** và không mất lịch sử đọc/xem. Áp dụng cho cả 4 APK, Mangayomi/YomiHub, LNReader/IReader và Aidoku.
- **Tăng tốc:** engine giữ lại các trang vừa tải trong 60 giây (tối đa 6 trang). Khi mở một truyện/phim, `detail.js` và `toc.js` dùng chung một lần tải trang chi tiết, nên bớt một lượt mạng mỗi lần mở.
- **Short Video (YomiHub):** ghi thêm cờ `additionalParams: "shorts"` trong `index.json` cho các nguồn có Short Video, để bản YomiHub sau đọc được mà không cần ghi cứng ID tiện ích.

## Sửa lỗi
- **Resume A Video của 0.0.2 không hoạt động:** `engine.js` có đọc vị trí đã lưu (`resumeStorage.get`) nhưng không chỗ nào ghi vào, vì tiện ích không nhận được thông báo từ trình phát. Vì thế mốc `#t=` luôn bằng 0 và nhãn "[Tiếp tục mm:ss]" không bao giờ hiện. Hơn nữa, ExoPlayer/mpv bỏ qua `#t=` trên link HLS. Đã gỡ phần mã này cùng tuỳ chọn `RESUME_VIDEO` (bật/tắt không có tác dụng) và thay bằng cơ chế ở mục *Tính năng mới*.
- **Đổi tên miền làm mất lịch sử:** trước đây đổi tên miền thì ứng dụng tạo tập/chương mới, mất vị trí xem và trạng thái đã đọc. Đã sửa nhờ địa chỉ ổn định.
- `tools/win/publish.ps1`: lời nhắn commit bị ghi cứng nội dung của 0.0.2. Nay đọc từ biến `PUB_MSG`.
- `Output/` còn sót tệp của bản cũ khi phát hành: `make-output.mjs` nay tự xoá các tệp `Kiritokmn-Extension-<phiên bản khác>-*`.

## Phiên bản
- `package.json` 0.0.3 · APK Aniyomi/Nekoyomi `versionCode 3` (`14.3` anime, `1.4.3` manga) · Mangayomi/YomiHub `0.5.x` · LNReader/IReader `1.4.x` · Aidoku `1xx` (= 100 + phiên bản nguồn).

## Kiểm thử
- `run-tests.mjs` (mạng thật, máy chủ dự án): **63/196** nguồn đi trọn chuỗi; bản 0.0.2 là 57.
- `aidoku-sim.mjs` (adapter Aidoku trong ngữ cảnh JS trần giống JavaScriptCore, mạng thật): **61/152** nguồn đạt. Nguồn nào đạt ở `run-tests` thì cũng đạt ở Aidoku.
- `aidoku-test-runner` (WASM + JS + mạng, công cụ chính thức của aidoku-rs): đạt trọn chuỗi với 2 nguồn mẫu (truyện tranh + truyện chữ, có chương GBK) trên máy chủ giả lập. `aidoku verify`: 152/152 gói đạt.
- Galaxy Note9: cài 4 APK 0.0.3 và kiểm tra Nekoyomi, Aniyomi, Mangayomi, YomiHub, LNReader, vBook, LeechText. Ảnh và video ở `_work/shots/v003/`.

---

# Kiritokmn Extension Repo — v0.0.2 (08/11/2026)

## Tính năng mới & Cải tiến trong bản 0.0.2
- **Tích hợp "Resume A Video" cho toàn bộ 44 nguồn Phim & Video**:
  - Ghi nhớ tiến trình và thời gian xem phim (`resumeStorage` thông qua `localStorage` / `SharedPreferences`).
  - Tự động gắn mốc phát Media Fragment (`#t=` hoặc `&t=`) trực tiếp vào URL luồng phát (HLS / MP4), giúp ExoPlayer (Aniyomi / Nekoyomi) và trình phát Mangayomi / YomiHub tự động tiếp tục phát từ chính xác giây người dùng thoát ra trước đó.
  - Hiển thị nhãn trực quan `[Tiếp tục mm:ss]` trên danh sách server/chất lượng video.
  - Bổ sung tùy chọn `RESUME_VIDEO` (Bật/Tắt tiếp tục phát từ vị trí đã thoát) trong cài đặt nguồn tiện ích.
- **Hỗ trợ tính năng "Short Video" chuẩn YomiHub**:
  - Cấu hình 11 nguồn video ngắn dọc 9:16 (YouTube Shorts, TikTok, Douyin, FreeReels, Tik.Porn, FikFap, Kwiky, xFree, FapReel, SexVietTop, PornHub shorties).
  - Bổ sung trường `shorts: true` và `hasShorts: true` vào metadata tiện ích và `repo/index.json`.
  - Bổ sung bộ lọc `SelectFilter` (Chế độ Shorts / Mặc định) trong `getFilterList()` để YomiHub nhận diện và kích hoạt chế độ cuộn dọc 9:16.
- **Nâng cấp phiên bản toàn hệ thống**:
  - `package.json` lên `0.0.2`.
  - Bộ 4 APK Aniyomi/Nekoyomi lên `versionCode = 2`, `versionName = 14.2` (anime) và `1.4.2` (manga).
  - Tiện ích Mangayomi/YomiHub lên `0.4.x`, LNReader/IReader lên `1.3.x`.
- **Tối ưu hóa hiệu năng & Dung lượng**:
  - Tinh gọn mã nguồn trung gian, loại trừ thư viện mã hóa `crypto-js` dư thừa đối với các nguồn không cần thiết.
  - Đóng gói toàn bộ các file cài đặt vào thư mục `Output/` và cập nhật danh sách link tải Releases trên `README.md`.
- **Kiểm thử thiết bị thực tế**:
  - Cài đặt và kiểm thử trực tiếp trên điện thoại Samsung Galaxy Note9 (SM-N960N).
  - Kiểm thử giao diện và tương thích trên các ứng dụng: Aniyomi, Nekoyomi, Mangayomi, YomiHub, LNReader, vBook, LeechText.
  - Chụp ảnh màn hình và quay video toàn bộ quá trình kiểm thử lưu tại `_work/shots/`.

---

# Kiritokmn Extension Repo — v0.0.1 (04/11/2026)

Bản đầu tiên: dựng lại toàn bộ repo (trước đó chỉ có README/LICENSE).


## Cập nhật 06/11/2026 — nhận 29 tiện ích website từ YomiHub 0.5.3
- Thêm thư mục `sources-yomihub/` (mã nguồn tiện ích YomiHub định dạng Mangayomi JS + `_common.js` + `meta.json`) và đầu ra `repo/yomihub/<tên>.js` (tự chứa).
- `repo/index.json` có thêm 29 tiện ích (Hako, Sonako, AnimeVN, AVSub, RoPhim, HotPhim, Anime47, VTVgo, YouTube, Pornhub 18+, FikFap 18+, HihiSex 18+, Tik.Porn 18+, Kwiky 18+, xFree 18+, FapReel 18+, SexVietTop 18+, HayChill, XemPhimGi, NextPhim, Vfilm, CBHentai 18+, Dâm Cô Nương 18+, SayHentai 18+, Xôi Lạc TV, Phimmoi, MotPhim, HiHiPhim, PhimMoiHD), **giữ nguyên id** 920260001… của bản tích hợp cũ → bản đã cài trong YomiHub nhận cập nhật từ kho (phiên bản 0.5.3).
- 20 mục Mangayomi chuyển đổi từ vBook trùng trang web được bỏ khỏi `index.json` (vẫn còn ở định dạng vBook / LNReader / Aniyomi).
- Công cụ: `tools/build/yomihub-sources.mjs` (chạy tự động cuối `build-all.mjs`); README có bảng "Tiện ích YomiHub".

## Tính năng mới
- **Một kho, một thư mục gốc cho 8 ứng dụng**: Aniyomi, Nekoyomi, Mangayomi, YomiHub, LNReader, IReader, vBook, LeechText (`repo/`).
- **196 nguồn** từ sheet *Extension Repo Main*: 44 Phim & Video, 36 Truyện tranh, 116 Tiểu thuyết; gắn cờ 18+ (22 nguồn) theo chuẩn từng ứng dụng.
- **APK đa nguồn cho Aniyomi/Nekoyomi**: *Kiritokmn Phim*, *Kiritokmn Phim 18+*, *Kiritokmn Truyện*, *Kiritokmn Truyện 18+* (thay vì hàng trăm APK riêng lẻ → nhẹ, cập nhật một lần).
- **Đổi tên miền** ngay trong cài đặt nguồn (Aniyomi, Nekoyomi, Mangayomi, YomiHub, vBook).
- Bộ chuyển đổi tự động vBook → Mangayomi / LNReader / IReader / Rhino-APK; bộ kiểm thử trực tiếp và offline.

## Cập nhật trong ngày 04/11/2026 (tối) — sửa nguồn dính Cloudflare
- Viết lại selector cho 9 nguồn dính Cloudflare (101kks, czbooks, uukanshu, luvevaland, mattreadingtranslations, ciyuanji, novelfull.net, tik.porn 18+, xfree 18+) — phiên bản nguồn 2.
- Mangayomi/YomiHub: đọc đúng trang mã GBK (69shuba).
- Báo lỗi rõ ràng khi gặp Cloudflare: "CLOUDFLARE: … mở nguồn bằng WebView".
- 5 nguồn cần người dùng tự xác minh Cloudflare trong WebView: 101minc, hhtqhay.vip, sonako, cbhentai, myreadingmanga.

## Cài đặt
| Ứng dụng | Đường dẫn repo |
|---|---|
| Aniyomi / Nekoyomi | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.min.json` |
| Mangayomi / YomiHub | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json` |
| LNReader / IReader | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/plugins.min.json` |
| vBook / LeechText | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/plugin.json` |

## Lưu ý
- Trạng thái từng nguồn: xem bảng trong README. Nguồn không truy cập được thường do đổi tên miền → đổi trong cài đặt nguồn.
- Aidoku (iOS) chưa có nguồn trong bản này.
