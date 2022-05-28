import '../styles/globals.css';
import '../styles/main.css';
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../../src/theme';
import createEmotionCache from '../../src/createEmotionCache';
import { StateProvider } from '../providers/StateProvider';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { AuthProvider } from '../firebase/AuthProvider';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <AuthProvider>
        <Provider store={store}>
          <StateProvider>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </StateProvider>
        </Provider>
      </AuthProvider>
    </CacheProvider>
  );
}

export default MyApp;
