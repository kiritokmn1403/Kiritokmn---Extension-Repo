# Aidoku

Aidoku là ứng dụng **iOS/iPadOS**, chỉ nhận nguồn dạng gói `.aix` (mã Rust biên dịch sang WebAssembly, `wasm32-unknown-unknown`).
Aidoku không có trình chạy JavaScript, nên không chạy trực tiếp được các script vBook của repo này.

Trạng thái trong v0.0.1: **chưa phát hành nguồn Aidoku**.
- Máy dựng của chủ dự án là Windows + Android, không có thiết bị iOS để kiểm thử.
- Môi trường dựng hiện chưa có target `wasm32-unknown-unknown` và `aidoku-cli`.

Hướng làm cho bản sau (đã chuẩn bị dữ liệu):
1. Cài Rust + `rustup target add wasm32-unknown-unknown` + `cargo install --git https://github.com/Aidoku/aidoku-rs aidoku-cli`.
2. Sinh nguồn Rust từ cấu hình selector `G` (mẫu `generic`/`madara`) trong `data/specs.json`, vì các nguồn này chỉ dùng CSS selector nên chuyển sang API `aidoku::imports::html` được.
3. Tạo `index.min.json` theo định dạng Aidoku, đặt cạnh các index khác trong `repo/`.

Trên iOS, có thể dùng **Mangayomi** (có bản iOS) với đường dẫn `repo/index.json`. Mangayomi cũng đọc được nguồn Aidoku và LNReader.
