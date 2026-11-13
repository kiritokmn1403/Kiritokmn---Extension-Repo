# Kiritokmn - Extension Repo

**Phiên bản: 0.0.5** · Một kho tiện ích dùng chung cho **Aniyomi, Nekoyomi, Mangayomi, YomiHub, LNReader, IReader, vBook, LeechText và Aidoku** — 196 nguồn Phim, Truyện tranh, Tiểu thuyết (Tiếng Việt, Trung, Anh, Nhật).

Mỗi nguồn được viết **một lần** theo chuẩn vBook (JavaScript). Bộ build tự chuyển sang định dạng của từng ứng dụng:

| Ứng dụng | Thêm repo bằng đường dẫn | Định dạng |
|---|---|---|
| **Aniyomi / Nekoyomi** (Phim + Truyện tranh) | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.min.json` | Mỗi nguồn một APK riêng, có tên + logo riêng (Rhino + jsoup) |
| **Mangayomi / YomiHub** | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json` | JS source (MProvider) |
| **LNReader / IReader** (Tiểu thuyết) | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/plugins.min.json` | Plugin JS (ES5) |
| **vBook / LeechText / YomiHub (tab vBook)** | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/plugin.json` | Gói vBook `.zip` |
| **Aidoku** (iOS / iPadOS, Truyện tranh + Tiểu thuyết) | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/aidoku/index.min.json` | Gói `.aix` (WebAssembly + JavaScriptCore), 152 nguồn — xem [docs/AIDOKU.md](docs/AIDOKU.md) |

> Cả 4 đường dẫn đều nằm chung một gốc: **`https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/`** — Aniyomi/Nekoyomi chỉ cần gốc này.

### Cách thêm nhanh
- **Aniyomi / Nekoyomi**: Thêm → Cài đặt → Duyệt → Kho tiện ích → `+` → dán `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.min.json` (thêm ở cả mục Anime và Manga). Từ 0.0.5 **mỗi nguồn là một tiện ích riêng** (tên + logo của nguồn): chỉ cài nguồn mình dùng.
  - **Nâng cấp từ 0.0.4 trở về trước:** gỡ 4 tiện ích gộp cũ (*Kiritokmn Phim*, *Kiritokmn Phim 18+*, *Kiritokmn Truyện*, *Kiritokmn Truyện 18+*), rồi cài các nguồn mới. Mã nguồn (source ID) giữ nguyên, nên thư viện, lịch sử xem/đọc và vị trí xem tiếp không mất.
- **Mangayomi / YomiHub**: Tiện ích → ⋮ → Kho tiện ích → thêm `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json` cho từng tab (Truyện tranh / Phim / Tiểu thuyết).
- **LNReader / IReader**: Tiện ích (Plugins) → Kho → thêm `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/plugins.min.json`.
- **vBook / LeechText**: Cài đặt → Kho tiện ích → thêm `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/plugin.json`.
- **Aidoku** (cần Aidoku 0.8.3 trở lên): Settings → Source Lists → `+` → dán `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/aidoku/index.min.json`, rồi vào Browse để cài nguồn. Hoặc mở trên iPhone: `aidoku://addSourceList?url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/aidoku/index.min.json`.

### Thêm bằng liên kết (deep link, mở trên điện thoại)
```
aniyomi://add-repo?url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.min.json
tachiyomi://add-repo?url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.min.json
mangayomi://add-repo?repo_name=Kiritokmn&manga_url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json&anime_url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json&novel_url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json
aidoku://addSourceList?url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/aidoku/index.min.json
```

### Có gì mới trong 0.0.5
Xem [CHANGELOG.md](CHANGELOG.md) — tóm tắt:
- **Aniyomi / Nekoyomi: mỗi nguồn một APK riêng** (44 Phim + 37 Truyện tranh), mỗi tiện ích có **tên và logo của nguồn**, nên phân biệt được với nhau trong danh sách Tiện ích và Nguồn. Thay cho 4 APK gộp cũ; source ID giữ nguyên.
- **NguonC phát được trong Aniyomi** (trước báo lỗi 403): CDN chỉ nhận HTTP/2, APK có cầu nối HTTP/1.1 → HTTP/2 nội bộ cho trình phát mpv.
- **YouTube phát được trong Aniyomi** (trước quay mãi): luồng hình được ghép với luồng tiếng gốc thành rãnh âm thanh riêng.
- Sửa thêm nguồn (Sohu, Syosetu, Mangadm hết "đạt nhầm", nhiều nguồn khác qua thêm bước); kiểm thử tự động có bước tải thử luồng phát (`--stream`).
- Bản 0.0.4: logo riêng cho 196 nguồn, YouTube/TikTok/Douyin, đánh dấu **(Ngừng hoạt động)** — xem CHANGELOG.

