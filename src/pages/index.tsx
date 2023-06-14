import { ReactElement } from 'react';
import { DiscoverUI } from '../components/ui/DiscoverUI';
import { getServerSideProps } from '../algorithms/DeviceDetectSSR';
import { HomeAndGalleryChildLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { HomeAndGalleryParentLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';

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

export { getServerSideProps };

export default Store;
