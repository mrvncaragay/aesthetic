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
  const { index, next } = state;
  const {
    tourist: { texts }
  } = state;

  const [sloganIndex, setSloganIndex] = useState(index);
  const [speed, setSpeed] = useState(0);

  /* eslint-disable */
  useEffect(() => {
    let hiddenClassTimer = null;

    if (next) {
      hiddenClassTimer = setTimeout(() => {
        setSloganIndex(index);
        setSpeed(600)
        dispatch({ type: 'RESET_NEXT' });
      }, 800);
    }

    return () => {
      clearTimeout(hiddenClassTimer);
    };
  }, [next]);
  /* eslint-enable */

  return (
    <div className={classes.root}>
      <AnimateTypography
        delay={speed || 2800}
        duration={500}
        text='24 free hotel rooms.'
        effect='slideDown'
        variant='h5'
        top={45}
      />

      <AnimateTypography
        key={`${sloganIndex}t1`}
        delay={speed || 2800}
        duration={800}
        leave={400}
        text={texts[sloganIndex].t1}
        effect={next ? 'exitSlideDown' : 'slideDown'}
        variant='h2'
        top={60}
      />

      <AnimateTypography
        key={`${sloganIndex}t2`}
        delay={speed ? speed + 200 : 3000}
        duration={800}
        leave={600}
        text={texts[sloganIndex].t2}
        effect={next ? 'exitSlideDown' : 'slideDown'}
        variant='h2'
        top={60}
      />
    </div>
  );
};

export default BigText;
