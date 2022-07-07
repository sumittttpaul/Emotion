import { Backdrop, Button } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import ScrollContainer from 'react-indiana-drag-scroll';
import {
  StoreDiscoverCurationSearch,
  StoreDiscoverPopularSearch,
} from '../../../../contents/store/discover/Store.Discover.Search';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const SliderVariant = {
  open: { height: 250, display: 'block' },
  closed: { height: 0, display: 'none' },
};
const UlVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0 },
  },
  closed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};
const LiVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.05,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const LeftVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -50,
  },
};

const RightVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: 50,
  },
};

/**
 * @author
 * @function @MainHeaderSearchSlider
 **/

export const MainHeaderSearchSlider: FC<IProps> = (props) => {
  const [Slider, setSlider] = useState('closed');
  const sliderRef = useRef<HTMLElement>(null);
  const [LeftAnimate, setLeftAnimate] = useState('closed');
  const [RightAnimate, setRightAnimate] = useState('closed');
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
  const ListenToSearchScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      if (slider.scrollLeft === 0) {
        setLeftAnimate('closed');
      } else {
        setLeftAnimate('open');
      }
      let maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft === 0) {
        return;
      }
      if (slider.scrollLeft === maxScroll) {
        setRightAnimate('closed');
      } else {
        setRightAnimate('open');
      }
    }
  };
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', ListenToSearchScroll);
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', ListenToSearchScroll);
      }
    };
  });
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      let maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft === maxScroll) setRightAnimate('closed');
      else setRightAnimate('open');
    }
  }, []);

  useEffect(() => {
    if (props.open) {
      setSlider('open');
    } else {
      setSlider('closed');
    }
  }, [props.open]);
  return (
    <>
      {props.open ? (
        <div
          onClick={props.onClose}
          className="absolute h-screen w-full top-full bg-black backdrop-blur-md opacity-75 left-0"
        />
      ) : (
        <></>
      )}
      <motion.div
        className="bg-transparent absolute left-0 top-full w-full"
        animate={Slider}
        variants={SliderVariant}
      >
        <div className="w-full bg-[#121212] flex">
          <motion.ul
            variants={UlVariants}
            className="space-y-5 pt-3 pb-5 w-full max-w-[1440px] mx-auto"
          >
            <motion.li variants={LiVariants}>
              <div className="flex flex-col w-full px-3 sm:px-5 space-y-3.5">
                <h6 className="font-[400] text-sm text-white w-full text-left">
                  Popular Searches
                </h6>
                <ul className="flex flex-wrap relative w-full h-auto justify-start">
                  {StoreDiscoverPopularSearch.map((value, index) => (
                    <li key={index}>
                      <Button
                        disableFocusRipple
                        sx={{
                          '.MuiTouchRipple-child': {
                            backgroundColor:
                              'rgba(255, 255, 255, 0.5) !important',
                          },
                        }}
                        className="text-xs font-[300] tracking-[0.7px] border m-1 py-2 px-3.5 border-solid border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 ease-linear rounded-full button-text-lower text-[rgba(255,255,255,0.7)] hover:text-white bg-transparent hover:bg-transparent"
                      >
                        {value.Label}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
            <motion.li variants={LiVariants}>
              <div className="flex flex-col w-full relative space-y-3.5 overflow-x-hidden">
                <h6 className="font-[400] text-sm px-3 sm:px-5 text-white w-full text-left">
                  Top Curations
                </h6>
                <ScrollContainer
                  vertical={false}
                  horizontal={true}
                  hideScrollbars={true}
                  innerRef={sliderRef}
                  component="ul"
                  className="px-3 sm:px-5 relative box-border h-full w-full space-x-2 whitespace-nowrap scroll-smooth overflow-x-scroll scroll scrollbar-hide"
                >
                  {StoreDiscoverCurationSearch.map((value, index) => (
                    <Button
                      key={index}
                      component="li"
                      disableFocusRipple
                      disableTouchRipple
                      disableRipple
                      sx={{
                        '.MuiTouchRipple-child': {
                          backgroundColor:
                            'rgba(255, 255, 255, 0.5) !important',
                        },
                      }}
                      className="rounded-xl inline-flex flex-col button-text-lower p-5 w-[120px] space-y-2 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 ease-linear"
                    >
                      <Image
                        height={60}
                        width={60}
                        src={value.Image}
                        className="rounded-md"
                      />
                      <h6 className="text-[13px] w-full text-center text-[rgba(255,255,255,0.7)] font-[300] whitespace-nowrap overflow-hidden text-ellipsis">
                        {value.Label}
                      </h6>
                    </Button>
                  ))}
                </ScrollContainer>
                {/* <motion.button
                onClick={() => slideLeft()}
                whileTap={{ scale: 0.9 }}
                variants={LeftVariants}
                initial={{ x: -50 }}
                animate={LeftAnimate}
                className="bg-white hover:bg-white rounded-[50%] absolute h-9 w-9 p-0 left-3 z-[1] top-[calc(50%-20px)] Custom-DropShadow"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <ChevronLeftIcon className="h-5" />
                </div>
              </motion.button> */}
                <motion.button
                  onClick={() => slideLeft()}
                  whileTap={{ scale: 0.9 }}
                  variants={LeftVariants}
                  initial={{ x: -50 }}
                  animate={LeftAnimate}
                  className="left-3 absolute p-0 z-[1] bottom-[50px] h-[32px] w-[20px] bg-white bg-opacity-80 hover:bg-white rounded-[4px] transition-colors color-transition Custom-DropShadow"
                >
                  <div className="h-full w-full flex items-center justify-center">
                    <Image
                      src="/icons/left-arrow-fill.svg"
                      height={10}
                      width={10}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </motion.button>
                <motion.button
                  onClick={() => slideRight()}
                  whileTap={{ scale: 0.9 }}
                  variants={RightVariants}
                  initial={{ x: 50 }}
                  animate={RightAnimate}
                  className="right-3 absolute p-0 z-[1] bottom-[50px] h-[32px] w-[20px] bg-white bg-opacity-80 hover:bg-white rounded-[4px] transition-colors color-transition Custom-DropShadow"
                >
                  <div className="h-full w-full flex items-center justify-center">
                    <Image
                      src="/icons/right-arrow-fill.svg"
                      height={10}
                      width={10}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </motion.button>
              </div>
            </motion.li>
            <motion.li
              variants={LiVariants}
              className="w-full flex justify-center"
            >
              <motion.button
                onClick={() => setTimeout(() => props.onClose(), 100)}
                whileTap={{ scale: 0.9 }}
                className="bg-[#202020] pt-1 px-8 rounded-md"
              >
                <Image
                  height={22.5}
                  width={22.5}
                  className="block overflow-hidden opacity-75"
                  src="/icons/x-white.svg"
                  alt=""
                />
              </motion.button>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </>
  );
};
