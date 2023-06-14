import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { PasswordReset } from '../../../../algorithms/AuthAlgorithms';
import { AuthType } from '../AuthType';

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
}

/**
 * @author
 * @function @LoginForgotPasswordAuthUI
 **/

export const LoginForgotPasswordAuthUI: FC<LoginForgotPasswordAuthUIProps> = (
  props
) => {

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

  // Screens
  const BackToPasswordScreen = () => {
    props.setAuthScreen('login-password');
  };

  useEffect(() => {
    if (props.EmailAddress) {
      // PasswordReset({
      //   Email: props.EmailAddress,
      //   ShowToast: ShowToast,
      //   Loading: props.setLoading,
      // });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
      <h6 className="font-normal tracking-wide text-left w-full text-white/75 text-sm">
        An email will be sent to the email address you provided earlier. You can
        use the link in the email to reset your password.
      </h6>
      <div className="w-full flex justify-start">
        <SignInBackButton Label="Back" onClick={BackToPasswordScreen} />
      </div>
    </div>
  );
};
