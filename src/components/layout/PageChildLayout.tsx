import dynamic from 'next/dynamic';
import React, { FC, ReactNode } from 'react';
import { LoadingMainheader } from '../loader/LoadingSkeleton';
// import { MainHeader } from '../header/MainHeader/MainHeader';

const MainHeader = dynamic(
  // @ts-ignore: Unreachable code error
  () => import('../header/MainHeader/MainHeader').then((x) => x.MainHeader),
  {
    loading: () => <LoadingMainheader />,
    ssr: false,
  }
);

interface IProps {
  children: ReactNode;
  ChildPage: string;
  setChildPage: (value: string) => void;
}

/**
 * @author
 * @function @PageChildLayout
 **/

export const PageChildLayout: FC<IProps> = (props) => {
  return (
    <main className="w-full flex-grow z-auto">
      {/* <LoadingMainheader/> */}
      <MainHeader Page={props.ChildPage} setPage={props.setChildPage} />
      {props.children}
    </main>
  );
};
