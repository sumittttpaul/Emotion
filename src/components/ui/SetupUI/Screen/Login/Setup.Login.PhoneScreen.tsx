'use client';

import { m } from 'framer-motion';
import { useState } from 'react';
import { ToastHook } from 'hooks/Hooks.Toast';
import { SetupHook } from 'hooks/Hooks.Setup';
import { SignInWithPhoneNumber } from 'functions/AuthAlgorithms';
import SetupFooter from 'components/footer/SetupFooter';
import YellowBulbHint from 'components/hint/YellowBulbHint';
import SignInNextButton from 'components/button/Setup/SignInNextButton';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import SetupIconNumberTextField from 'components/ui/SetupUI/Input/Setup.IconNumberTextField';

export interface SetupLoginPhoneScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
}

function SetupLoginPhoneScreen(props: SetupLoginPhoneScreenProps) {
  const [PhoneNumber, setPhoneNumber] = useState('');
  const { ResetCaptcha, setLoading, setResetCaptcha, setScreen } = SetupHook();
  const { setToast } = ToastHook();

  const EmptyPhoneNumber = () => {
    setPhoneNumber('');
  };

  // Validation
  const ValidatePhoneNumber =
    PhoneNumber.length === 10 && PhoneNumber.length > 9;

  // Screens
  const MoveToOTPScreen = () => {
    setScreen('login-otp');
  };
  const MoveToSignInWithEmailAddress = () => {
    setScreen('login-email');
  };
  const MoveToOtherSignInOptions = () => {
    setScreen('login-others');
  };

  // Submit
  const PhoneSubmitClick = () => {
    if (ValidatePhoneNumber) {
      SignInWithPhoneNumber({
        PhoneNumber: parseInt(PhoneNumber),
        EmptyPhoneNumber: EmptyPhoneNumber,
        Loading: setLoading,
        ResetCaptcha: ResetCaptcha,
        setResetCaptcha: setResetCaptcha,
        MoveToOTPScreen: MoveToOTPScreen,
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
              Label="Sign in with email address"
              onClick={MoveToSignInWithEmailAddress}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="Sign-in options"
              onClick={MoveToOtherSignInOptions}
            />
          </div>
        </div>
        <div className="flex justify-start">
          <YellowBulbHint
            Tooltip
            TooltipPlacement="top"
            ToottipTitle="When creating an Emotion account for the first time, new users are often presented with two primary options to initiate the registration process: they can either continue by providing their phone number or explore alternative sign-in methods, such as google account, facebook account, apple account or microsoft account."
            Label="New user continue with phone number or sign-in options."
          />
        </div>
        <SetupFooter ButtonLabel="Send OTP" />
      </div>
      <div className="flex w-full justify-end">
        <SetupSubmitButton
          Disabled={!ValidatePhoneNumber}
          onClick={PhoneSubmitClick}
        >
          Send OTP
        </SetupSubmitButton>
      </div>
    </m.div>
  );
}

export default SetupLoginPhoneScreen;
