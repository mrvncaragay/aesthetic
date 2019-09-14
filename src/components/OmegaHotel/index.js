import React, { useRef, useState, useContext } from 'react';
import { OmegaHotelContext } from '../../context/omegaHotelContext';
import { easeExp } from 'd3-ease';

import {
  useTransition,
  useSpring,
  animated,
  config,
  useChain
} from 'react-spring';
import { delay } from 'q';

// Shared component
import ColumnBar from './ColumnBar';
import IntroText from './IntroText';

const OmegaHotel = () => {
  const { columnBarRef } = useContext(OmegaHotelContext);

  // const columnBarRef = useRef();
  // const props = useSpring({
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

  const textRef = useRef();
  const [texts] = useState(['Book,', 'travel,', 'enjoy.']);
  const transitions = useTransition(texts, null, {
    ref: textRef,
    from: { top: '20px' },
    enter: item => async (next, cancel) => {
      await next({ top: '0px' });
      await delay(100);
      await next({ top: '20px' });
    },
    trail: 400,
    config: { duration: 1100, easing: easeExp }
  });

  useChain([columnBarRef, textRef], [0, 0.5] /*1000*/);
  return (
    <>
      <ColumnBar />
      <IntroText transitionProps={transitions} />
    </>
  );
};

export default OmegaHotel;
