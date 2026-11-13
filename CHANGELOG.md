# Kiritokmn Extension Repo — v0.0.5 (13/11/2026)

## Tính năng mới
- **Aniyomi / Nekoyomi: mỗi nguồn là một tiện ích (APK) riêng.** Trước đây chỉ có 4 APK gộp (Phim, Phim 18+, Truyện, Truyện 18+) nên trong danh sách Tiện ích mọi nguồn trông giống nhau. Nay có **81 APK** (44 Phim + 37 Truyện tranh). Mỗi APK mang **tên và logo của nguồn**, nên phân biệt được ở cả tab *Tiện ích* lẫn *Nguồn*, và bạn chỉ cần cài nguồn mình dùng.
  - Gói: `eu.kanade.tachiyomi.animeextension.<ngôn ngữ>.kiri<id>` (Phim) / `eu.kanade.tachiyomi.extension.<ngôn ngữ>.kiri<id>` (Truyện).
  - **Source ID giữ nguyên** như 0.0.4. Gỡ 4 APK gộp cũ rồi cài APK mới thì thư viện, lịch sử và vị trí xem tiếp vẫn còn (đã kiểm trên Galaxy Note9).
  - Phiên bản APK theo phiên bản từng nguồn (`14.1xxx` / `1.4.1xxx`), nên sửa nguồn nào thì chỉ nguồn đó báo cập nhật.
- **Rãnh âm thanh riêng cho luồng phát:** nguồn có thể trả hình và tiếng tách rời (`audios`). Aniyomi/Nekoyomi dùng `audioTracks`, Mangayomi/YomiHub dùng `audios`.
- Kiểm thử tự động có thêm bước **tải thử luồng phát** (`run-tests.mjs --stream`): tải vài KB đầu của link phát hoặc segment HLS đầu tiên, thử cả HTTP/2.

## Sửa lỗi
- **NguonC không phát trong Aniyomi (lỗi 403):** CDN segment của NguonC chỉ trả dữ liệu qua **HTTP/2** và từ chối HTTP/1.1, trong khi trình phát mpv của Aniyomi chỉ nói HTTP/1.1. APK nay có **cầu nối HTTP/2 nội bộ** (`127.0.0.1`): mpv gọi cầu nối, cầu nối tải lại bằng OkHttp (HTTP/2) của ứng dụng. Playlist cả phim (khoảng 1500 đoạn, gửi dạng `data:`) cũng được phục vụ đúng. **Kết quả trên điện thoại thật:** phim 1:43:26 phát được, tua được, thoát ra mở lại thì xem tiếp.
- **YouTube quay mãi trong Aniyomi:** client iOS của YouTube chỉ trả luồng hình và luồng tiếng tách rời. Trước đây tiện ích đưa luồng hình không tiếng cho mpv. Nay mỗi chất lượng (1080p, 720p, 480p…) ghép với luồng tiếng AAC tốt nhất, thành rãnh "Âm thanh gốc". **Đã phát được trên điện thoại thật.**
- **Sửa nguồn:**
  - Sohu và Syosetu đạt trọn chuỗi.
  - Mangadm hết báo "đạt nhầm" do link "Skip to content".
  - Wiki Dịch, NetTruyenViet, Weeb Central, Sudugu, Lofter, PO18, Sweetastes, NovelNext, HiHiPhim, HentaiVietsub: sửa bộ chọn, các nguồn này qua thêm bước.
- `lib_generic.js`:
  - Link chương tương đối được tính theo trang hiện tại.
  - Link `?page=2` giữ nguyên đường dẫn trang.
  - Bỏ qua link `#…` và `javascript:`.
  - Thêm `pages_suffix`.

## Phiên bản
- `package.json` 0.0.5.
- Mọi nguồn tăng `version` 1 bậc.
- APK `versionCode = 1000 + version nguồn`.
- Aidoku `BRIDGE_REV 3`, 152 gói dựng lại.

## Kiểm thử
- `run-tests.mjs --stream` trên mạng thật (máy Windows, 13/11/2026 23:19): **66/196** (0.0.4: 60). Phim 5/44, Truyện tranh 21/37, Tiểu thuyết 40/115. Bước tải thử luồng phát đạt với NguonC, HotPhim, XemPhimGi, YouTube, TikTok.
  - Mới đạt: Sohu, Syosetu, Sudugu, Lofter, Shubenshu, Weeb Central.
  - Không đạt lần này do trang lỗi hoặc mạng: PornHub (bị chặn ở VN), PhimNhựa (HTTP 530), Tinh Linh (HTTP 525), ixdzs8, Mê Truyện Chữ.
