import React from 'react';

// Shared component
import Tabs from '../Tabs';
import BigText from '../BigText';

// Component styles
import styles from './styles';

const LeftTop = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Tabs />
      <BigText />
    </div>
  );
};

export default LeftTop;
