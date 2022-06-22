import React, { FC, useRef, useState } from 'react';
import { ThumbnailSlider } from './DiscoverCarousel/ThumbnailSlider';
import { CarouselBanner } from './DiscoverCarousel/CarouselBanner';

interface IProps {
  ThumbnailImageArray: { Label: string; URL: string }[];
}

/**
 * @author
 * @function @DiscoverCarousel
 **/

export const DiscoverCarousel: FC<IProps> = (props) => {
  const ContainerRef = useRef(null);
  const [CarouselState, setCarouselState] = useState({
    Active: 0,
    ImageURL: props.ThumbnailImageArray[0].URL,
  });
  return (
    <div className="w-full flex flex-col relative box-border p-0 m-0 bg-transparent overflow-y-visible overflow-x-hidden">
      <CarouselBanner
        ElementRef={ContainerRef}
        ImageURL={CarouselState.ImageURL}
      />
      <div className="bg-gradient-to-t from-[#121212] w-full block h-[130px] -mt-[130px]" />
      <ThumbnailSlider
        ParentElementRef={ContainerRef}
        Thumbnail={props.ThumbnailImageArray}
        CarouselState={CarouselState}
        setCarouselState={setCarouselState}
      />
    </div>
  );
};
