import React, { useState, useEffect } from 'react';

// Material UI components
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FilterList from '@material-ui/icons/FilterListOutlined';

// Component styles
import styles from './styles';

const AnimateTypography = ({ text, delay, ...props }) => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, delay); //3300
  });

  return (
    <Typography className={`${classes.t2} ${animate && 'animate'}`} {...props}>
      {text}
    </Typography>
  );
};

const Box6 = props => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [animateMain, setAnimateMain] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateMain(true);
    }, 1200); //3300

    setTimeout(() => {
      setAnimate(true);
    }, 1500); //3300

    setTimeout(() => {
      setAnimateText(true);
    }, 2200); //3300
  }, []);

  return (
    <div className={`${classes.box} ${animateMain && 'animate'}`}>
      <div className={classes.title}>
        <AnimateTypography
          variant='h3'
          text='Book Now'
          className={classes.t1 + ` ${animateText && 'animate'}`}
        />
      </div>

      <Divider
        variant='middle'
        className={`${classes.devider} ${animate && 'animate'}`}
      />

      <div className={classes.body}>
        <AnimateTypography text='Price for room' variant='h5' delay={2200} />
        <AnimateTypography text='$800 - $900' variant='h5' delay={2400} />
      </div>
    </div>
  );
};

export default Box6;
