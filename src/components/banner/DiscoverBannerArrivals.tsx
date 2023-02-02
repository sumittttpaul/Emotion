import { Button } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import useScreenSize from '../../algorithms/ScreenSizeDetection';
import { DiscoverBannerLightingDealIProps } from '../../contents/store/discover/Store.Discover.Banner';
import { Square_BlurDataURL } from '../loader/BlurDataURL';
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
    <div className="relative flex box-border w-full h-full pr-3 overflow-hidden">
      <div className="flex text-white w-full bg-gradient-to-l from-dark-green rounded-3xl space-x-7 px-7 pr-3 sm:p-10 mt-[30px]">
        <div className="flex flex-col items-center justify-center w-[50%]">
          <div className="flex flex-col space-y-3 items-start justify-center">
          <div className="space-x-3 flex items-center justify-center">
              <Image
                height={30}
                width={30}
                src="/icons/arrivals.svg"
                alt=""
                loading="lazy"
                placeholder="blur"
                blurDataURL={Square_BlurDataURL}
              />
              <h6 className="text-[18px]">New arrivals</h6>
            </div>
            <Button
              className="text-white px-[42px] py-3 cursor-default button-text-lower text-xs font-normal tracking-[1px] bg-gradient-to-l from-[#ffffff20] transition-colors duration-300 ease-out"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: '#ffffff20 !important',
                },
              }}
            >
              See details
            </Button>
          </div>
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
