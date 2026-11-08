# Kiritokmn - Extension Repo Project — Ghi chú kỹ thuật cập nhật

**BẮT BUỘC ĐỌC TRƯỚC MỖI LẦN CẬP NHẬT.**

Chủ dự án yêu cầu tạo và duy trì tài liệu này ngày 25/10/2026. Quy định được ghi thêm trong `AGENTS.md` ở gốc dự án. Mỗi người hoặc tác nhân tự động cập nhật ứng dụng phải đọc toàn bộ tài liệu, kiểm tra trạng thái và bổ sung kết quả sau khi làm việc.

---

## Trạng thái hiện tại

| Hạng mục | Trạng thái |
|---|---|
| Phiên bản | **0.0.3** (08/11/2026) — trước đó 0.0.2 (08/11/2026), 0.0.1 (04/11/2026) |
| Số nguồn | 196 (Phim 44 · Truyện tranh 36 · Tiểu thuyết 116) lấy từ `Project Extension Repo.xlsx` → sheet *Extension Repo Main* |
| Ứng dụng hỗ trợ | Aniyomi, Nekoyomi (APK đa nguồn) · Mangayomi, YomiHub (JS) · LNReader, IReader (plugin JS ES5) · vBook, LeechText, YomiHub-vBook (zip vBook) · **Aidoku** (từ 0.0.3: 152 gói `.aix` — cầu nối Rust/WASM + JavaScriptCore, xem `docs/AIDOKU.md`) |
| Kết quả kiểm thử | xem bảng trong `README.md` (tự sinh từ `data/test-results.json`) |

## Kiến trúc (0.0.1)

- **Một nguồn = một gói vBook** trong `sources/<id>/`. vBook là chuẩn có API phong phú nhất (Rhino + jsoup) và có sẵn ~770 tiện ích cộng đồng để tham khảo.
- `tools/build/asyncify.mjs`: chuyển script vBook đồng bộ (Rhino) sang async (acorn + escodegen; tự đánh dấu hàm `async`, chèn `await` cho `fetch`, `sleep`, `Http.*` và các hàm gọi chúng; callback `.map/.forEach/...` có await được chuyển sang `__amap/__aforEach`).
- `runtime/dom.js`: DOM tương thích **jsoup** (select, selectFirst, text, ownText, html, attr("abs:..."), parent, children, next/prev sibling, remove...) trên htmlparser2 + cheerio-select, hỗ trợ `:contains` (không phân biệt hoa thường), `:containsOwn`, `:matches`, `:eq`, `:has`...
- `runtime/vbook.js`: API vBook (`fetch` + `Response` có `html()/json()/text(charset)/base64()`, `Html`, `localStorage`, `cacheStorage`, `localConfig`, `localCookie`, `Http.get().html()`...).
- `runtime/engine.js`: lớp điều phối chung (popular/latest/search/detail/chapters/pages/content/videos, phân trang bằng token vBook).
- `hosts/`: Mangayomi/YomiHub (`MProvider`, `Client`, `SharedPreferences`, tùy chọn đổi **Tên miền**), LNReader/IReader (CommonJS + `@libs/fetch`, hạ cấp ES5 bằng TypeScript), Node (kiểm thử).
- `android/`: 2 module APK (anime = Aniyomi lib 14, manga = Tachiyomi lib 1.4), mỗi module 2 flavor (`sfw`, `nsfw`) → 4 APK. Script vBook chạy **nguyên bản** bằng Mozilla Rhino 1.7.15 (chế độ thông dịch) + jsoup của ứng dụng chủ (`runtime/rhino-prelude.js` + engine hạ cấp ES5). Stub API tự biên dịch từ `aniyomiorg/extensions-lib@14` và `mihonapp/extensions-lib@1.4.2` (compileOnly).
- `aidoku/bridge` + `hosts/aidoku.tail.js` (từ 0.0.3): gói Aidoku = WebAssembly Rust chạy engine JS trong `JsContext` của Aidoku (giao thức start/poll/resume); `tools/build/aidoku-build.mjs` dựng `repo/aidoku/`.
- Định danh ổn định (từ 0.0.3): `engine.js` `canon()`/`decanon()` — URL trả cho ứng dụng luôn theo tên miền mặc định (giữ lịch sử / vị trí xem khi đổi tên miền).
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

### 04/11/2026 (tối) — Kiểm tra Cloudflare, dựng APK, kiểm thử trên thiết bị

**Công cụ đã dùng:** trình duyệt tích hợp của Claude desktop (chạy trên máy chủ dự án, dùng cookie thật để vượt Cloudflare kiểu tự động), bộ kiểm tra DOM viết bằng JavaScript chạy ngay trong trang (`/tmp/insp2.js`), bộ chạy plugin Mangayomi trong trình duyệt (shim `MProvider/Client/SharedPreferences` + `fetch(..., {credentials:'include'})`), Node 22 (dựng lại), Python 3 (sinh bảng GBK), adb + Emulator + Note9.

**Kết quả dựng & phát hành**
- Gradle: `BUILD SUCCESSFUL`, 4 APK 0,6–0,8 MB (`Kiritokmn-Extension-0.0.1-<anime|manga>-<sfw|nsfw>.apk`), ký khoá riêng.
- Đẩy GitHub: commit `8d00af9`, `ec2e5df`; Release `v0.0.1` 11/11 tệp đã xác minh (tên + dung lượng).
- Kiểm thử trực tiếp vòng 2: **34/196** nguồn đạt trọn chuỗi (vòng 1: 22/196).

**Kiểm thử thiết bị (`_work/17_device_test.bat`)**
- Emulator `sdk_gphone64_x86_64`: cài **thành công** Aniyomi 0.18.2.1, Nekoyomi 0.20.6, Mangayomi 0.9.95, LNReader 2.1.4, vBooks (APK chủ dự án cung cấp), LeechText 2.0.0 và cả 4 APK tiện ích; deep link `aniyomi://add-repo`, `tachiyomi://add-repo` mở hộp thoại *Add repo*, `mangayomi://add-repo` mở bộ chọn Mangayomi/YomiHub. Ảnh: `_work/shots/emulator_5554_*.png`, video `emulator_5554_install-and-addrepo.mp4`.
- Note9 (`281038ac31217ece`): cài thành công 4 APK tiện ích; ảnh chụp màn hình trắng (máy khoá màn hình/tắt màn hình khi chạy script) → cần mở khoá máy rồi chạy lại để có ảnh.
- IReader: không có bản APK x86_64 → chưa cài lên emulator.
- Emulator báo *System UI isn't responding* khi mở nhiều app liên tiếp (máy ảo chậm, không phải lỗi tiện ích).

**Cloudflare — phân loại (`data/cloudflare.json`)**
| Nhóm | Nguồn | Ý nghĩa |
|---|---|---|
| Tự qua (JS challenge) | 101kks, 69shuba, 69shurepoduongden, czbooks, luvevaland, mattreadingtranslations, novelfull.net, uukanshu, ciyuanji, tik.porn, xfree | Mở bằng WebView trong app một lần là dùng được; Mangayomi có cờ `hasCloudflare` |
| Cần người xác minh (Turnstile) | 101minc, hhtqhay.vip, sonako, cbhentai, myreadingmanga | Người dùng phải tự bấm xác minh trong WebView của app; tiện ích báo lỗi `CLOUDFLARE: …` hướng dẫn |
| Chặn IP | hameln (syosetu.org) | Không truy cập được từ Việt Nam |
| Không phải Cloudflare | quanben (trang mặc định CentOS), wodeshucheng5 (nginx 403), doctruyentranhbl (bắt đăng nhập Google) | Trang hỏng/chặn, không sửa được ở phía tiện ích |

**Lỗi phát hiện & cách sửa (vòng Cloudflare)**
| # | Lỗi | Sửa |
|---|---|---|
| 14 | 9 nguồn dính Cloudflare chưa từng phân tích được (bộ chụp trang Node bị 403) nên selector tự sinh sai → 0 kết quả | Phân tích DOM thật trong trình duyệt, viết selector tay trong `data/specs.manual.json`: 101kks, czbooks, uukanshu, luvevaland, mattreadingtranslations, ciyuanji, tik.porn, xfree; novelfull.net đổi từ tiện ích cộng đồng (viết cho novelfull.com, giao diện khác) sang mẫu `generic` |
| 15 | 101kks chỉ hiện 36 chương, phần còn lại tải bằng AJAX `/ajax_novels/chapterlist/<id>.html` | Thêm khoá `ch_rewrite` (regex đổi URL mục lục) vào `lib/lib_generic.js` |
| 16 | Trang GBK (69shuba) bị lỗi font trên Mangayomi: Dart giải mã charset lạ thành Latin-1 | `runtime/vbook.js`: phát hiện văn bản Latin-1 + charset GBK → giải mã lại bằng bảng GBK (`runtime/gbk-table.txt`, 23.940 ô); bảng chỉ được nhúng vào plugin Mangayomi của nguồn dùng GBK (`build-all.mjs`, +72 KB) |
| 17 | Tiện ích cộng đồng gọi `Console.log` → `Console is not defined` | Thêm bí danh `Console` vào runtime Node/Mangayomi/LNReader (`runtime/vbook.js`) và Rhino (`runtime/rhino-prelude.js`), `ENV_NAMES` trong `build-all.mjs` |
| 18 | Lỗi 403/503 do Cloudflare hiện chung chung "HTTP 403" | `lib/lib_common.js`: `C.cf()` nhận diện trang thách thức, báo `CLOUDFLARE: … mở nguồn bằng WebView …` |
| 19 | Tìm kiếm 69shuba cần chạy JavaScript (máy chủ trả trang trống cho POST thường) | Ghi nhận: tìm kiếm chỉ chạy trên vBook (có `Engine.newBrowser`), duyệt/đọc chạy ở mọi app |
| 20 | Nguồn đã sửa không được app cập nhật | Tăng `version` = 2 cho 11 nguồn trên (`gen_sources.py` hỗ trợ `version` trong spec, kể cả nguồn `ref`) |

