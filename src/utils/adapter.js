
const docEl = document.documentElement;
const fontEl = document.createElement('style');

// const dpr = window.devicePixelRatio || 1;
const rem = docEl.clientWidth * 1 / 10;

// 设置data-dpr属性，留作的css hack之用
// docEl.setAttribute('data-dpr', dpr);

// 动态写入样式
docEl.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';

