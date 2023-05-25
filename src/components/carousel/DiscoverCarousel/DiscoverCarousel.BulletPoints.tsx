import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { DiscoverCarouselContentProps } from '../../../contents/store/discover/Store.Discover.Carousel';

interface IProps {
  ContentArray: DiscoverCarouselContentProps[];
  ActiveIndex: number;
}

/**
 * @author
 * @function @DiscoverCarouselBulletPoints
 **/

export const DiscoverCarouselBulletPoints: FC<IProps> = (props) => {
  return (
    <div className="w-full flex p-3 items-center justify-center">
      {props.ContentArray.map((value, idx) => (
        <motion.button
          key={idx}
          whileTap={{ scale: 0.9 }}
          className="px-1 py-3 group cursor-default bg-transparent"
        >
          <div
            className={`${
              props.ActiveIndex === idx
                ? 'h-[6px] w-[6px]'
                : 'group-hover:w-[6px] group-hover:h-[6px]'
            } w-[4px] min-w-[4px] h-[4px] min-h-[4px]  rounded-full bg-white opacity-50 group-hover:opacity-90`}
          />
        </motion.button>
      ))}
    </div>
  );
};
