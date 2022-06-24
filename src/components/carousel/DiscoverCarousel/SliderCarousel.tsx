import { DiscoverCarouselIProps } from '../../../contents/store/discover/Store.Discover.Carousel';
import React, { FC } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Poster_BlurDataURL } from '../../loader/BlurDataURL';

export interface SliderCarouselProps {
  ContentArray: DiscoverCarouselIProps[];
}

/**
 * @SliderCarousel
 **/
export const SliderCarousel: FC<SliderCarouselProps> = (props) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        // bulletClass:'',
      }}
      loop={true}
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={15}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ color: '#ffffff' }}
      wrapperTag="ul"
      className="w-full h-auto"
    >
      {props.ContentArray.map((content, index) => (
        <SwiperSlide
          key={index}
          tag="li"
          style={{
            width: '80%',
            height: 500,
            borderRadius: 15,
            overflow: 'hidden',
          }}
        >
          <Image
            loading="lazy"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            src={content.Image}
            blurDataURL={Poster_BlurDataURL}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
