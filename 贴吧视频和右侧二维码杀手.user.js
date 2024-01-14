// ==UserScript==
// @name         贴吧视频和右侧二维码杀手
// @namespace    qtqz
// @version      0.2
// @description  清除贴吧帖子列表页的视频，减少流量消耗；屏蔽难看突兀的二维码
// @include      https://tieba.baidu.com/f?*
// @author       qtqz
// @icon         https://http://tb3.bdstatic.com/public/icon/favicon-v2.ico
// @grant        none
// ==/UserScript==
// 0.2 去除视频占位

(function() {
    function cl(){
        console.log('start');
        $('.threadlist_video').empty();
        $('.app_download_wrap').empty();
    }
    var timer = setInterval(cl, 500);
    //window.onloadparentNode.parentNode.
})();