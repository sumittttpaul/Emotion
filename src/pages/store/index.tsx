import { ReactElement, useState } from 'react';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { DiscoverUI } from '../../components/ui/DiscoverUI';

/**
 * @Store_Page
 **/

function Store() {
  return <DiscoverUI />;
}

Store.getLayout = function GetLayout(Store: ReactElement) {
  const [ChildPage, setChildPage] = useState('Discover');
  return (
    <PageParentLayout setChildPage={(value) => setChildPage(value)}>
      <PageChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {Store}
      </PageChildLayout>
    </PageParentLayout>
  );
};

export default Store;
