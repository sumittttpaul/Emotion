import React, { FC } from 'react';
import AuthContainer from '../container/AuthContainer';
import { motion, AnimatePresence } from 'framer-motion';
import AvatarUI from './AuthComponentUI/SetupAccountComponentUI/AvatarUI/AvatarUI';
import { DatePickerUI } from './AuthComponentUI/SetupAccountComponentUI/DatePickerUI/DatePickerUI';
import { GenderUI } from './AuthComponentUI/SetupAccountComponentUI/GenderUI/GenderUI';
import { AuthHeaderLabel } from '../label/AuthHeaderLabel';

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
          <AuthHeaderLabel label='Setup your Agewear account'/>
          <AvatarUI/>
          <DatePickerUI/>
          <GenderUI/>
        </motion.div>
      </AnimatePresence>
    </AuthContainer>
  );
};
