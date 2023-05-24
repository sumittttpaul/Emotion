import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { GalleryCarouselContentProps } from '../../../contents/gallery/Gallery.Carousel';
import { GalleryCarouselBanner } from './GalleryCarousel.Banner';
import { GalleryCarouselSlider } from './GalleryCarousel.Slider';
import { GalleryCarouselThumbnailSlider } from './GalleryCarousel.ThumbnailSlider';

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
      <GalleryCarouselSlider ContentArray={props.ContentArray} />
    </div>
  );
};

export const GalleryCarouselDesktop: FC<GalleryCarouselDesktopProps> = (
  props
) => {
  return (
    <div className="relative">
      <div className="w-full block relative box-border p-0 m-0 bg-transparent overflow-y-visible overflow-x-hidden">
        <GalleryCarouselBanner
          ContentArray={props.ContentArray}
          ElementRef={props.ElementRef}
          CarouselState={props.CarouselState}
          BannerTextTransition={props.BannerTextTransition}
          setBannerTextTransition={props.setBannerTextTransition}
        />
        <div className="absolute bg-gradient-to-t from-[#181818] w-full h-[130px] -mt-[130px] block" />
        <GalleryCarouselThumbnailSlider
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
