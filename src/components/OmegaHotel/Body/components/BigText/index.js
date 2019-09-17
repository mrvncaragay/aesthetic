import React, { useState } from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Line from '@material-ui/icons/RemoveOutlined';

// Component styles
import styles from './styles';

const BigText = () => {
  const classes = styles();
  const texts = [
    {
      t1: 'Book your stay',
      t2: 'at the hotel.'
    }
  ];

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <Typography variant='h5'>24 free hotel rooms</Typography>
      </div>

      <div className={classes.body}>
        <Typography variant='h2'>Book your stay</Typography>
        <Typography variant='h2'>at the hotel.</Typography>
      </div>
    </div>
  );
};

export default BigText;
