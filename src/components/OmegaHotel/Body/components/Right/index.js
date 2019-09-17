import React from 'react';

// Component styles
import styles from './styles';

const Body = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <div
          style={{
            backgroundImage: `url(http://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/28/2016/11/24091523/New-Luxury-Room.jpg)`
          }}
          className={classes.backgroundImage}
        />
      </div>
    </div>
  );
};

export default Body;
