//! Kiritokmn Extension Repo — Aidoku bridge.
//!
//! Aidoku (iOS) only loads WebAssembly sources, while every source of this repo is a vBook script run by a
//! shared JavaScript engine (`runtime/engine.js`). The bridge keeps one JavaScriptCore context per source
//! (Aidoku's `js` import), evaluates the bundled engine once, and drives it with a step protocol:
//!
//! 1. `__A.start(op, args, cfg)` starts an async engine call and returns a task id;
//! 2. `__A.poll(id)` reports `{s:'f', q:[...]}` (HTTP requests needed), `{s:'d', v}` (done) or `{s:'e', m}`;
//! 3. the bridge performs the requests with Aidoku's `net` import (cookies, Cloudflare handling and rate
//!    limits stay in the app) and hands the responses back with `__A.resume([...])`.
//!
//! JavaScriptCore drains its microtask queue at the end of every evaluation, so promise continuations run
//! between two `eval` calls; no timers or callbacks into WebAssembly are needed.
#![no_std]
extern crate alloc;

use aidoku::{
	AidokuError, Chapter, ContentRating, Listing, ListingKind, Manga, MangaPageResult, MangaStatus,
	Page, PageContent, PageContext, Result, UpdateStrategy, Viewer,
	alloc::{String, Vec, borrow::ToOwned, string::ToString, vec},
	imports::{
		defaults::{DefaultValue, defaults_get, defaults_set},
		js::JsContext,
		net::{HttpMethod, Request},
	},
	prelude::*,
};
use serde::{Deserialize, Serialize, de::DeserializeOwned};
use serde_json::Value;

/// Static facts about a source, written by `tools/build/aidoku-build.mjs`.
pub struct Info {
	pub nsfw: bool,
	pub comic: bool,
	/// Prefer the continuous vertical (webtoon) reader: Vietnamese / Chinese comic sites serve long strips.
	pub webtoon: bool,
	pub default_base: &'static str,
}

#[derive(Deserialize)]
struct Step {
	s: String,
	#[serde(default)]
	v: Option<Value>,
	#[serde(default)]
	m: Option<String>,
	#[serde(default)]
	q: Option<Vec<Req>>,
	#[serde(default)]
	st: Option<String>,
}

#[derive(Deserialize)]
struct Req {
	i: i64,
	u: String,
	m: String,
	#[serde(default)]
	h: Option<serde_json::Map<String, Value>>,
	#[serde(default)]
	b: Option<String>,
}

#[derive(Serialize)]
struct Res {
	i: i64,
	s: i32,
	u: String,
	h: serde_json::Map<String, Value>,
	b: String,
	#[serde(skip_serializing_if = "Option::is_none")]
	e: Option<String>,
}

#[derive(Deserialize)]
struct Entry {
	k: String,
	t: String,
	#[serde(default)]
	c: Option<String>,
}

#[derive(Deserialize)]
struct EntryPage {
	e: Vec<Entry>,
	#[serde(default)]
	n: bool,
}

#[derive(Deserialize)]
struct Tab {
	id: String,
	name: String,
}

#[derive(Deserialize)]
struct Detail {
	#[serde(default)]
	t: Option<String>,
	#[serde(default)]
	c: Option<String>,
	#[serde(default)]
	a: Option<Vec<String>>,
	#[serde(default)]
	d: Option<String>,
	#[serde(default)]
	g: Option<Vec<String>>,
	#[serde(default)]
	s: Option<i32>,
	#[serde(default)]
	ch: Option<Vec<Ch>>,
}

#[derive(Deserialize)]
struct Ch {
	k: String,
	#[serde(default)]
	t: Option<String>,
	#[serde(default)]
	n: Option<f32>,
	#[serde(default)]
	l: bool,
}

#[derive(Deserialize)]
struct PageSet {
	#[serde(default)]
	p: Option<Vec<Pg>>,
	#[serde(default)]
	x: Option<String>,
}

