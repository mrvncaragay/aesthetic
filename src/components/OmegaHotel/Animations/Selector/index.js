import React, { useState, useEffect } from 'react';

// Material UI components
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const Selector = ({ text, variant = '', ...props }) => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 2000); //3300
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

export default Selector;
