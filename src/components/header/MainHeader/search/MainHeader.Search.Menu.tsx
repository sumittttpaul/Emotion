import { motion, Variants } from 'framer-motion';
import React, { FC } from 'react';
import {
  StoreDiscoverCurationSearch,
  StoreDiscoverPopularSearch,
} from '../../../../contents/store/discover/Store.Discover.Search';
import { MainHeaderSearchCuration } from './MainHeader.Search.Curation';
import { MainHeaderSearchPopular } from './MainHeader.Search.Popular';

export interface MainHeaderSearchMenuProps {
  SearchMenu: string;
  setSearchMenu: (value: string) => void;
}

const SearchMenuVariant = {
  open: { height: 250, display: 'block' },
  closed: { height: 0, display: 'none' },
};
const UlVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0 },
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

export const MainHeaderSearchMenu: FC<MainHeaderSearchMenuProps> = (props) => {
  return (
    <motion.div
      className="bg-transparent absolute left-0 top-full w-full"
      animate={props.SearchMenu}
      variants={SearchMenuVariant}
    >
      <div className="w-[664px] bg-[#0f0f0f] flex rounded-b-3xl">
        <motion.div
          variants={UlVariants}
          className="space-y-5 pb-5 flex flex-col w-full h-full mx-auto"
        >
          <div className="w-full flex flex-col sm:flex-row sm:justify-between overflow-x-hidden">
            <div className="w-full space-y-5 flex flex-col overflow-y-hidden">
              <motion.div variants={LiVariants} className="w-full flex">
                <MainHeaderSearchPopular
                  onClick={() => props.setSearchMenu('closed')}
                  ContentArray={StoreDiscoverPopularSearch}
                />
              </motion.div>
              <motion.div variants={LiVariants} className="w-full flex">
                <MainHeaderSearchCuration
                  onClick={() => props.setSearchMenu('closed')}
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
