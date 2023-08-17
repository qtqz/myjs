// ==UserScript==
// @name         果核剥壳去除广告提示
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  果核剥壳去除广告提示
// @author       You
// @match        https://www.ghxi.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ghxi.com
// @grant        none
// ==/UserScript==
(function() {
    /*
    'use strict';
    function addAdNote() {console.log(0);return;};
    console.log(1);
    // Your code here...
    console.log(4);
    window.setTimeout(() => {if (jQuery('.wpcom_ad_wrap').css('display') == 'none') {addAdNote();}}, 3000);
    function addAdNote(){console.log(3);};*/
    var qc = setTimeout(function (){
        $('body>div:last').hide();
        console.log(7);
 }, 3001);
/*
    var addAdNote=null;
    console.log(6);*/
/*
    function qcTime (){
    var qc = setInterval(function (){}, 1);
    for (var i = 0; i< qc; i++){
            clearInterval(i);
        }
    console.log(5);
    }
    qcTime ();*/
})();
