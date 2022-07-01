import { Button } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import { DiscoverBannerListIProps } from '../../../contents/store/discover/Store.Discover.Banner';

const HeadingStyle =
  'text-[14px] md-900:text-[15px] w-full font-normal leading-[16px] text-left';
const OriginalPriceStyle = 'line-through text-[13.5px] opacity-70';
const DiscountedPriceStyle = 'text-[14px]';

interface IProps {
  ContentArray: DiscoverBannerListIProps[];
}

/**
 * @author
 * @function @DiscoverBannerListColumn
 **/

export const DiscoverBannerListColumn: FC<IProps> = (props) => {
  return (
    <div className="text-white flex flex-col w-full space-y-2 relative box-border">
      <div className="flex w-full h-full justify-between">
        <h6 className="text-[16px] md-900:text-[18px]">Top Sellers</h6>
        <Button
          className="text-white px-3.5 py-2 text-[10px] md-900:text-[11px] font-normal tracking-[1px] border border-solid border-[rgba(255,255,255,0.35)] hover:border-[rgba(255,255,255,0.75)] bg-transparent transition-colors duration-300 ease-out"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
            },
          }}
        >
          View More
        </Button>
      </div>
      <div className="flex w-full h-full relative">
        <ul className="flex flex-col w-full">
          {props.ContentArray.map((value, index) => (
            <li key={index}>
              <Button
                sx={{
                  '.MuiTouchRipple-child': {
                    backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                  },
                }}
                className="text-white button-text-lower flex w-full h-full p-3 md-900:px-6 md-900:py-4 rounded-xl bg-transparent hover:bg-white hover:bg-opacity-10"
              >
                <div className="flex h-full w-full relative items-center space-x-3">
                  <div className="flex w-full h-full min-w-[48px] min-h-[64px] max-w-[90px] max-h-[120px]">
                    <Image
                      className="rounded-md w-full h-full"
                      height={320} //64
                      width={240} //48
                      objectFit="cover"
                      objectPosition="center"
                      src={value.Image}
                      loading="lazy"
                      alt="Lighting-Deal-Image"
                    />
                  </div>
                  <div className="space-y-1 text-white">
                    <div className="overflow-hidden">
                      <h6 className={HeadingStyle}>{value.Heading}</h6>
                    </div>
                    <div className="text-xs flex items-center space-x-2 pt-1">
                      <h6
                        className={OriginalPriceStyle}
                      >{`₹${value.OriginalPrice}`}</h6>
                      <h6
                        className={DiscountedPriceStyle}
                      >{`₹${value.DiscountedPrice}`}</h6>
                    </div>
                  </div>
                </div>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
