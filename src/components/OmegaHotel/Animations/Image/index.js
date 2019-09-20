import React, { useState, useEffect, useContext } from 'react';
import { OmegaHotelContext } from '../../../../context/OmegaHotelContext';

// Component styles
import styles from './styles';

const AnimateImage = ({ effect = '', exit = '', delay, ...props }) => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, delay); //3300
  });

  // /* eslint-disable */
  //   useEffect(() => {
  //     let hiddenClassTimer = null;

  //     if (nextIndex) {
  //       setAnimationClass(classes.slideDown)

  //     }

  //     if (nextCategory) {

  //     }

  //     return () => {

  //       clearTimeout(hiddenClassTimer);
  //     };
  //   }, [nextIndex, nextCategory]);
  //   /* eslint-enable */

  return (
    <div className={`${classes.root} ${animate ? 'animate' : ''}`}>
      <div
        {...props}
        className={`${classes.backgroundImage} ${classes[effect]}  ${
          animate ? 'animate' : ''
        }`}
      />
    </div>
  );
};

export default AnimateImage;
