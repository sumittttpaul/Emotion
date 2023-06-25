import React, { FC } from 'react';
import Image from 'next/image';
import { DiscoverTilesContentProps } from '../../../contents/store/discover/Store.Discover.Tiles';
import { UnderlineButtonDark } from '../../button/UnderlineButtonDark';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rectangle_BlurDataURL } from '../../loader/BlurDataURL';
import useScreenSize from '../../../algorithms/ScreenSizeDetection';
import { BannerTitleButton } from '../../button/banner/Banner.TitleButton';
import { BannerSmallButton } from '../../button/banner/Banner.SmallButton';

const SwiperSlideStyle =
  'h-full w-full flex relative m-0 p-0 text-white overflow-hidden rounded-xl bg-gradient-to-r';
const TopHeadingContainerStyle =
  'flex flex-col relative px-3.5 py-3 h-full w-full justify-between';
const BottomHeadingContainerStyle =
  'flex absolute left-0 right-0 bottom-0 pl-1.5 pr-3 py-1.5 w-full items-center justify-between';
const GetColor = (index: number) => {
  if (index === 0) return 'from-dark-red' as string;
  if (index === 1) return 'from-dark-pink' as string;
  if (index === 2) return 'from-dark-blue' as string;
  if (index === 3) return 'from-dark-yellow' as string;
  else return '';
};
const GetColorDark = (index: number) => {
  if (index === 0) return 'bg-super-dark-red' as string;
  if (index === 1) return 'bg-super-dark-pink' as string;
  if (index === 2) return 'bg-super-dark-blue' as string;
  if (index === 3) return 'bg-super-dark-yellow' as string;
  else return '';
};

export interface DiscoverTilesBrowserProps {
  ContentArray: DiscoverTilesContentProps[];
  Label: string;
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
    <div className="w-full flex flex-col space-y-2.5">
      <div className="flex justify-start">
        <BannerTitleButton Label={props.Label} onClick={() => {}} />
      </div>
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
                <div className="font-[500] tracking-wide">{value.Heading}</div>
                <h6 className="text-[13px] opacity-[0.75] font-normal">
                  {value.Description}
                </h6>
              </div>
              <div className={BottomHeadingContainerStyle}>
                <div
                  className={`${GetColorDark(
                    index
                  )} text-xs flex space-x-1 bg-super-dark-red px-3 py-2 rounded-md`}
                >
                  <h6 className="block whitespace-nowrap">Starts from</h6>
                  <h6 className="whitespace-nowrap">{`₹${value.Price}`}</h6>
                </div>
                {/* <UnderlineButtonDark label="View More" /> */}
                <BannerSmallButton label="View More" onClick={() => {}} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export interface DiscoverTilesMobileProps {
  ContentArray: DiscoverTilesContentProps[];
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
