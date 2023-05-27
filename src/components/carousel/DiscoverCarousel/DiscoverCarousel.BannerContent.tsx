import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { DiscoverCarouselContentProps } from '../../../contents/store/discover/Store.Discover.Carousel';
import { DiscoverCarouselPieTimer } from './DiscoverCarousel.PieTimer';
import { Button } from '@mui/material';
import { ChevronRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';

interface IProps {
  IntervalStatus: string;
  AutoPlay?: boolean;
  BannerContentArray: DiscoverCarouselContentProps[];
  CarouselState: number;
  CarouselOrder: string;
  DisabledCarousel: boolean;
  onClick: (idx: number) => void;
}

const Variants = {
  open: {
    width: 850,
  },
  closed: {
    width: 300,
  },
};

/**
 * @author
 * @function @DiscoverCarouselBannerContent
 **/

export const DiscoverCarouselBannerContent: FC<IProps> = (props) => {
  return (
    <>
      {props.CarouselOrder == 'left' && (
        <BannerContent
          CustomIndex={0}
          Id="Discover-Carousel-Banner-Content-Left"
          AutoPlay={props.AutoPlay}
          IntervalStatus={props.IntervalStatus}
          onClick={props.onClick}
          BannerContentArray={props.BannerContentArray}
          DisabledCarousel={props.DisabledCarousel}
          CarouselState={props.CarouselState}
        />
      )}
      <BannerContent
        CustomIndex={props.BannerContentArray.length}
        Id="Discover-Carousel-Banner-Content-Center"
        AutoPlay={props.AutoPlay}
        IntervalStatus={props.IntervalStatus}
        onClick={props.onClick}
        BannerContentArray={props.BannerContentArray}
        DisabledCarousel={props.DisabledCarousel}
        CarouselState={props.CarouselState}
      />
      {props.CarouselOrder == 'right' && (
        <BannerContent
          CustomIndex={0}
          Id="Discover-Carousel-Banner-Content-Right"
          AutoPlay={props.AutoPlay}
          IntervalStatus={props.IntervalStatus}
          onClick={props.onClick}
          BannerContentArray={props.BannerContentArray}
          DisabledCarousel={props.DisabledCarousel}
          CarouselState={props.CarouselState}
        />
      )}
    </>
  );
};

interface BannerContentProps {
  Id: string;
  IntervalStatus: string;
  AutoPlay?: boolean;
  CustomIndex: number;
  CarouselState: number;
  BannerContentArray: DiscoverCarouselContentProps[];
  DisabledCarousel: boolean;
  onClick: (idx: number) => void;
}

const DescriptionAnimationVariant = {
  open: {
    marginLeft: 0,
    scale: 1,
    height: 40,
    opacity: 0.7,
  },
  closed: {
    marginLeft: -40,
    scale: 0.65,
    height: 0,
    opacity: 0,
  },
};

const HeaderAnimationVariant = {
  open: {
    scale: 1,
    marginLeft: 0,
  },
  closed: {
    scale: 0.65,
    marginLeft: -40,
  },
};

const getCarouselColor = (color: string) => {
  return `from-${color}` as string;
};

const getButtonColor = (color: string) => {
  return `bg-${color}` as string;
};

const BannerContent: FC<BannerContentProps> = (props) => {
  return (
    <div id={props.Id} className="flex space-x-3">
      {props.BannerContentArray.map((value, idx) => (
        <motion.div
          key={idx + props.CustomIndex}
          id={`Discover-Carousel-Banner-${idx + props.CustomIndex}`}
          initial={
            props.CarouselState === idx + props.CustomIndex ? 'open' : 'closed'
          }
          animate={
            props.CarouselState === idx + props.CustomIndex ? 'open' : 'closed'
          }
          variants={Variants}
          onClick={() => props.onClick(idx + props.CustomIndex)}
          transition={{ type: 'tween' }}
          className="relative inline-block rounded-xl overflow-hidden w-[300px] min-w-[300px] text-white"
        >
          <div className="flex h-full w-full">
            <Image
              fill
              priority
              className=""
              src={value.Image}
              sizes='(max-width: 800px) 800px'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              alt=""
            />
          </div>
          <div
            className={`absolute flex items-end w-full h-full left-0 bottom-0 px-10 pb-[150px] z-[10] bg-gradient-to-r ${getCarouselColor(
              value.Color
            )} overflow-hidden`}
          >
            <div className="flex flex-col w-full space-y-10 z-[20]">
              {/* Content */}
              <div className="flex flex-col w-full space-y-2">
                {/* Price */}
                <div className="flex justify-start w-full space-x-2">
                  <div className="flex bg-[#ffffff25] text-[11px] rounded-md space-x-2 px-3 py-1">
                    <p className="line-through text-[#CFCFCF]">
                      ₹{value.OriginalPrice}
                    </p>
                    <p>₹{value.DiscountedPrice}</p>
                  </div>
                </div>
                {/* Heading */}
                <motion.h1
                  initial={
                    props.CarouselState === idx + props.CustomIndex
                      ? 'open'
                      : 'closed'
                  }
                  animate={
                    props.CarouselState === idx + props.CustomIndex
                      ? 'open'
                      : 'closed'
                  }
                  variants={HeaderAnimationVariant}
                  transition={{ type: 'tween', duration: 0.4 }}
                  className="truncate text-[30px] font-[500] tracking-wide"
                >
                  {value.HeadingLine1} <br /> {value.HeadingLine2} <br />{' '}
                  {value.HeadingLine3}
                </motion.h1>
                {/* Description */}
                <motion.p
                  initial={
                    props.CarouselState === idx + props.CustomIndex
                      ? 'open'
                      : 'closed'
                  }
                  animate={
                    props.CarouselState === idx + props.CustomIndex
                      ? 'open'
                      : 'closed'
                  }
                  variants={DescriptionAnimationVariant}
                  transition={{ type: 'tween', duration: 0.4 }}
                  className="truncate text-[13px] font-[400] tracking-wide w-full"
                >
                  {value.DescriptionLine1} <br /> {value.DescriptionLine2}{' '}
                  <br /> {value.DescriptionLine3}
                </motion.p>
              </div>
              {/* Button */}
              <div className="w-full justify-start flex">
                <Button
                  className={`${getButtonColor(
                    value.Color
                  )} z-[1] flex px-8 cursor-default rounded-lg text-white button-text-lower`}
                >
                  <div className="flex space-x-2 items-center justify-center">
                    <ChevronRightIcon className="h-4" />
                    <p className="text-[12px] tracking-wide font-[400]">
                      {value.Button}
                    </p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          {props.CarouselState === idx + props.CustomIndex &&
            props.DisabledCarousel === false &&
            props.AutoPlay === true &&
            props.IntervalStatus === 'running' && (
              <div className="absolute bottom-0 left-0 p-10 opacity-30 z-[30]">
                <DiscoverCarouselPieTimer />
              </div>
            )}
        </motion.div>
      ))}
    </div>
  );
};
