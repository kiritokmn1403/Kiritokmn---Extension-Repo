# Kiritokmn - Extension Repo Project — Ghi chú kỹ thuật cập nhật

**BẮT BUỘC ĐỌC TRƯỚC MỖI LẦN CẬP NHẬT.**

Chủ dự án yêu cầu tạo và duy trì tài liệu này ngày 25/10/2026. Quy định được ghi thêm trong `AGENTS.md` ở gốc dự án. Mỗi người hoặc tác nhân tự động cập nhật ứng dụng phải đọc toàn bộ tài liệu, kiểm tra trạng thái và bổ sung kết quả sau khi làm việc.

---

## Trạng thái hiện tại

| Hạng mục | Trạng thái |
|---|---|
| Phiên bản | **0.0.1** (04/11/2026) |
| Số nguồn | 196 (Phim 44 · Truyện tranh 36 · Tiểu thuyết 116) lấy từ `Project Extension Repo.xlsx` → sheet *Extension Repo Main* |
| Ứng dụng hỗ trợ | Aniyomi, Nekoyomi (APK đa nguồn) · Mangayomi, YomiHub (JS) · LNReader, IReader (plugin JS ES5) · vBook, LeechText, YomiHub-vBook (zip vBook) · Aidoku: chưa (xem `docs/AIDOKU.md`) |
| Kết quả kiểm thử | xem bảng trong `README.md` (tự sinh từ `data/test-results.json`) |

## Kiến trúc (0.0.1)

- **Một nguồn = một gói vBook** trong `sources/<id>/`. vBook là chuẩn có API phong phú nhất (Rhino + jsoup) và có sẵn ~770 tiện ích cộng đồng để tham khảo.
- `tools/build/asyncify.mjs`: chuyển script vBook đồng bộ (Rhino) sang async (acorn + escodegen; tự đánh dấu hàm `async`, chèn `await` cho `fetch`, `sleep`, `Http.*` và các hàm gọi chúng; callback `.map/.forEach/...` có await được chuyển sang `__amap/__aforEach`).
- `runtime/dom.js`: DOM tương thích **jsoup** (select, selectFirst, text, ownText, html, attr("abs:..."), parent, children, next/prev sibling, remove...) trên htmlparser2 + cheerio-select, hỗ trợ `:contains` (không phân biệt hoa thường), `:containsOwn`, `:matches`, `:eq`, `:has`...
- `runtime/vbook.js`: API vBook (`fetch` + `Response` có `html()/json()/text(charset)/base64()`, `Html`, `localStorage`, `cacheStorage`, `localConfig`, `localCookie`, `Http.get().html()`...).
- `runtime/engine.js`: lớp điều phối chung (popular/latest/search/detail/chapters/pages/content/videos, phân trang bằng token vBook).
- `hosts/`: Mangayomi/YomiHub (`MProvider`, `Client`, `SharedPreferences`, tùy chọn đổi **Tên miền**), LNReader/IReader (CommonJS + `@libs/fetch`, hạ cấp ES5 bằng TypeScript), Node (kiểm thử).
- `android/`: 2 module APK (anime = Aniyomi lib 14, manga = Tachiyomi lib 1.4), mỗi module 2 flavor (`sfw`, `nsfw`) → 4 APK. Script vBook chạy **nguyên bản** bằng Mozilla Rhino 1.7.15 (chế độ thông dịch) + jsoup của ứng dụng chủ (`runtime/rhino-prelude.js` + engine hạ cấp ES5). Stub API tự biên dịch từ `aniyomiorg/extensions-lib@14` và `mihonapp/extensions-lib@1.4.2` (compileOnly).
- `repo/`: đầu ra — `index.min.json` + `repo.json` + `apk/` (Aniyomi/Nekoyomi), `index.json` (Mangayomi/YomiHub), `plugins.min.json` (LNReader/IReader), `plugin.json` + `vbook/*.zip` (vBook/LeechText/YomiHub).

## Nhật ký cập nhật

### 04/11/2026 — Bản 0.0.1 (dựng lại toàn bộ từ repo trống)

**Công cụ đã dùng:** Git (clone 25+ kho tham khảo), Node.js 22/24, esbuild, acorn/escodegen, TypeScript (hạ cấp ES5), Python 3 + BeautifulSoup (phân tích trang), Android SDK + Gradle 9.3.1 + AGP 8.13.1 + Kotlin 2.2.20 + JBR của Android Studio (dựng APK), adb + Android Emulator (Medium_Phone_API_37) + Galaxy Note9 SM-N960N (cài và kiểm thử), File Explorer/PowerShell trên máy Windows của chủ dự án (chạy script `.bat`), GitHub Desktop/Git Credential Manager (đẩy mã và tạo Release).

