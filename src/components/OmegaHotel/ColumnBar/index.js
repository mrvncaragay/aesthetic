import React, { useContext } from 'react';
import { OmegaHotelContext } from '../../../context/omegaHotelContext';
import { animated } from 'react-spring';

// Shared component
import { Bar } from './components';

// Component styles
import styles from './styles';

const ColumnBar = () => {
  const classes = styles();
  const { transitions } = useContext(OmegaHotelContext);

  return (
    <div className={classes.root}>
      {transitions.map(({ height, props }, index) => (
        <animated.div
          className={classes.box}
          key={index}
          style={{ height }}
        ></animated.div>
      ))}
      {/* <Bar pause={300} />
      <Bar pause={330} />
      <Bar pause={360} />
      <Bar pause={390} />
      <Bar pause={420} />
      <Bar pause={450} /> */}
    </div>
  );
};

export default ColumnBar;
