load('config.js');

function execute(url) {
    let doc = fetchDoc(url);
    if (!doc) return Response.error('Không tải được.');

    let box = doc.select('.txtnav').first()
        || doc.select('#chaptercontent').first()
        || doc.select('#BookText').first()
        || doc.select('.content').first()
        || doc.select('#content').first()
        || doc.select('.showtxt').first()
        || doc.select('#htmlContent').first();

    if (!box) return Response.error('Không thấy nội dung.');

    box.select('script, style, ins, iframe, .adsbygoogle, .contentadv, .bottom-ad, .txtinfo, #txtright, h1').remove();
    let html = box.html();
    if (!html || html.trim().length < 10) {
        html = box.text();
    }
    if (!html || html.trim().length < 10) return Response.error('Trống.');

    html = html.replace(/&emsp;/g, '');
    html = html.replace(/&nbsp;/g, ' ');
    // collapse multiple <br> to single <br>
    html = html.replace(/(<br\s*\/?>\s*){2,}/gi, '<br>');
    html = html.replace(/^第\d+章.*?<br>/i, '');
    html = html.replace('(本章完)', '');
    return Response.success(html);
}