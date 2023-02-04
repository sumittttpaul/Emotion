import { useCycle } from 'framer-motion';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import React, { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { Wishlist_Link } from '../../../routerLinks/RouterLinks';
import { MainHeaderSearchButton } from '../../button/header/MainHeader.SearchButton';
import { MainHeaderWishlistButton } from '../../button/header/MainHeader.WishlistButton';
import { MainHeaderNav } from './assets/MainHeader.Nav';
import { MainHeaderSearchMenuProps } from './search/MainHeader.Search.Menu';
import { MainHeaderNavMenuProps } from './assets/MainHeader.Nav.Menu';
import { PageHeaderUserButton } from '../../button/header/PageHeader.UserButton';
import { MainHeaderNotificationButton } from '../../button/header/MainHeader.NotificationButton';

const MainHeaderSearchMenu = dynamic<MainHeaderSearchMenuProps>(() =>
  import('./search/MainHeader.Search.Menu').then((x) => x.MainHeaderSearchMenu)
);
const MainHeaderNavMenu = dynamic<MainHeaderNavMenuProps>(() =>
  import('./assets/MainHeader.Nav.Menu').then((x) => x.MainHeaderNavMenu)
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [SearchMenuOpen, setSearchMenuOpen] = useState(false);
  const ContainerRef = useRef<HTMLDivElement>(null);
  const NavMenuOpen = Boolean(anchorEl);

  const handleNavMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNavMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      ref={ContainerRef}
      className="bg-[#0f0f0f] flex flex-col z-[999] sticky-top items-center box-border w-full h-[70px]"
    >
      <div className="flex relative box-border w-full h-full justify-between items-center overflow-x-hidden">
        <div className="flex relative w-full pr-2 space-x-2.5 items-center justify-between">
          <div className="flex relative w-full space-x-2">
            {/* Nav Bar [ Discover, Offers, Collections] */}
            <div className="flex items-center">
              <MainHeaderNav
                open={NavMenuOpen}
                onOpen={handleNavMenuClick}
                Value={props.Page}
                onValueChange={props.setChildPage}
              />
            </div>
            {/* Search Button */}
            <div className="flex w-full">
              <MainHeaderSearchButton
                ContainerRef={ContainerRef}
                Open={SearchMenuOpen}
                onOpen={() => setSearchMenuOpen(true)}
                onClosed={() => setSearchMenuOpen(false)}
              />
            </div>
          </div>
          {/* Wishlist, Notification, User Button */}
          <div className="flex relative space-x-2.5 items-center">
            <MainHeaderWishlistButton
              value={props.Page}
              Click={() => {
                setTimeout(() => {
                  if (NavMenuOpen === true) handleNavMenuClose();
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
      <MainHeaderNavMenu
        anchorEl={anchorEl}
        open={NavMenuOpen}
        onClose={handleNavMenuClose}
        Value={props.Page}
        onValueChange={props.setChildPage}
      />
      {/* <MainHeaderSearchMenu
        SearchMenu={true}
        setSearchMenu={(value) => setSearchMenuOpen(value)}
      /> */}
    </div>
  );
};
