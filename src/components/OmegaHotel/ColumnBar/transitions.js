import { useState, useRef } from 'react';
import { useTrail } from 'react-spring';
import { delay } from 'q';
import { easeExp } from 'd3-ease';

export default () => {
  const columnBarRef = useRef();
  const [bars] = useState(Array.from({ length: 6 }));

  const transitions = useTrail(bars.length, {
    ref: columnBarRef,
    from: { height: '0%' },
    to: async next => {
      await next({ height: '100%' });
      await delay(1000);
      await next({ height: '0%' });
    },

    config: { duration: 1400, easing: easeExp }
  });

  return [transitions, columnBarRef];
};
