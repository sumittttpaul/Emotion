import { ReactElement } from 'react';
import { ParentLayout } from '../components/layout/ParentLayout';
import { ChildLayout } from '../components/layout/ChildLayout';
import { OffersUI } from '../components/ui/OffersUI';
import { getServerSideProps } from '../algorithms/DeviceDetectSSR';

/**
 * @Offers_Page
 **/
function Offers() {
  return <OffersUI />;
}

Offers.getLayout = function GetLayout(Offers: ReactElement) {
  return (
    <ParentLayout>
      <ChildLayout>{Offers}</ChildLayout>
    </ParentLayout>
  );
};

export { getServerSideProps };

export default Offers;
