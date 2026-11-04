load('config.js');
load('lib_common.js');
load('lib_generic.js');
function execute() { var t = []; for (var k in G.tabs) t.push({ title: k, input: k, script: "browse.js" }); return Response.success(t); }
