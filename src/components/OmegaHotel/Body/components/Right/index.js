import React, { useContext, useState, useEffect } from 'react';
import { OmegaHotelContext } from '../../../../../context/OmegaHotelContext';
import { OmegaHotelActionContext } from '../../../../../context/OmegaHotelContext';

// Animation component
import AnimateImage from '../../../Animations/Image';

// Component styles
import styles from './styles';

const Body = () => {
  const classes = styles();

  const state = useContext(OmegaHotelContext);
  const dispatch = useContext(OmegaHotelActionContext);

  const { index, nextIndex, nextCategory, category } = state;

  const [image, setImage] = useState(state[category].images[index]);
  const [speed, setSpeed] = useState(0);
  const [animationClass, setAnimationClass] = useState('growWidth');

  /* eslint-disable */
  useEffect(() => {
    let hiddenClassTimer = null;

    const animateConfig = (before, after, delay) => {
      setAnimationClass(before); // animate before removing

      return setTimeout(() => {
        setSlogan(state[category].images[index]) // new component
        setAnimationClass(after) // animate
        dispatch({ type: 'RESET' });
        setSpeed(600) //speed for new component
      }, delay);
    }
   
    if (nextIndex) {
      hiddenClassTimer = animateConfig('slideDown', '', 800)
    }

    if (nextCategory) {
      hiddenClassTimer = animateConfig('exitSlideRight', 'enterSlideRight', 650);   
    } 

    return () => {
      clearTimeout(hiddenClassTimer);
    };
  }, [nextIndex, nextCategory]);
  /* eslint-enable */

  return (
    <div className={classes.root}>
      <AnimateImage delay={1000} effect={animationClass} url={image} />
    </div>
  );
};

export default Body;
