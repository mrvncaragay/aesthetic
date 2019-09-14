import React, { useState, useEffect } from 'react';

// Material UI components
import Menu from '@material-ui/icons/MenuOutlined';
import Search from '@material-ui/icons/SearchOutlined';
import ArrowDown from '@material-ui/icons/ArrowDropDownOutlined';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const Nav = () => {
  const classes = styles();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000); //3300
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.title}>Omega Hotel</div>

      <div className={classes.list}>
        <Button className={classes.button}>
          English
          <ArrowDown />
        </Button>

        <IconButton
          className={classes.search + ` ${animate && 'animateSearch'}`}
        >
          <Search />
        </IconButton>

        <IconButton className={classes.menu + ` ${animate && 'animateMenu'}`}>
          <Menu />
        </IconButton>
      </div>
    </div>
  );
};

export default Nav;
