import React from 'react';

// Shared component
import Box1 from './components/box1/box';
import Box2 from './components/box2/box';
import Box3 from './components/box3/box';
import Box4 from './components/box4/box';
import Box5 from './components/box5/box';
import Box6 from './components/box6/box';

// Component styles
import styles from './styles';

const Footer = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
      <Box6 />
      {/* <Box title='Icon' />
      <Box title='Book Now' /> */}
    </div>
  );
};

export default Footer;
