import React, { FC, ReactNode } from 'react';
import { useReduxSelector } from '../../redux/useReduxSelector';
import { Footer } from '../footer/Footer';
import { FooterMobile } from '../footer/Footer.Mobile';
import { Header } from '../header/Header';
import { HeaderMobile } from '../header/Header.Mobile';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @ChildLayout
 **/

export const ChildLayout: FC<IProps> = (props) => {
  const { isMobile } = useReduxSelector((state) => state.Device);

  const Children = () => {
    return <div className="w-full z-auto">{props.children}</div>;
  };

  if (isMobile)
    return (
      <main className="w-full z-auto mx-auto">
        <HeaderMobile />
        {/* <Children /> */}
        {/* <FooterMobile /> */}
      </main>
    );

  return (
    <main className="pl-[268px] w-full flex-grow z-auto mx-auto">
      <Header />
      <Children />
      <Footer />
    </main>
  );
};
