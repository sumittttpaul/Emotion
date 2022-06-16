import type { NextPage } from 'next';
import { PageContainerDark } from '../../components/container/PageContainerDark';
import { PageHeader } from '../../components/header/PageHeader/PageHeader';
import { MainHeader } from '../../components/header/MainHeader/MainHeader';
import { PageFooter } from '../../components/footer/PageFooter/PageFooter';

/**
 * @Store_Page
 **/
const Store: NextPage = () => {
  return (
    <PageContainerDark>
      <PageHeader />
      <main className="w-full flex-grow z-auto">
        <MainHeader />
        <div className="text-[245,245,245] relative">
          {/* Content */}
          <h6 className="text-white p-5 w-full text-center">I am Content</h6>
        </div>
      </main>
      <PageFooter />
    </PageContainerDark>
  );
};

export default Store;
