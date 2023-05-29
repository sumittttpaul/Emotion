import React, { FC } from 'react';
import { DiscoverSliderContent } from '../../contents/store/discover/Store.Discover.Slider';
import {
  DiscoverBannerFiveContent,
  DiscoverBannerLightingDealContent,
  DiscoverBannerTop5Content,
} from '../../contents/store/discover/Store.Discover.Banner';
import { DiscoverBannerFourContent } from '../../contents/store/discover/Store.Discover.Banner';
import { DiscoverTilesContent } from '../../contents/store/discover/Store.Discover.Tiles';
import { DiscoverSlider } from '../slider/DiscoverSlider';
import { DiscoverBannerTop5 } from '../banner/DiscoverBannerTop5';
import { DiscoverTiles } from '../tiles/DiscoverTiles';
import { DiscoverBannerFour } from '../banner/DiscoverBannerFour';
import { DiscoverBannerFive } from '../banner/DiscoverBannerFive';
import { DiscoverBannerArrivals } from '../banner/DiscoverBannerArrivals';
import { DiscoverBannerLightingDeal } from '../banner/DiscoverBannerLightingDeal';
import { DiscoverCatelog } from '../catelog/DiscoverCatelog';
import { DiscoverCarousel } from '../carousel/DiscoverCarousel';
import { DiscoverCarouselContent } from '../../contents/store/discover/Store.Discover.Carousel';

export interface DiscoverUIProps {}

/**
 * @author
 * @function @DiscoverUI
 **/

export const DiscoverUI: FC<DiscoverUIProps> = (props) => {
  return (
    <div className="relative z-10 w-full rounded-xl">
      <DiscoverCarousel ContentArray={DiscoverCarouselContent} />
      <DiscoverBannerTop5 ContentArray={DiscoverBannerTop5Content} />
      <DiscoverTiles ContentArray={DiscoverTilesContent} />
      <DiscoverSlider ContentArray={DiscoverSliderContent} />
      <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
      <DiscoverBannerLightingDeal
        ContentArray={DiscoverBannerLightingDealContent}
      />
      <DiscoverSlider ContentArray={DiscoverSliderContent} />
      <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
      <DiscoverBannerArrivals
        ContentArray={DiscoverBannerLightingDealContent}
      />
      <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
      <DiscoverBannerFive ContentArray={DiscoverBannerFiveContent} />
      <DiscoverCatelog />
    </div>
  );
};
