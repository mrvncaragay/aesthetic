import React, { useState, useEffect } from 'react';

// Material UI components
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowRight from '@material-ui/icons/ArrowRightOutlined';

// Component styles
import styles from './styles';

const Box2 = props => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1200); //3300
  }, []);

  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <Typography
          className={classes.t1 + ` ${animate && 'animate'}`}
          display='inline'
          variant='h5'
        >
          Location
        </Typography>
      </div>

      <div className={classes.body}>
        <Typography
          variant='h4'
          className={classes.t1 + ` ${animate && 'animate'}`}
          display='inline'
        >
          Begin your journey
        </Typography>

        <IconButton className={animate ? 'animate' : null}>
          <ArrowRight />
        </IconButton>
      </div>
    </div>
  );
};

export default Box2;
