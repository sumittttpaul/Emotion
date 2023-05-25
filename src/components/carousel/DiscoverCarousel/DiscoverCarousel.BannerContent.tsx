import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { DiscoverCarouselContentProps } from '../../../contents/store/discover/Store.Discover.Carousel';

interface IProps {
  ContentArray: DiscoverCarouselContentProps[];
  ActiveIndex: number;
  AnimationDuration: number;
  onClick: (idx: number) => void;
  CarouselOrder: string;
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
          ContentArray={props.ContentArray}
          ActiveIndex={props.ActiveIndex}
          AnimationDuration={props.AnimationDuration}
          onClick={props.onClick}
        />
      )}
      <BannerContent
        CustomIndex={props.ContentArray.length}
        Id="Discover-Carousel-Banner-Content-Center"
        ContentArray={props.ContentArray}
        ActiveIndex={props.ActiveIndex}
        AnimationDuration={props.AnimationDuration}
        onClick={props.onClick}
      />
      {props.CarouselOrder == 'right' && (
        <BannerContent
          CustomIndex={0}
          Id="Discover-Carousel-Banner-Content-Right"
          ContentArray={props.ContentArray}
          ActiveIndex={props.ActiveIndex}
          AnimationDuration={props.AnimationDuration}
          onClick={props.onClick}
        />
      )}
    </>
  );
};

interface BannerContentProps {
  Id: string;
  CustomIndex: number;
  ContentArray: DiscoverCarouselContentProps[];
  ActiveIndex: number;
  AnimationDuration: number;
  onClick: (idx: number) => void;
}

const BannerContent: FC<BannerContentProps> = (props) => {
  return (
    <div id={props.Id} className="flex space-x-3">
      {props.ContentArray.map((value, idx) => (
        <motion.div
          key={idx + props.CustomIndex}
          id={`Discover-Carousel-Banner-${idx + props.CustomIndex}`}
          initial={
            props.ActiveIndex === idx + props.CustomIndex ? 'open' : 'closed'
          }
          animate={
            props.ActiveIndex === idx + props.CustomIndex ? 'open' : 'closed'
          }
          variants={Variants}
          onClick={() => props.onClick(idx + props.CustomIndex)}
          transition={{ type: 'tween', duration: props.AnimationDuration }}
          className="inline-block rounded-xl w-[300px] min-w-[300px] bg-[#2E2E2E]"
        >
          <div className="flex h-full w-full items-center justify-center text-white">
            {value.Heading}
            <br />
            {/* ID : {idx.toString()} */}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
