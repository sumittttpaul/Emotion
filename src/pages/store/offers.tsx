import { OffersUI } from '../../components/ui/StoreComponentUI/OffersUI';
import { ReactElement, useState } from 'react';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { PageParentLayout } from '../../components/layout/PageParentLayout';

/**
 * @Offers_Page
 **/
export default function Offers() {
  return <OffersUI />;
}

Offers.getLayout = function getLayout(Offers: ReactElement) {
  const [Page, setPage] = useState('Offers');
  return (
    <PageParentLayout setPage={(value) => setPage(value)}>
      <PageChildLayout Page={Page} setPage={(value) => setPage(value)}>
        {Offers}
      </PageChildLayout>
    </PageParentLayout>
  );
};
