import { Button, IconButton } from '@mui/material';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { HeaderMobileUserButton } from './mobile/Header.Mobile.UserButton';

interface IProps {}

/**
 * @author
 * @function @HeaderMobile
 **/
export const HeaderMobile: FC<IProps> = (props) => {
  const [Greeting, setGreeting] = useState('');

  useEffect(() => {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      setGreeting('Good morning');
    } else if (curHr < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, [Greeting]);

  return (
    <>
      <div className="flex w-full relative box-border text-white items-center p-3 mt-5">
        <div className="flex w-full">
          <p className="text-[21px] font-semibold">{Greeting}</p>
        </div>
        <div className="flex w-[100px] items-center">
          <IconButton className="p-0 mr-5">
            <Image height={22} width={22} src="/icons/bell-2.svg" alt="" />
          </IconButton>
          <HeaderMobileUserButton />
        </div>
      </div>
      <div className="flex w-full sticky-top p-3 space-x-2 z-[999] bg-[#0f0f0f]">
        <Button className="text-white px-4 py-[6px] text-[12px] font-normal rounded-full button-text-lower bg-[#ffffff20] hover:bg-[#ffffff20]">
          Discover
        </Button>
        <Button className="text-white px-4 py-[6px] text-[12px] font-normal rounded-full button-text-lower bg-[#ffffff20] hover:bg-[#ffffff20]">
          Offers
        </Button>
        <Button className="text-white px-4 py-[6px] text-[12px] font-normal rounded-full button-text-lower bg-[#ffffff20] hover:bg-[#ffffff20]">
          Collections
        </Button>
      </div>
    </>
  );
};
