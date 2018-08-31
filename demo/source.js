/**
 * @since 2015-09-21 13:50
 * @author vivaxy
 */

import Tween from '../src/tween.js';

let ele = document.querySelector('.test'),
  topFrom = 90, topTo = 0, leftFrom = 90, leftTo = 0, vertical, horizon;

let toggleTop = () => {
  let temp = topTo;
  topTo = topFrom;
  topFrom = temp;
  vertical = new Tween(ele)
    .animate({
      style: 'top',
      from: topFrom,
      to: topTo,
      duration: 1000,
      getValue: v => v + '%'
    })
    .on('end', toggleTop)
    .start();
};

let toggleLeft = () => {
  let temp = leftTo;
  leftTo = leftFrom;
  leftFrom = temp;
  horizon = new Tween(ele)
    .animate({
      style: 'left',
      from: leftFrom,
      to: leftTo,
      duration: 1357,
      getValue: (v) => v + '%'
    })
    .on('end', toggleLeft)
    .start();
};

toggleTop();
toggleLeft();
