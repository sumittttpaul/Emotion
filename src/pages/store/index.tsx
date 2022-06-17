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

Store.getLayout = function getLayout(Store: ReactElement) {
  const [Page, setPage] = useState('Store');
  return (
    <PageParentLayout setPage={(value) => setPage(value)}>
      <PageChildLayout Page={Page} setPage={(value) => setPage(value)}>
        {Store}
      </PageChildLayout>
    </PageParentLayout>
  );
};
