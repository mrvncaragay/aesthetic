import React from 'react';

// Material UI components
import ArrowRight from '@material-ui/icons/ArrowRightOutlined';

// Shared components
import AnimateIcon from '../../../Animations/Icon';
import AnimateTypography from '../../../Animations/Typography';

// Component styles
import styles from './styles';

const Box2 = props => {
  const classes = styles(props);

  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <AnimateTypography
          effect='slideUp'
          text='Location'
          delay={3400}
          duration={800}
          variant='h5'
        />
      </div>

      <div className={classes.body}>
        <AnimateTypography
          effect='slideUp'
          text='Begin your journey'
          delay={3400}
          duration={800}
          display='inline'
          variant='h4'
        />

        <AnimateIcon effect='slideRight' delay={3400} duration={800}>
          <ArrowRight />
        </AnimateIcon>
      </div>
    </div>
  );
};

export default Box2;
