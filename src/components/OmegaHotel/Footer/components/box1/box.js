import React, { useEffect } from 'react';

// Component styles
import styles from './styles';

// Shared components
import { AnimateTypography } from '../index';

const Box1 = props => {
  const classes = styles(props);

  useEffect(() => {}, []);

  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <AnimateTypography
          effect='slideUp'
          text='Your'
          delay={1200}
          display='inline'
          variant='h4'
        />

        <AnimateTypography
          effect='slideUp'
          text='room'
          delay={1400}
          display='inline'
          variant='h4'
        />
      </div>

      <div className={classes.body}>
        <AnimateTypography
          effect='slideUp'
          text='Select the desired filters'
          delay={1200}
          variant='h5'
        />

        <AnimateTypography
          effect='slideUp'
          text='and find out the price.'
          delay={1400}
          variant='h5'
        />
      </div>
    </div>
  );
};

export default Box1;