| 21 | Kiểm thử plugin đã phát hành (commit `8550da9`) trong trình duyệt thật: czbooks trang thể loại khác trang chủ (tên truyện là `div.novel-item-title` nằm trong thẻ `a`) → 0 kết quả | sửa `title`/`link` |
| 22 | 101kks: `li:has(a[href*='/book/'])` bắt cả khung "搜索關鍵詞…" và danh sách bên lề → trang 2 trùng trang 1 | `item: '#article_list_content > li'` |
| 23 | uukanshu: tìm kiếm chuyển hướng sang `/search/<từ khoá>/1.html`, trang danh sách dùng `.bookinfo h4.bookname` | thêm tab 排行/玄幻/修真/都市/全本, `search: '/search/{q}/{p}.html'` |
| 24 | mattreadingtranslations: mục lục 16 trang, tải nhanh bị **HTTP 429** ở trang 8 | `lib_common.js` `C.get`: tự thử lại khi 429 (chờ 1,5 s → 3 s → 4,5 s); `lib_generic.js` khoá `ch_delay` (500 ms giữa các trang mục lục) |
| 25 | tik.porn: trang video chứa cả một "feed" 26–60 file `.mp4` của video khác → lấy nhầm video | khoá mới `video` trong `lib_generic.js` (lấy `video source@src` của chính trang); tab đầu đổi sang tab có phân trang |
| 26 | luvevaland: trang chi tiết không có `h1` → tên truyện trống | `d_title: '.breadcrumb__container a.breadcrumb__item:last-child'` |
| 27 | ciyuanji: tìm kiếm `_0_{p}` trả về khối "gợi ý" (MiniBook) | `search: '/search/{q}_{p}.html'` |

