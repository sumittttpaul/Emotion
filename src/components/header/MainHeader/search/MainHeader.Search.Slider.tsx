import { motion, Variants } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';
import {
  StoreDiscoverCurationSearch,
  StoreDiscoverExploreSearch,
  StoreDiscoverPopularSearch,
} from '../../../../contents/store/discover/Store.Discover.Search';
import { MainHeaderSearchCuration } from './MainHeader.Search.Curation';
import { MainHeaderSearchPopular } from './MainHeader.Search.Popular';
import { MainHeaderSearchExplore } from './MainHeader.Search.Explore';
import { MainHeaderSearchExit } from './MainHeader.Search.Exit';

export interface MainHeaderSearchSliderProps {
  open: boolean;
  onClose: () => void;
}

const SliderVariant = {
  open: { height: 250, display: 'block' },
  closed: { height: 0, display: 'none' },
};
const UlVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0 },
  },
  closed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};
const LiVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.05,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

/**
 * @author
 * @function @MainHeaderSearchSlider
 **/

export const MainHeaderSearchSlider: FC<
  MainHeaderSearchSliderProps
> = (props) => {
  const [Slider, setSlider] = useState('closed');

  useEffect(() => {
    if (props.open) {
      setSlider('open');
    } else {
      setSlider('closed');
    }
  }, [props.open]);

  return (
    <>
      {props.open ? (
        <div
          onClick={props.onClose}
          className="absolute h-screen w-full top-full bg-black backdrop-blur-md opacity-75 left-0"
        />
      ) : (
        <></>
      )}
      <motion.div
        className="bg-transparent absolute left-0 top-full w-full"
        animate={Slider}
        variants={SliderVariant}
      >
        <div className="w-full bg-[#0f0f0f] flex">
          <motion.div
            variants={UlVariants}
            className="space-y-5 pt-3 flex flex-col w-full h-full max-w-[1440px] mx-auto"
          >
            <div className="w-full flex flex-col sm:flex-row sm:justify-between overflow-x-hidden">
              <div className="mt-5 order-2 sm:order-1 w-full sm:w-[50%] flex overflow-y-hidden">
                <motion.div variants={LiVariants} className="w-full flex">
                  <MainHeaderSearchExplore
                    ContentArray={StoreDiscoverExploreSearch}
                  />
                </motion.div>
              </div>
              <div className="order-1 sm:order-2 w-full sm:w-[50%] space-y-5 flex flex-col overflow-y-hidden">
                <motion.div variants={LiVariants} className="w-full flex">
                  <MainHeaderSearchPopular
                    ContentArray={StoreDiscoverPopularSearch}
                  />
                </motion.div>
                <motion.div variants={LiVariants} className="w-full flex">
                  <MainHeaderSearchCuration
                    ContentArray={StoreDiscoverCurationSearch}
                  />
                </motion.div>
              </div>
            </div>
            <motion.div
              variants={LiVariants}
              className="w-full flex justify-center pb-5 bg-gradient-to-t from-[#0f0f0f] sticky-bottom"
            >
              <MainHeaderSearchExit
                onClick={() => setTimeout(() => props.onClose(), 100)}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
