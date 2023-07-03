import React, {
  ChangeEvent,
  Dispatch,
  FC,
  KeyboardEvent,
  SetStateAction,
  useState,
} from 'react';
import IconNumberTextFieldDark from '../../../textfield/IconNumberTextFieldDark';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { YellowBulbHint } from '../../../hint/YellowBulbHint';
import { SignInWithPhoneNumber } from '../../../../algorithms/AuthAlgorithms';
import { InputNumberOnly } from '../../../../algorithms/UIAlgorithms';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { AuthFooter } from '../../../footer/AuthFooter';
import { AuthAnimationType, AuthType } from '../AuthType';
import { m } from 'framer-motion';

export interface LoginPhoneAuthUIProps {
  ClassName?: string;
  Loading: boolean;
  Toast: boolean;
  PhoneNumber: string;
  ResetCaptcha: boolean;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  setResetCaptcha: Dispatch<SetStateAction<boolean>>;
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
 * @function @LoginPhoneAuthUI
 **/

export const LoginPhoneAuthUI: FC<LoginPhoneAuthUIProps> = (props) => {
  // ID
  const PhoneNumberID = 'PhoneNumber-TextField-Login';

  // State
  const [PhoneNumberError, setPhoneNumberError] = useState(false);

  // Change
  const PhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value.slice(-10);
    event.target.maxLength = 10;
    props.setPhoneNumber(event.target.value);
  };
  const EmptyPhoneNumber = () => {
    props.setPhoneNumber('');
  };

  // Events
  const PhoneKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ValidatePhoneNumber) {
      ValidPhoneNumber();
    }
    if (event.key === 'Enter') {
      if (ValidatePhoneNumber) {
        PhoneSubmitClick();
      } else {
        InvalidPhoneNumber();
      }
    }
  };
  const PhoneNumberKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Backspace') InputNumberOnly(event);
  };
  const PhoneNumberBlur = () => {
    if (ValidatePhoneNumber) {
      ValidPhoneNumber();
    } else {
      setPhoneNumberError(true);
    }
  };

  // Validation
  var ValidatePhoneNumber = props.PhoneNumber.length == 10;
  const PhoneSubmitDisabled: boolean =
    props.PhoneNumber.length < 10 || !ValidatePhoneNumber;

  const ValidPhoneNumber = () => {
    setPhoneNumberError(false);
    HideToast();
  };
  const InvalidPhoneNumber = () => {
    setPhoneNumberError(true);
    ShowToast(
      'Invalid phone number',
      'Please check your phone number.',
      'Error',
      true
    );
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
  const MoveToOTPScreen = () => {
    props.setAuthScreen('login-otp');
  };
  const MoveToSignInWithEmailAddress = () => {
    props.setAuthScreen('login-email');
  };
  const MoveToOtherSignInOptions = () => {
    props.setAuthScreen('login-others');
  };

  // Submit
  const PhoneSubmitClick = () => {
    if (ValidatePhoneNumber) {
      SignInWithPhoneNumber({
        PhoneNumber: parseInt(props.PhoneNumber),
        EmptyPhoneNumber: EmptyPhoneNumber,
        Loading: props.setLoading,
        ShowToast: ShowToast,
        ResetCaptcha: props.ResetCaptcha,
        setResetCaptcha: props.setResetCaptcha,
        MoveToOTPScreen: MoveToOTPScreen,
      });
    } else {
      ShowToast(
        'Incorrect phone number',
        'Please enter a valid phone number.',
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
        <IconNumberTextFieldDark
          id={PhoneNumberID}
          placeholder="Phone Number"
          icon="/icons/phone.svg"
          type="tel"
          dataPhonecode="+91"
          value={props.PhoneNumber.slice(-10)}
          onChange={PhoneNumberChange}
          onkeyDown={PhoneNumberKeyDown}
          onkeyUp={PhoneKeyUp}
          onBlur={PhoneNumberBlur}
          error={PhoneNumberError}
          readonly={props.Loading}
          valid={!PhoneSubmitDisabled}
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
        <AuthFooter ButtonLabel="Send OTP" />
      </div>
      <div className="flex w-full justify-end">
        <div className="flex">
          <AuthSubmitButton
            Disabled={PhoneSubmitDisabled}
            onClick={PhoneSubmitClick}
          >
            Send OTP
          </AuthSubmitButton>
        </div>
      </div>
    </m.div>
  );
};
