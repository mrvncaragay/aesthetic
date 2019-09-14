import React, { useState } from 'react';
import { useTransition, animated, config } from 'react-spring';

// Component styles
import styles from './styles';
import { delay } from 'q';

const IntroText = ({ transitionProps }) => {
  const classes = styles();
  // const [texts] = useState(['Book,', 'travel,', 'enjoy.']);

  // const transitions = useTransition(texts, null, {
  //   from: { top: '20px' },
  //   //enter: { opacity: 1 },
  //   enter: item => async (next, cancel) => {
  //     await next({ top: '0px' });
  //     await delay(50);
  //     await next({ top: '20px' });
  //   },
  //   trail: 300,
  //   config: config.slow
  // });

  return (
    <div className={classes.root}>
      {transitionProps.map(({ item, props }, index) => (
        <animated.span className={classes.text} key={index} style={props}>
          {item}
        </animated.span>
      ))}
    </div>
  );
};

export default IntroText;
