// ==UserScript==
// @name         贴吧屏蔽包打听
// @namespace    qtqz
// @version      0.2
// @description  屏蔽包打听难看的头像和没用的发言，但保留它存在过的痕迹
// @author       qtqz
// @match        https://tieba.baidu.com/p/*
// @icon         https://tieba.baidu.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

        var node = document.createElement("style");
        node.appendChild(document.createTextNode(`
        img[username='贴吧包打听'] {
            display: none;
}
    `));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            document.documentElement.appendChild(node);
        }
    setTimeout(()=>{
        $("img[username='贴吧包打听']").parents(".d_author").next().children(".p_content").empty()
    },100)
})();