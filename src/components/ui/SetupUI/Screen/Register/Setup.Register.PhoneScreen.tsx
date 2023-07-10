'use client';

import { m } from 'framer-motion';
import { useState } from 'react';
import { ToastHook } from 'hooks/Hooks.Toast';
import { SetupHook } from 'hooks/Hooks.Setup';
import { LinkWithPhoneNumber } from 'functions/AuthAlgorithms';
import { SignInNextButton } from 'components/button/Setup/SignInNextButton';
import { SetupSubmitButton } from 'components/button/Setup/SetupSubmitButton';
import { SetupSkipAllButton } from 'components/button/Setup/RegisterSkipAllButton';
import { SignInBackButton } from 'components/button/Setup/SignInBackButton';
import { UserProfileEncrytionKey } from 'functions/security/CryptionKey';
import { EncryptData } from 'functions/security/CryptionSecurity';
import useClientAuth from 'authentication/useClientAuth';
import SetupIconNumberTextField from 'components/ui/SetupUI/Input/Setup.IconNumberTextField';
import OperateUserProfile from 'databases/controller/Controller.UserProfile';

export interface SetupRegisterPhoneScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
}

function SetupRegisterPhoneScreen(props: SetupRegisterPhoneScreenProps) {
  const { FirebaseUser } = useClientAuth();
  const [PhoneNumber, setPhoneNumber] = useState('');
  const {
    setLoading,
    ResetCaptcha,
    setResetCaptcha,
    setScreen,
    setSkipDialog,
  } = SetupHook();
  const { setToast } = ToastHook();

  const EmptyPhoneNumber = () => {
    setPhoneNumber('');
  };

  // Validation
  const ValidatePhoneNumber =
    PhoneNumber.length === 10 && PhoneNumber.length > 9;

  // Screens
  const MoveToOTPScreen = () => {
    setScreen('register-otp');
  };
  const BackToName = () => {
    setScreen('register-name');
  };

  // databases
  const Updatedatabase = () => {
    if (FirebaseUser) {
      const UserPhoneNumber = EncryptData(
        UserProfileEncrytionKey(FirebaseUser.uid, 'PhoneNumber'),
        PhoneNumber.toString()
      );
      const _data: IUserProfileDataUpdate = {
        '_data.phoneNumber': UserPhoneNumber,
      };
      OperateUserProfile('UPDATE', { uid: FirebaseUser.uid, update: _data })
        .then(() => {
          setLoading(false);
          MoveToOTPScreen();
        })
        .catch((error) => {
          if (error instanceof Error) {
            setLoading(false);
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
  const PhoneSubmitClick = () => {
    if (ValidatePhoneNumber) {
      LinkWithPhoneNumber({
        PhoneNumber: parseInt(PhoneNumber),
        EmptyPhoneNumber: EmptyPhoneNumber,
        Loading: setLoading,
        ResetCaptcha: ResetCaptcha,
        setResetCaptcha: setResetCaptcha,
        Updatedatabase: Updatedatabase,
        ShowToast: (Title, Description, Type, Show) =>
          setToast({
            Title: Title,
            Description: Description,
            Type: Type,
            Show: Show,
          }),
      });
    } else {
      setToast({
        Title: 'Incorrect phone number',
        Description: 'Please enter a valid phone number.',
        Type: 'Error',
        Show: true,
      });
    }
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
        <SetupIconNumberTextField
          Value={PhoneNumber}
          setValue={setPhoneNumber}
          HandleSubmit={PhoneSubmitClick}
          ValidateValue={ValidatePhoneNumber}
        />
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will add later"
              onClick={props.CheckInfoHandler}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton Label="Back" onClick={BackToName} />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex space-x-2">
          <SetupSkipAllButton onClick={() => setSkipDialog(true)}>
            Skip all
          </SetupSkipAllButton>
          <SetupSubmitButton
            Disabled={!ValidatePhoneNumber}
            onClick={PhoneSubmitClick}
          >
            Next
          </SetupSubmitButton>
        </div>
      </div>
    </m.div>
  );
}

export default SetupRegisterPhoneScreen;