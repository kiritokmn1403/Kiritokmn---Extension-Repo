# 08 – Bàn giao bản 0.0.5 (13/11/2026 tối — **đã hoàn tất và phát hành**, xem cuối tệp)

## Đã làm, chưa kiểm trên máy
Mã nằm trong patch `claude/0.0.5-patch.diff` của Claude Project, áp lên commit 0.0.4 `4935497` bằng `git apply --binary`.
- **Mỗi nguồn một APK riêng cho Aniyomi/Nekoyomi** (yêu cầu của chủ dự án: các extension phải phân biệt được với nhau):
  - `android/anime-core`, `android/manga-core` (module thư viện chứa Kotlin + Rhino, biên dịch một lần).
  - `android/{anime,manga}/build.gradle.kts`: product flavor động từ `flavors.json`.
  - `build-all.mjs` sinh `android/<mod>/gen/<flavor>/{assets,res}` (logo nguồn → `mipmap-xxxhdpi/ic_launcher.png`).
  - Gói: `eu.kanade.tachiyomi.{animeextension|extension}.<lang>.kiri<id>`. versionCode = 1000·APK_REV + phiên bản nguồn; versionName `14.<code>` / `1.4.<code>`. ID nguồn giữ nguyên (`hash31('aniyomi:'+id)`).
  - `aniyomi-index.mjs` ghi một mục cho mỗi APK. `make-output.mjs` gói APK thành 2 zip.
  - `build_apks.ps1` chạy `:anime:assembleRelease :manga:assembleRelease`.
  - Kết quả mong đợi: 44 APK Phim + 37 APK Truyện. **Chưa chạy Gradle lần nào.**
- **NguonC 403:** CDN segment chặn HTTP/1.1, chỉ trả cho HTTP/2. Đã sửa:
  - `track.js` trả cờ `http2: true`.
  - `engine.js` chuyển tiếp cờ `http2`.
  - `android/shared/kotlin/kiritokmn/vbook/Http2Bridge.kt`: cầu nối loopback HTTP/1.1 → HTTP/2 qua OkHttp của app.
  - `VBookAnimeFactory.kt` (`bridged()`) gọi cầu nối khi stream có cờ `http2`.
  - **Chưa biên dịch, chưa thử.** Mangayomi/YomiHub chưa có cầu nối nên có thể vẫn 403.
- `run-tests.mjs --stream` + `tools/test/streamprobe.mjs`: tải thử luồng phát thật (bước `stream`, chỉ báo cáo).
- Sửa nguồn: sohu, syosetu đạt (replay); mangadm hết "đạt nhầm". wikidich, nettruyenviet, weebcentral, sudugu/lofter, po18sm, sweetastes, novelnext, hihiphim, hentaivietsubcom đã qua thêm bước, cần một vòng `--record` thật để kiểm tiếp.
- `lib_generic.js`: `X.rel()` (link chương tương đối theo trang), bỏ link `#…`/`javascript:`, `pages_suffix`.
- `package.json` 0.0.5; Aidoku `BRIDGE_REV = 3` (đã dựng lại 152 gói trên máy đám mây, phải dựng lại ở phiên mới vì repo/ không nằm trong patch).
- Replay toàn bộ: 63/196, không nguồn nào tụt.

## Việc còn lại theo thứ tự
1. Áp patch trên máy chủ dự án. Chạy `tools/win/build_all.ps1`: Gradle dựng 81 APK, sửa lỗi biên dịch nếu có (Http2Bridge.kt, module core).
2. Dựng lại Aidoku (cần Rust, xem 02).
3. Kiểm thử trên **điện thoại thật** (chủ dự án đã cắm điện thoại ngày 13/11) hoặc trên máy ảo:
   - Gỡ 4 APK gộp cũ (`…animeextension.all.kiritokmn[.nsfw]`, `…extension.all.kiritokmn[.nsfw]`), cài từng APK.
   - Kiểm tên + logo riêng từng nguồn trong Aniyomi/Nekoyomi, NguonC phát, Resume.
   - Nhớ trả lại cài đặt điện thoại như lúc đầu.
4. YouTube không phát trong mpv của Aniyomi. Giả thuyết: client IOS không trả `formats` có tiếng, `chap.js` lùi về luồng adaptive chỉ có hình (brand `dash`); googlevideo chặn khi tải cả tệp không có tham số `&range=`. Hướng làm: dùng `hlsManifestUrl` nếu có, hoặc gửi audio riêng qua `audioTracks`, hoặc thử client khác.
5. Nguồn SPA cần API (bilibili, Twitch, Dailymotion, VTV Go, FreeReels, iQIYI, MGTV). Kiểm LeechText, YomiHub Shorts, vBook (cập nhật app 1.1.57).
6. Ghi TECHNICAL_UPDATE_NOTES (mục 0.0.5), CHANGELOG, README (hướng dẫn chuyển từ 4 APK gộp sang APK từng nguồn), phát hành.

## Bài học phiên này
- Sub-agent có thể bị dừng giữa chừng vì giới hạn sử dụng 5 giờ. Chia việc nhỏ, bảo agent commit thường xuyên.
- **Không** chạy `git checkout -- android/anime/src android/manga/src` để dọn đầu ra build: lệnh đó xoá luôn sửa đổi Kotlin trong `src/main`. Chỉ dọn `src/*/assets` (từ 0.0.5 không cần nữa vì đầu ra nằm ở `gen/`, đã gitignore).
- Kết nối máy tính (remote-devices) có thể rớt hẳn trong phiên. Lưu bàn giao vào Claude Project để phiên mới làm tiếp.

## Phiên 13/11 khuya (máy đám mây) — `claude/0.0.5-fix1.diff` (đã gộp vào mã)
- `Http2Bridge.kt` biên dịch được (Kotlin 2.2.20, `-jvm-target 1.8`, `-Werror`). Test JVM `tools/test/Http2BridgeTest.kt` đạt 18/18; cách chạy ghi ở đầu tệp.
- Lỗi đã sửa: NguonC trả cả playlist dạng `data:` URI. Cầu nối từng mã hoá hex URI này vào đường dẫn, nên một phim 1500 đoạn có URL khoảng 590 KB, vượt giới hạn 16 KB của `readHead`. Bây giờ URL gốc được gọi bằng khoá ngắn `ROOT` (`/<token>/p/0.m3u8`).
- `lib_generic.js` `X.rel()`: link `?page=2` giữ nguyên đường dẫn trang.

## Kết thúc (13/11/2026 khuya)
- Đã áp patch, `claude/0.0.5-fix1.diff` và bản sửa YouTube (ghép hình + tiếng) lên máy chủ dự án. Gradle dựng 81 APK thành công.
- Đã kiểm trên Galaxy Note9 (xem `04_kiem-thu-ung-dung.md`): tên + logo riêng ✅, NguonC phát/tua/xem tiếp ✅, YouTube ✅, Nekoyomi ✅.
- Việc còn lại: xem `TECHNICAL_UPDATE_NOTES.md`, mục 0.0.5 → "Việc cần làm ở bản sau".
