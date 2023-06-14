import React, {
  FC,
  ChangeEvent,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import IconTextFieldDark from '../../../textfield/IconTextFieldDark';
import { AuthTransitionContainer } from '../../../container/Auth/AuthTransitionContainer';
import { RegisterSkipAllButton } from '../../../button/Auth/RegisterSkipAllButton';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { AuthType } from '../AuthType';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';

export interface RegisterEmailAuthUIProps {
  ClassName?: string;
  Loading: boolean;
  Toast: boolean;
  EmailAddress: string;
  setEmailAddress: Dispatch<SetStateAction<string>>;
  setSkipDialog: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  IsInformationFilledAfterEmailAndPassword: () => void;
  IsInformationFilledBeforeEmailAndPassword: () => void;
}

/**
 * @author
 * @function @RegisterEmailAuthUI
 **/

export const RegisterEmailAuthUI: FC<RegisterEmailAuthUIProps> = (props) => {
  // ID
  const EmailAddressID = 'EmailAddress-TextField-Register';

  // State
  const [EmailAddressError, setEmailAddressError] = useState(false);

  // Change
  const EmailAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setEmailAddress(event.target.value);
  };

  // Events
  const EmailAddressKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ValidateEmailAddress) {
      ValidEmailAddress();
    }
    if (event.key === 'Enter') {
      if (ValidateEmailAddress) {
        EmailAddressSubmitClick();
      } else {
        InvalidEmailAddress();
      }
    }
  };
  const EmailAddressBlur = () => {
    if (ValidateEmailAddress) {
      ValidEmailAddress();
    } else {
      setEmailAddressError(true);
    }
  };

  // Validation
  var emailAddressExpression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var ValidateEmailAddress = props.EmailAddress.toLowerCase().match(
    emailAddressExpression
  );
  const EmailAddressSubmitDisabled: boolean =
    props.EmailAddress.length < 1 || !ValidateEmailAddress;

  const ValidEmailAddress = () => {
    setEmailAddressError(false);
    HideToast();
  };
  const InvalidEmailAddress = () => {
    setEmailAddressError(true);
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
    props.setAuthScreen('register-password');
  };

  const SkipClick = () => {
    props.setSkipDialog(true);
  };

  // Submit
  const EmailAddressSubmitClick = () => {
    if (ValidateEmailAddress) {
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
    <AuthTransitionContainer>
      <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
        <IconTextFieldDark
          id={EmailAddressID}
          placeholder="Email Address"
          icon="/icons/email.svg"
          type="emailAddress"
          value={props.EmailAddress}
          onChange={EmailAddressChange}
          onkeyUp={EmailAddressKeyUp}
          onBlur={EmailAddressBlur}
          error={EmailAddressError}
          readonly={props.Loading}
        />
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will add later"
              onClick={props.IsInformationFilledAfterEmailAndPassword}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton
              Label="Back"
              onClick={props.IsInformationFilledBeforeEmailAndPassword}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex space-x-2">
          <RegisterSkipAllButton onClick={SkipClick}>
            Skip all
          </RegisterSkipAllButton>
          <AuthSubmitButton
            Disabled={EmailAddressSubmitDisabled}
            onClick={EmailAddressSubmitClick}
          >
            Next
          </AuthSubmitButton>
        </div>
      </div>
    </AuthTransitionContainer>
  );
};
