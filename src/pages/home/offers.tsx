import { ReactElement, useState } from 'react';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { OffersUI } from '../../components/ui/OffersUI';
import { getServerSideProps } from '../../algorithms/DeviceDetectSSR';

/**
 * @Offers_Page
 **/
function Offers() {
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

export { getServerSideProps };

export default Offers;
