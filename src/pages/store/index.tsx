import type { NextPage } from 'next';
import { PageContainerDark } from '../../components/container/PageContainerDark';
import { HeaderHomeTop } from '../../components/header/HeaderHomeTop';

/**
 * @Store_Page
 **/
const Store: NextPage = () => {
  return (
    <PageContainerDark>
      <HeaderHomeTop />
      <div className="w-full h-full items-center justify-center box-border relative flex flex-col overflow-auto"></div>
    </PageContainerDark>
  );
};

export default Store;
