// ==UserScript==
// @name         知乎扩大选择收藏夹
// @namespace    qtqz
// @version      0.4
// @description  知乎扩大选择收藏夹（加载完所有收藏夹后点一下头像启用）
// @author       qtqz
// @match        https://www.zhihu.com/follow
// @match        https://www.zhihu.com/pin/*
// @match        https://www.zhihu.com/people/*
// @match        https://www.zhihu.com/question/*
// @match        https://www.zhihu.com/answer/*
// @match        https://www.zhihu.com/collection/*
// @match        https://zhuanlan.zhihu.com/p/*
// @icon         https://www.zhihu.com/favicon.ico
// @grant        none
// ==/UserScript==

//created 2023.10

(function () {
  'use strict';
  setTimeout(() => {
      /*//屏蔽新加的标题下点赞者提示
      var node0 = document.createElement("style");
      node0.type = "text/css";
      node0.appendChild(document.createTextNode(`
    .css-1vqda4a {
    display: none!important;
}
    `));
      var heads = document.getElementsByTagName("head");
      if (heads.length > 0) {
        heads[0].appendChild(node0);
      } else {
        document.documentElement.appendChild(node0);
      }*/
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
  }, 1000);
})();