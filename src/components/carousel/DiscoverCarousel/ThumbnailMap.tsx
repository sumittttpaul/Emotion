import { rectangle_BlurDataURL } from '../../loader/BlurDataURL';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import { DiscoverCarouselIProps } from '../../../contents/store/discover/Store.Discover.Carousel';

interface IProps {
  AutoPlay?: boolean;
  Duration?: number;
  ThumbnailRef: MutableRefObject<null>;
  CarouselState: number;
  setCarouselState: Dispatch<SetStateAction<number>>;
  LeftIndicator: boolean;
  RightIndicator: boolean;
  setLeftIndicator: Dispatch<SetStateAction<boolean>>;
  setRightIndicator: Dispatch<SetStateAction<boolean>>;
  setBannerTextTransition: Dispatch<SetStateAction<string>>;
  ThumbnailArray: DiscoverCarouselIProps[];
}

const ThumbnailSizes =
  'w-[175px] h-[85px] min-w-[175px] min-h-[85px] md-900:w-[200px] md-900:h-[100px] md-900:min-w-[200px] md-900:min-h-[100px]';

/**
 * @Thumbnail_Button_Map
 **/
export const ThumbnailMap: FC<IProps> = (props) => {
  return (
    <>
      {props.ThumbnailArray.map((value, idx) => (
        <motion.button
          onClick={() => {
            props.CarouselState === idx
              ? null
              : props.setBannerTextTransition('closed');
            setTimeout(() => props.setCarouselState(idx), 150);
          }}
          key={idx}
          ref={props.ThumbnailRef}
          whileTap={{ scale: 0.9 }}
          className={`${
            props.CarouselState === idx
              ? 'ring-[3px]'
              : 'ring-0 hover:ring-[3px]'
          } ${ThumbnailSizes} ${'group relative p-0 m-0 transition-shadow duration-300 ring-white ring-opacity-50 rounded-lg md-900:rounded-xl box-border flex items-center justify-center overflow-hidden'}`}
        >
          <Image
            layout="fill"
            loading="lazy"
            className={`${
              props.CarouselState === idx
                ? 'scale-100 translate-x-0'
                : 'scale-[1.2] -translate-x-3 group-hover:scale-100 group-hover:translate-x-0'
            } ${' transform-gpu ease-out transition-all duration-300'}`}
            src={value.Image}
            placeholder="blur"
            blurDataURL={rectangle_BlurDataURL}
            alt="Casourel-Image-Thumbnail"
          />
          <h6
            className={`${
              props.CarouselState === idx
                ? 'opacity-100'
                : 'group-hover:opacity-100 opacity-0'
            } ${'text-white z-[1] flex items-center text-left text-xs font-medium backdrop-blur-[2px] ease-out transition-all duration-300 p-5 bg-gradient-to-r from-[rgba(0,0,0,0.7)] h-full w-full pr-[30%]'}`}
          >
            {value.ThumbnailHeading}
          </h6>
          <div className="absolute bottom-0 w-full z-[2] p-[2px] h-auto bg-transparent">
            {props.CarouselState === idx &&
              props.AutoPlay &&
              props.LeftIndicator && (
                <motion.div
                  animate={{ width: '100%', opacity: 1 }}
                  onAnimationComplete={() => {
                    if (props.LeftIndicator) props.setLeftIndicator(false);
                    if (!props.RightIndicator) props.setRightIndicator(true);
                  }}
                  transition={{
                    ease: 'anticipate',
                    type: 'tween',
                    duration: props.Duration ? props.Duration * 0.5 : 0,
                  }}
                  className={`${
                    props.LeftIndicator ? 'flex' : 'hidden'
                  } ${'w-0 mr-auto opacity-0 h-[3px] rounded-b-3xl bg-white'}`}
                />
              )}
            {props.CarouselState === idx &&
              props.AutoPlay &&
              props.RightIndicator && (
                <motion.div
                  animate={{ width: 0, opacity: 0.5 }}
                  onAnimationComplete={() => {
                    if (props.RightIndicator) props.setRightIndicator(false);
                  }}
                  transition={{
                    ease: 'anticipate',
                    type: 'tween',
                    duration: props.Duration ? props.Duration * 0.5 : 0,
                  }}
                  className={`${
                    props.RightIndicator ? 'flex' : 'hidden'
                  } ${'w-full ml-auto opacity-100 h-[3px] rounded-b-3xl bg-white'}`}
                />
              )}
          </div>
        </motion.button>
      ))}
    </>
  );
};
