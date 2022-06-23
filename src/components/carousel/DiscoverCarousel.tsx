import React, { FC, useRef, useState } from 'react';
import { ThumbnailSlider } from './DiscoverCarousel/ThumbnailSlider';
import { CarouselBanner } from './DiscoverCarousel/CarouselBanner';
import { DiscoverCarouselIProps } from '../../contents/store/discover/Store.Discover.Carousel';

interface IProps {
  ContentArray: DiscoverCarouselIProps[];
}

/**
 * @author
 * @function @DiscoverCarousel
 **/

export const DiscoverCarousel: FC<IProps> = (props) => {
  const ContainerRef = useRef(null);
  const [CarouselState, setCarouselState] = useState(0);
  const [BannerTextTransition, setBannerTextTransition] = useState('open');
  return (
    <div className="w-full flex flex-col relative box-border p-0 m-0 bg-transparent overflow-y-visible overflow-x-hidden">
      <CarouselBanner
        ContentArray={props.ContentArray}
        ElementRef={ContainerRef}
        CarouselState={CarouselState}
        BannerTextTransition={BannerTextTransition}
        setBannerTextTransition={setBannerTextTransition}
      />
      <div className="bg-gradient-to-t from-[#121212] w-full block h-[130px] -mt-[130px]" />
      <ThumbnailSlider
        AutoPlay={false}
        Duration={5}
        ConstraintRef={ContainerRef}
        ThumbnailArray={props.ContentArray}
        CarouselState={CarouselState}
        setCarouselState={setCarouselState}
        setBannerTextTransition={setBannerTextTransition}
      />
    </div>
  );
};
