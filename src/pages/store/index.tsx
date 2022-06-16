import type { NextPage } from 'next';
import { PageContainerDark } from '../../components/container/PageContainerDark';
import { PageFooter } from '../../components/footer/PageFooter';
import { PageHeader } from '../../components/header/PageHeader/PageHeader';

/**
 * @Store_Page
 **/
const Store: NextPage = () => {
  return (
    <PageContainerDark>
      <PageHeader />
      
      {/* <PageFooter/> */}
    </PageContainerDark>
  );
};

export default Store;
