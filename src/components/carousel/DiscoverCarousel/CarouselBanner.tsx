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
    transition: { staggerChildren: 0.05, delayChildren: 0 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -3 },
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
        className="text-white -[z-1] relative box-border items-start justify-end w-full h-[500px] md-900:h-[700px] px-8 pb-[130px] flex flex-col overflow-hidden rounded-tl-3xl bg-gradient-to-r from-[#000000b3]"
      >
        <CarouselBannerImage
          className="-z-[2]"
          src={props.ContentArray[props.CarouselState].Image}
          alt=""
          objectPosition="center"
        />
        <p className="-ml-2 mt-5 text-lg font-semibold">Home</p>
        <motion.div
          animate={props.BannerTextTransition}
          onAnimationComplete={() => {
            props.setBannerTextTransition('open');
            setTimeout(() => {
              setCarouselState(props.CarouselState);
            }, 20);
          }}
          variants={StaggerAnimationVariant}
          className="box-border flex flex-col h-full justify-center"
        >
          <div className="flex flex-col mt-20">
            <motion.div
              transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
              variants={ChildAnimationVariant}
              className={`${
                props.ContentArray[CarouselState].Button == 'Order now'
                  ? 'flex'
                  : 'hidden'
              }`}
            >
              <div className="text-[14px] flex items-center space-x-[4px]">
                <h6 className="line-through opacity-70">{`₹${props.ContentArray[CarouselState].OriginalPrice}`}</h6>
                <h6>{`₹${props.ContentArray[CarouselState].DiscountedPrice}`}</h6>
              </div>
            </motion.div>
            <motion.div
              transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
              variants={ChildAnimationVariant}
            >
              <h6 className="text-[35px] font-[600] mt-3">
                {props.ContentArray[CarouselState].Heading}
              </h6>
            </motion.div>
            <motion.div
              transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
              variants={ChildAnimationVariant}
              className="max-w-[500px] w-full"
            >
              <h6 className="text-[15px] leading-6 opacity-80 mt-2">
                {props.ContentArray[CarouselState].Description}
              </h6>
            </motion.div>
            <motion.div
              transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
              variants={ChildAnimationVariant}
              className="mt-8 box-border"
            >
              <Button
                disableFocusRipple
                className="rounded-lg py-3 cursor-default px-12 text-[13px] font-[500] tracking-[0.075em] button-text-lower hover:ring-1 ring-[#ffffff30] bg-gradient-to-l from-[#ffffff30] bg-[#ffffff00] text-white transition-all"
                sx={{
                  '.MuiTouchRipple-child': {
                    backgroundColor: '#ffffff20 !important',
                  },
                }}
              >
                {props.ContentArray[props.CarouselState].Button}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
