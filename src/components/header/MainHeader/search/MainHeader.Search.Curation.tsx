import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { StoreDiscoverCurationSearchIProps } from '../../../../contents/store/discover/Store.Discover.Search';

interface IProps {
  ContentArray: StoreDiscoverCurationSearchIProps[];
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

export const MainHeaderSearchCuration: FC<IProps> = (props) => {
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
      console.log(maxScroll + ' , ' + slider.scrollLeft);
      if (maxScroll != 0) {
        if (slider.scrollLeft === maxScroll) setRightAnimate('closed');
        else setRightAnimate('open');
      }
    }
  }, []);

  return (
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
        {props.ContentArray.map((value, index) => (
          <Button
            key={index}
            component="li"
            disableFocusRipple
            disableTouchRipple
            disableRipple
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(255, 255, 255, 0.5) !important',
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
      <LeftButton onClick={() => slideLeft()} animate={LeftAnimate} />
      <RightButton onClick={() => slideRight()} animate={RightAnimate} />
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
