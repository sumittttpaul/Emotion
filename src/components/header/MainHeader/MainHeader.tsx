import { useCycle } from 'framer-motion';
import Router from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { Cart_Link, Wishlist_Link } from '../../../routerLinks/RouterLinks';
import { MainHeaderCartButton } from '../../button/header/MainHeaderCartButton';
import { MainHeaderSearchButton } from '../../button/header/MainHeaderSearchButton';
import { MainHeaderWishlistButton } from '../../button/header/MainHeaderWishlistButton';
import { MainHeaderNav } from './assets/MainHeaderNav';
import { MainHeaderSlider } from './assets/MainHeaderSlider';

interface IProps {
  CurrentPage?: string;
}

/**
 * @author
 * @function @MainHeader
 **/

export const MainHeader: FC<IProps> = (props) => {
  const [open, setOpen] = useCycle(false, true);
  const [Content, setContent] = useState('Discover');
  useEffect(() => {
    if (props.CurrentPage) {
      setContent(props.CurrentPage);
    }
  }, [Content]);
  return (
    <>
      <div className="w-full h-[17px] min-h-[17px]" />
      <div
        className={`${
          open ? 'bg-[#121212]' : 'bg-[rgba(18,18,18,0.9)]'
        } ${'flex flex-col z-[999] sticky-top items-start box-border w-full py-3 sm:py-4 backdrop-blur-sm'}`}
      >
        <div className="flex relative box-border w-full max-w-[1440px] mx-auto justify-between items-center sm:px-5 px-3">
          <div className="flex relative md-900:space-x-6 items-center">
            <MainHeaderSearchButton />
            <MainHeaderNav
              open={open}
              onOpen={() => setOpen()}
              Value={Content}
              onValueChange={(value) => setContent(value)}
            />
          </div>
          <div className="flex relative space-x-2.5 sm:space-x-4 items-center">
            <MainHeaderWishlistButton
              Click={() => {
                setTimeout(() => {
                  Router.push(Wishlist_Link);
                }, 150);
              }}
            />
            <MainHeaderCartButton
              Click={() => {
                setTimeout(() => {
                  Router.push(Cart_Link);
                }, 150);
              }}
            />
          </div>
        </div>
        <MainHeaderSlider
          open={open}
          onClose={() => setOpen()}
          Value={Content}
          onValueChange={(value) => setContent(value)}
        />
      </div>
      <div className="w-full h-[17px] min-h-[17px]" />
    </>
  );
};
