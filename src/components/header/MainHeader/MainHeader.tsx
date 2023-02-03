import { useCycle } from 'framer-motion';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Wishlist_Link } from '../../../routerLinks/RouterLinks';
import { MainHeaderSearchButton } from '../../button/header/MainHeader.SearchButton';
import { MainHeaderWishlistButton } from '../../button/header/MainHeader.WishlistButton';
import { MainHeaderNav } from './assets/MainHeader.Nav';
import { MainHeaderSearchMenuProps } from './search/MainHeader.Search.Menu';
import { MainHeaderSliderProps } from './assets/MainHeader.Slider';
import { PageHeaderUserButton } from '../../button/header/PageHeader.UserButton';
import { MainHeaderNotificationButton } from '../../button/header/MainHeader.NotificationButton';

const MainHeaderSearchMenu = dynamic<MainHeaderSearchMenuProps>(() =>
  import('./search/MainHeader.Search.Menu').then((x) => x.MainHeaderSearchMenu)
);
const MainHeaderSlider = dynamic<MainHeaderSliderProps>(() =>
  import('./assets/MainHeader.Slider').then((x) => x.MainHeaderSlider)
);

export interface MainHeaderProps {
  Page: string;
  setChildPage: (value: string) => void;
}

/**
 * @author
 * @function @MainHeader
 **/
export const MainHeader: FC<MainHeaderProps> = (props) => {
  const [NavSliderOpen, setNavSliderOpen] = useCycle(false, true);
  const [SearchMenuOpen, setSearchMenuOpen] = useState('closed');
  const ContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ContainerRef}
      className="bg-[#0f0f0f] flex flex-col z-[999] sticky-top items-center box-border w-full h-[70px]"
    >
      <div className="flex relative box-border w-full h-full justify-between items-center overflow-x-hidden">
        <div className="flex relative w-full pr-2 md-900:space-x-6 items-center justify-between">
          <div className="flex relative w-full">
            {/* Nav Bar [ Discover, Offers, Collections] */}
            <div className="flex items-center">
              <MainHeaderNav
                open={NavSliderOpen}
                onOpen={() => setNavSliderOpen()}
                Value={props.Page}
                onValueChange={props.setChildPage}
              />
            </div>
            {/* Search Button */}
            <div className="w-full flex ml-2">
              <MainHeaderSearchButton
                ContainerRef={ContainerRef}
                Open={SearchMenuOpen === 'open' ? true : false}
                onOpen={() => setSearchMenuOpen('open')}
                onClosed={() => setSearchMenuOpen('closed')}
              />
            </div>
          </div>
          {/* Wishlist, Notification, User Button */}
          <div className="flex relative space-x-2.5 items-center">
            <MainHeaderWishlistButton
              value={props.Page}
              Click={() => {
                setTimeout(() => {
                  if (NavSliderOpen === true) setNavSliderOpen();
                  props.setChildPage('Wishlist');
                  Router.push(Wishlist_Link);
                }, 150);
              }}
            />
            <MainHeaderNotificationButton />
            <PageHeaderUserButton />
          </div>
        </div>
      </div>
      {/* <MainHeaderSlider
        open={NavSliderOpen}
        onClose={() => setNavSliderOpen()}
        Value={props.Page}
        onValueChange={props.setChildPage}
      /> */}
        <MainHeaderSearchMenu
          SearchMenu={SearchMenuOpen}
          setSearchMenu={(value) => setSearchMenuOpen(value)}
        />
    </div>
  );
};
