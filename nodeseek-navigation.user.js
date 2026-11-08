// ==UserScript==
// @name         NodeSeek 顶栏全部分类
// @namespace    local.nodeseek.theme
// @version      1.0.0
// @description  将全部分类链接添加到真正的 #nsk-head .nav-menu，保留搜索、历史记录和主题切换。
// @match        https://www.nodeseek.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==
(() => {
  'use strict';
  const categories = [
    ['daily', '日常'], ['tech', '技术'], ['info', '情报'], ['review', '测评'],
    ['trade', '交易'], ['carpool', '拼车'], ['promotion', '推广'], ['life', '生活'],
    ['dev', 'Dev'], ['photo-share', '贴图'], ['expose', '曝光'], ['inside', '内版'],
    ['meaningless', '无意义'], ['sandbox', '沙盒']
  ];
  const update = () => {
    const menu = document.querySelector('#nsk-head .nav-menu');
    if (!menu) return;
    categories.forEach(([key, name], index) => {
      const href = '/categories/' + key;
      let link = menu.querySelector('a[href="' + href + '"]');
      if (!link) {
        const item = document.createElement('li');
        item.dataset.nsCategory = key;
        link = document.createElement('a');
        link.href = href;
        link.textContent = name;
        item.append(link);
        menu.append(item);
      }
      link.parentElement.style.order = index;
      link.parentElement.classList.toggle('current-category', location.pathname.startsWith(href));
    });
    for (const item of menu.children) {
      if (!item.querySelector('a[href^="/categories/"]')) item.style.order = 100;
    }
  };
  let pending = false;
  new MutationObserver(() => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => { pending = false; update(); });
  }).observe(document.body, { childList: true, subtree: true });
  window.addEventListener('popstate', update);
  update();
})();
