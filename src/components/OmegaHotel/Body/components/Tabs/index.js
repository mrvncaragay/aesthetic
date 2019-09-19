import React, { useState, useContext } from 'react';
import { OmegaHotelActionContext } from '../../../../../context/OmegaHotelContext';

// Material UI component
import Divider from '@material-ui/core/Divider';

// Animateion component
import AnimateButton from '../../../Animations/Button';

// Component styles
import styles from './styles';

const Tabs = () => {
  const classes = styles();
  const dispatch = useContext(OmegaHotelActionContext);
  const [state, setState] = useState(0);
  const lineButtons = [];

  const handleClick = index => {
    if (state === index) return;

    dispatch({ type: 'NEXT_INDEX', payload: index });
    setState(index);
  };

  for (let i = 0; i < 4; i++) {
    lineButtons.push(
      <AnimateButton key={i} effect='fadeInGrow' delay={1000} duration={1300}>
        <Divider
          variant='middle'
          className={classes.line + ` ${state === i ? 'active' : ''}`}
          onClick={() => handleClick(i)}
        />
      </AnimateButton>
    );
  }

  return <div className={classes.root}>{lineButtons}</div>;
};

export default Tabs;
//delay={4000}
