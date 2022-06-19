import React, { FC } from 'react';
import { DiscoverCarousel } from '../../carousel/DiscoverCarousel';

interface IProps {}

/**
 * @author
 * @function @DiscoverUI
 **/

export const DiscoverUI: FC<IProps> = (props) => {
  return (
    <div className="relative z-10 px-5">
      {/* Content */}
      <DiscoverCarousel />
    </div>
  );
};
