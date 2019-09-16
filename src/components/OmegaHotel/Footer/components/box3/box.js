import React from 'react';

// Shared components
import { AnimateTypography, AnimateIcon, CircleWithNumber } from '../index';

// Component styles
import styles from './styles';

const Box3 = props => {
  const classes = styles(props);

  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <AnimateTypography
          effect='slideUp'
          delay={1300}
          text='Guests'
          variant='h5'
        />
      </div>

      <div className={classes.body}>
        <AnimateIcon effect='slideUp' delay={1400}>
          <CircleWithNumber variant='contained' text={1} />
        </AnimateIcon>

        <AnimateIcon effect='slideUp' delay={1500}>
          <CircleWithNumber text={2} />
        </AnimateIcon>

        <AnimateIcon effect='slideUp' delay={1600}>
          <CircleWithNumber text={3} />
        </AnimateIcon>

        <AnimateIcon effect='slideUp' delay={1600}>
          <CircleWithNumber text='4+' />
        </AnimateIcon>
      </div>
    </div>
  );
};

export default Box3;
