import { useEffect } from 'react';
import { IconButton } from '@mui/material';
import { HeaderMobileSearchButton } from '../button/header/mobile/Header.Mobile.SearchButton';
import { HeaderMobileUserButton } from '../button/header/mobile/Header.Mobile.UserButton';
import { MobileLogo } from '../logo/CompanyLogo';
import { HeaderMobileSearchProps } from './assets/Header.Mobile.Search';
import { SearchMobileContent } from '../../contents/home/search/Home.Search';
import { HomePageHook } from 'hooks/Hooks.HomePage';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import HeaderNavMobile from './assets/Header.Nav.Mobile';

const HeaderMobileSearch = dynamic<HeaderMobileSearchProps>(
  () => import('./assets/Header.Mobile.Search'),
  { ssr: false }
);

function HeaderMobile() {
  const { HomePage, setHomePage } = HomePageHook();

  useEffect(() => {
    history.pushState('', document.title, window.location.pathname);
  }, []);

  return (
    <>
      <div className="overflow-hidden bg-primary-theme z-[999] flex w-full box-border text-white items-center px-3 pb-2">
        <div className="flex">
          <MobileLogo onValueChange={(value) => setHomePage(value)} />
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
        Value={HomePage}
        onValueChange={(value) => setHomePage(value)}
      />
    </>
  );
}

export default HeaderMobile;
