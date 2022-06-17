import React, { Dispatch, FC, SetStateAction } from 'react';
import AuthContainer from '../container/AuthContainer';
import { motion, AnimatePresence } from 'framer-motion';
import AvatarUI from './AuthComponentUI/SetupAccountComponentUI/AvatarUI/AvatarUI';
import { DatePickerUI } from './AuthComponentUI/SetupAccountComponentUI/DatePickerUI/DatePickerUI';
import { GenderUI } from './AuthComponentUI/SetupAccountComponentUI/GenderUI/GenderUI';
import { AuthHeaderLabel } from '../label/AuthHeaderLabel';
import LargeButtonBlue from '../button/LargeButtonBlue';
import { Link } from '@mui/material';

interface IProps {
  // ------------- Date Of Birth ------------- //
  DOBShow: boolean;
  setDOBShow: () => void;
  DOBScreen1: boolean;
  DOBScreen2: boolean;
  DOBDay: number;
  DOBMonth: number;
  DOBYear: number;
  DOBDayValue: string;
  DOBMonthValue: string;
  DOBYearValue: string;
  GetDOBDay: (value: number) => void;
  GetDOBMonth: (value: number) => void;
  GetDOBYear: (value: number) => void;
  DOBCancel: () => void;
  DOBSubmit: () => void;
  DOBClick: () => void;
  DOBLabel: string;
  DOBSubmitDisabled: boolean;
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
          <AuthHeaderLabel label="Setup your Agewear account" />
          <AvatarUI />
          <DatePickerUI
            DOBShow={props.DOBShow}
            setDOBShow={props.setDOBShow}
            DOBScreen1={props.DOBScreen1}
            DOBScreen2={props.DOBScreen2}
            DOBDay={props.DOBDay}
            DOBMonth={props.DOBMonth}
            DOBYear={props.DOBYear}
            DOBDayValue={props.DOBDayValue}
            DOBMonthValue={props.DOBMonthValue}
            DOBYearValue={props.DOBYearValue}
            GetDOBDay={props.GetDOBDay}
            GetDOBMonth={props.GetDOBMonth}
            GetDOBYear={props.GetDOBYear}
            DOBCancel={props.DOBCancel}
            DOBSubmit={props.DOBSubmit}
            DOBClick={props.DOBClick}
            DOBLabel={props.DOBLabel}
            DOBSubmitDisabled={props.DOBSubmitDisabled}
          />
          <GenderUI
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
            <h6 className="text-xs font-light text-[rgba(255,255,255,0.75)] flex items-center">
              Will do it later?&#160;
              <Link
                onClick={props.HandleSkip}
                className="text-white text-xs"
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
