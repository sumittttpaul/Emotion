import 'styles/globals.css';
import 'styles/main.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  CssBaseline,
} from '@mui/material';
import theme from 'utils/theme';
import createEmotionCache from 'utils/old-createEmotionCache';
import { NextPage } from 'next';

const clientSideEmotionCache = createEmotionCache();

interface EmotionCacheProps extends AppProps {
  emotionCache?: EmotionCache;
}

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp(AppProps: AppPropsWithLayout, cache: EmotionCacheProps) {
  const { Component, pageProps } = AppProps;
  const { emotionCache = clientSideEmotionCache } = cache;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Emotion | Outfit</title>
        <meta property="og:title" content="Emotion | Outfit" key="title" />
        <meta name="description" content="Welcome to emotion-outfit.com" />
        <meta name="theme-color" content="#0f0f0f" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </CssVarsProvider>
    </CacheProvider>
  );
}

export default MyApp;
