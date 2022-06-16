import type { NextPage } from 'next';
import { PageContainerDark } from '../../components/container/PageContainerDark';
import { PageHeader } from '../../components/header/PageHeader/PageHeader';
import { PageFooter } from '../../components/footer/PageFooter/PageFooter';
import { StoreUIOffers } from '../../components/ui/StoreUI';

/**
 * @Offers_Page
 **/
const Offers: NextPage = () => {
  return (
    <PageContainerDark>
      <PageHeader />
      <StoreUIOffers />
      <PageFooter />
    </PageContainerDark>
  );
};

export default Offers;
