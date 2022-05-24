import React, { FC } from 'react';
import CheckBoxBlue from '../../../checkbox/CheckBoxBlue';
import LargeButtonBlue from '../../../button/LargeButtonBlue';
import IconTextFieldDark from '../../../textfield/IconTextFieldDark';
import IconPasswordTextFieldDark from '../../../textfield/IconPasswordTextFieldDark';
import { Link } from '@mui/material';
import Router from 'next/router';

interface IProps {}

/**
 * @author
 * @function @EmailAuthUI
 **/

const EmailAuthUI: FC<IProps> = (props) => {
  return (
    <div className="w-full space-y-7 pb-[4px] flex flex-col justify-center items-center">
      <IconTextFieldDark
        placeholder="Email Address"
        icon="/icons/email.svg"
        type="email"
        value=""
        onChange={() => {}}
        onkeyUp={() => {}}
      />
      <IconPasswordTextFieldDark
        placeholder="Password"
        icon="/icons/password.svg"
        value=""
        onChange={() => {}}
        onkeyUp={() => {}}
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
          <CheckBoxBlue />
          <div className="flex items-center">
            <h6 className="ml-3 text-xs font-light text-[rgba(255,255,255,0.75)]">
              I agree with&#160;
              <Link
                className="text-white text-xs"
                component="button"
                underline="always"
              >
                privacy policy
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <LargeButtonBlue onClick={() => {}} content="Log In Now" />
    </div>
  );
};

export default EmailAuthUI;
