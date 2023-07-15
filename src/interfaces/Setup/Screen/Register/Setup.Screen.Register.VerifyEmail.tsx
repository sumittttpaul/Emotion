import { m } from 'framer-motion';
import { CircularProgress } from '@mui/material';
import { VerifyEmailAddress } from 'functions/AuthAlgorithms';
import { userProfileHook } from 'hooks/global/Hooks.UserProfile';
import { ToastHook } from 'hooks/global/Hooks.Toast';
import { useState, useEffect } from 'react';
import { FirebaseAuth } from 'authentication/clientApp';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import SignInNextButton from 'components/button/Setup/SignInNextButton';
import GreenSuccessHint from 'components/hint/GreenSuccessHint';

function SetupRegisterVerifyEmailScreen(
  props: SetupRegisterVerifyEmailScreenProps,
) {
  const { isEmailVerified, setIsEmailVerified } = userProfileHook();
  const [SubmitDisabled, setSubmitDisabled] = useState(false);
  const { setToast } = ToastHook();

  // Handle
  const handleSubmitDisabled = () => {
    setSubmitDisabled(true);
  };

  // Submit
  const VerifyEmailClick = () => {
    props.setLoading(true);
    if (!isEmailVerified) {
      VerifyEmailAddress({
        Loading: props.setLoading,
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
      className={`${props.ParentDivClassName} relative w-full`}
      initial={props.Animation.Initial}
      animate={props.Animation.Final}
      transition={props.Animation.Transition}
    >
      <div
        className={`${props.ContentClassName} flex w-full flex-col space-y-4`}
      >
        {isEmailVerified ? (
          <GreenSuccessHint Label="Your email address has been verified successfully." />
        ) : (
          <>
            <p className="w-full  text-left text-sm font-normal tracking-wide text-white/75">
              To verify your email address, click Verify Email. A verification
              email will be sent to the email address you provided. Click the
              link in the email to verify your address.
            </p>
            <div className="flex w-full justify-start">
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
        <div className="absolute flex h-full w-full cursor-default items-center justify-center rounded-lg bg-[#104A82] text-white">
          <CircularProgress className="text-white" size={20} />
        </div>
      )}
    </SetupSubmitButton>
  );
}

export default SetupRegisterVerifyEmailScreen;
