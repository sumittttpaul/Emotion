import React, { FC } from 'react';
import AuthContainer from '../container/AuthContainer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'

interface IProps {}

/**
 * @author
 * @function @SetupAccountUI
 **/

export const SetupAccountUI: FC<IProps> = (props) => {
  return (
    <AuthContainer>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="w-full max-w-[350px] space-y-6 flex flex-col justify-center items-center"
          key=""
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.25 }}
        >
          <Image
            height={50}
            width={50}
            className="opacity-70"
            src="/agewear.svg"
            alt="logo-svg"
          />
          <h6 className="font-medium text-center text-md">
            Setup your Agewear account
          </h6>
        </motion.div>
      </AnimatePresence>
    </AuthContainer>
  );
};