## Tiện ích YomiHub (29) — chuyển từ bản tích hợp sẵn trong YomiHub 0.5.3

Từ YomiHub 0.5.3, các tiện ích website này **không còn tích hợp trong ứng dụng** mà nằm trong kho này (`repo/yomihub/`, định dạng Mangayomi JS). YomiHub 0.5.3 tự thêm kho vào cả 3 mục; tiện ích đã cài giữ nguyên id nên nhận cập nhật từ kho. Mangayomi cũng cài được (cùng `index.json`).

| # | Tiện ích | Mục | Trang | Ngôn ngữ | 18+ | Mã nguồn |
|---|---|---|---|---|---|---|
| 1 | Hako (Light Novel) | Tiểu thuyết | https://ln.hako.vn | vi |  | [hako.js](repo/yomihub/hako.js) |
| 2 | Sonako (Light Novel) | Tiểu thuyết | https://sonako.fandom.com | vi |  | [sonako.js](repo/yomihub/sonako.js) |
| 3 | AnimeVN | Phim & Điện ảnh | https://animevn.net | vi |  | [animevn.js](repo/yomihub/animevn.js) |
| 4 | AVSub – AnimeVietsub | Phim & Điện ảnh | https://animevietsub.news | vi |  | [avsub.js](repo/yomihub/avsub.js) |
| 5 | RoPhim | Phim & Điện ảnh | https://www.rophimhd.com | vi |  | [rophim.js](repo/yomihub/rophim.js) |
| 6 | HotPhim | Phim & Điện ảnh | https://hotphim.org | vi |  | [hotphim.js](repo/yomihub/hotphim.js) |
| 7 | Anime47 | Phim & Điện ảnh | https://anime47.best | vi |  | [anime47.js](repo/yomihub/anime47.js) |
| 8 | VTVgo – Truyền hình | Phim & Điện ảnh | https://vtvgo.vn | vi |  | [vtvgo.js](repo/yomihub/vtvgo.js) |
| 9 | YouTube (NewPipe · Pure Tuber) | Phim & Điện ảnh | https://www.youtube.com | all |  | [youtube.js](repo/yomihub/youtube.js) |
| 10 | Pornhub (18+) | Phim & Điện ảnh | https://www.pornhub.com | all | 🔞 | [pornhub.js](repo/yomihub/pornhub.js) |
| 11 | FikFap (18+) | Phim & Điện ảnh | https://fikfap.com | all | 🔞 | [fikfap.js](repo/yomihub/fikfap.js) |
| 12 | HihiSex (18+) | Phim & Điện ảnh | https://hihisex.men | vi | 🔞 | [hihisex.js](repo/yomihub/hihisex.js) |
| 13 | Tik.Porn (18+) | Phim & Điện ảnh | https://tik.porn | all | 🔞 | [tikporn.js](repo/yomihub/tikporn.js) |
| 14 | Kwiky (18+) | Phim & Điện ảnh | https://kwiky.com | all | 🔞 | [kwiky.js](repo/yomihub/kwiky.js) |
| 15 | xFree (18+) | Phim & Điện ảnh | https://www.xfree.com | all | 🔞 | [xfree.js](repo/yomihub/xfree.js) |
| 16 | FapReel (18+) | Phim & Điện ảnh | https://fapreel.com | all | 🔞 | [fapreel.js](repo/yomihub/fapreel.js) |
| 17 | SexVietTop (18+) | Phim & Điện ảnh | https://top1sexvn.com | vi | 🔞 | [sexviettop.js](repo/yomihub/sexviettop.js) |
| 18 | HayChill | Phim & Điện ảnh | https://phimhaychill.org | vi |  | [haychill.js](repo/yomihub/haychill.js) |
| 19 | XemPhimGi | Phim & Điện ảnh | https://xemphimgi.com | vi |  | [xemphimgi.js](repo/yomihub/xemphimgi.js) |
| 20 | NextPhim | Phim & Điện ảnh | https://nextphim.net | vi |  | [nextphim.js](repo/yomihub/nextphim.js) |
| 21 | Vfilm | Phim & Điện ảnh | http://vfilm.vn | vi |  | [vfilm.js](repo/yomihub/vfilm.js) |
| 22 | CBHentai (18+) | Truyện tranh | https://hentaicube.xyz | vi | 🔞 | [cbhentai.js](repo/yomihub/cbhentai.js) |
| 23 | Dâm Cô Nương (18+) | Truyện tranh | https://damconuong.pet | vi | 🔞 | [damconuong.js](repo/yomihub/damconuong.js) |
| 24 | SayHentai (18+) | Truyện tranh | https://sayhentai.cx | vi | 🔞 | [sayhentai.js](repo/yomihub/sayhentai.js) |
| 25 | Xôi Lạc TV | Phim & Điện ảnh | https://xoilacxxi.cc | vi |  | [xoilac.js](repo/yomihub/xoilac.js) |
| 26 | Phimmoi | Phim & Điện ảnh | https://phimmoii.mom | vi |  | [phimmoi.js](repo/yomihub/phimmoi.js) |
| 27 | MotPhim | Phim & Điện ảnh | https://motphimc.my | vi |  | [motphim.js](repo/yomihub/motphim.js) |
| 28 | HiHiPhim | Phim & Điện ảnh | https://hihiphim.com | vi |  | [hihiphim.js](repo/yomihub/hihiphim.js) |
| 29 | PhimMoiHD | Phim & Điện ảnh | https://phimmoihd.online | vi |  | [phimmoihd.js](repo/yomihub/phimmoihd.js) |


