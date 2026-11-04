// Snapshot tool: fetches pages of every source on the Windows machine (which has internet)
// and records fingerprints so selectors can be written against real HTML.
// Usage: node snap.mjs sources.json outDir [jobs.json]
import fs from 'node:fs'; import path from 'node:path';
const [,, srcFile, outDir, jobsFile] = process.argv;
const UA = 'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36';
const UAD = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
fs.mkdirSync(outDir, { recursive: true });
let jobs;
if (jobsFile) jobs = JSON.parse(fs.readFileSync(jobsFile, 'utf8'));
else {
  const src = JSON.parse(fs.readFileSync(srcFile, 'utf8'));
  jobs = src.map(s => ({ id: s.id, name: 'home', urls: s.urls }));
}
const SIGS = {
  wordpress: /wp-content|wp-includes/i, halim: /halim/i, madara: /madara|wp-manga|manga_/i,
  mangastream: /ts_reader|mangastream|bixbox/i, nettruyen: /nettruyen|ModuleContent|items-slide|comic-item/i,
  biquge: /biquge|笔趣阁|book_list|bookname/i, next: /__NEXT_DATA__|_next\/static/i, nuxt: /__NUXT__|_nuxt\//i,
  cloudflare: /cf-chl|challenge-platform|Just a moment|cf_chl_opt/i, ophim: /ophim|kkphim|nguonc/i,
  jwplayer: /jwplayer/i, m3u8: /\.m3u8/i, blogger: /blogger\.com|blogspot/i, react: /data-reactroot|__REACT/i,
  vue: /data-v-[0-9a-f]{6}/i, laravel: /csrf-token/i, lightnovel: /lightnovel|truyen-|chuong-/i,
};
async function get(url, ua) {
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 25000);
  try {
    const r = await fetch(url, { redirect: 'follow', signal: ctl.signal, headers: { 'User-Agent': ua, 'Accept-Language': 'vi-VN,vi;q=0.9,en;q=0.8,zh;q=0.7', Accept: 'text/html,application/json,*/*' } });
    const buf = Buffer.from(await r.arrayBuffer());
    let body = buf.toString('utf8');
    const cs = (r.headers.get('content-type') || '').match(/charset=([\w-]+)/i)?.[1] || body.match(/<meta[^>]+charset=["']?([\w-]+)/i)?.[1];
    if (cs && !/utf-?8/i.test(cs)) { try { body = new TextDecoder(cs.toLowerCase()).decode(buf); } catch {} }
    return { status: r.status, url: r.url, ct: r.headers.get('content-type'), body, server: r.headers.get('server') };
  } catch (e) { return { status: 0, error: String(e.cause?.code || e.message), url }; }
  finally { clearTimeout(t); }
}
const results = {};
let i = 0;
async function worker() {
  while (i < jobs.length) {
    const j = jobs[i++];
    let res, used;
    for (const u of j.urls) {
      res = await get(u, j.desktop ? UAD : UA); used = u;
      if (res.status >= 200 && res.status < 400 && res.body && res.body.length > 500) break;
    }
    const dir = path.join(outDir, j.id); fs.mkdirSync(dir, { recursive: true });
    const sig = []; if (res.body) for (const [k, re] of Object.entries(SIGS)) if (re.test(res.body)) sig.push(k);
    const title = res.body?.match(/<title[^>]*>([^<]*)/i)?.[1]?.trim().slice(0, 120);
    if (res.body) fs.writeFileSync(path.join(dir, j.name + (res.ct?.includes('json') ? '.json' : '.html')), res.body.slice(0, 1500000));
    results[j.id + ':' + j.name] = { req: used, status: res.status, final: res.url, len: res.body?.length || 0, title, sig, server: res.server, error: res.error };
    process.stdout.write(`${j.id}:${j.name} ${res.status} ${res.body?.length || 0}\n`);
  }
}
await Promise.all(Array.from({ length: 10 }, worker));
const sumFile = path.join(outDir, '_summary_' + (jobsFile ? path.basename(jobsFile, '.json') : 'home') + '.json');
fs.writeFileSync(sumFile, JSON.stringify(results, null, 1));
console.log('DONE', Object.keys(results).length);
