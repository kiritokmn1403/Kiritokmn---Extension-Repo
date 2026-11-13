# 02 – Môi trường & công cụ

## Máy của chủ dự án (Windows, `kiritokmn-lap`)
- Thư mục: `D:\A.I Project\A.I Project - Extension Repo\` chứa `Kiritokmn - Extension Repo\` (git, remote `kiritokmn1403/Kiritokmn---Extension-Repo`) và `_work\` (công cụ, log, ảnh/video kiểm thử, **không đưa lên GitHub**).
- Có Node 24, Git (đăng nhập sẵn qua Git Credential Manager, **không có `gh`**), Android SDK + Studio (`D:\programs\ads`), JBR, Gradle 9.3.1. **Không có Rust/cargo** → gói Aidoku dựng trên máy đám mây.
- Máy ảo Android: `Medium_Phone_API_37.0` (x86_64, 1080×2400) đã cài Aniyomi, Nekoyomi, Mangayomi, LNReader, vBook, LeechText, YomiHub. Khởi động bằng `_work/emu_start.ps1` (khoảng 45 giây). APK x86_64 của các app nằm ở `_work/apks/`.
- Mạng Việt Nam: một số tên miền bị nhà mạng chặn (mangadex, wattpad, phimtv.my…). `api.mangadex.org` cũng bị chặn DNS (11/2026).

## Trình chạy lệnh nền (0.0.4) — quan trọng nhất
- `_work/!RUNNER.bat` → `win_runner.ps1`: chạy nền 12 giờ, cứ 0,8 giây quét `_work/run/q/*.ps1`. Mỗi tệp chạy trong một tiến trình PowerShell ẩn riêng. Kết quả ghi ở `_work/run/o/<tên>.log` (UTF-8) và `<tên>.done` (mã thoát). `run/heartbeat.txt` cho biết runner còn sống.
- Chỉ cần **bấm đúp `!RUNNER.bat` một lần** qua File Explorer (computer-use chỉ được bấm, không gõ được). Sau đó máy ảo Linux (`device_bash`) ghi tệp lệnh vào `run/q/`, không phải bấm từng `.bat` như 0.0.3.
- Lệnh dài (build, test) dùng `| Select-Object -Last N` thì log chỉ có nội dung khi xong. Muốn xem tiến độ thì ghi log riêng.
- Quy ước tên: `jNNN_mo-ta.ps1`, tăng dần.

## Máy đám mây (cloud bash)
- Chỉ vào được GitHub và kho gói (npm, crates.io), **không vào được trang nguồn**. Vì vậy sửa nguồn bằng bản ghi `--replay`.
- Luồng tệp: đám mây → `/mnt/user-data/outputs/x/` → `device_commit_files` → `_work/x/`; Windows → `device_stage_files` → `/mnt/user-data/uploads/...`.
- Gửi mã: `sync.sh` (tự viết trong phiên) đóng gói tệp đổi so với commit gần nhất thành `sync.tgz`, kèm `sync_deleted.txt`; trên Windows chạy `_work/x/apply_sync.ps1`. **Không** gửi `android/*/src/*/assets` (đầu ra build).
- Rust 1.97 có sẵn nhưng không tải được target wasm32 (static.rust-lang.org bị chặn). Cách làm: `git clone --sparse` thư mục `library` của rust-lang/rust đúng tag 1.97.0, rồi `ln -s` vào `~/.rustup/toolchains/stable-*/lib/rustlib/src/rust/library`. Sau đó chạy `AIDOKU_BUILD_STD=1 node tools/build/aidoku-build.mjs --jobs 8`.

## Thiết bị ngoài
- Galaxy Note9 (`281038ac31217ece`) dùng ở 0.0.3. Ở 0.0.4 chủ dự án yêu cầu kiểm thử trên máy ảo.
