import React, { FC } from 'react';
import useScreenSize from '../../algorithms/ScreenSizeDetection';
import { DiscoverBannerListIProps } from '../../contents/store/discover/Store.Discover.Banner';
import {
  DiscoverBannerListDesktopAndTablet,
  DiscoverBannerListMobile,
} from './MultiScreen/DiscoverBannerList.MultiScreen';

interface IProps {
  ContentArray: DiscoverBannerListIProps[];
}

/**
 * @author
 * @function @DiscoverBannerList
 **/

export const DiscoverBannerList: FC<IProps> = (props) => {
  const { LargeScreen, MediumScreen, SmallScreen } = useScreenSize();
  return (
    <div className="text-white mt-[50px] flex w-full h-full relative box-border overflow-x-hidden overflow-y-hidden">
      {LargeScreen || MediumScreen ? (
        <DiscoverBannerListDesktopAndTablet ContentArray={props.ContentArray} />
      ) : (
        <></>
      )}
      {SmallScreen && (
        <DiscoverBannerListMobile ContentArray={props.ContentArray} />
      )}
    </div>
  );
};
