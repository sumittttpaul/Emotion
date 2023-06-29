import React, {
  ChangeEvent,
  Dispatch,
  FC,
  KeyboardEvent,
  SetStateAction,
  useState,
} from 'react';
import IconTextFieldDark from '../../../textfield/IconTextFieldDark';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { YellowBulbHint } from '../../../hint/YellowBulbHint';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { AuthFooter } from '../../../footer/AuthFooter';
import { AuthAnimationType, AuthType } from '../AuthType';
import { m } from 'framer-motion';

export interface LoginEmailAuthUIProps {
  ClassName?: string;
  Loading: boolean;
  Toast: boolean;
  EmailAddress: string;
  setEmailAddress: Dispatch<SetStateAction<string>>;
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
 * @function @LoginEmailAuthUI
 **/

export const LoginEmailAuthUI: FC<LoginEmailAuthUIProps> = (props) => {
  // ID
  const EmailID = 'EmailAddress-TextField-Login';

  // State
  const [EmailError, setEmailError] = useState(false);

  // Change
  const EmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setEmailAddress(event.target.value);
  };

  // Events
  const EmailKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ValidateEmail) {
      ValidEmail();
    }
    if (event.key === 'Enter') {
      if (ValidateEmail) {
        EmailSubmitClick();
      } else {
        InvalidEmail();
      }
    }
  };
  const EmailBlur = () => {
    if (ValidateEmail) {
      ValidEmail();
    } else {
      setEmailError(true);
    }
  };

  // Validation
  var emailExpression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var ValidateEmail = props.EmailAddress.toLowerCase().match(emailExpression);
  const EmailSubmitDisabled: boolean =
    props.EmailAddress.length < 1 || !ValidateEmail;

  const ValidEmail = () => {
    setEmailError(false);
    HideToast();
  };
  const InvalidEmail = () => {
    setEmailError(true);
    ShowToast(
      'Invalid email',
      'Please check your email address.',
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
  const MoveToPasswordScreen = () => {
    props.setAuthScreen('login-password');
  };
  const BackToSignInWithPhoneNumber = () => {
    props.setAuthScreen('login-phone');
  };
  const MoveToOtherSignInOptions = () => {
    props.setAuthScreen('login-others');
  };

  // Submit
  const EmailSubmitClick = () => {
    if (ValidateEmail) {
      MoveToPasswordScreen();
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
        <IconTextFieldDark
          id={EmailID}
          placeholder="Email Address"
          icon="/icons/email.svg"
          type="email"
          value={props.EmailAddress}
          onChange={EmailChange}
          onkeyUp={EmailKeyUp}
          onBlur={EmailBlur}
          error={EmailError}
          readonly={props.Loading}
          valid={!EmailSubmitDisabled}
        />
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="Sign in with Phone number"
              onClick={BackToSignInWithPhoneNumber}
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
          <YellowBulbHint Label="Sign-in with email address only works for existing user." />
        </div>
        <AuthFooter ButtonLabel="Next" />
      </div>
      <div className="flex w-full justify-end">
        <div className="flex">
          <AuthSubmitButton
            Disabled={EmailSubmitDisabled}
            onClick={EmailSubmitClick}
          >
            Next
          </AuthSubmitButton>
        </div>
      </div>
    </m.div>
  );
};
