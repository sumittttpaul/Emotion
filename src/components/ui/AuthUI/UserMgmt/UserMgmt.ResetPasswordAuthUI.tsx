import React, {
  ChangeEvent,
  KeyboardEvent,
  FC,
  Dispatch,
  SetStateAction,
  useState,
  Fragment,
} from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';
import IconPasswordTextFieldDark from '../../../textfield/IconPasswordTextFieldDark';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { TooltipDark } from '../../../tooltip/TooltipDark';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { AuthAnimationType } from '../AuthType';
import { AuthContentHeader } from '../../../label/AuthContentHeader';
import { AuthHeaderDescription } from '../../../label/AuthHeaderDescription';
import { AuthHeaderLabel } from '../../../label/AuthHeaderLabel';
import { ConfirmPasswordReset } from '../../../../algorithms/AuthAlgorithms';
import { useLoaderState } from '../../../../provider/LoadingState';
import { Home_Link, Setup_Link } from '../../../../routerLinks/RouterLinks';
import router from 'next/router';

export interface UserMgmtResetPasswordAuthUIProps {
  ContainerClassName: string;
  ContentClassName: string;
  oobCode: string | string[] | undefined;
  Animation: AuthAnimationType;
  Loading: boolean;
  Toast: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
}

/**
 * @author
 * @function @UserMgmtResetPasswordAuthUI
 **/

export const UserMgmtResetPasswordAuthUI: FC<
  UserMgmtResetPasswordAuthUIProps
> = (props) => {
  // ID
  const PasswordID = 'Reset-Password-TextField-Login';

  // State
  const [Password, setPassword] = useState('');
  const [PasswordError, setPasswordError] = useState(false);

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

  // Loading
  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => setLoader({ show: value });

  // Screen
  const MoveToHome = () => {
    LoadingScreen(true);
    router.push(Home_Link);
  };
  const MoveToSetup = () => {
    LoadingScreen(true);
    router.push(Setup_Link);
  };

  // Submit
  const PasswordSubmitClick = () => {
    if (ValidatePassword) {
      if (props.oobCode) {
        ConfirmPasswordReset({
          oobCode: props.oobCode.toString(),
          Password: Password,
          EmptyPassword: EmptyPassword,
          Loading: props.setLoading,
          ShowToast: ShowToast,
          Next: MoveToHome,
        });
      } else {
        ShowToast(
          'Incorrect action code',
          'Action code may be undefined or emplty.',
          'Error',
          true
        );
      }
    } else {
      ShowToast(
        'Incorrect Password',
        'Please enter a valid Password.',
        'Error',
        true
      );
    }
  };

  return (
    <Fragment>
      <div className="p-14 ml-14 relative hidden md:flex w-full h-full justify-center items-center">
        <Image
          height={370}
          width={370}
          src="/vectors/login-register-otp-password.svg"
          alt="reset-password"
          className="text-white text-xs"
        />
      </div>
      <div className="md:p-9 space-y-5 relative w-full md:min-w-[400px] md-1000:min-w-[500px] flex flex-col items-center justify-center overflow-hidden">
        <AuthHeaderLabel ClassName="px-5 pt-5">
          Create a super memorable password
        </AuthHeaderLabel>
        <AuthHeaderDescription ClassName="px-5">
          Choose a password that&apos;s as unique as you are, but make sure
          it&apos;s a secret only you can unlock.
        </AuthHeaderDescription>
        <AuthContentHeader ClassName="px-5">Reset Password</AuthContentHeader>
        <m.div
          initial={props.Animation.Initial}
          animate={props.Animation.Final}
          transition={props.Animation.Transition}
          className={`${props.ContainerClassName} px-5 w-full relative overflow-hidden`}
        >
          <div
            className={`${props.ContentClassName} w-full flex flex-col space-y-4`}
          >
            <IconPasswordTextFieldDark
              id={PasswordID}
              placeholder="Password"
              icon="/icons/password.svg"
              value={Password}
              onChange={PasswordChange}
              onkeyUp={PasswordKeyUp}
              onBlur={PasswordBlur}
              error={PasswordError}
              readonly={props.Loading}
              valid={!PasswordSubmitDisabled}
            />
            <div className="opacity-75 flex space-x-2 w-full">
              <TooltipDark
                arrow
                placement="top"
                title="Use a variety of characters, including uppercase and lowercase letters, numbers, and symbols. Make your password at least 8 characters long. Avoid using common words or phrases. Don't use personal information that can be easily guessed, such as your name, birthday, or address. Don't use the same password for multiple accounts."
              >
                <InformationCircleIcon className="h-5 text-white" />
              </TooltipDark>
              <h6 className="font-normal text-left w-full text-white text-sm">
                Your password should contain at least 8 or more characters with
                a mix of letters of uppercase and lowercase, numbers & symbols.
              </h6>
            </div>
            <div className="w-full flex justify-start">
              <SignInBackButton Label="Back" onClick={MoveToSetup} />
            </div>
          </div>
          <div className="flex w-full justify-end">
            <AuthSubmitButton
              Disabled={PasswordSubmitDisabled}
              onClick={PasswordSubmitClick}
            >
              Update Password
            </AuthSubmitButton>
          </div>
        </m.div>
      </div>
    </Fragment>
  );
};
