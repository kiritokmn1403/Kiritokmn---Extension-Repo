// Generates README.md (install links for every app + per-source status table from test-results.json).
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const VERSION = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')).version;
const GH = 'kiritokmn1403/Kiritokmn---Extension-Repo';
const RAW = `https://raw.githubusercontent.com/${GH}/main/repo`;
const REL = `https://github.com/${GH}/releases/download/v${VERSION}`;
const src = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/sources.json'), 'utf8'));
let tr = null; const trp = path.join(ROOT, 'data/test-results.json');
if (fs.existsSync(trp)) tr = JSON.parse(fs.readFileSync(trp, 'utf8'));
const byId = Object.fromEntries((tr ? tr.results : []).map(r => [r.id, r]));
const assets = fs.existsSync(path.join(ROOT, 'Output')) ? fs.readdirSync(path.join(ROOT, 'Output')).filter(f => !fs.statSync(path.join(ROOT, 'Output', f)).isDirectory() && !/\.log$/.test(f)) : [];
const TYPE = { movie: 'Phim & Video', comic: 'Truyện tranh', novel: 'Tiểu thuyết' };
const CF = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/cloudflare.json'), 'utf8'));
function status(r, id) {
  if (CF.interactive.includes(id)) return '🛡️ Cloudflare Turnstile – cần **xác minh thủ công** trong WebView';
  if (CF.ipblock.includes(id)) return '🛡️ Cloudflare chặn IP Việt Nam – cần VPN';
  if (CF.notcf[id]) return '🟠 ' + CF.notcf[id];
  if (CF.auto.includes(id) && !(r && r.pass)) return '🛡️ Cloudflare (tự vượt qua trong WebView) – mở WebView 1 lần';
  if (!r) return '⚪ chưa kiểm thử';
  if (r.pass) return '✅ hoạt động';
  const s = r.steps || {}; const f = Object.entries(s).find(([, v]) => !v.ok);
  const e = f ? f[1].error || '' : r.error || '';
  if (/HTTP 0|ENOTFOUND|fetch failed|ECONN|timeout popular/.test(e) || (f && f[0] === 'popular' && /HTTP 0/.test(e))) return '🔴 không truy cập được (tên miền chết / bị chặn)';
  if (/HTTP 403|HTTP 5\d\d/.test(e)) return '🟠 bị Cloudflare/máy chủ chặn';
  if (/Headless browser/.test(e)) return '🟠 cần WebView (chỉ chạy trên vBook)';
  const ok = Object.entries(s).filter(([, v]) => v.ok).map(([k]) => k);
  return '🟡 một phần (' + (ok.length ? ok.join(', ') + ' ✓; ' : '') + (f ? f[0] + ' lỗi' : 'lỗi') + ')';
}
let rows = '';
for (const t of ['movie', 'comic', 'novel']) {
  const list = src.filter(s => s.type === t);
  rows += `\n### ${TYPE[t]} (${list.length})\n\n| # | Nguồn | Trang | Ngôn ngữ | 18+ | Trạng thái |\n|---|---|---|---|---|---|\n`;
  list.forEach((s, i) => { rows += `| ${i + 1} | ${s.name} | ${s.urls[0].replace(/^https?:\/\//, '').replace(/\/$/, '')} | ${s.lang_code} | ${s.nsfw ? 'Có' : ''} | ${status(byId[s.id], s.id)} |\n`; });
}
const pass = tr ? tr.results.filter(r => r.pass).length : 0;
const dl = assets.length ? assets.map(a => `| [${a}](${REL}/${encodeURIComponent(a)}) |`).join('\n') : '| (đang cập nhật) |';
const md = `# Kiritokmn - Extension Repo

**Phiên bản: ${VERSION}** · Một kho tiện ích dùng chung cho **Aniyomi, Nekoyomi, Mangayomi, YomiHub, LNReader, IReader, vBook, LeechText và Aidoku** — ${src.length} nguồn Phim, Truyện tranh, Tiểu thuyết (Tiếng Việt, Trung, Anh, Nhật).

Mỗi nguồn được viết **một lần** theo chuẩn vBook (JavaScript). Bộ build tự chuyển sang định dạng của từng ứng dụng:

| Ứng dụng | Thêm repo bằng đường dẫn | Định dạng |
|---|---|---|
| **Aniyomi / Nekoyomi** (Phim + Truyện tranh) | \`${RAW}/index.min.json\` | APK đa nguồn (Rhino + jsoup) |
| **Mangayomi / YomiHub** | \`${RAW}/index.json\` | JS source (MProvider) |
| **LNReader / IReader** (Tiểu thuyết) | \`${RAW}/plugins.min.json\` | Plugin JS (ES5) |
| **vBook / LeechText / YomiHub (tab vBook)** | \`${RAW}/plugin.json\` | Gói vBook \`.zip\` |
| **Aidoku** (iOS) | xem [docs/AIDOKU.md](docs/AIDOKU.md) | chưa hỗ trợ trong 0.0.1 |

> Cả 4 đường dẫn đều nằm chung một gốc: **\`${RAW}/\`** — Aniyomi/Nekoyomi chỉ cần gốc này.

### Cách thêm nhanh
- **Aniyomi / Nekoyomi**: Thêm → Cài đặt → Duyệt → Kho tiện ích → \`+\` → dán \`${RAW}/index.min.json\` (thêm ở cả mục Anime và Manga). Cài "Kiritokmn Phim" và "Kiritokmn Truyện" (bản 18+ là gói riêng).
- **Mangayomi / YomiHub**: Tiện ích → ⋮ → Kho tiện ích → thêm \`${RAW}/index.json\` cho từng tab (Truyện tranh / Phim / Tiểu thuyết).
- **LNReader / IReader**: Tiện ích (Plugins) → Kho → thêm \`${RAW}/plugins.min.json\`.
- **vBook / LeechText**: Cài đặt → Kho tiện ích → thêm \`${RAW}/plugin.json\`.

### Thêm bằng liên kết (deep link, mở trên điện thoại)
\`\`\`
aniyomi://add-repo?url=${RAW}/index.min.json
tachiyomi://add-repo?url=${RAW}/index.min.json
mangayomi://add-repo?repo_name=Kiritokmn&manga_url=${RAW}/index.json&anime_url=${RAW}/index.json&novel_url=${RAW}/index.json
\`\`\`

## Tải về (Releases v${VERSION})

| Tệp |
|---|
${dl}

Trang phát hành: https://github.com/${GH}/releases/tag/v${VERSION}

## Trạng thái nguồn (kiểm thử tự động ${tr ? tr.date.slice(0, 10) : ''}: ${pass}/${src.length} chạy trọn chuỗi danh sách → chi tiết → mục lục → nội dung)

Kiểm thử chạy thật trên mạng Việt Nam (máy chủ của chủ dự án). Nguồn "không truy cập được" thường do tên miền đã đổi — vào cài đặt nguồn để đổi **Tên miền**.
${rows}
## Cấu trúc dự án

\`\`\`
sources/<id>/        nguồn chuẩn vBook (plugin.json + src/*.js)   ← nơi duy nhất cần sửa
lib/                 thư viện mẫu dùng chung (Madara, generic selector, ...)
runtime/             engine + DOM tương thích jsoup + vBook API (JS) và prelude Rhino
hosts/               lớp chuyển đổi cho Mangayomi, LNReader/IReader, Node test
android/             APK đa nguồn cho Aniyomi/Nekoyomi (anime + manga, bản 18+)
tools/               build, sinh nguồn, phân tích trang, kiểm thử
repo/                ĐẦU RA cho các ứng dụng (index.json, plugins.min.json, plugin.json, index.min.json, apk/)
data/                danh sách nguồn từ Excel, kết quả kiểm thử
\`\`\`

Build: \`npm run build\` · Kiểm thử: \`npm test\` · APK: \`android/build_apks.ps1\`. Ghi chú kỹ thuật: [TECHNICAL_UPDATE_NOTES.md](TECHNICAL_UPDATE_NOTES.md).

Một số nguồn tái sử dụng tiện ích vBook mã nguồn mở của cộng đồng (ghi công tác giả gốc trong \`plugin.json\`). Giấy phép: GPL-3.0.
`;
fs.writeFileSync(path.join(ROOT, 'README.md'), md);
console.log('README written', md.length);
