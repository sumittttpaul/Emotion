import { DiscoverCarouselContent } from '../../../contents/store/discover/Store.Discover.Carousel';
import { DiscoverSliderContent } from '../../../contents/store/discover/Store.Discover.Slider';
import { DiscoverBannerFourContent } from '../../../contents/store/discover/Store.Discover.Banner';
import { DiscoverBannerThreeContent } from '../../../contents/store/discover/Store.Discover.Banner';

import { DiscoverCarousel } from '../../carousel/DiscoverCarousel';
import { DiscoverSlider } from '../../slider/DiscoverSlider';
import { DiscoverBannerFour } from '../../banner/DiscoverBannerFour';

import React, { FC } from 'react';
import { DiscoverBannerThree } from '../../banner/DiscoverBannerThree';

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
      <DiscoverBannerThree ContentArray={DiscoverBannerThreeContent} />
      <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
    </div>
  );
};
