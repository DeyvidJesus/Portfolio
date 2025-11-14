import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
  palette: {
    primary: {
      'main': '#000',
    },
    secondary: {
      'main': '#1649FF'
    }
  }
});
