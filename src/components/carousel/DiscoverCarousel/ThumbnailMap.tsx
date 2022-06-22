import { Carousel_Thumbnail_BlurDataURL } from '../../loader/BlurDataURL';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useState,
} from 'react';

interface IProps {
  Duration?: number;
  Thumbnail: { Label: string; URL: string }[];
  ThumbnailRef: MutableRefObject<null>;
  CarouselState: { Active: number; ImageURL: string };
  setCarouselState: Dispatch<
    SetStateAction<{ Active: number; ImageURL: string }>
  >;
}

const IndicatorLeft = {
  start: {
    width: '100%',
    opacity: 1,
  },
  end: {
    width: 0,
    opacity: 0.5,
  },
};

const IndicatorRight = {
  start: {
    width: '100%',
    opacity: 1,
  },
  end: {
    width: 0,
    opacity: 0.5,
  },
};

const ThumbnailSizes =
  'w-[175px] h-[85px] min-w-[175px] min-h-[85px] md-900:w-[200px] md-900:h-[100px] md-900:min-w-[200px] md-900:min-h-[100px]';

/**
 * @Thumbnail_Button_Map
 **/
export const ThumbnailMap: FC<IProps> = (props) => {
  const [LeftAnimation, setLeftAnimation] = useState('end');
  const [RightAnimation, setRightAnimation] = useState('end');
  const [Left, setLeft] = useState(true);
  const [Right, setRight] = useState(false);
  return (
    <>
      {props.Thumbnail.map((value, idx) => (
        <motion.button
          onClick={() =>
            setTimeout(() => {
              props.setCarouselState({
                Active: idx,
                ImageURL: value.URL,
              });
              setLeftAnimation('start');
            }, 150)
          }
          key={idx}
          ref={props.ThumbnailRef}
          whileTap={{ scale: 0.9 }}
          className={`${
            props.CarouselState.Active === idx
              ? 'ring-[3px]'
              : 'ring-0 hover:ring-[3px]'
          } ${ThumbnailSizes} ${'group relative p-0 m-0 transition-shadow duration-300 ring-white ring-opacity-50 rounded-lg md-900:rounded-xl box-border flex items-center justify-center overflow-hidden'}`}
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
          <div className="absolute bottom-0 w-full z-[2] p-[2px] h-auto bg-transparent">
            {Left && (
              <motion.div
                animate={LeftAnimation}
                variants={IndicatorLeft}
                onAnimationComplete={() => {
                  setLeft(false);
                  setRight(true);
                }}
                transition={{
                  ease: 'anticipate',
                  type: 'tween',
                  duration: props.Duration ? props.Duration * 0.5 : 0,
                }}
                className={`${
                  Left ? 'flex' : 'hidden'
                } ${'w-0 mr-auto opacity-0 h-1 rounded-b-3xl bg-white'}`}
              />
            )}
            {Right && (
              <motion.div
                animate={RightAnimation}
                variants={IndicatorRight}
                onAnimationComplete={() => {
                  setRight(false);
                  setLeft(true);
                }}
                transition={{
                  ease: 'anticipate',
                  type: 'tween',
                  duration: props.Duration ? props.Duration * 0.5 : 0,
                }}
                className={`${
                  Right ? 'flex' : 'hidden'
                } ${'w-full ml-auto opacity-100 h-1 rounded-b-3xl bg-white'}`}
              />
            )}
          </div>
        </motion.button>
      ))}
    </>
  );
};
