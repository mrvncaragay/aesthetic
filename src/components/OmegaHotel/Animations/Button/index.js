import React, { useState, useEffect } from 'react';

// Component styles
import styles from './styles';

export const AnimateButton = ({ children, effect = '', delay, ...props }) => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);
  const effectClassName = `${effect}`;

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, delay); //3300
  });

  return (
    <div
      className={`${classes[effectClassName]} ${animate ? ' animate' : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimateButton;
