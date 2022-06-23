import React, { FC } from 'react';
import { DiscoverCarousel } from '../../carousel/DiscoverCarousel';
import { DiscoverCarouselContent } from '../../../contents/store/discover/Store.Discover.Carousel';

interface IProps {}

/**
 * @author
 * @function @DiscoverUI
 **/

export const DiscoverUI: FC<IProps> = (props) => {
  return (
    <div className="relative z-10 px-5">
      {/* Content */}
      <DiscoverCarousel ContentArray={DiscoverCarouselContent} />
    </div>
  );
};
