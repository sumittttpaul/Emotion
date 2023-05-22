import React, { FC } from 'react';

import { DiscoverCarouselContent } from '../../contents/store/discover/Store.Discover.Carousel';
import { DiscoverSliderContent } from '../../contents/store/discover/Store.Discover.Slider';
import {
  DiscoverBannerFiveContent,
  DiscoverBannerLightingDealContent,
} from '../../contents/store/discover/Store.Discover.Banner';
import { DiscoverBannerFourContent } from '../../contents/store/discover/Store.Discover.Banner';
import { DiscoverTilesContent } from '../../contents/store/discover/Store.Discover.Tiles';
import { DiscoverCarousel } from '../carousel/DiscoverCarousel';
import { DiscoverSlider } from '../slider/DiscoverSlider';
import { DiscoverBannerFive } from '../banner/DiscoverBannerFive';
import { DiscoverBannerFour } from '../banner/DiscoverBannerFour';
import { DiscoverTiles } from '../tiles/DiscoverTiles';
import { DiscoverBannerLightingDeal } from '../banner/DiscoverBannerLightingDeal';
import { DiscoverBannerArrivals } from '../banner/DiscoverBannerArrivals';
import { DiscoverCatelog } from '../catelog/DiscoverCatelog';

export interface DiscoverUIProps {}

/**
 * @author
 * @function @DiscoverUI
 **/
export const DiscoverUI: FC<DiscoverUIProps> = (props) => {
  return (
    <div className="relative z-10 max-w-[2000px] mx-auto">
      <DiscoverCarousel ContentArray={DiscoverCarouselContent} />
      <div className="px-3">
        <DiscoverTiles ContentArray={DiscoverTilesContent} />
        <DiscoverSlider ContentArray={DiscoverSliderContent} />
        <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
      </div>
      <DiscoverBannerLightingDeal
        ContentArray={DiscoverBannerLightingDealContent}
      />
      <div className="px-3">
        <DiscoverSlider ContentArray={DiscoverSliderContent} />
        <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
      </div>
      <DiscoverBannerArrivals
        ContentArray={DiscoverBannerLightingDealContent}
      />
      <div className="px-3">
        <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
        <DiscoverBannerFive ContentArray={DiscoverBannerFiveContent} />
      </div>
      <DiscoverCatelog />
    </div>
  );
};
