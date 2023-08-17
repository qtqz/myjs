// ==UserScript==
// @name         B站仿旧版+隐藏动态页新版按钮
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://t.bilibili.com/
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setTimeout(() => {
        var node = document.createElement("style");
        node.appendChild(document.createTextNode(`
        .bili-dyn-version-control {
            display: none!important;
        }
        .left-container {
            width: 1090px!important;
        }
        @media (min-width: 1681px){
            .video-container-v1 .right-container {
                width: 350px!important;
            }
            .is-in-large-ab .video-page-card-small .card-box .info .title {
                font-size: 15px!important;
            }
            .video-info-container .video-title {
                font-size: 20px!important;
            }
            .video-info-container {
                height: 96px!important;
            }
            .video-desc-container .basic-desc-info {
                font-size: 14px!important;
                line-height: 22px!important;
            }
            .video-toolbar-left-item .video-toolbar-item-icon {
                width: 30px!important;
                height: 30px!important;
            }
            .base-video-sections-v1 .video-section-list .video-episode-card__info-title {
                font-size: 14px!important;
            }
        }
    `));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            document.documentElement.appendChild(node);
        }
    }, 30);
})();