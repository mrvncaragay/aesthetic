import React from 'react';

// Shared component
import LeftTop from '../LeftTop';
import LeftBottom from '../LeftBottom';

// Component styles
import styles from './styles';

const Left = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <LeftTop />
      <LeftBottom />
    </div>
  );
};

export default Left;
