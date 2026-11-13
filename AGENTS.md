# AGENTS.md — quy định cho người / tác nhân cập nhật dự án

0. **(Từ 0.0.4) Đọc toàn bộ thư mục `A.I Brain - Second Brain/` TRƯỚC TIÊN** (bắt đầu từ `00_README_DOC_TRUOC.md`), cuối phiên ghi thêm kinh nghiệm mới vào đó.
1. **Đọc toàn bộ `TECHNICAL_UPDATE_NOTES.md` trước khi sửa.** Sau mỗi đợt cập nhật phải ghi thêm: hạng mục đã sửa, lỗi phát hiện, dòng lệnh / tệp đã sửa, công cụ dùng, kết quả kiểm thử, ngày thực hiện.
2. Nguồn chỉ sửa trong `sources/` (hoặc `data/specs.manual.json` + `tools/gen/gen_sources.py`), **không sửa tay** `repo/` — `repo/` là đầu ra của `npm run build`.
3. Trước khi phát hành: `npm run build` → `node tools/test/run-tests.mjs` (trên mạng thật) → `powershell android/build_apks.ps1` → `node tools/docs/gen-readme.mjs`.
4. Không commit khoá ký APK (`android/*.jks`, `android/keystore.properties`). Mất khoá ký = người dùng Aniyomi/Nekoyomi phải gỡ và cài lại tiện ích.
5. Tăng `version` trong `plugin.json` của nguồn mỗi khi sửa nguồn đó; tăng `version` trong `package.json` mỗi lần phát hành.
6. Không báo "hoạt động" cho nguồn chưa qua `run-tests.mjs`; ghi rõ trạng thái trong README.
7. (0.0.4) Nguồn chết **không xoá**: thêm vào `data/status.json` → `dead` (build tự gắn "(Ngừng hoạt động)"). Các nhóm `blocked`/`login`/`protected`/`api` chỉ để README ghi chú.
8. (0.0.4) Logo nguồn: `tools/gen/make_icons.py` (đầu vào từ `_work/x/logofetch.mjs`), không dùng dịch vụ favicon của Google làm biểu tượng chính.

