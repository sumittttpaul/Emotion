import { RefObject, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@mui/material';
import { GalleryCarouselContentProps } from 'contents/gallery/Gallery.Carousel';
import GalleryCarouselBannerImage from './GalleryCarousel.BannerImage';

export interface GalleryCarouselBannerProps {
  ElementRef: RefObject<HTMLDivElement>;
  ContentArray: GalleryCarouselContentProps[];
  CarouselState: number;
  BannerTextTransition: string;
  setBannerTextTransition: React.Dispatch<React.SetStateAction<string>>;
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

function GalleryCarouselBanner(props: GalleryCarouselBannerProps) {
  const [CarouselState, setCarouselState] = useState(0);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={props.ElementRef}
        className="-[z-1] relative box-border flex h-[350px] w-full flex-col items-start justify-end overflow-hidden rounded-tl-xl bg-gradient-to-r from-[#000000b3] px-8 pb-[130px] text-white small-screen:h-[500px] medium-screen:h-[660px]"
      >
        <GalleryCarouselBannerImage
          className="-z-[2]"
          src={props.ContentArray[props.CarouselState].Image}
          alt=""
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
          className="box-border flex h-full flex-col justify-center"
        >
          <div className="mt-20 flex flex-col">
            <motion.div
              transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
              variants={ChildAnimationVariant}
              className={` ${
                props.ContentArray[CarouselState].Button.toLowerCase() ==
                'order now'
                  ? 'hidden small-screen:flex'
                  : 'hidden'
              }`}
            >
              <div className="flex items-center space-x-[4px] text-[14px]">
                <h6 className="line-through opacity-70">{`₹${props.ContentArray[CarouselState].OriginalPrice}`}</h6>
                <h6>{`₹${props.ContentArray[CarouselState].DiscountedPrice}`}</h6>
              </div>
            </motion.div>
            <motion.div
              transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
              variants={ChildAnimationVariant}
            >
              <h6 className="mt-3 text-[25px] font-[600] small-screen:text-[35px]">
                {props.ContentArray[CarouselState].Heading}
              </h6>
            </motion.div>
            <motion.div
              transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
              variants={ChildAnimationVariant}
              className="hidden w-full max-w-[500px] small-screen:flex"
            >
              <h6 className="mt-2 text-[15px] leading-6 opacity-80">
                {props.ContentArray[CarouselState].Description}
              </h6>
            </motion.div>
            <motion.div
              transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
              variants={ChildAnimationVariant}
              className="mt-8 box-border hidden small-screen:flex"
            >
              <Button
                disableFocusRipple
                className="button-text-lower cursor-default rounded-lg bg-[#ffffff00] bg-gradient-to-l from-[#ffffff30] px-12 py-3 text-[13px] font-[500] tracking-[0.075em] text-white ring-[#ffffff30] transition-all hover:ring-1"
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
}

export default GalleryCarouselBanner;
