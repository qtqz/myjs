// ==UserScript==
// @name         贴吧视频杀手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  清除贴吧里的视频
// @include      https://tieba.baidu.com/f?*
// @author       You
// @match        https://greasyfork.org/zh-CN/scripts/23687-%E8%B4%B4%E5%90%A7%E9%A1%B5%E9%9D%A2%E7%B2%BE%E7%AE%80/code
// @icon         https://http://tb3.bdstatic.com/public/icon/favicon-v2.ico
// @grant        none
// 0.2 去除视频占位
// ==/UserScript==

(function() {
    function cl(){
    console.log('start');
    $('.threadlist_video').empty();
    }
    var timer = setInterval(cl, 5000);
    //window.onloadparentNode.parentNode.
})();