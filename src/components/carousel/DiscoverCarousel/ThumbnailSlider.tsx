import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { Carousel_Thumbnail_BlurDataURL } from '../../loader/BlurDataURL';
import { LeftArrowButton, RightArrowButton } from './ThumbnailArrow';
import Image from 'next/image';
import React, {
  FC,
  useEffect,
  useLayoutEffect,
  useRef,
  MutableRefObject,
  useState,
  SetStateAction,
  Dispatch,
} from 'react';

interface IProps {
  ParentElementRef: MutableRefObject<null>;
  Thumbnail: { Label: string; URL: string }[];
  CarouselState: { Active: number; ImageURL: string };
  setCarouselState: Dispatch<
    SetStateAction<{ Active: number; ImageURL: string }>
  >;
}

const ThumbnailSizes =
  'w-[175px] h-[85px] min-w-[175px] min-h-[85px] md-900:w-[200px] md-900:h-[100px] md-900:min-w-[200px] md-900:min-h-[100px]';

/**
 * @ThumbnailSlider
 **/
export const ThumbnailSlider: FC<IProps> = (props) => {
  const animation = useAnimation();
  const x = useMotionValue(0);
  const dragRef = useRef(null);
  const thumbnailRef = useRef(null);
  const [ExceptionalHover, setExceptionalHover] = useState(false);
  const [DragHover, setDragHover] = useState(false);
  const [LeftHide, setLeftHide] = useState(false);
  const [RightHide, setRightHide] = useState(false);
  const [LeftAnimate, setLeftAnimate] = useState('closed');
  const [RightAnimate, setRightAnimate] = useState('closed');
  const [ContentExceed, setContentExceed] = useState(false);
  const autoScroll = true;
  let CarouselInterval: any;
  let intervalTime = 5000;

  const NextCarousel = () => {
    const index =
      props.CarouselState.Active === props.Thumbnail.length - 1
        ? 0
        : props.CarouselState.Active + 1;
    const Image = props.Thumbnail[index];
    if (!Image) return;
    var ThumbnailWidth: any = thumbnailRef.current;
    var ContainerWidth: any = props.ParentElementRef.current;
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
    props.setCarouselState({
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

  const LeftClick = () => {
    const xPos = x.get();
    var width: any = props.ParentElementRef.current;
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
    var width: any = props.ParentElementRef.current;
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
    var width: any = props.ParentElementRef.current;
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
    var width: any = props.ParentElementRef.current;
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
    var width: any = props.ParentElementRef.current;
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
    if (autoScroll) StartCarousel();
    return () => ClearCarousel();
  }, [props.CarouselState]);

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
        dragConstraints={props.ParentElementRef}
        whileDrag={{ cursor: 'grab' }}
        style={{ x }}
        className={`${
          ContentExceed ? 'ml-auto' : 'mr-auto'
        } ${'w-auto z-[1] flex space-x-2 px-8 pb-1 -mt-[80px]'}`}
      >
        {props.Thumbnail.map((value, idx) => (
          <motion.button
            onClick={() =>
              setTimeout(() => {
                props.setCarouselState({
                  Active: idx,
                  ImageURL: value.URL,
                });
              }, 150)
            }
            key={idx}
            ref={thumbnailRef}
            whileTap={{ scale: 0.9 }}
            className={`${
              props.CarouselState.Active === idx
                ? 'ring-[2.5px]'
                : 'ring-0 hover:ring-[2.5px]'
            } ${ThumbnailSizes} ${'group relative p-0 m-0 transition-shadow duration-300 ring-white ring-opacity-50 rounded-lg md-900:rounded-xl flex items-center justify-center overflow-hidden'}`}
          >
            <Image
              layout="fill"
              loading="lazy"
              className={`${
                props.CarouselState.Active === idx
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
                props.CarouselState.Active === idx
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
          <LeftArrowButton
            animate={LeftAnimate}
            onClick={() => LeftClick()}
            onHoverStart={DragHoverStart}
            onHoverEnd={DragHoverEnd}
          />
          <RightArrowButton
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
  );
};