#[derive(Deserialize)]
struct Pg {
	u: String,
	#[serde(default)]
	r: Option<String>,
}

#[derive(Deserialize, Default)]
struct Meta {
	#[serde(default)]
	ua: String,
}

/// Response headers the vBook scripts read (Aidoku's net API exposes headers by name only).
const RESPONSE_HEADERS: [&str; 6] = [
	"content-type",
	"set-cookie",
	"location",
	"content-disposition",
	"refresh",
	"last-modified",
];

const STORE_KEY: &str = "kiri_store";

pub struct Bridge {
	ctx: JsContext,
	info: Info,
	ua: String,
}

fn js_str(s: &str) -> String {
	serde_json::to_string(s).unwrap_or_else(|_| "\"\"".to_owned())
}

const B64: &[u8; 64] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
fn base64(data: &[u8]) -> String {
	let mut out = Vec::with_capacity(data.len().div_ceil(3) * 4);
	for chunk in data.chunks(3) {
		let b = [chunk[0], *chunk.get(1).unwrap_or(&0), *chunk.get(2).unwrap_or(&0)];
		let n = ((b[0] as u32) << 16) | ((b[1] as u32) << 8) | b[2] as u32;
		out.push(B64[(n >> 18) as usize & 63]);
		out.push(B64[(n >> 12) as usize & 63]);
		out.push(if chunk.len() > 1 { B64[(n >> 6) as usize & 63] } else { b'=' });
		out.push(if chunk.len() > 2 { B64[n as usize & 63] } else { b'=' });
	}
	// only ASCII bytes were pushed
	String::from_utf8(out).unwrap_or_default()
}

fn method(m: &str) -> HttpMethod {
	match m {
		"POST" => HttpMethod::Post,
		"PUT" => HttpMethod::Put,
		"HEAD" => HttpMethod::Head,
		"DELETE" => HttpMethod::Delete,
		"PATCH" => HttpMethod::Patch,
		_ => HttpMethod::Get,
	}
}

impl Bridge {
	pub fn new(js: &str, info: Info) -> Self {
		let ctx = JsContext::new();
		let _ = ctx.eval(js);
		let store: String = defaults_get::<String>(STORE_KEY).unwrap_or_default();
		let _ = ctx.eval(&format!("__A.init({})", js_str(&store)));
		let meta: Meta = ctx
			.eval("__A.meta()")
			.ok()
			.and_then(|s| serde_json::from_str(&s).ok())
			.unwrap_or_default();
		Self {
			ctx,
			info,
			ua: meta.ua,
		}
	}

	/// Current site address: the "DOMAIN" setting when it holds a URL, otherwise the default.
	pub fn base(&self) -> String {
		let d: String = defaults_get::<String>("DOMAIN").unwrap_or_default();
		let d = d.trim();
		let b = if d.starts_with("http://") || d.starts_with("https://") {
			d
		} else {
			self.info.default_base
		};
		b.trim_end_matches('/').to_owned()
	}

	fn config_json(&self) -> String {
		let mut m = serde_json::Map::new();
		m.insert("DOMAIN".into(), Value::String(self.base()));
		Value::Object(m).to_string()
	}

	fn eval(&self, js: &str) -> Result<String> {
		Ok(self.ctx.eval(js)?)
	}

