const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
Object.keys(jdCookieNode).forEach((item) => {
    console.log(jdCookieNode[item])
})