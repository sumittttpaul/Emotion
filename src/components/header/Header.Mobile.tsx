import { IconButton } from '@mui/material';
import Image from 'next/legacy/image';
import { motion } from 'framer-motion';
import React, { FC, useState } from 'react';
import { useHomePageState } from '../../providers/state/HomePageState';
import { HeaderMobileSearchButton } from '../button/header/mobile/Header.Mobile.SearchButton';
import { HeaderMobileUserButton } from '../button/header/mobile/Header.Mobile.UserButton';
import { MobileLogo } from '../logo/CompanyLogo';
import { HeaderNavMobile } from './assets/Header.Nav.Mobile';

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
      width: 0,
    },
    closed: {
      width: '100%',
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
      <div className="overflow-hidden flex w-full relative box-border text-white items-center px-3 pt-5 pb-2">
        <motion.div
          animate={animate}
          variants={LogoDivVariant}
          transition={{
            duration: OpenSearch ? 0.3 : 0.3,
            type: 'tween',
          }}
          className="w-full flex"
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
            duration: OpenSearch ? 0.2 : 0.2,
            type: 'tween',
            delay: OpenSearch ? 0.05 : 0,
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
      <HeaderNavMobile
        Value={`${HomePageState.Page}`}
        onValueChange={(value) => setHomePageState({ Page: value })}
      />
    </>
  );
};
