# 04 – Kiểm thử trong ứng dụng (máy ảo / điện thoại)

## Điều khiển
- `_work/phone4.ps1` (chạy qua runner: `& '..\_work\phone4.ps1'`, **không** dùng Start-Process lồng trong job vì tiến trình con bị mất). Đọc lệnh từ `_work/phone_cmd.txt`, sau mỗi lô lệnh thì chụp `shots/phone_now.png` + `ui_now.xml`.
- Lệnh hay dùng: `launch <gói>`, `stop <gói>`, `text "Chữ đúng"`, `textc "chứa"`, `seek "Tên nguồn"` (cuộn tìm rồi chạm), `rowtapc "chữ" X` (chạm vào nút cùng hàng, ví dụ nút Cài ở x=985), `tap X Y`, `swipe`, `type <chữ>`, `key 4` (Back), `url <deeplink> <gói>`, `shot <tên>`, `rec <tên>` / `recstop` (screenrecord, mỗi đoạn 170 giây).
- Máy ảo Linux có `~/pc.sh "lệnh1" "lệnh2"…`: gửi lệnh, chờ `snap`, in danh sách chữ + toạ độ lấy từ ui_now.xml. Log có CRLF, đếm `snap` phải `tr -d '\r'`.
- Khi `ui_now.xml` bị cũ (uiautomator không dump được một số màn hình), stage `phone_now.png` về rồi xem ảnh.
- Hàng phím Back của app: nút ← (79,136) đáng tin hơn `key 4` khi đang mở bàn phím.

## Thiết lập lần đầu từng app (máy ảo 13/11/2026 có dữ liệu trống)
- **Aniyomi / Nekoyomi**: Next → *Select a folder* → Documents → USE THIS FOLDER → ALLOW → Next → Get started. Vào Extensions bấm **Trust** cho từng APK Kiritokmn (cài bằng adb là "UNTRUSTED"). Vào Sources → nút Filter (1006,147) → bật Global / Tiếng Việt / 中文.
- **Mangayomi**: kho đã có sẵn. Kéo xuống **từ đầu danh sách** Extensions để làm mới → *Update all*. Danh sách "chưa cài" có thể vẫn hiện phiên bản cũ của app; mục đã cài thì đúng.
- **LNReader**: theme → Complete. Thêm kho bằng deep link `lnreader://repo/add?url=<plugins.min.json>`. Vào ⋮ → Browse Settings → Languages → bật **Tiếng Việt** (mặc định chỉ có English).
- **vBook**: Library → ⋮ → Repository manager → `+` → dán URL `repo/plugin.json` → OK (bấm OK trên hộp thoại, đừng bấm ESC). Nút ⬇ bên phải mỗi kho là **xoá kho**. vBook 1.1.54 bắt cập nhật app (1.1.57) mới cho cài tiện ích.

## Ghi nhận khi kiểm
- `run-tests` chỉ kiểm *có link phát*, chưa tải thử luồng. NguonC đạt `run-tests` nhưng mpv báo 403 trên segment. Dùng `tools/test/streamcheck.mjs <id…>` để tải thử link phát kèm header.
- Video trên máy ảo hay bị răng cưa (giải mã bằng phần mềm). Vẫn tính là phát được nếu thời gian chạy.
- Resume A Video kiểm như sau: phát khoảng 20 giây → Back → tập hiện `m:ss/tổng` → mở lại, phát tiếp từ đúng mốc đó.

## Điện thoại thật Galaxy Note9 (bản 0.0.5, 13/11/2026)
- Máy `SM-N960N`, Android 10, 1440×2960, adb `281038ac31217ece`. Đã có Aniyomi (`xyz.jmir.tachiyomi.mi`), Nekoyomi (`app.nekoyomi`), YomiHub, Mangayomi, LNReader, vBook, LeechText. Xiaomi 15T cắm cùng lúc nhưng không hiện trong `adb devices` vì chưa bật gỡ lỗi USB.
- Bộ điều khiển: `_work/phone5.ps1` (bản sao của phone4, máy Note9, ảnh/video vào `_work/shots/v005`). Bật bằng job có một dòng `& "...\_work\phone5.ps1"`. Gửi lệnh bằng `~/pc5.sh` trong máy ảo Linux. Tắt bằng lệnh `quit`.
- **Trước khi kiểm**, ghi cài đặt máy vào `shots/v005/phone_settings_before.txt` (xoay màn hình, độ sáng, hoạt ảnh, giữ màn hình sáng). **Sau khi kiểm**, trả lại đúng như cũ. Thoát trình phát thì Aniyomi giữ màn hình ngang, nên trong lúc kiểm phải khoá dọc (`accelerometer_rotation 0`, `user_rotation 0`), xong thì bật lại `accelerometer_rotation 1`.
- `adb install` 81 APK mất khoảng 7 phút, mỗi APK 5–6 giây. Log của job chỉ ghi khi cả vòng lặp xong; muốn xem tiến độ thì đếm `pm list packages | Select-String kiri` bằng một job khác.
- Cài APK qua adb trên máy thật thì Aniyomi không hỏi "Trust", nhưng gắn nhãn **LỖI THỜI** nếu kho trên GitHub chưa có gói đó. Nhãn này hết sau khi phát hành.
- uiautomator không dump được màn hình trình phát mpv, nên xem ảnh `shot`. Thanh tua của mpv: chạm không tua được, phải `swipe` chậm (800 ms) từ nút tròn.
- Kiểm rãnh tiếng: khi đang phát, chạm giữa màn hình, rồi bấm biểu tượng ♪ ở góc trên phải. Danh sách phải có "#1: Âm thanh gốc".
