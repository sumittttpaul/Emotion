import { DiscoverSliderIProps } from '../../../contents/store/discover/Store.Discover.Slider';
import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Swiper } from 'swiper/react';
import {
  DiscoverSliderDesktopMap,
  DiscoverSliderMobileMap,
} from './DiscoverSliderMap';

export interface DiscoverSliderDesktopAndTabletProps {
  ContentArray: DiscoverSliderIProps[];
  sliderRef: RefObject<HTMLElement>;
  Wishlist: number;
  setWishlist: Dispatch<SetStateAction<number>>;
}
export const DiscoverSliderDesktopAndTablet: FC<
  DiscoverSliderDesktopAndTabletProps
> = (props) => {
  return (
    <div className="hidden sm:flex w-full box-border px-0 sm:px-5">
      <ScrollContainer
        vertical={false}
        hideScrollbars={true}
        innerRef={props.sliderRef}
        component="ul"
        className="w-full flex px-5 sm:px-0 space-x-4 box-border scroll-smooth"
      >
        <DiscoverSliderDesktopMap
          ContentArray={props.ContentArray}
          Wishlist={props.Wishlist}
          setWishlist={props.setWishlist}
        />
      </ScrollContainer>
    </div>
  );
};

export interface DiscoverSliderMobileProps {
  ContentArray: DiscoverSliderIProps[];
  Wishlist: number;
  setWishlist: Dispatch<SetStateAction<number>>;
}
export const DiscoverSliderMobile: FC<DiscoverSliderMobileProps> = (props) => {
  return (
    <div className="w-full h-full flex sm:hidden">
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        loop={true}
        wrapperTag="ul"
        className="w-full flex"
        style={{
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <DiscoverSliderMobileMap
          ContentArray={props.ContentArray}
          Wishlist={props.Wishlist}
          setWishlist={props.setWishlist}
        />
      </Swiper>
    </div>
  );
};
