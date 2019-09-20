import React from 'react';
// Shared component
import IntroSlogan from './IntroSlogan';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';
import RectBar from './RectBar';

const OmegaHotel = () => {
  return (
    <>
      <RectBar />
      <IntroSlogan />
      <Nav />
      <Body />
      <Footer />
    </>
  );
};

export default OmegaHotel;
