import React, { ChangeEvent, KeyboardEvent, FocusEvent, FC } from 'react';
import IconPasswordTextFieldDark from '../../textfield/IconPasswordTextFieldDark';
import { SignInNextButton } from '../../button/Auth/SignInNextButton';
import { SignInBackButton } from '../../button/Auth/SignInBackButton';
import Image from 'next/image';

export interface ResetPasswordUIProps {
  ClassName?: string;
  // Email: string;
  // Password: string;
  // PasswordID?: string;
  // PasswordReadOnly?: boolean;
  // PasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // PasswordKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  // PasswordKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  // PasswordKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  // PasswordError?: boolean;
  // PasswordFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  // PasswordBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  // MoveToForgotPassword: () => void;
  // BackToSignInWithEmailAddress: () => void;
}

/**
 * @author
 * @function @ResetPasswordUI
 **/

export const ResetPasswordUI: FC<ResetPasswordUIProps> = (props) => {
  return (
    <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
      <IconPasswordTextFieldDark
        placeholder="Password"
        icon="/icons/password.svg"
        // id={props.PasswordID}
        value={''}
        onChange={() => {}}
        // onkeyDown={props.PasswordKeyDown}
        // onKeyPress={props.PasswordKeyPress}
        // onkeyUp={props.PasswordKeyUp}
        // onFocus={props.PasswordFocus}
        // onBlur={props.PasswordBlur}
        // error={props.PasswordError}
        // readonly={props.PasswordReadOnly}
      />
    </div>
  );
};
