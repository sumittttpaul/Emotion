import { ReactElement } from 'react';
import { CollectionsUI } from '../components/ui/CollectionsUI';
import { getServerSideProps } from '../algorithms/DeviceDetectSSR';
import { HomeAndGalleryChildLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { HomeAndGalleryParentLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';

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

export { getServerSideProps };

export default Collections;
