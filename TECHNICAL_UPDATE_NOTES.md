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
