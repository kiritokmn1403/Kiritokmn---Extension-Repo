# Kiritokmn - Extension Repo

**Phiên bản: 0.0.1** · Một kho tiện ích dùng chung cho **Aniyomi, Nekoyomi, Mangayomi, YomiHub, LNReader, IReader, vBook, LeechText và Aidoku** — 196 nguồn Phim, Truyện tranh, Tiểu thuyết (Tiếng Việt, Trung, Anh, Nhật).

Mỗi nguồn được viết **một lần** theo chuẩn vBook (JavaScript). Bộ build tự chuyển sang định dạng của từng ứng dụng:

| Ứng dụng | Thêm repo bằng đường dẫn | Định dạng |
|---|---|---|
| **Aniyomi / Nekoyomi** (Phim + Truyện tranh) | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.min.json` | APK đa nguồn (Rhino + jsoup) |
| **Mangayomi / YomiHub** | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json` | JS source (MProvider) |
| **LNReader / IReader** (Tiểu thuyết) | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/plugins.min.json` | Plugin JS (ES5) |
| **vBook / LeechText / YomiHub (tab vBook)** | `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/plugin.json` | Gói vBook `.zip` |
| **Aidoku** (iOS) | xem [docs/AIDOKU.md](docs/AIDOKU.md) | chưa hỗ trợ trong 0.0.1 |

> Cả 4 đường dẫn đều nằm chung một gốc: **`https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/`** — Aniyomi/Nekoyomi chỉ cần gốc này.

### Cách thêm nhanh
- **Aniyomi / Nekoyomi**: Thêm → Cài đặt → Duyệt → Kho tiện ích → `+` → dán `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.min.json` (thêm ở cả mục Anime và Manga). Cài "Kiritokmn Phim" và "Kiritokmn Truyện" (bản 18+ là gói riêng).
- **Mangayomi / YomiHub**: Tiện ích → ⋮ → Kho tiện ích → thêm `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json` cho từng tab (Truyện tranh / Phim / Tiểu thuyết).
- **LNReader / IReader**: Tiện ích (Plugins) → Kho → thêm `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/plugins.min.json`.
- **vBook / LeechText**: Cài đặt → Kho tiện ích → thêm `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/plugin.json`.

### Thêm bằng liên kết (deep link, mở trên điện thoại)
```
aniyomi://add-repo?url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.min.json
tachiyomi://add-repo?url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.min.json
mangayomi://add-repo?repo_name=Kiritokmn&manga_url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json&anime_url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json&novel_url=https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json
```

## Tải về (Releases v0.0.1)

| Tệp |
|---|
| [index.json](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.1/index.json) |
| [index.min.json](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.1/index.min.json) |
| [Kiritokmn-Extension-0.0.1-anime-nsfw.apk](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.1/Kiritokmn-Extension-0.0.1-anime-nsfw.apk) |
| [Kiritokmn-Extension-0.0.1-anime-sfw.apk](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.1/Kiritokmn-Extension-0.0.1-anime-sfw.apk) |
| [Kiritokmn-Extension-0.0.1-lnreader-ireader.zip](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.1/Kiritokmn-Extension-0.0.1-lnreader-ireader.zip) |
| [Kiritokmn-Extension-0.0.1-manga-nsfw.apk](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.1/Kiritokmn-Extension-0.0.1-manga-nsfw.apk) |
| [Kiritokmn-Extension-0.0.1-manga-sfw.apk](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.1/Kiritokmn-Extension-0.0.1-manga-sfw.apk) |
| [Kiritokmn-Extension-0.0.1-mangayomi-yomihub.zip](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.1/Kiritokmn-Extension-0.0.1-mangayomi-yomihub.zip) |
| [Kiritokmn-Extension-0.0.1-vbook-leechtext.zip](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.1/Kiritokmn-Extension-0.0.1-vbook-leechtext.zip) |
| [plugin.json](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.1/plugin.json) |
| [plugins.min.json](https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/download/v0.0.1/plugins.min.json) |

Trang phát hành: https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo/releases/tag/v0.0.1

## Trạng thái nguồn (kiểm thử tự động 2026-11-05: 65/196 chạy trọn chuỗi danh sách → chi tiết → mục lục → nội dung)

Kiểm thử chạy thật trên mạng Việt Nam (máy chủ của chủ dự án). Nguồn "không truy cập được" thường do tên miền đã đổi — vào cài đặt nguồn để đổi **Tên miền**.

### Phim & Video (44)

| # | Nguồn | Trang | Ngôn ngữ | 18+ | Trạng thái |
|---|---|---|---|---|---|
| 1 | Anime47 | anime47.best | vi |  | 🟡 một phần (popular lỗi) |
| 2 | AnimeVn.Net | animevn.net/the-loai/anime | vi |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 3 | Bilibili | www.bilibili.tv | vi |  | 🟡 một phần (popular lỗi) |
| 4 | VTV Go | vtvgo.vn | vi |  | 🟡 một phần (popular lỗi) |
| 5 | Rổ Phim | www.rophimhd.com/phimhay | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 6 | HotPhim | hotphim.org | vi |  | ✅ hoạt động |
| 7 | AVSub – AnimeVietsub | animevietsub.nl | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 8 | HayChill | phimhaychill.org | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 9 | XemPhimGi | xemphimgi.com | vi |  | ✅ hoạt động |
| 10 | NextPhim | nextphim.net | vi |  | 🟡 một phần (popular, search, detail, chapters ✓; videos lỗi) |
| 11 | Vfilm | vfilm.vn | vi |  | 🟡 một phần (popular, search, detail, chapters ✓; videos lỗi) |
| 12 | Phimmoi | phimmoii.mom | vi |  | 🟡 một phần (popular, search ✓; detail lỗi) |
| 13 | PornHub | www.pornhub.com | all | Có | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 14 | FikFap | fikfap.com | all | Có | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 15 | Tik.Porn | tik.porn | all | Có | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 16 | Kwiky | kwiky.com/cams?AFNO=2-162764.38182 | all | Có | 🟡 một phần (popular lỗi) |
| 17 | xFree | www.xfree.com | all | Có | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 18 | FapReel | fapreel.com | all | Có | 🟡 một phần (popular lỗi) |
| 19 | SexVietTop | top1sexvn.com | vi | Có | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 20 | Xôi Lạc | xoilacxxi.cc | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 21 | MotPhim | motphimc.my | vi |  | 🟠 bị Cloudflare/máy chủ chặn |
| 22 | HiHiPhim | hihiphim.com | vi |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 23 | PhimMoiHD | phimmoihd.online | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 24 | BLVietsub | www.blvietsub.vip | vi |  | 🟡 một phần (popular, search, detail, chapters ✓; videos lỗi) |
| 25 | Dailymotion | www.dailymotion.com/vn | vi |  | 🟡 một phần (popular lỗi) |
| 26 | Douyin | www.douyin.com | zh |  | 🟡 một phần (popular lỗi) |
| 27 | FreeReels | free-reels.com | vi |  | 🟡 một phần (popular lỗi) |
| 28 | GuPhim | guphimz.com | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 29 | HentaiVietsub.com | hentaivietsub.com | vi | Có | 🟡 một phần (popular, search, detail, chapters ✓; videos lỗi) |
| 30 | HHPanda | hhpanda.st | vi |  | 🟡 một phần (popular, search, detail, chapters ✓; videos lỗi) |
| 31 | HHTQHAY.VIP | hhtqhay.vip | vi |  | 🛡️ Cloudflare Turnstile – cần **xác minh thủ công** trong WebView |
| 32 | Hồng Quả | hongguoduanju.com | zh |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 33 | iQIYI | www.iq.com | zh |  | 🟡 một phần (popular lỗi) |
| 34 | LuPhim | luphim.com | vi |  | 🟡 một phần (popular, search, detail, chapters ✓; videos lỗi) |
| 35 | MGTV | w.mgtv.com | vi |  | 🟡 một phần (popular lỗi) |
| 36 | NguonC | phim.nguonc.com | vi |  | ✅ hoạt động |
| 37 | Phim Nhựa | phimnhua.online | vi |  | ✅ hoạt động |
| 38 | Phim4K | phim4k.xyz | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 39 | PhimTV | phimtv.my | vi |  | ✅ hoạt động |
| 40 | Showbox | pixnet.cc | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 41 | TikTok | www.tiktok.com | all |  | 🟡 một phần (popular lỗi) |
| 42 | Twitch | www.twitch.tv | all |  | 🟡 một phần (popular lỗi) |
| 43 | WatchHentai.net | watchhentai.net | en | Có | 🟡 một phần (popular, search, detail, chapters ✓; videos lỗi) |
| 44 | YouTube | www.youtube.com | all |  | 🟡 một phần (popular lỗi) |

### Truyện tranh (37)

| # | Nguồn | Trang | Ngôn ngữ | 18+ | Trạng thái |
|---|---|---|---|---|---|
| 1 | CBHentai | hentaicube.xyz | vi | Có | 🛡️ Cloudflare Turnstile – cần **xác minh thủ công** trong WebView |
| 2 | Dâm Cô Nương | damconuong.pet | vi | Có | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 3 | SayHentai | sayhentai.cx | vi | Có | 🟡 một phần (popular lỗi) |
| 4 | CBunu Comic | cucbongunu.com | vi | Có | ✅ hoạt động |
| 5 | cosplaytele | cosplaytele.com | vi | Có | ✅ hoạt động |
| 6 | Destin Team | destinteam.xyz | vi |  | ✅ hoạt động |
| 7 | Dưa Leo truyện | dualeotruyenbet.com | vi | Có | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 8 | E Hentai | e-hentai.org | vi | Có | ✅ hoạt động |
| 9 | Góc Truyện Tranh | goctruyentranhvui41.com | vi |  | ✅ hoạt động |
| 10 | HentaiVN | hentaivnreal.com | vi |  | 🟡 một phần (popular lỗi) |
| 11 | Hắc Ám Chi Các | haccbl.xyz | vi |  | ✅ hoạt động |
| 12 | Jelly Comics | jellycomics.online | vi |  | ✅ hoạt động |
| 13 | JulyComic | julycomics.site | vi |  | 🟠 bị Cloudflare/máy chủ chặn |
| 14 | LuotTruyen | luottruyen.net | vi |  | 🟡 một phần (popular lỗi) |
| 15 | MangaDex | mangadex.org | all |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 16 | ManhwaBuddy | manhwabuddy.com | vi |  | ✅ hoạt động |
| 17 | Mimimoe | mimimoe.moe | vi |  | ✅ hoạt động |
| 18 | Misskon | misskon.com | vi |  | ✅ hoạt động |
| 19 | MoeTruyen | truyen.moe | vi |  | 🟡 một phần (popular, search, detail, chapters ✓; pages lỗi) |
| 20 | My Reading Manga | myreadingmanga.info | all |  | 🛡️ Cloudflare Turnstile – cần **xác minh thủ công** trong WebView |
| 21 | Navy Team Comic | navyteams.com | vi |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 22 | NetTruyen18 | nettruyen18.com | vi |  | ✅ hoạt động |
| 23 | NetTruyenViet | nettruyenviet10.com | vi |  | ✅ hoạt động |
| 24 | NetTruyenZ | nettruyenz.com | vi |  | 🟡 một phần (popular lỗi) |
| 25 | Roads Team | roadsteami.net | vi |  | ✅ hoạt động |
| 26 | Thế Giới Truyện | thegioitruyen.vn | vi |  | ✅ hoạt động |
| 27 | TruyenGG | truyenggvn.com | vi |  | ✅ hoạt động |
| 28 | TruyenQQ | truyenqqko.com | vi |  | ✅ hoạt động |
| 29 | TruyenQQ | truyenqq.com.vn | vi |  | ✅ hoạt động |
| 30 | Truyentranhdammyy | truyentranhdammyy.site | vi |  | ✅ hoạt động |
| 31 | TVKH | bananacoo.com | vi |  | ✅ hoạt động |
| 32 | VinaHentai | vinahentai.bond | vi |  | ✅ hoạt động |
| 33 | WebtoonScan | webtoonscan.com | en |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 34 | Weeb Central | weebcentral.com | en |  | 🟡 một phần (popular, search, detail ✓; chapters lỗi) |
| 35 | Đọc Truyện Tranh BL | truyentranhbl.com | vi |  | 🟠 bắt đăng nhập Google để xem ảnh chương |
| 36 | Ưng Tỷ Comics | ungtycomics.net | vi |  | 🟡 một phần (popular lỗi) |
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
| 10 | 8book | www.8book.com | zh |  | 🟡 một phần (popular, search, detail, chapters ✓; content lỗi) |
| 11 | alicesw | www.alicesw.com | zh | Có | ✅ hoạt động |
| 12 | allin1 | 14.225.254.182 | vi |  | 🟡 một phần (popular lỗi) |
| 13 | App Truyện Chữ | apptruyenchu.pro | vi |  | ✅ hoạt động |
| 14 | Boylove Bất Tử | boylovebattu.com | vi |  | ✅ hoạt động |
| 15 | Bàn Long | blhvip.vn | vi |  | ✅ hoạt động |
| 16 | ciyuanji | www.ciyuanji.com | zh |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 17 | czbooks - repo Đường đen | czbooks.net | zh |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 18 | Deqixs | www.deqixss.com | zh |  | ✅ hoạt động |
| 19 | douban | read.douban.com | zh |  | 🟡 một phần (popular lỗi) |
| 20 | Dưa Hấu | xgmf.zuanqianyi.com | zh |  | 🟡 một phần (popular lỗi) |
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
| 31 | ixdzs8 | ixdzs8.com | zh |  | ✅ hoạt động |
| 32 | JJWXC · Tấn Giang | www.jjwxc.net | zh |  | 🟡 một phần (popular, detail ✓; search lỗi) |
| 33 | Jjwxc-repo duongden💰✅ | www.jjwxc.net | zh |  | 🟡 một phần (popular, detail ✓; search lỗi) |
| 34 | Kakuyomu | kakuyomu.jp | ja |  | ✅ hoạt động |
| 35 | Kho Truyện Chữ | khotruyenchu.fun | vi |  | 🟡 một phần (popular lỗi) |
| 36 | La Cà Truyện | lacatruyen.live | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 37 | Langgee | v5.langge.uk | zh |  | 🟠 bị Cloudflare/máy chủ chặn |
| 38 | LN Kuro | lnkuro.top | vi |  | 🟡 một phần (popular lỗi) |
| 39 | LOFTER | www.sudugu.org | zh |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 40 | LoHi | lohi2.com | vi |  | 🟡 một phần (popular lỗi) |
| 41 | LoppyToon | loppytoon.com | vi | Có | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 42 | Luvevaland | luvevalandn2.co | vi |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 43 | MangaDM | mangadm.me | vi |  | ✅ hoạt động |
| 44 | Matt Reading Translations | mattreadingtranslations.com | en |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 45 | Mino Truyện | minotruyenv6.xyz | vi |  | 🟡 một phần (popular lỗi) |
| 46 | Minttea Novel | mintteanovel.com | vi |  | ✅ hoạt động |
| 47 | MonkeyD | monkeydd.com | vi |  | ✅ hoạt động |
| 48 | Moyue · Mặc Duyệt | moyue.app | vi |  | 🟡 một phần (popular, detail ✓; search lỗi) |
| 49 | MTC | metruyencv.biz | vi |  | 🟡 một phần (popular lỗi) |
| 50 | Mê Truyện Chữ | metruyenchu.com.vn | vi |  | ✅ hoạt động |
| 51 | Mê Truyện CV | metruyencv.com.vn | vi |  | 🟡 một phần (popular lỗi) |
| 52 | Mê Đọc Truyện | medoctruyen.vn | vi |  | ✅ hoạt động |
| 53 | Mọt Truyện | mottruyen.app | vi |  | ✅ hoạt động |
| 54 | Navy Team Novel | navyteams.com | vi |  | ✅ hoạt động |
| 55 | NetTruyen | nettruyen.com.vn | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 56 | Novel Next | www.novelnext.me | en |  | 🟡 một phần (popular, search, detail, chapters ✓; content lỗi) |
| 57 | NovelFull.Net | novelfull.net | en |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 58 | NovelPhoenix | novelphoenix.net | en |  | ✅ hoạt động |
| 59 | Novelpia Global | global.novelpia.com | en |  | ✅ hoạt động |
| 60 | piaotian-app | www.piaotianapp.com | zh |  | 🟡 một phần (popular lỗi) |
| 61 | po18 | www.po18.tw | zh | Có | 🟡 một phần (popular lỗi) |
| 62 | po18sm | www.po18sm.com | zh | Có | 🟡 một phần (popular, detail ✓; search lỗi) |
| 63 | qimao | www.qimao.com | zh |  | 🟡 một phần (popular lỗi) |
| 64 | qmbook | m.bqg998.cc/# | zh |  | 🟡 một phần (popular lỗi) |
| 65 | quanben | quanben.io | zh |  | 🟠 máy chủ trả trang mặc định CentOS (403) – trang hỏng |
| 66 | quanwenyuedu | www.quanwenyuedu.io | zh |  | 🟡 một phần (popular, search, detail ✓; chapters lỗi) |
| 67 | QuyKiep | quykiep.com | vi |  | 🟡 một phần (popular lỗi) |
| 68 | Shinigami LN Team | shinigamilnteam.com | vi |  | ✅ hoạt động |
| 69 | Si Truyện CV | sitruyencv.com | vi |  | 🟡 một phần (popular lỗi) |
| 70 | Snapd | m.snapd.net | zh |  | 🟡 một phần (popular lỗi) |
| 71 | sohu | www.sohu.com | zh |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 72 | STV App Vi | sangtacviet.com | vi |  | 🟡 một phần (popular lỗi) |
| 73 | sudugu | www.sudugu.org | zh |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 74 | sweetastes | www.bjtriz.com | zh |  | 🟡 một phần (popular, detail ✓; search lỗi) |
| 75 | Syosetu | syosetu.com | ja |  | ✅ hoạt động |
| 76 | Syosetu R18 | novel18.syosetu.com | ja | Có | 🟡 một phần (popular lỗi) |
| 77 | Sói Xám (Fanqie) | api.langge.cf | zh |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 78 | TaoNovel | tybook.taoyuewenhua.net | zh |  | 🟡 một phần (popular lỗi) |
| 79 | Tinh Linh | tinhlinh.com | vi |  | ✅ hoạt động |
| 80 | Tiệm Truyện Chữ | tiemtruyenchu.cloud | vi |  | 🟡 một phần (popular lỗi) |
| 81 | Truyen H | truyenh.top | vi | Có | 🟡 một phần (popular lỗi) |
| 82 | TruyenC | truyenc.net | vi |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 83 | TruyenCV.io | truyencv.io | vi |  | 🟡 một phần (popular, search, detail, chapters ✓; content lỗi) |
| 84 | TruyenDich.AI | truyendich.space | vi |  | ✅ hoạt động |
| 85 | truyenfull | truyenfull.live | vi |  | ✅ hoạt động |
| 86 | Truyện Chữ | truyenchu.net | vi |  | ✅ hoạt động |
| 87 | Truyện Dịch AI | truyendichai.com | vi |  | 🟡 một phần (popular lỗi) |
| 88 | Truyện Full | truyenfull.today | vi |  | ✅ hoạt động |
| 89 | Truyện Mới | truyenmoi.app | vi |  | 🟡 một phần (popular lỗi) |
| 90 | Truyện Mới KK | truyenmoikk.com | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 91 | Truyện Net | truyennet.vn | vi |  | 🟡 một phần (popular ✓; search lỗi) |
| 92 | Truyện Zhihu Tổng Hợp | www.truyendexuat.com | vi |  | ✅ hoạt động |
| 93 | TruyệnCV | metruyencv.com | vi |  | 🟡 một phần (popular lỗi) |
| 94 | Tu Tiên (.pro) | tutien.pro | vi |  | 🟡 một phần (popular lỗi) |
| 95 | uukanshu | uukanshu.cc | zh |  | 🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần |
| 96 | Valvrareteam | valvrareteam.net | vi |  | ✅ hoạt động |
| 97 | Viblo | viblo.asia | vi |  | 🟡 một phần (popular, detail, chapters ✓; search lỗi) |
| 98 | vivutruyencom | vivutruyen.com | vi |  | ✅ hoạt động |
| 99 | Việt Nam Thư Quán | vnthuquan.org | vi |  | ✅ hoạt động |
| 100 | Wattpad | www.wattpad.com | all |  | 🟡 một phần (popular lỗi) |
| 101 | Web Truyện Chữ | webtruyenchu.com | vi |  | ✅ hoạt động |
| 102 | Web Truyện Dịch | webtruyendich.com | vi |  | 🟡 một phần (popular lỗi) |
| 103 | Weibo | m.weibo.cn | zh |  | 🟡 một phần (popular lỗi) |
| 104 | Wiki Dịch | wikicv.org | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 105 | wodeshucheng5 | www.wodeshucheng5.com | zh |  | 🟠 nginx 403 – chặn IP/khu vực |
| 106 | Xbanxia - repo Đường đen | www.xbanxia.cc | zh |  | ✅ hoạt động |
| 107 | Xianqihaotiami APP | www.xianqihaotianmi.org | zh |  | 🟡 một phần (popular lỗi) |
| 108 | xsw | m.xsw.tw | zh |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 109 | XTruyen | www.xtruyen.net | vi |  | 🔴 không truy cập được (tên miền chết / bị chặn) |
| 110 | YPShuo - Bình luận sách | www.ypshuo.com | zh |  | 🟡 một phần (popular lỗi) |
| 111 | 【VIP】Bạch Ngọc Sách | bnsvip.net | vi |  | 🟡 một phần (popular lỗi) |
| 112 | 书本书 Shubenshu | www.shubenshu.com | zh |  | 🟡 một phần (popular, search, detail, chapters ✓; content lỗi) |
| 113 | 搜笔趣阁 | www.sobqg.com | zh |  | ✅ hoạt động |
| 114 | 笔趣阁-abcbiquge | m.abcbiquge.com | zh |  | 🟡 một phần (popular, search, detail ✓; chapters lỗi) |
| 115 | 飘天文学 | www.piaotia.com | zh |  | ✅ hoạt động |

## Cấu trúc dự án

```
sources/<id>/        nguồn chuẩn vBook (plugin.json + src/*.js)   ← nơi duy nhất cần sửa
lib/                 thư viện mẫu dùng chung (Madara, generic selector, ...)
runtime/             engine + DOM tương thích jsoup + vBook API (JS) và prelude Rhino
hosts/               lớp chuyển đổi cho Mangayomi, LNReader/IReader, Node test
android/             APK đa nguồn cho Aniyomi/Nekoyomi (anime + manga, bản 18+)
tools/               build, sinh nguồn, phân tích trang, kiểm thử
repo/                ĐẦU RA cho các ứng dụng (index.json, plugins.min.json, plugin.json, index.min.json, apk/)
data/                danh sách nguồn từ Excel, kết quả kiểm thử
```

Build: `npm run build` · Kiểm thử: `npm test` · APK: `android/build_apks.ps1`. Ghi chú kỹ thuật: [TECHNICAL_UPDATE_NOTES.md](TECHNICAL_UPDATE_NOTES.md).

Một số nguồn tái sử dụng tiện ích vBook mã nguồn mở của cộng đồng (ghi công tác giả gốc trong `plugin.json`). Giấy phép: GPL-3.0.
