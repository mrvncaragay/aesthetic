import React from 'react';

// Shared components
// Shared components
import Selector from '../../../Animations/Selector';
import AnimateTypography from '../../../Animations/Typography';
import AnimateIcon from '../../../Animations/Icon';

// Component styles
import styles from './styles';

const Box3 = props => {
  const classes = styles(props);

  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <AnimateTypography
          effect='slideUp'
          delay={3450}
          duration={800}
          text='Guests'
          variant='h5'
        />
      </div>

      <div className={classes.body}>
        <AnimateIcon effect='slideUp' delay={3500}>
          <Selector variant='contained' text={1} />
        </AnimateIcon>

        <AnimateIcon effect='slideUp' delay={3550}>
          <Selector text={2} />
        </AnimateIcon>

        <AnimateIcon effect='slideUp' delay={3600}>
          <Selector text={3} />
        </AnimateIcon>

        <AnimateIcon effect='slideUp' delay={3650}>
          <Selector text='4+' />
        </AnimateIcon>
      </div>
    </div>
  );
};

export default Box3;
