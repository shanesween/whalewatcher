import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#778AA2',
    },
    secondary: {
      main: '#172D49',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff'
    },
    text: {
      primary: '#999',
      secondary: '#fff'
    }
  },
});

export default theme;
