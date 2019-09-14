import React, { useContext } from 'react';
import { IntroBarContext } from '../../../context/OmegaHotelContext';
import { animated } from 'react-spring';

// Component styles
import styles from './styles';

const ColumnBar = () => {
  const classes = styles();
  const { barTransition } = useContext(IntroBarContext);

  return (
    <div className={classes.root}>
      {barTransition.map(({ height, props }, index) => (
        <animated.div
          className={classes.box}
          key={index}
          style={{ height }}
        ></animated.div>
      ))}
    </div>
  );
};

export default ColumnBar;
