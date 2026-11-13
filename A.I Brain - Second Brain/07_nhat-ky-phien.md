# 07 – Nhật ký phiên

## 13/11/2026 — bản 0.0.4 (Claude, Cowork)
- Đọc 2 Excel và TECHNICAL_UPDATE_NOTES, tóm tắt rồi được xác nhận. Quyết định: không sửa YomiHub (để hướng dẫn), giữ + đánh dấu nguồn chết, kiểm thử trên máy ảo.
- Dựng trình chạy nền, record/replay; vòng sửa nguồn r1–r4: 54 → 60 nguồn đạt trên mạng thật (62 trên bản ghi).
- YouTube (InnerTube), TikTok (tikwm + máy chủ DTK), Douyin (bảng nóng + máy chủ DTK); 196 logo; `data/status.json` (37 nguồn ngừng hoạt động).
- Aidoku 152 gói dựng trên đám mây; APK 14.4/1.4.4; phát hành Release v0.0.4 (12/12 tệp).
- Máy ảo: Aniyomi (XemPhimGi phát + Resume ✅; NguonC 403 ❌; YouTube phát quay mãi ❌), Nekoyomi (TruyenQQ đọc ✅), Mangayomi (TikTok phát ✅, cài đặt DTK ✅), LNReader (Navy Team Novel đọc ✅), vBook (thêm kho ✅, cần cập nhật app để cài).
- Chủ dự án yêu cầu giữa chừng: chuyển `.vscode` + `_work` vào thư mục dự án (đã làm, có gitignore). Hỏi đổi mô hình: phiên không tự đổi được, phải chọn trong ứng dụng.

## 13/11/2026 tối — bản 0.0.5 (Claude, Cowork)
- Yêu cầu: Aniyomi/Nekoyomi phải phân biệt được từng extension; kiểm trên điện thoại thật đã cắm.
- Làm: mỗi nguồn một APK (81 APK: 44 Phim + 37 Truyện, tên + logo riêng, source ID giữ nguyên); cầu nối HTTP/2 cho NguonC; YouTube ghép hình + tiếng; sub-agent `wa`/`wb`/`wc` sửa nguồn; gộp `claude/0.0.5-fix1.diff` của phiên đám mây (ROOT key, test 18/18).
- Trình chạy nền đã dừng từ 09:22 UTC, phải bật lại bằng File Explorer. Gradle 81 APK: 412 giây lần đầu, 174 giây lần sau.
- Note9: gỡ 4 APK gộp, cài 81 APK ✅; Aniyomi hiện tên + logo riêng ✅; NguonC phát phim 1:43:26, tua, xem tiếp ✅; YouTube phát có "Âm thanh gốc" ✅; Nekoyomi nguồn manga riêng + TruyenQQ đọc ✅.
- `run-tests` mạng thật: 66/196 (0.0.4: 60).
