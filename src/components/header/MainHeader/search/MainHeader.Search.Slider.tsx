import { motion, Variants } from 'framer-motion';
import React, { FC, useEffect, useRef, useState } from 'react';
import {
  StoreDiscoverCurationSearch,
  StoreDiscoverPopularSearch,
} from '../../../../contents/store/discover/Store.Discover.Search';
import { MainHeaderSearchCuration } from './MainHeader.Search.Curation';
import { MainHeaderSearchExit } from './MainHeader.Search.Exit';
import { MainHeaderSearchPopular } from './MainHeader.Search.Popular';

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
          <motion.ul
            variants={UlVariants}
            className="space-y-5 pt-3 pb-5 w-full max-w-[1440px] mx-auto overflow-y-auto"
          >
            <motion.li variants={LiVariants}>
              <MainHeaderSearchPopular
                ContentArray={StoreDiscoverPopularSearch}
              />
            </motion.li>
            <motion.li variants={LiVariants}>
              <MainHeaderSearchCuration
                ContentArray={StoreDiscoverCurationSearch}
              />
            </motion.li>
            <motion.li
              variants={LiVariants}
              className="w-full flex justify-center"
            >
              <MainHeaderSearchExit
                onClick={() => setTimeout(() => props.onClose(), 100)}
              />
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </>
  );
};
