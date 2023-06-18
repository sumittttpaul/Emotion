import { ReactElement } from 'react';
import { HomeAndGalleryParentLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';
import { HomeAndGalleryChildLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { OffersUI } from '../components/ui/OffersUI';
import { GetServerSideProps } from 'next';
import { parse } from 'next-useragent';
import { setDevice } from '../redux/reducers/DeviceReducer';
import { setPage } from '../redux/reducers/PageReducer';
import { wrapper } from '../redux/store';

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
  wrapper.getServerSideProps((store) => async (context) => {
    const { req } = context;
    const userAgent = req.headers['user-agent'] ?? '';
    const isMobile = parse(userAgent).isMobile;
    store.dispatch(setDevice(isMobile));
    store.dispatch(setPage('Offers'));
    return {
      props: {
        isMobile,
      },
    };
  });

export default Offers;
