import React, {
  FC,
  Dispatch,
  SetStateAction,
  RefObject,
  useState,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@mui/material';
import { HeartIcon } from '@heroicons/react/outline';
import { CarouselBannerImage } from './CarouselBannerImage';
import { DiscoverCarouselIProps } from '../../../contents/store/discover/Store.Discover.Carousel';
import { useEffect } from 'react';

export interface CarouselBannerProps {
  ElementRef: RefObject<HTMLDivElement>;
  ContentArray: DiscoverCarouselIProps[];
  CarouselState: number;
  BannerTextTransition: string;
  setBannerTextTransition: Dispatch<SetStateAction<string>>;
}

const StaggerAnimationVariant = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const ChildAnimationVariant = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 15,
    opacity: 0,
  },
};

/**
 * @Carousel_Banner
 **/
export const CarouselBanner: FC<CarouselBannerProps> = (props) => {
  const [CarouselState, setCarouselState] = useState(0);
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        ref={props.ElementRef}
        className="text-white -[z-1] relative box-border items-start justify-end rounded-t-2xl w-full h-[500px] md-900:h-[600px] px-12 pb-[130px] flex flex-col overflow-hidden bg-gradient-to-r from-[rgba(0,0,0,0.7)]"
      >
        <CarouselBannerImage
          className="-z-[2]"
          src={props.ContentArray[props.CarouselState].Image}
          alt=""
          objectPosition="center"
        />
        <motion.div
          animate={props.BannerTextTransition}
          onAnimationComplete={() => {
            setCarouselState(props.CarouselState);
            props.setBannerTextTransition('open');
          }}
          variants={StaggerAnimationVariant}
          className="space-y-8 box-border h-[253px]"
        >
          {props.ContentArray[props.CarouselState].Type.toLowerCase() ===
          'order' ? (
            <>
              <motion.div
                transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
                variants={ChildAnimationVariant}
              >
                <h6 className="text-3xl font-[500]">
                  {props.ContentArray[CarouselState].Heading}
                </h6>
              </motion.div>
              <motion.div
                transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
                variants={ChildAnimationVariant}
                className="max-w-[500px] w-full space-y-1.5"
              >
                <h6 className="uppercase tracking-[0.5px] font-[500] leading-[1.3333] text-[11px]">
                  {props.ContentArray[CarouselState].Category}
                </h6>
                <h6 className="text-[15px] leading-6">
                  {props.ContentArray[CarouselState].Description}
                </h6>
              </motion.div>
              <motion.div
                transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
                variants={ChildAnimationVariant}
                className="space-y-3 box-border"
              >
                <div className="text-xs flex items-center space-x-[4px] my-1">
                  <h6 className="bg-primary-blue-rgb font-[600] text-[11px] py-1 px-2.5 mr-[2px] rounded-[4px]">
                    {props.ContentArray[CarouselState].Discount}
                  </h6>
                  <h6>Starting at</h6>
                  <h6 className="line-through opacity-70">{`₹${props.ContentArray[CarouselState].OriginalPrice}`}</h6>
                  <h6>{`₹${props.ContentArray[CarouselState].DiscountedPrice}`}</h6>
                </div>
                <div className="flex space-x-3">
                  <Button
                    disableFocusRipple
                    className="py-4 cursor-default px-8 text-[11.5px] font-[600] tracking-[0.075em] bg-white hover:bg-white text-black"
                  >
                    order now
                  </Button>
                  <Button
                    disableFocusRipple
                    className="p-4 cursor-default tracking-[0.075em] bg-transparent hover:bg-white hover:bg-opacity-10 text-white"
                  >
                    <div className="flex space-x-2">
                      <HeartIcon className="h-4 w-4" />
                      <h6 className="text-[10px]">add to wishlist</h6>
                    </div>
                  </Button>
                </div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
                variants={ChildAnimationVariant}
              >
                <h6 className="text-3xl font-[500]">
                  {props.ContentArray[CarouselState].Heading}
                </h6>
              </motion.div>
              <motion.div
                transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
                variants={ChildAnimationVariant}
                className="max-w-[500px] w-full space-y-1.5"
              >
                <h6 className="uppercase tracking-[0.5px] font-[500] leading-[1.3333] text-[11px]">
                  {props.ContentArray[CarouselState].Category}
                </h6>
                <h6 className="text-[15px] leading-6">
                  {props.ContentArray[CarouselState].Description}
                </h6>
              </motion.div>
              <motion.div
                transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
                variants={ChildAnimationVariant}
                className="space-y-3 box-border"
              >
                <div className="text-xs flex items-center space-x-[4px] my-1">
                  {/* <h6 className="bg-primary-blue-rgb text-[11px] py-1 px-2.5 mr-[2px] rounded-[4px]">
                {props.ContentArray[props.CarouselState].Discount}
              </h6> */}
                  <h6>Starting from</h6>
                  <h6 className="line-through opacity-70">{`₹${props.ContentArray[CarouselState].OriginalPrice}`}</h6>
                  <h6>{`₹${props.ContentArray[CarouselState].DiscountedPrice}`}</h6>
                </div>
                <Button
                  disableFocusRipple
                  className="py-4 cursor-default px-8 text-[11.5px] font-[600] tracking-[0.075em] bg-white hover:bg-white text-black"
                >
                  Explore
                </Button>
              </motion.div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
