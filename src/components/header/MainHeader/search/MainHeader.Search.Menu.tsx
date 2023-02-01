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

export interface MainHeaderSearchMenuProps {
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
 * @function @MainHeaderSearchMenu
 **/

export const MainHeaderSearchMenu: FC<MainHeaderSearchMenuProps> = (
  props
) => {
  const [Slider, setSlider] = useState('closed');

  useEffect(() => {
    if (props.open) {
      setSlider('open');
    } else {
      setSlider('closed');
    }
  }, [props.open]);

  return (
    <motion.div
      className="bg-transparent absolute left-0 top-full w-full"
      animate={Slider}
      variants={SliderVariant}
    >
      <div className="ml-[335px] w-[664px] bg-[#0f0f0f] flex rounded-b-3xl">
        <motion.div
          variants={UlVariants}
          className="space-y-5 pb-5 pt-3 flex flex-col w-full h-full mx-auto"
        >
          <div className="w-full flex flex-col sm:flex-row sm:justify-between overflow-x-hidden">
            <div className="w-full space-y-5 flex flex-col overflow-y-hidden">
              <motion.div variants={LiVariants} className="w-full flex">
                <MainHeaderSearchPopular
                  onClick={props.onClose}
                  ContentArray={StoreDiscoverPopularSearch}
                />
              </motion.div>
              <motion.div variants={LiVariants} className="w-full flex">
                <MainHeaderSearchCuration
                  onClick={props.onClose}
                  ContentArray={StoreDiscoverCurationSearch}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
