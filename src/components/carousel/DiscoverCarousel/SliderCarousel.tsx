import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import Slider from 'react-slick';
import { DiscoverCarouselIProps } from '../../../contents/store/discover/Store.Discover.Carousel';

interface IProps {
  ContentArray: DiscoverCarouselIProps[];
}

/**
 * @author
 * @function @SliderCarousel
 **/

export const SliderCarousel: FC<IProps> = (props) => {
  const [position, positionSet] = useState(0);
  const handleSwipe = (dir: string) => {
    if (dir === 'Right') {
      if (position < props.ContentArray.length - 1) {
        positionSet(position + 1);
      }
    }
    if (dir === 'Left') {
      if (position > 0) {
        positionSet(position - 1);
      }
    }
  };
  return (
    <Slider onSwipe={handleSwipe} className="App">
      <div className="row">
        {props.ContentArray.map((url, index) => (
          <motion.div
            className="container"
            key={index}
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              rotate: 0,
              left: `${(index - position) * 60 - 30}vw`,
              scale: index === position ? 1 : 0.8,
            }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <Image height={500} width="auto" src={url.Image} alt="mobile-carousel"/>
          </motion.div>
        ))}
      </div>
    </Slider>
  );
};
