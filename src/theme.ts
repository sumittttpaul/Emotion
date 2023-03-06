import { createTheme } from '@mui/material/styles';
import { Noto_Sans } from 'next/font/google';

export const noto_sans = Noto_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f0f0f',
    },
    secondary: {
      main: '#202020',
    },
  },
  typography: {
    fontFamily: noto_sans.style.fontFamily,
  },
});

export default theme;
