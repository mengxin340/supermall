export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};
//节流函数
export function throttle(cb, delay) {
  let last, timer;
  return function () {
    let now = +new Date();
    let arg = arguments;
    if (last && now - last < delay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb.apply(this, arg);
        last = now;
      }, delay);
    }
    else {
      last = now;
      cb.apply(this, arg);
    }
  }
}
export function debounce(cb, delay) {
  let timer;
  if (timer) {
    clearTimeout(timer);
  }
  else {
    timer = setTimeout(() => {
      cb.apply(this);
    }, delay);
  }
}