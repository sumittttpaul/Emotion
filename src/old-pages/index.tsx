import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { parse } from 'next-useragent';
import { DiscoverUI } from '../components/ui/DiscoverUI';
import { HomeAndGalleryChildLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { HomeAndGalleryParentLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';
import { setDevice } from '../redux/reducers/DeviceReducer';
import { wrapper } from '../redux/ReduxStore';
import { setHomePage } from '../redux/reducers/HomePageReducer';

/**
 * @Home_Page
 **/

function Home() {
  return <DiscoverUI />;
}

Home.getLayout = function GetLayout(Home: ReactElement) {
  return (
    <HomeAndGalleryParentLayout>
      <HomeAndGalleryChildLayout>{Home}</HomeAndGalleryChildLayout>
    </HomeAndGalleryParentLayout>
  );
};

type ServerProps = {
  isMobile: boolean;
};

export const getServerSideProps: GetServerSideProps<ServerProps> =
  wrapper.getServerSideProps((ReduxStore) => async (context) => {
    const { req } = context;
    const userAgent = req.headers['user-agent'] ?? '';
    const isMobile = parse(userAgent).isMobile;
    ReduxStore.dispatch(setDevice(isMobile));
    ReduxStore.dispatch(setHomePage('Discover'));
    return {
      props: {
        isMobile,
      },
    };
  });

export default Home;
