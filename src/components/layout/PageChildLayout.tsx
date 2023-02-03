import React, { FC, ReactNode } from 'react';
import { MainHeader } from '../header/MainHeader/MainHeader';

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
    <main className="w-full flex-grow z-auto mx-auto pl-[82px]">
      <MainHeader Page={props.ChildPage} setChildPage={props.setChildPage} />
      <div className="w-full flex-grow z-auto">{props.children}</div>
    </main>
  );
};
