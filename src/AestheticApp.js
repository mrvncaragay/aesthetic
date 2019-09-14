import React from 'react';

// Context
import { OmegaHotelProvider } from './context/OmegaHotelContext';

// Shared Component
import OmegaHotel from './views/OmegaHotel';

const AestheticApp = () => {
  return (
    <>
      <OmegaHotelProvider>
        <OmegaHotel />
      </OmegaHotelProvider>
    </>
  );
};

export default AestheticApp;
