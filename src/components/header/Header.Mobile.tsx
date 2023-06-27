import React, { FC, useEffect } from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import { HeaderMobileSearchButton } from '../button/header/mobile/Header.Mobile.SearchButton';
import { HeaderMobileUserButton } from '../button/header/mobile/Header.Mobile.UserButton';
import { MobileLogo } from '../logo/CompanyLogo';
import { HeaderNavMobile } from './assets/Header.Nav.Mobile';
import { HeaderMobileSearchProps } from './assets/Header.Mobile.Search';
import { SearchMobileContent } from '../../contents/home/search/Home.Search';
import { setHomePage } from '../../redux/reducers/HomePageReducer';
import dynamic from 'next/dynamic';
import ReduxStore from '../../redux/ReduxStore';
import { useReduxStore } from '../../redux/useReduxStore';

const HeaderMobileSearch = dynamic<HeaderMobileSearchProps>(
  () =>
    import('./assets/Header.Mobile.Search').then((x) => x.HeaderMobileSearch),
  { ssr: false }
);

interface IProps {}

/**
 * @author
 * @function @HeaderMobile
 **/

export const HeaderMobile: FC<IProps> = (props) => {
  const { HomePage } = useReduxStore((state) => state);

  useEffect(() => {
    history.pushState('', document.title, window.location.pathname);
  }, []);

  return (
    <>
      <div className="overflow-hidden bg-primary-theme z-[999] flex w-full box-border text-white items-center px-3 pb-2">
        <div className="flex">
          <MobileLogo
            onValueChange={(value) => ReduxStore.dispatch(setHomePage(value))}
          />
        </div>
        <div className="flex w-full justify-end items-center">
          <HeaderMobileSearchButton />
          <IconButton className="p-0 mx-5">
            <Image height={22} width={22} src="/icons/bell-2.svg" alt="" />
          </IconButton>
          <HeaderMobileUserButton />
        </div>
      </div>
      <HeaderMobileSearch ContentArray={SearchMobileContent} />
      <HeaderNavMobile
        Value={HomePage.page}
        onValueChange={(value) => ReduxStore.dispatch(setHomePage(value))}
      />
    </>
  );
};
