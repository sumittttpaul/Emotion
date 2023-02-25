import React, { FC, useRef, useState } from 'react';
import { DiscoverCarouselIProps } from '../../contents/store/discover/Store.Discover.Carousel';
import { CarouselBanner } from './DiscoverCarousel/CarouselBanner';
import { ThumbnailSlider } from './DiscoverCarousel/ThumbnailSlider';
import { SliderCarousel } from './DiscoverCarousel/SliderCarousel';
import { BrowserView, MobileView } from 'react-device-detect';

interface IProps {
  ContentArray: DiscoverCarouselIProps[];
}

/**
 * @author
 * @function @DiscoverCarousel
 **/
export const DiscoverCarousel: FC<IProps> = (props) => {
  const ContainerRef = useRef<HTMLDivElement>(null);
  const [CarouselState, setCarouselState] = useState(0);
  const [BannerTextTransition, setBannerTextTransition] = useState('open');
  return (
    <>
      <BrowserView>
        <div className="relative">
          <div className="w-full block relative box-border p-0 m-0 bg-transparent overflow-y-visible overflow-x-hidden">
            <CarouselBanner
              ContentArray={props.ContentArray}
              ElementRef={ContainerRef}
              CarouselState={CarouselState}
              BannerTextTransition={BannerTextTransition}
              setBannerTextTransition={setBannerTextTransition}
            />
            <div className="bg-gradient-to-t from-[#0f0f0f] w-full h-[130px] -mt-[130px]" />
            <ThumbnailSlider
              AutoPlay={true}
              Duration={5}
              ConstraintRef={ContainerRef}
              ThumbnailArray={props.ContentArray}
              CarouselState={CarouselState}
              setCarouselState={setCarouselState}
              setBannerTextTransition={setBannerTextTransition}
            />
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="w-full sm:hidden flex flex-col relative box-border p-0 m-0 overflow-y-visible overflow-x-hidden">
          <SliderCarousel ContentArray={props.ContentArray} />
        </div>
      </MobileView>
    </>
  );
};
