import React, { FC, useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { IconButton } from '@mui/material';

interface IProps {}

/**
 * @author
 * @function @DiscoverCarousel
 **/

const Thumbnail = [
  {
    label: 'Thumbnail 1',
  },
  {
    label: 'Thumbnail 2',
  },
  {
    label: 'Thumbnail 3',
  },
  {
    label: 'Thumbnail 4',
  },
  {
    label: 'Thumbnail 5',
  },
  {
    label: 'Thumbnail 6',
  },
  {
    label: 'Thumbnail 7',
  },
  {
    label: 'Thumbnail 8',
  },
  {
    label: 'Thumbnail 9',
  },
  {
    label: 'Thumbnail 10',
  },
];

const translateXForElement = (element: any) => {
  const transform = element.style.transform;

  if (!transform || transform.indexOf('translateX(') < 0) {
    return 0;
  }

  const extractTranslateX = transform.match(/translateX\((-?\d+)/);

  return extractTranslateX && extractTranslateX.length === 2
    ? parseInt(extractTranslateX[1], 10)
    : 0;
};

export const DiscoverCarousel: FC<IProps> = (props) => {
  const constraintsRef = useRef(null);
  const dragRef = useRef(null);
  const animation = useAnimation();
  const x = useMotionValue(0);

  const onLeftClick = () => {
    const xPos = x.get();
    var width: any = constraintsRef.current;
    if (width) {
      const newXPosition = xPos + width.offsetWidth;
      animation.start({
        x: newXPosition > 0 ? 0 : newXPosition,
      });
    }
  };

  const onRightClick = () => {
    const xPos = x.get();
    var width: any = constraintsRef.current;
    var sliderWidth: any = dragRef.current;
    if (width) {
      const newXPosition = xPos - width.offsetWidth;
      const maxScroll = sliderWidth.offsetWidth;
      animation.start({
        x: newXPosition < -maxScroll ? -maxScroll : newXPosition,
      });
    }
  };

  // useEffect(
  //   () =>
  //     x.onChange((latest) => {
  //       console.log(latest, scrollXProgress.get());
  //     }),
  //   []
  // );
  return (
    <div className="w-full flex flex-col relative box-border p-0 m-0 bg-transparent overflow-x-hidden">
      <motion.div
        ref={constraintsRef}
        className="text-white text-lg rounded-xl bg-Carousel w-full pb-[45%] md-900:pb-[40%] p-5 flex"
      >
        Discover
      </motion.div>
      <motion.div
        drag="x"
        ref={dragRef}
        animate={animation}
        transition={{ type: "spring", bounce: 0.25 }}
        dragConstraints={constraintsRef}
        style={{ x }}
        className="w-auto mx-auto flex space-x-3 px-5 -mt-[50px] active:cursor-grab"
      >
        {Thumbnail.map((value) => (
          <div
            key={value.label}
            className="text-white rounded-lg md-900:rounded-xl p-5 flex items-center justify-center text-xs font-normal bg-[#303030] w-[175px] h-[85px] min-w-[175px] min-h-[85px] md-900:w-[200px] md-900:h-[100px] md-900:min-w-[200px] md-900:min-h-[100px]"
          >
            {value.label}
          </div>
        ))}
      </motion.div>
      <IconButton
        disableFocusRipple
        onClick={() => onLeftClick()}
        className="bg-white bg-opacity-75 hover:bg-white rounded-[50%] absolute h-9 w-9 p-0 left-3 z-[1] top-[calc(50%-20px)] Custom-DropShadow"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: 'rgba(0, 0, 0, 0.25) !important',
          },
        }}
      >
        <div className="h-full w-full flex items-center justify-center">
          <ChevronLeftIcon className="h-5" />
        </div>
      </IconButton>
      <IconButton
        disableFocusRipple
        onClick={() => onRightClick()}
        className="absolute p-0 right-3 z-[1] top-[calc(50%-20px)] h-9 w-9 bg-white bg-opacity-75 hover:bg-white rounded-[50%] Custom-DropShadow"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: 'rgba(0, 0, 0, 0.25) !important',
          },
        }}
      >
        <div className="h-full w-full flex items-center justify-center">
          <ChevronRightIcon className="h-5" />
        </div>
      </IconButton>
    </div>
  );
};
