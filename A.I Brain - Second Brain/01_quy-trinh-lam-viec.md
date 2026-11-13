# 01 – Quy trình chuẩn một bản cập nhật

1. **Đọc**: thư mục này → `AGENTS.md` → toàn bộ `TECHNICAL_UPDATE_NOTES.md` (mục "Việc cần làm ở bản sau" của bản trước là việc tồn đọng phải làm tiếp).
2. **Đọc Excel** người dùng gửi: `Project Extension Repo.xlsx` (sheet *Feature Check* → *Update* → *Extension Repo Main* → *Tham Khảo*) và `Project GitHub.xlsx` (700 dòng link mã nguồn tham khảo). Sheet *Feature Check* chỉ trỏ sang *Update*; các yêu cầu thật nằm ở *Update*.
3. **Tóm tắt yêu cầu bằng tiếng Việt và xin xác nhận** trước khi làm. Hỏi luôn các quyết định có hậu quả: sửa repo khác (YomiHub)? xoá hay giữ nguồn chết? có thiết bị thật không?
4. **Xin đủ quyền một lần** ngay từ đầu (người dùng yêu cầu): điều khiển File Explorer/Android Studio/VS Code/GitHub Desktop/PowerShell + quyền xoá trong thư mục dự án.
5. Bật **trình chạy lệnh nền** `_work/!RUNNER.bat` (xem 02). Từ đó mọi lệnh Windows chạy bằng cách thả tệp `.ps1` vào `_work/run/q/`.
6. **Đo hiện trạng**: `run-tests.mjs --record` toàn bộ 196 nguồn trên mạng thật (khoảng 6 phút) → biết nguồn nào hỏng *hôm nay* (trang web đổi liên tục, kết quả bản trước đã cũ).
7. **Sửa nguồn theo vòng** (xem 03): sửa trên máy đám mây với `--replay` → gửi gói thay đổi → máy Windows `--record` các nguồn còn lỗi → kéo bản ghi về → lặp lại. Mỗi vòng khoảng 6–8 phút.
8. **Tăng phiên bản**: `package.json`, `android/build_apks.ps1` (`$code`), `version` của mọi nguồn đã sửa, `BRIDGE_REV` trong `tools/build/aidoku-build.mjs` nếu engine/lib đổi.
9. **Dựng**: Aidoku trên máy đám mây (có Rust) → gửi `repo/aidoku` về; trên Windows chạy `tools/win/build_all.ps1` (build-all → APK → run-tests → aidoku-sim → make-output → README).
10. **Phát hành** (05) → **kiểm thử trên máy ảo bằng chính kho đã phát hành** (04) → ghi `TECHNICAL_UPDATE_NOTES.md`, `CHANGELOG.md`, thư mục này → phát hành lần cuối (chỉ tài liệu).

Kinh nghiệm thời gian (0.0.4): phần sửa nguồn chiếm nhiều thời gian nhất. Mỗi trang hỏng thường có lý do riêng (Cloudflare, đăng nhập, mã hoá trình phát, SPA). Phân loại sớm để khỏi sa lầy: chết / chặn / đăng nhập / bảo vệ / cần API / sửa được bằng bộ chọn.
