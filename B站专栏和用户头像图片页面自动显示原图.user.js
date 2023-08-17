// ==UserScript==
// @name         B站专栏和用户头像图片页面自动显示原图
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://*.hdslb.com/bfs/*.webp
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hdslb.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let at=location.href.search(/[@]/g)
	let trueHref=location.href.slice(0,at)
    window.location.href=trueHref;
})();