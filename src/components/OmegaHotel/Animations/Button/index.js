import React, { useState, useEffect } from 'react';

// Material UI components
import IconButton from '@material-ui/core/IconButton';

// Component styles
import styles from './styles';

export const AnimateButton = ({
  component: Component,
  children,
  effect = '',
  className = '',
  delay,
  ...props
}) => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);
  const effectClassName = `${effect}Icon`;

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, delay); //3300
  });

  return (
    <Component
      className={`${classes[effectClassName]} ${className} ${
        animate ? ' animate' : ''
      }`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimateButton;
