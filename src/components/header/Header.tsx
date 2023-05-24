import Router from 'next/router';
import dynamic from 'next/dynamic';
import React, { FC, MouseEvent, useState } from 'react';
import { Wishlist_Link } from '../../routerLinks/RouterLinks';
import { HeaderSearchButton } from '../button/header/Header.SearchButton';
import { HeaderWishlistButton } from '../button/header/Header.WishlistButton';
import { HeaderNav } from './assets/Header.Nav';
import { HeaderNavMenuProps } from './assets/Header.Nav.Menu';
import { HeaderUserButton } from '../button/header/Header.UserButton';
import { HeaderNotificationButton } from '../button/header/Header.NotificationButton';
import { useHomePageState } from '../../providers/state/HomePageState';

const HeaderNavMenu = dynamic<HeaderNavMenuProps>(() =>
  import('./assets/Header.Nav.Menu').then((x) => x.HeaderNavMenu)
);

interface HeaderProps {}

/**
 * @author
 * @function @Header
 **/
export const Header: FC<HeaderProps> = (props) => {
  const { HomePageState, setHomePageState } = useHomePageState();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const NavMenuOpen = Boolean(anchorEl);

  const handleNavMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNavMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bg-[#0f0f0f] flex flex-col z-[999] fixed top-0 justify-center items-center w-full h-[70px] pr-[278px]">
      <div className="flex w-full space-x-2.5 items-center">
        <div className="flex w-full space-x-2.5 items-center xl-1765:justify-between">
          {/* Nav Bar [ Discover, Offers, Collections] */}
          <div className="flex items-center">
            <HeaderNav
              open={NavMenuOpen}
              onOpen={handleNavMenuClick}
              Value={`${HomePageState.Page}`}
              onValueChange={(value) => setHomePageState({ Page: value })}
            />
          </div>
          {/* Search Button */}
          <div className="flex w-full xl-1765:max-w-[600px] items-center">
            <div className="flex h-full w-full max-w-[600px] xl-1765:-ml-[200px] items-center justify-center">
              <HeaderSearchButton />
            </div>
          </div>
          {/* Wishlist, Notification, User Button */}
          <div className="flex space-x-2.5 items-center ">
            <HeaderNotificationButton />
            <HeaderUserButton />
          </div>
        </div>
      </div>
      <HeaderNavMenu
        anchorEl={anchorEl}
        open={NavMenuOpen}
        onClose={handleNavMenuClose}
        Value={`${HomePageState.Page}`}
        onValueChange={(value) => setHomePageState({ Page: value })}
      />
    </div>
  );
};