- `aidoku-sim.mjs --all`: **64/152** (0.0.4: 58). Aidoku: 152/152 gói dựng lại.
- Gradle: **81/81 APK** (44 Phim, 26,6 MB + 37 Truyện, 22,4 MB), đã ký bằng khoá `b92c172d…aa39d` như các bản trước.
- **Điện thoại thật Galaxy Note9** (Android 10). Ảnh và video ở `_work/shots/v005/`:
  - Gỡ 4 APK gộp, cài 81 APK mới ✅.
  - Aniyomi: mỗi tiện ích/nguồn hiện **tên + logo riêng** ✅.
  - NguonC: phát phim 1:43:26, tua, thoát ra mở lại xem tiếp ✅.
  - YouTube: phát được, có rãnh "Âm thanh gốc" ✅.
  - Nekoyomi: nguồn truyện tranh có logo riêng, TruyenQQ đọc 160 trang ✅.

---

# Kiritokmn Extension Repo — v0.0.4 (13/11/2026)

## Tính năng mới
- **Logo cho từng tiện ích (196 nguồn).** Mỗi nguồn có logo 256×256 riêng (`sources/<id>/icon.png`, `repo/icons/<id>.png`). Logo lấy từ chính trang web: apple-touch-icon, `<link rel=icon>`, web manifest, favicon. Trang không có logo, hoặc có logo mặc định trùng với trang khác (biểu tượng của bộ mã CMS, trang lỗi Cloudflare, chữ W của WordPress), được tạo **logo chữ viết tắt** với màu riêng. Góc logo có huy hiệu **▶ Phim / T Truyện tranh / N Tiểu thuyết** và nhãn **18**. Nhờ đó các tiện ích phân biệt được với nhau trên Mangayomi, YomiHub, LNReader, IReader, vBook, LeechText và Aidoku. Trước đây Mangayomi/LNReader lấy favicon qua dịch vụ Google, nên trang chết hiện hình quả địa cầu giống hệt nhau.
  - Aniyomi/Nekoyomi dùng một biểu tượng cho mỗi APK đa nguồn. Đây là giới hạn của ứng dụng; các nguồn bên trong phân biệt bằng tên.
- **YouTube viết lại** theo API InnerTube (API của chính ứng dụng YouTube). Dùng client WEB để tìm kiếm và client iOS để lấy link phát trực tiếp, không cần giải mã chữ ký. Có tab **Shorts**, Âm nhạc, Tin tức, Hoạt hình, Game; dán link YouTube vào ô tìm kiếm cũng mở được video.
- **TikTok và Douyin**:
  - Đã quét bộ *TikTok & Douyin Project* (Evil0ctal/Douyin_TikTok_Download_API).
  - Cả hai tiện ích có ô cài đặt **Máy chủ Douyin_TikTok_Download_API** và **Khoá API**. Khi đặt máy chủ, tiện ích gọi REST API v1 của máy chủ đó (`/{platform}/video`, `/user/posts`, `/hashtag/posts`, `/trending`). Máy chủ tự ký yêu cầu (X-Bogus/a_bogus) bằng nhóm danh tính của nó, nên tiện ích không phải mang thuật toán ký.
  - TikTok khi không có máy chủ: dùng tikwm.com, gồm bảng tin đề xuất theo quốc gia (cài đặt **Khu vực**, mặc định VN), hashtag, tìm kiếm, video của người dùng. Có link HD/SD không logo.
  - Douyin khi không có máy chủ: chỉ có bảng **tìm kiếm nóng** (iesdouyin, không cần chữ ký); bấm vào chủ đề thì mở trên Douyin. **Xem video Douyin trong ứng dụng cần máy chủ**, vì Douyin từ chối khách và mọi API video đều đòi chữ ký.
  - Liên kết video luôn là địa chỉ gốc (`tiktok.com/@user/video/<id>`, `douyin.com/video/<id>`), nên ứng dụng giữ đúng lịch sử xem / Resume A Video.
