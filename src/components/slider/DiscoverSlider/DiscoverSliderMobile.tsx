import { Poster_BlurDataURL } from '../../loader/BlurDataURL';
import { DiscoverSliderIProps } from '../../../contents/store/discover/Store.Discover.Slider';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React, { Dispatch, FC, SetStateAction } from 'react';
import Image from 'next/image';

export interface DiscoverSliderMobileProps {
  ContentArray: DiscoverSliderIProps[];
  Wishlist: number;
  setWishlist: Dispatch<SetStateAction<number>>;
}

/**
 * @author
 * @function @DiscoverSliderMobile
 **/

export const DiscoverSliderMobile: FC<DiscoverSliderMobileProps> = (props) => {
  return (
    <div className="w-full h-full flex sm:hidden">
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        loop={true}
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
            className="flex box-border p-0 m-0 h-full w-full"
          >
            <Button
              disableFocusRipple
              className="text-white group m-0 p-0 space-y-1 h-full w-full button-text-lower"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                },
              }}
            >
              <div className="w-full h-full flex flex-col">
                <div className="relative w-full h-full overflow-hidden">
                  <div className="opacity-0 flex items-start justify-end group-hover:opacity-100 absolute z-[1] transition-opacity duration-300 rounded-md h-[98%] w-full bg-gradient-to-bl from-[rgba(0,0,0,0.3)]">
                    <motion.button
                      onClick={() => props.setWishlist(index)}
                      whileTap={{ scale: 0.9 }}
                      className="p-2"
                    >
                      {props.Wishlist === index ? (
                        <HeartIconSolid className="h-7 w-7 text-white opacity-100" />
                      ) : (
                        <HeartIconOutline className="h-7 w-7 text-white opacity-80" />
                      )}
                    </motion.button>
                  </div>
                  <Image
                    height={307}
                    width={240}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    loading='lazy'
                    className="rounded-md"
                    blurDataURL={Poster_BlurDataURL}
                    src={value.Image}
                    alt="product slider image"
                  />
                </div>
                <h6 className="text-[14px] font-normal text-left w-full whitespace-nowrap overflow-hidden text-ellipsis">
                  {value.Heading}
                </h6>
                <div className="text-xs flex items-center space-x-2 pt-2">
                  <h6 className="bg-primary-blue-rgb font-[600] text-[11px] py-[5px] px-[10px] mr-[2px] rounded-[4px]">
                    {value.Discount}
                  </h6>
                  <h6 className="line-through text-[13.5px] opacity-70">
                    {`₹${value.OriginalPrice}`}
                  </h6>
                  <h6 className="text-[14px]">{`₹${value.DiscountedPrice}`}</h6>
                </div>
              </div>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
