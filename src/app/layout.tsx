import 'app/globals.css';
import 'styles/main.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import * as React from 'react';
import { Metadata } from 'next';
import EmotionCacheProvider from 'providers/EmotionCacheProvider';
import CssVarsProvider from 'providers/CssVarsProvider';
import ContextProvider from 'providers/ContextProvider';
import LoadingComponent from 'utils/RootLayoutComponents';

export const metadata: Metadata = {
  title: 'Emotion',
  description: 'Welcome to emotion-outfit.com',
  themeColor: '#0f0f0f',
  viewport: 'initial-scale=1, width=device-width',
  icons: '/favicon.ico',
};

function RootLayout({ children }: ChildrenType) {
  return (
    <EmotionCacheProvider options={{ key: 'mui-emotion-style' }}>
      <CssVarsProvider>
        <ContextProvider>
          <html lang="en">
            <body>
              {children}
              <LoadingComponent />
            </body>
          </html>
        </ContextProvider>
      </CssVarsProvider>
    </EmotionCacheProvider>
  );
}

export default RootLayout;