- **Cài đặt nguồn mở rộng:** mọi mục `config` trong `plugin.json` (ngoài Tên miền) hiện thành ô nhập trong cài đặt nguồn của Mangayomi/YomiHub và của APK Aniyomi/Nekoyomi.
- **Đánh dấu nguồn ngừng hoạt động:** 37 nguồn có tên miền chết, đang rao bán, thành trang cờ bạc hoặc lỗi máy chủ vĩnh viễn. Các nguồn này **vẫn giữ trong kho** nhưng tên có thêm **(Ngừng hoạt động)** và mô tả ghi lý do, áp dụng ở mọi định dạng kể cả tiện ích YomiHub. Danh sách và lý do ở `data/status.json`.
- **README** ghi trạng thái từng nguồn: ✅ / ⛔ / 🛡️ Cloudflare / 🌐 bị chặn ở VN / 🔐 cần đăng nhập / 🔒 chống lấy dữ liệu / 🧩 cần API.
- **Hướng dẫn sửa YomiHub** để nhận Shorts theo cờ của kho (`docs/YOMIHUB_SHORTS_GUIDE.md`). Theo quyết định của chủ dự án, phần này để bản sau.

## Sửa lỗi
- **Kiểm thử báo "đạt" nhầm:** danh sách lấy phải mục menu hoặc thể loại ("Manhwa | Manhua | Manga", "MORE"). `run-tests.mjs` nay đánh trượt khi từ 50% mục trở lên giống menu. Phép kiểm phát hiện **NetTruyenViet**, **TruyenQQ (truyenqq.com.vn)** và **Novelpia**; hai nguồn đầu đã được viết lại bộ chọn.
- **Navy Team Novel:** trước đây lấy cả truyện tranh. Nay dùng mục *Tiểu thuyết*, sửa tên truyện (`h2`) và nội dung chương (`.reader-content`).
- **TruyenC:** mục lục lấy nhầm liên kết menu → chỉ lấy `/chuong-`, đảo thứ tự. **Viblo:** mỗi bài viết là một "chương", đọc được nội dung. **PornHub:** trang video là tập duy nhất, có link phát. **ixdzs8:** chạy lại được.
- **Đổi tên miền:** Wiki Dịch → `wikicv.org`, LuotTruyen → `luottruyen21.com`, PhimTV → `phimtv2.com` (`phimtv.my` bị chặn), XTruyen → `xtruyen.vn`, Xôi Lạc → `xoilacxl.cc`. Tên miền cũ vẫn có trong danh sách chọn.
- **Madara (Đọc Truyện Tranh BL):** khi trang bật "WP Manga Images Protection" (bắt đăng nhập Google), tiện ích báo rõ "cần đăng nhập trong WebView" thay vì trả về 0 ảnh.
- `lib_generic.js`: thêm `ch_from` để lấy mục lục từ API AJAX theo mã trong trang chi tiết (kiểu novelfull/novelnext).

## Tối ưu
- **LNReader/IReader nhỏ đi ~55%:** mã sau khi hạ xuống ES5 được nén lại. Thư mục `repo/lnreader` giảm từ 64 MB xuống 29 MB; tải plugin và cập nhật nhanh hơn.
- Logo lưu dạng PNG bảng màu 128 màu, tổng 2,2 MB cho 196 logo, nhỏ hơn khoảng 4 lần so với PNG RGB.
- Công cụ phát triển: `run-tests.mjs --record/--replay` ghi lại phản hồi HTTP trên mạng thật để sửa bộ chọn ngoại tuyến; `tools/test/one.mjs` chạy từng bước một nguồn; `tools/gen/make_icons.py` dựng logo.

## Phiên bản
- `package.json` 0.0.4 · APK Aniyomi/Nekoyomi `versionCode 4` (`14.4` anime, `1.4.4` manga) · mọi nguồn tăng `version` (có logo mới) · Aidoku `BRIDGE_REV 2` (gói `2xx`).

