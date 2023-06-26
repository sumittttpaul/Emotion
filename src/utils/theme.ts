import { experimental_extendTheme as extendTheme } from '@mui/material';
import { Noto_Sans } from 'next/font/google';

export const noto_sans = Noto_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

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
});

export default theme;
