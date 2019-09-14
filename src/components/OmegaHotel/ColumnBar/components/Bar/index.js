import React, { useContext, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { delay } from 'q';
import { OmegaHotelContext } from '../../../../../context/omegaHotelContext';

// Component styles
import styles from './styles';

const Bar = ({ pause, transitionProps }) => {
  const classes = styles();

  const { trns } = useContext(OmegaHotelContext);

  // const props = useSpring({
  //   from: { height: '0%' },
  //   to: async next => {
  //     await next({ height: '100%' });
  //     await delay(900);
  //     await next({ height: '0%' });
  //   },
  //   delay: pause,
  //   config: { mass: 1, tension: 300, friction: 50 }
  // });

  return <animated.div className={classes.root} style={trns}></animated.div>;
};

export default Bar;
