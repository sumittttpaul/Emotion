import { ReactElement } from 'react';
import { HomeAndGalleryParentLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';
import { HomeAndGalleryChildLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { OffersUI } from '../components/ui/OffersUI';
import { GetServerSideProps } from 'next';
import { parse } from 'next-useragent';
import { setDevice } from '../redux/reducers/DeviceReducer';
import { setHomePage } from '../redux/reducers/HomePageReducer';
import { wrapper } from '../redux/ReduxStore';

/**
 * @Offers_Page
 **/

function Offers() {
  return <OffersUI />;
}

Offers.getLayout = function GetLayout(Offers: ReactElement) {
  return (
    <HomeAndGalleryParentLayout>
      <HomeAndGalleryChildLayout>{Offers}</HomeAndGalleryChildLayout>
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
    ReduxStore.dispatch(setHomePage('Offers'));
    return {
      props: {
        isMobile,
      },
    };
  });

export default Offers;
