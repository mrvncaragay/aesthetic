import { useState, useRef } from 'react';
import { useTransition } from 'react-spring';
import { delay } from 'q';
import { easeExp } from 'd3-ease';

export default () => {
  const textRef = useRef();
  const [texts] = useState(['Book,', 'travel,', 'enjoy.']);
  const transitions = useTransition(texts, null, {
    ref: textRef,
    from: { top: '20px' },
    enter: () => async next => {
      await next({ top: '0px' });
      await delay(100);
      await next({ top: '20px' });
    },
    trail: 400,
    config: { duration: 1100, easing: easeExp }
  });

  return [transitions, textRef];
};
