import React from 'react';

// Shared components
import { ColumnBar } from '../../components/OmegaHotel';

// Component styles
import styles from './styles';

const OmegaHotel = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <ColumnBar />
    </div>
  );
};

export default OmegaHotel;
