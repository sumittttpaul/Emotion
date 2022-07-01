import React, { FC } from 'react';
import { DiscoverBannerListIProps } from '../../contents/store/discover/Store.Discover.Banner';
import { DiscoverBannerListColumn } from './DiscoverBannerList/DiscoverBannerListColumn';

interface IProps {
  ContentArray: DiscoverBannerListIProps[];
}

/**
 * @author
 * @function @DiscoverBannerList
 **/

export const DiscoverBannerList: FC<IProps> = (props) => {
  return (
    <div className="text-white space-x-5 px-5 mt-[50px] flex w-full h-full relative box-border overflow-x-hidden overflow-y-hidden">
      <DiscoverBannerListColumn ContentArray={props.ContentArray} />
      <div className="h-[100] px-[0.5px] bg-[rgba(255,255,255,0.15)] flex relative" />
      <DiscoverBannerListColumn ContentArray={props.ContentArray} />
      <div className="h-[100] px-[0.5px] bg-[rgba(255,255,255,0.15)] flex relative" />
      <DiscoverBannerListColumn ContentArray={props.ContentArray} />
    </div>
  );
};
