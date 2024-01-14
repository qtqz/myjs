// ==UserScript==
// @name         B站关注列表自动按最近关注排序
// @namespace    qtqz
// @version      0.2
// @description  关注列表自动按最近关注排序，避免在混乱的顺序中找不到人
// @author       qtqz
// @match        /https:\/\/space.bilibili.com\/\d*/fans/fo.*/
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

//created 2022.8

(function() {
    'use strict';
        function cl(){
            $('.follow-tabs').children().eq(1).trigger('click');
            }
        var timer = setTimeout(cl, 2000);
})();