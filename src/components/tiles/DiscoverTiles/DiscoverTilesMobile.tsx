import React, { FC } from 'react';
import Image from 'next/image';
import { DiscoverTilesIProps } from '../../../contents/store/discover/Store.Discover.Tiles';
import { UnderlineButtonDark } from '../../button/UnderlineButtonDark';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface DiscoverTilesMobileProps {
  ContentArray: DiscoverTilesIProps[];
}

/**
 * @author
 * @function @DiscoverTilesMobile
 **/

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
          <SwiperSlide
            tag="li"
            key={index}
            className="flex h-full w-full relative m-0 text-white overflow-hidden rounded-lg border border-solid border-[rgba(255,255,255,0.23)]"
          >
            <Image height={100} width={150} src={value.Image} />
            <div className="flex flex-col relative p-3 h-full w-full justify-between">
              <div className="flex flex-col">
                <h6>{value.Heading}</h6>
                <h6 className="text-xs opacity-70">
                  Plain t-shirt from different category
                </h6>
              </div>
              <div className="flex absolute left-0 right-0 bottom-0 pb-3 pl-3 pr-3 w-full items-center justify-between">
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
