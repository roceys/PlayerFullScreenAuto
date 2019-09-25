// ==UserScript==
// @name         Player FullScreen Auto
// @name:zh-CN 虎牙\批站自动全屏宽屏播放器
// @namespace   https://roceys.cn
// @version      20190925
// @description Auto Player full screen for web.
// @description:zh-CN  虎牙批站自动网页宽屏/全屏播放器
// @require    https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js
// @require    https://greasyfork.org/scripts/48306-waitforkeyelements/code/waitForKeyElements.js?version=275769
// @inject-into content
// @run-at        document-idle
// @author       Roceys
// @match        *://live.bilibili.com/*
// @match        *://www.huya.com/*
// ==/UserScript==

'use strict'

var selector = {
  'live.bilibili.com': {
    'on': "i[class='live-icon-web-fullscreen']"
  },
  'www.huya.com': {
    'on': "span[class='player-fullpage-btn'][title='剧场模式']"
  }
}

var domain = document.location.hostname;

function openFullScreen() {
  var _click = document.querySelector(selector[domain].on);
  if (_click !== null) {
    _click.click();
  }
}

waitForKeyElements(selector[domain].on, openFullScreen, false);
