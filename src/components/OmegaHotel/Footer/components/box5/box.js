import React from 'react';

// Material UI components
import FilterList from '@material-ui/icons/FilterListOutlined';

// Shared components
import { AnimateIcon } from '../index';

// Component styles
import styles from './styles';

const Box2 = props => {
  const classes = styles(props);

  return (
    <div className={classes.box}>
      <AnimateIcon effect='rotate' delay={1700} duration={1000}>
        <FilterList />
      </AnimateIcon>
    </div>
  );
};

export default Box2;
