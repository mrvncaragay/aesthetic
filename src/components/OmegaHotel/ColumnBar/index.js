import React, { useContext } from 'react';
import { IntroBarContext } from '../../../context/OmegaHotelContext';
import { animated } from 'react-spring';

// Component styles
import styles from './styles';

const ColumnBar = () => {
  const classes = styles();

  const { barTransition, isAnimating } = useContext(IntroBarContext);

  return (
    <div className={`${classes.root} ${isAnimating && 'animate'}`}>
      {barTransition.map(({ height }, index) => (
        <animated.div className={classes.box} key={index} style={{ height }} />
      ))}
    </div>
  );
};

export default ColumnBar;
