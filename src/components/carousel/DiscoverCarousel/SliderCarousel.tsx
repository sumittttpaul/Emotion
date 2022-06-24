import React, { FC } from 'react';
import { DiscoverCarouselIProps } from '../../../contents/store/discover/Store.Discover.Carousel';

interface IProps {
  ContentArray: DiscoverCarouselIProps[];
}

/**
 * @author
 * @function @SliderCarousel
 **/

export const SliderCarousel: FC<IProps> = (props) => {
  return <div className="h-[500px] w-full"></div>;
};
