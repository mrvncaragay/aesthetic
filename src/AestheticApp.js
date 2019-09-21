import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Shared Component
import OmegaHotel from './views/OmegaHotel';

const AestheticApp = () => {
  return (
    <>
      <Switch>
        <Route exact path='/omegaHotel' component={OmegaHotel} />
      </Switch>
    </>
  );
};

export default AestheticApp;
