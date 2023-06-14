import '../styles/globals.css';
import '../styles/main.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../../src/theme';
import createEmotionCache from '../../src/createEmotionCache';
import StateProvider from '../providers/StateProvider';
import { AuthProvider } from '../firebase/AuthProvider';
import { Loading } from '../components/loader/Loading';
import { NextPage } from 'next';
import { wrapper } from '../redux/store';
import { Provider } from 'react-redux';

const clientSideEmotionCache = createEmotionCache();

interface EmotionCacheProps extends AppProps {
  emotionCache?: EmotionCache;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: React.ReactElement) => React.ReactNode;
// };

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp(AppProps: AppPropsWithLayout, cache: EmotionCacheProps) {
  const { Component, pageProps } = AppProps;
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const { emotionCache = clientSideEmotionCache } = cache;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <AuthProvider>
          <StateProvider>
            <Head>
              <title>Emotion | Outfit</title>
              <meta
                property="og:title"
                content="Emotion | Outfit"
                key="title"
              />
              <meta
                name="description"
                content="Welcome to emotion-outfit.com"
              />
              <meta name="theme-color" content="#0f0f0f" />
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {getLayout(<Component {...props.pageProps} />)}
              <Loading />
            </ThemeProvider>
          </StateProvider>
        </AuthProvider>
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
