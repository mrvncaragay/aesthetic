import React, { useState, useEffect } from 'react';

// Material UI components
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// Component styles
import styles from './styles';

export const AnimateTypography = ({
  effect = '',
  className = '',
  text,
  delay,
  ...props
}) => {
  const classes = styles();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, delay); //3300
  });

  return (
    <Typography
      className={`${classes[effect]} ${className} ${animate ? ' animate' : ''}`}
      {...props}
    >
      {text}
    </Typography>
  );
};

export const AnimateIcon = ({
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
    <IconButton
      className={`${classes[effectClassName]} ${className} ${
        animate ? ' animate' : ''
      }`}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export const CircleWithNumber = ({ text, variant = '' }) => {
  const classes = styles();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1500); //3300
  });

  return (
    <div className={`${classes.default} ${classes[variant]}`}>
      <div
        className={`${classes[variant]} ${classes.circle} ${animate &&
          'animate'}`}
      />
      <Typography variant='h4'>{text}</Typography>
    </div>
  );
};
