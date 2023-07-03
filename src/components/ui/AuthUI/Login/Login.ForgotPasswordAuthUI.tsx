import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { PasswordReset } from '../../../../algorithms/AuthAlgorithms';
import { AuthAnimationType, AuthType } from '../AuthType';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { m } from 'framer-motion';

export interface LoginForgotPasswordAuthUIProps {
  ClassName?: string;
  EmailAddress: string;
  Loading: boolean;
  Toast: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  Animation: AuthAnimationType;
}

/**
 * @author
 * @function @LoginForgotPasswordAuthUI
 **/

export const LoginForgotPasswordAuthUI: FC<LoginForgotPasswordAuthUIProps> = (
  props
) => {
  // State
  const [SubmitHide, setSubmitHide] = useState(false);

  // Toast
  const ShowToast = (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => {
    props.setToastSetting({
      Title: title,
      Description: description,
      Type: type,
    });
    props.setToast(show);
  };

  // Handle
  const handleSubmitHide = () => {
    setSubmitHide(true);
  };

  // Screens
  const BackToPasswordScreen = () => {
    props.setAuthScreen('login-password');
  };

  const PasswordResetClick = () => {
    if (props.EmailAddress) {
      PasswordReset({
        EmailAddress: props.EmailAddress,
        ShowToast: ShowToast,
        Loading: props.setLoading,
        Next: handleSubmitHide,
      });
    } else {
      ShowToast(
        'Email Address is empty',
        'Please provide your email address to get password reset link',
        'Error',
        true
      );
    }
  };

  return (
    <m.div
      className="w-full relative"
      initial={props.Animation.Initial}
      animate={props.Animation.Final}
      transition={props.Animation.Transition}
    >
      <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
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
            <AuthSubmitButton
              Disabled={SubmitHide}
              onClick={PasswordResetClick}
            >
              Reset Password
            </AuthSubmitButton>
          )}
        </div>
      </div>
    </m.div>
  );
};
