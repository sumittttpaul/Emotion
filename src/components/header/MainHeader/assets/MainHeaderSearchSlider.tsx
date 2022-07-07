import { XIcon } from '@heroicons/react/outline';
import { Button, Tooltip } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { StoreDiscoverPopularSearch } from '../../../../contents/store/discover/Store.Discover.Search';

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
        <motion.ul variants={UlVariants} className="space-y-5 pt-3 pb-5 bg-[#121212] w-full">
          <motion.li variants={LiVariants}>
            <div className="flex flex-col w-full px-5 space-y-3.5">
              <h6 className="font-[400] text-sm text-white w-full text-left">
                Popular Searches
              </h6>
              <ul className="flex flex-wrap relative w-full h-auto justify-start">
                {StoreDiscoverPopularSearch.map((value, index) => (
                  <li key={index}>
                    <Button
                      disableFocusRipple
                      sx={{
                        '.MuiTouchRipple-child': {
                          backgroundColor: 'rgba(255, 255, 255, 0.5) !important',
                        },
                      }}
                      className="text-xs font-[300] tracking-[0.7px] border m-1 py-2 px-3.5 border-solid border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 ease-out rounded-full button-text-lower text-white bg-transparent hover:bg-transparent"
                    >
                      {value.Label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
          <motion.li
            variants={LiVariants}
            className="w-full flex justify-center"
          >
            <motion.button
              onClick={props.onClose}
              whileTap={{ scale: 0.9 }}
              className="bg-white bg-opacity-10 pt-1 px-8 rounded-md"
            >
              <Image
                height={22.5}
                width={22.5}
                className="block overflow-hidden opacity-75"
                src="/icons/x-white.svg"
                alt=""
              />
            </motion.button>
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
};
