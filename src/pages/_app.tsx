import '../styles/globals.css';
import '../styles/main.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  CssBaseline,
} from '@mui/material';
import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';
import { Loading } from '../components/loader/Loading';
import { NextPage } from 'next';
import { wrapper } from '../redux/ReduxStore';
import { LoaderState } from '../provider/LoadingState';

const clientSideEmotionCache = createEmotionCache();

interface EmotionCacheProps extends AppProps {
  emotionCache?: EmotionCache;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp(AppProps: AppPropsWithLayout, cache: EmotionCacheProps) {
  const { Component, pageProps } = AppProps;
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const { emotionCache = clientSideEmotionCache } = cache;
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <Provider store={store}>
          <LoaderState value={{ show: false }}>
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
            <CssVarsProvider theme={theme}>
              <CssBaseline />
              {getLayout(<Component {...props.pageProps} />)}
              <Loading />
            </CssVarsProvider>
          </LoaderState>
        </Provider>
      </CacheProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
