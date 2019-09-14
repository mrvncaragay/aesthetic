import React, { useContext } from 'react';
import {
  IntroBarContext,
  IntroTextContext
} from '../../context/OmegaHotelContext';

import { useChain } from 'react-spring';

// Shared component
import ColumnBar from './ColumnBar';
import IntroText from './IntroText';

const OmegaHotel = () => {
  const { columnBarRef } = useContext(IntroBarContext);
  const { textRef } = useContext(IntroTextContext);

  useChain([columnBarRef, textRef], [0, 0.5] /*1000*/);
  return (
    <>
      <ColumnBar />
      <IntroText />
    </>
  );
};

export default OmegaHotel;
