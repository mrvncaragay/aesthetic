import React, { useEffect } from 'react';

// Component styles
import styles from './styles';

// Shared components
import AnimateTypography from '../../../Animations/Typography';

const Box1 = props => {
  const classes = styles(props);

  useEffect(() => {}, []);

  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <AnimateTypography
          effect='slideUp'
          text='Your'
          delay={3200}
          duration={800}
          display='inline'
          variant='h4'
        />

        <AnimateTypography
          effect='slideUp'
          text='room'
          delay={3400}
          duration={800}
          display='inline'
          variant='h4'
        />
      </div>

      <div className={classes.body}>
        <AnimateTypography
          effect='slideUp'
          text='Select the desired filters'
          delay={3200}
          duration={800}
          variant='h5'
        />

        <AnimateTypography
          effect='slideUp'
          text='and find out the price.'
          delay={3400}
          duration={800}
          variant='h5'
        />
      </div>
    </div>
  );
};

export default Box1;
