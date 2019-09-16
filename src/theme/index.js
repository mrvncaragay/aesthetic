import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import transition from './transition';

const theme = createMuiTheme({
  palette,
  typography,
  overrides,
  transition
});

export default theme;
