import React, { FC } from 'react';
import AuthContainer from '../container/AuthContainer';
import { motion, AnimatePresence } from 'framer-motion';
import TextFieldDark from '../textfield/TextFieldDark';
import LargeButtonBlue from '../button/LargeButtonBlue';
import CheckBoxBlue from '../checkbox/CheckBoxBlue';
import { Link } from '@mui/material';
import Router from 'next/router';
import PasswordTextFieldDark from '../textfield/PasswordTextFieldDark';
import { AuthHeaderLabel } from '../label/AuthHeaderLabel';
import NumberTextFieldDark from '../textfield/NumberTextFieldDark';

interface IProps {}

/**
 * @author
 * @function @RegisterUI
 **/

const PasswordInfo =
  'Your password should contain atleast 8 or more characters with a mix of letters, numbers & symbols.';

const RegisterUI: FC<IProps> = (props) => {
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
          <AuthHeaderLabel label="Create your Agewear account" />
          <div className="w-full flex space-x-6">
            <TextFieldDark
              placeholder="First Name"
              type="text"
              value=""
              onChange={() => {}}
              onkeyUp={() => {}}
            />
            <TextFieldDark
              placeholder="Last Name"
              type="text"
              value=""
              onChange={() => {}}
              onkeyUp={() => {}}
            />
          </div>
          <TextFieldDark
            placeholder="Email Address"
            type="email"
            value=""
            onChange={() => {}}
            onkeyUp={() => {}}
          />
          <NumberTextFieldDark
            placeholder="Phone Number"
            type="tel"
            dataPhonecode="+91"
            value=""
            onChange={() => {}}
            onkeyUp={() => {}}
          />
          <div className="w-full space-y-3">
            <h6 className="text-white text-xs font-light opacity-75">
              {PasswordInfo}
            </h6>
            <PasswordTextFieldDark
              placeholder="Password"
              icon="/icons/password.svg"
              value=""
              onChange={() => {}}
              onkeyUp={() => {}}
            />
          </div>

          <div className="flex w-full">
            <CheckBoxBlue />
            <div className="flex items-center">
              <h6 className="ml-3 text-xs font-light text-[rgba(255,255,255,0.75)]">
                I have read and agree with&#160;
                <Link
                  className="text-white text-xs"
                  component="button"
                  underline="always"
                >
                  terms & conditions
                </Link>
              </h6>
            </div>
          </div>
          <LargeButtonBlue
            onClick={() => {
              setTimeout(() => {
                Router.push('/auth/register/setup-account');
              }, 250);
            }}
            content="Continue"
          />
          <div className="flex">
            <h6 className="text-xs font-light text-[rgba(255,255,255,0.75)] flex items-center">
              Already have an Agewear account?&#160;
              <Link
                onClick={() => {
                  Router.push('/auth/login');
                }}
                className="text-white text-xs"
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

export default RegisterUI;
