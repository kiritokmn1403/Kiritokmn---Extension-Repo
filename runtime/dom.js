// jsoup-compatible DOM layer used by every JavaScript host (Mangayomi, YomiHub, LNReader, IReader, Node test runner).
// vBook scripts were written against jsoup (Rhino on Android); this file reproduces the jsoup
// Element / Elements API on top of htmlparser2 + cheerio-select so the same script runs unchanged.
import { parseDocument } from 'htmlparser2';
import { select as cselect, is as cssIs } from 'cheerio-select';
const selectAll = (css, root, o) => cselect(css, root, o);
const selectOne = (css, root, o) => cselect(css, root, o, 1)[0] || null;
import * as DU from 'domutils';
import render from 'dom-serializer';

const WS = /[\s ]+/g;
const BLOCK = new Set(['p', 'div', 'br', 'li', 'tr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'table', 'section', 'article', 'header', 'footer', 'blockquote', 'pre', 'dd', 'dt', 'hr']);

// jsoup-only pseudo selectors that css-select does not know. They are rewritten into
// css-select compatible pseudos registered below.
const PSEUDOS = {
  containsOwn: (el, v) => ownText(el).toLowerCase().includes(String(v).toLowerCase()),
  matches: (el, v) => safeRe(v).test(textOf(el)),
  matchesOwn: (el, v) => safeRe(v).test(ownText(el)),
  containsData: (el, v) => DU.textContent(el).includes(v),
  'contains-ci': (el, v) => textOf(el).toLowerCase().includes(String(v).toLowerCase()),
};
function safeRe(v) { try { return new RegExp(v); } catch { return /$^/; } }
const SEL_OPTS = { pseudos: PSEUDOS, xmlMode: false, lowerCaseTags: true };

function fixSelector(css) {
  // jsoup :contains is case-insensitive, css-select's is case-sensitive
  return String(css).replace(/:contains\(/g, ':contains-ci(').replace(/:eq\((\d+)\)/g, ':eq($1)');
}
function textOf(el) {
  if (!el) return '';
  if (el.type === 'text') return el.data;
  let out = '';
  const walk = n => {
    for (const c of n.children || []) {
      if (c.type === 'text') out += c.data;
      else if (c.type === 'tag' || c.type === 'script' || c.type === 'style') {
        if (c.name === 'br') out += ' ';
        else if (c.type === 'tag') { if (BLOCK.has(c.name)) out += ' '; walk(c); if (BLOCK.has(c.name)) out += ' '; }
      }
    }
  };
  walk(el);
  return decodeLoose(out).replace(WS, ' ').trim();
}
function ownText(el) {
  let out = '';
  for (const c of el.children || []) if (c.type === 'text') out += c.data;
  return decodeLoose(out).replace(WS, ' ').trim();
}
function decodeLoose(s) { return s; } // htmlparser2 decodes entities already (decodeEntities default true)

function absUrl(base, rel) {
  if (!rel) return '';
  try { return new URL(rel, base || undefined).href; } catch { return base ? '' : rel; }
}

export class Element {
  constructor(node, doc) { this.node = node; this.doc = doc; }
  get baseUri() { return this.doc ? this.doc.__base : ''; }
  select(css) { return Elements.of(selectAll(fixSelector(css), this.node, SEL_OPTS), this.doc); }
  selectFirst(css) { const n = selectOne(fixSelector(css), this.node, SEL_OPTS); return n ? new Element(n, this.doc) : null; }
  is(css) { return cssIs(this.node, fixSelector(css), SEL_OPTS); }
  text() { return textOf(this.node); }
  ownText() { return ownText(this.node); }
  wholeText() { return DU.textContent(this.node); }
  data() { return (this.node.children || []).filter(c => c.type === 'text').map(c => c.data).join(''); }
  html() { return (this.node.children || []).map(c => render(c, { decodeEntities: false })).join('').trim(); }
  outerHtml() { return render(this.node, { decodeEntities: false }); }
  toString() { return this.outerHtml(); }
  tagName() { return this.node.name || ''; }
  nodeName() { return this.node.name || '#' + this.node.type; }
  id() { return this.attr('id'); }
  className() { return this.attr('class'); }
  classNames() { return this.className().split(/\s+/).filter(Boolean); }
  hasClass(c) { return this.classNames().includes(c); }
  attr(name, value) {
    if (value !== undefined) { if (this.node.attribs) this.node.attribs[name] = String(value); return this; }
    if (!this.node.attribs) return '';
    if (name.startsWith('abs:')) return absUrl(this.baseUri, this.node.attribs[name.slice(4)] || '');
    const v = this.node.attribs[name];
    return v == null ? '' : v;
  }
  absUrl(name) { return this.attr('abs:' + name); }
  hasAttr(name) { return !!(this.node.attribs && (name.startsWith('abs:') ? name.slice(4) : name) in this.node.attribs); }
  removeAttr(name) { if (this.node.attribs) delete this.node.attribs[name]; return this; }
  attributes() { return Object.assign({}, this.node.attribs || {}); }
  dataset() { const o = {}; for (const [k, v] of Object.entries(this.node.attribs || {})) if (k.startsWith('data-')) o[k.slice(5)] = v; return o; }
  val() { return this.attr('value'); }
  parent() { const p = this.node.parent; return p && p.type !== 'root' ? new Element(p, this.doc) : null; }
  parents() { const out = []; let p = this.node.parent; while (p && p.type !== 'root') { out.push(p); p = p.parent; } return Elements.of(out, this.doc); }
  closest(css) { let p = this.node; while (p && p.type !== 'root') { if (p.type === 'tag' && cssIs(p, fixSelector(css), SEL_OPTS)) return new Element(p, this.doc); p = p.parent; } return null; }
  children() { return Elements.of((this.node.children || []).filter(DU.isTag), this.doc); }
  child(i) { const c = (this.node.children || []).filter(DU.isTag)[i]; return c ? new Element(c, this.doc) : null; }
  childrenSize() { return (this.node.children || []).filter(DU.isTag).length; }
  nextElementSibling() { const n = DU.nextElementSibling(this.node); return n ? new Element(n, this.doc) : null; }
  previousElementSibling() { const n = DU.prevElementSibling(this.node); return n ? new Element(n, this.doc) : null; }
  siblingElements() { return Elements.of(DU.getSiblings(this.node).filter(n => n !== this.node && DU.isTag(n)), this.doc); }
  elementSiblingIndex() { return DU.getSiblings(this.node).filter(DU.isTag).indexOf(this.node); }
  getElementsByTag(t) { return this.select(t); }
  getElementsByClass(c) { return this.select('.' + c); }
  getElementById(i) { return this.selectFirst('#' + i); }
  remove() { DU.removeElement(this.node); return this; }
  empty() { this.node.children = []; return this; }
  textNodes() { return (this.node.children || []).filter(c => c.type === 'text').map(c => ({ text: () => c.data, toString: () => c.data })); }
  // Document-level helpers (jsoup Document extends Element)
  title() { const t = this.selectFirst('title'); return t ? t.text() : ''; }
  body() { return this.selectFirst('body') || this; }
  head() { return this.selectFirst('head') || this; }
  location() { return this.baseUri; }
}

// Elements is a real Array (so .length, .map, .forEach, for..of work as in vBook) with jsoup methods
// attached through its prototype. Built without `class extends Array` so ES5 down-levelling keeps working.
const EP = Object.create(Array.prototype);
export const Elements = { of: makeElements, prototype: EP };
function makeElements(nodes, doc) {
  const a = [];
  for (const n of nodes || []) a.push(n instanceof Element ? n : new Element(n, doc));
  Object.setPrototypeOf(a, EP);
  return a;
}
const ElementsMethods = {
  size() { return this.length; },
  isEmpty() { return this.length === 0; },
  get(i) { return this[i] || null; },
  first() { return this[0] || null; },
  last() { return this[this.length - 1] || null; },
  eq(i) { return Elements.of(this[i] ? [this[i]] : [], null); },
  text() { return this.map(e => e.text()).filter(Boolean).join(' '); },
  eachText() { return this.map(e => e.text()).filter(Boolean); },
  html() { return this.map(e => e.html()).join('\n'); },
  outerHtml() { return this.map(e => e.outerHtml()).join('\n'); },
  toString() { return this.outerHtml(); },
  attr(name, value) {
    if (value !== undefined) { this.forEach(e => e.attr(name, value)); return this; }
    for (const e of this) if (e.hasAttr(name)) return e.attr(name);
    return '';
  },
  eachAttr(name) { return this.filter(e => e.hasAttr(name)).map(e => e.attr(name)); },
  hasAttr(name) { return this.some(e => e.hasAttr(name)); },
  hasClass(c) { return this.some(e => e.hasClass(c)); },
  val() { return this.length ? this[0].val() : ''; },
  select(css) { const out = makeElements([]); const seen = new Set(); for (const e of this) for (const c of e.select(css)) if (!seen.has(c.node)) { seen.add(c.node); out.push(c); } return out; },
  selectFirst(css) { for (const e of this) { const r = e.selectFirst(css); if (r) return r; } return null; },
  is(css) { return this.some(e => e.is(css)); },
  not(css) { return Elements.of(this.filter(e => !e.is(css)), null); },
  parents() { const out = makeElements([]); for (const e of this) out.push(...e.parents()); return out; },
  next() { return Elements.of(this.map(e => e.nextElementSibling()).filter(Boolean), null); },
  prev() { return Elements.of(this.map(e => e.previousElementSibling()).filter(Boolean), null); },
  remove() { this.forEach(e => e.remove()); return this; },
  empty() { this.forEach(e => e.empty()); return this; },
  removeAttr(n) { this.forEach(e => e.removeAttr(n)); return this; },
};
for (const k of Object.keys(ElementsMethods)) Object.defineProperty(EP, k, { value: ElementsMethods[k], writable: true, configurable: true });

export function parseHtml(html, baseUri) {
  const root = parseDocument(String(html == null ? '' : html), { decodeEntities: true, lowerCaseAttributeNames: true });
  const doc = new Element(root, null);
  doc.doc = doc;
  doc.__base = baseUri || '';
  // <base href> overrides the document URL, as in jsoup
  const b = selectOne('base[href]', root);
  if (b && b.attribs.href) doc.__base = absUrl(doc.__base, b.attribs.href);
  return doc;
}

// Html.clean(html, allowedTags) — vBook helper, keeps text-ish tags only.
export function cleanHtml(html, allowed) {
  const keep = new Set((allowed || ['p', 'br', 'b', 'i', 'em', 'strong', 'img', 'div', 'span']).map(String));
  const doc = parseHtml(html);
  const walk = n => {
    for (const c of (n.children || []).slice()) {
      if (c.type === 'script' || c.type === 'style' || c.type === 'comment') { DU.removeElement(c); continue; }
      if (c.type === 'tag') {
        walk(c);
        if (!keep.has(c.name)) { const kids = (c.children || []).slice(); for (const k of kids) DU.prepend(c, k); DU.removeElement(c); }
      }
    }
  };
  walk(doc.node);
  return render(doc.node.children, { decodeEntities: false });
}
