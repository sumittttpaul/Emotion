import { experimental_extendTheme as extendTheme } from '@mui/material';

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: '#0f0f0f',
        },
        secondary: {
          main: '#202020',
        },
      },
    },
  },
  typography: { fontFamily: 'nunito sans' },
});

export default theme;
