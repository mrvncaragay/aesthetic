import React, { useState, useEffect } from 'react';

// Component styles
import styles from './styles';

export const AnimateButton = ({ children, effect = '', delay, ...props }) => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, delay); //3300
  });

  return (
    <div
      className={`${classes.root} ${classes[effect]} ${
        animate ? ' animate' : ''
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimateButton;
