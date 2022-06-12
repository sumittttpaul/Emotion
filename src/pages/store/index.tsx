import type { NextPage } from 'next';
import { PageContainerDark } from '../../components/container/PageContainerDark';
import { HeaderHome } from '../../components/header/MainHeader/HeaderHome';
import { HeaderHomeTop } from '../../components/header/TopHeader/HeaderHomeTop';

/**
 * @Store_Page
 **/
const Store: NextPage = () => {
  return (
    <PageContainerDark>
      <div className="w-full h-full box-border relative flex flex-col overflow-y-auto scroll-smooth">
        <HeaderHomeTop />
        <div className="w-full h-[20px] min-h-[20px] block bg-transparent" />
        <HeaderHome />
        <div className="w-full h-[20px] min-h-[20px] block bg-transparent" />
      </div>
    </PageContainerDark>
  );
};

export default Store;
