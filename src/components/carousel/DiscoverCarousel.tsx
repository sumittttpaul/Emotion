import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
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
  // {
  //   label: 'Thumbnail 6',
  // },
  // {
  //   label: 'Thumbnail 7',
  // },
  // {
  //   label: 'Thumbnail 8',
  // },
  // {
  //   label: 'Thumbnail 9',
  // },
  // {
  //   label: 'Thumbnail 10',
  // },
];

const ThumbnailSizes =
  'w-[175px] h-[85px] min-w-[175px] min-h-[85px] md-900:w-[200px] md-900:h-[100px] md-900:min-w-[200px] md-900:min-h-[100px]';

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

interface ButtonProps {
  onClick: () => void;
  animate: string;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const ArrowClasses =
  'absolute p-0 z-[1] bottom-[25px] md-900:bottom-[32.5px] h-[32px] w-[20px] bg-white bg-opacity-70 hover:bg-white rounded-[4px] transition-colors color-transition Custom-DropShadow';
const ArrowIconClasses = 'h-full w-full flex items-center justify-center';

const LeftArrow = (props: ButtonProps) => {
  return (
    <motion.button
      key={1}
      variants={LeftVariants}
      initial={{ x: -50 }}
      whileTap={{ scale: 0.9 }}
      animate={props.animate}
      onClick={props.onClick}
      onHoverStart={props.onHoverStart}
      onHoverEnd={props.onHoverEnd}
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
      key={2}
      variants={RightVariants}
      initial={{ x: 50 }}
      whileTap={{ scale: 0.9 }}
      animate={props.animate}
      onClick={props.onClick}
      onHoverStart={props.onHoverStart}
      onHoverEnd={props.onHoverEnd}
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

  const [ExceptionalHover, setExceptionalHover] = useState(false);
  const [LeftHide, setLeftHide] = useState(false);
  const [RightHide, setRightHide] = useState(false);

  const [LeftAnimate, setLeftAnimate] = useState('closed');
  const [RightAnimate, setRightAnimate] = useState('closed');

  const [ContentExceed, setContentExceed] = useState(false);

  const LeftClick = () => {
    const xPos = x.get();
    var width: any = constraintsRef.current;
    if (width) {
      const newXPosition = xPos + width.offsetWidth;
      animation.start({
        x: newXPosition > 0 ? 0 : newXPosition,
      });
    }
    HideButton();
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
    HideButton();
  };

  const DragHoverStart = () => {
    if (LeftHide) setLeftAnimate('open');
    if (RightHide) setRightAnimate('open');
    setExceptionalHover(false);
  };

  const DragHoverEnd = () => {
    if (LeftHide) setLeftAnimate('closed');
    if (RightHide) setRightAnimate('closed');
    setExceptionalHover(true);
  };

  const ExceptionalDragHover = () => {
    if (ExceptionalHover) {
      if (LeftHide === true && LeftAnimate === 'open') {
        setLeftAnimate('closed');
      }
      if (RightHide === true && RightAnimate === 'open') {
        setRightAnimate('closed');
      }
    }
  };

  const HideButton = () => {
    const xPos = x.get();
    var width: any = constraintsRef.current;
    var scrollWidth: any = dragRef.current;

    // Hide Left Button
    if (xPos >= -5) {
      setLeftAnimate('closed');
      setLeftHide(false);
    } else {
      setLeftAnimate('open');
      setLeftHide(true);
    }

    // Hide Right Button
    if (width && scrollWidth) {
      const maxScroll = scrollWidth.offsetWidth - width.offsetWidth - 5;
      if (xPos <= -maxScroll) {
        setRightAnimate('closed');
        setRightHide(false);
      } else {
        setRightAnimate('open');
        setRightHide(true);
      }
    }
  };

  const HideButtonInitialState = () => {
    const xPos = x.get();
    var width: any = constraintsRef.current;
    var scrollWidth: any = dragRef.current;

    // Hide Left Button
    if (xPos >= -5) {
      setLeftHide(false);
    } else {
      setLeftHide(true);
    }

    // Hide Right Button
    if (width && scrollWidth) {
      const maxScroll = scrollWidth.offsetWidth - width.offsetWidth - 5;
      if (xPos <= -maxScroll) {
        setRightHide(false);
      } else {
        setRightHide(true);
      }
    }
  };

  const IsContentExceed = () => {
    const xPos = x.get();
    var width: any = constraintsRef.current;
    var scrollWidth: any = dragRef.current;
    if (width && scrollWidth) {
      if (scrollWidth.offsetWidth > width.offsetWidth) {
        console.log(
          'Exceed: ' + scrollWidth.offsetWidth + ' , ' + width.offsetWidth
        );
        setContentExceed(true);
      } else {
        console.log(
          'Not Exceed: ' + scrollWidth.offsetWidth + ' , ' + width.offsetWidth
        );
        setContentExceed(false);
        if (xPos < 0) {
          animation.start({
            x: 0,
          });
        }
      }
    }
  };

  useEffect(() => {
    x.onChange((latest) => {
      HideButton();
      return;
    });
    HideButtonInitialState(); /* Initial State */
  }, []);

  useLayoutEffect(() => {
    IsContentExceed(); /* Initial State */
    window.addEventListener('resize', IsContentExceed);
    return () => window.removeEventListener('resize', IsContentExceed);
  }, [ContentExceed]);
  return (
    <div className="w-full flex flex-col relative box-border p-0 m-0 bg-transparent overflow-y-visible overflow-x-hidden">
      <motion.div
        ref={constraintsRef}
        className="text-white text-lg rounded-xl bg-Carousel w-full pb-[40%] p-5 flex"
      >
        Discover
      </motion.div>
      <motion.div
        drag={ContentExceed ? 'x' : false}
        ref={dragRef}
        animate={animation}
        onHoverStart={DragHoverStart}
        onHoverEnd={DragHoverEnd}
        onAnimationComplete={ExceptionalDragHover}
        onDragTransitionEnd={ExceptionalDragHover}
        onPointerLeave={() => setExceptionalHover(true)}
        transition={{ type: 'spring', bounce: 0.25 }}
        dragConstraints={constraintsRef}
        whileDrag={{ cursor: 'grab' }}
        style={{ x }}
        className={`${
          ContentExceed ? 'ml-auto' : 'mr-auto'
        } ${'w-auto flex space-x-3 px-5 -mt-[50px]'}`}
      >
        {Thumbnail.map((value, idx) => (
          <div
            key={idx}
            className={`${ThumbnailSizes} ${'text-white rounded-lg md-900:rounded-xl p-5 flex items-center justify-center text-xs font-normal bg-[#303030]'}`}
          >
            {value.label}
          </div>
        ))}
      </motion.div>
      {ContentExceed ? (
        <>
          <LeftArrow
            animate={LeftAnimate}
            onClick={() => LeftClick()}
            onHoverStart={DragHoverStart}
            onHoverEnd={DragHoverEnd}
          />
          <RightArrow
            animate={RightAnimate}
            onClick={() => RightClick()}
            onHoverStart={DragHoverStart}
            onHoverEnd={DragHoverEnd}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