**Kết quả kiểm thử Cloudflare trong trình duyệt thật (máy chủ dự án)**
- Duyệt → chi tiết → chương → nội dung kiểm tra tay trên trang thật: 101kks (1.555 chương qua AJAX, nội dung `#txtcontent`), czbooks (150 chương, `.content`), uukanshu (190 chương, `.readcotent`), luvevaland (76 chương, `#chapter-content`), mattreadingtranslations (mục lục 16 trang, `.entry-content`), ciyuanji (949 chương, nội dung SSR `chapter_article`), novelfull.net (40 chương/trang + `rel=next`, `#chapter-content`), tik.porn & xfree (link `.mp4` trực tiếp trong trang video).
- Plugin Mangayomi 69shuba bản cũ: popular 50 / detail 569 chương / nội dung 3.680 ký tự — chạy đúng; lỗi font chỉ do trình duyệt luôn giải mã UTF-8, đã kiểm thử bản sửa GBK bằng Node (`斗罗A大陆` giải mã đúng).
- 101minc: vẫn dừng ở *Performing security verification* sau 8 giây → xác nhận cần người bấm xác minh.
- Lượt 2 (plugin commit `8550da9`, chạy trong trình duyệt thật bằng shim Mangayomi, Dart-giống: charset không phải UTF-8 → Latin-1):
  | Nguồn | Danh sách | Trang 2 | Tìm kiếm | Chi tiết + mục lục | Nội dung / video |
  |---|---|---|---|---|---|
  | 101kks | 25 ✅ | ⚠️ trùng (đã sửa #22) | ⚠️ (đã sửa #22) | 1.555 ch ✅ | 3.489 ký tự ✅ |
  | czbooks | ❌ 0 (đã sửa #21) | | | | |
  | uukanshu | 8 ✅ | (đã sửa #23) | ❌ (đã sửa #23) | 190 ch ✅ | 1.336 ký tự ✅ |
  | luvevaland | 12 ✅ | 12 ✅ | 12 ✅ | 11 ch ✅ (tên trống, sửa #26) | 11.439 ký tự ✅ |
  | mattreadingtranslations | 8 ✅ | — | 8 ✅ | ❌ 429 (đã sửa #24) | |
  | ciyuanji | 10 ✅ | 10 ✅ | ❌ (đã sửa #27) | 141 ch ✅ | 5.622 ký tự ✅ |
  | novel­full.net | 22 ✅ | 22 ✅ | 22 ✅ | 873 ch ✅ | 10.222 ký tự ✅ |
  | tik.porn (18+) | 22 ✅ | (sửa #25) | 36 ✅ | 1 tập ✅ | mp4 ✅ (sửa nhầm video #25) |
  | xfree (18+) | 21 ✅ | 21 ✅ | 30 ✅ | 1 tập ✅ | mp4 ✅ |
  | 69shuba | 50 ✅ | — | ❌ cần JS (chỉ vBook) | 569 ch ✅ | 2.405 ký tự, chữ Trung đúng ✅ |
- Lượt 3 (plugin commit `0b4c983`, cùng cách thử): **11/11 nguồn đạt**.
  | Nguồn | Kết quả |
  |---|---|
  | czbooks | 72 truyện/trang, trang 2 khác trang 1, tìm "嫁金釵" 42 kết quả, chi tiết + tác giả, nội dung 2.167 ký tự ✅ |
  | 101kks | 15 truyện/trang, trang 2 khác, tìm "魔門" 20 kết quả (hết dòng rác), 112 chương, nội dung ✅ |
  | uukanshu | tab 排行 30 truyện/trang, trang 2 khác, tìm "神通" 12 kết quả, 2.968 chương, nội dung 4.368 ký tự ✅ |
  | mattreadingtranslations | White Wolves 154 chương (đủ 16 trang mục lục, không còn 429), nội dung 60.327 ký tự ✅ |
  | tik.porn | 36 video/trang, trang 2 khác, link mp4 trùng đúng thẻ `<video>` của chính trang ✅ |
  | ciyuanji | tìm "女神" 10 kết quả ✅ |
  | luvevaland | tên truyện ở trang chi tiết đã có ✅ |
  | novelfull.net, xfree, 69shuba | như lượt 2 ✅ |

**Kiểm thử trong ứng dụng thật — Mangayomi 0.9.95 trên Emulator (04/11/2026 23:20)**
- Deep link `mangayomi://add-repo` → hộp thoại *Add Repository?* → **Add** → "Source repository added!". Tab Browse → Novel → Extensions hiện đủ danh sách tiện ích Kiritokmn (Matt Reading 0.0.3, NovelFull.Net 0.0.2…); cài NovelFull.Net thành công.
- Mangayomi bắt cấp quyền *All files access* mới cho cài tiện ích (đã được chủ dự án đồng ý bật trên máy ảo).

| # | Lỗi | Sửa |
|---|---|---|
| 28 | **Mở nguồn trong Mangayomi báo `ReferenceError: '__abs' is not defined`** — engine JS của Mangayomi (QuickJS) không có lớp `URL`; runtime rơi sang hàm `__abs` vốn chỉ có trong bản Rhino. Lỗi này ảnh hưởng **toàn bộ 196 plugin Mangayomi/YomiHub** (trình duyệt và Node có `URL` nên các bài thử trước không phát hiện) | `runtime/url.js`: tự giải URL tương đối theo RFC 3986 (không phụ thuộc host, kiểm 11/11 ca khớp `URL` chuẩn); `engine.js`, `dom.js` (`abs:href`) dùng hàm này; thêm base64 thuần JS thay `btoa`, `sleep` chạy được cả khi không có `setTimeout`. Kiểm thử: chạy plugin trong `vm` **không có** `URL/btoa/TextDecoder` → danh sách, chi tiết, mục lục, nội dung đều đúng |
| 29 | App đã cài sẽ không nhận bản sửa | Phiên bản Mangayomi/YomiHub `0.0.x` → `0.1.x`, LNReader/IReader `1.0.x` → `1.1.x` cho mọi nguồn |
| 30 | Đọc chương lỗi chỉ báo "Không tìm thấy nội dung", không biết app nhận được trang gì | `lib_generic.js` `text()`: báo kèm tiêu đề trang, mã HTTP, độ dài (và nội dung nếu < 400 ký tự); phát hiện trang thách thức Cloudflare trả mã 200 |
| 31 | czbooks trong Mangayomi hiện các ký tự `\r` giữa các đoạn (trang dùng xuống dòng CRLF) | `lib_common.js` `cleanContent`: bỏ `\r` / `&#13;` |

- Kết quả trong Mangayomi (emulator, sau bản sửa): **NovelFull.Net** danh sách có ảnh bìa → chi tiết (tác giả FanficLord03, Ongoing, 636 chương) → đọc chương 1 đầy đủ ✅. **czbooks** (nguồn dính Cloudflare) danh sách → chi tiết (《全屬性武道》, 3.289 chương) → đọc chương 3309 ✅; app tự nhận bản cập nhật (Update pending) sau khi tăng phiên bản ✅. Ảnh: `_work/shots/emu_mangayomi_*.png`.

**Kiểm thử trên Galaxy Note9 (SM-N960N) — 05/11/2026 06:45**
- Mangayomi: deep link thêm repo ✅, danh sách tiện ích (phiên bản 0.1.x) ✅, cài NovelFull.Net / App Truyện Chữ / czbooks / TruyenQQ ✅.
- czbooks (Cloudflare): danh sách → 《不打仗的將軍》 28 chương → đọc chương 1, **không còn ký tự `\r`** ✅.
- App Truyện Chữ: danh sách và chi tiết ✅, nhưng **mục lục sai** (chỉ có "Chương mới nhất", "Đọc truyện") ❌ — cần viết selector riêng.
- TruyenQQ: danh sách ✅, chi tiết 376 chương ✅ (lẫn 1 mục giả "Đọc từ đầu"), **trang ảnh không tải được** ❌.

| # | Lỗi | Sửa |
|---|---|---|
| 32 | TruyenQQ: ảnh chương "This image couldn't be loaded". Thử bằng curl trên máy chủ dự án: CDN `i216.truyenvua.com` / `hinhtruyen.com` trả **403** khi không có `Referer` hoặc `Referer` sai tên miền (`truyenqq.com.vn`), **200** khi `Referer: https://truyenqqko.com/` | `hosts/mangayomi.tail.js`: `Referer` lấy từ tên miền của chính trang chương (không phụ thuộc giá trị cài đặt), thêm `User-Agent`, `Accept: image/*`; `__base()` bỏ qua giá trị cài đặt không phải URL. Phiên bản Mangayomi `0.1.x` → `0.2.x` |
| 33 | Sau bản 0.2.x ảnh TruyenQQ vẫn không tải: tiện ích TruyenQQ trả trang dạng `{link: src, fallback: [data-original]}`; app chỉ nhận một URL nên lấy `src` — với trang di động đây thường là ảnh chờ (lazy-load) | `runtime/engine.js` `pages()`: nếu `link` là ảnh chờ (`data:`, `loading`, `lazy`, `blank`…) thì dùng `fallback[0]`; áp dụng cho Mangayomi, LNReader và APK Rhino. Phiên bản Mangayomi `0.3.x`, APK dựng lại |

- Nekoyomi 0.20.6 trên Note9: chọn thư mục lưu trữ (được chủ dự án đồng ý), thêm repo `tachiyomi://` và `aniyomi://` ✅. Tiện ích APK hiện "không đáng tin cậy" cho tới khi **khởi động lại app**, sau đó tự tin cậy nhờ `signingKeyFingerprint` (đã đối chiếu bằng `apksigner`: `b92c172d…aa39d` trùng khớp) ✅. **PhimTV**: danh sách có ảnh bìa → chi tiết → **phát video tập 23** ✅ (ảnh `n9_nekoyomi_phimtv_playing.png`). Đọc Truyện Tranh BL: danh sách + chi tiết 6 chương ✅; mở chương chưa kiểm được vì màn hình bị xoay ngang sau khi xem video.
- LNReader 2.x trên Note9: thêm repo bằng `lnreader://repo/add?url=…` ✅, danh sách plugin (1.1.x) hiện đủ ✅, nhưng **cài plugin nào cũng báo "Cài đặt lỗi"** ❌ (thử Bàn Long).
- Chưa kiểm trên Note9: vBook (thêm repo + đọc), IReader (cài app lỗi từ trước), đọc truyện tranh trong Nekoyomi.

### 05/11/2026 (sáng) — Sửa lỗi cài plugin LNReader/IReader, mục lục App Truyện Chữ

| # | Lỗi | Sửa |
|---|---|---|
| 34 | **LNReader: cài plugin nào cũng lỗi** (ảnh hưởng toàn bộ 116 plugin truyện chữ). Đọc mã nguồn LNReader (`src/plugins/pluginManager.ts`): app chạy plugin bằng `Function('require','module', 'const exports = module.exports = {}; <mã>; return exports.default')`. Bản build CJS của esbuild **gán lại** `module.exports = …`, nên `exports.default` của object ban đầu là `undefined` → app coi như plugin hỏng. Bài thử cũ trong Node đọc `module.exports.default` nên không phát hiện. IReader cũng lấy `exports.default \|\| exports` nên bị cùng lỗi | `tools/build/build-all.mjs`: thêm vào cuối mỗi plugin LNReader một dòng gán `exports.default = module.exports.default`. Thử lại bằng **đúng hàm nạp của LNReader** cho cả 116 plugin: trước khi sửa **0/116**, sau khi sửa **116/116** (đủ `id`, `version`, `popularNovels`, `parseNovel`, `parseChapter`, `id`/`version` khớp `plugins.min.json`). Phiên bản LNReader/IReader `1.1.x` → `1.2.x` |
| 35 | Định chạy thử bằng Hermes (`hermes-engine-cli`) để tìm lỗi #34: gói này bị chính sách mạng chặn (npm trả 403 ở cả máy ảo trên PC lẫn container) | Không cần nữa — đã tìm ra nguyên nhân bằng cách đọc mã nạp plugin của LNReader (mục #34) |
| 36 | **App Truyện Chữ: mục lục chỉ có "Chương mới nhất", "Đọc truyện"**, nội dung chương không lấy được. Trang làm bằng Next.js (App Router): danh sách chương được tải bằng **Server Action** `fetchChaptersOfBook` (POST kèm header `Next-Action`), nội dung chương nằm trong luồng RSC `self.__next_f.push(...)` chứ không có trong HTML | `lib_generic.js` thêm hỗ trợ Next.js dùng chung: `G.ch_action` (gọi Server Action theo tên; mã action đổi mỗi lần trang deploy nên nếu mã đã lưu hết hạn thì tự tìm lại trong các file `_next/static/chunks/*.js`), `G.content_rsc` (ghép luồng RSC, lấy dòng văn bản `T` dài nhất, tách đoạn), `G.c_locked` (chương khoá → hiện thông báo thay vì lỗi). Thử trên trang thật: 322 chương ✅, tự tìm lại mã action khi mã cũ sai ✅, chương 1 đủ 7.837 ký tự / 91 đoạn ✅. Chương 51 trở đi trang khoá (cần đăng nhập) — mục lục đánh dấu 🔒. Phiên bản nguồn 1 → 2 |
| 37 | Ghi chú phát hành: file `plugins.min.json` / `plugin.json` trong Release không được thay khi chỉ đổi số phiên bản (1.1.x → 1.2.x cùng độ dài nên cùng dung lượng; `publish.ps1` chỉ so dung lượng) | `tools/win/publish.ps1`: so thêm SHA-256 (trường `digest` của GitHub) trước khi bỏ qua tệp đã tải lên |
| 38 | `tools/test/host-sim.mjs` giả lập LNReader sai cách (đọc `module.exports.default`) nên không phát hiện lỗi #34 | Dùng đúng hàm bọc của LNReader (`const exports = module.exports = {}; …; return exports.default`), báo lỗi nếu `exports.default` không có |

**Điều tra ảnh truyện tranh không hiện trong Mangayomi trên Note9 (05/11/2026 09:15–12:06)**
- Trên Note9 có cài **TruyenQQ (`truyenqqc`, truyenqq.com.vn, ảnh ở `s34.cc3t.net`)** chứ không phải **Truyện QQ (`truyenqq`, truyenqqko.com)** — hai nguồn khác nhau. Cả hai CDN đều trả 403 khi thiếu `Referer`, 200 khi có.
- Plugin cho ra đúng URL + header: chạy bản trên GitHub trong trình duyệt và bằng Node trên PC (không cookie): Truyện QQ 38 trang, TruyenQQ 6 trang, ảnh tải về 200 `image/jpeg` khi gửi header của plugin (kể cả UA `Dart/3.5`).
- Kiểm chứng bằng **repo debug cục bộ** (server Node chỉ nghe 127.0.0.1:8099 trên PC, nối với điện thoại qua `adb reverse`, ghi lại header của từng request): Mangayomi 0.9.95 **có gửi** header của từng trang (`Referer`, `X-Kiri-Page`) và header nguồn (`getHeaders`) khi tải ảnh trang; ảnh tải về **200** nhưng trình đọc **vẫn báo "This image couldn't be loaded"**, kể cả ảnh PNG 600×400 hợp lệ mà ảnh bìa (cùng tệp) hiện bình thường.
- Mục *Error reports* của app ghi `PathAccessException: Creation failed, path = '/storage/emulated/0/Mangayomi' (Permission denied)`: Mangayomi (targetSdk 36) trên Android 10 bị scoped storage dù đã có quyền bộ nhớ. Đã bật `appops LEGACY_STORAGE allow` (được chủ dự án đồng ý) → app tạo được thư mục, nhưng ảnh trang vẫn không hiện.
- **Kết luận: lỗi ở trình đọc của Mangayomi trên máy này, không phải ở tiện ích** (ảnh tải đủ, đúng header). Cần thử đọc truyện tranh Mangayomi trên thiết bị khác / máy ảo Android 14 để xác định, và có thể báo lỗi cho Mangayomi. Nekoyomi trên Note9 vẫn không nhận chạm vào chương (chưa đọc được truyện tranh để so sánh).
- Mangayomi lưu danh sách trang của từng chương vĩnh viễn (`chapter_disk_cache`, khoá `mangaId_chapterUrl`): chương đã mở bằng plugin cũ sẽ không nhận bản sửa cho tới khi xoá bộ nhớ đệm chương.
- Đã trả lại cài đặt trên máy: chế độ đọc mặc định *Vertical*, tắt *Enable logging*, gỡ 2 tiện ích debug + repo `127.0.0.1`, gỡ `adb reverse`. Giữ `LEGACY_STORAGE allow` cho Mangayomi.

### 05/11/2026 (chiều) — Kiểm LNReader trên Note9, sửa danh sách App Truyện Chữ

- **LNReader trên Note9 sau bản 1.2.x:** cài plugin **Bàn Long** và **App Truyện Chữ** thành công (sáng nay báo "Cài đặt lỗi") ✅. App Truyện Chữ: danh sách → chi tiết → **401 chương** có tên đầy đủ → đọc chương 1 ✅. Bàn Long: danh sách → chi tiết (tác giả, mô tả, thể loại) → mục lục → đọc chương ✅. Video `_work/shots/n9_lnreader.mp4`.

| # | Lỗi | Sửa |
|---|---|---|
| 39 | App Truyện Chữ: **tên truyện và ảnh bìa lệch nhau** trong danh sách (selector `.flex` bắt cả khung lồng nhau); **tìm kiếm `/tim-kiem` trả 404** | Thẻ truyện là `li > a.group` (link chính là thẻ, tên lấy từ `img@alt`); tìm kiếm `/truyen?keyword={q}&page={p}`; thêm tab *Truyện dịch nổi bật*, *Mới nhất*, *Tiên hiệp*, *Huyền huyễn*, *Đô thị*, *Ngôn tình*, *Đọc nhiều*. Kiểm bằng Node trên PC: Mangayomi 20 truyện/trang (tên khớp bìa), trang 2 khác trang 1, tìm "pháp sư" 19 kết quả, 322 chương, nội dung 8.294 ký tự, chương khoá hiện thông báo; LNReader danh sách 20, tìm kiếm 19. Phiên bản nguồn 2 → 3 |

**Kiểm chứng Mangayomi trên máy ảo Android (Medium Phone API 37) — 05/11/2026 13:20**
- **Truyện QQ** (truyenqqko.com): danh sách → *Võ Luyện Đỉnh Phong* (3.883 chương, thể loại, mô tả) → đọc Chương 3859: trang 1 (banner) và trang 2 (ảnh dài 900×23885) **hiển thị bình thường** ✅.
- **TruyenQQ** (truyenqq.com.vn, ảnh `cc3t.net`): *Cường Giả Đến Từ Trại Tâm Thần* 376 chương → đọc Chương 374 (11 trang) **hiển thị bình thường** ✅.
- ⇒ Bản sửa `Referer` (#32–33) **đúng**; lỗi "This image couldn't be loaded" chỉ xảy ra với Mangayomi 0.9.95 trên Galaxy Note9 (Android 10), không do tiện ích. Video `_work/shots/emu_mangayomi_truyenqq*.mp4`.
- MangaDex trên máy ảo báo `HTTP 0 https://mangadex.org/` — nằm trong nhóm nguồn còn lỗi, chưa xử lý.

| # | Lỗi | Sửa |
|---|---|---|
| 40 | Mangayomi tách các nguồn repack thành nhóm riêng **"VI_VN"** (và `zh_CN`, `en_US`) thay vì gộp vào *Tiếng Việt*; LNReader xếp nguồn `zh-CN` vào *Multi* | `build-all.mjs`: chuẩn hoá mã ngôn ngữ cho Mangayomi / LNReader / APK (`vi_VN`→`vi`, `zh_CN`/`zh`→`zh-CN`, `en_US`→`en`, `ja_JP`→`ja`); gói vBook giữ nguyên. LNReader thêm `zh-CN`→中文, `global`→Multi. Kết quả: Mangayomi `vi` 120, `zh-CN` 51, `global` 11, `en` 10, `ja` 4; LNReader 中文 48 (trước là Multi). ID nguồn không đổi (băm theo id, không theo ngôn ngữ) nên tiện ích đã cài không bị mất |

### 05/11/2026 (chiều) — Sửa hàng loạt nguồn lỗi bằng công cụ dò tự động

Kiểm thử trực tiếp lúc 13:33: **34/196** nguồn đạt. Phân loại 162 nguồn lỗi (công cụ `triage.mjs`, tải trang chủ như plugin): HTML thường có link 87 · trang dựng hoàn toàn bằng JS / không có link 24 · lỗi mạng 26 · Cloudflare 17 · HTTP 403/404/5xx 8.

| # | Việc | Chi tiết |
|---|---|---|
| 41 | **Giới Truyện** (gioitruyen.com) — trang dựng bằng JS, HTML gốc chỉ 4 KB | Viết lại bằng **JSON API** `/api/v1`: duyệt `/stories/browse?page&size&sort` (Mới cập nhật / Xem nhiều), tìm `/search?q`, chi tiết `/stories/{slug}`, mục lục `/stories/{slug}/chapters` (tối đa 100/trang, tự lật), nội dung `/chapters/by-number/{n}` (`contentHtml`); chương trả xu (`accessType: PAID`) đánh dấu 🔒 và hiện thông báo. Thêm kiểu spec `tpl: custom` (bộ sinh mã không ghi đè script viết tay). Thử trên trang: 20 truyện/trang, 282 chương, nội dung 2.368 ký tự |
| 42 | Công cụ **`tools/test/spec-wizard.mjs`** | Tải trang như plugin (dùng chính `runtime/dom.js`), tìm khối thẻ truyện lặp lại (bỏ nav/header/footer/menu, bỏ link thể loại/tag, mỗi thẻ phải trỏ tới trang khác nhau), mở thử truyện → nhóm link chương → mở chương → vùng chữ dài nhất (truyện chữ) hoặc nhóm ảnh lớn nhất (truyện tranh); đề xuất `item/link/title/cover/ch_list/content/pages` |
| 43 | Công cụ **`tools/test/auto-improve.mjs`** | Với mỗi nguồn generic đang lỗi: chạy wizard → ghép vào `config.js` → build + test trực tiếp → **chỉ giữ nếu nguồn tốt lên**, ngược lại khôi phục. Lượt 1: vá 52, giữ 39, **21 nguồn chuyển sang đạt** (75zwcom, ehentai, goctruyentranh, hacamchicac, hotphim, ijjjxsxzw, mangadm, mimimoe, mintteanovel, navyteamcomic, nettruyenviet, novelphoenix, novelpiaglobal, piaotia, shinigamilnteam, sobqg, thegioitruyen, tinhlinh, truyenzhihutonghop, vinahentai, webtruyenchu); 6 nguồn cập nhật tên miền mới (abcbiquge, lofter, ciyuanji, sudugu, truyenzhihutonghop, vinahentai) |
| 44 | Công cụ **`tools/test/search-improve.mjs`** — tìm URL tìm kiếm đúng | Thử form tìm kiếm thật của trang + ~30 mẫu phổ biến. Lượt đầu cho nhiều **dương tính giả** (`/?s=` trả về trang chủ, từ khoá lại lấy từ truyện trên trang chủ) → đã hoàn tác; nay bắt buộc: khối kết quả có tên chứa từ khoá, khác danh sách trang chủ, và **từ khoá vô nghĩa không trả về khối đó**. Template thêm selector riêng cho trang kết quả (`s_item/s_title/s_link/s_cover`) và tìm kiếm POST (`search_post`). Sửa được: 75zwcom, novelphoenix, nettruyenviet, thegioitruyen, vinahentai, deqixs, quanben |
| 45 | Nguồn phim | Template thêm `ch_attr` (lấy URL tập từ thuộc tính, vd. `button[data-url]`) và `ch_fallback_single` (phim lẻ không có danh sách tập → chính trang là 1 tập). **phimnhua**: tập là nút `button[data-url]` chứa sẵn m3u8, phim lẻ có m3u8 trong `PLAYER_CONFIG`. **xemphimgi**: `div.episodes-grid a`, m3u8 có trong trang tập. **luphim**: danh sách tập chỉ có ở trang `/xem-phim/` → `ch_url` + `div.de-eps a`, phát qua iframe `moviking.ayama.fun`. Không làm được: **nextphim** (trang review, video YouTube nhúng), **vfilm** (bắt reCAPTCHA trước khi xem) |
| 46 | `run-tests.mjs --only` ghi đè mất kết quả của các nguồn khác | Nay gộp kết quả mới vào file cũ |

- Sau các lượt sửa: **53–54/196** nguồn đạt (dao động ±1 do trang chập chờn), chưa tính gioitruyen và các bản sửa tìm kiếm/phim cuối cùng.
- Còn lại cần làm tay: trang dựng bằng JS/API (minotruyen dùng API `cloudkk-v2`, douyin, tiktok, youtube, iqiyi, mgtv, twitch, weibo…), Cloudflare tương tác, các trang đã chết/đổi tên miền (26 lỗi mạng), và nhóm phim phát qua iframe/API riêng (blvietsub, animevnnet, hentaivietsubcom, hhpanda, watchhentainet, hihiphim, phimmoi).

### 05/11/2026 (tối) — Thêm nguồn viết tay qua API, giải mã Init Manga, sửa tìm kiếm

Bản phát hành lúc 14:34 (commit `f4d7c73`): **57/196** nguồn đạt kiểm thử trực tiếp.

| # | Việc | Chi tiết |
|---|---|---|
| 47 | **07br** (bqg603.cc) — trang dựng bằng JS (hash router) trên API `apibi.cc` | Viết tay (`tpl: custom`): danh mục `/api/sort?sort=`, trang chủ `/api/index`, tìm `/api/search?q=`, chi tiết `/api/book?id=`, mục lục `/api/booklist?id=` (chỉ có tên chương, số chương = vị trí), ảnh bìa `/bookimg/{id/1000}/{id}.jpg`. Nội dung `/api/chapter?token=` với token = Base64(**AES-128-CBC**(JSON `{"id":…,"chapterid":…}`), key `a3dc22cf70418a51`, iv `394c2c3202da6270`, PKCS7) — viết bộ mã hoá AES thuần ES5 trong `config.js` (đối chiếu đúng với Node `crypto`) để chạy trên mọi ứng dụng |
| 48 | **Mọt Truyện** (mottruyen.app) — Vue app | Viết tay trên `api.mottruyen.app/api/v1`: danh sách/tìm `story?collection=SEARCH&page&size&keyword&categoryIds`, chi tiết `story/{id}`, mục lục `story/{id}/chapter?size=500&page`, nội dung `story/{id}/chapter/{n}` (`content` HTML; chương khoá hiện thông báo 🔒); ảnh `static.mottruyen.app/api/v1/storage` |
| 49 | Template: tìm kiếm qua **JSON API** (`search_json`) | `{url, list, title, link, cover}` — `link` có thể là mẫu `/truyen/{slug}`. Dùng cho **Navy Team (truyện chữ)**: `/api/search-story?keyword=` |
| 50 | Template: **`q_cut`** | Cắt từ khoá tại dấu câu cho trang tìm kiếm không chịu dấu phẩy toàn góc (8book) |
| 51 | Template: giao diện WordPress **Init Manga** (`initmanga: true`) | Chương được mã hoá ngay trong trang: `InitMangaEncryptedChapter {ciphertext, iv, salt}` + `InitMangaData.decryption_key` (Base64 của passphrase) → khoá = PBKDF2-SHA512(passphrase, salt, 999 vòng, 32 byte), AES-256-CBC. Ảnh là `canvas[data-enc]` = Base64 của URL viết ngược. Bộ sinh mã chép `lib/extra/crypto.js` (CryptoJS) vào nguồn và thêm `load('crypto.js')` cho `chap.js`; `build-all` chỉ nhúng `crypto-js` khi nguồn thật sự cần (không làm phình mọi nguồn generic). Áp dụng: **blbattu** (đổi loại thành truyện tranh — thực chất là truyện tranh), **destinteam**; danh sách `/truyen/page/{p}/`, tìm `/?s=&post_type=manga`, mục lục `div.chapter-item` có phân trang |
| 52 | Sửa tìm kiếm/selector | **moetruyen** `/manga?q=`; **xbanxia** `/modules/article/search_t.php?searchkey=` + mục lục `div.book-list li a`, nội dung `#nr1`; **8book** thẻ kết quả `a.nowraphide`; **syosetu** danh sách lấy từ bảng xếp hạng `yomou.syosetu.com/rank/list/type/*_total/`, tìm ở `yomou.syosetu.com/search.php`, truyện ngắn 1 chương dùng chính trang; **hangtruyenchu** danh sách `/danh-sach`, mục lục `a.chapter-item-link`, nội dung `div.chapter-content` |
| 53 | `autospec.py` | Khi spec tay đổi `base`, tự đưa tên miền mới vào danh sách `domains` (trước đây bị mất khi sinh lại) |

- Kiểm thử lượt này (11 nguồn): **07br, mottruyen, navyteamnovel** chuyển sang đạt; hacamchicac vẫn đạt với template mới.
- Chưa làm được: **moetruyen** ảnh chương bị xáo/ẩn bằng script (`data-imgx-page-index`), **8book** nội dung chương nạp bằng JS trên tên miền ngụy trang, **tutien.pro** bắt đăng nhập mới xem truyện, **po18sm** tìm kiếm cần mã hoá GBK, **metruyencv/mtc/truyencv** tên miền `metruyencv.xyz` không truy cập được, **anime47/lohi** là ứng dụng JS dùng API riêng.



### 08/11/2026 — Bản 0.0.2 (Nâng cấp Short Video YomiHub, Resume A Video cho Phim & Tối ưu hóa đa nền tảng)

**Công cụ đã dùng:** Git (GitHub Desktop / Git CLI), Node.js v24.19.0, esbuild, TypeScript 5.6, Android Studio JBR + Android SDK 35/36 + Gradle 9.3.1 + AGP 8.13.1, adb + Samsung Galaxy Note9 SM-N960N (`281038ac31217ece`) + Android Emulator (API 34/37).

**Hạng mục đã làm:**
1. **Nâng cấp phiên bản toàn hệ thống lên 0.0.2:**
   - Cập nhật `package.json` lên phiên bản `0.0.2`.
   - Nâng phiên bản tiện ích Mangayomi/YomiHub lên `0.4.x`, LNReader/IReader lên `1.3.x`.
   - Nâng `versionCode = 2` và `versionName = 14.2` (anime) / `1.4.2` (manga) cho bộ 4 APK Aniyomi/Nekoyomi.
2. **Tích hợp bộ tính năng "Resume A Video":**
   - Bổ sung `env.resumeStorage` vào `runtime/vbook.js` hỗ trợ đọc/ghi vị trí phát qua `storageGet`/`storageSet` (`localStorage` / `SharedPreferences`).
   - Cập nhật `runtime/engine.js` trong phương thức `videos(url)`: tự động gắn mốc thời gian chuẩn Media Fragment (`#t=<sec>` hoặc `&t=<sec>`) vào URL luồng phát (HLS / MP4), đồng thời bổ sung nhãn trực quan `[Tiếp tục mm:ss]` trên danh sách chất lượng/server video.
   - Bổ sung tùy chọn `RESUME_VIDEO` (Bật/Tắt tiếp tục phát từ vị trí đã thoát) trong `hosts/mangayomi.tail.js`.
3. **Tích hợp tính năng "Short Video" chuẩn YomiHub:**
   - Rà soát và cấu hình 11 nguồn video ngắn: YouTube Shorts, TikTok, Douyin, FreeReels, Tik.Porn, FikFap, Kwiky, xFree, FapReel, SexVietTop, PornHub shorties.
   - Thêm cờ `shorts: true` và `hasShorts: true` vào `repo/index.json` và metadata tiện ích.
   - Bổ sung bộ lọc `SelectFilter` (Chế độ xem Shorts / Mặc định) trong `getFilterList()` của tiện ích để YomiHub nhận diện và kích hoạt trình phát cuộn dọc 9:16.
4. **Tối ưu hóa dung lượng & hiệu năng:**
   - Tinh gọn các tệp trung gian trong `.build/`, nạp có chọn lọc `crypto-js` chỉ khi nguồn có dùng thuật toán giải mã (InitManga, 07br AES).
   - Dọn sạch tệp 0.0.1 cũ trong `Output/`, đóng gói các gói phân phối mới: 4 APK và 3 gói zip (`mangayomi-yomihub`, `lnreader-ireader`, `vbook-leechtext`).
   - Sinh lại `README.md` cập nhật toàn bộ link tải v0.0.2 trong mục Releases.
5. **Cài đặt và kiểm thử trực tiếp trên thiết bị:**
   - Cài đặt thành công 4 APK cập nhật lên thiết bị Samsung Galaxy Note9 SM-N960N.
   - Chạy kiểm thử khởi động và giao diện trên các ứng dụng: Nekoyomi, YomiHub, Mangayomi, vBook, LeechText.
   - Chụp ảnh màn hình (`n9_nekoyomi.png`, `n9_yomihub.png`, `n9_mangayomi.png`, `n9_vbook.png`, `n9_leechtext.png`) và quay video thao tác kiểm thử (`test_002.mp4`) lưu tại `_work/shots/`.

**Lỗi phát hiện & cách sửa:**
| # | Lỗi | Sửa (tệp / dòng lệnh) |
|---|---|---|
| 59 | URL video gắn mốc `#t=` bị lỗi phân giải nếu URL đã có sẵn fragment `#` | `runtime/engine.js`: kiểm tra `streamUrl.indexOf('#') >= 0 ? '&t=' : '#t='` |
| 60 | YomiHub không nhận diện tab Short Video nếu thiếu trường `shorts: true` trong `index.json` | `tools/build/build-all.mjs`: bổ sung `shorts: !!reg.short, hasShorts: !!reg.short` vào `mgMeta` |
| 61 | Thư mục `Output/` và `README.md` tồn đọng tên các tệp cũ 0.0.1 | Dọn sạch tệp cũ trong `Output/`, sinh lại `make-output.mjs` và `gen-readme.mjs` |
| 62 | Phiên bản APK cũ trên thiết bị không nhận bản cập nhật do giữ nguyên versionCode = 1 | `android/build_apks.ps1`: đặt `$code = 2`, biên dịch lại 4 APK với versionCode = 2 |

**Kết quả kiểm thử:**
- `build-all.mjs`: 196/196 nguồn biên dịch thành công; YomiHub bổ sung 29 nguồn và thay thế 20 nguồn trùng.
- `build_apks.ps1`: Gradle biên dịch thành công 4 APK release đã ký với fingerprint `b92c172d...aa39d`.
- `host-sim.mjs`: Kiểm thử giả lập môi trường Mangayomi & LNReader trên `truyenqq` (42 truyện, 3898 chương) và `mottruyen` (20 truyện, 46 chương) đạt 100%.
- Kiểm thử thiết bị: Cài đặt đè trực tiếp 4 APK thành công (Streamed Install Success) trên Samsung Galaxy Note9. Chụp ảnh màn hình và ghi hình video kiểm thử đầy đủ.


### 08/11/2026 — Bản 0.0.3 (Aidoku, Resume A Video làm lại, sửa lỗi Rhino trong APK, tối ưu tải trang)

**Công cụ đã dùng:**
- Mã nguồn & kho tham khảo: Git CLI (clone `Aidoku/aidoku-rs`, `Aidoku/Aidoku`, `Aidoku/AidokuRunner`, `Aidoku-Community/sources`, `kiritokmn1403/YomiHub-Project`, `apivideo/resumeAVideo`, `rust-lang/rust` (thư mục `library`) và `rust-lang/backtrace-rs` để dựng `core`/`std` cho wasm).
- Dựng: Node.js 22/24 + esbuild + TypeScript; Rust 1.97 (`-Zbuild-std`, `wasm32-unknown-unknown`); `aidoku-cli` và `aidoku-test-runner` dựng từ aidoku-rs `ae6485e`; Python 3 + Pillow (biểu tượng nguồn Aidoku); Android SDK 35/36 + Gradle 9.3.1 + AGP 8.13.1 + JBR của Android Studio (APK).
- Kiểm thử: adb, Samsung Galaxy Note9 SM-N960N (Android 10, `281038ac31217ece`) có Aniyomi 0.18.2.1, Nekoyomi 0.20.6, Mangayomi 0.9.95, YomiHub 0.5.3, LNReader 2.1.4, vBook 1.1.54, LeechText 2.0.0.
- Thực thi: chạy script `.bat`/PowerShell trên máy Windows của chủ dự án (File Explorer). `_work/phone2.ps1` điều khiển điện thoại: chạm theo chữ qua `uiautomator dump`, chụp `screencap`, quay `screenrecord` thành từng đoạn 170 giây.

**Đọc trước khi sửa:** `AGENTS.md` và toàn bộ tài liệu này; 2 tệp Excel (*Feature Check* → *Update* → *Extension Repo Main* 196 nguồn, *Tham Khảo*; *Project GitHub* 640+ link).

**Hạng mục đã làm**
1. **Aidoku (iOS):**
   - `aidoku/bridge` (Rust `no_std`, crate `kiri-bridge`): giữ một `JsContext` (JavaScriptCore) cho mỗi nguồn, nạp engine JS một lần, rồi chạy theo giao thức `start`/`poll`/`resume`. Các trait đã cài: `Source`, `ListingProvider`, `DynamicListings`, `ImageRequestProvider` (Referer của trang chương + User-Agent), `BaseUrlProvider`.
   - `hosts/aidoku.tail.js`: adapter phía JS. Gồm giải mã base64 → UTF-8/GBK (JSC không có `TextDecoder`), chuyển chương HTML sang Markdown, đánh số chương, tự lấy bộ mã ký tự từ `<meta charset>`.
   - `tools/build/aidoku-build.mjs`: sinh Cargo workspace `.build/aidoku-ws` (mỗi nguồn một crate, `include_str!` engine), dựng wasm, đóng gói `.aix`, ghi `repo/aidoku/index.min.json` + `icons/`. `tools/gen/aidoku_icons.py`: biểu tượng 128×128 không trong suốt.
   - `build-all.mjs` ghi thêm `.build/aidoku/<id>.js` + `sources.json` cho 152 nguồn truyện tranh/tiểu thuyết.
2. **Resume A Video (làm lại):** `runtime/engine.js` có thêm `canon()`/`decanon()`. Mọi URL trả về ứng dụng được ghi theo tên miền mặc định; trước khi chạy script thì đổi về tên miền đang chọn. Gỡ phần resume chết của 0.0.2 trong `engine.js`, `vbook.js` (`resumeStorage`) và `hosts/mangayomi.tail.js` (`RESUME_VIDEO`, `#t=`). `getPageList` của Mangayomi lấy Referer từ URL đã đổi về tên miền đang chọn.
3. **Tối ưu:** bộ nhớ đệm GET trong `runtime/vbook.js` (60 giây, 6 phản hồi, chỉ lưu HTTP 200).
4. **Short Video:** đối chiếu mã YomiHub (`overlay/lib/yomihub/player/yomi_shorts.dart`): `YomiShorts.supports()` chỉ nhận ID tiện ích tích hợp (`BuiltinExtensions.shortsIds`: 920260006/7/8/13/14/15/16/17) hoặc tên bắt đầu bằng `youtube`/`fikfap`, và **không đọc** cờ `shorts` trong `index.json`. Kho đã giữ nguyên các ID này cho 8 nguồn YomiHub (YouTube, Pornhub, FikFap, Tik.Porn, Kwiky, xFree, FapReel, SexVietTop), nên Shorts chạy trong YomiHub 0.5.3. Thêm `additionalParams: "shorts"` để bản YomiHub sau nhận diện theo kho.
5. **Phiên bản:** `package.json` 0.0.3; APK `versionCode 3` (14.3 / 1.4.3); Mangayomi 0.5.x; LNReader 1.4.x; Aidoku 1xx.
6. **Phát hành:** `make-output.mjs` thêm `Kiritokmn-Extension-0.0.3-aidoku.zip` và xoá tệp bản cũ trong `Output/`. `gen-readme.mjs` thêm Aidoku (đường dẫn, deep link `aidoku://addSourceList`, mục "Có gì mới"). `publish.ps1` lấy lời nhắn commit từ `PUB_MSG`. `build_all.ps1` thêm bước 3b (Aidoku).

**Lỗi phát hiện & cách sửa**
| # | Lỗi | Sửa (tệp / dòng lệnh) |
|---|---|---|
| 63 | **Resume A Video 0.0.2 không hoạt động**: `videos()` đọc `resumeStorage.get(url)` nhưng không chỗ nào gọi `set`, vì tiện ích không nhận được thông báo từ trình phát. Mốc `#t=` luôn bằng 0, ExoPlayer/mpv cũng bỏ qua `#t=` trên HLS. Tuỳ chọn `RESUME_VIDEO` không có tác dụng | Gỡ mã chết. Vị trí xem do chính ứng dụng lưu theo URL tập (Aniyomi/Nekoyomi `last_second_seen`, Mangayomi/YomiHub `YomiPrefs.resumeVideoPosition`), nên chỉ cần URL ổn định: `engine.js` `canon()`/`decanon()` |
| 64 | Đổi **Tên miền** trong cài đặt nguồn thì URL phim/chương đổi theo, ứng dụng tạo tập mới và mất vị trí xem / trạng thái đã đọc | Như #63. Kiểm thử: `rophim` với tên miền `rophim9.online` → `canon()` trả `https://www.rophim.soy/phim/abc`, `decanon()` đổi lại `https://rophim9.online/phim/abc`; URL ảnh CDN khác tên miền giữ nguyên |
| 65 | `cargo` trong máy dựng (đám mây) không tải được target wasm32 (`static.rust-lang.org` bị chặn) | Lấy `library/` của rust-lang/rust đúng tag 1.97.0 + submodule `backtrace` từ GitHub, đặt làm `rust-src`, dựng bằng `RUSTC_BOOTSTRAP=1 -Zbuild-std=core,alloc` (`AIDOKU_BUILD_STD=1`) |
| 66 | `aidoku-test-runner` dùng Boa nhưng **không chạy hàng đợi microtask** sau `eval` (khác JavaScriptCore), nên `await` không bao giờ chạy tiếp | `aidoku/test-runner-jsc-microtasks.patch`: thêm `context.run_jobs()` sau `context.eval()` (chỉ cho bộ kiểm thử) |
| 67 | Chạy test wasm báo `duplicate lang item … core`: test của cargo bỏ qua `panic = "abort"` nên `core` bị dựng hai lần | `-Zbuild-std=std,panic_abort,test -Zpanic-abort-tests` |
| 68 | `aidoku verify`: biểu tượng "is fully opaque… no" | `aidoku_icons.py` dán lên nền trắng (RGB) |
| 69 | `aidoku-sim.mjs --all` in kết quả xong nhưng tiến trình Node không thoát (một trang giữ kết nối), làm `build_all.ps1` đứng ở bước 3b | Thêm `process.exit(0)`. Lần chạy này dừng tiến trình bằng `_work/!KILL.bat` (chỉ dừng tiến trình có `aidoku-sim` trong dòng lệnh) |
| 70 | **APK: mọi lỗi script trong Rhino biến thành `MissingResourceException: Can't find bundle for base name org.mozilla.javascript.resources.Messages, locale vi_VN`**. Phát hiện khi mở Truyện QQ trong Nekoyomi trên Note9 (cả danh sách, chi tiết, đọc đều lỗi). `packaging.resources.excludes` có `**.properties` nên xoá mất `Messages.properties` của Rhino, mà Rhino cần tệp này mỗi khi tạo thông báo (kể cả cảnh báo) | `android/anime|manga/build.gradle.kts`: bỏ `**.properties` khỏi `excludes`. APK có lại `org/mozilla/javascript/resources/Messages*.properties`. Kiểm lại trên Note9: Truyện QQ danh sách → chi tiết → đọc ✅ |
| 71 | `!RUN.bat` gọi `build_apks.ps1` với `> log` thì treo sau khi Gradle xong (Kotlin daemon giữ handle của pipe) | Chép APK từ `Output/apk-build` bằng tay. Trong `build_all.ps1` không gặp lỗi này (không chuyển hướng đầu ra) |
| 72 | Ghi nhận (chưa sửa): **Mimimoe**, **NetTruyenViet** "đạt" `run-tests` nhưng tab đầu là danh mục của trang (Manhwa/Manhua/…, "Danh sách truyện"), không phải truyện. **Góc Truyện Tranh** chương chỉ có 1 ảnh chờ. **PhimTV**, **Rổ Phim**: HTTP 0 (tên miền chết) | Cần viết lại selector/API trên mạng thật ở bản sau. `run-tests.mjs` nên kiểm thêm "tên truyện không trùng tên mục menu" |

**Kết quả kiểm thử**
- `build-all.mjs`: 196/196 nguồn biên dịch (cả trên máy đám mây và máy Windows).
- `aidoku-build.mjs`: 152/152 gói, tổng 19,7 MB (`.aix` 60–300 KB). `aidoku verify`: 152/152 đạt.
- `aidoku-test-runner` (wasm thật + JS + HTTP, máy chủ HTML giả lập): `kiri-zzfxcomic` và `kiri-zzfxnovel` đều **ok**. Chuỗi: listings 2 → 2 truyện, có trang sau → "Truyện A", 3 chương → 2 trang ảnh / 1 trang chữ. Chương GBK giải mã đúng `第二章 测试中文`. Header gửi đi có `Referer`, `User-Agent`.
- `aidoku-sim.mjs --snap` (96 nguồn có ảnh chụp trang): trùng 96/96 với engine Node trước và sau khi thêm `canon()`.
- `run-tests.mjs` (mạng thật, 08/11/2026 11:52): **63/196** (Phim 4/44, Truyện tranh 22/37, Tiểu thuyết 37/115); bản 0.0.2 là 57.
- `aidoku-sim.mjs --all` (mạng thật): **61/152**. Mọi nguồn đạt ở `run-tests` đều đạt ở Aidoku; thêm 8book, sohu.
- APK: Gradle dựng 4 APK đã ký (`b92c172d…aa39d`). Cài đè trên Note9: `Streamed Install Success`, phiên bản 14.3 / 1.4.3.
- Thiết bị (Note9) — ảnh `_work/shots/v003/*.png`, video `_work/shots/v003/*.mp4`:
  - **Nekoyomi 0.20.6 — Phim** (`n9_neko_*`, video `n9_nekoyomi_phim_*.mp4`): NguonC, Phim Nhựa, XemPhimGi, HotPhim đi trọn danh sách → chi tiết → **phát video** ✅. Mở lại phim thì nút **"Tiếp tục"** hiện ra, tức ứng dụng giữ lịch sử xem theo URL tập ổn định. PhimTV, Rổ Phim: `HTTP 0` (tên miền chết) ❌, khớp với `run-tests`.
  - **Nekoyomi — Truyện tranh** (`n9_nekm_*`, video `n9_nekoyomi_truyen_*.mp4`): TruyenQQ, TruyenGG, NetTruyenViet, Destin Team (giải mã Init Manga), Thế Giới Truyện, VinaHentai (18+) đọc được ✅. **Truyện QQ** lỗi `MissingResourceException` → sửa ở #70 → kiểm lại đọc được ✅ (`n9_nekm_truyenqq_fix_*`). Mimimoe, Góc Truyện Tranh: lỗi nội dung (#72).
  - **Aniyomi 0.18.2.1** (thiết lập lần đầu: chọn thư mục thử `Download/YomiHub_test`, thêm kho bằng `aniyomi://add-repo` và `tachiyomi://add-repo`; `n9_ani_*`, video `n9_aniyomi_*.mp4`): NguonC, Phim Nhựa, HotPhim phát được ✅. Truyện QQ, TruyenGG, TruyenQQ đọc được ✅. Hắc Ám Chi Các: trang đầu của chương là ảnh `.svg`, Aniyomi mở bằng WebView.
  - **Phát hành rồi kiểm lại bằng chính kho trên GitHub** (commit `687e576`, Release `v0.0.3`, 12/12 tệp, `verify push match=True`). Từ máy đám mây đã tải lại thử: `repo/aidoku/index.min.json` 200, `.aix` 200, các index 200, `package.json` = 0.0.3, tệp APK trong Release 200 (839.064 byte).
  - **Mangayomi 0.9.95** (`n9_mgy_*`): kéo xuống làm mới thì TruyenQQ báo *Update pending* → *Update all*. Cài thêm Truyện QQ, TruyenGG, Destin Team. Nhãn nguồn hiện "in Extension Repo 0.0.3". TruyenQQ: danh sách → chi tiết 376 chương, nút **"Resume · Chapter 374"** vẫn đúng chương đọc dở từ 05/11 (URL ổn định) ✅. Mở trang ảnh trên Note9 vẫn báo "This image couldn't be loaded". Đây là lỗi trình đọc của Mangayomi trên máy này đã ghi ở 05/11 (máy ảo hiện bình thường), không do tiện ích.
  - **YomiHub 0.5.3** (`n9_yh_*`, video `n9_yomihub_shorts_*.mp4`): nguồn YouTube (NewPipe · Pure Tuber) → tab **Shorts** → luồng video dọc toàn màn hình, vuốt lên sang clip tiếp theo 2 lần ✅.
  - **LNReader 2.1.4** (`n9_ln_*`, video `n9_lnreader_*.mp4`): tab Plugins nhận bản 1.4.x → *Update all*: App Truyện Chữ 1.4.3, Bàn Long 1.4.8; cài Giới Truyện 1.4.2, Boylove Bất Tử 1.4.1. Bàn Long: danh sách → *Giang Sơn Tuyệt Sắc Bảng* (tác giả, mô tả, thể loại) → **đọc Chương 01** ✅.
  - **vBook 1.1.54** (`n9_vb_*`): app chạy, nhưng trên máy chưa cài tiện ích nào và kho mặc định của vBook không phải kho Kiritokmn. Lượt này chưa kiểm đọc trên vBook/LeechText. Gói vBook (`repo/vbook/*.zip`) không đổi mã ở 0.0.3 (script vBook gốc), nên hành vi giống 0.0.2.
  - Sau kiểm thử đã trả lại cài đặt xoay màn hình của Note9 (`accelerometer_rotation` 0 → 1 như ban đầu). Thư mục thử của Aniyomi: `Download/YomiHub_test`.

**Việc cần làm ở bản sau**
- Sửa các nguồn lỗi nội dung (#72) và 152 → 196 nguồn đạt. Phim hiện 4/44: nhiều trang phim dùng API/iframe riêng.
- TikTok, Douyin, FreeReels (Short Video): trang cần chữ ký chống bot (X-Bogus / a_bogus). Cần API trung gian (ví dụ tikwm) và YomiHub đọc `additionalParams: "shorts"` (sửa ở `YomiShorts.supports()`).
- Kiểm Aidoku trên iPhone/iPad thật khi có thiết bị. Cài Rust + `wasm32-unknown-unknown` trên máy Windows để `build_all.ps1` tự dựng lại gói Aidoku.
- `run-tests.mjs`: thêm phép kiểm "tên truyện ≠ tên mục menu" để không báo đạt nhầm.

### 08/11/2026 (chiều) — Kiểm thử các nguồn còn lỗi trên YomiHub, qua VPN tích hợp sẵn của YomiHub

Chủ dự án yêu cầu: nguồn nào chưa kiểm được thì kiểm trên YomiHub. Nguồn nào không vào được thì bật VPN tích hợp sẵn của YomiHub rồi kiểm lại.

**Công cụ:** YomiHub 0.5.3 trên Galaxy Note9. Dùng mục *Thêm › VPN & DNS › Dịch vụ VPN*: **Tor** (HTTP 8118 / SOCKS 9050, phạm vi "mọi tiện ích") và **Cloudflare WARP** (chế độ "Chỉ YomiHub").
- Điều khiển máy bằng `_work/phone2.ps1`. Bản này có thêm các lệnh: `need <gói>` (bỏ qua cả khối nếu app khác đang ở trên cùng), `seekc`/`rowtapc` (tìm theo chữ có chứa), `win` (chạy lệnh Windows).
- `adb forward tcp:18118 tcp:8118` để Node trên máy Windows đi qua đúng Tor của YomiHub.
- `tools/test/run-tests.mjs` có thêm `--out <tệp>` để ghi kết quả riêng.
- `_work/purge.bat` xoá bộ nhớ đệm jsDelivr của các index (YomiHub dùng jsDelivr làm bản dự phòng khi `raw.githubusercontent.com` bị chặn).

**Bước 1 — kiểm tự động 133 nguồn đang lỗi, qua Tor của YomiHub** (`vpn_tor_test.bat`, kết quả ở `data/test-results-vpn-tor.json`; xác nhận `check.torproject.org` trả `IsTor:true`):
- Đi trọn chuỗi: **1/133** (PhimTV: danh sách → tìm → chi tiết → tập → video). Khi kết nối trực tiếp từ mạng Việt Nam, nguồn này báo `HTTP 0`, tức tên miền `phimtv.my` bị nhà mạng chặn chứ không phải đã chết.
- Đi được thêm một số bước: hihiphim 1→3, mattreadingtranslations 0→3, quanben 0→4, viblo 2→3.
- Còn lỗi qua Tor: 92 nguồn lỗi phân tích trang (trang đổi giao diện / dựng bằng JS / cần API riêng; VPN không giúp được), 20 nguồn Cloudflare/403 (nhiều trang chặn hẳn IP Tor), 20 nguồn lỗi mạng (tên miền chết hẳn).

**Bước 2 — kiểm trong app YomiHub** (ảnh `_work/shots/v003/y_*`, `w_*`, video `n9_yh_tor_test_*.mp4`, `n9_yh_warp_test_*.mp4`):

| Nguồn | Kết nối thẳng (mạng VN) | Qua Tor (kiểm tự động) | Trong app YomiHub + Tor |
|---|---|---|---|
| PhimTV | `HTTP 0` (tên miền bị chặn) | **đạt trọn chuỗi** | Danh sách ✅ → chi tiết ✅ (10 tập) → phát: luồng video quay mãi không chạy (>70 giây) ⚠️. Thử qua WARP: vẫn `HTTP 0` (lúc đó WARP đang "Đang kết nối…") |
| HiHiPhim | danh sách | 3/5 bước | Danh sách ✅ → chi tiết ✅ (24 tập) → phát: trang phát bắt **xác minh Cloudflare** (người dùng phải tự bấm) ⚠️ |
| Viblo | 2 bước | 3 bước | Danh sách ✅ → chi tiết ✅ (8 bài) → **đọc nội dung ✅** |
| quanben | Cloudflare / máy chủ chặn | 4 bước | Danh sách ✅ → chi tiết ✅ → chương chỉ có 1 dòng giới thiệu (lấy nội dung sai) ⚠️ |
| Matt Reading Translations | Cloudflare | 3 bước | Cài bản 0.5.3 ✅. Danh sách: `HTTP 403` (Cloudflare chặn IP Tor) ❌ |
| RoPhim (định dạng YomiHub) | `HTTP 0` | — | Danh sách trống. Chi tiết: "Sorry, you have been blocked" (`phimapi.com` chặn Tor) ❌ |
| Xôi Lạc TV (định dạng YomiHub) | lỗi mạng | — | Danh sách trận đấu ✅ → chi tiết ✅ → phát: đang tải khi chụp ⚠️ |
| GuPhim | lỗi mạng | lỗi | "Không có kết quả" ❌ (lỗi phân tích trang) |
| NetTruyen (truyện chữ) | lỗi mạng | lỗi | Cài ✅. "Không có kết quả" ❌ |
| MangaDex (GLOBAL) | `HTTP 0` (`mangadex.org` bị chặn; `api.mangadex.org` vẫn vào được) | lỗi | Cài 0.5.1 ✅ (sau khi mạng của máy được nối lại). Mở nguồn: `Error: HTTP 0 https://mangadex.org/` cả khi kết nối thẳng lẫn qua Tor ❌. Qua Tor, `curl` tới `mangadex.org` và `api.mangadex.org` đều không trả lời (chặn IP Tor) |
| WebtoonScan | `HTTP 0` (tên miền vẫn phân giải ra `5.182.209.177` nhưng máy chủ không trả lời) | lỗi | Cài 0.5.1 ✅. Mở nguồn: quay ~2,5 phút rồi `Error: HTTP 0 https://webtoonscan.com/`, cả kết nối thẳng lẫn qua Tor ❌. Trang đã chết |
| Wiki Dịch (truyện chữ) | `HTTP 0` (`wikicv.net` bị chặn) | lỗi | Cài 0.5.1 ✅. Kết nối thẳng: "Không có kết quả". Qua Tor: **vào được trang** (`wikicv.net` → chuyển sang `wikicv.org`, `200`, có 101 liên kết `/truyen/…`), nhưng app vẫn "Không có kết quả" ❌ vì cấu hình nguồn thiếu bộ chọn `item` |

**Nhận xét**
- VPN của YomiHub giúp được các nguồn bị **nhà mạng chặn tên miền** (PhimTV, Viblo, quanben, HiHiPhim).
- VPN không giúp được các nguồn hỏng do **trang đổi cấu trúc** (92/133), hoặc trang **chặn IP VPN/Tor** bằng Cloudflare (Matt Reading, RoPhim/phimapi). Các nguồn này cần sửa mã ở bản sau.
- Lỗi phát hiện thêm: YomiHub lưu danh sách tiện ích cũ (PhimTV hiện 0.3.1 trong khi kho đã là 0.5.1). Bấm cài vẫn tải đúng bản mới 0.5.1. Bộ nhớ đệm jsDelivr đã được xoá bằng `purge.bat`.
- **Nguyên nhân gốc của nhiều nguồn "Không có kết quả":** 62/149 nguồn dùng mẫu chung (`lib/lib_generic.js`) có `config.js` chỉ khai báo `tabs`/`search`, **không có bộ chọn `item`**. `X.items()` vì thế không chọn được thẻ truyện nào, nên danh sách luôn trống dù trang tải được. Đây là trường hợp của GuPhim, NetTruyen, Wiki Dịch, MangaDex, WebtoonScan. Danh sách 62 nguồn: anime47, avsubanimevietsub, bilibili, cbhentai, dailymotion, damconuong, douban, douyin, duahau, dualeotruyen, fapreel, fikfap, freereels, gongzicp, guphim, hamelnsyosetuorg, haychill, hhtqhayvip, html5qqcom, idejian, iqiyi, julycomic, kwiky, lacatruyen, langgee, lohi, loppytoon, mangadex, mgtv, minotruyen, myreadingmanga, nettruyen, nettruyenz, phim4k, phimmoihd, piaotianapp, pornhub, qmbook, rophim, sexviettop, showbox, sitruyencv, snapd, soixamfanqie, sonako, syosetur18, taonovel, tiktok, truyenh, truyenmoikk, tutienpro, twitch, vtvgo, webtoonscan, weibo, wikidich, wodeshucheng5, xoilac, xsw, xtruyen, youtube, ypshuobinhluansach.
- **Sự cố trong lúc kiểm:** giữa chừng Note9 mất Internet dù Wi-Fi vẫn báo đã kết nối (`ping 8.8.8.8` mất 100% gói, không phân giải được tên miền). Vì vậy Tor dừng ở 95% ("chưa kết nối được sau 90 giây") và bấm cài MangaDex chỉ quay rồi thôi, không báo lỗi. Tắt/bật lại Wi-Fi (`svc wifi disable/enable`) thì mạng trở lại, Tor kết nối lại được và cài bình thường. YomiHub không báo lỗi khi cài thất bại, đây là chỗ app nên sửa.
- Cài qua Tor rất chậm (WebtoonScan quay hơn 4 phút). Cách nhanh hơn: tắt VPN để cài, rồi bật VPN để kiểm.
- Gõ tìm kiếm: bàn phím Laban Key (Telex) đổi chữ khi gõ bằng `adb input text`. Dùng chuỗi con không bị Telex đổi: `gaDe` (MangaDex), `ebto` (WebtoonScan), `iki` (Wiki Dịch).
- Sau kiểm thử đã trả lại máy như cũ, có xác nhận: VPN của YomiHub **đang tắt**, bàn phím mặc định `com.vng.inputmethod.labankey/.LatinIME`, `accelerometer_rotation = 1`. Ảnh `_work/shots/v003/z_*`, video `n9_yh_tor_final_*.mp4`.

**Tổng kết kiểm trong app (12 nguồn):** đọc/xem được đến nội dung: **Viblo** (cần Tor). Vào được danh sách + chi tiết nhưng chưa xem được nội dung: PhimTV, HiHiPhim, quanben, Xôi Lạc TV. Không dùng được: Matt Reading, RoPhim, GuPhim, NetTruyen, MangaDex, WebtoonScan, Wiki Dịch.

**Việc cần làm ở bản sau (từ lượt kiểm này)**
- Viết bộ chọn `item`/`title`/`cover` (và chi tiết, mục lục, nội dung) cho 62 nguồn mẫu chung còn thiếu. Ưu tiên Wiki Dịch (đổi tên miền sang `wikicv.org`, đã có trang mẫu `_work/wd_home.html`) và NetTruyen.
- MangaDex: viết lại theo API `api.mangadex.org` (vào được thẳng từ Việt Nam). Không cào `mangadex.org`, vì đó là trang dựng bằng JavaScript và bị chặn ở Việt Nam.
- WebtoonScan: trang đã chết, nên gỡ khỏi kho hoặc đánh dấu ngừng.
- quanben: sửa bộ chọn nội dung chương. PhimTV/Xôi Lạc: kiểm lại luồng phát.
