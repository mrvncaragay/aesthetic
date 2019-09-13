import React from 'react';

// Component styles
import styles from './styles';

const Bar = props => {
  const classes = styles(props);

  return <div className={`${classes.root} hga`}></div>;
};

export default Bar;