## Tải về (Releases v0.0.5)

| Tệp |
|---|
| [index.json](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.5/index.json) |
| [index.min.json](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.5/index.min.json) |
| [Kiritokmn-Extension-0.0.5-aidoku.zip](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.5/Kiritokmn-Extension-0.0.5-aidoku.zip) |
| [Kiritokmn-Extension-0.0.5-aniyomi-apks.zip](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.5/Kiritokmn-Extension-0.0.5-aniyomi-apks.zip) |
| [Kiritokmn-Extension-0.0.5-lnreader-ireader.zip](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.5/Kiritokmn-Extension-0.0.5-lnreader-ireader.zip) |
| [Kiritokmn-Extension-0.0.5-mangayomi-yomihub.zip](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.5/Kiritokmn-Extension-0.0.5-mangayomi-yomihub.zip) |
| [Kiritokmn-Extension-0.0.5-tachiyomi-apks.zip](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.5/Kiritokmn-Extension-0.0.5-tachiyomi-apks.zip) |
| [Kiritokmn-Extension-0.0.5-vbook-leechtext.zip](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.5/Kiritokmn-Extension-0.0.5-vbook-leechtext.zip) |
| [plugin.json](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.5/plugin.json) |
| [plugins.min.json](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.5/plugins.min.json) |

Trang phát hành: https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/tag/v0.0.5

## Trạng thái nguồn (kiểm thử tự động 2026-11-13: 66/196 chạy trọn chuỗi danh sách → chi tiết → mục lục → nội dung)

Kiểm thử chạy thật trên mạng Việt Nam (máy của chủ dự án). Ký hiệu: ✅ hoạt động · ⛔ ngừng hoạt động (vẫn giữ trong kho) · 🛡️ Cloudflare · 🌐 bị chặn ở Việt Nam (cần VPN) · 🔐 cần đăng nhập · 🔒 trang chống lấy dữ liệu · 🧩 cần API/máy chủ riêng · 🟡 chạy một phần. Nguồn "không truy cập được" thường do tên miền đã đổi — vào cài đặt nguồn để đổi **Tên miền**.

### Phim & Video (44)

