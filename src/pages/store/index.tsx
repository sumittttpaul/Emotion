import type { NextPage } from 'next';
import { PageContainerDark } from '../../components/container/PageContainerDark';
import { PageHeader } from '../../components/header/PageHeader/PageHeader';
import { PageFooter } from '../../components/footer/PageFooter/PageFooter';
import { StoreUIDiscover } from '../../components/ui/StoreUI';

/**
 * @Store_Page
 **/
const Store: NextPage = () => {
  return (
    <PageContainerDark>
      <PageHeader />
      <StoreUIDiscover />
      <PageFooter />
    </PageContainerDark>
  );
};

export default Store;
