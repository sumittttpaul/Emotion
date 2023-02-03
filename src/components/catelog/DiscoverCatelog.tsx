import React, { FC } from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import { Rectangle_BlurDataURL } from '../loader/BlurDataURL';

interface IProps {}

/**
 * @author
 * @function @DiscoverCatelog
 **/

export const DiscoverCatelog: FC<IProps> = (props) => {
  return (
    <div className="flex w-full h-full pr-3 my-[50px] relative box-border overflow-x-hidden overflow-y-visible bg-[#101010]">
      <div className="flex flex-row w-full h-[250px] small-medium-screen:h-[300px] space-x-14 box-border relative">
        <div className="medium-screen:max-w-[65%] small-medium-screen:max-w-[50%] max-w-[0%] w-full h-full flex">
          <div className="z-[1] absolute w-full h-full bg-gradient-to-l from-[#0f0f0f]" />
          <Image
            className="rounded-3xl"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="/images/avatar/illustration/5.png"
            loading="lazy"
            blurDataURL={Rectangle_BlurDataURL}
            alt=""
          />
        </div>
        <div className="medium-screen:max-w-[35%] small-medium-screen:max-w-[50%] max-w-[65%] h-full w-full z-[2] flex relative justify-start items-center">
          <div className="text-white flex flex-col w-full space-y-4">
            <h6 className="text-[18px] small-screen:text-[20px] w-full">Explore our fanbook</h6>
            <h6 className="text-[14px] small-screen:text-[16px] whitespace-normal leading-[18px] font-sans font-normal text-left w-full opacity-70">
              Browse by genre, features, price and more to find your next
              favorite look.
            </h6>
            <div className="w-full justify-start flex">
              <Button
                disableFocusRipple
                className="rounded-lg py-2 small-screen:py-3 px-8 small-screen:px-10 small-screen:mt-3 small-medium-screen:mt-10 text-[11px] font-[500] tracking-[0.075em] button-text-lower bg-gradient-to-r from-[#ffffff30] bg-[#ffffff00] text-white transition-all cursor-default"
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
        </div>
      </div>
    </div>
  );
};
