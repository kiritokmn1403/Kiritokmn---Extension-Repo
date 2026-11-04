// LNReader / IReader plugin entry (CommonJS output, `exports.default` = plugin instance).
import { create, META } from './entry.js';

const { fetchApi } = require('@libs/fetch');
let storageMod = null;
try { storageMod = require('@libs/storage'); } catch (e) { storageMod = null; }
const mem = {};
const storage = storageMod && storageMod.storage ? storageMod.storage : { get: k => mem[k], set: (k, v) => { mem[k] = v; }, delete: k => { delete mem[k]; } };

class VBookLNPlugin {
  constructor() {
    this.id = META.lnId;
    this.name = META.name;
    this.icon = META.lnIcon;
    this.site = META.source;
    this.version = META.lnVersion;
    this.filters = undefined;
    this.webStorageUtilized = false;
    this.engine = create({
      name: 'LNReader',
      request: async (r) => {
        const init = { method: r.method, headers: r.headers };
        if (r.body != null && r.method !== 'GET') init.body = r.body;
        const res = await fetchApi(r.url, init);
        const headers = {};
        try { res.headers.forEach((v, k) => { headers[k] = v; }); } catch (e) { }
        return { status: res.status, url: res.url || r.url, headers, text: await res.text() };
      },
      storageGet: k => { const v = storage.get('vb_' + k); return v == null ? null : String(v); },
      storageSet: (k, v) => { if (v == null) storage.delete && storage.delete('vb_' + k); else storage.set('vb_' + k, String(v)); },
      config: k => null,
      log: m => console.log(m),
    });
  }
  async popularNovels(pageNo, options) {
    const r = options && options.showLatestNovels ? await this.engine.latest(pageNo) : await this.engine.popular(pageNo);
    return r.items.map(i => ({ name: i.name, path: i.link, cover: i.cover }));
  }
  async searchNovels(searchTerm, pageNo) {
    const r = await this.engine.search(searchTerm, pageNo);
    return r.items.map(i => ({ name: i.name, path: i.link, cover: i.cover }));
  }
  async parseNovel(novelPath) {
    const d = await this.engine.detail(novelPath);
    const ch = await this.engine.chapters(novelPath);
    return {
      path: novelPath, name: d.name || 'Untitled', cover: d.cover, summary: d.description, author: d.author,
      status: d.ongoing ? 'Ongoing' : 'Completed', genres: d.genres.join(','),
      chapters: ch.map((c, i) => ({ name: c.name, path: c.url, chapterNumber: i + 1 })),
    };
  }
  async parseChapter(chapterPath) { return (await this.engine.content(chapterPath)).html; }
  resolveUrl(path, isNovel) { return /^https?:/i.test(path) ? path : META.source.replace(/\/+$/, '') + '/' + String(path).replace(/^\/+/, ''); }
}

export default new VBookLNPlugin();
