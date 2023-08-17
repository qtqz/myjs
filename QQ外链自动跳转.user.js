// ==UserScript==
// @name         QQ外链自动跳转
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://c.pc.qq.com/middlem.html?pfurl=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qq.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
      setTimeout(() => {
        let trueHref = document.querySelector('#url').textContent
        window.location.href = trueHref
      }, 2000)
})();