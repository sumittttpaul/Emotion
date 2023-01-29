import React, { Dispatch, FC, SetStateAction } from 'react';
import AuthContainer from '../container/AuthContainer';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@mui/material';
import { AuthHeaderLabel } from '../label/AuthHeaderLabel';
import { AvatarUI } from './ComponentUI/SetupAccount/AvatarUI/AvatarUI';
import { DatePickerUI } from './ComponentUI/SetupAccount/DatePickerUI/DatePickerUI';
import { GenderUI } from './ComponentUI/SetupAccount/GenderUI/GenderUI';
import LargeButtonBlue from '../button/LargeButtonBlue';

interface IProps {
  // ------------- Date Of Birth ------------- //
  getDOBValue: (value: string) => void;
  getHandleBoolValue: (value: boolean) => void;
  // ------------- Gender ------------- //
  GenderContent: Array<string>;
  GenderValue?: string;
  GenderValueChange: Dispatch<SetStateAction<any>>;
  // ------------- Handle Button ------------- //
  HandleSubmit: () => void;
  HandleSkip: () => void;
  HandleSubmitDisabled: boolean;
  HandleSubmitLoading: boolean;
}

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
          <AuthHeaderLabel label="Setup your Emotion account" />
          <AvatarUI />
          <DatePickerUI
            theme="Dark"
            getDOBValue={props.getDOBValue}
            getHandleBoolValue={props.getHandleBoolValue}
          />
          <GenderUI
            theme="Dark"
            GenderContent={props.GenderContent}
            GenderValue={props.GenderValue}
            GenderValueChange={props.GenderValueChange}
          />
          <LargeButtonBlue
            onClick={props.HandleSubmit}
            Disabled={props.HandleSubmitDisabled}
            Loading={props.HandleSubmitLoading}
            content="Continue"
          />
          <div className="flex">
            <h6 className="text-xs font-light text-[#ffffffbf] flex items-center">
              Will do it later?&#160;
              <Link
                onClick={props.HandleSkip}
                className="text-white text-xs underline-offset-2"
                component="button"
                underline="always"
              >
                Skip for now
              </Link>
            </h6>
          </div>
        </motion.div>
      </AnimatePresence>
    </AuthContainer>
  );
};
