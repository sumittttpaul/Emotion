import React, { ChangeEvent, KeyboardEvent, FocusEvent, FC } from 'react';
import AuthContainer from '../container/AuthContainer';
import Router from 'next/router';
import { Link } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import IconTextFieldDark from '../textfield/IconTextFieldDark';
import LargeButtonBlue from '../button/LargeButtonBlue';
import { AuthHeaderLabel } from '../label/AuthHeaderLabel';

interface IProps {
  Email: string;
  EmailID?: string;
  EmailError?: boolean;
  EmailReadOnly?: boolean;
  EmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  EmailKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  EmailKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  EmailKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  EmailFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  EmailBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  SubmitClick: () => void;
  SubmitDisabled: boolean;
  SubmitLoading: boolean;
}

/**
 * @author
 * @function @ForgotPasswordUI
 **/

const Header =
  'Please fill in the email that you used to register. You will be sent an email with instruction on how to reset your password.';

const ForgotPasswordUI: FC<IProps> = (props) => {
  return (
    <AuthContainer>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="w-full max-w-[350px] space-y-6 flex flex-col justify-center items-center"
          key=""
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.25 }}
        >
          <AuthHeaderLabel label="Forgot your password ?" />
          <h6 className="text-white text-[13px] font-light opacity-75">
            {Header}
          </h6>
          <div className="w-full space-y-12">
            <IconTextFieldDark
              placeholder="Email Address"
              icon="/icons/email.svg"
              type="email"
              id={props.EmailID}
              value={props.Email}
              onChange={props.EmailChange}
              onKeyPress={props.EmailKeyPress}
              onkeyDown={props.EmailKeyDown}
              onkeyUp={props.EmailKeyUp}
              onFocus={props.EmailFocus}
              onBlur={props.EmailBlur}
              readonly={props.EmailReadOnly}
              error={props.EmailError}
            />
            <LargeButtonBlue
              onClick={props.SubmitClick}
              Disabled={props.SubmitDisabled}
              Loading={props.SubmitLoading}
              content="Send Email"
            />
          </div>
          <div className="flex">
            <h6 className="text-[13px] font-light text-[rgba(255,255,255,0.75)] flex items-center">
              Remember your password?&#160;
              <Link
                onClick={() => {
                  Router.push('/auth/login');
                }}
                className="text-white text-[13px]"
                component="button"
                underline="always"
              >
                Sign In
              </Link>
            </h6>
          </div>
        </motion.div>
      </AnimatePresence>
    </AuthContainer>
  );
};

export default ForgotPasswordUI;
