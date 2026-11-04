import { fileURLToPath } from 'node:url';
// Converts synchronous vBook (Rhino) scripts into async JavaScript that runs in Promise-based hosts
// (Mangayomi QuickJS, LNReader Hermes, IReader, Node). Strategy:
//   1. every call to fetch()/sleep()/Http builder terminal methods becomes `await ...`
//   2. any function that (directly) contains an await becomes async; calls to it are awaited (fixpoint)
//   3. array callbacks that became async are routed through __amap/__aforEach/... helpers
// Over-approximation is safe: awaiting a non-promise value is a no-op.
import { createRequire } from 'node:module';
import path from 'node:path';
import fs from 'node:fs';

const here = path.dirname(fileURLToPath(import.meta.url));
const candidates = [path.join(here, '../../../_work/deps/node_modules'), path.join(here, '../../node_modules'), path.join(here, '../../../deps/node_modules'), '/opt/node-tools/node_modules'];
let req = null;
for (const c of candidates) if (fs.existsSync(path.join(c, 'acorn'))) { req = createRequire(path.join(c, 'x.js')); break; }
if (!req) throw new Error('acorn/escodegen not found; run npm install');
const acorn = req('acorn');
const walk = req('acorn-walk');
const escodegen = req('escodegen');

const ARRAY_HELPERS = { map: '__amap', forEach: '__aforEach', filter: '__afilter', some: '__asome', every: '__aevery', find: '__afind', flatMap: '__aflatMap', reduce: '__areduce' };
const BASE_ASYNC = new Set(['fetch', 'sleep']);
const CHAIN_TERMINALS = new Set(['html', 'string', 'text', 'json']);

function isFn(n) { return n && (n.type === 'FunctionDeclaration' || n.type === 'FunctionExpression' || n.type === 'ArrowFunctionExpression'); }

function rootCallee(node) {
  // for a.b().c().d() returns the innermost callee expression of the chain
  let n = node;
  while (n) {
    if (n.type === 'CallExpression') n = n.callee;
    else if (n.type === 'MemberExpression') { if (n.object.type === 'CallExpression' || n.object.type === 'MemberExpression') n = n.object; else return n; }
    else return n;
  }
  return n;
}
function isHttpBuilderChain(call) {
  if (call.callee.type !== 'MemberExpression' || call.callee.property.type !== 'Identifier' || !CHAIN_TERMINALS.has(call.callee.property.name)) return false;
  const r = rootCallee(call.callee.object);
  return r && r.type === 'MemberExpression' && r.object.type === 'Identifier' && r.object.name === 'Http';
}
function calleeName(call) {
  const c = call.callee;
  if (c.type === 'Identifier') return c.name;
  if (c.type === 'MemberExpression' && !c.computed && c.property.type === 'Identifier') return '.' + c.property.name;
  return null;
}
function fnName(fn, parent) {
  if (fn.id && fn.id.name) return fn.id.name;
  if (parent) {
    if (parent.type === 'VariableDeclarator' && parent.id.type === 'Identifier') return parent.id.name;
    if (parent.type === 'AssignmentExpression' && parent.left.type === 'Identifier') return parent.left.name;
    if (parent.type === 'AssignmentExpression' && parent.left.type === 'MemberExpression' && parent.left.property.type === 'Identifier') return '.' + parent.left.property.name;
    if (parent.type === 'Property' && parent.key) return '.' + (parent.key.name || parent.key.value);
  }
  return null;
}

