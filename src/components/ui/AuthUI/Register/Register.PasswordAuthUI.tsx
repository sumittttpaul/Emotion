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
        <h6 className="font-normal tracking-wide text-left w-full text-white/75 text-sm">
          Your password should contain atleast 8 or more characters with a mix
          of letters, numbers & symbols.
        </h6>
        <div className="flex justify-start">
          <YellowBulbHint Label="Requires recent login / authentication" />
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
