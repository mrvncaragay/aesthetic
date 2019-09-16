import React from 'react';

// Shared component
import Div from '../Animations/Div';

// Component styes
import styles from './styles';

const RectBar = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Div effect='growShrink' delay={1000} />
      <Div effect='growShrink' delay={1050} />
      <Div effect='growShrink' delay={1100} />
      <Div effect='growShrink' delay={1150} />
      <Div effect='growShrink' delay={1200} />
      <Div effect='growShrink' delay={1250} />
    </div>
  );
};

export default RectBar;
