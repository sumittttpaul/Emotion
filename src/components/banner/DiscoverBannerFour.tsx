import React, { FC } from 'react';
import { DiscoverBannerFourIProps } from '../../contents/store/discover/Store.Discover.Banner';
import { DiscoverBannerFourDesktop } from './DiscoverBannerFour/DiscoverBannerFourDesktop';
import { DiscoverBannerFourTablet } from './DiscoverBannerFour/DiscoverBannerFourTablet';
import { DiscoverBannerFourMobile } from './DiscoverBannerFour/DiscoverBannerFourMobile';

interface IProps {
  ContentArray: DiscoverBannerFourIProps[];
}

/**
 * @author
 * @function @DiscoverBannerFour
 **/

export const DiscoverBannerFour: FC<IProps> = (props) => {
  return (
    <div className="flex w-full overflow-x-hidden overflow-y-visible mt-[50px]">
      <DiscoverBannerFourDesktop ContentArray={props.ContentArray} />
      <DiscoverBannerFourTablet ContentArray={props.ContentArray} />
      <DiscoverBannerFourMobile ContentArray={props.ContentArray} />
    </div>
  );
};
