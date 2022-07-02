import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DiscoverBannerListIProps } from '../../../contents/store/discover/Store.Discover.Banner';
import { DiscoverBannerListColumn } from '../DiscoverBannerList/DiscoverBannerListColumn';

interface IProps {
  ContentArray: DiscoverBannerListIProps[];
}

export const DiscoverBannerListDesktopAndTablet: FC<IProps> = (props) => {
  return (
    <div className="text-white space-x-5 px-5 flex w-full h-full relative box-border">
      <DiscoverBannerListColumn
        Heading="Top sellers"
        ContentArray={props.ContentArray}
        className="flex"
      />
      <div className="h-[100] px-[0.5px] bg-[rgba(255,255,255,0.15)] flex relative" />
      <DiscoverBannerListColumn
        Heading="Winter beast"
        ContentArray={props.ContentArray}
        className="flex"
      />
      <div className="h-[100] px-[0.5px] bg-[rgba(255,255,255,0.15)] flex relative" />
      <DiscoverBannerListColumn
        Heading="Quick sale"
        ContentArray={props.ContentArray}
        className="hidden sm-750:flex"
      />
    </div>
  );
};

export const DiscoverBannerListMobile: FC<IProps> = (props) => {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={20}
      wrapperTag="div"
      className="w-full flex"
      style={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <SwiperSlide tag="div">
        <div className="w-full flex space-x-5">
          <DiscoverBannerListColumn
            Heading="Top sellers"
            ContentArray={props.ContentArray}
            className="flex relative"
          />
          <div className="h-[100] px-[0.5px] bg-[rgba(255,255,255,0.15)] flex relative" />
        </div>
      </SwiperSlide>
      <SwiperSlide tag="div">
        <div className="w-full flex space-x-5">
          <DiscoverBannerListColumn
            Heading="Winter beast"
            ContentArray={props.ContentArray}
            className="flex relative"
          />
          <div className="h-[100] px-[0.5px] bg-[rgba(255,255,255,0.15)] flex relative" />
        </div>
      </SwiperSlide>
      <SwiperSlide tag="div">
        <div className="w-full flex space-x-5">
          <DiscoverBannerListColumn
            Heading="Our choices"
            ContentArray={props.ContentArray}
            className="flex relative"
          />
          <div className="h-[100%] px-[0.5px] bg-[rgba(255,255,255,0.15)] flex relative" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
