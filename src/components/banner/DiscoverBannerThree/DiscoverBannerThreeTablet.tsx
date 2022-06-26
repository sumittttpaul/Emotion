import { Button } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DiscoverBannerThreeIProps } from '../../../contents/store/discover/Store.Discover.Banner';
import { rectangle_BlurDataURL } from '../../loader/BlurDataURL';
import { BannerUnderlineButtonDark } from '../../button/BannerUnderlineButtonDark';

interface IProps {
  ContentArray: DiscoverBannerThreeIProps[];
}

/**
 * @author
 * @function @DiscoverBannerThreeTablet
 **/

export const DiscoverBannerThreeTablet: FC<IProps> = (props) => {
  return (
    <div className="hidden sm:flex md-900:hidden w-full relative box-border space-x-5">
      <Swiper
        slidesPerView={2}
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
            className="text-white relative button-text-lower p-0 m-0 rounded-2xl overflow-hidden"
          >
            <div className="p-0 m-0">
              <div className="relative w-full h-full">
                <div className="absolute z-[1] h-full w-full bg-transparent" />
                <Image
                  layout="responsive"
                  className="rounded-2xl"
                  width={490}
                  height={275}
                  src={value.Image}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={rectangle_BlurDataURL}
                  alt="slider-Image"
                />
              </div>
              <div className="px-5 pt-4 pb-[70px] space-y-2">
                <h6 className="text-[16px] font-normal text-left w-full">
                  {value.Heading}
                </h6>
                <h6 className="text-[14px] whitespace-normal leading-[18px] font-sans font-normal text-left w-full opacity-70">
                  {value.Description}
                </h6>
              </div>
            </div>
            <BannerUnderlineButtonDark label="Explore Now" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
