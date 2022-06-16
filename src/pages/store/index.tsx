import type { NextPage } from 'next';
import { PageContainerDark } from '../../components/container/PageContainerDark';
import { PageHeader } from '../../components/header/PageHeader/PageHeader';
import { PageFooter } from '../../components/footer/PageFooter/PageFooter';
import { StoreUIDiscover } from '../../components/ui/StoreUI';
import { useState } from 'react';

/**
 * @Store_Page
 **/
const Store: NextPage = () => {
  const [Page, setPage] = useState('Discover');
  return (
    <PageContainerDark>
      <PageHeader />
      <StoreUIDiscover Page={Page} setPage={(value) => setPage(value)} />
      <PageFooter />
    </PageContainerDark>
  );
};

export default Store;
