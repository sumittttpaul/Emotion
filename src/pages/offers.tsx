import { ReactElement } from 'react';
import { HomeAndGalleryParentLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';
import { HomeAndGalleryChildLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { OffersUI } from '../components/ui/OffersUI';
import { getServerSideProps } from '../algorithms/DeviceDetectSSR';

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

export { getServerSideProps };

export default Offers;
