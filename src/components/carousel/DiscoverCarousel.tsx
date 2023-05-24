import React, { FC, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { DiscoverCarouselContentProps } from '../../contents/store/discover/Store.Discover.Carousel';

interface IProps {
  ContentArray: DiscoverCarouselContentProps[];
}

/**
 * @author
 * @function @DiscoverCarousel
 **/

export const DiscoverCarousel: FC<IProps> = (props) => {
  const x = useMotionValue(-1817); //-1817
  const animation = useAnimation();
  const [ActiveIndex, setActiveIndex] = useState(6);
  const [AnimationDuration, setAnimationDuration] = useState(0.4);
  const [DisabledCarousel, setDisabledCarousel] = useState(false);

  const Variants = {
    open: {
      width: 850,
    },
    closed: {
      width: 300,
    },
  };

  const NextCarouselByIndex = (index: number) => {
    setDisabledCarousel(true);
    setAnimationDuration(0.4);
    const CarouselSpacing = 12 * index;
    const CarouselWidth = -300 * index;
    const ExtraSpacing = index > 0 ? 55 : 0;
    const animationValue = CarouselWidth - CarouselSpacing + ExtraSpacing;
    animation.start({
      x: animationValue,
    });
    setActiveIndex(index);
    console.log(animationValue);
  };

  const LoopCarousel = () => {
    const XValue = x.get();
    setDisabledCarousel(false);
    // Right = 10
    if (XValue < -4624) {
      setAnimationDuration(0);
      setActiveIndex(5);
      animation.set({
        x: -1505,
      });
      return;
    }
    // Right = 9
    if (XValue < -4312) {
      setAnimationDuration(0);
      setActiveIndex(4);
      animation.set({
        x: -1193,
      });
      return;
    }
    // Right = 8
    if (XValue < -4000) {
      setAnimationDuration(0);
      setActiveIndex(3);
      animation.set({
        x: -881,
      });
      return;
    }
    // Right = 7
    if (XValue < -3688) {
      setAnimationDuration(0);
      setActiveIndex(2);
      animation.set({
        x: -569,
      });
      return;
    }
    // Right = 6
    if (XValue < -3376) {
      setAnimationDuration(0);
      setActiveIndex(1);
      animation.set({
        x: -257,
      });
      return;
    }
    // Left = 6
    if (XValue > -258) {
      setAnimationDuration(0);
      setActiveIndex(11);
      animation.set({
        x: -3377,
      });
      return;
    }
  };

  // useEffect(() => {
  //   NextCarouselByIndex(5);
  // }, []);

  return (
    <div className="relative w-full h-[500px] mt-5 flex overflow-hidden">
      <motion.div className="relative box-content h-full">
        <motion.div
          style={{ x }}
          animate={animation}
          onAnimationComplete={LoopCarousel}
          transition={{ type: 'spring', bounce: 0 }}
          className="flex w-full h-full space-x-3 px-3"
        >
          {props.ContentArray.map((value, idx) => (
            <motion.div
              key={idx}
              animate={ActiveIndex === idx ? 'open' : 'closed'}
              variants={Variants}
              onClick={() => NextCarouselByIndex(idx)}
              transition={{ type: 'tween', duration: AnimationDuration }}
              className="inline-block rounded-xl w-[300px] min-w-[300px] bg-[#2E2E2E]"
            >
              <div className="flex h-full w-full items-center justify-center text-white">
                {value.Heading}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {DisabledCarousel && (
        <div className="absolute z-[1] h-full w-full bg-transparent" />
      )}
    </div>
  );
};
