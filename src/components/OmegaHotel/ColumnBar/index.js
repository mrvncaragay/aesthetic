import React from 'react';

// Shared component
import { Bar } from './components';

// Component styles
import styles from './styles';

const ColumnBar = ({ props }) => {
  const classes = styles(props);
  return (
    <div className={classes.root}>
      <Bar duration='1300' />
      <Bar duration='1350' />
      <Bar duration='1400' />
      <Bar duration='1450' />
      <Bar duration='1500' />
      <Bar duration='1550' />
    </div>
  );
};

export default ColumnBar;
