import { motion, useCycle, Variants } from 'framer-motion';
import Router from 'next/router';
import React, { FC, useRef, useState } from 'react';
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
  const [NavSliderOpen, setNavSliderOpen] = useCycle(false, true);
  const [SearchSliderOpen, setSearchSliderOpen] = useState(false);
  const ContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="w-full h-[12px] min-h-[12px]" />
      <div
        ref={ContainerRef}
        className={`${
          NavSliderOpen || SearchSliderOpen
            ? 'bg-[#121212]'
            : 'bg-[rgba(18,18,18,0.95)]'
        } ${'flex flex-col z-[999] sticky-top items-start box-border w-full h-[74px] backdrop-blur-[8px]'}`}
      >
        <div className="flex relative box-border w-full h-full justify-between items-center py-3 sm:px-5 px-3 overflow-x-hidden">
          <div className="flex relative w-full md-900:space-x-6 items-center">
            <div>
              <MainHeaderSearchButton
                ContainerRef={ContainerRef}
                Open={SearchSliderOpen}
                onOpen={() => setSearchSliderOpen(true)}
              />
            </div>
            <div className="flex w-full justify-between">
              <MainHeaderNav
                open={NavSliderOpen}
                onOpen={() => setNavSliderOpen()}
                Value={props.Page}
                onValueChange={props.setPage}
              />
              <div className="flex relative space-x-2.5 sm:space-x-4 items-center">
                <MainHeaderWishlistButton
                  value={props.Page}
                  Click={() => {
                    setTimeout(() => {
                      if (NavSliderOpen === true) setNavSliderOpen();
                      props.setPage('Wishlist');
                      Router.push(Wishlist_Link);
                    }, 150);
                  }}
                />
                <MainHeaderCartButton
                  value={props.Page}
                  Click={() => {
                    setTimeout(() => {
                      if (NavSliderOpen === true) setNavSliderOpen();
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
          open={NavSliderOpen}
          onClose={() => setNavSliderOpen()}
          Value={props.Page}
          onValueChange={props.setPage}
        />
        <MainHeaderSearchSlider
          open={SearchSliderOpen}
          onClose={() => setSearchSliderOpen(false)}
        />
      </div>
      <div className="w-full h-[12px] min-h-[12px]" />
    </>
  );
};
