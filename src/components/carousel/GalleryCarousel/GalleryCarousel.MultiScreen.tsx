import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { GalleryCarouselContentProps } from '../../../contents/store/discover/Store.Discover.Carousel';
import { CarouselBanner } from './CarouselBanner';
import { SliderCarousel } from './SliderCarousel';
import { ThumbnailSlider } from './ThumbnailSlider';

export interface GalleryCarouselMobileProps {
  ContentArray: GalleryCarouselContentProps[];
}

export interface GalleryCarouselDesktopProps {
  ElementRef: RefObject<HTMLDivElement>;
  ContentArray: GalleryCarouselContentProps[];
  BannerTextTransition: string;
  AutoPlay?: boolean;
  Duration?: number;
  ConstraintRef: RefObject<HTMLDivElement>;
  CarouselState: number;
  setCarouselState: Dispatch<SetStateAction<number>>;
  setBannerTextTransition: Dispatch<SetStateAction<string>>;
  ThumbnailArray: GalleryCarouselContentProps[];
}

export const GalleryCarouselMobile: FC<GalleryCarouselMobileProps> = (
  props
) => {
  return (
    <div className="w-full flex flex-col relative box-border p-0 m-0 overflow-y-visible overflow-x-hidden">
      <SliderCarousel ContentArray={props.ContentArray} />
    </div>
  );
};

export const GalleryCarouselDesktop: FC<GalleryCarouselDesktopProps> = (
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