## Kiểm thử
- `run-tests.mjs` (mạng thật, máy Windows của chủ dự án, 13/11/2026): **60/196** nguồn đi trọn chuỗi; bản 0.0.3 chạy lại cùng ngày được 54. `aidoku-sim.mjs`: 58/152. Aidoku: 152/152 gói dựng thành công.
- **Máy ảo Android (API 37):**
  - Aniyomi: XemPhimGi phát phim, **Resume A Video** phát tiếp đúng mốc 1:34 ✅.
  - Nekoyomi: TruyenQQ đọc chương ✅.
  - Mangayomi: cập nhật tiện ích, cài đặt mới của TikTok, TikTok phát video ✅.
  - LNReader: thêm kho, Navy Team Novel đọc chương ✅.
  - vBook: thêm kho (221 tiện ích, có logo) ✅; app bắt cập nhật lên 1.1.57 mới cho cài tiện ích.
  - Lỗi còn lại, để bản sau: NguonC trả 403 ở luồng phát trong Aniyomi; YouTube trong mpv của Aniyomi quay mãi.
  - Ảnh và video ở `_work/shots/v004/` trên máy của chủ dự án.

---

# Kiritokmn Extension Repo — v0.0.3 (08/11/2026)

## Tính năng mới
- **Aidoku (iOS / iPadOS):** lần đầu có nguồn cho Aidoku, gồm **152 nguồn** (37 truyện tranh + 115 tiểu thuyết). Thêm vào Aidoku bằng đường dẫn `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/aidoku/index.min.json`, hoặc mở liên kết `aidoku://addSourceList?url=…`.
  - Mỗi nguồn là một gói `.aix`: WebAssembly viết bằng Rust (`aidoku/bridge`), bên trong chạy **chung engine JavaScript** với Mangayomi/LNReader/vBook qua JavaScriptCore của iOS. Nhờ vậy sửa nguồn một lần là cả 9 ứng dụng cùng được sửa.
  - Truyện chữ hiển thị bằng trình đọc chữ của Aidoku (Markdown). Ảnh truyện tranh gửi kèm `Referer` của trang chương. Đọc được trang mã hoá GBK (Trung Quốc). Mỗi tab trang chủ của nguồn thành một mục trong Browse. Đổi được tên miền trong cài đặt nguồn.
  - Cần Aidoku 0.8.3 trở lên. Chi tiết: `docs/AIDOKU.md`.
- **Resume A Video (làm lại cho đúng):** Aniyomi, Nekoyomi, Mangayomi và YomiHub tự lưu vị trí xem theo **địa chỉ (URL) của tập phim**. Từ bản này, địa chỉ phim/truyện/tập/chương luôn được ghi theo **tên miền mặc định** của nguồn, dù người dùng chọn tên miền nào trong cài đặt. Vì vậy khi trang đổi tên miền, ứng dụng vẫn nhận ra đúng tập cũ, vẫn **xem tiếp từ chỗ đã thoát** và không mất lịch sử đọc/xem. Áp dụng cho cả 4 APK, Mangayomi/YomiHub, LNReader/IReader và Aidoku.
- **Tăng tốc:** engine giữ lại các trang vừa tải trong 60 giây (tối đa 6 trang). Khi mở một truyện/phim, `detail.js` và `toc.js` dùng chung một lần tải trang chi tiết, nên bớt một lượt mạng mỗi lần mở.
- **Short Video (YomiHub):** ghi thêm cờ `additionalParams: "shorts"` trong `index.json` cho các nguồn có Short Video, để bản YomiHub sau đọc được mà không cần ghi cứng ID tiện ích.

## Sửa lỗi
- **Resume A Video của 0.0.2 không hoạt động:** `engine.js` có đọc vị trí đã lưu (`resumeStorage.get`) nhưng không chỗ nào ghi vào, vì tiện ích không nhận được thông báo từ trình phát. Vì thế mốc `#t=` luôn bằng 0 và nhãn "[Tiếp tục mm:ss]" không bao giờ hiện. Hơn nữa, ExoPlayer/mpv bỏ qua `#t=` trên link HLS. Đã gỡ phần mã này cùng tuỳ chọn `RESUME_VIDEO` (bật/tắt không có tác dụng) và thay bằng cơ chế ở mục *Tính năng mới*.
- **Đổi tên miền làm mất lịch sử:** trước đây đổi tên miền thì ứng dụng tạo tập/chương mới, mất vị trí xem và trạng thái đã đọc. Đã sửa nhờ địa chỉ ổn định.
- `tools/win/publish.ps1`: lời nhắn commit bị ghi cứng nội dung của 0.0.2. Nay đọc từ biến `PUB_MSG`.
- `Output/` còn sót tệp của bản cũ khi phát hành: `make-output.mjs` nay tự xoá các tệp `Kiritokmn-Extension-<phiên bản khác>-*`.

