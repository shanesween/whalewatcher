import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// A custom theme for this app
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#778AA2',
    },
    secondary: {
      main: '#172D49',
      contrastText: '#fff'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff'
    },
    text: {
      primary: '#000',
      secondary: '#999'
    }
  },
});
theme = {
  ...theme,
  overrides: {
    MuiTab: {
      root: {
        [theme.breakpoints.up("xs")]: {
          minWidth: '33%'
        }
      }
    }
  }
}

export default theme;
