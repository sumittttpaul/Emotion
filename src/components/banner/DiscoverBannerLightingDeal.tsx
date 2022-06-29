import { Button } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import useScreenSize from '../../algorithms/ScreenSizeDetection';
import { DiscoverBannerLightingDealIProps } from '../../contents/store/discover/Store.Discover.Banner';
import {
  DiscoverBannerLightningDealDesktop,
  DiscoverBannerLightningDealMobile,
  DiscoverBannerLightningDealTablet,
} from './MultiScreen/DiscoverBannerLightningDeal.MultiScreen';

const HeadingStyle =
  'text-[14px] font-normal text-left whitespace-nowrap overflow-hidden text-ellipsis';
const DescriptionStyle =
  'text-[13px] whitespace-normal leading-[18px] font-sans font-normal text-left w-full opacity-70 whitespace-nowrap overflow-hidden text-ellipsis';
const AvailableStyle =
  'flex w-full h-full p-1.5 font-semibold uppercase tracking-wide text-center text-[11px] flex-col rounded-b-md';
const ButtonStyle =
  'p-0 m-0 w-full h-full flex flex-col relative box-border overflow-hidden button-text-lower';
const ContainerStyle =
  'p-0 m-0 w-full h-full flex flex-col relative box-border overflow-hidden';
const OriginalPriceStyle = 'line-through text-[13.5px] opacity-70';
const DiscountedPriceStyle = 'text-[15px]';

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
    <div className="relative flex box-border w-full h-full child-screen:px-5 overflow-hidden">
      <div className="text-white w-full bg-[#2a2a2a] space-y-7 py-7 px-5 sm:p-10 mt-[50px]">
        <div className="flex items-center justify-between">
          <div className="space-x-3 flex items-center">
            <Image height={30} width={30} src="/icons/lightning-deal.svg" />
            <h6 className="text-[18px]">Daily lightning deals</h6>
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
        {LargeScreen ? (
          <DiscoverBannerLightningDealDesktop
            ContentArray={props.ContentArray}
          />
        ) : (
          <></>
        )}
        {MediumScreen ? (
          <DiscoverBannerLightningDealTablet
            ContentArray={props.ContentArray}
          />
        ) : (
          <></>
        )}
        {SmallScreen ? (
          <DiscoverBannerLightningDealMobile
            ContentArray={props.ContentArray}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
