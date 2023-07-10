import {
  ThemeOptions,
  experimental_extendTheme as extendTheme,
} from '@mui/material';
// import { Nunito_Sans } from 'next/font/google';

// const NunitoSans = Nunito_Sans({
//   weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   variable: '--font-nunito-sans',
//   display: 'fallback',
//   fallback: ['sans-serif'],
// });

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    // primary: {
    //   main: '#0f0f0f',
    // },
    // secondary: {
    //   main: '#202020',
    // },
    // text: {
    //   primary: '#ffffff',
    // },
  },
  typography: {
    fontFamily: 'Nunito Sans',
  },
};

const theme = extendTheme(themeOptions);

export default theme;
