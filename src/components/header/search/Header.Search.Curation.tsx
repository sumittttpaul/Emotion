import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import useScreenSize from '../../../algorithms/ScreenSizeDetection';
import { StoreDiscoverCurationSearchIProps } from '../../../contents/store/discover/Store.Discover.Search';
import { Square_BlurDataURL } from '../../loader/BlurDataURL';

export interface HeaderSearchCurationProps {
  ContentArray: StoreDiscoverCurationSearchIProps[];
  onClick: () => void;
}

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

export const HeaderSearchCuration: FC<HeaderSearchCurationProps> = (props) => {
  const { SmallScreen } = useScreenSize();
  const sliderRef = useRef<HTMLElement>(null);
  const [LeftAnimate, setLeftAnimate] = useState('closed');
  const [RightAnimate, setRightAnimate] = useState('open');
  // const [IsExceeded, setIsExceeded] = useState(true);

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

  // const IsContentExceeded = () => {
  //   const slider = sliderRef.current;
  //   if (slider) {
  //     if (slider.scrollWidth && slider.clientWidth) {
  //       if (slider.scrollWidth > slider.clientWidth) {
  //         setIsExceeded(true);
  //         setRightAnimate('open');
  //       } else {
  //         setIsExceeded(false);
  //         setRightAnimate('closed');
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (window) window.addEventListener('resize', IsContentExceeded);
  //   return () => {
  //     if (window) window.removeEventListener('resize', IsContentExceeded);
  //   };
  // });

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (slider) {
  //     let maxScroll = slider.scrollWidth - slider.clientWidth;
  //     console.log(maxScroll)
  //     if (maxScroll != 0) {
  //       if (slider.scrollLeft === maxScroll) {
  //         setIsExceeded(false);
  //         setRightAnimate('closed');
  //       } else {
  //         setIsExceeded(true);
  //         setRightAnimate('open');
  //       }
  //     }
  //   }
  // }, []);

  return (
    <div className="flex flex-col w-full relative sm:px-3 space-y-3.5 overflow-x-hidden">
      <h6 className="font-[400] text-sm px-3 sm:px-0 text-white w-full text-left">
        Top Curations
      </h6>
      <ScrollContainer
        vertical={false}
        horizontal={true}
        hideScrollbars={true}
        innerRef={sliderRef}
        component="ul"
        className="px-3 sm:px-1 relative box-border h-full w-full space-x-2 whitespace-nowrap scroll-smooth overflow-x-scroll scroll scrollbar-hide"
      >
        {props.ContentArray.map((value, index) => (
          <Button
            key={index}
            component="li"
            onClick={props.onClick}
            disableFocusRipple
            disableTouchRipple
            disableRipple
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: '#ffffff80 !important',
              },
            }}
            className="rounded-xl inline-flex flex-col button-text-lower p-5 w-[120px] space-y-2 bg-[#ffffff0d] hover:bg-[#ffffff1a] transition-colors duration-300 ease-linear"
          >
            <Image
              height={60}
              width={60}
              src={value.Image}
              loading="lazy"
              className="rounded-md"
              placeholder="blur"
              blurDataURL={Square_BlurDataURL}
              alt=""
            />
            <h6 className="text-[13px] w-full text-center text-[#ffffffb3] font-[300] whitespace-nowrap overflow-hidden text-ellipsis">
              {value.Label}
            </h6>
          </Button>
        ))}
      </ScrollContainer>
      {/* {!SmallScreen && (
        <>
          <LeftButton onClick={() => slideLeft()} animate={LeftAnimate} />
          <RightButton onClick={() => slideRight()} animate={RightAnimate} />
        </>
      )} */}
    </div>
  );
};

interface LeftButtonProps {
  onClick: () => void;
  animate: string;
}

interface RightButtonProps {
  onClick: () => void;
  animate: string;
}

const LeftButton: FC<LeftButtonProps> = (props) => {
  return (
    <motion.button
      onClick={props.onClick}
      whileTap={{ scale: 0.9 }}
      variants={LeftVariants}
      initial={{ x: -50 }}
      animate={props.animate}
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
  );
};

const RightButton: FC<RightButtonProps> = (props) => {
  return (
    <motion.button
      onClick={props.onClick}
      whileTap={{ scale: 0.9 }}
      variants={RightVariants}
      initial={{ x: 50 }}
      animate={props.animate}
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
  );
};
