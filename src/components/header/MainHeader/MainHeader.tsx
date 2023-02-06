import Router from 'next/router';
import dynamic from 'next/dynamic';
import React, { FC, MouseEvent, useState } from 'react';
import { Wishlist_Link } from '../../../routerLinks/RouterLinks';
import { MainHeaderSearchButton } from '../../button/header/MainHeader.SearchButton';
import { MainHeaderWishlistButton } from '../../button/header/MainHeader.WishlistButton';
import { MainHeaderNav } from './assets/MainHeader.Nav';
import { MainHeaderNavMenuProps } from './assets/MainHeader.Nav.Menu';
import { PageHeaderUserButton } from '../../button/header/PageHeader.UserButton';
import { MainHeaderNotificationButton } from '../../button/header/MainHeader.NotificationButton';

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
  const NavMenuOpen = Boolean(anchorEl);

  const handleNavMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNavMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bg-[#0f0f0f] pr-2 flex flex-col z-[999] sticky-top justify-center items-center w-full h-[70px]">
      <div className="flex w-full space-x-2.5 items-center justify-between">
        <div className="flex w-full space-x-2.5">
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
            <MainHeaderSearchButton />
          </div>
        </div>
        {/* Wishlist, Notification, User Button */}
        <div className="flex space-x-2.5 items-center">
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
      <MainHeaderNavMenu
        anchorEl={anchorEl}
        open={NavMenuOpen}
        onClose={handleNavMenuClose}
        Value={props.Page}
        onValueChange={props.setChildPage}
      />
    </div>
  );
};
