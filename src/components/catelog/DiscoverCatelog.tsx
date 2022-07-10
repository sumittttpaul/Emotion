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
    <div className="flex w-full h-full px-5 my-[75px] sm:my-[100px] relative box-border overflow-x-hidden overflow-y-visible">
      <div className="flex flex-col sm:flex-row w-full h-[300px] space-y-5 sm:space-y-0 sm:space-x-7 md-900:space-x-14 box-border relative">
        <Image
          className="rounded-xl"
          width={1920}
          height={1080}
          objectFit="cover"
          objectPosition="center"
          src="/images/avatar/illustration/5.png"
          loading="lazy"
          blurDataURL={Rectangle_BlurDataURL}
          alt=""
        />
        <div className="flex w-full h-[300px] relative justify-start items-center sm:max-w-[35%]">
          <div className="text-white flex flex-col w-full space-y-2 md-900:space-y-4">
            <h6 className="text-[18px] md-900:text-[20px] w-full">
              Explore our fanbook
            </h6>
            <h6 className="text-[14px] md-900:text-[16px] whitespace-normal leading-[18px] font-sans font-normal text-left w-full opacity-70">
              Browse by genre, features, price and more to find your next
              favorite look.
            </h6>
            <div className="w-full justify-start flex">
              <Button
                disableFocusRipple
                className="sm:py-4 py-3 sm:px-6 px-4 mt-4 md-900:mt-10 text-[10.5px] md-900:text-[11px] font-[500] tracking-[0.075em] bg-white hover:bg-white text-black"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
