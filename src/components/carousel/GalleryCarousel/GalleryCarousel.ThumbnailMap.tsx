import { Rectangle_BlurDataURL } from '../../loader/BlurDataURL';
import { AnimationControls, motion } from 'framer-motion';
import Image from 'next/legacy/image';
import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { GalleryCarouselContentProps } from '../../../contents/gallery/Gallery.Carousel';

interface IProps {
  AutoPlay?: boolean;
  Duration?: number;
  Animation: AnimationControls;
  ThumbnailRef: RefObject<HTMLButtonElement>;
  ConstraintRef: RefObject<HTMLDivElement>;
  CarouselState: number;
  setCarouselState: Dispatch<SetStateAction<number>>;
  LeftIndicator: boolean;
  RightIndicator: boolean;
  setLeftIndicator: Dispatch<SetStateAction<boolean>>;
  setRightIndicator: Dispatch<SetStateAction<boolean>>;
  setBannerTextTransition: Dispatch<SetStateAction<string>>;
  ThumbnailArray: GalleryCarouselContentProps[];
}

const ThumbnailSizes = 'w-[220px] h-[120px] min-w-[220px] min-h-[120px]';

/**
 * @Thumbnail_Button_Map
 **/

export const GalleryCarouselThumbnailMap: FC<IProps> = (props) => {
  const CorouselClick = (idx: number) => {
    if (props.CarouselState !== idx) {
      const ThumbnailWidth = props.ThumbnailRef.current;
      const ContainerWidth = props.ConstraintRef.current;
      if (ThumbnailWidth && ContainerWidth) {
        const IndexValue = idx + 2;
        const ContentExceed = ThumbnailWidth.offsetWidth * IndexValue;
        if (ContainerWidth.offsetWidth < ContentExceed) {
          const getThubnailValue = ContainerWidth.offsetWidth - ContentExceed;
          const AnimationValue = getThubnailValue + 0; //40
          props.Animation.start({
            x: AnimationValue,
          });
        } else {
          props.Animation.start({
            x: 0,
          });
        }
      }
    }
    props.setBannerTextTransition('closed');
    setTimeout(() => props.setCarouselState(idx), 150);
  };

  return (
    <>
      {props.ThumbnailArray.map((value, idx) => (
        <motion.button
          onClick={() => CorouselClick(idx)}
          key={idx}
          ref={props.ThumbnailRef}
          whileTap={{ scale: 0.9 }}
          className={`${
            props.CarouselState === idx
              ? 'ring-[3.5px]'
              : 'ring-0 hover:ring-[3.5px]'
          } ${ThumbnailSizes} ${'group relative p-0 m-0 transition-shadow duration-300 ring-white ring-opacity-50 rounded-xl box-border flex items-center justify-center overflow-hidden'}`}
        >
          <Image
            layout="fill"
            className={`${
              props.CarouselState === idx
                ? 'scale-100 translate-x-0'
                : 'scale-[1.2] -translate-x-3 group-hover:scale-100 group-hover:translate-x-0'
            } ${' transform-gpu ease-out transition-all duration-300'}`}
            src={value.Image}
            placeholder="blur"
            blurDataURL={Rectangle_BlurDataURL}
            alt=""
          />
          <h6
            className={`${
              props.CarouselState === idx
                ? 'opacity-100'
                : 'group-hover:opacity-100 opacity-0'
            } ${'text-white z-[1] flex items-center text-left text-xs font-medium backdrop-blur-[2px] ease-out transition-all duration-300 p-5 bg-gradient-to-r from-[#000000b3] h-full w-full pr-[30%]'}`}
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
