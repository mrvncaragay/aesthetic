import React from 'react';

// Animation component
import AnimateTypography from '../../../components/OmegaHotel/Animations/Typography';

// Component styles
import styles from './styles';

const IntroSlogan = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <AnimateTypography
        className={classes.text}
        text='Booked,'
        delay={1300}
        effect='SlideUpAndDown'
      />

      <AnimateTypography
        className={classes.text}
        text='travel,'
        delay={1500}
        effect='SlideUpAndDown'
      />

      <AnimateTypography
        className={classes.text}
        text='enjoy.'
        delay={1700}
        effect='SlideUpAndDown'
      />
    </div>
  );
};

export default IntroSlogan;
