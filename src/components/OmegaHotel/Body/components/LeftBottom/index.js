import React, { useState, useContext } from 'react';
import { OmegaHotelActionContext } from '../../../../../context/OmegaHotelContext';

// Material UI component
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const LeftBottom = () => {
  const classes = styles();
  const [active, setActive] = useState(true);
  const dispatch = useContext(OmegaHotelActionContext);

  const handleActive = (clicked, type) => {
    if (active === clicked) return;

    setActive(clicked);
    dispatch({ type: 'NEXT_CATEGORY', payload: type });
  };

  return (
    <div className={classes.root}>
      <div className={classes.control}>
        <Button
          className={classes[active ? 'active' : 'inactive']}
          onClick={() => handleActive(true, 'tourist')}
        >
          For tourist
        </Button>

        <Button
          className={classes[active ? 'inactive' : 'active']}
          onClick={() => handleActive(false, 'business')}
        >
          For business
        </Button>
      </div>
    </div>
  );
};

export default LeftBottom;
