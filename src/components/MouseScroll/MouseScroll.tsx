import * as React from 'react';
import { Mouse, Scroll } from './MouseScroll.style';
import { scrollTo } from './../../utils/animations';

const MouseScroll = () => {
  const onClick = () => {
    const el = document.querySelector('#cover-container');
    scrollTo(el.clientHeight, 2000);
  };
  return (
    <Mouse onClick={onClick}>
      <Scroll />
    </Mouse>
  );
};

export default MouseScroll;
