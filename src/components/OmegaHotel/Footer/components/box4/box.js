import React from 'react';

// Material UI components
import ArrowRight from '@material-ui/icons/ArrowRightOutlined';

// Shared components
import AnimateIcon from '../../../Animations/Icon';
import AnimateTypography from '../../../Animations/Typography';

// Component styles
import styles from './styles';

const Box4 = props => {
  const classes = styles(props);

  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <AnimateTypography
          effect='slideUp'
          text='Arrival and departure'
          delay={3550}
          duration={800}
          variant='h5'
        />
      </div>

      <div className={classes.body}>
        <AnimateTypography
          effect='slideUp'
          text='09.20.19 -'
          delay={3550}
          duration={800}
          variant='h4'
          display='inline'
        />

        <AnimateTypography
          effect='slideUp'
          text='09.25.19'
          delay={3700}
          duration={800}
          variant='h4'
          display='inline'
        />

        <AnimateIcon effect='slideRight' delay={3700} duration={800}>
          <ArrowRight />
        </AnimateIcon>
      </div>
    </div>
  );
};

export default Box4;
