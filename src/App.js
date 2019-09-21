import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Shared Component
import AestheticApp from './AestheticApp';

// Context
import { OmegaHotelProvider } from './context/OmegaHotelContext';

// Material UI theme context
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <OmegaHotelProvider>
          <AestheticApp />
        </OmegaHotelProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
