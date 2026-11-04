
// ---- Mangayomi / YomiHub host adapter (appended after the bundled engine) ----
class DefaultExtension extends MProvider {
  constructor() { super(); this.client = new Client(); this.prefs = new SharedPreferences(); }
  get supportsLatest() { return true; }
  getHeaders(url) { return { Referer: this.__base() + '/' }; }
  __base() { let d = ''; try { d = this.prefs.get('DOMAIN'); } catch (e) { } return String(d || __VB.META.source).replace(/\/+$/, ''); }
  __eng() {
    if (this.__e) return this.__e;
    const self = this;
    this.__e = __VB.create({
      name: 'Mangayomi',
      request: async (r) => {
        let res;
        if (r.method === 'POST') res = await self.client.post(r.url, r.headers, r.body == null ? '' : r.body);
        else res = await self.client.get(r.url, r.headers);
        return { status: res.statusCode, url: (res.request && res.request.url) || r.url, headers: res.headers || {}, text: res.body };
      },
      storageGet: k => { try { const v = self.prefs.getString('vb_' + k, ''); return v === '' || v == null ? null : v; } catch (e) { return null; } },
      storageSet: (k, v) => { try { self.prefs.setString('vb_' + k, v == null ? '' : String(v)); } catch (e) { } },
      config: k => { try { const v = self.prefs.get(k); return v == null || v === '' ? null : String(v); } catch (e) { return null; } },
      log: m => console.log(m),
    });
    return this.__e;
  }
  __list(r) { return { list: r.items.map(i => ({ name: i.name, imageUrl: i.cover, link: i.link })), hasNextPage: r.hasNext }; }
  async getPopular(page) { return this.__list(await this.__eng().popular(page)); }
  async getLatestUpdates(page) { return this.__list(await this.__eng().latest(page)); }
  async search(query, page, filters) { return this.__list(await this.__eng().search(query, page)); }
  async getDetail(url) {
    const e = this.__eng();
    const d = await e.detail(url);
    const ch = (await e.chapters(url)).map(c => ({ name: c.name, url: c.url })).reverse();
    const out = { name: d.name, imageUrl: d.cover, description: d.description, author: d.author, status: d.ongoing ? 0 : 1, genre: d.genres, link: url };
    if (__VB.META.itemType === 1) out.episodes = ch; else out.chapters = ch;
    return out;
  }
  async getPageList(url) { const base = this.__base(); return (await this.__eng().pages(url)).map(p => ({ url: p, headers: { Referer: base + '/' } })); }
  async getVideoList(url) {
    return (await this.__eng().videos(url)).map(v => ({ url: v.url, originalUrl: v.url, quality: v.quality, headers: v.headers, subtitles: v.subtitles, audios: [] }));
  }
  async getHtmlContent(name, url) { const c = await this.__eng().content(url); return c.html; }
  async cleanHtmlContent(html) { return html; }
  getFilterList() { return []; }
  getSourcePreferences() {
    const m = __VB.META, c = (m.config || {}).DOMAIN;
    if (c && Array.isArray(c.values) && c.values.length > 1) {
      return [{ key: 'DOMAIN', listPreference: { title: 'Tên miền / Domain', summary: '%s', valueIndex: 0, entries: c.values, entryValues: c.values } }];
    }
    return [{ key: 'DOMAIN', editTextPreference: { title: 'Tên miền / Domain', summary: m.source, value: m.source, dialogTitle: 'Domain', dialogMessage: 'Đổi khi trang đổi tên miền (VD: https://example.com)' } }];
  }
}