## Phiên bản
- `package.json` 0.0.3 · APK Aniyomi/Nekoyomi `versionCode 3` (`14.3` anime, `1.4.3` manga) · Mangayomi/YomiHub `0.5.x` · LNReader/IReader `1.4.x` · Aidoku `1xx` (= 100 + phiên bản nguồn).

## Kiểm thử
- `run-tests.mjs` (mạng thật, máy chủ dự án): **63/196** nguồn đi trọn chuỗi; bản 0.0.2 là 57.
- `aidoku-sim.mjs` (adapter Aidoku trong ngữ cảnh JS trần giống JavaScriptCore, mạng thật): **61/152** nguồn đạt. Nguồn nào đạt ở `run-tests` thì cũng đạt ở Aidoku.
- `aidoku-test-runner` (WASM + JS + mạng, công cụ chính thức của aidoku-rs): đạt trọn chuỗi với 2 nguồn mẫu (truyện tranh + truyện chữ, có chương GBK) trên máy chủ giả lập. `aidoku verify`: 152/152 gói đạt.
- Galaxy Note9: cài 4 APK 0.0.3 và kiểm tra Nekoyomi, Aniyomi, Mangayomi, YomiHub, LNReader, vBook, LeechText. Ảnh và video ở `_work/shots/v003/`.

---

# Kiritokmn Extension Repo — v0.0.2 (08/11/2026)

## Tính năng mới & Cải tiến trong bản 0.0.2
- **Tích hợp "Resume A Video" cho toàn bộ 44 nguồn Phim & Video**:
  - Ghi nhớ tiến trình và thời gian xem phim (`resumeStorage` thông qua `localStorage` / `SharedPreferences`).
  - Tự động gắn mốc phát Media Fragment (`#t=` hoặc `&t=`) trực tiếp vào URL luồng phát (HLS / MP4), giúp ExoPlayer (Aniyomi / Nekoyomi) và trình phát Mangayomi / YomiHub tự động tiếp tục phát từ chính xác giây người dùng thoát ra trước đó.
  - Hiển thị nhãn trực quan `[Tiếp tục mm:ss]` trên danh sách server/chất lượng video.
  - Bổ sung tùy chọn `RESUME_VIDEO` (Bật/Tắt tiếp tục phát từ vị trí đã thoát) trong cài đặt nguồn tiện ích.
- **Hỗ trợ tính năng "Short Video" chuẩn YomiHub**:
  - Cấu hình 11 nguồn video ngắn dọc 9:16 (YouTube Shorts, TikTok, Douyin, FreeReels, Tik.Porn, FikFap, Kwiky, xFree, FapReel, SexVietTop, PornHub shorties).
  - Bổ sung trường `shorts: true` và `hasShorts: true` vào metadata tiện ích và `repo/index.json`.
  - Bổ sung bộ lọc `SelectFilter` (Chế độ Shorts / Mặc định) trong `getFilterList()` để YomiHub nhận diện và kích hoạt chế độ cuộn dọc 9:16.
- **Nâng cấp phiên bản toàn hệ thống**:
  - `package.json` lên `0.0.2`.
  - Bộ 4 APK Aniyomi/Nekoyomi lên `versionCode = 2`, `versionName = 14.2` (anime) và `1.4.2` (manga).
  - Tiện ích Mangayomi/YomiHub lên `0.4.x`, LNReader/IReader lên `1.3.x`.
- **Tối ưu hóa hiệu năng & Dung lượng**:
  - Tinh gọn mã nguồn trung gian, loại trừ thư viện mã hóa `crypto-js` dư thừa đối với các nguồn không cần thiết.
  - Đóng gói toàn bộ các file cài đặt vào thư mục `Output/` và cập nhật danh sách link tải Releases trên `README.md`.
