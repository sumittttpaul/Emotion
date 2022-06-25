import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Poster_BlurDataURL } from '../loader/BlurDataURL';
import { DiscoverSliderIProps } from '../../contents/store/discover/Store.Discover.Slider';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Button, IconButton } from '@mui/material';
import ScrollContainer from 'react-indiana-drag-scroll';
import { motion } from 'framer-motion';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';

interface IProps {
  ContentArray: DiscoverSliderIProps[];
}

/**
 * @author
 * @function @DiscoverSlider
 **/

export const DiscoverSlider: FC<IProps> = (props) => {
  const [LeftDisabled, setLeftDisabled] = useState(true);
  const [RightDisabled, setRightDisabled] = useState(false);
  const [Wishlist, setWishlist] = useState(-1);
  const sliderRef = useRef<HTMLElement>(null);

  const slideLeft = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - slider.offsetWidth;
    }
  };

  const slideRight = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + slider.offsetWidth;
    }
  };

  const ListenToScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      let maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft === 0) setLeftDisabled(true);
      else setLeftDisabled(false);
      if (slider.scrollLeft === maxScroll) setRightDisabled(true);
      else setRightDisabled(false);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', ListenToScroll);
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', ListenToScroll);
      }
    };
  });
  return (
    <div className="flex flex-col space-y-5 overflow-x-hidden overflow-y-visible mt-[50px]">
      <div className="w-full px-5 flex text-white justify-between">
        <h6 className="text-[18px]">Trending winter collections</h6>
        <div className="flex space-x-2">
          <IconButton
            onClick={slideLeft}
            disabled={LeftDisabled}
            disableFocusRipple
            className="block disabled:opacity-40 opacity-80 transition-all duration-300 button-text-lower h-full p-1.5 bg-white hover:bg-white bg-opacity-10 hover:bg-opacity-10 disabled:bg-white disabled:bg-opacity-10"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <ChevronLeftIcon className="h-5 w-5 opacity-90 hover:opacity-100 header-icon-hover text-white" />
          </IconButton>
          <IconButton
            onClick={slideRight}
            disabled={RightDisabled}
            disableFocusRipple
            className="block disabled:opacity-40 opacity-80 transition-all duration-300 button-text-lower h-full p-1.5 bg-white hover:bg-white bg-opacity-10 hover:bg-opacity-10 disabled:bg-white disabled:bg-opacity-10"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <ChevronRightIcon className="h-5 w-5 opacity-90 hover:opacity-100 header-icon-hover text-white" />
          </IconButton>
        </div>
      </div>
      <div className="w-full box-border px-5 flex">
        <ScrollContainer
          vertical={false}
          hideScrollbars={true}
          innerRef={sliderRef}
          component="div"
          className="w-full flex space-x-4 box-border scroll-smooth"
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
                  <div className="opacity-0 flex items-start justify-end group-hover:opacity-100 absolute z-[1] transition-opacity duration-300 rounded-md h-[98%] w-full bg-gradient-to-bl from-[rgba(0,0,0,0.5)]">
                    <motion.button
                      onClick={() =>
                        setWishlist(index)
                      }
                      whileTap={{ scale: 0.9 }}
                      className="p-2"
                    >
                      {Wishlist === index ? (
                        <HeartIconSolid className="h-5 w-5 text-white opacity-100" />
                      ) : (
                        <HeartIconOutline className="h-5 w-5 text-white opacity-80" />
                      )}
                    </motion.button>
                  </div>
                  <Image
                    height={307}
                    width={240}
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
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
    </div>
  );
};
