import React, { ChangeEvent, FC, KeyboardEvent, FocusEvent } from 'react';
import CheckBoxBlue from '../../../checkbox/CheckBoxBlue';
import LargeButtonBlue from '../../../button/LargeButtonBlue';
import IconTextFieldDark from '../../../textfield/IconTextFieldDark';
import IconPasswordTextFieldDark from '../../../textfield/IconPasswordTextFieldDark';
import { Link } from '@mui/material';
import Router from 'next/router';
import { EmailPrivacyPolicy } from '../../../terms & policy/EmailPrivacyPolicy';

interface IProps {
  Email: string;
  EmailID?: string;
  EmailReadOnly?: boolean;
  EmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  EmailKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  EmailKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  EmailKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  Password: string;
  PasswordID?: string;
  PasswordReadOnly?: boolean;
  PasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  PasswordKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PasswordKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PasswordKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  EmailPolicyChecked: boolean;
  EmailPolicyCheckedChange: (event: ChangeEvent<HTMLInputElement>) => void;
  EmailSubmitDisabled: boolean;
  EmailSubmitLoading: boolean;
  EmailSubmitClick: () => void;
  EmailError?: boolean;
  EmailFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  EmailBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  PasswordError?: boolean;
  PasswordFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  PasswordBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

/**
 * @author
 * @function @EmailAuthUI
 **/

const EmailAuthUI: FC<IProps> = (props) => {
  return (
    <div className="w-full space-y-7 pb-[5px] pt-[2px] px-[2px] flex flex-col justify-center items-center">
      <IconTextFieldDark
        id={props.EmailID}
        placeholder="Email Address"
        icon="/icons/email.svg"
        type="email"
        value={props.Email}
        onChange={props.EmailChange}
        onkeyDown={props.EmailKeyDown}
        onKeyPress={props.EmailKeyPress}
        onkeyUp={props.EmailKeyUp}
        onFocus={props.EmailFocus}
        onBlur={props.EmailBlur}
        error={props.EmailError}
        readonly={props.EmailReadOnly}
      />
      <IconPasswordTextFieldDark
        id={props.PasswordID}
        placeholder="Password"
        icon="/icons/password.svg"
        value={props.Password}
        onChange={props.PasswordChange}
        onkeyDown={props.PasswordKeyDown}
        onKeyPress={props.PasswordKeyPress}
        onkeyUp={props.PasswordKeyUp}
        onFocus={props.PasswordFocus}
        onBlur={props.PasswordBlur}
        error={props.PasswordError}
        readonly={props.PasswordReadOnly}
      />
      <div className="w-full space-y-1">
        <div className="text-right w-full">
          <Link
            onClick={() => {
              Router.push('/auth/login/forget-password');
            }}
            className="text-white text-xs -mt-5"
            component="button"
            underline="always"
          >
            Forgot Your Password
          </Link>
        </div>
        <div className="flex w-full pl-2">
          <CheckBoxBlue
            Checked={props.EmailPolicyChecked}
            OnCnange={props.EmailPolicyCheckedChange}
          />
          <EmailPrivacyPolicy />
        </div>
      </div>
      <LargeButtonBlue
        onClick={props.EmailSubmitClick}
        content="Log In Now"
        Disabled={props.EmailSubmitDisabled}
        Loading={props.EmailSubmitLoading}
      />
    </div>
  );
};

export default EmailAuthUI;
