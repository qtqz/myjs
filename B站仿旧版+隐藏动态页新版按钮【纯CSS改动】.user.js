// ==UserScript==
// @name         B站仿旧版+隐藏动态页新版按钮【纯CSS改动】
// @namespace    qtqz
// @version      0.3
// @description  拒绝老年版页面！缩小视频页部分UI，还原用户动态页转发等UI，隐藏动态首页新版按钮（此脚本并非100%还原旧版）
// @author       qtqz
// @match        https://t.bilibili.com/
// @match        https://www.bilibili.com/video/*
// @match        https://space.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

//created 2023.11

(function () {
    'use strict';
   
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

        .bili-dyn-item__header {
            height: 69px!important;
            padding-top: 23px!important;
        }
        .bili-dyn-content__orig.reference {
            background-color: #f4f5f7!important;
            margin: 12px 0 0 -12px!important;
            padding: 12px 14px!important;
        }
    `));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            document.documentElement.appendChild(node);
        }
/*
font-size: 16px;
line-height: 1.7em;
font-weight: 400;
*/
})();