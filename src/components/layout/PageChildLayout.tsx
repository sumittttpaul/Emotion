import React, { FC, ReactNode, useState } from 'react';
import { useReduxSelector } from '../../redux/useReduxSelector';
import { MainFooterMobile } from '../footer/MainFooter/MainFooter.Mobile';
import { MainHeader } from '../header/MainHeader/MainHeader';
import { MainHeaderMobile } from '../header/MainHeader/MainHeader.Mobile';

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
 * @function @PageChildLayout
 **/
export const PageChildLayout: FC<IProps> = (props) => {
  const [Active, setActive] = useState('Home');
  const { isMobile } = useReduxSelector((state) => state.Device);

  const Children = () => {
    return <div className="w-full flex-grow z-auto">{props.children}</div>;
  };

  if (isMobile)
    return (
      <main className="w-full flex-grow z-auto mx-auto">
        <MainHeaderMobile />
        <Children />
        <MainFooterMobile
          TopPanelData={TopSidePanelItems}
          Active={Active}
          setActive={(value) => setActive(value)}
        />
      </main>
    );

  return (
    <main className="pl-[82px] w-full flex-grow z-auto mx-auto">
      <MainHeader Page={props.ChildPage} setChildPage={props.setChildPage} />
      <Children />
    </main>
  );
};
