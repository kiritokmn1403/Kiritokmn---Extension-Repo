# 06 – Short Video, TikTok, Douyin, YouTube (0.0.4)

- **YomiHub bật tab Shorts** khi (a) ID tích hợp cũ, (b) tên bắt đầu bằng youtube/fikfap, hoặc (c) nguồn có SelectFilter chứa lựa chọn `shorts`. `hosts/mangayomi.tail.js` đã trả bộ lọc này cho mọi nguồn có cờ `short`, nên Shorts chạy trong YomiHub 0.5.3. Việc đọc `additionalParams` từ kho để làm ở bản sau: xem `docs/YOMIHUB_SHORTS_GUIDE.md`.
- **YouTube**: dùng InnerTube.
  - `youtubei/v1/search` với client WEB, không cần khoá. Tham số lọc: `EgIQAQ==` (video), `EgIQCQ==` (Shorts).
  - `player` với client **IOS** trả link trực tiếp có tiếng (`formats`). ANDROID_VR và TVHTML5 bị "LOGIN_REQUIRED", MWEB bị "UNPLAYABLE" (đo 11/2026).
  - Trang Thịnh hành `FEtrending` đã bị YouTube gỡ (HTTP 400). Invidious công khai gần như đều 403.
- **TikTok**: tikwm.com chạy được, không cần khoá: `/api/feed/list?region=VN` (chậm khoảng 5 giây), `/api/feed/search` (POST form), `/api/user/posts`, `/api/?url=` (link HD/SD/có logo). API web gốc của TikTok trả rỗng nếu thiếu chữ ký.
- **Douyin**: mọi API video đều đòi a_bogus; trang share iesdouyin có thử thách JS VM. Chỉ `iesdouyin.com/web/api/v2/hotsearch/billboard/word/` là không cần chữ ký. Muốn xem video thì dùng máy chủ Douyin_TikTok_Download_API do người dùng tự dựng: đặt `DTK_SERVER` (+ `DTK_KEY`) trong cài đặt nguồn. Lưu ý từ tài liệu của dự án đó: tìm kiếm Douyin không phục vụ khách; tìm kiếm TikTok cần danh tính đã đăng nhập (từ 02/11/2026).
- **Chính sách**: không đưa thuật toán ký chống bot vào tiện ích. Việc ký để máy chủ riêng của người dùng làm.
- Bản demo `demo.douyin.wtf` không được dùng làm dịch vụ cho ứng dụng khác (README của dự án ghi rõ).
