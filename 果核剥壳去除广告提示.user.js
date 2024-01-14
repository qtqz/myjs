// ==UserScript==
// @name         果核剥壳去除广告提示
// @namespace    qtqz
// @version      0.7
// @description  果核剥壳去除广告提示
// @author       qtqz
// @match        https://www.ghxi.com/*
// @icon         https://www.ghxi.com/favicon.ico
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var qc = setTimeout(function (){
        $('body>div:last').hide();
        console.log(7);
 }, 3001);
})();
