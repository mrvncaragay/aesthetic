import React from 'react';

// Shared components
import OmegaHotelLayout from '../../components/OmegaHotel';

// Component styles
import styles from './styles';

const OmegaHotel = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <OmegaHotelLayout />
    </div>
  );
};

export default OmegaHotel;
