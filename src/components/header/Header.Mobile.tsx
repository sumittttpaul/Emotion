import { IconButton } from '@mui/material';
import Image from 'next/legacy/image';
import React, { FC, useState } from 'react';
import { useHomePageState } from '../../providers/state/HomePageState';
import { HeaderMobileSearchButton } from '../button/header/mobile/Header.Mobile.SearchButton';
import { HeaderMobileUserButton } from '../button/header/mobile/Header.Mobile.UserButton';
import { HeaderLogo } from '../logo/CompanyLogo';
import { HeaderNavMobile } from './assets/Header.Nav.Mobile';

interface IProps {}

/**
 * @author
 * @function @HeaderMobile
 **/
export const HeaderMobile: FC<IProps> = (props) => {
  const { HomePageState, setHomePageState } = useHomePageState();
  const [OpenSearch, setOpenSearch] = useState(false);
  return (
    <>
      <div className="flex w-full relative box-border text-white items-center px-3 pt-5 pb-2">
        <div className={`${OpenSearch ? 'hidden' : 'flex '} w-full`}>
          <HeaderLogo
            onValueChange={(value) => setHomePageState({ Page: value })}
          />
        </div>
        <HeaderMobileSearchButton
          OpenSearch={OpenSearch}
          setOpenSearch={setOpenSearch}
        />
        <IconButton className={`${OpenSearch ? 'hidden' : 'flex'} p-0 mx-5`}>
          <Image height={22} width={22} src="/icons/bell-2.svg" alt="" />
        </IconButton>
        <div className={`${OpenSearch ? 'hidden' : 'flex'}`}>
          <HeaderMobileUserButton />
        </div>
      </div>
      <HeaderNavMobile
        Value={`${HomePageState.Page}`}
        onValueChange={(value) => setHomePageState({ Page: value })}
      />
    </>
  );
};
