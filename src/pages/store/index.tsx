import { ReactElement, useState } from 'react';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import { DiscoverUI } from '../../components/ui/StoreComponentUI/DiscoverUI';

/**
 * @Store_Page
 **/
export default function Store() {
  return <DiscoverUI />;
}

Store.getLayout = function GetLayout(Store: ReactElement) {
  const [ChildPage, setChildPage] = useState('Store');
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
