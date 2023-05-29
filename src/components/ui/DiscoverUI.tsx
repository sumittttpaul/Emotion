import React, { FC } from 'react';
import { DiscoverSliderContent } from '../../contents/store/discover/Store.Discover.Slider';
import {
  DiscoverBannerFiveContent,
  DiscoverBannerDealContent,
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
import { DiscoverBannerDeal } from '../banner/DiscoverBannerDeal';
import { LightningBadge } from '../badge/LightningBadge';
import { NewBadge } from '../badge/NewBadge';

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
      <DiscoverTiles Label="Our Category" ContentArray={DiscoverTilesContent} />
      <DiscoverSlider
        Label="Recommended for you"
        ContentArray={DiscoverSliderContent}
      />
      <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
      <DiscoverBannerDeal
        Label="Daily lightning deals"
        Description="Make your creative vision a reality with these AI-powered effects"
        Badge={<LightningBadge />}
        ContentArray={DiscoverBannerDealContent}
      />
      <DiscoverSlider
        Label="Best summer sale"
        ContentArray={DiscoverSliderContent}
      />
      <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
      <DiscoverBannerDeal
        Label="New arrivals"
        Description="Make your creative vision a reality with these AI-powered effects"
        Badge={<NewBadge />}
        ContentArray={DiscoverBannerDealContent}
      />
      <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
      <DiscoverBannerFive
        Label="Our services"
        ContentArray={DiscoverBannerFiveContent}
      />
      <DiscoverCatelog />
    </div>
  );
};
