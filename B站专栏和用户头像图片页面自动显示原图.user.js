// ==UserScript==
// @name         B站专栏和用户头像图片页面自动显示原图
// @namespace    qtqz
// @version      0.2
// @description  B站专栏和用户头像图片页面自动显示原图，方便保存
// @author       qtqz
// @match        https://*.hdslb.com/bfs/*.webp
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let at=location.href.search(/[@]/g)
    if(at!=-1){
	let trueHref=location.href.slice(0,at)
    window.location.href=trueHref;}
})();