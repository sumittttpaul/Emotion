import React, {
  FC,
  ChangeEvent,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { YellowBulbHint } from '../../../hint/YellowBulbHint';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import IconPasswordTextFieldDark from '../../../textfield/IconPasswordTextFieldDark';
import { LinkWithEmailAndPassword } from '../../../../algorithms/AuthAlgorithms';
import { AuthAnimationType, AuthType } from '../AuthType';
import { m } from 'framer-motion';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { TooltipProps } from '@mui/material';
import dynamic from 'next/dynamic';

const TooltipDark = dynamic<TooltipProps>(
  () => import('../../../tooltip/TooltipDark').then((x) => x.TooltipDark),
  { ssr: false }
);

export interface RegisterPasswordAuthUIProps {
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
  IsInformation: () => void;
}

/**
 * @author
 * @function @RegisterPasswordAuthUI
 **/

export const RegisterPasswordAuthUI: FC<RegisterPasswordAuthUIProps> = (
  props
) => {
  // ID
  const PasswordID = 'Password-TextField-Login';

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

  // Screens
  const BackToEmailAddressScreen = () => {
    props.setAuthScreen('register-email');
  };

  // Submit
  const PasswordSubmitClick = () => {
    if (ValidatePassword) {
      LinkWithEmailAndPassword({
        EmailAddress: props.EmailAddress,
        Password: Password,
        Loading: props.setLoading,
        ShowToast: ShowToast,
        EmptyPasswordTextField: EmptyPassword,
        BackToEmailScreen: BackToEmailAddressScreen,
        Next: props.IsInformation,
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
            Your password should contain at least 8 or more characters with a
            mix of letters of uppercase and lowercase, numbers & symbols.
          </h6>
        </div>
        <div className="flex justify-start w-full">
          <YellowBulbHint
            Tooltip
            TooltipPlacement="top"
            ToottipTitle="Some security-sensitive actions, such as creating password and link email-password authentication to your account, require that you have recently logged in. If you have not logged in recently, you will be prompted to do so before you can continue."
            Label="Requires recent login / authentication"
          />
        </div>
        <div className="w-full flex justify-start">
          <SignInBackButton Label="Back" onClick={BackToEmailAddressScreen} />
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex">
          <AuthSubmitButton
            Disabled={PasswordSubmitDisabled}
            onClick={PasswordSubmitClick}
          >
            Next
          </AuthSubmitButton>
        </div>
      </div>
    </m.div>
  );
};
