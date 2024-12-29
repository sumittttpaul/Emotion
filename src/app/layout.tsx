import 'app/globals.css';
import 'styles/main.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Metadata, Viewport } from 'next';
import EmotionCacheProvider from 'providers/EmotionCacheProvider';
import CssVarsProvider from 'providers/CssVarsProvider';
import ContextProvider from 'providers/ContextProvider';

export const metadata: Metadata = {
  title: 'Emotion Outfit • Sumeet Kumar Paul',
  description: 'Welcome to emotionoutfit.vercel.app by Sumeet Kumar Paul',
  icons: '/favicon.ico',
};

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  initialScale: 1,
  width: 'device-width',
};

function RootLayout({ children }: ChildrenType) {
  return (
    <EmotionCacheProvider options={{ key: 'mui-emotion-style', prepend: true }}>
      <CssVarsProvider>
        <ContextProvider>
          <html lang="en">
            <body>{children}</body>
          </html>
        </ContextProvider>
      </CssVarsProvider>
    </EmotionCacheProvider>
  );
}

export default RootLayout;
