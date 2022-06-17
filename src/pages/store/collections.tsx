import { ReactElement, useState } from 'react';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import { CollectionsUI } from '../../components/ui/StoreComponentUI/CollectionsUI';

/**
 * @Collections_Page
 **/
export default function Collections() {
  return <CollectionsUI />;
}

Collections.getLayout = function getLayout(Collections: ReactElement) {
  const [Page, setPage] = useState('Collections');
  return (
    <PageParentLayout setPage={(value) => setPage(value)}>
      <PageChildLayout Page={Page} setPage={(value) => setPage(value)}>
        {Collections}
      </PageChildLayout>
    </PageParentLayout>
  );
};
