import { motion, useCycle, Variants } from 'framer-motion';
import Router from 'next/router';
import React, { FC, useRef } from 'react';
import { Cart_Link, Wishlist_Link } from '../../../routerLinks/RouterLinks';
import { MainHeaderCartButton } from '../../button/header/MainHeader.CartButton';
import { MainHeaderSearchButton } from '../../button/header/MainHeader.SearchButton';
import { MainHeaderWishlistButton } from '../../button/header/MainHeader.WishlistButton';
import { MainHeaderNav } from './assets/MainHeaderNav';
import { MainHeaderSearchSlider } from './assets/MainHeaderSearchSlider';
import { MainHeaderSlider } from './assets/MainHeaderSlider';

export interface MainHeaderProps {
  Page: string;
  setPage: (value: string) => void;
}

/**
 * @author
 * @function @MainHeader
 **/

export const MainHeader: FC<MainHeaderProps> = (props) => {
  const [open, setOpen] = useCycle(false, true);
  const ContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="w-full h-[17px] min-h-[17px]" />
      <div
        ref={ContainerRef}
        className={`${
          open ? 'bg-[#121212]' : 'bg-[rgba(18,18,18,0.95)]'
        } ${'flex flex-col z-[999] sticky-top items-start box-border w-full backdrop-blur-[8px]'}`}
      >
        <div className="flex relative box-border w-full justify-between items-center sm:px-5 px-3 overflow-x-hidden">
          <div className="flex relative w-full md-900:space-x-6 items-center">
            <div>
              <MainHeaderSearchButton ContainerRef={ContainerRef} />
            </div>
            <div className="flex w-full justify-between py-3 sm:py-4">
              <MainHeaderNav
                open={open}
                onOpen={() => setOpen()}
                Value={props.Page}
                onValueChange={props.setPage}
              />
              <div className="flex relative space-x-2.5 sm:space-x-4 items-center">
                <MainHeaderWishlistButton
                  value={props.Page}
                  Click={() => {
                    setTimeout(() => {
                      if (open === true) setOpen();
                      props.setPage('Wishlist');
                      Router.push(Wishlist_Link);
                    }, 150);
                  }}
                />
                <MainHeaderCartButton
                  value={props.Page}
                  Click={() => {
                    setTimeout(() => {
                      if (open === true) setOpen();
                      props.setPage('Cart');
                      Router.push(Cart_Link);
                    }, 150);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <MainHeaderSlider
          open={open}
          onClose={() => setOpen()}
          Value={props.Page}
          onValueChange={props.setPage}
        />
        <MainHeaderSearchSlider />
      </div>
      <div className="w-full h-[17px] min-h-[17px]" />
    </>
  );
};
