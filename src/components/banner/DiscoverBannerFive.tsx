import React, { FC } from 'react';
import { DiscoverBannerFiveContentProps } from '../../contents/store/discover/Store.Discover.Banner';
import {
  DiscoverBannerFiveMobile,
  DiscoverBannerFiveBrowser,
} from './MultiScreen/DiscoverBannerFive.MultiScreen';

interface IProps {
  ContentArray: DiscoverBannerFiveContentProps[];
}

/**
 * @author
 * @function @DiscoverBannerFive
 **/
export const DiscoverBannerFive: FC<IProps> = (props) => {
  return (
    <div className="mt-[30px] flex flex-col text-white p-0 m-0 box-border overflow-y-visible overflow-x-hidden">
      <DiscoverBannerFiveBrowser ContentArray={props.ContentArray} />
      {/* <DiscoverBannerFiveMobile ContentArray={props.ContentArray} /> */}
    </div>
  );
};
