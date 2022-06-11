import type { NextPage } from 'next';
import { useEffect } from 'react';
import { PageContainerDark } from '../components/container/PageContainerDark';
import { HeaderHomeTop } from '../components/header/HeaderHomeTop';

/**
 * @Home_Page
 **/
const Home: NextPage = () => {
  return (
    <PageContainerDark>
      <HeaderHomeTop />
      <div className="w-full h-full items-center justify-center box-border relative flex flex-col overflow-auto">
        
      </div>
    </PageContainerDark>
  );
};

export default Home;
