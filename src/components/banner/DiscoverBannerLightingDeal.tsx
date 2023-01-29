import { Button } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import useScreenSize from '../../algorithms/ScreenSizeDetection';
import { DiscoverBannerLightingDealIProps } from '../../contents/store/discover/Store.Discover.Banner';
import { Square_BlurDataURL } from '../loader/BlurDataURL';
import {
  DiscoverBannerLightningDealDesktop,
  DiscoverBannerLightningDealMobile,
  DiscoverBannerLightningDealTablet,
} from './MultiScreen/DiscoverBannerLightningDeal.MultiScreen';

interface IProps {
  ContentArray: DiscoverBannerLightingDealIProps[];
}

/**
 * @author
 * @function @DiscoverBannerLightingDeal
 **/

export const DiscoverBannerLightingDeal: FC<IProps> = (props) => {
  const { LargeScreen, MediumScreen, SmallScreen } = useScreenSize();
  return (
    <div className="relative flex box-border w-full h-full pr-3 overflow-hidden">
      <div className="text-white w-full bg-[#1a1a1a] space-y-7 py-7 pr-3 sm:p-10 mt-[50px]">
        <div className="flex items-center justify-between">
          <div className="space-x-3 flex items-center">
            <Image
              height={30}
              width={30}
              src="/icons/lightning-deal.svg"
              alt=""
              loading="lazy"
              placeholder="blur"
              blurDataURL={Square_BlurDataURL}
            />
            <h6 className="text-[18px]">Daily lightning deals</h6>
          </div>
          <Button
            className="text-white pr-3 py-1.5 text-[11px] font-normal tracking-[1px] border border-solid border-[#ffffff80] hover:border-[#ffffffbf] bg-transparent transition-colors duration-300 ease-out"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: '#ffffff80 !important',
              },
            }}
          >
            View More
          </Button>
        </div>
        {LargeScreen && (
          <DiscoverBannerLightningDealDesktop
            ContentArray={props.ContentArray}
          />
        )}
        {MediumScreen && (
          <DiscoverBannerLightningDealTablet
            ContentArray={props.ContentArray}
          />
        )}
        {SmallScreen && (
          <DiscoverBannerLightningDealMobile
            ContentArray={props.ContentArray}
          />
        )}
      </div>
    </div>
  );
};
