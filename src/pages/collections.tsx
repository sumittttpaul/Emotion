import { ReactElement, useEffect } from 'react';
import { CollectionsUI } from '../components/ui/CollectionsUI';
import { getServerSideProps } from '../algorithms/DeviceDetectSSR';
import { HomeAndGalleryChildLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { HomeAndGalleryParentLayout } from '../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';
import { useHomePageState } from '../providers/state/HomePageState';

/**
 * @Collections_Page
 **/
function Collections() {
  const { setHomePageState } = useHomePageState();
  useEffect(() => {
    setHomePageState({ Page: 'Collections' });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
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
