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

  /* eslint-disable */
  useEffect(() => {
    let hiddenClassTimer = null;

    if (next) {
      hiddenClassTimer = setTimeout(() => {
        setSloganIndex(index);
        dispatch({ type: 'RESET_NEXT' });
      }, 300);
    }

    return () => {
      clearTimeout(hiddenClassTimer);
    };
  }, [next]);
  /* eslint-enable */

  return (
    <div className={classes.root}>
      <AnimateTypography
        delay={600}
        duration={1000}
        text='24 free hotel rooms.'
        effect='slideDown'
        variant='h5'
        top={45}
      />

      <AnimateTypography
        key={`${sloganIndex}t1`}
        delay={600}
        duration={1000}
        leave={300} // needs a delay for this
        text={texts[sloganIndex].t1}
        effect={next ? 'exitSlideDown' : 'slideDown'}
        variant='h2'
        top={60}
      />

      <AnimateTypography
        key={`${sloganIndex}t2`}
        delay={900}
        duration={1000}
        leave={500}
        text={texts[sloganIndex].t2}
        effect={next ? 'exitSlideDown' : 'slideDown'}
        variant='h2'
        top={60}
      />
    </div>
  );
};

export default BigText;
