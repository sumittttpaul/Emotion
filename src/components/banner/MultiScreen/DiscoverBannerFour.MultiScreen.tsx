import React, { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DiscoverBannerFourContentProps } from '../../../contents/home/discover/Home.Discover.Banner';
import { Rectangle_BlurDataURL } from '../../loader/BlurDataURL';
import { BannerSmallButtonForBannerFour } from '../../button/banner/Banner.SmallButton.ForBannerFour';
import useScreenSize from '../../../algorithms/ScreenSizeDetection';

const ContainerStyle =
  'text-white bg-white/5 relative button-text-lower p-0 m-0 rounded-xl overflow-hidden';
const TextContainerStyle = 'px-4 pt-4 pb-[80px] space-y-2';
const HeadingStyle = 'font-[500] tracking-wide text-left w-full';
const DescriptionStyle =
  'text-[13px] whitespace-normal leading-[18px] font-normal text-left w-full opacity-[0.75]';

export interface DiscoverBannerFourBrowserProps {
  ContentArray: DiscoverBannerFourContentProps[];
}
export const DiscoverBannerFourBrowser: FC<DiscoverBannerFourBrowserProps> = (
  props
) => {
  const { LargeScreen, MediumLargeScreen, MediumScreen, SmallScreen } =
    useScreenSize();
  return (
    <div className="w-full relative box-border">
      <Swiper
        slidesPerView={
          LargeScreen || MediumLargeScreen
            ? 4
            : MediumScreen
            ? 3
            : SmallScreen
            ? 1
            : 2
        }
        spaceBetween={MediumLargeScreen ? 24 : 15}
        wrapperTag="ul"
        className="w-full h-full flex"
        style={{
          paddingRight: 12,
          paddingLeft: 12,
        }}
      >
        {props.ContentArray.map((value, index) => (
          <SwiperSlide key={index} tag="li" className={ContainerStyle}>
            <div className="p-0 m-0">
              <div className="relative w-full h-full">
                <div className="absolute z-[1] h-full w-full bg-gradient-to-t from-[#242424]" />
                <Image
                  className="rounded-t-xl"
                  width={490}
                  height={275}
                  src={value.Image}
                  placeholder="blur"
                  blurDataURL={Rectangle_BlurDataURL}
                  alt=""
                />
              </div>
              <div className={TextContainerStyle}>
                <div className={HeadingStyle}>{value.Heading}</div>
                <h6 className={DescriptionStyle}>{value.Description}</h6>
              </div>
            </div>
            <BannerSmallButtonForBannerFour label="Explore Now" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export interface DiscoverBannerFourMobileProps {
  ContentArray: DiscoverBannerFourContentProps[];
}
export const DiscoverBannerFourMobile: FC<DiscoverBannerFourMobileProps> = (
  props
) => {
  return (
    <div className="flex w-full relative box-border space-x-5">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={15}
        centeredSlides={true}
        wrapperTag="ul"
        className="w-full flex"
        style={{
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {props.ContentArray.map((value, index) => (
          <SwiperSlide key={index} tag="li" className={ContainerStyle}>
            <div className="p-0 m-0">
              <div className="relative w-full h-full">
                <div className="absolute z-[1] h-full w-full bg-transparent" />
                <Image
                  className="rounded-xl"
                  width={490}
                  height={275}
                  src={value.Image}
                  placeholder="blur"
                  blurDataURL={Rectangle_BlurDataURL}
                  alt=""
                />
              </div>
              <div className={TextContainerStyle}>
                <h6 className={`text-[16px] ${HeadingStyle}`}>
                  {value.Heading}
                </h6>
                <h6 className={DescriptionStyle}>{value.Description}</h6>
              </div>
            </div>
            <BannerSmallButtonForBannerFour label="Explore Now" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
