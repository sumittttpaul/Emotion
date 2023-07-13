'use client';

import { m } from 'framer-motion';
import { CircularProgress } from '@mui/material';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import SignInNextButton from 'components/button/Setup/SignInNextButton';
import GreenSuccessHint from 'components/hint/GreenSuccessHint';
import { VerifyEmailAddress } from 'functions/AuthAlgorithms';
import { SetupHook, userProfileHook } from 'hooks/Hooks.Setup';
import { ToastHook } from 'hooks/Hooks.Toast';
import { useState, useEffect } from 'react';
import { FirebaseAuth } from 'authentication/clientApp';

export interface SetupRegisterVerifyEmailScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
}

function SetupRegisterVerifyEmailScreen(
  props: SetupRegisterVerifyEmailScreenProps
) {
  const { isEmailVerified, setIsEmailVerified } = userProfileHook();
  const [SubmitDisabled, setSubmitDisabled] = useState(false);
  const { setLoading } = SetupHook();
  const { setToast } = ToastHook();

  // Handle
  const handleSubmitDisabled = () => {
    setSubmitDisabled(true);
  };

  // Submit
  const VerifyEmailClick = () => {
    setLoading(true);
    if (!isEmailVerified) {
      VerifyEmailAddress({
        Loading: setLoading,
        Next: handleSubmitDisabled,
        ShowToast: (Title, Description, Type, Show) =>
          setToast({
            Title: Title,
            Description: Description,
            Type: Type,
            Show: Show,
          }),
      });
    } else {
      props.CheckInfoHandler();
    }
  };

  useEffect(() => {
    if (!FirebaseAuth) return;
    return FirebaseAuth.onIdTokenChanged(async (user) => {
      if (!user) return;
      if (user.emailVerified) setIsEmailVerified(true);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
        {isEmailVerified ? (
          <GreenSuccessHint Label="Your email address has been verified successfully." />
        ) : (
          <>
            <h6 className="font-normal  tracking-wide text-left w-full text-white/75 text-sm">
              To verify your email address, click Verify Email. A verification
              email will be sent to the email address you provided. Click the
              link in the email to verify your address.
            </h6>
            <div className="w-full flex justify-start">
              <SignInNextButton
                Label="I will verify later"
                onClick={props.CheckInfoHandler}
              />
            </div>
          </>
        )}
      </div>
      <div className="flex w-full justify-end">
        <div className="flex">
          <CustomSubmitButton
            Loading={SubmitDisabled}
            Disabled={SubmitDisabled}
            onClick={VerifyEmailClick}
          >
            {isEmailVerified ? 'Next' : 'Verify Email'}
          </CustomSubmitButton>
        </div>
      </div>
    </m.div>
  );
}

interface CustomSubmitButtonProps {
  Disabled: boolean;
  onClick: VoidType;
  Loading: boolean;
  children: React.ReactNode;
}

function CustomSubmitButton(props: CustomSubmitButtonProps) {
  return (
    <SetupSubmitButton Disabled={props.Disabled} onClick={props.onClick}>
      {props.children}
      {props.Loading && (
        <div className="absolute w-full h-full rounded-lg flex items-center justify-center bg-[#104A82] text-white cursor-default">
          <CircularProgress className="text-white" size={20} />
        </div>
      )}
    </SetupSubmitButton>
  );
}

export default SetupRegisterVerifyEmailScreen;
