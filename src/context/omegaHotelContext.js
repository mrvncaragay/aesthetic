import React, { createContext, useReducer } from 'react';
import omegaReducer from '../reducers/omegaHotel';

// Component transition
import barHooks from '../components/OmegaHotel/ColumnBar/transitions';
import textHooks from '../components/OmegaHotel/IntroText/transitions';

// INITIAL DATA Test Data
import data from '../components/OmegaHotel/data';

export const IntroBarContext = createContext();
export const IntroTextContext = createContext();
export const OmegaHotelContext = createContext();
export const OmegaHotelActionContext = createContext();

export function OmegaHotelProvider(props) {
  const [barTransition, columnBarRef, isAnimating] = barHooks();
  const [textTransition, textRef] = textHooks();

  const [state, dispatch] = useReducer(omegaReducer, data);

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
