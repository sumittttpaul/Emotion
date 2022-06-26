import { Poster_BlurDataURL } from '../../loader/BlurDataURL';
import { DiscoverSliderIProps } from '../../../contents/store/discover/Store.Discover.Slider';
import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TooltipDark } from '../../tooltip/TooltipDark';

export interface DiscoverSliderDesktopProps {
  ContentArray: DiscoverSliderIProps[];
  sliderRef: RefObject<HTMLElement>;
  Wishlist: number;
  setWishlist: Dispatch<SetStateAction<number>>;
}

/**
 * @author
 * @function @DiscoverSliderDesktop
 **/

export const DiscoverSliderDesktop: FC<DiscoverSliderDesktopProps> = (
  props
) => {
  return (
    <div className="hidden sm:flex w-full box-border px-0 sm:px-5">
      <ScrollContainer
        vertical={false}
        hideScrollbars={true}
        innerRef={props.sliderRef}
        component="div"
        className="w-full flex px-5 sm:px-0 space-x-4 box-border scroll-smooth"
      >
        {props.ContentArray.map((value, index) => (
          <Button
            key={index}
            disableFocusRipple
            className="text-white group m-0 p-0 space-y-1 min-w-[197.5px] md-900:min-w-[220px] button-text-lower"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <div>
              <div className="relative w-full overflow-hidden">
                <div className="opacity-0 p-2 flex items-start justify-end group-hover:opacity-100 absolute z-[1] transition-opacity duration-300 rounded-md h-[98%] w-full bg-gradient-to-bl from-[rgba(0,0,0,0.3)]">
                  <TooltipDark arrow title='Add to Wishlist' placement='top'>
                    <motion.button
                      onClick={() => props.setWishlist(index)}
                      whileTap={{ scale: 0.9 }}
                    >
                      {props.Wishlist === index ? (
                        <HeartIconSolid className="h-6 w-6 text-white opacity-100" />
                      ) : (
                        <HeartIconOutline className="h-6 w-6 text-white opacity-80" />
                      )}
                    </motion.button>
                  </TooltipDark>
                </div>
                <Image
                  height={307}
                  width={240}
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
              <div className="text-xs flex items-center space-x-2 pt-1">
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
        ))}
      </ScrollContainer>
    </div>
  );
};