**Hạng mục đã làm**
1. Đọc 2 tệp Excel (Project GitHub: 580+ link; Project Extension Repo: Feature Check → Update → Extension Repo Main 196 nguồn, Tham Khảo 234 tiện ích vBook) và tài liệu `Extension_Repo_Update_0.0.1.docx`.
2. Tải và phân tích mã nguồn định dạng tiện ích của: Aniyomi/Nekoyomi (loader + `index.min.json` + `repo.json`, lib 12–16 / 1.4–1.6, ChildFirstPathClassLoader), Mangayomi (`fetch_sources_list.dart`: mảng JSON, lọc theo `itemType`), LNReader (`plugins.min.json`), IReader (đọc được repo LNReader), vBook (`plugin.json` + zip; tài liệu `kychitoge/vbook-ext/docs/extension-api.md`), LeechText (Kotlin, chạy plugin vBook bằng Rhino), YomiHub (fork Mangayomi + vBook), Aidoku (chỉ `.aix` WASM).
3. Xây bộ build đa định dạng (mục *Kiến trúc*), bộ sinh nguồn (`tools/gen/gen_sources.py`, mẫu `madara` / `generic` + preset `nettruyen`, `truyenfull`, `halim` / `ref`), bộ phân tích trang (`tools/analyze/*.py`), bộ chụp trang trên máy thật (`tools/win/snap.mjs`), kiểm thử trực tiếp (`tools/test/run-tests.mjs`) và offline (`tools/test/offline.mjs`).
4. Sinh 196 nguồn. 39 nguồn tái sử dụng tiện ích vBook mã nguồn mở của cộng đồng (ghi công tác giả gốc trong `plugin.json` → `author`/`description`).
5. Dự án Android 4 APK cho Aniyomi/Nekoyomi, ký bằng khoá riêng `android/kiritokmn.jks` (không commit), dấu vân tay SHA-256 ghi vào `repo/repo.json`.

**Lỗi phát hiện & cách sửa**
| # | Lỗi | Sửa (tệp / dòng lệnh) |
|---|---|---|
| 1 | Phần lớn tiện ích vBook mẫu (135/174 khớp tên miền) bị **mã hoá** (`encrypt`) → không tái sử dụng được | Chỉ dùng 39 tiện ích mã mở; 157 nguồn viết mới bằng mẫu selector (`tools/analyze/autospec.py`) |
| 2 | Script vBook đồng bộ không chạy được trên Mangayomi/LNReader (chỉ có HTTP async) | `tools/build/asyncify.mjs` (biến đổi AST) |
| 3 | `class Elements extends Array` hỏng khi hạ cấp ES5 cho LNReader | `runtime/dom.js`: Elements là mảng thật + `Object.setPrototypeOf(arr, EP)` |
| 4 | Thiếu dấu phẩy trong object literal sau khi tách method (`dom.js:123`, `dom.js:134`) | sửa trực tiếp |
| 5 | `cheerio-select` không export `selectAll/selectOne` | dùng `select(css, root, opts, limit)` |
| 6 | Script tab (`browse.js`) không được biên dịch vì không có trong `plugin.json.script` | `build-all.mjs`: `scriptEntries()` biên dịch mọi `src/*.js` trừ thư viện được `load()` |
| 7 | Tiện ích cộng đồng khai báo lại `Response`/gán lại `fetch` → lỗi "already declared" | Mỗi script chạy trong 2 lớp hàm lồng (biến môi trường là tham số) |
| 8 | Đường dẫn Windows có dấu cách bị mã hoá `%20` (`new URL(import.meta.url).pathname`) | đổi sang `fileURLToPath()` trong mọi công cụ |
| 9 | `crypto-js` không tìm thấy khi kiểm thử 3 nguồn (qimao, vipbachngocsach, xianqihaotiamiapp) | Gói test tự chứa: `.build/test/<id>.mjs` (esbuild bundle) |
| 10 | Máy chủ dựng (đám mây) không truy cập được trang nguồn | Chụp trang và kiểm thử **trên máy Windows của chủ dự án** qua `.bat` (`_work/1_snap.bat`, `8_snap_detail.bat`, `11_snap_r2.bat`, `9_run_tests.bat`) |
| 11 | Tải APK ứng dụng từ GitHub trên máy chủ dự án rất chậm (≈0,5 MB / 4 phút), `Invoke-WebRequest` có thanh tiến trình làm chậm | `$ProgressPreference='SilentlyContinue'` + `curl.exe`; APK tải ở máy chủ dựng rồi chép sang theo khối 20 MB |
| 12 | `nettruyen18`-kiểu chương bị khoá bằng plugin "wp-manga-images-protection" (bắt đăng nhập Google) — doctruyentranhbl | Ghi nhận: cần đăng nhập, không tự động được |
| 13 | AGP 8.7.3 không chạy với Gradle 9; máy có sẵn cache Gradle 9.3.1 + AGP 8.13.1 | `android/build.gradle.kts`: AGP 8.13.1, Kotlin 2.2.20, `GRADLE_USER_HOME=D:\A.I Project\yh\gradle-home` |

**Kết quả kiểm thử**
- Mô phỏng runtime Mangayomi (`MProvider/Client/SharedPreferences` trong `vm`) và LNReader (CommonJS + `@libs/fetch`) bằng `tools/test/host-sim.mjs` với máy chủ HTML mẫu: popular → search → detail → toc → content **đạt** ở cả 2 host.
- Kiểm thử trực tiếp vòng 1 (máy chủ dự án, 04/11/2026 19:55): **22/196** nguồn đạt trọn chuỗi. Vòng 2: xem `data/test-results.json` và bảng trạng thái trong `README.md`.
- Nguyên nhân lỗi chính: ~40 nguồn không truy cập được từ mạng Việt Nam (tên miền chết `ENOTFOUND`, bị nhà mạng chặn/timeout, Cloudflare 403, 522); phần còn lại là trang dựng bằng JavaScript (Next/Nuxt/SPA) hoặc tải mục lục bằng AJAX cần viết riêng.

**Việc cần làm ở bản sau**
- Viết riêng cho các trang SPA/AJAX (danh sách trong `README.md` trạng thái 🟡), cập nhật tên miền mới cho các nguồn 🔴.
- Nguồn Aidoku (`docs/AIDOKU.md`).
- Giảm dung lượng gói Mangayomi/LNReader (bỏ bảng mã thực thể HTML trùng lặp, dùng chung runtime).
