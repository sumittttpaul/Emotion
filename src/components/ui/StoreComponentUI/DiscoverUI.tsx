import { DiscoverCarouselContent } from '../../../contents/store/discover/Store.Discover.Carousel';
import { DiscoverCarousel } from '../../carousel/DiscoverCarousel';
import React, { FC } from 'react';

export interface DiscoverUIProps {}

/**
 * @author
 * @function @DiscoverUI
 **/

export const DiscoverUI: FC<DiscoverUIProps> = (props) => {
  return (
    <div className="relative z-10">
      {/* Content */}
      <DiscoverCarousel ContentArray={DiscoverCarouselContent} />
    </div>
  );
};
