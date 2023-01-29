import React, { FC } from 'react';
import Image from 'next/image';
import { DiscoverTilesIProps } from '../../../contents/store/discover/Store.Discover.Tiles';
import { UnderlineButtonDark } from '../../button/UnderlineButtonDark';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rectangle_BlurDataURL } from '../../loader/BlurDataURL';

const SwiperSlideStyle =
  'h-full w-full flex relative m-0 p-0 text-white overflow-hidden rounded-xl border border-solid border-[#ffffff3b]';
const TopHeadingContainerStyle =
  'flex flex-col relative p-3 h-full w-full justify-between';
const BottomHeadingContainerStyle =
  'flex absolute left-0 right-0 bottom-0 pb-3 pl-3 pr-3 w-full items-center justify-between';

export interface DiscoverTilesDesktopProps {
  ContentArray: DiscoverTilesIProps[];
}
export const DiscoverTilesDesktop: FC<DiscoverTilesDesktopProps> = (props) => {
  return (
    <div className="w-full hidden md-900:flex flex-col space-y-5">
      <h6 className="text-[18px] mx-5">What&apos;s new</h6>
      <ul className="w-full hidden pr-3 md-900:grid grid-cols-4 gap-5 relative">
        {props.ContentArray.map((value, index) => (
          <li key={index} className={SwiperSlideStyle}>
            <Image
              height={100}
              width={150}
              src={value.Image}
              alt=""
              loading="lazy"
              placeholder="blur"
              blurDataURL={Rectangle_BlurDataURL}
            />
            <div className={`space-y-5 ${TopHeadingContainerStyle}`}>
              <div className="space-y-1 flex flex-col">
                <h6>{value.Heading}</h6>
                <h6 className="text-xs opacity-70">
                  Plain t-shirt from different category
                </h6>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="text-xs flex space-x-1">
                  <h6 className="hidden lg-1100:block whitespace-nowrap">
                    Starts at
                  </h6>
                  <h6 className="whitespace-nowrap">{`₹${value.Price}`}</h6>
                </div>
                <UnderlineButtonDark label="View More" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export interface DiscoverTilesTabletProps {
  ContentArray: DiscoverTilesIProps[];
}
export const DiscoverTilesTablet: FC<DiscoverTilesTabletProps> = (props) => {
  return (
    <div className="w-full hidden sm:flex md-900:hidden flex-col space-y-5">
      <h6 className="text-[18px] mx-5">What&apos;s new</h6>
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        wrapperTag="ul"
        className="w-full h-[140px]"
        style={{
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {props.ContentArray.map((value, index) => (
          <SwiperSlide tag="li" key={index} className={SwiperSlideStyle}>
            <Image
              height={100}
              width={150}
              src={value.Image}
              alt=""
              loading="lazy"
              placeholder="blur"
              blurDataURL={Rectangle_BlurDataURL}
            />
            <div className={`space-y-5 ${TopHeadingContainerStyle}`}>
              <div className="space-y-1 flex flex-col">
                <h6>{value.Heading}</h6>
                <h6 className="text-xs opacity-70">
                  Plain t-shirt from different category
                </h6>
              </div>
              <div className={BottomHeadingContainerStyle}>
                <div className="text-xs flex space-x-1">
                  <h6 className="hidden sm-670:block whitespace-nowrap">
                    Starts at
                  </h6>
                  <h6 className="whitespace-nowrap">{`₹${value.Price}`}</h6>
                </div>
                <UnderlineButtonDark label="View More" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export interface DiscoverTilesMobileProps {
  ContentArray: DiscoverTilesIProps[];
}
export const DiscoverTilesMobile: FC<DiscoverTilesMobileProps> = (props) => {
  return (
    <div className="w-full flex sm:hidden flex-col space-y-5">
      <h6 className="text-[18px] mx-5">What&apos;s new</h6>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={15}
        wrapperTag="ul"
        className="w-full h-[125px]"
        style={{
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {props.ContentArray.map((value, index) => (
          <SwiperSlide tag="li" key={index} className={SwiperSlideStyle}>
            <Image
              height={100}
              width={150}
              src={value.Image}
              alt=""
              loading="lazy"
              placeholder="blur"
              blurDataURL={Rectangle_BlurDataURL}
            />
            <div className={TopHeadingContainerStyle}>
              <div className="flex flex-col">
                <h6>{value.Heading}</h6>
                <h6 className="text-xs opacity-70">
                  Plain t-shirt from different category
                </h6>
              </div>
              <div className={BottomHeadingContainerStyle}>
                <div className="text-xs flex space-x-1">
                  <h6 className="hidden xs-400:block whitespace-nowrap">
                    Starts at
                  </h6>
                  <h6 className="whitespace-nowrap">{`₹${value.Price}`}</h6>
                </div>
                <UnderlineButtonDark label="View More" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
