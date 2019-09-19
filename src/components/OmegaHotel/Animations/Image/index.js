import React, { useState, useEffect } from 'react';

// Component styles
import styles from './styles';

const AnimateImage = ({ effect = '', exit = '', delay, ...props }) => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, delay); //3300
  });

  return (
    <div className={`${classes.root}`}>
      <div
        {...props}
        className={`${classes.backgroundImage} ${classes[effect]}  ${
          animate ? 'animate' : ''
        }`}
      />
    </div>
  );
};

export default AnimateImage;
