import type { NextPage } from 'next';
import { PageContainerDark } from '../../components/container/PageContainerDark';
import { HeaderHome } from '../../components/header/HeaderHome';
import { HeaderHomeTop } from '../../components/header/HeaderHomeTop';

/**
 * @Store_Page
 **/
const Store: NextPage = () => {
  return (
    <PageContainerDark>
      <div className="w-full h-full box-border relative flex flex-col overflow-y-auto scroll-smooth">
        <HeaderHomeTop />
        <div className="w-full h-5 flex relative bg-transparent" />
        <HeaderHome />
        <div className="w-full h-5 bg-transparent" />
      </div>
    </PageContainerDark>
  );
};

export default Store;
