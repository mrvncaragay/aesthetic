import React from 'react';

// Component styles
import styles from './styles';

const box = () => {
  const classes = styles();

  return <div className={classes.box}> Box1</div>;
};

const Footer = () => {
  const classes = styles();

  return <div className={classes.root}>Footer</div>;
};

export default Footer;
