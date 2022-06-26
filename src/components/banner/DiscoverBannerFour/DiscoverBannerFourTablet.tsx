import { Button } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DiscoverBannerFourIProps } from '../../../contents/store/discover/Store.Discover.Banner';
import { rectangle_BlurDataURL } from '../../loader/BlurDataURL';

interface IProps {
  ContentArray: DiscoverBannerFourIProps[];
}

/**
 * @author
 * @function @DiscoverBannerFourTablet
 **/

export const DiscoverBannerFourTablet: FC<IProps> = (props) => {
  return (
    <div className="hidden sm:flex md-900:hidden w-full relative box-border space-x-5">
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        wrapperTag="ul"
        className="w-full flex"
        style={{
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {props.ContentArray.map((value, index) => (
          <SwiperSlide
            key={index}
            tag="li"
            className="text-white relative button-text-lower p-0 m-0 rounded-2xl overflow-hidden border border-solid border-[rgba(255,255,255,0.15)]"
          >
            <div className="p-0 m-0">
              <Image
                layout="responsive"
                className="rounded-2xl"
                width={490}
                height={275}
                src={value.Image}
                placeholder="blur"
                blurDataURL={rectangle_BlurDataURL}
                alt="slider-Image"
              />
              <div className="px-5 pt-4 pb-[70px] space-y-2">
                <h6 className="text-[16px] font-normal text-left w-full">
                  {value.Heading}
                </h6>
                <h6 className="text-[14px] whitespace-normal leading-[18px] font-sans font-normal text-left w-full opacity-70">
                  {value.Description}
                </h6>
              </div>
            </div>
            <Button
              className="text-white absolute bottom-0 block whitespace-nowrap mx-5 mb-4 p-0 text-[14px] hover:underline underline-offset-4 font-sans font-normal button-text-lower"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0) !important',
                },
              }}
            >
              Learn More
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
