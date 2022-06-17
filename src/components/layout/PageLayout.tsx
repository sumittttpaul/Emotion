import React, { FC, ReactNode, useEffect, useState } from 'react';
import { PageContainerDark } from '../container/PageContainerDark';
import { PageFooter } from '../footer/PageFooter/PageFooter';
import { MainHeader } from '../header/MainHeader/MainHeader';
import { PageHeader } from '../header/PageHeader/PageHeader';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @PageLayout
 **/

export const PageLayout: FC<IProps> = (props) => {
  const [Page, setPage] = useState('');
  return (
    <PageContainerDark>
      <PageHeader />
      <main className="w-full flex-grow z-auto">
        <MainHeader Page={Page} setPage={(value) => setPage(value)} />
        {props.children}
      </main>
      <PageFooter />
    </PageContainerDark>
  );
};
