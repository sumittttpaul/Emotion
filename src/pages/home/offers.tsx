import { ReactElement, useState } from 'react';
import { ParentLayout } from '../../components/layout/ParentLayout';
import { ChildLayout } from '../../components/layout/ChildLayout';
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
    <ParentLayout setChildPage={(value) => setChildPage(value)}>
      <ChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {Offers}
      </ChildLayout>
    </ParentLayout>
  );
};

export { getServerSideProps };

export default Offers;
