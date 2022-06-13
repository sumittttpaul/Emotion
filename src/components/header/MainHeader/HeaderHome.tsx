import React, { FC } from 'react';
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
  return (
    <>
      <div className="flex relative box-border w-full max-w-[1440px] mx-auto justify-between items-center my-2.5 sm:px-5 px-3">
        <div className="flex relative md-900:space-x-6 items-center">
          <SearchButton />
          <MainHeaderNav />
        </div>
        <div className="flex relative space-x-2.5 sm:space-x-4 items-center">
          <WishlistButtonDark />
          <CartButtonDark />
        </div>
      </div>
      <MainHeaderSlider/>
    </>
  );
};
