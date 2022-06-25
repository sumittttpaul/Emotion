import { DiscoverCarouselContent } from '../../../contents/store/discover/Store.Discover.Carousel';
import { DiscoverSliderContent } from '../../../contents/store/discover/Store.Discover.Slider';

import { DiscoverCarousel } from '../../carousel/DiscoverCarousel';
import { DiscoverSlider } from '../../slider/DiscoverSlider';

import React, { FC } from 'react';

export interface DiscoverUIProps {}

/**
 * @author
 * @function @DiscoverUI
 **/

export const DiscoverUI: FC<DiscoverUIProps> = (props) => {
  return (
    <div className="relative z-10 ">
      <DiscoverCarousel ContentArray={DiscoverCarouselContent} />
      <DiscoverSlider ContentArray={DiscoverSliderContent} />
    </div>
  );
};
