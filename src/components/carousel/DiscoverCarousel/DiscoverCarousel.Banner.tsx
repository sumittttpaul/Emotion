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
  const x = useMotionValue(-3065);
  const animation = useAnimation();
  const [ActiveIndex, setActiveIndex] = useState(10);
  const [AnimationDuration, setAnimationDuration] = useState(0.4);
  const [DisabledCarousel, setDisabledCarousel] = useState(false);
  const [CarouselOrder, setCarouselOrder] = useState('left');

  const AnimationValue = (index: number) => {
    const LeftSpacing = 55;
    const CarouselSpacing = 12 * index;
    const CarouselWidth = -300 * index;
    const ExtraSpacing = index > 0 ? LeftSpacing : 0;
    const AnimationValue = CarouselWidth - CarouselSpacing + ExtraSpacing;
    return AnimationValue as number;
  };

  const NextCarouselByIndex = (index: number) => {
    setDisabledCarousel(true);
    setAnimationDuration(0.4);
    const LeftSpacing = 55;
    const TotalLeftCarouselValue = -3065 - LeftSpacing;
    const ZeroIndexCarouselAnimationValue =
      AnimationValue(index) - TotalLeftCarouselValue - LeftSpacing;
    const SecondCarouselAnimationValue =
      AnimationValue(index) - TotalLeftCarouselValue;
    const FirstCarouselAnimationValue =
      index < 1
        ? -ZeroIndexCarouselAnimationValue
        : AnimationValue(index) + TotalLeftCarouselValue;
    const CarouselOrderAnimationValue =
      CarouselOrder === 'left'
        ? AnimationValue(index)
        : index > 9
        ? SecondCarouselAnimationValue
        : FirstCarouselAnimationValue;
    animation.start({
      x: CarouselOrderAnimationValue,
    });
    setActiveIndex(index);
    console.log('Index : ' + index);
    console.log('Initial Animation value : ' + x.get());
  };

  const LoopCarousel = () => {
    setDisabledCarousel(false);
    setAnimationDuration(0);
    console.log('Final Animation value : ' + x.get());

    // 5
    if (ActiveIndex == 4) {
      setCarouselOrder('right');
      animation.set({ x: -4313 });
      return;
    }
    if (ActiveIndex == 14) {
      setCarouselOrder('left');
      animation.set({ x: -4313 });
      return;
    }

    // 6
    if (ActiveIndex == 5) {
      setCarouselOrder('left');
      animation.set({ x: -1505 });
      return;
    }
    if (ActiveIndex == 15) {
      setCarouselOrder('right');
      animation.set({ x: -1505 });
      return;
    }

    // 7
    if (ActiveIndex == 6) {
      setCarouselOrder('left');
      animation.set({ x: -1817 });
      return;
    }
    if (ActiveIndex == 16) {
      setCarouselOrder('right');
      animation.set({ x: -1817 });
      return;
    }

    // 8
    if (ActiveIndex == 7) {
      setCarouselOrder('left');
      animation.set({ x: -2129 });
      return;
    }
    if (ActiveIndex == 17) {
      setCarouselOrder('right');
      animation.set({ x: -2129 });
      return;
    }

    // 9
    if (ActiveIndex == 8) {
      setCarouselOrder('left');
      animation.set({ x: -2441 });
      return;
    }
    if (ActiveIndex == 18) {
      setCarouselOrder('right');
      animation.set({ x: -2441 });
      return;
    }

    // 10
    if (ActiveIndex == 9) {
      setCarouselOrder('left');
      animation.set({ x: -2753 });
      return;
    }
    if (ActiveIndex == 19) {
      setCarouselOrder('right');
      animation.set({ x: -2753 });
      return;
    }
  };

  return (
    <div className="relative w-full h-[500px] min-h-[500px] flex overflow-hidden">
      <motion.div className="relative box-content h-full">
        <motion.div
          style={{ x }}
          animate={animation}
          onAnimationComplete={LoopCarousel}
          transition={{ type: 'spring', bounce: 0 }}
          className="flex w-full h-full space-x-3 px-3"
        >
          <DiscoverCarouselBannerContent
            ContentArray={props.ContentArray}
            onClick={(idx) => NextCarouselByIndex(idx)}
            ActiveIndex={ActiveIndex}
            AnimationDuration={AnimationDuration}
            CarouselOrder={CarouselOrder}
          />
        </motion.div>
      </motion.div>
      {DisabledCarousel && (
        <div className="absolute z-[1] h-full w-full bg-transparent" />
      )}
    </div>
  );
};
