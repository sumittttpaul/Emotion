import React, { FC, ReactNode, useState } from 'react';
import { BrowserView, isBrowser, MobileView } from 'react-device-detect';
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
  return (
    <main
      className={` ${
        isBrowser ? 'pl-[82px] pt-[70px]' : ''
      } w-full flex-grow z-auto mx-auto`}
    >
      <BrowserView>
        <MainHeader Page={props.ChildPage} setChildPage={props.setChildPage} />
      </BrowserView>
      <MobileView>
        <MainHeaderMobile />
      </MobileView>
      <div className="w-full flex-grow z-auto">{props.children}</div>
      <MobileView>
        <MainFooterMobile
          TopPanelData={TopSidePanelItems}
          Active={Active}
          setActive={(value) => setActive(value)}
        />
      </MobileView>
    </main>
  );
};
