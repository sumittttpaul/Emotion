import type { NextPage } from 'next';
import { PageContainerDark } from '../../components/container/PageContainerDark';
import { PageHeader } from '../../components/header/PageHeader/PageHeader';
import { PageFooter } from '../../components/footer/PageFooter/PageFooter';
import { StoreUICollections } from '../../components/ui/StoreUI';

/**
 * @Offers_Page
 **/
const Offers: NextPage = () => {
  return (
    <PageContainerDark>
      <PageHeader />
      <StoreUICollections />
      <PageFooter />
    </PageContainerDark>
  );
};

export default Offers;
