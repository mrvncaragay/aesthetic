import React, { useState } from 'react';

// Material UI component
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const LeftBottom = () => {
  const classes = styles();
  const [active, setActive] = useState(true);

  const handleActive = clicked => {
    setActive(clicked);
  };

  return (
    <div className={classes.root}>
      <div className={classes.control}>
        <Button
          className={classes[active ? 'active' : 'inactive']}
          onClick={() => handleActive(true)}
        >
          For tourist
        </Button>

        <Button
          className={classes[active ? 'inactive' : 'active']}
          onClick={() => handleActive(false)}
        >
          For business
        </Button>
      </div>
    </div>
  );
};

export default LeftBottom;
