import React, { useState, useContext } from 'react';
import { OmegaHotelActionContext } from '../../../../../context/OmegaHotelContext';

// Material UI component
import Divider from '@material-ui/core/Divider';

// Component styles
import styles from './styles';

const Tabs = () => {
  const classes = styles();
  const dispatch = useContext(OmegaHotelActionContext);
  const [state, setState] = useState(0);
  const lineButtons = [];

  const handleClick = index => {
    dispatch({ type: 'NEXT', payload: index });
    setState(index);
  };

  for (let i = 0; i < 4; i++) {
    lineButtons.push(
      <Divider
        key={i}
        variant='middle'
        className={classes.line + ` ${state === i ? 'active' : ''}`}
        onClick={() => handleClick(i)}
      />
    );
  }

  return <div className={classes.root}>{lineButtons}</div>;
};

export default Tabs;
