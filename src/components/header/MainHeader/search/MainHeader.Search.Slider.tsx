import { motion, Variants } from 'framer-motion';
import dynamic from 'next/dynamic';
import React, { FC, useEffect, useState } from 'react';
import useScreenheight from '../../../../algorithms/ScreenHeightDetection';
import {
  StoreDiscoverCurationSearch,
  StoreDiscoverExploreSearch,
  StoreDiscoverPopularSearch,
} from '../../../../contents/store/discover/Store.Discover.Search';
import { MainHeaderSearchCurationProps } from './MainHeader.Search.Curation';
import { MainHeaderSearchPopularProps } from './MainHeader.Search.Popular';
import { MainHeaderSearchExploreProps } from './MainHeader.Search.QuickLink';
import { MainHeaderSearchExit } from './MainHeader.Search.Exit';

const MainHeaderSearchExplore = dynamic<MainHeaderSearchExploreProps>(
  () =>
    import('./MainHeader.Search.QuickLink').then(
      (x) => x.MainHeaderSearchExplore
    ),
  { ssr: false }
);
const MainHeaderSearchPopular = dynamic<MainHeaderSearchPopularProps>(
  () =>
    import('./MainHeader.Search.Popular').then(
      (x) => x.MainHeaderSearchPopular
    ),
  { ssr: false }
);
const MainHeaderSearchCuration = dynamic<MainHeaderSearchCurationProps>(
  () =>
    import('./MainHeader.Search.Curation').then(
      (x) => x.MainHeaderSearchCuration
    ),
  { ssr: false }
);

interface IProps {
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

export const MainHeaderSearchSlider: FC<IProps> = (props) => {
  const [Slider, setSlider] = useState('closed');
  const { LargeHeight, MediumHeight, SmallHeight } = useScreenheight();

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
        <div className="w-full bg-[#121212] flex">
          <motion.div
            variants={UlVariants}
            className="space-y-5 pt-3 flex flex-col w-full h-full max-w-[1440px] mx-auto"
          >
            <div className="w-full flex flex-col sm:flex-row sm:justify-between overflow-x-hidden">
              <div
                className={`${
                  LargeHeight ? 'mt-5 sm:mt-0' : ''
                } order-2 sm:order-1 w-full sm:w-[50%] flex overflow-y-hidden`}
              >
                {LargeHeight && (
                  <motion.div variants={LiVariants} className="w-full flex">
                    <MainHeaderSearchExplore
                      ContentArray={StoreDiscoverExploreSearch}
                    />
                  </motion.div>
                )}
              </div>
              <div className="order-1 sm:order-2 w-full sm:w-[50%] space-y-5 flex flex-col overflow-y-hidden">
                {SmallHeight && (
                  <motion.div variants={LiVariants} className="w-full flex">
                    <MainHeaderSearchPopular
                      ContentArray={StoreDiscoverPopularSearch}
                    />
                  </motion.div>
                )}
                {MediumHeight && (
                  <motion.div variants={LiVariants} className="w-full flex">
                    <MainHeaderSearchCuration
                      ContentArray={StoreDiscoverCurationSearch}
                    />
                  </motion.div>
                )}
              </div>
            </div>
            <motion.div
              variants={LiVariants}
              className="w-full flex justify-center pb-5 bg-gradient-to-t from-[#121212] sticky-bottom"
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