- **Kiểm thử thiết bị thực tế**:
  - Cài đặt và kiểm thử trực tiếp trên điện thoại Samsung Galaxy Note9 (SM-N960N).
  - Kiểm thử giao diện và tương thích trên các ứng dụng: Aniyomi, Nekoyomi, Mangayomi, YomiHub, LNReader, vBook, LeechText.
  - Chụp ảnh màn hình và quay video toàn bộ quá trình kiểm thử lưu tại `_work/shots/`.

---

# Kiritokmn Extension Repo — v0.0.1 (04/11/2026)

Bản đầu tiên: dựng lại toàn bộ repo (trước đó chỉ có README/LICENSE).


## Cập nhật 06/11/2026 — nhận 29 tiện ích website từ YomiHub 0.5.3
- Thêm thư mục `sources-yomihub/` (mã nguồn tiện ích YomiHub định dạng Mangayomi JS + `_common.js` + `meta.json`) và đầu ra `repo/yomihub/<tên>.js` (tự chứa).
- `repo/index.json` có thêm 29 tiện ích (Hako, Sonako, AnimeVN, AVSub, RoPhim, HotPhim, Anime47, VTVgo, YouTube, Pornhub 18+, FikFap 18+, HihiSex 18+, Tik.Porn 18+, Kwiky 18+, xFree 18+, FapReel 18+, SexVietTop 18+, HayChill, XemPhimGi, NextPhim, Vfilm, CBHentai 18+, Dâm Cô Nương 18+, SayHentai 18+, Xôi Lạc TV, Phimmoi, MotPhim, HiHiPhim, PhimMoiHD), **giữ nguyên id** 920260001… của bản tích hợp cũ → bản đã cài trong YomiHub nhận cập nhật từ kho (phiên bản 0.5.3).
- 20 mục Mangayomi chuyển đổi từ vBook trùng trang web được bỏ khỏi `index.json` (vẫn còn ở định dạng vBook / LNReader / Aniyomi).
- Công cụ: `tools/build/yomihub-sources.mjs` (chạy tự động cuối `build-all.mjs`); README có bảng "Tiện ích YomiHub".

## Tính năng mới
- **Một kho, một thư mục gốc cho 8 ứng dụng**: Aniyomi, Nekoyomi, Mangayomi, YomiHub, LNReader, IReader, vBook, LeechText (`repo/`).
- **196 nguồn** từ sheet *Extension Repo Main*: 44 Phim & Video, 36 Truyện tranh, 116 Tiểu thuyết; gắn cờ 18+ (22 nguồn) theo chuẩn từng ứng dụng.
- **APK đa nguồn cho Aniyomi/Nekoyomi**: *Kiritokmn Phim*, *Kiritokmn Phim 18+*, *Kiritokmn Truyện*, *Kiritokmn Truyện 18+* (thay vì hàng trăm APK riêng lẻ → nhẹ, cập nhật một lần).
- **Đổi tên miền** ngay trong cài đặt nguồn (Aniyomi, Nekoyomi, Mangayomi, YomiHub, vBook).
- Bộ chuyển đổi tự động vBook → Mangayomi / LNReader / IReader / Rhino-APK; bộ kiểm thử trực tiếp và offline.

## Cập nhật trong ngày 04/11/2026 (tối) — sửa nguồn dính Cloudflare
- Viết lại selector cho 9 nguồn dính Cloudflare (101kks, czbooks, uukanshu, luvevaland, mattreadingtranslations, ciyuanji, novelfull.net, tik.porn 18+, xfree 18+) — phiên bản nguồn 2.
- Mangayomi/YomiHub: đọc đúng trang mã GBK (69shuba).
- Báo lỗi rõ ràng khi gặp Cloudflare: "CLOUDFLARE: … mở nguồn bằng WebView".
- 5 nguồn cần người dùng tự xác minh Cloudflare trong WebView: 101minc, hhtqhay.vip, sonako, cbhentai, myreadingmanga.

## Cài đặt
| Ứng dụng | Đường dẫn repo |
|---|---|
| Aniyomi / Nekoyomi | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.min.json` |
| Mangayomi / YomiHub | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json` |
| LNReader / IReader | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/plugins.min.json` |
| vBook / LeechText | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/plugin.json` |

## Lưu ý
- Trạng thái từng nguồn: xem bảng trong README. Nguồn không truy cập được thường do đổi tên miền → đổi trong cài đặt nguồn.
- Aidoku (iOS) chưa có nguồn trong bản này.
