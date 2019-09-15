import React, { useState, useEffect } from 'react';

// Material UI components
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const MyFab = ({ children, delay, ...props }) => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, delay); //3300
  }, [delay]);

  return (
    <Fab
      size='small'
      aria-label='add'
      {...props}
      className={`${classes.fab} ${animate && 'animate'}`}
    >
      {children}
    </Fab>
  );
};

const Box3 = props => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1300); //3300
  }, []);

  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <Typography
          className={classes.t1 + ` ${animate && 'animate'}`}
          display='inline'
          variant='h5'
        >
          Guests
        </Typography>
      </div>

      <div className={classes.body}>
        <MyFab
          color='black'
          bgc='white'
          delay={1400}
          size='small'
          aria-label='add'
        >
          1
        </MyFab>

        <MyFab delay={1500} size='small' aria-label='add'>
          2
        </MyFab>

        <MyFab delay={1600} size='small' aria-label='add'>
          3
        </MyFab>

        <MyFab delay={1700} size='small' aria-label='add'>
          4+
        </MyFab>
      </div>
    </div>
  );
};

export default Box3;
