import { ReactElement } from 'react';
import { CollectionsUI } from '../components/ui/CollectionsUI';
import { HomeAndGalleryChildLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { HomeAndGalleryParentLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';
import { GetServerSideProps } from 'next';
import { parse } from 'next-useragent';
import { setDevice } from '../redux/reducers/DeviceReducer';
import { setPage } from '../redux/reducers/PageReducer';
import { wrapper } from '../redux/store';

/**
 * @Collections_Page
 **/
function Collections() {
  return <CollectionsUI />;
}

Collections.getLayout = function GetLayout(Collections: ReactElement) {
  return (
    <HomeAndGalleryParentLayout>
      <HomeAndGalleryChildLayout>{Collections}</HomeAndGalleryChildLayout>
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
    store.dispatch(setPage('Collections'));
    return {
      props: {
        isMobile,
      },
    };
  });

export default Collections;
