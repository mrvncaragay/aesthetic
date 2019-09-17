import React from 'react';

// Material UI component
import Divider from '@material-ui/core/Divider';

// Component styles
import styles from './styles';

const Tabs = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Divider variant='middle' className={classes.line} />
      <Divider variant='middle' className={classes.line} />
      <Divider variant='middle' className={classes.line} />
      <Divider variant='middle' className={classes.line} />
    </div>
  );
};

export default Tabs;
