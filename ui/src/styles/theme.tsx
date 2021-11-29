import { createMuiTheme } from '@material-ui/core/styles';
import palette from "./palette";

// Create a theme instance.
const theme = createMuiTheme({
  typography:{ fontFamily: [
    'Inter',
    'Roboto',
    '"Segoe UI"',
    'BlinkMacSystemFont',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(',') },
  palette: palette,
  shape: {
    borderRadius: 16,
  }
});

export default theme;