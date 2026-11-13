load('config.js');
// one clip = one episode; the episode URL is the clip's own canonical URL (stable for watch history / resume)
function execute(url) { return Response.success([{ name: 'Xem video', url: url, host: BASE_URL }]); }
