import React, { useState, useEffect } from 'react';

// Material UI components
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const Box1 = props => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000); //3300

    setTimeout(() => {
      setAnimate2(true);
    }, 1200); //3300
  }, []);

  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <Typography
          className={classes.t1 + ` ${animate && 'animate'}`}
          display='inline'
          variant='h4'
        >
          Your
        </Typography>
        <Typography
          className={classes.t2 + ` ${animate2 && 'animate'}`}
          display='inline'
          variant='h4'
        >
          room
        </Typography>
      </div>

      <div className={classes.body}>
        <Typography
          variant='h5'
          className={classes.t1 + ` ${animate && 'animate'}`}
        >
          Select the desired filters
        </Typography>
        <Typography
          variant='h5'
          className={classes.t2 + ` ${animate2 && 'animate'}`}
        >
          and find out the price.
        </Typography>
      </div>
    </div>
  );
};

export default Box1;
