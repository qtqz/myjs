// ==UserScript==
// @name         飞书文档移除水印
// @namespace    qtqz
// @version      0.1
// @description  移除泄露隐私的水印
// @author       qtqz
// @match        https://*.feishu.cn/docx/*
// @match        https://*.feishu.cn/wiki/*
// @icon         https://feishu.cn/favicon.ico
// @grant        none
// ==/UserScript==

//created 2023.11

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