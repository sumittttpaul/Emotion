import React, { FC } from 'react';
import { DiscoverCarouselContentProps } from '../../contents/store/discover/Store.Discover.Carousel';

interface IProps {
  ContentArray: DiscoverCarouselContentProps[];
}

/**
 * @author
 * @function @DiscoverCarousel
 **/

export const DiscoverCarousel: FC<IProps> = (props) => {
  return (
    <div className="w-full h-[500px] flex space-x-2 overflow-hidden">
      <div className="flex items-center justify-center text-white rounded-r-xl w-[30px] min-w-[30px] bg-[#202020]"></div>
      <div className="flex items-center justify-center text-white rounded-xl w-[800px] min-w-[800px] bg-[#202020]">1</div>
      <div className="flex items-center justify-center text-white rounded-xl w-[300px] min-w-[300px] bg-[#202020]">2</div>
      <div className="flex items-center justify-center text-white rounded-xl w-[300px] min-w-[300px] bg-[#202020]">3</div>
      <div className="flex items-center justify-center text-white rounded-xl w-[300px] min-w-[300px] bg-[#202020]">4</div>
      <div className="flex items-center justify-center text-white rounded-xl w-[300px] min-w-[300px] bg-[#202020]">5</div>
    </div>
  );
};
