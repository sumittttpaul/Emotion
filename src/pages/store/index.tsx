import type { NextPage } from 'next';
import { PageContainerDark } from '../../components/container/PageContainerDark';
import { PageHeader } from '../../components/header/PageHeader';

/**
 * @Store_Page
 **/
const Store: NextPage = () => {
  return (
    <PageContainerDark>
      <PageHeader/>
    </PageContainerDark>
  );
};

export default Store;
