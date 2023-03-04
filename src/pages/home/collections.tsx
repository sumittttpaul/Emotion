import { ReactElement, useState } from 'react';
import { ChildLayout } from '../../components/layout/ChildLayout';
import { ParentLayout } from '../../components/layout/ParentLayout';
import { CollectionsUI } from '../../components/ui/CollectionsUI';
import { getServerSideProps } from '../../algorithms/DeviceDetectSSR';

/**
 * @Collections_Page
 **/
function Collections() {
  return <CollectionsUI />;
}

Collections.getLayout = function GetLayout(Collections: ReactElement) {
  const [ChildPage, setChildPage] = useState('Collections');
  return (
    <ParentLayout setChildPage={(value) => setChildPage(value)}>
      <ChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {Collections}
      </ChildLayout>
    </ParentLayout>
  );
};

export { getServerSideProps };

export default Collections;
