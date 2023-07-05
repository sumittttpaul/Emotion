import React, { FC } from 'react';
import { DiscoverBannerFiveContentProps } from '../../contents/home/discover/Home.Discover.Banner';
import { DiscoverBannerFiveBrowser } from './MultiScreen/DiscoverBannerFive.MultiScreen';

interface IProps {
  ContentArray: DiscoverBannerFiveContentProps[];
  Label: string;
}

/**
 * @author
 * @function @DiscoverBannerFive
 **/
export const DiscoverBannerFive: FC<IProps> = (props) => {
  return (
    <div className="mt-[30px] flex flex-col text-white p-0 m-0 box-border overflow-y-visible overflow-x-hidden">
      <DiscoverBannerFiveBrowser
        Label={props.Label}
        ContentArray={props.ContentArray}
      />
      {/* <DiscoverBannerFiveMobile ContentArray={props.ContentArray} /> */}
    </div>
  );
};
