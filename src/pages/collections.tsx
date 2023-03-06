import { ReactElement } from 'react';
import { ChildLayout } from '../components/layout/ChildLayout';
import { ParentLayout } from '../components/layout/ParentLayout';
import { CollectionsUI } from '../components/ui/CollectionsUI';
import { getServerSideProps } from '../algorithms/DeviceDetectSSR';

/**
 * @Collections_Page
 **/
function Collections() {
  return <CollectionsUI />;
}

Collections.getLayout = function GetLayout(Collections: ReactElement) {
  return (
    <ParentLayout>
      <ChildLayout>{Collections}</ChildLayout>
    </ParentLayout>
  );
};

export { getServerSideProps };

export default Collections;
