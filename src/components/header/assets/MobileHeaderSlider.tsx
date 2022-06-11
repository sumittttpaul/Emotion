import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface IProps {
  Cycle: boolean;
  Hvalue: number;
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

/**
 * @author
 * @function @MobileHeaderSlider
 **/

export const MobileHeaderSlider: FC<IProps> = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {props.Cycle && (
        <motion.aside
          id="motionSlide"
          className="sm:hidden overflow-none w-full bg-[#2a2a2a]"
          initial={{ height: 0 }}
          animate={{
            height: `calc(calc(${props.Hvalue * 0.01}px * 100) - 49px)`,
            transition: { duration: 0.3, damping: 0 },
          }}
          exit={{
            height: 0,
            transition: { duration: 0.4, damping: 0 },
          }}
        >
          <motion.div
            className="w-full overflow-none"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            {/* Add content here Content */}
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
