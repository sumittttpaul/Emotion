import React, { FC } from 'react';
import Image from 'next/legacy/image';
import { DiscoverTilesIProps } from '../../../contents/store/discover/Store.Discover.Tiles';
import { UnderlineButtonDark } from '../../button/UnderlineButtonDark';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rectangle_BlurDataURL } from '../../loader/BlurDataURL';
import useScreenSize from '../../../algorithms/ScreenSizeDetection';

const SwiperSlideStyle =
  'h-full w-full flex relative m-0 p-0 text-white overflow-hidden rounded-xl bg-gradient-to-r';
const TopHeadingContainerStyle =
  'flex flex-col relative px-3.5 py-3 h-full w-full justify-between';
const BottomHeadingContainerStyle =
  'flex absolute left-0 right-0 bottom-0 pb-3 pl-3 pr-3 w-full items-center justify-between';
const GetColor = (index: number) => {
  if (index === 0) return 'from-dark-red';
  if (index === 1) return 'from-dark-pink';
  if (index === 2) return 'from-dark-blue';
  if (index === 3) return 'from-dark-yellow';
};

export interface DiscoverTilesBrowserProps {
  ContentArray: DiscoverTilesIProps[];
}
export const DiscoverTilesBrowser: FC<DiscoverTilesBrowserProps> = (props) => {
  const {
    LargeScreen,
    MediumLargeScreen,
    MediumScreen,
    SmallMediumScreen,
    SmallScreen,
  } = useScreenSize();
  return (
    <div className="w-full flex flex-col space-y-5">
      <h6 className="text-[18px]">What&apos;s new</h6>
      <Swiper
        slidesPerView={
          LargeScreen || MediumLargeScreen || MediumScreen
            ? 4
            : SmallMediumScreen
            ? 3
            : SmallScreen
            ? 1
            : 2
        }
        spaceBetween={20}
        wrapperTag="ul"
        className="w-full h-[140px]"
        style={{
          paddingRight: 12,
        }}
      >
        {props.ContentArray.map((value, index) => (
          <SwiperSlide
            tag="li"
            key={index}
            className={`${SwiperSlideStyle} ${GetColor(index)}`}
          >
            <div className={`space-y-5 ${TopHeadingContainerStyle}`}>
              <div className="space-y-1 flex flex-col">
                <h6>{value.Heading}</h6>
                <h6 className="text-xs opacity-70">
                  Plain t-shirt from different category
                </h6>
              </div>
              <div className={BottomHeadingContainerStyle}>
                <div className="text-xs flex space-x-1">
                  <h6 className="block whitespace-nowrap">Starts at</h6>
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
