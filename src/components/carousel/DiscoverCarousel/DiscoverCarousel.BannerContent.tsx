import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { DiscoverCarouselContentProps } from '../../../contents/store/discover/Store.Discover.Carousel';
import { DiscoverCarouselPieTimer } from './DiscoverCarousel.PieTimer';

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
          className="relative inline-block rounded-xl w-[300px] min-w-[300px] bg-[#2E2E2E]"
        >
          <div className="flex h-full w-full items-center justify-center text-white">
            {value.Heading}
          </div>
          {props.CarouselState === idx + props.CustomIndex &&
            props.DisabledCarousel === false &&
            props.AutoPlay === true &&
            props.IntervalStatus === 'running' && (
              <div className="absolute bottom-0 left-0 p-10 opacity-50">
                <DiscoverCarouselPieTimer />
              </div>
            )}
        </motion.div>
      ))}
    </div>
  );
};
