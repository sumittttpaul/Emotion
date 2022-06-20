import React, { FC, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
} from 'framer-motion';
import Image from 'next/image';

interface IProps {}

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
];

interface ButtonProps {
  onClick: () => void;
}

const ArrowClasses =
  'absolute p-0 z-[1] bottom-[25px] md-900:bottom-[32.5px] h-[32px] w-[20px] bg-white bg-opacity-50 hover:bg-white rounded-[4px] transition-colors color-transition Custom-DropShadow';
const ArrowIconClasses = 'h-full w-full flex items-center justify-center';

const LeftArrow = (props: ButtonProps) => {
  return (
    <motion.button
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      exit={{ x: -50 }}
      onClick={props.onClick}
      className={`left-3 ${ArrowClasses}`}
    >
      <div className={ArrowIconClasses}>
        <Image src="/icons/left-arrow-fill.svg" height={10} width={10} />
      </div>
    </motion.button>
  );
};

const RightArrow = (props: ButtonProps) => {
  return (
    <motion.button
      initial={{ x: 50 }}
      animate={{ x: 0 }}
      exit={{ x: 50 }}
      onClick={props.onClick}
      className={`right-3 ${ArrowClasses}`}
    >
      <div className={ArrowIconClasses}>
        <Image src="/icons/right-arrow-fill.svg" height={10} width={10} />
      </div>
    </motion.button>
  );
};

/**
 * @author
 * @function @DiscoverCarousel
 **/

export const DiscoverCarousel: FC<IProps> = (props) => {
  const constraintsRef = useRef(null);
  const dragRef = useRef(null);
  const animation = useAnimation();
  const x = useMotionValue(0);

  const [LeftHide, setLeftHide] = useState(false);
  const [RightHide, setRightHide] = useState(false);

  const LeftClick = () => {
    const xPos = x.get();
    var width: any = constraintsRef.current;
    if (width) {
      const newXPosition = xPos + width.offsetWidth;
      animation.start({
        x: newXPosition > 0 ? 0 : newXPosition,
      });
    }
  };

  const RightClick = () => {
    const xPos = x.get();
    var width: any = constraintsRef.current;
    var scrollWidth: any = dragRef.current;
    if (width && scrollWidth) {
      const newXPosition = xPos - width.offsetWidth;
      const maxScroll = scrollWidth.offsetWidth - width.offsetWidth;
      animation.start({
        x: newXPosition < -maxScroll ? -maxScroll : newXPosition,
      });
    }
  };

  const HideButton = () => {
    const xPos = x.get();
    var width: any = constraintsRef.current;
    var scrollWidth: any = dragRef.current;

    // Hide Left Button
    if (xPos >= -5) setLeftHide(true);
    else setLeftHide(false);

    // Hide Right Button
    if (width && scrollWidth) {
      const maxScroll = scrollWidth.offsetWidth - width.offsetWidth - 5;
      if (xPos <= -maxScroll) setRightHide(true);
      else setRightHide(false);
    }
  };

  useEffect(() => {
    x.onChange((latest) => {
      HideButton();
      return;
    });
    HideButton();
  }, []);
  return (
    <div className="w-full flex flex-col relative box-border p-0 m-0 bg-transparent overflow-y-visible overflow-x-hidden">
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
        transition={{ type: 'spring', bounce: 0.25 }}
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
      <AnimatePresence>
        {LeftHide ? <></> : <LeftArrow onClick={() => LeftClick()} />}
        {RightHide ? <></> : <RightArrow onClick={() => RightClick()} />}
      </AnimatePresence>
    </div>
  );
};
