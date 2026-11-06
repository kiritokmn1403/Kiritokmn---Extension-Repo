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
