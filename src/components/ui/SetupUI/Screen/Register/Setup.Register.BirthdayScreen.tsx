'use client';

import { m } from 'framer-motion';
import { useState } from 'react';
import { CalculateAge, CalculateMonthNumber } from 'functions/UIAlgorithms';
import { UserProfileEncrytionKey } from 'functions/security/CryptionKey';
import { EncryptData } from 'functions/security/CryptionSecurity';
import { userProfileHook } from 'hooks/Hooks.UserProfile';
import { ToastHook } from 'hooks/Hooks.Toast';
import SetupSkipAllButton from 'components/button/Setup/RegisterSkipAllButton';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import SignInBackButton from 'components/button/Setup/SignInBackButton';
import SignInNextButton from 'components/button/Setup/SignInNextButton';
import useClientAuth from 'authentication/useClientAuth';
import DatePickerButton from 'components/datepicker/DatePickerButton';
import OperateUserProfile from 'databases/controller/Controller.UserProfile';

export interface SetupRegisterBirthdayScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  setSkipDialog: Dispatch<boolean>;
  setLoading: Dispatch<boolean>;
}

function SetupRegisterBirthdayScreen(props: SetupRegisterBirthdayScreenProps) {
  const { DateOfBirth, setDateOfBirth } = userProfileHook();
  const [SubmitDisabled, setSubmitDisabled] = useState(true);
  const { setToast } = ToastHook();
  const { FirebaseUser } = useClientAuth();

  // Screens
  const BackToPhoto = () => {
    props.setScreen('register-profile-picture');
  };

  // database
  const updateUserData = () => {
    if (FirebaseUser) {
      const _dataDay = DateOfBirth.split('-')[0];
      const _dataMonth = DateOfBirth.split('-')[1];
      const _dataYear = DateOfBirth.split('-')[2];
      const UserDOB = EncryptData(
        UserProfileEncrytionKey(FirebaseUser.uid, 'DateOfBirth'),
        DateOfBirth
      );
      const UserAge = EncryptData(
        UserProfileEncrytionKey(FirebaseUser.uid, 'Age'),
        CalculateAge(
          _dataDay + '-' + CalculateMonthNumber(_dataMonth) + '-' + _dataYear
        ).toString()
      );
      const _data: IUserProfileDataUpdate = {
        '_data.dateOfBirth': UserDOB,
        '_data.age': UserAge,
      };
      OperateUserProfile('UPDATE', { uid: FirebaseUser.uid, update: _data })
        .then(() => {
          props.CheckInfoHandler();
        })
        .catch((error) => {
          if (error instanceof Error) {
            props.setLoading(false);
            setToast({
              Title: error.name,
              Description: error.message,
              Type: 'Error',
              Show: true,
            });
          }
        });
    } else {
      setToast({
        Title: 'Something went wrong',
        Description: 'It seems like user is not exist.',
        Type: 'Error',
        Show: true,
      });
    }
  };

  // Submit
  const SubmitClick = () => {
    props.setLoading(true);
    updateUserData();
  };

  return (
    <m.div
      className={`${props.AnimationDivClassName} w-full relative`}
      initial={props.Animation.Initial}
      animate={props.Animation.Final}
      transition={props.Animation.Transition}
    >
      <div
        className={`${props.ContentClassName} w-full flex flex-col space-y-4`}
      >
        <div className="w-full flex items-start justify-center pt-2">
          <DatePickerButton
            DOB={DateOfBirth}
            getDOB={(value: unknown) => setDateOfBirth(value as string)}
            SubmitDisabled={SubmitDisabled}
            setSubmitDisabled={setSubmitDisabled}
          />
        </div>
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will add later"
              onClick={props.CheckInfoHandler}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton Label="Back" onClick={BackToPhoto} />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex space-x-2">
          <SetupSkipAllButton onClick={() => props.setSkipDialog(true)}>
            Skip all
          </SetupSkipAllButton>
          <SetupSubmitButton Disabled={SubmitDisabled} onClick={SubmitClick}>
            Next
          </SetupSubmitButton>
        </div>
      </div>
    </m.div>
  );
}

export default SetupRegisterBirthdayScreen;
