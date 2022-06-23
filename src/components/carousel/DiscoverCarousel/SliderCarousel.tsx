import Image from 'next/image';
import React, { FC, useState } from 'react';
import { DiscoverCarouselIProps } from '../../../contents/store/discover/Store.Discover.Carousel';
import Flicking, { MoveEvent, WillChangeEvent } from '@egjs/react-flicking';

interface IProps {
  ContentArray: DiscoverCarouselIProps[];
}

/**
 * @author
 * @function @SliderCarousel
 **/

export const SliderCarousel: FC<IProps> = (props) => {
  return (
    <div>
      <Flicking
        viewportTag="div"
        cameraTag="div"
        align="center"
        onMove={(e: MoveEvent) => {}}
        onWillChange={(e: WillChangeEvent) => {}}
        horizontal={true}
        circular={true}
      >
        <div className='bg-white flicking-panel h-[500px] w-full'>panel 0</div>
        <div className='bg-white flicking-panel h-[500px] w-full'>panel 1</div>
        <div className='bg-white flicking-panel h-[500px] w-full'>panel 2</div>
      </Flicking>
    </div>
  );
};
