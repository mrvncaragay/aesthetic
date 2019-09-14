import React, { useContext } from 'react';
import { IntroTextContext } from '../../../context/OmegaHotelContext';
import { animated } from 'react-spring';

// Component styles
import styles from './styles';

const IntroText = () => {
  const classes = styles();
  const { textTransition } = useContext(IntroTextContext);

  return (
    <div className={classes.root}>
      {textTransition.map(({ item, props }, index) => (
        <animated.span className={classes.text} key={index} style={props}>
          {item}
        </animated.span>
      ))}
    </div>
  );
};

export default IntroText;
