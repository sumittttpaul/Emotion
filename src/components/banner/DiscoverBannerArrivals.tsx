import { Button } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import { DiscoverBannerLightingDealIProps } from '../../contents/store/discover/Store.Discover.Banner';
import {
  DiscoverBannerArrivalsMobile,
  DiscoverBannerArrivalsBrowser,
} from './MultiScreen/DiscoverBannerArrivals.MultiScreen';


interface IProps {
  ContentArray: DiscoverBannerLightingDealIProps[];
}

/**
 * @author
 * @function @DiscoverBannerArrivals
 **/
export const DiscoverBannerArrivals: FC<IProps> = (props) => {
  return (
    <div className="relative flex box-border w-full h-full pr-3 overflow-hidden">
      <div className="flex text-white w-full bg-gradient-to-l from-dark-green rounded-3xl space-x-7 px-7 p-10 mt-[30px]">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col space-y-3 items-center small-medium-screen:items-start justify-center">
            <div className="space-x-3 flex items-center justify-center">
              <Image
                height={30}
                width={30}
                src="/icons/arrivals.svg"
                alt=""
                loading="lazy"
              />
              <h6 className="text-[18px]">New arrivals</h6>
            </div>
            <Button
              className="rounded-lg text-white px-[42px] py-3 cursor-default button-text-lower text-xs font-normal tracking-[1px] bg-gradient-to-l from-[#ffffff20] transition-colors duration-300 ease-out"
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
        <DiscoverBannerArrivalsBrowser ContentArray={props.ContentArray} />
        {/* <DiscoverBannerArrivalsMobile ContentArray={props.ContentArray} /> */}
      </div>
    </div>
  );
};
