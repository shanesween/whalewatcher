import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#617793',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
