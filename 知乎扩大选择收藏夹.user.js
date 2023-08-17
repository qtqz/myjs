// ==UserScript==
// @name         知乎扩大选择收藏夹
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/follow
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  setTimeout(() => {
      //加载完所有收藏夹后点一下头像启用
    document.querySelector('.AppHeader-inner').lastChild.lastChild.addEventListener('click', () => {
      var node = document.createElement("style");
      node.type = "text/css";
      node.appendChild(document.createTextNode(`
    .Favlists-item {
    width: 33%!important;
    display: inline-block!important;
}
    .Favlists-items {
    max-height: unset!important;
}
    .Modal--large {
    width: 1000px!important;
}
    `));
      var heads = document.getElementsByTagName("head");
      if (heads.length > 0) {
        heads[0].appendChild(node);
      } else {
        document.documentElement.appendChild(node);
      }
    })
  }, 3000);
})();