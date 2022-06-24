import React, { FC } from 'react';
import { DiscoverCarouselIProps } from '../../../contents/store/discover/Store.Discover.Carousel';

export interface SliderCarouselProps {
  ContentArray: DiscoverCarouselIProps[];
}

/**
 * @author
 * @function @SliderCarousel
 **/

export const SliderCarousel: FC<SliderCarouselProps> = (props) => {
  return <div className="h-[500px] w-full"></div>;
};
