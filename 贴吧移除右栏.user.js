// ==UserScript==
// @name         贴吧移除右栏
// @namespace    qtqz
// @version      0.1
// @description  移除首页右栏的垃圾热搜
// @author       qtqz
// @match        https://tieba.baidu.com/index.html
// @icon         https://tieba.baidu.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        function cl(){
            $('#right_wrap').remove();
            }
        var timer = setTimeout(cl, 300);
    // Your code here...
})();