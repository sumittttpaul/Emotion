'use client';

import { m } from 'framer-motion';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import SignInBackButton from 'components/button/Setup/SignInBackButton';
import { PasswordReset } from 'functions/AuthAlgorithms';
import { SetupHook, userProfileHook } from 'hooks/Hooks.Setup';
import { ToastHook } from 'hooks/Hooks.Toast';
import { useState } from 'react';

export interface SetupLoginForgotPasswordScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
}

function SetupLoginForgotPasswordScreen(
  props: SetupLoginForgotPasswordScreenProps
) {
  const { setScreen, setLoading } = SetupHook();
  const { EmailAddress } = userProfileHook();
  const { setToast } = ToastHook();

  const [SubmitHide, setSubmitHide] = useState(false);

  // Screens
  const BackToPasswordScreen = () => {
    setScreen('login-password');
  };

  const PasswordResetClick = () => {
    if (EmailAddress) {
      PasswordReset({
        EmailAddress: EmailAddress,
        Loading: setLoading,
        Next: () => setSubmitHide(true),
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
        Title: 'Email Address is empty',
        Description:
          'Please provide your email address to get password reset link',
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
        <h6 className="font-normal tracking-wide text-left w-full text-white/75 text-sm">
          An email will be sent to the email address you provided earlier. You
          can use the link in the email to reset your password.
        </h6>
        <div className="w-full flex justify-start">
          <SignInBackButton Label="Back" onClick={BackToPasswordScreen} />
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex">
          {SubmitHide && (
            <SetupSubmitButton
              Disabled={SubmitHide}
              onClick={PasswordResetClick}
            >
              Reset Password
            </SetupSubmitButton>
          )}
        </div>
      </div>
    </m.div>
  );
}

export default SetupLoginForgotPasswordScreen;
