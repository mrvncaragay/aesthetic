import React, { useContext, useRef } from 'react';
import {
  IntroBarContext,
  IntroTextContext
} from '../../context/OmegaHotelContext';

import { useChain } from 'react-spring';

// Shared component
import ColumnBar from './ColumnBar';
import IntroText from './IntroText';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';

const OmegaHotel = () => {
  const { columnBarRef } = useContext(IntroBarContext);
  const { textRef } = useContext(IntroTextContext);

  useChain([columnBarRef, textRef], [0, 0.5]);
  return (
    <>
      {/* <ColumnBar />
      <IntroText /> */}
      <Nav />
      <Body />
      <Footer />
    </>
  );
};

export default OmegaHotel;
