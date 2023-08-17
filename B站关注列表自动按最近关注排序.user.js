// ==UserScript==
// @name         B站关注列表自动按最近关注排序
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://space.bilibili.com/272073535/fans/fo*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        function cl(){
            $('.follow-tabs').children().eq(1).trigger('click');
            }
        var timer = setTimeout(cl, 2000);
})();