# Aidoku (iOS / iPadOS)

Từ bản **0.0.3**, kho có nguồn cho Aidoku: **152 nguồn** (37 truyện tranh + 115 tiểu thuyết). Phim không có vì Aidoku chỉ đọc truyện tranh và truyện chữ.

## Cài đặt

1. Cần **Aidoku 0.8.3 trở lên**. Từ bản này Aidoku đọc được chương dạng chữ (tiểu thuyết).
2. Settings → **Source Lists** → `+` → dán:
   `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/aidoku/index.min.json`
   Hoặc mở liên kết này trên iPhone/iPad:
   `aidoku://addSourceList?url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/aidoku/index.min.json`
3. Vào **Browse** → chọn ngôn ngữ (Tiếng Việt, 中文, English, 日本語, Multi) → cài nguồn.
4. Muốn đổi tên miền thì vào cài đặt của nguồn → **Tên miền / Domain**. Nguồn có nhiều tên miền thì chọn trong danh sách; nguồn chỉ có một tên miền thì gõ vào ô.

Nguồn 18+ được đánh dấu `contentRating = 2`. Aidoku chỉ hiện các nguồn này khi bật nội dung 18+ trong cài đặt của app.

## Cách hoạt động

Aidoku không chạy được JavaScript trực tiếp: nguồn phải là gói `.aix`, tức WebAssembly viết bằng Rust theo `aidoku-rs`. Tuy vậy, API mới của Aidoku có `js::JsContext` (JavaScriptCore của iOS). Nhờ đó Aidoku dùng **chung đúng bộ engine JavaScript** với Mangayomi/LNReader/vBook, nên không phải viết lại từng nguồn bằng Rust:

```
Aidoku app ──(WASM imports: net, defaults, js)──► main.wasm (aidoku/bridge, Rust no_std)
                                                   │  JsContext.eval(engine.js) một lần
                                                   ▼
                                    JavaScriptCore: runtime/engine.js + vbook.js + dom.js
                                                    + script vBook của nguồn + hosts/aidoku.tail.js
```

JavaScript không gọi ngược vào WASM một cách đồng bộ được, nên cầu nối dùng **giao thức từng bước** (`hosts/aidoku.tail.js`):

| Lệnh | Ý nghĩa |
|---|---|
| `__A.start(op, args, cfg)` | Bắt đầu một tác vụ bất đồng bộ (`listings`, `list`, `manga`, `pages`) và trả về mã tác vụ |
| `__A.poll(id)` | `{s:'f', q:[…]}` khi cần tải trang · `{s:'d', v}` khi xong · `{s:'e', m}` khi lỗi |
| `__A.resume([…])` | Rust tải trang bằng `net` của Aidoku (dùng cookie, Cloudflare và giới hạn tốc độ của app), trả về thân trang dạng base64 |

JavaScriptCore chạy hết hàng đợi microtask mỗi khi `evaluateScript` kết thúc. Vì vậy các `await` trong engine tự chạy tiếp giữa hai lần `eval`, không cần timer.

Những phần được lo riêng cho JavaScriptCore:

- Không có `TextDecoder`: tự viết bộ giải mã UTF-8 và **GBK** (cho các trang tiếng Trung, lấy bảng `__GBK_TABLE` khi nguồn cần).
- Ảnh trang dùng `ImageRequestProvider`: gửi `Referer` là chính trang chương. Các CDN truyện tranh Việt (truyenvua, hinhtruyen, cc3t…) trả 403 nếu thiếu header này.
- Nội dung tiểu thuyết được đổi từ HTML sang **Markdown**: mỗi đoạn tách bằng một dòng trống, tiêu đề chương in đậm, ký tự `#`/`>`/`-` ở đầu dòng được thoát. Aidoku hiển thị bằng trình đọc chữ (`PageContent::Text`).
- `DynamicListings`: mỗi tab `home.js` của nguồn thành một mục trong Browse. `BaseUrlProvider` dùng cho nút mở trang web.
- Lưu trữ của script (`localStorage`, cookie riêng) nằm trong `UserDefaults` (khoá `kiri_store`).

## Dựng

```
npm run build                       # sinh .build/aidoku/<id>.js + sources.json
python tools/gen/aidoku_icons.py    # aidoku/icons/<id>.png (128×128, không trong suốt)
node tools/build/aidoku-build.mjs   # Cargo workspace .build/aidoku-ws → repo/aidoku/{index.min.json,sources,icons}
```

- Cần Rust (edition 2024) và target `wasm32-unknown-unknown` (`rustup target add wasm32-unknown-unknown`).
- Máy không tải được target (mạng bị chặn) thì đặt `AIDOKU_BUILD_STD=1`: thư viện `core`/`alloc` sẽ được dịch từ mã nguồn `rust-src` bằng `-Zbuild-std`.
- Phiên bản gói = `BRIDGE_REV × 100 + phiên bản nguồn`. Khi sửa cầu nối hoặc `aidoku.tail.js`, nhớ tăng `BRIDGE_REV` để Aidoku nhận bản cập nhật.
- Kiểm tra gói: `aidoku verify repo/aidoku/sources/*.aix` (aidoku-cli).

## Kiểm thử

| Mức | Công cụ | Đã kiểm |
|---|---|---|
| WASM ↔ JS ↔ mạng | `aidoku-test-runner` (của aidoku-rs: wasmer + boa + reqwest), có thêm bản vá `aidoku/test-runner-jsc-microtasks.patch` để chạy microtask sau mỗi `eval` giống JavaScriptCore | Hai nguồn mẫu (truyện tranh + truyện chữ) trên máy chủ HTML giả lập. Đi trọn chuỗi: listings → danh sách → chi tiết + mục lục → trang ảnh / chữ, gồm cả chương mã GBK |
| Adapter JS trên trang thật | `node tools/test/aidoku-sim.mjs --all` (ngữ cảnh JS trần như JSC, microtask chạy hết sau mỗi lần eval) | Xem `data/aidoku-test-results.json` |
| Gói | `aidoku verify` | 152/152 gói đạt (wasm export, icon 128×128 không trong suốt, source.json/settings.json đúng schema) |

**Chưa kiểm trên iPhone/iPad thật:** máy dựng là Windows + Android, chủ dự án hiện chưa có thiết bị Apple. Nếu nguồn nào lỗi trên Aidoku, mục *Logs* của app sẽ ghi `JS Exception: …` hoặc thông báo lỗi của engine.
