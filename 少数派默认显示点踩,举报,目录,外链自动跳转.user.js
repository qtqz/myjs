// ==UserScript==
// @name         少数派默认显示点踩,举报,目录,外链自动跳转
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       You
// @match        https://sspai.com/post/*
// @match        https://sspai.com/link?target=*
// @icon         https://www.google.com/s2/favicons?domain=sspai.com
// @grant        none
// ==/UserScript==

(function() {
    /*
    var xs = setInterval(function (){
        $('.btn-dislike,.btn-report').css('visibility','initial');
 }, 20000);*/
    //外链自动跳转
    //0.4
    if(location.href.match(/target=/i)){
	var trueHref=decodeURIComponent(location.href.substr(30))
	window.location.href=trueHref;
}else{
    //默认显示点踩,举报,目录
    //0.2
    var node = document.createElement("style");
    node.type = "text/css";
    node.appendChild(document.createTextNode(`
        .btn-dislike,.btn-report {
        visibility: initial!important;
        }
        .right-side-directory .item .title {
        opacity: 1!important;
        }
    `));
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        heads[0].appendChild(node);
    } else {
        document.documentElement.appendChild(node);
    }
}
})();