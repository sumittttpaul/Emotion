import { GalleryCarouselContentProps } from 'contents/gallery/Gallery.Carousel';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Poster_BlurDataURL } from 'components/loading/BlurDataURL';
import { Button } from '@mui/material';
import { HeartIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export interface GalleryCarouselSliderProps {
  ContentArray: GalleryCarouselContentProps[];
}

function GalleryCarouselSlider(props: GalleryCarouselSliderProps) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        bulletClass:
          'swiper-pagination-bullet mobile-carousel-pagination-bullet',
      }}
      loop={true}
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={15}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      style={{ color: '#ffffff' }}
      wrapperTag="ul"
      className="h-auto w-full"
    >
      {props.ContentArray.map((content, index) => (
        <SwiperSlide
          key={index}
          tag="li"
          className="box-border flex items-end justify-start bg-gradient-to-t from-[#000000cc] p-5"
          style={{
            width: '85%',
            height: 450,
            borderRadius: 15,
            overflow: 'hidden',
          }}
        >
          <Image
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            placeholder="blur"
            className="-z-[1]"
            src={content.Image}
            blurDataURL={Poster_BlurDataURL}
            alt=""
          />
          <div className="z-[1] mb-3 box-border space-y-5">
            <div>
              <h6 className="text-xl font-[500]">
                {props.ContentArray[index].Heading}
              </h6>
            </div>
            <div className="w-full space-y-2">
              {/* <h6 className="uppercase tracking-[0.5px] font-[500] leading-[1.3333] text-[10px]">
                {props.ContentArray[index].Category}
              </h6> */}
              <h6 className="text-[13px]">
                {props.ContentArray[index].Description}
              </h6>
            </div>
            {props.ContentArray[index].Button.toLowerCase() === 'order now' ? (
              <div className="box-border space-y-3">
                <div className="my-1 flex items-center space-x-[4px] text-xs">
                  {/* <h6 className="bg-primary-blue-rgb text-[11px] py-1 px-2.5 mr-[2px] rounded-[4px]">
                    {props.ContentArray[index].Discount}
                  </h6> */}
                  <h6>Starting at</h6>
                  <h6 className="line-through opacity-70">{`₹${props.ContentArray[index].OriginalPrice}`}</h6>
                  <h6>{`₹${props.ContentArray[index].DiscountedPrice}`}</h6>
                </div>
                <div className="flex space-x-2">
                  <Button
                    disableFocusRipple
                    className="cursor-default bg-white px-3 py-3 text-[11.5px] font-[600] tracking-[0.075em] text-black hover:bg-white"
                  >
                    order now
                  </Button>
                  <Button
                    disableFocusRipple
                    className="cursor-default bg-transparent p-3 tracking-[0.075em] text-white hover:bg-white hover:bg-opacity-10"
                  >
                    <div className="flex space-x-2">
                      <HeartIcon className="h-4 w-4" />
                      <h6 className="text-[10px]">wishlist</h6>
                    </div>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="box-border space-y-3">
                <div className="my-1 flex items-center space-x-[4px] text-xs">
                  {/* <h6 className="bg-primary-blue-rgb text-[11px] py-1 px-2.5 mr-[2px] rounded-[4px]">
                {props.ContentArray[index].Discount}
              </h6> */}
                  <h6>Starting from</h6>
                  <h6 className="line-through opacity-70">{`₹${props.ContentArray[index].OriginalPrice}`}</h6>
                  <h6>{`₹${props.ContentArray[index].DiscountedPrice}`}</h6>
                </div>
                <Button
                  disableFocusRipple
                  className="cursor-default bg-white px-3 py-3 text-[11.5px] font-[600] tracking-[0.075em] text-black hover:bg-white"
                >
                  Explore
                </Button>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GalleryCarouselSlider;
