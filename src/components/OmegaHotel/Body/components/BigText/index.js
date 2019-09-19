import React, { useContext, useState, useEffect } from 'react';
import { OmegaHotelContext } from '../../../../../context/OmegaHotelContext';
import { OmegaHotelActionContext } from '../../../../../context/OmegaHotelContext';

// Animation component
import AnimateTypography from '../../../Animations/Typography';

// Component styles
import styles from './styles';

const BigText = () => {
  const classes = styles();
  const state = useContext(OmegaHotelContext);
  const dispatch = useContext(OmegaHotelActionContext);

  const { index, nextIndex, nextCategory, category } = state;

  const [slogan, setSlogan] = useState(state[category].texts[index]);
  const [speed, setSpeed] = useState(0);
  const [animationClass, setAnimationClass] = useState('slideDown');

  /* eslint-disable */
  useEffect(() => {
    let hiddenClassTimer = null;

    const animateConfig = (before, after, delay) => {
      setAnimationClass(before); // animate before removing

      return setTimeout(() => {
        setSlogan(state[category].texts[index]) // new component
        setAnimationClass(after) // animate
        dispatch({ type: 'RESET' });
        setSpeed(600) //speed for new component
      }, delay);
    }
   
    if (nextIndex) {
      hiddenClassTimer = animateConfig('exitSlideDown', 'slideDown', 800)
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
      <AnimateTypography
        delay={speed || 1000} //2800
        duration={500}
        text='24 free hotel rooms.'
        effect='slideDown'
        variant='h5'
        top={45}
      />

      <AnimateTypography
        key={`${slogan.id}t1`}
        delay={speed || 1000} //2800
        duration={800}
        leave={400}
        text={slogan.t1}
        effect={animationClass}
        variant='h2'
        top={60}
      />

      <AnimateTypography
        key={`${slogan.id}t2`}
        delay={speed ? speed + 200 : 1000} // 3000
        duration={800}
        leave={600}
        text={slogan.t2}
        effect={animationClass}
        variant='h2'
        top={60}
      />
    </div>
  );
};

export default BigText;
