# Hướng dẫn sửa YomiHub để nhận Short Video theo kho (để làm ở bản sau)

Viết ngày 13/11/2026, cùng Extension Repo 0.0.4. Chủ dự án quyết định **chưa sửa YomiHub ở bản này**, chỉ để lại hướng dẫn cho phiên cập nhật sau.

## 1. Hiện trạng (YomiHub-Project commit `91d84b8`, YomiHub 0.5.3)

Tệp: `overlay/lib/yomihub/player/yomi_shorts.dart`

```dart
static bool supports(Source s, {List<dynamic> filters = const []}) {
  if (s.itemType != ItemType.anime) return false;
  if (BuiltinExtensions.shortsIds.contains(s.id)) return true;          // (a) ID cố định
  final n = (s.name ?? '').toLowerCase();
  return n.startsWith('youtube') || n.startsWith('fikfap') ||           // (b) theo tên
      selectFilters(filters).any((f) => shortsOption(f) >= 0);         // (c) theo bộ lọc
}
```

YomiHub bật tab **Shorts** cho một nguồn khi gặp 1 trong 3 trường hợp:

- (a) ID của nguồn nằm trong `BuiltinExtensions.shortsIds` (920260006/7/8/13/14/15/16/17).
- (b) Tên nguồn bắt đầu bằng `youtube` hoặc `fikfap`.
- (c) Nguồn có `SelectFilter` chứa lựa chọn `shorts` / `video ngắn`.

Extension Repo đã dùng cả 3 cách:

- `hosts/mangayomi.tail.js` → `getFilterList()` trả bộ lọc **"Chế độ xem: Shorts (Video ngắn)"** (value `shorts`) cho mọi nguồn có cờ `short` trong sheet *Extension Repo Main*. Gồm YouTube, TikTok, Douyin, FreeReels, PornHub (shorties), FikFap, Tik.Porn, Kwiky, xFree, FapReel và SexVietTop. Vì vậy các nguồn này **đã có Shorts trong YomiHub 0.5.3**, không cần sửa app.
- `repo/index.json` có thêm `additionalParams: "shorts"` cho các nguồn trên (từ 0.0.3).

**Điểm yếu còn lại:** trường hợp (c) cần tải mã nguồn và gọi `getFilterList()` trước khi biết nguồn có Shorts hay không. Danh sách nguồn chưa cài (trong mục Tiện ích) vì thế không hiện biểu tượng Shorts. YomiHub cũng chưa đọc `additionalParams` từ kho.

## 2. Cách sửa đề xuất (bản sau)

### 2.1 Đọc cờ của kho trong `supports()`

```dart
static bool supports(Source s, {List<dynamic> filters = const []}) {
  if (s.itemType != ItemType.anime) return false;
  if (BuiltinExtensions.shortsIds.contains(s.id)) return true;
  // NEW: cờ do kho tiện ích khai báo (Kiritokmn Extension Repo >= 0.0.3)
  final ap = (s.additionalParams ?? '').toLowerCase();
  if (ap.split(RegExp(r'[,;\s]+')).contains('shorts')) return true;
  final n = (s.name ?? '').toLowerCase();
  return n.startsWith('youtube') || n.startsWith('fikfap') ||
      selectFilters(filters).any((f) => shortsOption(f) >= 0);
}
```

- Model `Source` của Mangayomi đã có trường `additionalParams`. Mangayomi tự chép trường này từ `index.json` khi tải danh sách kho: `lib/models/source.dart` và `fetch_sources_list`. Cần kiểm tra lại tên trường ở nhánh Mangayomi mà YomiHub đang dựa vào.
- Nếu bản Mangayomi gốc chưa lưu `additionalParams` vào Isar thì thêm vào `Source.fromJson` / `toJson` và **tăng schema version**. Nhớ dựng lại `source.g.dart` bằng `dart run build_runner build`.

### 2.2 Hiện biểu tượng Shorts trong danh sách tiện ích

Ở màn hình danh sách nguồn (tab Tiện ích), gọi `YomiShorts.supports(source)` (không truyền `filters`). Nếu đúng thì hiện huy hiệu "Shorts". Nhờ có 2.1, nguồn chưa cài cũng hiện huy hiệu.

### 2.3 Thứ tự kiểm thử sau khi sửa

1. Dựng YomiHub (`buildwin`/`build23` như các bản trước).
2. Thêm kho `https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main/repo/index.json`.
3. Khi chưa cài: TikTok, Douyin, FreeReels có huy hiệu Shorts trong danh sách.
4. Cài TikTok → mở tab **Shorts** → luồng video dọc 9:16 → vuốt lên sang clip tiếp theo.
5. Douyin: bật máy chủ Douyin_TikTok_Download_API trong cài đặt nguồn rồi làm lại bước 4. Không có máy chủ thì Douyin chỉ hiện bảng chủ đề nóng.
6. Ghi kết quả vào `TECHNICAL_UPDATE_NOTES.md` của cả hai dự án.

## 3. Không cần sửa phía kho

Kho đã ghi đủ dữ liệu: `additionalParams: "shorts"`, bộ lọc Shorts và cờ `short` trong `data/sources.json`. Bản YomiHub sau chỉ cần đọc các dữ liệu này.
