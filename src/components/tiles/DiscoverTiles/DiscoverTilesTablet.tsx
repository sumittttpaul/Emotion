import React, { FC } from 'react';
import Image from 'next/image';
import { DiscoverTilesIProps } from '../../../contents/store/discover/Store.Discover.Tiles';
import { UnderlineButtonDark } from '../../button/UnderlineButtonDark';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
  ContentArray: DiscoverTilesIProps[];
}

/**
 * @author
 * @function @DiscoverTilesTablet
 **/

export const DiscoverTilesTablet: FC<IProps> = (props) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={15}
      wrapperTag="ul"
      className="w-full h-[140px] hidden sm:flex md-900:hidden"
      style={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      {props.ContentArray.map((value, index) => (
        <SwiperSlide
          tag="li"
          key={index}
          className="w-full flex relative m-0 text-white overflow-hidden rounded-lg border border-solid border-[rgba(255,255,255,0.23)]"
        >
          <Image height={100} width={150} src={value.Image} />
          <div className="flex relative flex-col space-y-5 p-3 h-full w-full justify-between">
            <div className="space-y-1 flex flex-col">
              <h6>{value.Heading}</h6>
              <h6 className="text-xs opacity-70">
                Plain t-shirt from different category
              </h6>
            </div>
            <div className="flex absolute left-0 right-0 bottom-0 pb-3 pl-3 pr-3 w-full items-center justify-between">
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
  );
};
