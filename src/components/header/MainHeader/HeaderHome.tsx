import { useCycle } from 'framer-motion';
import React, { FC, useState } from 'react';
import { CartButtonDark } from '../../button/CartButtonDark';
import { SearchButton } from '../../button/SearchButton';
import { WishlistButtonDark } from '../../button/WishlistButtonDark';
import { MainHeaderNav } from './assets/MainHeaderNav';
import { MainHeaderSlider } from './assets/MainHeaderSlider';

interface IProps {}

/**
 * @author
 * @function @HeaderHome
 **/

export const HeaderHome: FC<IProps> = (props) => {
  const [open, setOpen] = useCycle(false,true);
  return (
    <div className="flex sticky items-start box-border w-full max-w-[1440px] mx-auto my-2.5">
      <div className="flex relative box-border w-full justify-between items-center sm:px-5 px-3">
        <div className="flex relative md-900:space-x-6 items-center">
          <SearchButton />
          <MainHeaderNav open={open} onOpen={() => setOpen()} />
        </div>
        <div className="flex relative space-x-2.5 sm:space-x-4 items-center">
          <WishlistButtonDark />
          <CartButtonDark />
        </div>
      </div>
      <MainHeaderSlider open={open} onClose={() => setOpen()} />
    </div>
  );
};
