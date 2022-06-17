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

Offers.getLayout = function GetLayout(Offers: ReactElement) {
  const [ChildPage, setChildPage] = useState('Offers');
  return (
    <PageParentLayout setChildPage={(value) => setChildPage(value)}>
      <PageChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {Offers}
      </PageChildLayout>
    </PageParentLayout>
  );
};
