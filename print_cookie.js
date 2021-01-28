const $ = new Env('领京豆额外奖励');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
Object.keys(jdCookieNode).forEach((item) => {
    console.log(jdCookieNode[item])
})