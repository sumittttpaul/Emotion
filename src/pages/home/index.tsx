import { ReactElement, useState } from 'react';
import { ParentLayout } from '../../components/layout/ParentLayout';
import { ChildLayout } from '../../components/layout/ChildLayout';
import { DiscoverUI } from '../../components/ui/DiscoverUI';
import { getServerSideProps } from '../../algorithms/DeviceDetectSSR';

/**
 * @Store_Page
 **/

function Store() {
  return <DiscoverUI />;
}

Store.getLayout = function GetLayout(Store: ReactElement) {
  const [ChildPage, setChildPage] = useState('Discover');
  return (
    <ParentLayout setChildPage={(value) => setChildPage(value)}>
      <ChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {Store}
      </ChildLayout>
    </ParentLayout>
  );
};

export { getServerSideProps };

export default Store;
