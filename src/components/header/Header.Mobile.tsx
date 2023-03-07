import { IconButton } from '@mui/material';
import Image from 'next/legacy/image';
import { motion } from 'framer-motion';
import React, { FC, useState } from 'react';
import { useHomePageState } from '../../providers/state/HomePageState';
import { HeaderMobileSearchButton } from '../button/header/mobile/Header.Mobile.SearchButton';
import { HeaderMobileUserButton } from '../button/header/mobile/Header.Mobile.UserButton';
import { MobileLogo } from '../logo/CompanyLogo';
import { HeaderNavMobile } from './assets/Header.Nav.Mobile';
import dynamic from 'next/dynamic';
import { SearchMobileContent } from '../../contents/store/search/Store.Search';
import { HeaderMobileSearchButtonMenuProps } from '../button/header/mobile/Header.Mobile.SearchButton.Menu';

const HeaderMobileSearchButtonMenu = dynamic<HeaderMobileSearchButtonMenuProps>(
  () =>
    import('../button/header/mobile/Header.Mobile.SearchButton.Menu').then(
      (x) => x.HeaderMobileSearchButtonMenu
    )
);

interface IProps {}

/**
 * @author
 * @function @HeaderMobile
 **/
export const HeaderMobile: FC<IProps> = (props) => {
  const { HomePageState, setHomePageState } = useHomePageState();
  const [OpenSearch, setOpenSearch] = useState(false);
  const [animate, setAnimate] = useState('closed');

  const LogoDivVariant = {
    open: {
      marginLeft: -42,
      marginRight: 12,
    },
    closed: {
      marginLeft: 0,
      marginRight: 0,
    },
  };

  const ButtonDivVariant = {
    open: {
      width: 0,
    },
    closed: {
      width: 'auto',
    },
  };

  return (
    <>
      <div className="overflow-hidden flex w-full box-border text-white items-center px-3 pt-5 pb-2">
        <motion.div
          animate={animate}
          variants={LogoDivVariant}
          transition={{
            duration: 0.3,
            type: 'tween',
          }}
          className="flex"
        >
          <MobileLogo
            onValueChange={(value) => setHomePageState({ Page: value })}
          />
        </motion.div>
        <HeaderMobileSearchButton
          OpenSearch={OpenSearch}
          setOpenSearch={setOpenSearch}
          setDivAnimate={setAnimate}
        />
        <motion.div
          animate={animate}
          variants={ButtonDivVariant}
          transition={{
            duration: 0.2,
            type: 'tween',
          }}
          className="flex"
        >
          <IconButton className="p-0 mx-5">
            <Image height={22} width={22} src="/icons/bell-2.svg" alt="" />
          </IconButton>
          <div className="mr-5">
            <HeaderMobileUserButton />
          </div>
        </motion.div>
      </div>
      <HeaderMobileSearchButtonMenu
        SearchMenu={OpenSearch}
        ContentArray={SearchMobileContent}
      />
      <HeaderNavMobile
        Value={`${HomePageState.Page}`}
        onValueChange={(value) => setHomePageState({ Page: value })}
      />
    </>
  );
};
