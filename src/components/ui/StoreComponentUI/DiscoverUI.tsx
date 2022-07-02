import React, { FC } from 'react';

import { DiscoverCarouselContent } from '../../../contents/store/discover/Store.Discover.Carousel';
import { DiscoverSliderContent } from '../../../contents/store/discover/Store.Discover.Slider';
import {
  DiscoverBannerFourContent,
  DiscoverBannerLightingDealContent,
  DiscoverBannerListContent,
} from '../../../contents/store/discover/Store.Discover.Banner';
import { DiscoverBannerThreeContent } from '../../../contents/store/discover/Store.Discover.Banner';
import { DiscoverTilesContent } from '../../../contents/store/discover/Store.Discover.Tiles';

import { DiscoverCarousel } from '../../carousel/DiscoverCarousel';
import { DiscoverSlider } from '../../slider/DiscoverSlider';
import { DiscoverBannerFour } from '../../banner/DiscoverBannerFour';
import { DiscoverBannerThree } from '../../banner/DiscoverBannerThree';
import { DiscoverTiles } from '../../tiles/DiscoverTiles';
import { DiscoverBannerLightingDeal } from '../../banner/DiscoverBannerLightingDeal';
import { DiscoverBannerList } from '../../banner/DiscoverBannerList';
import { DiscoverBannerArrivals } from '../../banner/DiscoverBannerArrivals';
import { DiscoverCatelog } from '../../catelog/DiscoverCatelog';

export interface DiscoverUIProps {}

/**
 * @author
 * @function @DiscoverUI
 **/
export const DiscoverUI: FC<DiscoverUIProps> = (props) => {
  return (
    <div className="relative z-10 ">
      <DiscoverCarousel ContentArray={DiscoverCarouselContent} />
      <DiscoverTiles ContentArray={DiscoverTilesContent} />
      <DiscoverSlider ContentArray={DiscoverSliderContent} />
      <DiscoverBannerThree ContentArray={DiscoverBannerThreeContent} />
      <DiscoverBannerLightingDeal
        ContentArray={DiscoverBannerLightingDealContent}
      />
      <DiscoverBannerList ContentArray={DiscoverBannerListContent} />
      <DiscoverSlider ContentArray={DiscoverSliderContent} />
      <DiscoverBannerThree ContentArray={DiscoverBannerThreeContent} />
      <DiscoverSlider ContentArray={DiscoverSliderContent} />
      <DiscoverBannerThree ContentArray={DiscoverBannerThreeContent} />
      <DiscoverBannerArrivals
        ContentArray={DiscoverBannerLightingDealContent}
      />
      <DiscoverBannerThree ContentArray={DiscoverBannerThreeContent} />
      <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
      <DiscoverCatelog />
    </div>
  );
};
