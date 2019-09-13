import React from 'react';

// Shared Component
import AestheticApp from './AestheticApp';

// Material UI theme context
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AestheticApp />
    </ThemeProvider>
  );
}

export default App;
