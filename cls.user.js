// ==UserScript==
// @name         cls
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.xiaoeknow.com/v1/course/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xiaoeknow.com
// @grant        none
// ==/UserScript==
function qc() {
    $(".portrait-lamp-wrapper,.portrait-copyright-wrapper").remove();
    }
function mm() {
    clearInterval(m);
    }
    setInterval(qc, 3000);
    var m=setInterval(qc, 20);
    setTimeout(mm, 5000);
    qc();

/*
(function() {

})();
*/