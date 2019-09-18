import React, { useState, useEffect } from 'react';

// Material UI components
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const AnimateTypography = ({
  effect = '',
  exit = '',
  className = '',
  text,
  delay,
  ...props
}) => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, delay); //3300
  });

  return (
    <div className={classes.container}>
      <Typography
        className={`${classes[effect]} ${className} ${
          animate ? ' animate' : ''
        }`}
        {...props}
      >
        {text}
      </Typography>
    </div>
  );
};

export default AnimateTypography;
