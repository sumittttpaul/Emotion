import { OffersUI } from '../../components/ui/StoreComponentUI/OffersUI';
import { ReactElement } from 'react';
import { PageLayout } from '../../components/layout/PageLayout';

/**
 * @Offers_Page
 **/
export default function Offers() {
  return <OffersUI />;
}

Offers.getLayout = function getLayout(Offers: ReactElement) {
  return <PageLayout>{Offers}</PageLayout>;
};