| # | Nguồn | Trang | Ngôn ngữ | 18+ | Trạng thái |
|---|---|---|---|---|---|
| 1 | Anime47 | anime47.best | vi |  | 🟡 một phần (popular lỗi) |
| 2 | AnimeVn.Net | animevn.net/the-loai/anime | vi |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 3 | Bilibili | www.bilibili.tv | vi |  | 🧩 trang dựng bằng JavaScript (SPA) — cần viết theo API, để bản sau |
| 4 | VTV Go | vtvgo.vn | vi |  | 🧩 SPA — cần API, để bản sau |
| 5 | Rổ Phim | www.rophimhd.com/phimhay | vi |  | ⛔ **Ngừng hoạt động** – mọi tên miền chết |
| 6 | HotPhim | hotphim.org | vi |  | ✅ hoạt động |
| 7 | AVSub – AnimeVietsub | animevietsub.nl | vi |  | ⛔ **Ngừng hoạt động** – mọi tên miền không phân giải (ENOTFOUND) / chứng chỉ lỗi |
| 8 | HayChill | phimhaychill.org | vi |  | ⛔ **Ngừng hoạt động** – tên miền chết; phimhaychill.net là trang cờ bạc |
| 9 | XemPhimGi | xemphimgi.com | vi |  | ✅ hoạt động |
| 10 | NextPhim | nextphim.net | vi |  | 🔒 nextphim.net hiện là trang tin tức/review phim, không có phim để xem |
| 11 | Vfilm | vfilm.vn | vi |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 12 | Phimmoi | phimmoii.mom | vi |  | ⛔ **Ngừng hoạt động** – mọi tên miền chết; tên miền mặc định chỉ còn trang demo |
| 13 | PornHub | www.pornhub.com | all | Có | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 14 | FikFap | fikfap.com | all | Có | 🌐 không kết nối được từ mạng Việt Nam — cần VPN |
| 15 | Tik.Porn | tik.porn | all | Có | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 16 | Kwiky | kwiky.com/cams?AFNO=2-162764.38182 | all | Có | 🟡 một phần (popular lỗi) |
| 17 | xFree | www.xfree.com | all | Có | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 18 | FapReel | fapreel.com | all | Có | 🟡 một phần (popular lỗi) |
| 19 | SexVietTop | top1sexvn.com | vi | Có | ⛔ **Ngừng hoạt động** – tên miền chết |
| 20 | Xôi Lạc | xoilacxxi.cc | vi |  | 🟡 một phần (popular lỗi) |
| 21 | MotPhim | motphimc.my | vi |  | ⛔ **Ngừng hoạt động** – tên miền chết / motphimtv.com đang rao bán |
| 22 | HiHiPhim | hihiphim.com | vi |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 23 | PhimMoiHD | phimmoihd.online | vi |  | ⛔ **Ngừng hoạt động** – tên miền chết (ENOTFOUND / 530) |
| 24 | BLVietsub | www.blvietsub.vip | vi |  | 🟡 một phần (popular, search, detail, chapters ✓; videos lỗi) |
| 25 | Dailymotion | www.dailymotion.com/vn | vi |  | 🧩 SPA — cần API, để bản sau |
| 26 | Douyin | www.douyin.com | zh |  | 🧩 danh sách chủ đề nóng chạy không cần máy chủ; xem video cần máy chủ Douyin_TikTok_Download_API tự dựng (đặt trong cài đặt nguồn) |
| 27 | FreeReels | free-reels.com | vi |  | 🧩 SPA — cần API, để bản sau |
| 28 | GuPhim | guphimz.com | vi |  | ⛔ **Ngừng hoạt động** – tên miền chết (guphimz.com, guphim.com/.net) |
| 29 | HentaiVietsub.com | hentaivietsub.com | vi | Có | 🟡 một phần (popular, search, detail, chapters ✓; videos lỗi) |
| 30 | HHPanda | hhpanda.st | vi |  | 🔒 trình phát (streamfree.vip) mã hoá luồng phát bằng bytecode + nonce, không lấy được link phát |
| 31 | HHTQHAY.VIP | hhtqhay.vip | vi |  | 🛡️ Cloudflare Turnstile – cần **xác minh thủ công** trong WebView |
| 32 | Hồng Quả | hongguoduanju.com | zh |  | 🟡 một phần (popular, detail ✓; search lỗi) |
| 33 | iQIYI | www.iq.com | zh |  | 🧩 SPA — cần API, để bản sau |
| 34 | LuPhim | luphim.com | vi |  | 🔒 trình phát dùng dấu vân tay WebGL + chống DevTools, không lấy được luồng phát |
| 35 | MGTV | w.mgtv.com | vi |  | 🧩 SPA — cần API, để bản sau |
| 36 | NguonC | phim.nguonc.com | vi |  | ✅ hoạt động |
| 37 | Phim Nhựa | phimnhua.online | vi |  | ⛔ **Ngừng hoạt động** – Cloudflare 530 (máy chủ gốc ngừng) |
| 38 | Phim4K | phim4k.xyz | vi |  | ⛔ **Ngừng hoạt động** – tên miền chết; phim4k.net là trang cờ bạc |
| 39 | PhimTV | phimtv.my | vi |  | 🟡 một phần (popular lỗi) |
| 40 | Showbox | pixnet.cc | vi |  | ⛔ **Ngừng hoạt động** – pixnet.cc không phân giải |
| 41 | TikTok | www.tiktok.com | all |  | ✅ hoạt động |
| 42 | Twitch | www.twitch.tv | all |  | 🧩 SPA — cần API GraphQL, để bản sau |
| 43 | WatchHentai.net | watchhentai.net | en | Có | 🟡 một phần (popular, search, detail, chapters ✓; videos lỗi) |
| 44 | YouTube | www.youtube.com | all |  | ✅ hoạt động |

### Truyện tranh (37)

