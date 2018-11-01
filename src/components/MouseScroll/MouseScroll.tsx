import * as React from 'react';
import { Mouse, Scroll } from './MouseScroll.style';

// props goes to https://gist.github.com/andjosh/6764939

function scrollTo(element: any, to: number, duration: number) {
  let start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 20;

  let animateScroll = function() {
    currentTime += increment;
    let val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

let easeInOutQuad = function(
  currentTime: number,
  start: number,
  change: number,
  duration: number,
) {
  currentTime /= duration / 2;
  if (currentTime < 1) return (change / 2) * currentTime * currentTime + start;
  currentTime--;
  return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
};

const MouseScroll = () => {
  const onClick = () => {
    const el = document.querySelector('#cover-container');
    const body = document.scrollingElement || document.documentElement;
    scrollTo(body, el.clientHeight, 2000);
  };
  return (
    <Mouse onClick={onClick}>
      <Scroll />
    </Mouse>
  );
};

export default MouseScroll;
