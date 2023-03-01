import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { DiscoverCarouselIProps } from '../../../contents/store/discover/Store.Discover.Carousel';
import { CarouselBanner } from './CarouselBanner';
import { SliderCarousel } from './SliderCarousel';
import { ThumbnailSlider } from './ThumbnailSlider';

export interface DiscoverCarouselMobileProps {
  ContentArray: DiscoverCarouselIProps[];
}

export interface DiscoverCarouselDesktopProps {
  ElementRef: RefObject<HTMLDivElement>;
  ContentArray: DiscoverCarouselIProps[];
  BannerTextTransition: string;
  AutoPlay?: boolean;
  Duration?: number;
  ConstraintRef: RefObject<HTMLDivElement>;
  CarouselState: number;
  setCarouselState: Dispatch<SetStateAction<number>>;
  setBannerTextTransition: Dispatch<SetStateAction<string>>;
  ThumbnailArray: DiscoverCarouselIProps[];
}

export const DiscoverCarouselMobile: FC<DiscoverCarouselMobileProps> = (
  props
) => {
  return (
    <div className="w-full flex flex-col relative box-border p-0 m-0 overflow-y-visible overflow-x-hidden">
      <SliderCarousel ContentArray={props.ContentArray} />
    </div>
  );
};

export const DiscoverCarouselDesktop: FC<DiscoverCarouselDesktopProps> = (
  props
) => {
  return (
    <div className="relative">
      <div className="w-full block relative box-border p-0 m-0 bg-transparent overflow-y-visible overflow-x-hidden">
        <CarouselBanner
          ContentArray={props.ContentArray}
          ElementRef={props.ElementRef}
          CarouselState={props.CarouselState}
          BannerTextTransition={props.BannerTextTransition}
          setBannerTextTransition={props.setBannerTextTransition}
        />
        <div className="bg-gradient-to-t from-[#0f0f0f] w-full h-[130px] -mt-[130px]" />
        <ThumbnailSlider
          AutoPlay={props.AutoPlay}
          Duration={props.Duration}
          ConstraintRef={props.ConstraintRef}
          ThumbnailArray={props.ContentArray}
          CarouselState={props.CarouselState}
          setCarouselState={props.setCarouselState}
          setBannerTextTransition={props.setBannerTextTransition}
        />
      </div>
    </div>
  );
};
