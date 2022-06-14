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
      <header className="w-full h-full box-border relative flex flex-col overflow-clip sm:overflow-auto scroll-smooth">
        <HeaderHomeTop />
        <div className="w-full h-[15px] min-h-[15px] block bg-transparent" />
        <HeaderHome />
        <div className="w-full h-[15px] min-h-[15px] block bg-transparent" />
      </header>
    </PageContainerDark>
  );
};

export default Store;
