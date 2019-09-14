import React, { createContext, useState, useRef } from 'react';
import { useTrail, useSpring, config } from 'react-spring';
import { delay } from 'q';
import { easeExp } from 'd3-ease';

export const OmegaHotelContext = createContext();

export function OmegaHotelProvider(props) {
  const columnBarRef = useRef();
  // const trns = useSpring({
  //   ref: columnBarRef,
  //   from: { height: '0%' },
  //   to: async next => {
  //     await next({ height: '100%' });
  //     await delay(900);
  //     await next({ height: '0%' });
  //   },
  //   delay: 300,
  //   config: { mass: 1, tension: 300, friction: 50 }
  // });
  const [bars] = useState(Array.from({ length: 6 }));
  const transitions = useTrail(bars.length, {
    ref: columnBarRef,
    from: { height: '0%' },
    //height: '100%',
    to: async next => {
      await next({ height: '100%' });
      await delay(1000);
      await next({ height: '0%' });
    },
    // enter: item => async (next, cancel) => {
    //   await next({ height: '100%' });
    //   await delay(1000);
    //   await next({ height: '0%' });
    // },
    config: { duration: 1400, easing: easeExp }
  });

  return (
    <OmegaHotelContext.Provider value={{ transitions, columnBarRef }}>
      {props.children}
    </OmegaHotelContext.Provider>
  );
}
