import { ReactElement, useEffect } from 'react';
import { DiscoverUI } from '../components/ui/DiscoverUI';
import { getServerSideProps } from '../algorithms/DeviceDetectSSR';
import { HomeAndGalleryChildLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { HomeAndGalleryParentLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';
import { useHomePageState } from '../providers/state/HomePageState';

/**
 * @Store_Page
 **/

function Store() {
  const { setHomePageState } = useHomePageState();
  useEffect(() => {
    setHomePageState({ Page: 'Discover' });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <DiscoverUI />;
}

Store.getLayout = function GetLayout(Store: ReactElement) {
  return (
    <HomeAndGalleryParentLayout>
      <HomeAndGalleryChildLayout>{Store}</HomeAndGalleryChildLayout>
    </HomeAndGalleryParentLayout>
  );
};

export { getServerSideProps };

export default Store;
