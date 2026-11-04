load('config.js');

function execute() {
    return Response.success([
        { title: '人气', input: '/novels/hot', script: 'gen2.js' },
        { title: '人气连载', input: '/novels/monthvisit_0_0_1.htm', script: 'gen.js' },
        { title: '人气全本', input: '/novels/monthvisit_0_1_1.htm', script: 'gen.js' },
        { title: '推荐', input: '/novels/allvote_0_0_1.htm', script: 'gen.js' },
    ]);
}