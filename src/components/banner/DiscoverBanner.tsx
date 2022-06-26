import { Button } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import { DiscoverBannerIProps } from '../../contents/store/discover/Store.Discover.Banner';

interface IProps {
  ContentArray: DiscoverBannerIProps[];
}

/**
 * @author
 * @function @DiscoverBanner
 **/

export const DiscoverBanner: FC<IProps> = (props) => {
  return (
    <div className="flex w-full overflow-x-hidden overflow-y-visible mt-[50px]">
      <div className="flex relative box-border space-x-5 md-900:space-x-6 p-5">
        {props.ContentArray.map((value, index) => (
          <div key={index} className="text-white button-text-lower p-0 m-0 rounded-2xl overhidden bg-opacity-5 bg-white">
            <div className="p-0 m-0">
              <Image
                layout="responsive"
                className="rounded-2xl"
                width={490}
                height={275}
                src={value.Image}
              />
              <div className="p-5 pt-4 space-y-2">
                <h6 className="text-[18px] font-normal text-left w-full">
                  {value.Heading}
                </h6>
                <h6 className="text-[14px] whitespace-normal leading-[18px] font-sans font-normal text-left w-full opacity-70">
                  {value.Description}
                </h6>
              </div>
            </div>
            <Button className="text-white mx-5 mt-8 mb-4 p-0 text-[14px] hover:underline underline-offset-4 font-sans font-normal button-text-lower"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0) !important',
                },
              }}
            >Learn More</Button>
          </div>
        ))}
      </div>
    </div>
  );
};
