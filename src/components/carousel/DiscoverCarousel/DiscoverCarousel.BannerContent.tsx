import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { DiscoverCarouselContentProps } from '../../../contents/store/discover/Store.Discover.Carousel';

interface IProps {
  ContentArray: DiscoverCarouselContentProps[];
  ActiveIndex: number;
  AnimationDuration: number;
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
      {props.ContentArray.map((value, idx) => (
        <motion.li
          key={idx}
          initial={props.ActiveIndex === idx ? 'open' : 'closed'}
          animate={props.ActiveIndex === idx ? 'open' : 'closed'}
          variants={Variants}
          onClick={() => props.onClick(idx)}
          transition={{ type: 'tween', duration: props.AnimationDuration }}
          className="inline-block rounded-xl w-[300px] min-w-[300px] bg-[#2E2E2E]"
        >
          <div className="flex h-full w-full items-center justify-center text-white">
            {value.Heading}<br/> 
            {/* ID : {idx.toString()} */}
          </div>
        </motion.li>
      ))}
    </>
  );
};
