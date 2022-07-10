import dynamic from 'next/dynamic';
import React, { FC, ReactNode } from 'react';
import { PageContainerDark } from '../container/PageContainerDark';
import { PageFooterProps } from '../footer/PageFooter/PageFooter';
import { PageHeaderProps } from '../header/PageHeader/PageHeader';
import { LoadingPageheader } from '../loader/LoadingSkeleton';
// import { PageFooter } from '../footer/PageFooter/PageFooter';
// import { PageHeader } from '../header/PageHeader/PageHeader';

const PageHeader = dynamic<PageHeaderProps>(
  () => import('../header/PageHeader/PageHeader').then((x) => x.PageHeader),
  {
    loading: () => <LoadingPageheader />,
    ssr: false,
  }
);

const PageFooter = dynamic<PageFooterProps>(
  () => import('../footer/PageFooter/PageFooter').then((x) => x.PageFooter),
  {
    ssr: false,
  }
);

interface IProps {
  children: ReactNode;
  setChildPage: (value: string) => void;
}

/**
 * @author
 * @function @PageParentLayout
 **/

export const PageParentLayout: FC<IProps> = (props) => {
  return (
    <PageContainerDark>
      <PageHeader setPage={props.setChildPage} />
      {props.children}
      <PageFooter setPage={props.setChildPage} />
    </PageContainerDark>
  );
};
