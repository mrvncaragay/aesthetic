import React, { useContext, useState, useEffect } from 'react';
import { OmegaHotelContext } from '../../../../../context/OmegaHotelContext';

// Animation component
import AnimateImage from '../../../Animations/Image';

// Component styles
import styles from './styles';

const Body = () => {
  const classes = styles();

  const state = useContext(OmegaHotelContext);
  const { index, prevIndex, nextIndex, nextCategory, category } = state;

  const [images, setImages] = useState([
    <AnimateImage
      key={state[category].images[0].id}
      delay={800}
      effect='growWidth'
      url={state[category].images[0].url}
    />
  ]);

  /* eslint-disable */
  useEffect(() => {
    if (nextIndex) {
      setImages([
        <AnimateImage
          key={state[category].images[index].id + 'as'}
          delay={500}
          effect='growWidth'
          url={state[category].images[index].url}
        />,
        <AnimateImage
          key={state[category].images[prevIndex].id + 'sa'}
          delay={300}
          effect='exitSlideDown'
          url={state[category].images[prevIndex].url}
        />
      ]);
    }

    if (nextCategory) {
    }

    return () => {};
  }, [nextIndex, nextCategory, prevIndex]);
  /* eslint-enable */
  console.log(index, prevIndex, images);
  return <div className={classes.root}>{images}</div>;
};

export default Body;
