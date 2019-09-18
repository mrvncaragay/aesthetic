import React, { createContext, useReducer } from 'react';
import omegaReducer from '../reducers/omegaHotel';

// Component transition
import barHooks from '../components/OmegaHotel/ColumnBar/transitions';
import textHooks from '../components/OmegaHotel/IntroText/transitions';

// INITIAL DATA
const INITIAL_STATE = {
  tourist: {
    texts: [
      {
        t1: 'Book your stay',
        t2: 'at the hotel.'
      },

      {
        t1: 'The best beds,',
        t2: 'magic sleep.'
      },

      {
        t1: 'Share a Grand',
        t2: 'Experience.'
      },

      {
        t1: "New Yor's standard for",
        t2: 'luxury and privacy.'
      }
    ],

    images: [
      'http://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/28/2016/11/24091523/New-Luxury-Room.jpg'
    ]
  },

  business: {
    texts: [],
    images: []
  },

  index: 0,
  next: false
};

export const IntroBarContext = createContext();
export const IntroTextContext = createContext();
export const OmegaHotelContext = createContext();
export const OmegaHotelActionContext = createContext();

export function OmegaHotelProvider(props) {
  const [barTransition, columnBarRef, isAnimating] = barHooks();
  const [textTransition, textRef] = textHooks();

  const [state, dispatch] = useReducer(omegaReducer, INITIAL_STATE);

  return (
    <OmegaHotelContext.Provider value={state}>
      <OmegaHotelActionContext.Provider value={dispatch}>
        {props.children}
      </OmegaHotelActionContext.Provider>
    </OmegaHotelContext.Provider>
  );
}

// <IntroBarContext.Provider
// value={{ barTransition, columnBarRef, isAnimating }}
// >
// <IntroTextContext.Provider value={{ textTransition, textRef }}>

// </IntroTextContext.Provider>
//     </IntroBarContext.Provider>
