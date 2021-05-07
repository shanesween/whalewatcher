import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const customBreakpointValues = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

const breakpoints = createBreakpoints({ ...customBreakpointValues });
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#778AA2',
    },
    secondary: {
      main: '#172D49',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#999',
    },
  },
  breakpoints: {
    ...customBreakpointValues,
  },
  overrides: {
    MuiTab: {
      root: {
        [breakpoints.up('xs')]: {
          minWidth: '33%',
        },
      },
    },
  },
});

export default theme;
