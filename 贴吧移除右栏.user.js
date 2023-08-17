// ==UserScript==
// @name         贴吧移除右栏
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tieba.baidu.com/index.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        function cl(){
            $('#right_wrap').remove();
            }
        var timer = setTimeout(cl, 1000);
    // Your code here...
})();