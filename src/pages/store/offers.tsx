import { ReactElement, useState } from 'react';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { OffersUIProps } from '../../components/ui/OffersUI';
import dynamic from 'next/dynamic';

const OffersUI = dynamic<OffersUIProps>(
  () => import('../../components/ui/OffersUI').then((x) => x.OffersUI),
  {
    ssr: true,
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
