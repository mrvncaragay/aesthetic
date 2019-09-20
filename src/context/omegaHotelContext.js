import React, { createContext, useReducer } from 'react';
import omegaReducer from '../reducers/omegaHotel';

// INITIAL DATA Test Data
import data from '../components/OmegaHotel/data';

export const OmegaHotelContext = createContext();
export const OmegaHotelActionContext = createContext();

export function OmegaHotelProvider(props) {
  const [state, dispatch] = useReducer(omegaReducer, data);

  return (
    <OmegaHotelContext.Provider value={state}>
      <OmegaHotelActionContext.Provider value={dispatch}>
        {props.children}
      </OmegaHotelActionContext.Provider>
    </OmegaHotelContext.Provider>
  );
}
