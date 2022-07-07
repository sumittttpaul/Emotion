import { motion, Variants } from 'framer-motion';
import React, { FC } from 'react';

interface IProps {}

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
  return (
    <>
      {/* {open ? ( */}
      <div
        // onClick={props.onClose}
        className="absolute h-screen w-full top-full bg-black backdrop-blur-md opacity-75 left-0"
      />
      {/* ) : ( */}
      {/* <></> */}
      {/* )} */}
      <motion.div
        className="bg-transparent absolute left-0 top-full w-full"
        animate={'open'}
        variants={SliderVariant}
      >
        <motion.ul variants={UlVariants} className="py-5 bg-[#121212]">
          <motion.li variants={LiVariants}>
            <div className="w-full block relative h-[500px] min-h-[10px]" />
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
};
