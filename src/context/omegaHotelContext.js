import React, { createContext } from 'react';

// Component transition
import barHooks from '../components/OmegaHotel/ColumnBar/transitions';
import textHooks from '../components/OmegaHotel/IntroText/transitions';

export const IntroBarContext = createContext();
export const IntroTextContext = createContext();

export function OmegaHotelProvider(props) {
  const [barTransition, columnBarRef, isAnimating] = barHooks();
  const [textTransition, textRef] = textHooks();

  return (
    <IntroBarContext.Provider
      value={{ barTransition, columnBarRef, isAnimating }}
    >
      <IntroTextContext.Provider value={{ textTransition, textRef }}>
        {props.children}
      </IntroTextContext.Provider>
    </IntroBarContext.Provider>
  );
}
