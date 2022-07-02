import { Button } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import useScreenSize from '../../algorithms/ScreenSizeDetection';
import { DiscoverBannerLightingDealIProps } from '../../contents/store/discover/Store.Discover.Banner';
import {
  DiscoverBannerArrivalsMobile,
  DiscoverBannerArrivalsTablet,
  DiscoverBannerArrivalsDesktop,
} from './MultiScreen/DiscoverBannerArrivals.MultiScreen';

interface IProps {
  ContentArray: DiscoverBannerLightingDealIProps[];
}

/**
 * @author
 * @function @DiscoverBannerArrivals
 **/

export const DiscoverBannerArrivals: FC<IProps> = (props) => {
  const { LargeScreen, MediumScreen, SmallScreen } = useScreenSize();
  return (
    <div className="relative flex box-border mt-[50px] sm:mt-[75px] w-full h-full child-screen:px-5 overflow-hidden">
      <div className="text-white w-full bg-transparent space-y-5 px-5">
        <div className="flex items-center justify-between">
          <div className="space-x-3 flex items-center">
            <h6 className="text-[18px]">New Arrivals</h6>
          </div>
          <Button
            className="text-white px-3 py-1.5 text-[11px] font-normal tracking-[1px] border border-solid border-[rgba(255,255,255,0.5)] hover:border-[rgba(255,255,255,0.75)] bg-transparent transition-colors duration-300 ease-out"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            View More
          </Button>
        </div>
        {LargeScreen && (
          <DiscoverBannerArrivalsDesktop ContentArray={props.ContentArray} />
        )}
        {MediumScreen && (
          <DiscoverBannerArrivalsTablet ContentArray={props.ContentArray} />
        )}
        {SmallScreen && (
          <DiscoverBannerArrivalsMobile ContentArray={props.ContentArray} />
        )}
      </div>
    </div>
  );
};
