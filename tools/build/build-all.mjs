import { fileURLToPath } from 'node:url';
// Build every source in /sources into all repo formats:
//   repo/plugin.json              vBook / LeechText / YomiHub (vBook tab)
//   repo/vbook/<id>.zip
//   repo/index.json               Mangayomi / YomiHub      (JS sources, all item types)
//   repo/mangayomi/<id>.js
//   repo/plugins.min.json         LNReader / IReader       (novel sources)
//   repo/lnreader/<id>.js
//   repo/aniyomi/sources.json     consumed by the Android multi-source APK build (Aniyomi / Nekoyomi)
// Usage: node tools/build/build-all.mjs [--only id1,id2] [--base https://raw.githubusercontent.com/<user>/<repo>/main]
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { asyncify, ASYNC_HELPERS } from './asyncify.mjs';
import { makeZip } from './zip.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const ONLY = opt('--only') ? new Set(opt('--only').split(',')) : null;
const BASE = (opt('--base') || 'https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main').replace(/\/+$/, '');
const VERSION = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')).version;

function loadEsbuild() {
  const cands = process.platform === 'linux' ? ['/opt/npm-tools/node_modules', path.join(ROOT, 'node_modules')] : [path.join(ROOT, 'node_modules'), path.join(ROOT, '../_work/deps/node_modules')];
  for (const c of cands) if (fs.existsSync(path.join(c, 'esbuild'))) { try { const r = createRequire(path.join(c, 'x.js'))('esbuild'); r.version; return r; } catch (e) { } }
  throw new Error('esbuild not found');
}
function loadTs() {
  for (const c of [path.join(ROOT, 'node_modules'), '/opt/npm-tools/node_modules', path.join(ROOT, '../_work/deps/node_modules')]) if (fs.existsSync(path.join(c, 'typescript'))) return createRequire(path.join(c, 'x.js'))('typescript');
  return null;
}
const esbuild = loadEsbuild();
const ts = loadTs();

const OUT = path.join(ROOT, 'repo');
const GBK_TABLE = fs.readFileSync(path.join(ROOT, 'runtime/gbk-table.txt'), 'utf8');
const scriptsSrc = id => { const d = path.join(ROOT, 'sources', id, 'src'); return fs.existsSync(d) ? fs.readdirSync(d).map(f => fs.readFileSync(path.join(d, f), 'utf8')).join('\n') : ''; };
if (!ONLY) for (const d of ['vbook', 'mangayomi', 'lnreader']) fs.rmSync(path.join(OUT, d), { recursive: true, force: true });
const GEN = path.join(ROOT, '.build');
for (const d of ['vbook', 'mangayomi', 'lnreader', 'aniyomi']) fs.mkdirSync(path.join(OUT, d), { recursive: true });
fs.mkdirSync(GEN, { recursive: true });

const SRC_DIR = path.join(ROOT, 'sources');
const LIB_DIR = path.join(ROOT, 'lib');
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/sources.json'), 'utf8')); // metadata from the Excel sheet
const regById = Object.fromEntries(registry.map(r => [r.id, r]));
const CF = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/cloudflare.json'), 'utf8'));
const CF_IDS = new Set([...(CF.auto || []), ...(CF.interactive || []), ...(CF.ipblock || [])]);

function hash31(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 1) % 2000000000 + 100000000; }
const ITEM_TYPE = { comic: 0, video: 1, novel: 2 };
const VB_LOCALE = { vi: 'vi_VN', zh: 'zh_CN', en: 'en_US', ja: 'ja_JP', all: 'global' };
const LN_LANG = { vi: 'Tiếng Việt', zh: '中文', 'zh-CN': '中文', en: 'English', ja: '日本語', all: 'Multi', global: 'Multi' };

const LIB_GENERIC_SRC = fs.readFileSync(path.join(LIB_DIR, 'lib_generic.js'), 'utf8');
function inlineLoads(code, srcDir, seen = new Set()) {
  return code.replace(/^\s*load\(\s*['"]([^'"]+)['"]\s*\)\s*;?/gm, (m, f) => {
    if (f === 'crypto.js') return '/* crypto.js -> CryptoJS global */';
    if (seen.has(f)) return '';
    seen.add(f);
    const p = [path.join(srcDir, f), path.join(LIB_DIR, f)].find(x => fs.existsSync(x));
    if (!p) throw new Error('load: missing ' + f);
    return '\n' + inlineLoads(fs.readFileSync(p, 'utf8'), srcDir, seen) + '\n';
  });
}
function usedLibs(code, srcDir, acc = new Set()) {
  for (const m of code.matchAll(/load\(\s*['"]([^'"]+)['"]\s*\)/g)) {
    const f = m[1]; if (f === 'crypto.js' || acc.has(f)) continue;
    if (!fs.existsSync(path.join(srcDir, f)) && fs.existsSync(path.join(LIB_DIR, f))) { acc.add(f); usedLibs(fs.readFileSync(path.join(LIB_DIR, f), 'utf8'), srcDir, acc); }
  }
  return acc;
}

