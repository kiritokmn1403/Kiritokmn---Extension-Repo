# 05 – Phát hành lên GitHub

- `tools/win/publish.ps1` (chạy trên Windows): `git add -A` → commit (lời nhắn lấy từ biến `PUB_MSG`) → `git push origin HEAD:main` → lấy token từ Git Credential Manager (`git credential fill`) → tạo/tìm Release `v<version>` → tải **mọi tệp trong `Output/` trừ `.log`** lên Release (bỏ qua tệp đã có cùng kích thước + sha256) → kiểm tra lại danh sách tệp trên Release + so `HEAD` local với remote.
- Dòng ghi công trong commit phải dùng **session của phiên hiện tại**: sửa dòng `Claude-Session:` trong `publish.ps1` mỗi phiên.
- Trước khi phát hành: `make-output.mjs` (xoá tệp bản cũ trong `Output/`) → `gen-readme.mjs` (README có bảng link tải Release của đúng phiên bản + trạng thái nguồn).
- Sau khi phát hành: tải thử bằng HTTP các index (`repo/index.min.json`, `index.json`, `plugins.min.json`, `plugin.json`, `aidoku/index.min.json`), vài gói và mọi link Release trong README (mong đợi 200/302). YomiHub dùng jsDelivr làm dự phòng, nên xoá cache jsDelivr bằng `_work/purge.bat` nếu cần.
- Không commit khoá ký APK (`android/*.jks`, `keystore.properties`). Mất khoá thì người dùng phải gỡ rồi cài lại tiện ích Aniyomi/Nekoyomi.
