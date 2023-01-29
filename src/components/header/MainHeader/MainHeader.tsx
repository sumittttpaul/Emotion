import { useCycle } from 'framer-motion';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import React, { FC, useRef, useState } from 'react';
import {
  Cart_Link,
  Home_Link,
  Wishlist_Link,
} from '../../../routerLinks/RouterLinks';
import { MainHeaderCartButton } from '../../button/header/MainHeader.CartButton';
import { MainHeaderSearchButton } from '../../button/header/MainHeader.SearchButton';
import { MainHeaderWishlistButton } from '../../button/header/MainHeader.WishlistButton';
import { MainHeaderNav } from './assets/MainHeader.Nav';
import { MainHeaderSearchSliderProps } from './search/MainHeader.Search.Slider';
import { MainHeaderSliderProps } from './assets/MainHeader.Slider';
import { PageHeaderUserButton } from '../../button/header/PageHeader.UserButton';
import { MainHeaderNotificationButton } from '../../button/header/MainHeader.NotificationButton';
import { useLoaderState } from '../../../providers/state/LoadingState';
import { PageHeaderLogo } from '../../logo/CompanyLogo';

const MainHeaderSearchSlider = dynamic<MainHeaderSearchSliderProps>(
  () =>
    import('./search/MainHeader.Search.Slider').then(
      (x) => x.MainHeaderSearchSlider
    ),
  { ssr: true }
);
const MainHeaderSlider = dynamic<MainHeaderSliderProps>(
  () => import('./assets/MainHeader.Slider').then((x) => x.MainHeaderSlider),
  { ssr: true }
);

export interface MainHeaderProps {
  Page: string;
  setChildPage: (value: string) => void;
}

/**
 * @author
 * @function @MainHeader
 **/

export const MainHeader: FC<MainHeaderProps> = (props) => {
  const [NavSliderOpen, setNavSliderOpen] = useCycle(false, true);
  const [SearchSliderOpen, setSearchSliderOpen] = useState(false);
  const [SearchSliderAnimation, setSearchSliderAnimation] = useState(false);
  const ContainerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {/* <div className="w-full h-[12px] min-h-[12px]" /> */}
      <div
        ref={ContainerRef}
        className={`${
          NavSliderOpen || SearchSliderOpen ? 'bg-[#0f0f0f]' : 'bg-[#0f0f0ff2]'
        } ${'flex flex-col z-[999] sticky-top items-center box-border w-full h-[78px] backdrop-blur-[8px]'}`}
      >
        <div className="flex relative box-border w-full h-full pl-3 justify-between items-center overflow-x-hidden">
          <div className="flex relative w-full p-3 md-900:space-x-6 items-center justify-between">
            {/* Nav Bar [ Discover, Offers, Collections] */}
            <div className="flex items-center">
              <MainHeaderNav
                open={NavSliderOpen}
                onOpen={() => setNavSliderOpen()}
                Value={props.Page}
                onValueChange={props.setChildPage}
              />
            </div>
            {/* Search Button */}
            <div className="">
              <MainHeaderSearchButton
                ContainerRef={ContainerRef}
                Open={SearchSliderOpen}
                onOpen={() => {
                  setSearchSliderOpen(true);
                  setSearchSliderAnimation(true);
                }}
                onAnimationComplete={() => {
                  if (!SearchSliderOpen) setSearchSliderAnimation(false);
                }}
              />
            </div>
            {/* Wishlist, Notification, user Button */}
            <div className="flex relative space-x-2.5 items-center">
              <MainHeaderWishlistButton
                value={props.Page}
                Click={() => {
                  setTimeout(() => {
                    if (NavSliderOpen === true) setNavSliderOpen();
                    props.setChildPage('Wishlist');
                    Router.push(Wishlist_Link);
                  }, 150);
                }}
              />
              <MainHeaderNotificationButton />
              {/* <MainHeaderCartButton
                  value={props.Page}
                  Click={() => {
                    setTimeout(() => {
                      if (NavSliderOpen === true) setNavSliderOpen();
                      props.setPage('Cart');
                      Router.push(Cart_Link);
                    }, 150);
                  }}
                /> */}
              <PageHeaderUserButton />
            </div>
          </div>
        </div>
        <MainHeaderSlider
          open={NavSliderOpen}
          onClose={() => setNavSliderOpen()}
          Value={props.Page}
          onValueChange={props.setChildPage}
        />
        <MainHeaderSearchSlider
          open={SearchSliderOpen}
          onClose={() => setSearchSliderOpen(false)}
        />
      </div>
      {/* <div className="w-full h-[12px] min-h-[12px]" /> */}
    </>
  );
};
