import dynamic from 'next/dynamic';
import React, { FC, ReactNode } from 'react';
import { PageContainerDark } from '../container/PageContainerDark';
import { PageFooter } from '../footer/PageFooter/PageFooter';
import { LoadingPageheader } from '../loader/LoadingHeader';
// import { PageHeader } from '../header/PageHeader/PageHeader';

const PageHeader = dynamic(
  // @ts-ignore: Unreachable code error
  () => import('../header/PageHeader/PageHeader').then((x) => x.PageHeader),
  {
    loading: () => <LoadingPageheader />,
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
