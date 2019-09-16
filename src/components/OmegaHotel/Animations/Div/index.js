import React, { useState, useEffect } from 'react';

// Component styles
import styles from './styles';

const Div = ({ effect = '', className = '', children, delay, ...props }) => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, delay); //3300
  });

  return (
    <div
      className={`${classes[effect]} ${className} ${animate ? ' animate' : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Div;
