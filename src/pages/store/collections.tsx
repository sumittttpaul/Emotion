import type { NextPage } from 'next';
import { PageContainerDark } from '../../components/container/PageContainerDark';
import { PageHeader } from '../../components/header/PageHeader/PageHeader';
import { PageFooter } from '../../components/footer/PageFooter/PageFooter';
import { StoreUICollections } from '../../components/ui/StoreUI';
import { useState } from 'react';

/**
 * @Collections_Page
 **/
const Collections: NextPage = () => {
  const [Page, setPage] = useState('Collections');
  return (
    <PageContainerDark>
      <PageHeader />
      <StoreUICollections Page={Page} setPage={(value) => setPage(value)} />
      <PageFooter />
    </PageContainerDark>
  );
};

export default Collections;
