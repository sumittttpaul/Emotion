import React, { FC, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { DiscoverCarouselContentProps } from '../../../contents/store/discover/Store.Discover.Carousel';
import { DiscoverCarouselBannerContent } from './DiscoverCarousel.BannerContent';

interface IProps {
  ContentArray: DiscoverCarouselContentProps[];
}

/**
 * @author
 * @function @DiscoverCarouselBanner
 **/

export const DiscoverCarouselBanner: FC<IProps> = (props) => {
  const x = useMotionValue(-881);
  const animation = useAnimation();
  const [ActiveIndex, setActiveIndex] = useState(3);
  const [AnimationDuration, setAnimationDuration] = useState(0.4);
  const [DisabledCarousel, setDisabledCarousel] = useState(false);

  // Assuming 10 Content
  const ContentsArrayReorder = [
    ...props.ContentArray.slice(-3),
    ...props.ContentArray,
    ...props.ContentArray.slice(0, 8),
  ];

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
    console.log(ContentsArrayReorder.length);
  };

  const LoopCarousel = () => {
    setDisabledCarousel(false);
    setAnimationDuration(0);
    // 2 From Left
    if (ActiveIndex == 1) {
      setActiveIndex(11);
      animation.set({
        x: -3377,
      });
      return;
    }
    // 3 From Left
    if (ActiveIndex == 2) {
      setActiveIndex(12);
      animation.set({
        x: -3689,
      });
      return;
    }
    // 1 from Right
    if (ActiveIndex == 16) {
      setActiveIndex(6);
      animation.set({
        x: -1817,
      });
      return;
    }
    // 2 from Right
    if (ActiveIndex == 15) {
      setActiveIndex(5);
      animation.set({
        x: -1505,
      });
      return;
    }
    // 3 from Right
    if (ActiveIndex == 14) {
      setActiveIndex(4);
      animation.set({
        x: -1193,
      });
      return;
    }
    // 4 from Right
    if (ActiveIndex == 13) {
      setActiveIndex(3);
      animation.set({
        x: -881,
      });
      return;
    }
    // 5 from Right
    if (ActiveIndex == 12) {
      setActiveIndex(2);
      animation.set({
        x: -569,
      });
      return;
    }
  };

  return (
    <div className="relative w-full h-[500px] min-h-[500px] flex overflow-hidden">
      <motion.div className="relative box-content h-full">
        <motion.ul
          style={{ x }}
          animate={animation}
          onAnimationComplete={LoopCarousel}
          transition={{ type: 'spring', bounce: 0 }}
          className="flex w-full h-full space-x-3 px-3"
        >
          <DiscoverCarouselBannerContent
            ContentArray={ContentsArrayReorder}
            onClick={(idx) => NextCarouselByIndex(idx)}
            ActiveIndex={ActiveIndex}
            AnimationDuration={AnimationDuration}
          />
        </motion.ul>
      </motion.div>
      {DisabledCarousel && (
        <div className="absolute z-[1] h-full w-full bg-transparent" />
      )}
    </div>
  );
};
