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
  const x = useMotionValue(-1505); //-1505
  const animation = useAnimation();
  const [ActiveIndex, setActiveIndex] = useState(5);

  const Variants = {
    open: {
      width: 850,
    },
    closed: {
      width: 300,
    },
  };

  const NextCarouselByIndex = (index: number) => {
    const CarouselSpacing = 12 * index;
    const CarouselWidth = -300 * index;
    const ExtraSpacing = index > 0 ? 55 : 0;
    const animationValue = CarouselWidth - CarouselSpacing + ExtraSpacing;
    animation.start({
      x: animationValue,
    });
    setActiveIndex(index);
    // console.log(animationValue);
  };

  // const LoopCarousel = () => {
  //   if (x.get() <= -257) {
  //     setActiveIndex(11);
  //     animation.set({
  //       x: -3377,
  //     });
  //   }
  //   if (x.get() <= -3377) {
  //     setActiveIndex(1);
  //     animation.set({
  //       x: -257,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   NextCarouselByIndex(5);
  // }, []);

  return (
    <div className="w-full h-[500px] mt-5 flex overflow-hidden">
      <motion.div className="relative box-content h-full">
        <motion.div
          style={{ x }}
          animate={animation}
          // onAnimationComplete={LoopCarousel}
          transition={{ type: 'spring', bounce: 0 }}
          className="flex w-full h-full space-x-3 px-3"
        >
          {props.ContentArray.map((value, idx) => (
            <motion.div
              key={idx}
              animate={ActiveIndex === idx ? 'open' : 'closed'}
              variants={Variants}
              onClick={() => NextCarouselByIndex(idx)}
              transition={{ type: 'tween' }}
              className="inline-block rounded-xl w-[300px] min-w-[300px] bg-[#2E2E2E]"
            >
              <div className="flex h-full w-full items-center justify-center text-white">
                {value.Heading}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
