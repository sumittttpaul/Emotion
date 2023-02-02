import React, { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DiscoverBannerFiveIProps } from '../../../contents/store/discover/Store.Discover.Banner';
import { Rectangle_BlurDataURL } from '../../loader/BlurDataURL';
import { BannerUnderlineButtonDark } from '../../button/BannerUnderlineButtonDark';

const ContainerStyle =
  'text-white group relative p-0 m-0 rounded-2xl bg-gradient-to-b overflow-hidden';
const TextContainerStyle = 'px-4 pt-4 pb-[100px] space-y-2';
const HeadingStyle = 'font-normal text-left w-full';
const DescriptionStyle =
  'text-[14px] whitespace-normal leading-[18px] font-sans font-normal text-left w-full opacity-70';
const GetBGColor = (index: number) => {
  if (index === 0) return 'bg-dark-red';
  if (index === 1) return 'bg-dark-pink';
  if (index === 2) return 'bg-dark-blue';
  if (index === 3) return 'bg-dark-yellow';
  if (index === 4) return 'bg-dark-purple';
};
const GetGradientColor = (index: number) => {
  if (index === 0) return 'from-dark-red';
  if (index === 1) return 'from-dark-pink';
  if (index === 2) return 'from-dark-blue';
  if (index === 3) return 'from-dark-yellow';
  if (index === 4) return 'from-dark-purple';
};

export interface DiscoverBannerFiveDesktopProps {
  ContentArray: DiscoverBannerFiveIProps[];
}
export const DiscoverBannerFiveDesktop: FC<DiscoverBannerFiveDesktopProps> = (
  props
) => {
  return (
    <div className="hidden md-900:flex flex-col w-full relative p-0 m-0 space-y-5">
      <h6 className="text-[18px]">Our services</h6>
      <ul className="w-full flex relative box-border space-x-6 pr-3">
        {props.ContentArray.map((value, index) => (
          <li
            key={index}
            className={`${ContainerStyle} ${GetGradientColor(index)}`}
          >
            <div className="p-0 m-0">
              {/* <div className="relative w-full h-full">
                <div
                  className={`absolute z-[1] h-full w-full bg-gradient-to-t ${GetGradientColor(
                    index
                  )}`}
                />
                <Image
                  layout="responsive"
                  className=""
                  width={490}
                  height={275}
                  src={value.Image}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={Rectangle_BlurDataURL}
                  alt=""
                />
              </div> */}
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

export interface DiscoverBannerFiveTabletProps {
  ContentArray: DiscoverBannerFiveIProps[];
}
export const DiscoverBannerFiveTablet: FC<DiscoverBannerFiveTabletProps> = (
  props
) => {
  return (
    <div className="hidden sm:flex md-900:hidden flex-col w-full relative p-0 m-0 space-y-5">
      <h6 className="text-[18px] mx-5">Our services</h6>
      <div className="w-full flex relative box-border space-x-5">
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
              <BannerUnderlineButtonDark label="Learn More" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export interface DiscoverBannerFiveMobileProps {
  ContentArray: DiscoverBannerFiveIProps[];
}
export const DiscoverBannerFiveMobile: FC<DiscoverBannerFiveMobileProps> = (
  props
) => {
  return (
    <div className="flex sm:hidden flex-col w-full relative p-0 m-0 space-y-5">
      <h6 className="text-[18px] mx-5">Our services</h6>
      <div className="w-full flex relative box-border space-x-5">
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
              <BannerUnderlineButtonDark label="Learn More" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
