import React, { FC, ReactNode, useState } from 'react';
import { useReduxSelector } from '../../redux/useReduxSelector';
import { FooterMobile } from '../footer/Footer.Mobile';
import { Header } from '../header/Header';
import { HeaderMobile } from '../header/Header.Mobile';

interface IProps {
  children: ReactNode;
  ChildPage: string;
  setChildPage: (value: string) => void;
}

const TopSidePanelItems = [
  {
    Name: 'Home',
    Icon: '/icons/home.svg',
    IconActive: '/icons/home-fill.svg',
  },
  {
    Name: 'Search',
    Icon: '/icons/search-footer.svg',
    IconActive: '/icons/search-footer-fill.svg',
  },
  {
    Name: 'Basket',
    Icon: '/icons/basket.svg',
    IconActive: '/icons/basket-fill.svg',
  },
];

/**
 * @author
 * @function @ChildLayout
 **/
export const ChildLayout: FC<IProps> = (props) => {
  const [Active, setActive] = useState('Home');
  const { isMobile } = useReduxSelector((state) => state.Device);

  const Children = () => {
    return <div className="w-full flex-grow z-auto">{props.children}</div>;
  };

  if (isMobile)
    return (
      <main className="w-full flex-grow z-auto mx-auto">
        <HeaderMobile />
        <Children />
        <FooterMobile
          TopPanelData={TopSidePanelItems}
          Active={Active}
          setActive={(value) => setActive(value)}
        />
      </main>
    );

  return (
    <main className="pl-[82px] w-full flex-grow z-auto mx-auto">
      <Header Page={props.ChildPage} setChildPage={props.setChildPage} />
      <Children />
    </main>
  );
};
