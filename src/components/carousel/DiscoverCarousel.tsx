import React, { FC, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { DiscoverCarouselIProps } from '../../contents/store/discover/Store.Discover.Carousel';
import { CarouselBannerProps } from './DiscoverCarousel/CarouselBanner';
import { ThumbnailSliderProps } from './DiscoverCarousel/ThumbnailSlider';
import { SliderCarouselProps } from './DiscoverCarousel/SliderCarousel';
import { LoadingDiscoverCarousel } from '../loader/LoadingSkeleton';
import useScreenSize from '../../algorithms/ScreenSizeDetection';
// import { CarouselBanner } from './DiscoverCarousel/CarouselBanner';
// import { ThumbnailSlider } from './DiscoverCarousel/ThumbnailSlider';
// import { SliderCarousel } from './DiscoverCarousel/SliderCarousel';

const CarouselBanner = dynamic<CarouselBannerProps>(
  () =>
    import('./DiscoverCarousel/CarouselBanner').then((x) => x.CarouselBanner),
  {
    loading: () => <LoadingDiscoverCarousel />,
    ssr: true,
  }
);
const ThumbnailSlider = dynamic<ThumbnailSliderProps>(
  () =>
    import('./DiscoverCarousel/ThumbnailSlider').then((x) => x.ThumbnailSlider),
  { ssr: true }
);
const SliderCarousel = dynamic<SliderCarouselProps>(
  () =>
    import('./DiscoverCarousel/SliderCarousel').then((x) => x.SliderCarousel),
  {
    loading: () => <LoadingDiscoverCarousel />,
    ssr: true,
  }
);

interface IProps {
  ContentArray: DiscoverCarouselIProps[];
}

/**
 * @author
 * @function @DiscoverCarousel
 **/

export const DiscoverCarousel: FC<IProps> = (props) => {
  const { LargeScreen, MediumScreen, SmallScreen } = useScreenSize();
  const ContainerRef = useRef<HTMLDivElement>(null);
  const [CarouselState, setCarouselState] = useState(0);
  const [BannerTextTransition, setBannerTextTransition] = useState('open');
  return (
    <>
      {LargeScreen || MediumScreen ? (
        <div className="relative">
          <div className="w-full hidden sm:block relative box-border p-0 m-0 bg-transparent overflow-y-visible overflow-x-hidden">
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
      ) : (
        <></>
      )}
      {SmallScreen && (
        <div className="w-full sm:hidden flex flex-col relative box-border p-0 m-0 overflow-y-visible overflow-x-hidden">
          <SliderCarousel ContentArray={props.ContentArray} />
        </div>
      )}
    </>
  );
};
