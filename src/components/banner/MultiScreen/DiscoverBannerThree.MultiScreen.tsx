import React, { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DiscoverBannerThreeIProps } from '../../../contents/store/discover/Store.Discover.Banner';
import { Rectangle_BlurDataURL } from '../../loader/BlurDataURL';
import { BannerUnderlineButtonDark } from '../../button/BannerUnderlineButtonDark';

const ContainerStyle =
  'text-white bg-white bg-opacity-[0.023] relative button-text-lower p-0 m-0 overflow-hidden';
const TextContainer = 'px-5 pt-4 pb-[70px] space-y-2';
const HeadingStyle = 'font-normal text-left w-full';
const DescriptionStyle =
  'text-[14px] whitespace-normal leading-[18px] font-sans font-normal text-left w-full opacity-70';

export interface DiscoverBannerThreeDesktopProps {
  ContentArray: DiscoverBannerThreeIProps[];
}
export const DiscoverBannerThreeDesktop: FC<DiscoverBannerThreeDesktopProps> = (
  props
) => {
  return (
    <ul className="hidden md-900:flex w-full relative box-border space-x-6 p-5">
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
                blurDataURL={Rectangle_BlurDataURL}
                alt=""
              />
            </div>
            <div className={TextContainer}>
              <h6 className={`text-[18px] ${HeadingStyle}`}>{value.Heading}</h6>
              <h6 className={DescriptionStyle}>{value.Description}</h6>
            </div>
          </div>
          <BannerUnderlineButtonDark label="Explore Now" />
        </li>
      ))}
    </ul>
  );
};

export interface DiscoverBannerThreeTabletProps {
  ContentArray: DiscoverBannerThreeIProps[];
}
export const DiscoverBannerThreeTablet: FC<DiscoverBannerThreeTabletProps> = (
  props
) => {
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
                  blurDataURL={Rectangle_BlurDataURL}
                  alt=""
                />
              </div>
              <div className={TextContainer}>
                <h6 className={`text-[16px] ${HeadingStyle}`}>
                  {value.Heading}
                </h6>
                <h6 className={DescriptionStyle}>{value.Description}</h6>
              </div>
            </div>
            <BannerUnderlineButtonDark label="Explore Now" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export interface DiscoverBannerThreeMobileProps {
  ContentArray: DiscoverBannerThreeIProps[];
}
export const DiscoverBannerThreeMobile: FC<DiscoverBannerThreeMobileProps> = (
  props
) => {
  return (
    <div className="flex sm:hidden w-full relative box-border space-x-5">
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
                  blurDataURL={Rectangle_BlurDataURL}
                  alt=""
                />
              </div>
              <div className={TextContainer}>
                <h6 className={`text-[16px] ${HeadingStyle}`}>
                  {value.Heading}
                </h6>
                <h6 className={DescriptionStyle}>{value.Description}</h6>
              </div>
            </div>
            <BannerUnderlineButtonDark label="Explore Now" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
