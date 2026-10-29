// ==UserScript==
// @name         osugacha.com 概率查看
// @namespace    local
// @version      1.1
// @match        https://osugacha.com/*
// @match        https://www.osugacha.com/*
// @include      https://cdn.jsdelivr.net/gh/*
// @run-at       document-idle
// @grant unsafeWindow
// @webRequest   { "selector": "https://osugacha.com/assets/rpg-*.js", "action": { "redirect": "https://cdn.jsdelivr.net/gh/centimeter100/wormhole@e2cc9a4/test.js" }}
// ==/UserScript==

(() => {
  'use strict';

  const ORIGIN = 'https://osugacha.com/assets/rpg-D1GQD8jb.js';

  // vibing!

  const HOST_ID = 'tm-fixed-panel-host';

  // 防止重复注入（SPA 场景下脚本可能被执行多次）
  if (document.getElementById(HOST_ID)) return;

  /* ========== 1. 宿主元素 + Shadow DOM ========== */
  const host = document.createElement('div');
  host.id = HOST_ID;
  host.style.cssText =
    'all: initial; position: fixed; bottom: 16px; right: 16px; z-index: 2147483647;';
  document.documentElement.appendChild(host);

  const shadow = host.attachShadow({ mode: 'open' });

  /* ========== 2. 样式 ========== */
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .panel {
      width: 280px;
      box-sizing: border-box;
      padding: 12px;
      font: 13px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI",
            "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
      color: #e6edf3;                     /* 浅色文字，适配深色背景 */
      background: rgba(0, 0, 0, 0.65);    /* 黑色半透明背景 */
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 10px;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(8px);         /* 可选：毛玻璃效果 */
      -webkit-backdrop-filter: blur(8px);
    }
  `;
  shadow.appendChild(styleEl);

  const panel = document.createElement('div');
  panel.className = 'panel';
  panel.innerHTML = `
    <div class="title">随机数</div>
    <div class="line"><span>当前 RNG </span><span class="val" id="v-rng">0</span></div>
    <div class="line"><span>第 1 个随机数</span><span class="val" id="v-rand1">0</span></div>
    <div class="line"><span>第 2 个随机数</span><span class="val" id="v-rand2">0</span></div>
    <div class="line"><span>第 3 个随机数</span><span class="val" id="v-rand3">0</span></div>
    <div class="line"><span>第 4 个随机数</span><span class="val" id="v-rand4">0</span></div>
    <div class="line"><span>查看随机数和概率数值, 低于概率数值则必定触发</span></div>
  `

  shadow.appendChild(panel);

  const elRng = panel.querySelector('#v-rng');
  const elRand1 = panel.querySelector('#v-rand1');
  const elRand2 = panel.querySelector('#v-rand2');
  const elRand3 = panel.querySelector('#v-rand3');
  const elRand4 = panel.querySelector('#v-rand4');

  let rafId = null;

  function tick(now) {
    let rng = unsafeWindow.rng;
    let nextProb = unsafeWindow.nextProb;

    if (rng && nextProb) {
        let initState = rng.getState();
        let state = initState;
        
        let rands = [];
        
        for (let i = 0; i < 4; ++ i) {
          let step = nextProb(state);
          let rand = step.prob;
          state = step.next;
          rands.push(rand);
        }
        
        // 只在需要时更新，避免无谓的写入
        elRng.textContent = initState;
        elRand1.textContent = `${(rands[0] * 100).toFixed(4)} %`
        elRand2.textContent = `${(rands[1] * 100).toFixed(4)} %`
        elRand3.textContent = `${(rands[2] * 100).toFixed(4)} %`
        elRand4.textContent = `${(rands[3] * 100).toFixed(4)} %`
    }

    // 继续下一帧
    rafId = requestAnimationFrame(tick);
  }

  rafId = requestAnimationFrame(tick);
})();