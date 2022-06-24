import { ReactElement, useState } from 'react';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { OffersUIProps } from '../../components/ui/StoreComponentUI/OffersUI';
import dynamic from 'next/dynamic';

const OffersUI = dynamic<OffersUIProps>(
  () =>
    import('../../components/ui/StoreComponentUI/OffersUI').then(
      (x) => x.OffersUI
    ),
  {
    loading: () => (
      <h6 className="text-white p-5 w-full text-center">Loading . . . </h6>
    ),
    ssr: false,
  }
);

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
