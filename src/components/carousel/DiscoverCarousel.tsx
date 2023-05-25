import React, { FC } from 'react';
import { DiscoverCarouselContentProps } from '../../contents/store/discover/Store.Discover.Carousel';
import { DiscoverCarouselBanner } from './DiscoverCarousel/DiscoverCarousel.Banner';

interface IProps {
  ContentArray: DiscoverCarouselContentProps[];
}

/**
 * @author
 * @function @DiscoverCarousel
 **/

export const DiscoverCarousel: FC<IProps> = (props) => {
  return (
    <div className="relative w-full mt-5">
      <DiscoverCarouselBanner ContentArray={props.ContentArray} />
    </div>
  );
};
