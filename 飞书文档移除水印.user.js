// ==UserScript==
// @name         飞书文档移除水印
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.feishu.cn/docx/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=feishu.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
setTimeout(() => {
        var node = document.createElement("style");
        node.appendChild(document.createTextNode(`
        .ssrWaterMark {
            display: none!important;
        }
    `));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            document.documentElement.appendChild(node);
        }
    }, 30);
})();