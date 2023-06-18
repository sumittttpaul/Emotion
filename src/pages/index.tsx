import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { parse } from 'next-useragent';
import { DiscoverUI } from '../components/ui/DiscoverUI';
import { HomeAndGalleryChildLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { HomeAndGalleryParentLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';
import { setDevice } from '../redux/reducers/DeviceReducer';
import { wrapper } from '../redux/store';
import { setPage } from '../redux/reducers/PageReducer';

/**
 * @Store_Page
 **/

function Store() {
  return <DiscoverUI />;
}

Store.getLayout = function GetLayout(Store: ReactElement) {
  return (
    <HomeAndGalleryParentLayout>
      <HomeAndGalleryChildLayout>{Store}</HomeAndGalleryChildLayout>
    </HomeAndGalleryParentLayout>
  );
};

type ServerProps = {
  isMobile: boolean;
};

export const getServerSideProps: GetServerSideProps<ServerProps> =
  wrapper.getServerSideProps((store) => async (context) => {
    const { req } = context;
    const userAgent = req.headers['user-agent'] ?? '';
    const isMobile = parse(userAgent).isMobile;
    store.dispatch(setDevice(isMobile));
    store.dispatch(setPage('Discover'));
    return {
      props: {
        isMobile,
      },
    };
  });

export default Store;