	fn fetch_all(&self, reqs: Vec<Req>) -> String {
		let mut ids = Vec::with_capacity(reqs.len());
		let mut urls = Vec::with_capacity(reqs.len());
		let mut built = Vec::with_capacity(reqs.len());
		let mut out: Vec<Res> = Vec::with_capacity(reqs.len());
		for r in reqs {
			match Request::new(&r.u, method(&r.m)) {
				Ok(mut q) => {
					if let Some(h) = &r.h {
						for (k, v) in h {
							let v = match v {
								Value::String(s) => s.clone(),
								other => other.to_string(),
							};
							q.set_header(k.as_str(), v.as_str());
						}
					}
					if let Some(b) = &r.b {
						q.set_body(b.as_bytes());
					}
					ids.push(r.i);
					urls.push(r.u);
					built.push(q);
				}
				Err(_) => out.push(Res {
					i: r.i,
					s: 0,
					u: r.u,
					h: serde_json::Map::new(),
					b: String::new(),
					e: Some("invalid url".into()),
				}),
			}
		}
		let results = if built.len() == 1 {
			vec![built.pop().unwrap().send()]
		} else {
			Request::send_all(built)
		};
		for ((i, u), res) in ids.into_iter().zip(urls).zip(results) {
			match res {
				Ok(resp) => {
					let mut h = serde_json::Map::new();
					for name in RESPONSE_HEADERS {
						if let Some(v) = resp.get_header(name) {
							h.insert(name.into(), Value::String(v));
						}
					}
					let status = resp.status_code();
					let final_url = resp.get_url().unwrap_or_else(|| u.clone());
					let body = resp.get_data().map(|d| base64(&d)).unwrap_or_default();
					out.push(Res { i, s: status, u: final_url, h, b: body, e: None });
				}
				Err(e) => out.push(Res {
					i,
					s: 0,
					u,
					h: serde_json::Map::new(),
					b: String::new(),
					e: Some(format!("{e:?}")),
				}),
			}
		}
		serde_json::to_string(&out).unwrap_or_else(|_| "[]".into())
	}

	/// Run one engine operation to completion, performing its HTTP requests on the way.
	pub fn call<T: DeserializeOwned>(&self, op: &str, args: Value) -> Result<T> {
		let id = self.eval(&format!(
			"__A.start({},{},{})",
			js_str(op),
			js_str(&args.to_string()),
			js_str(&self.config_json())
		))?;
		if id.parse::<u64>().is_err() {
			bail!("JavaScript engine not loaded ({id})");
		}
		let mut idle = 0;
		for _ in 0..5000 {
			let raw = self.eval(&format!("__A.poll({id})"))?;
			let step: Step = serde_json::from_str(&raw)
				.map_err(|_| AidokuError::message(format!("bad engine state: {raw}")))?;
			if let Some(st) = step.st {
				defaults_set(STORE_KEY, DefaultValue::String(st));
			}
			match step.s.as_str() {
				"d" => {
					return serde_json::from_value(step.v.unwrap_or(Value::Null))
						.map_err(|e| AidokuError::message(format!("{op}: {e}")));
				}
				"e" => bail!("{}", step.m.unwrap_or_else(|| "error".into())),
				"f" => {
					idle = 0;
					let res = self.fetch_all(step.q.unwrap_or_default());
					self.eval(&format!("__A.resume({res})"))?;
				}
				_ => {
					idle += 1;
					if idle > 50 {
						bail!("{op}: engine stalled");
					}
				}
			}
		}
		bail!("{op}: too many steps")
	}

	fn page(&self, r: EntryPage) -> MangaPageResult {
		let rating = if self.info.nsfw { ContentRating::NSFW } else { ContentRating::Safe };
		MangaPageResult {
			entries: r
				.e
				.into_iter()
				.map(|e| Manga {
					url: Some(e.k.clone()),
					key: e.k,
					title: e.t,
					cover: e.c.filter(|c| !c.is_empty()),
					content_rating: rating,
					..Default::default()
				})
				.collect(),
			has_next_page: r.n,
		}
	}

	pub fn search(&self, query: Option<String>, page: i32) -> Result<MangaPageResult> {
		let q = query.unwrap_or_default();
		let r: EntryPage = if q.trim().is_empty() {
			self.call("list", serde_json::json!({ "id": "tab0", "page": page }))?
		} else {
			self.call("list", serde_json::json!({ "q": q, "page": page }))?
		};
		Ok(self.page(r))
	}

