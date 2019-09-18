import React, { useContext, useRef } from 'react';
// import {
//   IntroBarContext,
//   IntroTextContext
// } from '../../context/OmegaHotelContext';

import { useChain } from 'react-spring';

// Shared component
import IntroText from './IntroText';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';
import RectBar from './RectBar';

const OmegaHotel = () => {
  // const { columnBarRef } = useContext(IntroBarContext);
  // const { textRef } = useContext(IntroTextContext);

  // useChain([columnBarRef, textRef], [0, 0.5]);
  return (
    <>
      <RectBar />
      {/* <IntroText /> */}
      <Nav />
      <Body />
      <Footer />
    </>
  );
};

export default OmegaHotel;
