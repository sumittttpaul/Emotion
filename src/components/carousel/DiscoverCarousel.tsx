import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { Button } from '@mui/material';
import { HeartIcon } from '@heroicons/react/outline';
import { Carousel_Thumbnail_BlurDataURL } from '../loader/BlurDataURL';
import Image from 'next/image';

interface IProps {}

const Thumbnail = [
  {
    Label: 'Thumbnail 1',
    URL: '/images/avatar/illustration/1.png',
  },
  {
    Label: 'Thumbnail 2',
    URL: '/images/avatar/illustration/2.png',
  },
  {
    Label: 'Thumbnail 3',
    URL: '/images/avatar/illustration/3.png',
  },
  {
    Label: 'Thumbnail 4',
    URL: '/images/avatar/illustration/4.png',
  },
  {
    Label: 'Thumbnail 5',
    URL: '/images/avatar/illustration/5.png',
  },
  {
    Label: 'Thumbnail 6',
    URL: '/images/avatar/illustration/6.png',
  },
  {
    Label: 'Thumbnail 7',
    URL: '/images/avatar/illustration/7.png',
  },
  {
    Label: 'Thumbnail 8',
    URL: '/images/avatar/illustration/8.png',
  },
  {
    Label: 'Thumbnail 9',
    URL: '/images/avatar/illustration/9.png',
  },
  {
    Label: 'Thumbnail 10',
    URL: '/images/avatar/illustration/10.png',
  },
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
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

const ArrowClasses =
  'absolute p-0 z-[1] bottom-[30px] md-900:bottom-[35px] h-[32px] w-[20px] bg-white bg-opacity-70 hover:bg-white rounded-[4px] transition-colors color-transition Custom-DropShadow';
const ArrowIconClasses = 'h-full w-full flex items-center justify-center';

const LeftArrow = (props: ButtonProps) => {
  return (
    <motion.button
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
        <Image
          src="/icons/left-arrow-fill.svg"
          height={10}
          width={10}
          alt="left-arrow-icon"
        />
      </div>
    </motion.button>
  );
};

const RightArrow = (props: ButtonProps) => {
  return (
    <motion.button
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
        <Image
          src="/icons/right-arrow-fill.svg"
          height={10}
          width={10}
          alt="right-arrow-icon"
        />
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
  const thumbnailRef = useRef(null);
  const animation = useAnimation();
  const x = useMotionValue(0);

  const [ExceptionalHover, setExceptionalHover] = useState(false);
  const [DragHover, setDragHover] = useState(false);

  const [LeftHide, setLeftHide] = useState(false);
  const [RightHide, setRightHide] = useState(false);

  const [LeftAnimate, setLeftAnimate] = useState('closed');
  const [RightAnimate, setRightAnimate] = useState('closed');

  const [ContentExceed, setContentExceed] = useState(false);

  const [CarouselState, setCarouselState] = useState({
    Active: 0,
    ImageURL: Thumbnail[0].URL,
  });

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

  const autoScroll = true;
  let CarouselInterval: any;
  let intervalTime = 5000;

  const NextCarousel = () => {
    const index =
      CarouselState.Active === Thumbnail.length - 1
        ? 0
        : CarouselState.Active + 1;
    const Image = Thumbnail[index];
    if (!Image) return;
    var ThumbnailWidth: any = thumbnailRef.current;
    var ContainerWidth: any = constraintsRef.current;
    if (ThumbnailWidth && ContainerWidth) {
      const IndexValue = index + 2;
      const ContentExceed = ThumbnailWidth.offsetWidth * IndexValue;
      if (ContainerWidth.offsetWidth < ContentExceed) {
        const getThubnailValue = ContainerWidth.offsetWidth - ContentExceed;
        const AnimationValue = getThubnailValue + 40;
        console.log(getThubnailValue);
        animation.start({
          x: AnimationValue,
        });
      } else {
        animation.start({
          x: 0,
        });
      }
    }
    setCarouselState({
      Active: index,
      ImageURL: Image.URL,
    });
  };

  // const PrevCarousel = () => {
  //   setCarouselActive(
  //     CarouselActive === 0 ? Thumbnail.length - 1 : CarouselActive - 1
  //   );
  // };

  const StartCarousel = () => {
    CarouselInterval = setInterval(NextCarousel, intervalTime);
  };
  const ClearCarousel = () => {
    clearInterval(CarouselInterval);
  };

  useEffect(() => {
    if (autoScroll) StartCarousel();
    return () => ClearCarousel();
  }, [CarouselState]);

  const DragHoverStart = () => {
    setDragHover(true);
    setExceptionalHover(false);
    if (LeftHide) setLeftAnimate('open');
    if (RightHide) setRightAnimate('open');
  };

  const DragHoverEnd = () => {
    if (LeftHide) setLeftAnimate('closed');
    if (RightHide) setRightAnimate('closed');
    setExceptionalHover(true);
    setDragHover(false);
  };

  const ParentDragHoverEnd = () => {
    if (LeftHide) setLeftAnimate('closed');
    if (RightHide) setRightAnimate('closed');
    setExceptionalHover(true);
    setTimeout(() => {
      setDragHover(false);
    }, 50);
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
        if (!ContentExceed) setContentExceed(true);
      } else {
        if (ContentExceed) setContentExceed(false);
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
  });

  useLayoutEffect(() => {
    IsContentExceed(); /* Initial State */
    window.addEventListener('resize', IsContentExceed);
    return () => window.removeEventListener('resize', IsContentExceed);
  });

  return (
    <div className="w-full flex flex-col relative box-border p-0 m-0 bg-transparent overflow-y-visible overflow-x-hidden">
      <motion.div
        ref={constraintsRef}
        className="text-white relative items-start justify-end rounded-t-xl w-full h-[600px] pl-12 pb-[130px] flex flex-col overflow-hidden bg-gradient-to-r from-[rgba(0,0,0,0.7)]"
      >
        <Image
          layout="fill"
          loading="lazy"
          objectFit="cover"
          objectPosition="center"
          className="-z-[1]"
          src={CarouselState.ImageURL}
          alt="Carousel-Image"
        />
        <div className="space-y-8 box-border z-[1]">
          <h6 className="text-3xl font-[500]">Full Sleeves T-shirts</h6>
          <div className="max-w-[500px] w-full space-y-1.5">
            <h6 className="uppercase tracking-[0.5px] font-[500] leading-[1.3333] text-[11px]">
              new winter collection
            </h6>
            <h6 className="text-[15px] leading-6">
              Save up to 50% off on our brand new full sleeve winter collection
              full printed T-shirts.
            </h6>
          </div>
          <div className="space-y-3 box-border">
            <div className="text-xs flex items-center space-x-[4px] my-1">
              <h6 className="bg-primary-blue-rgb text-[11px] py-1 px-2.5 mr-[2px] rounded-[4px]">
                -75%
              </h6>
              <h6>Starting at</h6>
              <h6 className="line-through opacity-70">₹1499.00</h6>
              <h6>₹499.00</h6>
            </div>
            <div className="flex space-x-3">
              <Button
                disableFocusRipple
                className="py-4 px-8 text-[11.5px] tracking-[0.075em] bg-white hover:bg-white text-black"
              >
                order now
              </Button>
              <Button
                disableFocusRipple
                className="p-4 tracking-[0.075em] bg-transparent hover:bg-white hover:bg-opacity-10 text-white"
              >
                <div className="flex space-x-2">
                  <HeartIcon className="h-4 w-4" />
                  <h6 className="text-[10px]">add to wishlist</h6>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="bg-gradient-to-t from-[#121212] w-full block h-[130px] -mt-[130px]" />
      <motion.div
        onHoverEnd={ParentDragHoverEnd}
        className={`${ContentExceed ? 'ml-auto' : 'mr-auto'} ${'z-[1]'}`}
      >
        <motion.div
          drag={ContentExceed ? 'x' : false}
          ref={dragRef}
          animate={animation}
          onHoverStart={DragHoverStart}
          onAnimationComplete={ExceptionalDragHover}
          onDragTransitionEnd={ExceptionalDragHover}
          onPointerLeave={() => setExceptionalHover(true)}
          transition={{ type: 'spring', bounce: 0.25 }}
          dragConstraints={constraintsRef}
          whileDrag={{ cursor: 'grab' }}
          style={{ x }}
          className={`${
            ContentExceed ? 'ml-auto' : 'mr-auto'
          } ${'w-auto z-[1] flex space-x-2 px-8 pb-1 -mt-[80px]'}`}
        >
          {Thumbnail.map((value, idx) => (
            <motion.button
              onClick={() =>
                setTimeout(() => {
                  setCarouselState({
                    Active: idx,
                    ImageURL: value.URL,
                  });
                }, 150)
              }
              key={idx}
              ref={thumbnailRef}
              whileTap={{ scale: 0.9 }}
              className={`${
                CarouselState.Active === idx
                  ? 'ring-[2.5px]'
                  : 'ring-0 hover:ring-[2.5px]'
              } ${ThumbnailSizes} ${'group relative p-0 m-0 transition-shadow duration-300 ring-white ring-opacity-50 rounded-lg md-900:rounded-xl flex items-center justify-center overflow-hidden'}`}
            >
              <Image
                layout="fill"
                loading="lazy"
                className={`${
                  CarouselState.Active === idx
                    ? 'scale-100 translate-x-0'
                    : 'scale-[1.2] -translate-x-3 group-hover:scale-100 group-hover:translate-x-0'
                } ${' transform-gpu ease-out transition-all duration-300'}`}
                src={value.URL}
                placeholder="blur"
                blurDataURL={Carousel_Thumbnail_BlurDataURL}
                alt="Casourel-Image-Thumbnail"
              />
              <h6
                className={`${
                  CarouselState.Active === idx
                    ? 'opacity-100'
                    : 'group-hover:opacity-100 opacity-0'
                } ${'text-white z-[1] flex items-center text-left text-xs font-medium backdrop-blur-[2px] ease-out transition-all duration-300 p-5 bg-gradient-to-r from-[rgba(0,0,0,0.7)] h-full w-full'}`}
              >
                {value.Label}
              </h6>
            </motion.button>
          ))}
        </motion.div>
        {ContentExceed && DragHover ? (
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
      </motion.div>
    </div>
  );
};