	pub fn listing(&self, listing: Listing, page: i32) -> Result<MangaPageResult> {
		let r: EntryPage = self.call("list", serde_json::json!({ "id": listing.id, "page": page }))?;
		Ok(self.page(r))
	}

	pub fn listings(&self) -> Result<Vec<Listing>> {
		let tabs: Vec<Tab> = self.call("listings", serde_json::json!({})).unwrap_or_default();
		let mut out: Vec<Listing> = tabs
			.into_iter()
			.map(|t| Listing { id: t.id, name: t.name, kind: ListingKind::Default })
			.collect();
		if out.is_empty() {
			out.push(Listing { id: "popular".into(), name: "Phổ biến".into(), kind: ListingKind::Default });
		}
		Ok(out)
	}

	pub fn manga(&self, mut manga: Manga, needs_details: bool, needs_chapters: bool) -> Result<Manga> {
		let d: Detail = self.call(
			"manga",
			serde_json::json!({ "k": manga.key, "d": needs_details, "c": needs_chapters }),
		)?;
		if needs_details {
			if let Some(t) = d.t.filter(|t| !t.is_empty()) {
				manga.title = t;
			}
			if let Some(c) = d.c.filter(|c| !c.is_empty()) {
				manga.cover = Some(c);
			}
			manga.authors = d.a.filter(|a| !a.is_empty());
			manga.description = d.d.filter(|x| !x.is_empty());
			manga.tags = d.g.filter(|g| !g.is_empty());
			manga.status = match d.s {
				Some(1) => MangaStatus::Ongoing,
				Some(2) => MangaStatus::Completed,
				_ => MangaStatus::Unknown,
			};
			manga.content_rating = if self.info.nsfw { ContentRating::NSFW } else { ContentRating::Safe };
			manga.viewer = if self.info.comic && self.info.webtoon { Viewer::Webtoon } else { Viewer::Unknown };
			manga.update_strategy = if manga.status == MangaStatus::Completed {
				UpdateStrategy::Never
			} else {
				UpdateStrategy::Always
			};
			manga.url = Some(manga.key.clone());
		}
		if needs_chapters {
			manga.chapters = Some(
				d.ch
					.unwrap_or_default()
					.into_iter()
					.map(|c| Chapter {
						url: Some(c.k.clone()),
						key: c.k,
						title: c.t,
						chapter_number: c.n,
						locked: c.l,
						..Default::default()
					})
					.collect(),
			);
		}
		Ok(manga)
	}

	pub fn pages(&self, chapter: Chapter) -> Result<Vec<Page>> {
		let r: PageSet = self.call("pages", serde_json::json!({ "k": chapter.key }))?;
		if let Some(x) = r.x {
			return Ok(vec![Page { content: PageContent::text(x), ..Default::default() }]);
		}
		Ok(r
			.p
			.unwrap_or_default()
			.into_iter()
			.map(|p| {
				let mut ctx = PageContext::new();
				if let Some(r) = p.r {
					ctx.insert("referer".into(), r);
				}
				Page { content: PageContent::url_context(p.u, ctx), ..Default::default() }
			})
			.collect())
	}

	/// Image CDNs of Vietnamese sites (truyenvua, hinhtruyen, cc3t…) answer 403 without the site's Referer.
	pub fn image_request(&self, url: String, context: Option<PageContext>) -> Result<Request> {
		let referer = context
			.and_then(|c| c.get("referer").cloned())
			.unwrap_or_else(|| self.base() + "/");
		let mut req = Request::get(&url)?;
		req.set_header("Referer", referer.as_str());
		if !self.ua.is_empty() {
			req.set_header("User-Agent", self.ua.as_str());
		}
		req.set_header("Accept", "image/avif,image/webp,image/apng,image/*,*/*;q=0.8");
		Ok(req)
	}

	pub fn base_url(&self) -> Result<String> {
		Ok(self.base().to_string())
	}
}