| # | Nguồn | Trang | Ngôn ngữ | 18+ | Trạng thái |
|---|---|---|---|---|---|
| 1 | CBHentai | hentaicube.xyz | vi | Có | 🛡️ Cloudflare Turnstile – cần **xác minh thủ công** trong WebView |
| 2 | Dâm Cô Nương | damconuong.pet | vi | Có | ⛔ **Ngừng hoạt động** – tên miền chết (ENOTFOUND / 525) |
| 3 | SayHentai | sayhentai.cx | vi | Có | 🟡 một phần (popular lỗi) |
| 4 | CBunu Comic | cucbongunu.com | vi | Có | ✅ hoạt động |
| 5 | cosplaytele | cosplaytele.com | vi | Có | ✅ hoạt động |
| 6 | Destin Team | destinteam.xyz | vi |  | ✅ hoạt động |
| 7 | Dưa Leo truyện | dualeotruyenbet.com | vi | Có | ⛔ **Ngừng hoạt động** – tên miền chết |
| 8 | E Hentai | e-hentai.org | vi | Có | ✅ hoạt động |
| 9 | Góc Truyện Tranh | goctruyentranhvui41.com | vi |  | ✅ hoạt động |
| 10 | HentaiVN | hentaivnreal.com | vi |  | ⛔ **Ngừng hoạt động** – tên miền chết |
| 11 | Hắc Ám Chi Các | haccbl.xyz | vi |  | ✅ hoạt động |
| 12 | Jelly Comics | jellycomics.online | vi |  | ✅ hoạt động |
| 13 | JulyComic | julycomics.site | vi |  | ⛔ **Ngừng hoạt động** – Cloudflare 522 (máy chủ gốc ngừng) |
| 14 | LuotTruyen | luottruyen.net | vi |  | 🔐 chương truyện yêu cầu đăng nhập trong WebView |
| 15 | MangaDex | mangadex.org | all |  | 🌐 mangadex.org và api.mangadex.org bị chặn ở Việt Nam — bật VPN (ví dụ VPN của YomiHub) |
| 16 | ManhwaBuddy | manhwabuddy.com | vi |  | ✅ hoạt động |
| 17 | Mimimoe | mimimoe.moe | vi |  | 🧩 trang dựng bằng Next.js; danh sách truyện tải bằng API — bản trước "đạt" nhầm vì lấy menu (Danh sách truyện, Thể loại…) |
| 18 | Misskon | misskon.com | vi |  | ✅ hoạt động |
| 19 | MoeTruyen | truyen.moe | vi |  | 🔒 ảnh chương cấp qua token "page-access" (bảo vệ ảnh) |
| 20 | My Reading Manga | myreadingmanga.info | all |  | 🛡️ Cloudflare Turnstile – cần **xác minh thủ công** trong WebView |
| 21 | Navy Team Comic | navyteams.com | vi |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 22 | NetTruyen18 | nettruyen18.com | vi |  | ✅ hoạt động |
| 23 | NetTruyenViet | nettruyenviet10.com | vi |  | ✅ hoạt động |
| 24 | NetTruyenZ | nettruyenz.com | vi |  | ⛔ **Ngừng hoạt động** – tên miền chỉ còn trang "Site is created successfully!" |
| 25 | Roads Team | roadsteami.net | vi |  | ✅ hoạt động |
| 26 | Thế Giới Truyện | thegioitruyen.vn | vi |  | ✅ hoạt động |
| 27 | TruyenGG | truyenggvn.com | vi |  | ✅ hoạt động |
| 28 | TruyenQQ | truyenqqko.com | vi |  | ✅ hoạt động |
| 29 | TruyenQQ | truyenqq.com.vn | vi |  | ✅ hoạt động |
| 30 | Truyentranhdammyy | truyentranhdammyy.site | vi |  | ✅ hoạt động |
| 31 | TVKH | bananacoo.com | vi |  | ✅ hoạt động |
| 32 | VinaHentai | vinahentai.bond | vi |  | ✅ hoạt động |
| 33 | WebtoonScan | webtoonscan.com | en |  | ⛔ **Ngừng hoạt động** – trang đã chết (máy chủ không trả lời) |
| 34 | Weeb Central | weebcentral.com | en |  | ✅ hoạt động |
| 35 | Đọc Truyện Tranh BL | truyentranhbl.com | vi |  | 🔐 chương truyện chỉ mở khi đăng nhập Google (WP Manga Images Protection) — đăng nhập trong WebView |
| 36 | Ưng Tỷ Comics | ungtycomics.net | vi |  | ⛔ **Ngừng hoạt động** – tên miền chết / chứng chỉ lỗi |
| 37 | BL Bất Tử | blbattu.com | vi |  | ✅ hoạt động |

### Tiểu thuyết (115)

