import React, { FC } from 'react';
import AuthContainer from '../container/AuthContainer';
import { motion, AnimatePresence } from 'framer-motion';
import TextFieldDark from '../textfield/TextFieldDark';
import LargeButtonBlue from '../button/LargeButtonBlue';
import { Link } from '@mui/material';
import PasswordTextFieldDark from '../textfield/PasswordTextFieldDark';
import { AuthHeaderLabel } from '../label/AuthHeaderLabel';
import NumberTextFieldDark from '../textfield/NumberTextFieldDark';
import { AuthFooter } from '../footer/AuthFooter';
import CheckBoxBlue from '../checkbox/CheckBoxBlue';
import { TermsAndCondition } from '../terms & policy/TermsAndCondition';

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
          className="w-full max-w-[350px] space-y-6 flex flex-col justify-center items-center relative"
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
            />
            <TextFieldDark
              placeholder="Last Name"
              type="text"
              value=""
              onChange={() => {}}
            />
          </div>
          <TextFieldDark
            placeholder="Email Address"
            type="email"
            value=""
            onChange={() => {}}
          />
          <NumberTextFieldDark
            placeholder="Phone Number"
            type="tel"
            dataPhonecode="+91"
            value=""
            onChange={() => {}}
          />
          <div className="w-full space-y-3">
            <h6 className="text-white text-xs font-light opacity-75">
              {PasswordInfo}
            </h6>
            <PasswordTextFieldDark
              placeholder="Password"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="flex w-full">
            <CheckBoxBlue Checked={false} OnCnange={() => {}} />
            <TermsAndCondition />
          </div>
          <LargeButtonBlue
            Disabled={false}
            onClick={() => {}}
            content="Continue"
          />
          <AuthFooter />
        </motion.div>
      </AnimatePresence>
    </AuthContainer>
  );
};

export default RegisterUI;
