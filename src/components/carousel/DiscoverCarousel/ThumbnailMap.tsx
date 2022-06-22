import { motion } from 'framer-motion';
import React, { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import { Carousel_Thumbnail_BlurDataURL } from '../../loader/BlurDataURL';
import Image from 'next/image';

interface IProps {
  Thumbnail: { Label: string; URL: string }[];
  ThumbnailRef: MutableRefObject<null>;
  CarouselState: { Active: number; ImageURL: string };
  setCarouselState: Dispatch<
    SetStateAction<{ Active: number; ImageURL: string }>
  >;
}

const ThumbnailSizes =
  'w-[175px] h-[85px] min-w-[175px] min-h-[85px] md-900:w-[200px] md-900:h-[100px] md-900:min-w-[200px] md-900:min-h-[100px]';

/**
 * @Thumbnail_Button_Map
 **/
export const ThumbnailMap: FC<IProps> = (props) => {
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
            }, 150)
          }
          key={idx}
          ref={props.ThumbnailRef}
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
    </>
  );
};