| # | Nguồn | Trang | Ngôn ngữ | 18+ | Trạng thái |
|---|---|---|---|---|---|
| 1 | Ln.Hako.Vn (Hako) | ln.hako.vn | vi |  | 🟠 cần WebView (chỉ chạy trên vBook) |
| 2 | Sonako | sonako.fandom.com/vi/wiki/Sonako_Light_Novel | vi |  | 🛡️ Cloudflare Turnstile – cần **xác minh thủ công** trong WebView |
| 3 | 07br | www.bqg128.xyz/# | zh |  | ✅ hoạt động |
| 4 | 101kks | 101kks.com | zh |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 5 | 101Minc | www.101Minc.com | zh |  | 🛡️ Cloudflare Turnstile – cần **xác minh thủ công** trong WebView |
| 6 | 52shuku by QuocBao | www.52shuku.net | zh |  | 🟡 một phần (popular lỗi) |
| 7 | 69shu - repo Đường đen | 69shuba.com | zh |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 8 | 69书吧 | www.69shuba.com | zh |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 9 | 75zwcom | m.qiwubiquge.com | zh |  | ✅ hoạt động |
| 10 | 8book | www.8book.com | zh |  | 🔒 nội dung chương tải bằng JavaScript (read.js) |
| 11 | alicesw | www.alicesw.com | zh | Có | ✅ hoạt động |
| 12 | allin1 | 14.225.254.182 | vi |  | 🧩 Sáng Tác Việt (IP) — danh sách tải bằng JavaScript |
| 13 | App Truyện Chữ | apptruyenchu.pro | vi |  | ✅ hoạt động |
| 14 | Boylove Bất Tử | boylovebattu.com | vi |  | ✅ hoạt động |
| 15 | Bàn Long | blhvip.vn | vi |  | ✅ hoạt động |
| 16 | ciyuanji | www.ciyuanji.com | zh |  | ⛔ **Ngừng hoạt động** – không phản hồi / 403 |
| 17 | czbooks - repo Đường đen | czbooks.net | zh |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 18 | Deqixs | www.deqixss.com | zh |  | ✅ hoạt động |
| 19 | douban | read.douban.com | zh |  | 🟡 một phần (popular, detail ✓; search lỗi) |
| 20 | Dưa Hấu | xgmf.zuanqianyi.com | zh |  | ⛔ **Ngừng hoạt động** – HTTP 404 toàn trang |
| 21 | Faloo | faloo.com | zh |  | ✅ hoạt động |
| 22 | Fan MTL | www.fanmtl.com | en |  | ✅ hoạt động |
| 23 | Giới Truyện | gioitruyen.com | vi |  | ✅ hoạt động |
| 24 | gongzicp | www.gongzicp.com | zh |  | 🟡 một phần (popular lỗi) |
| 25 | Gấu Mèo Team | gaumeoteam.com | vi |  | ✅ hoạt động |
| 26 | Hameln (Syosetu.org) | syosetu.org | ja |  | 🛡️ Cloudflare chặn IP Việt Nam – cần VPN |
| 27 | Hang Truyện Chữ | hangtruyenchu.com | vi |  | ✅ hoạt động |
| 28 | html5.qq.com | bookshelf.html5.qq.com | zh |  | 🟡 một phần (popular lỗi) |
| 29 | idejian | www.idejian.com | zh |  | 🟡 một phần (popular lỗi) |
| 30 | ijjjxsxzw | m.ijjjxsxzw.com | zh |  | ✅ hoạt động |
| 31 | ixdzs8 | ixdzs8.com | zh |  | 🟡 một phần (search ✓; popular lỗi) |
| 32 | JJWXC · Tấn Giang | www.jjwxc.net | zh |  | 🟡 một phần (popular, detail ✓; search lỗi) |
| 33 | Jjwxc-repo duongden💰✅ | www.jjwxc.net | zh |  | 🟡 một phần (popular, detail ✓; search lỗi) |
| 34 | Kakuyomu | kakuyomu.jp | ja |  | ✅ hoạt động |
| 35 | Kho Truyện Chữ | khotruyenchu.fun | vi |  | ⛔ **Ngừng hoạt động** – tên miền chết / không phản hồi |
| 36 | La Cà Truyện | lacatruyen.live | vi |  | ⛔ **Ngừng hoạt động** – tên miền chết |
| 37 | Langgee | v5.langge.uk | zh |  | ⛔ **Ngừng hoạt động** – HTTP 502 |
| 38 | LN Kuro | lnkuro.top | vi |  | 🟡 một phần (popular lỗi) |
| 39 | LOFTER | www.sudugu.org | zh |  | ✅ hoạt động |
| 40 | LoHi | lohi2.com | vi |  | 🟡 một phần (popular lỗi) |
| 41 | LoppyToon | loppytoon.com | vi | Có | ⛔ **Ngừng hoạt động** – tên miền chết |
| 42 | Luvevaland | luvevalandn2.co | vi |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 43 | MangaDM | mangadm.me | vi |  | ✅ hoạt động |
| 44 | Matt Reading Translations | mattreadingtranslations.com | en |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 45 | Mino Truyện | minotruyenv6.xyz | vi |  | 🟡 một phần (popular lỗi) |
| 46 | Minttea Novel | mintteanovel.com | vi |  | 🔐 chương mới bị khoá (cần đăng nhập/mở khoá trên trang) |
| 47 | MonkeyD | monkeydd.com | vi |  | ✅ hoạt động |
| 48 | Moyue · Mặc Duyệt | moyue.app | vi |  | 🟡 một phần (popular, detail ✓; search lỗi) |
| 49 | MTC | metruyencv.biz | vi |  | ⛔ **Ngừng hoạt động** – metruyencv.xyz không phân giải |
| 50 | Mê Truyện Chữ | metruyenchu.com.vn | vi |  | 🟡 một phần (search ✓; popular lỗi) |
| 51 | Mê Truyện CV | metruyencv.com.vn | vi |  | ⛔ **Ngừng hoạt động** – trang báo "Tạm biệt!" (đóng cửa) |
| 52 | Mê Đọc Truyện | medoctruyen.vn | vi |  | ✅ hoạt động |
| 53 | Mọt Truyện | mottruyen.app | vi |  | ✅ hoạt động |
| 54 | Navy Team Novel | navyteams.com | vi |  | ✅ hoạt động |
| 55 | NetTruyen | nettruyen.com.vn | vi |  | 🌐 máy chủ dùng khoá TLS cũ (DH key too small), ứng dụng Android từ chối kết nối |
| 56 | Novel Next | www.novelnext.me | en |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 57 | NovelFull.Net | novelfull.net | en |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 58 | NovelPhoenix | novelphoenix.net | en |  | ✅ hoạt động |
| 59 | Novelpia Global | global.novelpia.com | en |  | 🧩 danh sách tải bằng JavaScript; bản trước "đạt" nhầm vì lấy các nút "MORE" |
| 60 | piaotian-app | www.piaotianapp.com | zh |  | 🟡 một phần (popular lỗi) |
| 61 | po18 | www.po18.tw | zh | Có | 🔐 yêu cầu xác minh 18+/đăng nhập |
| 62 | po18sm | www.po18sm.com | zh | Có | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 63 | qimao | www.qimao.com | zh |  | ⛔ **Ngừng hoạt động** – không kết nối được |
| 64 | qmbook | m.bqg998.cc/# | zh |  | 🟡 một phần (popular lỗi) |
| 65 | quanben | quanben.io | zh |  | 🟠 máy chủ trả trang mặc định CentOS (403) – trang hỏng |
| 66 | quanwenyuedu | www.quanwenyuedu.io | zh |  | ⛔ **Ngừng hoạt động** – chứng chỉ SSL hết hạn |
| 67 | QuyKiep | quykiep.com | vi |  | 🟡 một phần (popular lỗi) |
| 68 | Shinigami LN Team | shinigamilnteam.com | vi |  | ✅ hoạt động |
| 69 | Si Truyện CV | sitruyencv.com | vi |  | ⛔ **Ngừng hoạt động** – máy chủ không phản hồi |
| 70 | Snapd | m.snapd.net | zh |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 71 | sohu | www.sohu.com | zh |  | ✅ hoạt động |
| 72 | STV App Vi | sangtacviet.com | vi |  | 🧩 Sáng Tác Việt — danh sách tải bằng JavaScript |
| 73 | sudugu | www.sudugu.org | zh |  | ✅ hoạt động |
| 74 | sweetastes | www.bjtriz.com | zh |  | 🟡 một phần (popular, search, detail, chapters ✓; content lỗi) |
| 75 | Syosetu | syosetu.com | ja |  | ✅ hoạt động |
| 76 | Syosetu R18 | novel18.syosetu.com | ja | Có | 🟡 một phần (popular lỗi) |
| 77 | Sói Xám (Fanqie) | api.langge.cf | zh |  | ⛔ **Ngừng hoạt động** – api.langge.cf không phân giải |
| 78 | TaoNovel | tybook.taoyuewenhua.net | zh |  | 🟡 một phần (popular lỗi) |
| 79 | Tinh Linh | tinhlinh.com | vi |  | ⛔ **Ngừng hoạt động** – Cloudflare 525 (máy chủ gốc lỗi SSL) |
| 80 | Tiệm Truyện Chữ | tiemtruyenchu.cloud | vi |  | 🔐 toàn trang yêu cầu đăng nhập |
| 81 | Truyen H | truyenh.top | vi | Có | 🟡 một phần (popular lỗi) |
| 82 | TruyenC | truyenc.net | vi |  | ✅ hoạt động |
| 83 | TruyenCV.io | truyencv.io | vi |  | 🟡 một phần (popular, search, detail, chapters ✓; content lỗi) |
| 84 | TruyenDich.AI | truyendich.space | vi |  | ✅ hoạt động |
| 85 | truyenfull | truyenfull.live | vi |  | ✅ hoạt động |
| 86 | Truyện Chữ | truyenchu.net | vi |  | ✅ hoạt động |
| 87 | Truyện Dịch AI | truyendichai.com | vi |  | 🟡 một phần (popular lỗi) |
| 88 | Truyện Full | truyenfull.today | vi |  | ✅ hoạt động |
| 89 | Truyện Mới | truyenmoi.app | vi |  | ⛔ **Ngừng hoạt động** – tên miền chết |
| 90 | Truyện Mới KK | truyenmoikk.com | vi |  | ⛔ **Ngừng hoạt động** – tên miền chết |
| 91 | Truyện Net | truyennet.vn | vi |  | 🟡 một phần (popular ✓; search lỗi) |
| 92 | Truyện Zhihu Tổng Hợp | www.truyendexuat.com | vi |  | ✅ hoạt động |
| 93 | TruyệnCV | metruyencv.com | vi |  | ⛔ **Ngừng hoạt động** – metruyencv.com đóng cửa ("Tạm biệt!") |
| 94 | Tu Tiên (.pro) | tutien.pro | vi |  | 🟡 một phần (popular lỗi) |
| 95 | uukanshu | uukanshu.cc | zh |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 96 | Valvrareteam | valvrareteam.net | vi |  | ✅ hoạt động |
| 97 | Viblo | viblo.asia | vi |  | ✅ hoạt động |
| 98 | vivutruyencom | vivutruyen.com | vi |  | ✅ hoạt động |
| 99 | Việt Nam Thư Quán | vnthuquan.org | vi |  | ✅ hoạt động |
| 100 | Wattpad | www.wattpad.com | all |  | 🌐 wattpad.com bị chặn ở Việt Nam — cần VPN |
| 101 | Web Truyện Chữ | webtruyenchu.com | vi |  | ✅ hoạt động |
| 102 | Web Truyện Dịch | webtruyendich.com | vi |  | 🟡 một phần (popular lỗi) |
| 103 | Weibo | m.weibo.cn | zh |  | 🟡 một phần (popular lỗi) |
| 104 | Wiki Dịch | wikicv.org | vi |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 105 | wodeshucheng5 | www.wodeshucheng5.com | zh |  | 🟠 nginx 403 – chặn IP/khu vực |
| 106 | Xbanxia - repo Đường đen | www.xbanxia.cc | zh |  | ✅ hoạt động |
| 107 | Xianqihaotiami APP | www.xianqihaotianmi.org | zh |  | 🟡 một phần (popular lỗi) |
| 108 | xsw | m.xsw.tw | zh |  | ⛔ **Ngừng hoạt động** – chứng chỉ SSL không hợp lệ |
| 109 | XTruyen | www.xtruyen.net | vi |  | 🟡 một phần (popular lỗi) |
| 110 | YPShuo - Bình luận sách | www.ypshuo.com | zh |  | 🟡 một phần (popular lỗi) |
| 111 | 【VIP】Bạch Ngọc Sách | bnsvip.net | vi |  | ⛔ **Ngừng hoạt động** – máy chủ ngắt kết nối (ECONNRESET) |
| 112 | 书本书 Shubenshu | www.shubenshu.com | zh |  | ✅ hoạt động |
| 113 | 搜笔趣阁 | www.sobqg.com | zh |  | ✅ hoạt động |
| 114 | 笔趣阁-abcbiquge | m.abcbiquge.com | zh |  | 🟡 một phần (popular, search, detail ✓; chapters lỗi) |
| 115 | 飘天文学 | www.piaotia.com | zh |  | ✅ hoạt động |

