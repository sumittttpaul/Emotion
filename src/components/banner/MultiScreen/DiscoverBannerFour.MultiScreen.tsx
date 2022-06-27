import React, { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DiscoverBannerFourIProps } from '../../../contents/store/discover/Store.Discover.Banner';
import { rectangle_BlurDataURL } from '../../loader/BlurDataURL';
import { BannerUnderlineButtonDark } from '../../button/BannerUnderlineButtonDark';

const ContainerStyle =
  'text-white group relative p-0 m-0 overflow-hidden border border-solid border-[rgba(255,255,255,0.15)]';
const TextContainerStyle = 'px-5 pt-4 pb-[70px] space-y-2';
const HeadingStyle = 'font-normal text-left w-full';
const DescriptionStyle =
  'text-[14px] whitespace-normal leading-[18px] font-sans font-normal text-left w-full opacity-70';

export interface DiscoverBannerFourDesktopProps {
  ContentArray: DiscoverBannerFourIProps[];
}
export const DiscoverBannerFourDesktop: FC<DiscoverBannerFourDesktopProps> = (
  props
) => {
  return (
    <div className="hidden md-900:flex flex-col w-full relative p-0 m-0 space-y-5">
      <h6 className="text-[18px] mx-5">Our services</h6>
      <ul className="w-full flex relative box-border space-x-6 px-5">
        {props.ContentArray.map((value, index) => (
          <li key={index} className={`rounded-2xl ${ContainerStyle}`}>
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
              <div className={TextContainerStyle}>
                <h6 className={`text-[18px] ${HeadingStyle}`}>
                  {value.Heading}
                </h6>
                <h6 className={DescriptionStyle}>{value.Description}</h6>
              </div>
            </div>
            <BannerUnderlineButtonDark label="Learn More" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export interface DiscoverBannerFourTabletProps {
  ContentArray: DiscoverBannerFourIProps[];
}
export const DiscoverBannerFourTablet: FC<DiscoverBannerFourTabletProps> = (
  props
) => {
  return (
    <div className="hidden sm:flex md-900:hidden flex-col w-full relative p-0 m-0 space-y-5">
      <h6 className="text-[18px] mx-5">Our services</h6>
      <div className="w-full relative box-border space-x-5">
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
              className={`rounded-2xl ${ContainerStyle}`}
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
                <div className={TextContainerStyle}>
                  <h6 className={`text-[16px] ${HeadingStyle}`}>
                    {value.Heading}
                  </h6>
                  <h6 className={DescriptionStyle}>{value.Description}</h6>
                </div>
              </div>
              <BannerUnderlineButtonDark label="Learn More" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export interface DiscoverBannerFourMobileProps {
  ContentArray: DiscoverBannerFourIProps[];
}
export const DiscoverBannerFourMobile: FC<DiscoverBannerFourMobileProps> = (
  props
) => {
  return (
    <div className="flex sm:hidden flex-col w-full relative p-0 m-0 space-y-5">
      <h6 className="text-[18px] mx-5">Our services</h6>
      <div className="w-full relative box-border space-x-5">
        <Swiper
          slidesPerView={1.5}
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
              className={`rounded-xl ${ContainerStyle}`}
            >
              <div className="p-0 m-0">
                <div className="relative w-full h-full">
                  <div className="absolute z-[1] h-full w-full bg-transparent" />
                  <Image
                    layout="responsive"
                    className="rounded-xl"
                    width={490}
                    height={275}
                    src={value.Image}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={rectangle_BlurDataURL}
                    alt="slider-Image"
                  />
                </div>
                <div className={TextContainerStyle}>
                  <h6 className={`text-[16px] ${HeadingStyle}`}>
                    {value.Heading}
                  </h6>
                  <h6 className={DescriptionStyle}>{value.Description}</h6>
                </div>
              </div>
              <BannerUnderlineButtonDark label="Learn More" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
