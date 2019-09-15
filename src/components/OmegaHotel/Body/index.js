import React from 'react';

// Component styles
import styles from './styles';

const box = () => {
  const classes = styles();

  return <div className={classes.box}> Box1</div>;
};

const Body = () => {
  const classes = styles();

  return <div className={classes.root}>Body</div>;
};

export default Body;