## Cấu trúc dự án

```
sources/<id>/        nguồn chuẩn vBook (plugin.json + src/*.js)   ← nơi duy nhất cần sửa
lib/                 thư viện mẫu dùng chung (Madara, generic selector, ...)
runtime/             engine + DOM tương thích jsoup + vBook API (JS) và prelude Rhino
hosts/               lớp chuyển đổi cho Mangayomi, LNReader/IReader, Aidoku, Node test
aidoku/              cầu nối Rust/WASM cho Aidoku (bridge/) + biểu tượng nguồn
android/             APK Aniyomi/Nekoyomi: mỗi nguồn một product flavor (anime-core / manga-core dùng chung)
tools/               build, sinh nguồn, phân tích trang, kiểm thử
repo/                ĐẦU RA cho các ứng dụng (index.json, plugins.min.json, plugin.json, index.min.json, apk/, aidoku/)
data/                danh sách nguồn từ Excel, kết quả kiểm thử
```

Build: `npm run build` · Aidoku: `node tools/build/aidoku-build.mjs` (cần Rust + wasm32) · Kiểm thử: `npm test`, `node tools/test/aidoku-sim.mjs --all` · APK: `android/build_apks.ps1`. Ghi chú kỹ thuật: [TECHNICAL_UPDATE_NOTES.md](TECHNICAL_UPDATE_NOTES.md).

Một số nguồn tái sử dụng tiện ích vBook mã nguồn mở của cộng đồng (ghi công tác giả gốc trong `plugin.json`). Giấy phép: GPL-3.0.
