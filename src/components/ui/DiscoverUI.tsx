import React, { FC } from 'react';

import { GalleryCarouselContent } from '../../contents/gallery/Gallery.Carousel';
import { DiscoverSliderContent } from '../../contents/store/discover/Store.Discover.Slider';
import {
  DiscoverBannerFiveContent,
  DiscoverBannerLightingDealContent,
} from '../../contents/store/discover/Store.Discover.Banner';
import { DiscoverBannerFourContent } from '../../contents/store/discover/Store.Discover.Banner';
import { DiscoverTilesContent } from '../../contents/store/discover/Store.Discover.Tiles';
import { GalleryCarousel } from '../carousel/GalleryCarousel';
import { DiscoverSlider } from '../slider/DiscoverSlider';
import { DiscoverBannerFive } from '../banner/DiscoverBannerFive';
import { DiscoverBannerFour } from '../banner/DiscoverBannerFour';
import { DiscoverTiles } from '../tiles/DiscoverTiles';
import { DiscoverBannerLightingDeal } from '../banner/DiscoverBannerLightingDeal';
import { DiscoverBannerArrivals } from '../banner/DiscoverBannerArrivals';
import { DiscoverCatelog } from '../catelog/DiscoverCatelog';
import { DiscoverCarousel } from '../carousel/DiscoverCarousel';
import { DiscoverCarouselContent } from '../../contents/store/discover/Store.Discover.Carousel';
import { Footer } from '../footer/Footer';

export interface DiscoverUIProps {}

/**
 * @author
 * @function @DiscoverUI
 **/

export const DiscoverUI: FC<DiscoverUIProps> = (props) => {
  return (
    <div className="relative z-10 w-full rounded-xl">
      {/* <DiscoverCarousel ContentArray={DiscoverCarouselContent} /> */}
      <GalleryCarousel ContentArray={GalleryCarouselContent} />
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
