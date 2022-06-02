import React, { FC } from 'react';
import AuthContainer from '../container/AuthContainer';
import { motion, AnimatePresence } from 'framer-motion';
import AvatarUI from './AuthComponentUI/SetupAccountComponentUI/AvatarUI/AvatarUI';
import { DatePickerUI } from './AuthComponentUI/SetupAccountComponentUI/DatePickerUI/DatePickerUI';
import { GenderUI } from './AuthComponentUI/SetupAccountComponentUI/GenderUI/GenderUI';
import { AuthHeaderLabel } from '../label/AuthHeaderLabel';
import LargeButtonBlue from '../button/LargeButtonBlue';
import { Link } from '@mui/material';

interface IProps {
  // ------------- Avatar ------------- //
  AvatarDialog: boolean;
  setAvatarDialog: () => void;
  AvatarContainer: string;
  AvatarScreen1: boolean;
  AvatarScreen2: boolean;
  AvatarURL: string;
  AvatarClick: () => void;
  // Show Avatar [ Screen 1 ]
  MoveToSelectAvatar: () => void;
  RemoveClick: () => void;
  ChangeDisabled: boolean;
  RemoveDisabled: boolean;
  UploadLoadingScreen: boolean;
  UploadProgress: string;
  // Select Avatar [ Screen 2 ]
  BackToShowAvatar: () => void;
  MoveToCropAvatar: () => void;
  GetImageURL: (value: string) => void;
  // Crop Avatar [ Screen 3 ]
  GetCropImageURL: (value: string) => void;
  ImageURLToCrop: string;
  BackToSelectAvatar: () => void;
  AvatarSubmit: (value: File) => void;
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
          <AvatarUI
            AvatarDialog={props.AvatarDialog}
            setAvatarDialog={props.setAvatarDialog}
            AvatarContainer={props.AvatarContainer}
            AvatarScreen1={props.AvatarScreen1}
            AvatarScreen2={props.AvatarScreen2}
            AvatarURL={props.AvatarURL}
            AvatarClick={props.AvatarClick}
            MoveToSelectAvatar={props.MoveToSelectAvatar}
            RemoveClick={props.RemoveClick}
            ChangeDisabled={props.ChangeDisabled}
            RemoveDisabled={props.RemoveDisabled}
            UploadLoadingScreen={props.UploadLoadingScreen}
            UploadProgress={props.UploadProgress}
            BackToShowAvatar={props.BackToShowAvatar}
            MoveToCropAvatar={props.MoveToCropAvatar}
            GetImageURL={props.GetImageURL}
            GetCropImageURL={props.GetCropImageURL}
            ImageURLToCrop={props.ImageURLToCrop}
            BackToSelectAvatar={props.BackToSelectAvatar}
            AvatarSubmit={props.AvatarSubmit}
          />
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
          <GenderUI />
          <LargeButtonBlue
            onClick={() => {}}
            Disabled={false}
            content="Continue"
          />
          <div className="flex">
            <h6 className="text-xs font-light text-[rgba(255,255,255,0.75)] flex items-center">
              Will do it later?&#160;
              <Link
                onClick={() => {
                  // Router.push('/');
                }}
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