const ENV_NAMES = ['fetch', 'Http', 'Html', 'Response', 'localStorage', 'cacheStorage', 'localConfig', 'localCookie', 'sleep', 'Log', 'console', 'Console', 'log', 'UserAgent', 'Engine', 'Graphics', 'Script'];

// All runnable scripts: plugin.json `script` entries + every other src/*.js (tab scripts like browse.js
// are referenced by file name from home.js/genre.js). Files only used through load() are skipped.
function scriptEntries(pj, srcDir) {
  const map = Object.assign({}, pj.script || {});
  const dir = path.join(srcDir, 'src');
  const all = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  const loaded = new Set();
  for (const f of all) for (const m of fs.readFileSync(path.join(dir, f), 'utf8').matchAll(/load\(\s*['"]([^'"]+)['"]\s*\)/g)) loaded.add(m[1]);
  const used = new Set(Object.values(map));
  for (const f of all) if (!used.has(f) && !loaded.has(f)) map[f.replace(/\.js$/, '')] = f;
  return map;
}

function generateScriptsModule(id, pj, dir, reg = {}) {
  const cfgKeys = Object.keys(pj.config || {});
  const cfgDefaults = Object.fromEntries(cfgKeys.map(k => [k, String((pj.config[k] || {}).default ?? '')]));
  let needCrypto = false;
  const parts = [];
  for (const [key, file] of Object.entries(scriptEntries(pj, dir))) {
    const p = path.join(dir, 'src', file);
    if (!fs.existsSync(p)) throw new Error(`${id}: script ${file} missing`);
    let code = inlineLoads(fs.readFileSync(p, 'utf8'), path.join(dir, 'src'));
    // lib_generic mentions CryptoJS for optional features; only bundle crypto-js when a script really needs it
    if (/load\(\s*['"]crypto\.js['"]\s*\)/.test(fs.readFileSync(p, 'utf8')) || /CryptoJS/.test(code.split(LIB_GENERIC_SRC).join(''))) needCrypto = true;
    let out;
    try { out = asyncify(code); } catch (e) { throw new Error(`${id}/${file}: parse error ${e.message}`); }
    const cfgDecl = cfgKeys.map(k => `var ${k} = __cfg(${JSON.stringify(k)});`).join('\n');
    // env names are parameters of an outer function and the script body runs in its own inner scope,
    // so scripts may redeclare/override globals (e.g. `var Response = ...`, `fetch = ...`) like in Rhino.
    parts.push(`${JSON.stringify(key)}: async function (__env, __cfg) {\nreturn (async function (${ENV_NAMES.join(', ')}) {\n${cfgDecl}\nreturn await (async function () {\n${out}\nreturn typeof execute === 'function' ? execute : undefined;\n})();\n})(${ENV_NAMES.map(n => '__env.' + n).join(', ')});\n}`);
  }
  const md = pj.metadata;
  const META = {
    id, name: md.name, source: md.source, type: md.type, locale: md.locale, nsfw: !!md.nsfw, version: md.version,
    config: pj.config || {}, configDefaults: cfgDefaults, itemType: ITEM_TYPE[md.type],
    short: !!reg.short, shorts: !!reg.short,
    lnId: 'kiritokmn.' + id, lnIcon: '', lnVersion: '1.3.' + md.version,
  };
  return `${needCrypto ? "import CryptoJS from 'crypto-js';\nglobalThis.CryptoJS = CryptoJS;\n" : ''}${ASYNC_HELPERS}\nexport const META = ${JSON.stringify(META)};\nexport const SCRIPTS = {\n${parts.join(',\n')}\n};\n`;
}

async function bundle(entry, genFile, format, extra = {}) {
  const r = await esbuild.build({
    entryPoints: [path.join(ROOT, 'hosts', entry)], bundle: true, write: false, format, platform: 'neutral', target: extra.target || 'es2020',
    minify: true, legalComments: 'none', charset: 'utf8', mainFields: ['module', 'main'],
    alias: { '__generated__/scripts.js': genFile }, nodePaths: [path.join(ROOT, 'node_modules'), path.join(ROOT, '../_work/deps/node_modules')], external: extra.external || [],
    globalName: extra.globalName, logLevel: 'silent',
  });
  return r.outputFiles[0].text;
}
function downlevelES5(code) {
  if (!ts) return code;
  return ts.transpileModule(code, { compilerOptions: { target: ts.ScriptTarget.ES5, module: ts.ModuleKind.None, downlevelIteration: true, importHelpers: false, removeComments: true, lib: ['es2017'] } }).outputText;
}

// ---- Rhino (Aniyomi/Nekoyomi) helpers
function rhinoEngine() {
  let e = fs.readFileSync(path.join(ROOT, 'runtime/engine.js'), 'utf8');
  e = e.replace(/^import .*$/gm, '').replace(/^export /gm, '').replace(/\basync\s+(?=[\w(])/g, '').replace(/\bawait\s+/g, '');
  if (!ts) throw new Error('typescript needed for Rhino engine build');
  return ts.transpileModule(e, { compilerOptions: { target: ts.ScriptTarget.ES5, module: ts.ModuleKind.None, removeComments: true } }).outputText;
}
function rhinoSourceFile(id, pj, dir) {
  const cfgKeys = Object.keys(pj.config || {});
  const parts = [];
  for (const [key, file] of Object.entries(scriptEntries(pj, dir))) {
    const code = inlineLoads(fs.readFileSync(path.join(dir, 'src', file), 'utf8'), path.join(dir, 'src'));
    const cfg = cfgKeys.map(k => `var ${k} = __cfg(${JSON.stringify(k)});`).join(' ');
    parts.push(`${JSON.stringify(key)}: function (__env, __cfg) {\nreturn (function (${ENV_NAMES.join(', ')}) {\n${cfg}\nreturn (function () {\n${code}\nreturn typeof execute === 'function' ? execute : undefined;\n})();\n})(${ENV_NAMES.map(n => '__env.' + n).join(', ')});\n}`);
  }
  const md = pj.metadata;
  const META = { id, name: md.name, source: md.source, type: md.type, locale: md.locale, nsfw: !!md.nsfw, version: md.version, config: pj.config || {}, configDefaults: Object.fromEntries(cfgKeys.map(k => [k, String((pj.config[k] || {}).default ?? '')])) };
  return `__register({ META: ${JSON.stringify(META)}, SCRIPTS: {\n${parts.join(',\n')}\n} });\n`;
}
const ANDROID = path.join(ROOT, 'android');
const androidAssets = { 'anime:sfw': [], 'anime:nsfw': [], 'manga:sfw': [], 'manga:nsfw': [] };

const vbookIndex = [], mgIndex = [], lnIndex = [], aniSources = [], report = [];
const ids = fs.readdirSync(SRC_DIR).filter(d => fs.existsSync(path.join(SRC_DIR, d, 'plugin.json'))).filter(d => !ONLY || ONLY.has(d)).sort();
for (const id of ids) {
  const dir = path.join(SRC_DIR, id);
  const t0 = Date.now();
  try {
    const pj = JSON.parse(fs.readFileSync(path.join(dir, 'plugin.json'), 'utf8'));
    const md = pj.metadata; const reg = regById[id] || {};
    const icon = `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(md.source)}`;
    // ---- vBook package (+ libraries it loads)
    const files = [{ name: 'plugin.json', data: JSON.stringify(pj, null, 2) }];
    // Other hosts group sources by language code: repacked vBook sources use vi_VN / zh_CN / en_US, ours use vi / zh-CN / en.
    md.locale = ({ vi_VN: 'vi', 'vi-VN': 'vi', zh_CN: 'zh-CN', zh: 'zh-CN', en_US: 'en', 'en-US': 'en', ja_JP: 'ja' })[md.locale] || md.locale;
    const srcFiles = fs.readdirSync(path.join(dir, 'src'));
    let allCode = '';
    for (const f of srcFiles) { const c = fs.readFileSync(path.join(dir, 'src', f), 'utf8'); allCode += c; files.push({ name: 'src/' + f, data: c }); }
    for (const lib of usedLibs(allCode, path.join(dir, 'src'))) files.push({ name: 'src/' + lib, data: fs.readFileSync(path.join(LIB_DIR, lib), 'utf8') });
    if (fs.existsSync(path.join(dir, 'icon.png'))) files.push({ name: 'icon.png', data: fs.readFileSync(path.join(dir, 'icon.png')) });
    fs.writeFileSync(path.join(OUT, 'vbook', id + '.zip'), makeZip(files));
    vbookIndex.push({ name: md.name, author: md.author, path: `${BASE}/repo/vbook/${id}.zip`, version: md.version, source: md.source, icon: fs.existsSync(path.join(dir, 'icon.png')) ? `${BASE}/sources/${id}/icon.png` : icon, description: md.description, type: md.type, locale: VB_LOCALE[md.locale] || md.locale, nsfw: !!md.nsfw });
    // ---- shared async scripts module
    const genFile = path.join(GEN, id + '.scripts.js');
    fs.writeFileSync(genFile, generateScriptsModule(id, pj, dir, reg));
    // ---- self-contained script module for the Node test runners
    { const r = await esbuild.build({ entryPoints: [genFile], bundle: true, write: false, format: 'esm', platform: 'neutral', target: 'es2022', nodePaths: [path.join(ROOT, 'node_modules'), path.join(ROOT, '../_work/deps/node_modules')], mainFields: ['module', 'main'], logLevel: 'silent' });
      fs.mkdirSync(path.join(GEN, 'test'), { recursive: true }); fs.writeFileSync(path.join(GEN, 'test', id + '.mjs'), r.outputFiles[0].text); }
    // ---- Mangayomi / YomiHub
    const ver = `0.4.${md.version}`; // 0.1.x: pure-JS URL resolver; 0.2.x: image Referer; 0.3.x: lazy fallback; 0.4.x: Shorts & Resume A Video
    const mgMeta = { name: md.name, lang: md.locale === 'all' ? 'all' : md.locale, id: hash31('kiritokmn:' + id), baseUrl: md.source, apiUrl: '', iconUrl: icon, typeSource: 'single', itemType: ITEM_TYPE[md.type], isNsfw: !!md.nsfw, version: ver, dateFormat: '', dateFormatLocale: '', pkgPath: `repo/mangayomi/${id}.js`, shorts: !!reg.short, hasShorts: !!reg.short };
    let mg = await bundle('entry.js', genFile, 'iife', { globalName: '__VB', target: 'es2020' });
    const needGbk = /gbk|gb2312|gb18030/i.test(scriptsSrc(id));
    mg = `const mangayomiSources = [${JSON.stringify(mgMeta)}];\n` + (needGbk ? `var __GBK_TABLE = ${JSON.stringify(GBK_TABLE)};\n` : '') + mg + '\n' + fs.readFileSync(path.join(ROOT, 'hosts/mangayomi.tail.js'), 'utf8');
    fs.writeFileSync(path.join(OUT, 'mangayomi', id + '.js'), mg);
    mgIndex.push({ ...mgMeta, hasCloudflare: CF_IDS.has(id), sourceCodeUrl: `${BASE}/repo/mangayomi/${id}.js`, isManga: md.type === 'comic', isFullData: false, appMinVerReq: '0.5.0', additionalParams: '', sourceCodeLanguage: 1, notes: 'Kiritokmn Extension Repo ' + VERSION });
    // ---- LNReader / IReader (novels only)
    let lnSize = 0;
    if (md.type === 'novel') {
      let ln = await bundle('lnreader.js', genFile, 'cjs', { external: ['@libs/*'], target: 'es2017' });
      ln = downlevelES5(ln);
      // LNReader's loader wraps the code as `const exports = module.exports = {}; <code>; return exports.default`,
      // so a bundle that reassigns module.exports must also put default on the original exports object.
      ln += '\nif (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;\n';
      fs.writeFileSync(path.join(OUT, 'lnreader', id + '.js'), ln); lnSize = ln.length;
      lnIndex.push({ id: 'kiritokmn.' + id, name: md.name, site: md.source, lang: LN_LANG[md.locale] || 'Multi', version: '1.3.' + md.version, url: `${BASE}/repo/lnreader/${id}.js`, iconUrl: icon, short: !!reg.short });
    }
    // ---- Aniyomi / Nekoyomi (video + comic, built into multi-source APKs)
    if (md.type === 'video' || md.type === 'comic') {
      const mod = md.type === 'video' ? 'anime' : 'manga', fl = md.nsfw ? 'nsfw' : 'sfw';
      const adir = path.join(ANDROID, mod, 'src', fl, 'assets', 'vb', 'src'); fs.mkdirSync(adir, { recursive: true });
      fs.writeFileSync(path.join(adir, id + '.js'), rhinoSourceFile(id, pj, dir));
      const doms = ((pj.config || {}).DOMAIN || {}).values || [md.source];
      androidAssets[mod + ':' + fl].push({ id, name: md.name, lang: md.locale === 'all' ? 'all' : md.locale, baseUrl: md.source, type: md.type, nsfw: !!md.nsfw, sourceId: hash31('aniyomi:' + id), domains: doms, short: !!reg.short });
    }
    if (md.type === 'video' || md.type === 'comic') aniSources.push({ id, name: md.name, lang: md.locale === 'all' ? 'all' : md.locale, baseUrl: md.source, type: md.type, nsfw: !!md.nsfw, sourceId: hash31('aniyomi:' + id), short: !!reg.short });
    report.push({ id, ok: true, type: md.type, ms: Date.now() - t0, mgKB: Math.round(mg.length / 1024), lnKB: Math.round(lnSize / 1024), stt: reg.stt });
  } catch (e) {
    report.push({ id, ok: false, error: String(e.message || e) });
    console.error('FAIL', id, e.message);
  }
}
// Node test runtime (shared engine) — per-source modules are .build/<id>.scripts.js
{
  const r = await esbuild.build({ entryPoints: [path.join(ROOT, 'hosts/node-runtime.js')], bundle: true, write: false, format: 'esm', platform: 'neutral', target: 'es2022', minify: false, nodePaths: [path.join(ROOT, 'node_modules'), path.join(ROOT, '../_work/deps/node_modules')], mainFields: ['module', 'main'], logLevel: 'silent' });
  fs.writeFileSync(path.join(GEN, '_runtime.mjs'), r.outputFiles[0].text);
  fs.writeFileSync(path.join(GEN, '_offline_entry.js'), "export { VBookEngine } from '../runtime/engine.js';\n");
  const r2 = await esbuild.build({ entryPoints: [path.join(GEN, '_offline_entry.js')], bundle: true, write: false, format: 'esm', platform: 'neutral', target: 'es2022', nodePaths: [path.join(ROOT, 'node_modules'), path.join(ROOT, '../_work/deps/node_modules')], mainFields: ['module', 'main'], logLevel: 'silent' });
  fs.writeFileSync(path.join(GEN, '_offline_runtime.mjs'), r2.outputFiles[0].text);
}
// Android assets: prelude + per-flavour source lists
fs.mkdirSync(path.join(ANDROID, 'shared/assets/vb'), { recursive: true });
fs.writeFileSync(path.join(ANDROID, 'shared/assets/vb/prelude.js'), fs.readFileSync(path.join(ROOT, 'runtime/rhino-prelude.js'), 'utf8') + '\n' + rhinoEngine());
if (!ONLY) for (const [k, list] of Object.entries(androidAssets)) {
  const [mod, fl] = k.split(':'); const d = path.join(ANDROID, mod, 'src', fl, 'assets', 'vb'); fs.mkdirSync(d, { recursive: true });
  fs.writeFileSync(path.join(d, 'sources.json'), JSON.stringify(list));
}
if (!ONLY) {
  fs.writeFileSync(path.join(OUT, 'plugin.json'), JSON.stringify({ metadata: { author: 'Kiritokmn', description: `Kiritokmn Extension Repo v${VERSION}` }, data: vbookIndex }, null, 1));
  fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(mgIndex));
  // YomiHub 0.5.3: website extensions moved out of the YomiHub app
  { const { buildYomihubSources } = await import('./yomihub-sources.mjs'); const r = buildYomihubSources(ROOT, BASE); console.log(`yomihub: ${r.added} sources, replaced ${r.dropped.length} vBook-converted entries`); }
  fs.writeFileSync(path.join(OUT, 'plugins.min.json'), JSON.stringify(lnIndex));
  fs.writeFileSync(path.join(OUT, 'aniyomi', 'sources.json'), JSON.stringify(aniSources, null, 1));
}
fs.writeFileSync(path.join(GEN, 'build-report.json'), JSON.stringify(report, null, 1));
const ok = report.filter(r => r.ok).length;
console.log(`built ${ok}/${report.length} sources`);
