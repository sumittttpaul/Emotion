import React, {
  ChangeEvent,
  KeyboardEvent,
  FC,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import IconPasswordTextFieldDark from '../../../textfield/IconPasswordTextFieldDark';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import Image from 'next/image';
import { SignInWithEmailAndPassword } from '../../../../algorithms/AuthAlgorithms';
import { useLoaderState } from '../../../../provider/LoadingState';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { AuthAnimationType, AuthType } from '../AuthType';
import { m } from 'framer-motion';

export interface LoginPasswordAuthUIProps {
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
 * @function @LoginPasswordAuthUI
 **/

export const LoginPasswordAuthUI: FC<LoginPasswordAuthUIProps> = (props) => {
  // ID
  const PasswordID = 'Password-TextField-Login';

  // State
  const [Password, setPassword] = useState('');
  const [PasswordError, setPasswordError] = useState(false);

  // Loading
  const { Loader, setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => {
    setLoader({ show: value });
  };

  // Change
  const PasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Events
  const PasswordKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ValidatePassword) {
      ValidPassword();
    }
    if (event.key === 'Enter') {
      if (ValidatePassword) {
        PasswordSubmitClick();
      } else {
        InvalidPassword();
      }
    }
  };
  const PasswordBlur = () => {
    if (ValidatePassword) {
      ValidPassword();
    } else {
      setPasswordError(true);
    }
  };

  // Validation
  var passwordExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  var ValidatePassword =
    passwordExpression.test(Password) && Password.length > 7;
  const PasswordSubmitDisabled: boolean =
    Password.length < 8 || !ValidatePassword;

  const ValidPassword = () => {
    setPasswordError(false);
    HideToast();
  };
  const InvalidPassword = () => {
    setPasswordError(true);
    ShowToast('Invalid password', 'Please check your password.', 'Error', true);
  };
  const EmptyPassword = () => {
    setPassword('');
  };

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
  const HideToast = () => {
    props.setToast(false);
  };

  // Screens
  const BackToEmailScreen = () => {
    props.setAuthScreen('login-email');
  };
  const MoveToForgotPassword = () => {
    props.setAuthScreen('login-forgot-password');
  };

  // Submit
  const PasswordSubmitClick = () => {
    if (ValidatePassword) {
      SignInWithEmailAndPassword({
        EmailAddress: props.EmailAddress,
        Password: Password,
        EmptyPasswordTextField: EmptyPassword,
        ShowToast: ShowToast,
        Loading: props.setLoading,
        LoadingScreen: LoadingScreen,
        BackToEmailScreen: BackToEmailScreen,
      });
    } else {
      ShowToast(
        'Incorrect email',
        'Please enter a valid email address.',
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
        <div className="flex justify-center items-center w-full">
          <div className="flex space-x-2 items-center justify-center bg-white/5 py-1 pl-1 pr-3 rounded-full">
            <div className="min-h-[20px] min-w-[20px]">
              <Image
                height={20}
                width={20}
                src="/images/default/user.png"
                className="rounded-full"
                alt=""
              />
            </div>
            <div className="text-white text-[13px] font-[300]">
              {props.EmailAddress}
            </div>
          </div>
        </div>
        <IconPasswordTextFieldDark
          id={PasswordID}
          placeholder="Password"
          icon="/icons/password.svg"
          value={Password}
          onChange={PasswordChange}
          onkeyUp={PasswordKeyUp}
          onBlur={PasswordBlur}
          error={PasswordError}
          readonly={props.Loading || Loader.show}
          valid={!PasswordSubmitDisabled}
        />
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="Forgot password ?"
              onClick={MoveToForgotPassword}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton Label="Back" onClick={BackToEmailScreen} />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex">
          <AuthSubmitButton
            Disabled={PasswordSubmitDisabled}
            onClick={PasswordSubmitClick}
          >
            Login
          </AuthSubmitButton>
        </div>
      </div>
    </m.div>
  );
};
