import React, { useState, useEffect } from 'react';

// Material UI components
import Divider from '@material-ui/core/Divider';

// Shared components
import Div from '../../../Animations/Div';
import AnimateTypography from '../../../Animations/Typography';

// Component styles
import styles from './styles';

const Box6 = props => {
  const classes = styles(props);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 4000); //3300
  }, []);

  return (
    <Div effect='shrink' delay={3200} duration={1000}>
      <div className={classes.title}>
        <AnimateTypography
          effect='slideUp'
          text='Book Now'
          delay={4000}
          duration={500}
          display='inline'
          variant='h3'
        />
      </div>

      <Divider
        variant='middle'
        className={`${classes.devider} ${animate && 'animate'}`}
      />

      <div className={classes.body}>
        <AnimateTypography
          effect='slideUp'
          text='Price for room'
          delay={4000}
          variant='h5'
        />

        <AnimateTypography
          effect='slideUp'
          text='$800 - $900'
          delay={4200}
          variant='h5'
        />
      </div>
    </Div>
  );
};

export default Box6;