export function asyncify(code, opts = {}) {
  const ast = acorn.parse(code, { ecmaVersion: 'latest', sourceType: 'script', allowReturnOutsideFunction: true, allowAwaitOutsideFunction: true });
  // collect functions with parent links
  const fns = [];
  const parents = new Map();
  walk.fullAncestor(ast, (node, _st, ancestors) => {
    if (isFn(node)) { const p = ancestors[ancestors.length - 2]; parents.set(node, p); fns.push(node); }
  });
  const asyncNames = new Set(BASE_ASYNC);
  const asyncFns = new Set();
  const userNamed = new Map(); // name -> fns
  for (const f of fns) { const n = fnName(f, parents.get(f)); f.__name = n; if (n) { if (!userNamed.has(n)) userNamed.set(n, []); userNamed.get(n).push(f); } }

  const directCalls = (fn) => {
    const out = [];
    const visit = (node, inner) => {
      if (!node || typeof node.type !== 'string') return;
      if (node !== fn && isFn(node)) { out.push({ kind: 'fn', node }); return; } // nested fn handled separately
      if (node.type === 'CallExpression') out.push({ kind: 'call', node });
      for (const k of Object.keys(node)) {
        if (k === '__name') continue;
        const v = node[k];
        if (Array.isArray(v)) v.forEach(x => x && typeof x.type === 'string' && visit(x));
        else if (v && typeof v.type === 'string') visit(v);
      }
    };
    visit(fn.body);
    return out;
  };
  const programScope = { body: ast, type: 'Program' };
  const scopes = [...fns];

  const callIsAsync = (call) => {
    if (isHttpBuilderChain(call)) return true;
    const n = calleeName(call);
    if (!n) return false;
    if (n.startsWith('.')) {
      const prop = n.slice(1);
      if (ARRAY_HELPERS[prop] && call.arguments[0] && isFn(call.arguments[0]) && asyncFns.has(call.arguments[0])) return true;
      // method defined in this script under that property name
      return userNamed.has(n) && userNamed.get(n).some(f => asyncFns.has(f));
    }
    return asyncNames.has(n) && (BASE_ASYNC.has(n) || (userNamed.has(n) && userNamed.get(n).some(f => asyncFns.has(f))));
  };
  // fixpoint
  let changed = true, guard = 0;
  while (changed && guard++ < 50) {
    changed = false;
    for (const f of fns) {
      if (asyncFns.has(f)) continue;
      if (f.async) { asyncFns.add(f); changed = true; continue; }
      const items = directCalls(f);
      if (items.some(it => it.kind === 'call' && callIsAsync(it.node)) || items.some(it => it.kind === 'call' && false)) {
        asyncFns.add(f); if (f.__name) asyncNames.add(f.__name); changed = true;
      }
    }
  }
  // always make execute async
  for (const f of fns) if (f.__name === 'execute' && !asyncFns.has(f)) { asyncFns.add(f); }

  // rewrite: mark async, wrap calls with await (post-order so inner calls are handled)
  const rewrite = (node) => {
    if (!node || typeof node.type !== 'string') return node;
    for (const k of Object.keys(node)) {
      if (k === '__name') continue;
      const v = node[k];
      if (Array.isArray(v)) node[k] = v.map(x => (x && typeof x.type === 'string') ? rewrite(x) : x);
      else if (v && typeof v.type === 'string') node[k] = rewrite(v);
    }
    if (isFn(node) && asyncFns.has(node)) { node.async = true; node.generator = false; }
    if (node.type === 'CallExpression' && callIsAsync(node)) {
      const n = calleeName(node);
      if (n && n.startsWith('.') && ARRAY_HELPERS[n.slice(1)] && node.arguments[0] && isFn(node.arguments[0]) && asyncFns.has(node.arguments[0])) {
        node = { type: 'CallExpression', callee: { type: 'Identifier', name: ARRAY_HELPERS[n.slice(1)] }, arguments: [node.callee.object, ...node.arguments], optional: false };
      }
      return { type: 'AwaitExpression', argument: node };
    }
    return node;
  };
  rewrite(ast);
  return escodegen.generate(ast, { format: { compact: !!opts.compact, semicolons: true } });
}

export const ASYNC_HELPERS = `
async function __amap(a,f){a=a||[];var o=[];for(var i=0;i<a.length;i++)o.push(await f(a[i],i,a));return o}
async function __aforEach(a,f){a=a||[];for(var i=0;i<a.length;i++)await f(a[i],i,a)}
async function __afilter(a,f){a=a||[];var o=[];for(var i=0;i<a.length;i++)if(await f(a[i],i,a))o.push(a[i]);return o}
async function __asome(a,f){a=a||[];for(var i=0;i<a.length;i++)if(await f(a[i],i,a))return true;return false}
async function __aevery(a,f){a=a||[];for(var i=0;i<a.length;i++)if(!(await f(a[i],i,a)))return false;return true}
async function __afind(a,f){a=a||[];for(var i=0;i<a.length;i++)if(await f(a[i],i,a))return a[i]}
async function __aflatMap(a,f){return [].concat.apply([],await __amap(a,f))}
async function __areduce(a,f,init){a=a||[];var i=0,acc=init;if(arguments.length<3){acc=a[0];i=1}for(;i<a.length;i++)acc=await f(acc,a[i],i,a);return acc}
`;

// CLI self-test
if (process.argv[1] && process.argv[1].endsWith('asyncify.mjs') && process.argv[2]) {
  console.log(asyncify(fs.readFileSync(process.argv[2], 'utf8')));
}
