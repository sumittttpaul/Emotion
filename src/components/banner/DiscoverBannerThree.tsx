import React, { FC } from 'react';
import { DiscoverBannerThreeIProps } from '../../contents/store/discover/Store.Discover.Banner';
import { DiscoverBannerThreeDesktop } from './DiscoverBannerThree/DiscoverBannerThreeDesktop';
import { DiscoverBannerThreeMobile } from './DiscoverBannerThree/DiscoverBannerThreeMobile';
import { DiscoverBannerThreeTablet } from './DiscoverBannerThree/DiscoverBannerThreeTablet';

interface IProps {
  ContentArray: DiscoverBannerThreeIProps[];
}

/**
 * @author
 * @function @DiscoverBannerThree
 **/

export const DiscoverBannerThree: FC<IProps> = (props) => {
  return (
    <div className="flex w-full overflow-x-hidden overflow-y-visible mt-[50px]">
      <DiscoverBannerThreeDesktop ContentArray={props.ContentArray} />
      <DiscoverBannerThreeTablet ContentArray={props.ContentArray} />
      <DiscoverBannerThreeMobile ContentArray={props.ContentArray} />
    </div>
  );
};
