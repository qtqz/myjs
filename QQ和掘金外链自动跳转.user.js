// ==UserScript==
// @name         QQ和掘金外链自动跳转
// @namespace    qtqz
// @version      0.1
// @description  QQ和掘金外链自动跳转
// @author       qtqz
// @match        https://c.pc.qq.com/middlem.html?pfurl=*
// @match        https://link.juejin.cn/?target=*
// @icon         
// @grant        none
// ==/UserScript==

//updated 2023.10

(function() {
    'use strict';
      setTimeout(() => {
          let trueHref
          if (window.location.host=='link.juejin.cn') trueHref=document.querySelector('.link-content').childNodes[1].childNodes[0].data
          else trueHref =document.querySelector('#url').textContent
        window.location.href=trueHref
      }, 1000)
})();