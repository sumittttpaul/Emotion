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
import { AuthTransitionContainer } from '../../../container/Auth/AuthTransitionContainer';
import IconPasswordTextFieldDark from '../../../textfield/IconPasswordTextFieldDark';
import { LinkWithEmailAndPassword } from '../../../../algorithms/AuthAlgorithms';
import { AuthType } from '../AuthType';

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
  IsInformationAfterEmailAndPassword: () => void;
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
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var ValidatePassword =
    passwordExpression.test(Password) && Password.length > 8;
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
        Next: props.IsInformationAfterEmailAndPassword,
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
    <AuthTransitionContainer>
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
        />
        <div className="flex justify-start">
          <YellowBulbHint Label="Your password should contain atleast 8 or more characters with a mix of letters, numbers & symbols." />
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
    </AuthTransitionContainer>
  );
};
