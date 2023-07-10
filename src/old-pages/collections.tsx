import { ReactElement } from 'react';
import { CollectionsUI } from '../components/ui/CollectionsUI';
import { HomeAndGalleryChildLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { HomeAndGalleryParentLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';
import { GetServerSideProps } from 'next';
import { parse } from 'next-useragent';
import { setDevice } from '../redux/reducers/DeviceReducer';
import { setHomePage } from '../redux/reducers/HomePageReducer';
import { wrapper } from '../redux/ReduxStore';

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
  wrapper.getServerSideProps((ReduxStore) => async (context) => {
    const { req } = context;
    const userAgent = req.headers['user-agent'] ?? '';
    const isMobile = parse(userAgent).isMobile;
    ReduxStore.dispatch(setDevice(isMobile));
    ReduxStore.dispatch(setHomePage('Collections'));
    return {
      props: {
        isMobile,
      },
    };
  });

export default Collections;
