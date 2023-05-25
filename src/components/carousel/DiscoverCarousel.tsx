import React, { FC } from 'react';
import { DiscoverCarouselContentProps } from '../../contents/store/discover/Store.Discover.Carousel';
import { DiscoverCarouselBanner } from './DiscoverCarousel/DiscoverCarousel.Banner';

interface IProps {
  ContentArray: DiscoverCarouselContentProps[];
}

/**
 * @author
 * @function @DiscoverCarousel
 **/

export const DiscoverCarousel: FC<IProps> = (props) => {
  return (
    <div className='relative flex flex-col w-full mt-5'>
      <DiscoverCarouselBanner ContentArray={props.ContentArray} />
      {/* <div className="w-full flex p-3 items-center justify-center">
        {props.ContentArray.map((value, idx) => (
          <motion.button
            key={idx}
            whileTap={{ scale: 0.9 }}
            className="px-1 py-3 group cursor-default bg-transparent"
          >
            <div
              className={`${
                ActiveIndex === idx
                  ? 'h-[6px] w-[6px]'
                  : 'group-hover:w-[6px] group-hover:h-[6px]'
              } w-[4px] min-w-[4px] h-[4px] min-h-[4px]  rounded-full bg-white opacity-50 group-hover:opacity-90`}
            />
          </motion.button>
        ))}
      </div> */}
    </div>
  );
};
