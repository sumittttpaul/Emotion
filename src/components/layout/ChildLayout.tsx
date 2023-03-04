import React, { FC, ReactNode, useState } from 'react';
import { useReduxSelector } from '../../redux/useReduxSelector';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { HeaderMobile } from '../header/Header.Mobile';

interface IProps {
  children: ReactNode;
  ChildPage: string;
  setChildPage: (value: string) => void;
}

/**
 * @author
 * @function @ChildLayout
 **/

export const ChildLayout: FC<IProps> = (props) => {
  const { isMobile } = useReduxSelector((state) => state.Device);

  const Children = () => {
    return <div className="w-full flex-grow z-auto">{props.children}</div>;
  };

  if (isMobile)
    return (
      <main className="w-full flex-grow z-auto mx-auto">
        <HeaderMobile />
        <Children />
        <Footer setPage={props.setChildPage} />
      </main>
    );

  return (
    <main className="pl-[82px] w-full flex-grow z-auto mx-auto">
      <Header Page={props.ChildPage} setChildPage={props.setChildPage} />
      <Children />
      <Footer setPage={props.setChildPage} />
    </main>
  );
};
