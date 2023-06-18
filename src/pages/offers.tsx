import { ReactElement, useEffect } from 'react';
import { HomeAndGalleryParentLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';
import { HomeAndGalleryChildLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { OffersUI } from '../components/ui/OffersUI';
import { getServerSideProps } from '../algorithms/DeviceDetectSSR';
import { useHomePageState } from '../providers/state/HomePageState';

/**
 * @Offers_Page
 **/

function Offers() {
  const { setHomePageState } = useHomePageState();
  useEffect(() => {
    setHomePageState({ Page: 'Offers' });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
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
