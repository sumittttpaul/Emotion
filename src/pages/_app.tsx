import '../styles/globals.css';
import '../styles/main.css';
import '../styles/custom/NavIndicator.css';
import '../styles/custom/SubscribeButton.css';
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
import { Provider } from 'react-redux';
import store from '../redux/store';
import { AuthProvider } from '../firebase/AuthProvider';
import { Loading } from '../components/loader/Loading';
import { GetServerSideProps, NextPage } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { setDevice } from '../redux/actions';

const clientSideEmotionCache = createEmotionCache();

interface EmotionCacheProps extends AppProps {
  emotionCache?: EmotionCache;
}

interface ServerSideProps {
  userAgent: string;
  isMobile: boolean;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsAndServerSidePropsWithLayout = AppProps &
  ServerSideProps & {
    Component: NextPageWithLayout;
  };

function MyApp(
  props: AppPropsAndServerSidePropsWithLayout,
  cache: EmotionCacheProps
) {
  const { Component, pageProps } = props;
  const { emotionCache = clientSideEmotionCache } = cache;
  const getLayout = Component.getLayout ?? ((page) => page);
  if (props.isMobile) store.dispatch(setDevice(true));
  else store.dispatch(setDevice(false));

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
              <meta name="theme-color" content="#0f0f0f" />
            </Head>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {getLayout(<Component {...pageProps} />)}
              <Loading />
            </ThemeProvider>
          </StateProvider>
        </Provider>
      </AuthProvider>
    </CacheProvider>
  );
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  context
) => {
  const { req } = context;
  const userAgent = req.headers['user-agent'] ?? '';
  const { isMobile } = getSelectorsByUserAgent(userAgent);
  return {
    props: {
      userAgent,
      isMobile,
    },
  };
};

export default MyApp;
