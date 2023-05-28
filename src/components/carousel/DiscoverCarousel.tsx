import React, { FC, useState } from 'react';
import { DiscoverCarouselContentProps } from '../../contents/store/discover/Store.Discover.Carousel';
import { DiscoverCarouselBanner } from './DiscoverCarousel/DiscoverCarousel.Banner';
import { DiscoverCarouselBulletPoints } from './DiscoverCarousel/DiscoverCarousel.BulletPoints';

interface IProps {
  ContentArray: DiscoverCarouselContentProps[];
}

/**
 * @author
 * @function @DiscoverCarousel
 **/

export const DiscoverCarousel: FC<IProps> = (props) => {
  const [CarouselState, setCarouselState] = useState(10); // Default
  return (
    <div className="relative w-full pt-8 overflow-hidden">
      <DiscoverCarouselBanner
        AutoPlay={false}
        Duration={11} // Default
        CarouselState={CarouselState}
        setCarouselState={setCarouselState}
        BannerArray={props.ContentArray}
      />
      <DiscoverCarouselBulletPoints
        CarouselState={CarouselState}
        BulletArray={props.ContentArray}
      />
    </div>
  );
};
