import React, { ChangeEvent, KeyboardEvent, FocusEvent, FC } from 'react';
import AuthContainer from '../container/AuthContainer';
import { motion, AnimatePresence } from 'framer-motion';
import TextFieldDark from '../textfield/TextFieldDark';
import LargeButtonBlue from '../button/LargeButtonBlue';
import PasswordTextFieldDark from '../textfield/PasswordTextFieldDark';
import { AuthHeaderLabel } from '../label/AuthHeaderLabel';
import NumberTextFieldDark from '../textfield/NumberTextFieldDark';
import { AuthFooter } from '../footer/AuthFooter';
import CheckBoxBlue from '../checkbox/CheckBoxBlue';
import { TermsAndCondition } from '../terms & policy/TermsAndCondition';

interface IProps {
  FirstName: string;
  FirstNameID?: string;
  FirstNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  FirstNameKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  FirstNameKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  FirstNameKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  LastName: string;
  LastNameID?: string;
  LastNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  LastNameKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  LastNameKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  LastNameKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  Email: string;
  EmailID?: string;
  EmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  EmailKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  EmailKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  EmailKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  Phone: string;
  PhoneID?: string;
  PhoneChange: (event: ChangeEvent<HTMLInputElement>) => void;
  PhoneKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PhoneKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PhoneKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  Password: string;
  PasswordID?: string;
  PasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  PasswordKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PasswordKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PasswordKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  FirstNameFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  LastNameFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  EmailFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  PhoneFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  PasswordFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  FirstNameBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  LastNameBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  EmailBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  PhoneBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  PasswordBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  TermsChecked: boolean;
  TermsCheckedChange: (event: ChangeEvent<HTMLInputElement>) => void;
  FirstNameError?: boolean;
  LastNameError?: boolean;
  EmailError?: boolean;
  PhoneError?: boolean;
  PasswordError?: boolean;
  SubmitClick: () => void;
  SubmitDisabled: boolean;
  FirstNameReadOnly?: boolean;
  LastNameReadOnly?: boolean;
  EmailReadOnly?: boolean;
  PhoneReadOnly?: boolean;
  PasswordReadOnly?: boolean;
}

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
              id={props.FirstNameID}
              value={props.FirstName}
              onChange={props.FirstNameChange}
              onKeyPress={props.FirstNameKeyPress}
              onkeyDown={props.FirstNameKeyDown}
              onkeyUp={props.FirstNameKeyUp}
              onFocus={props.FirstNameFocus}
              onBlur={props.FirstNameBlur}
              readonly={props.FirstNameReadOnly}
              error={props.FirstNameError}
            />
            <TextFieldDark
              placeholder="Last Name"
              type="text"
              id={props.LastNameID}
              value={props.LastName}
              onChange={props.LastNameChange}
              onKeyPress={props.LastNameKeyPress}
              onkeyDown={props.LastNameKeyDown}
              onkeyUp={props.LastNameKeyUp}
              onFocus={props.LastNameFocus}
              onBlur={props.LastNameBlur}
              readonly={props.LastNameReadOnly}
              error={props.LastNameError}
            />
          </div>
          <TextFieldDark
            placeholder="Email Address"
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
          <NumberTextFieldDark
            placeholder="Phone Number"
            type="tel"
            dataPhonecode="+91"
            id={props.PhoneID}
            value={props.Phone}
            onChange={props.PhoneChange}
            onKeyPress={props.PhoneKeyPress}
            onkeyDown={props.PhoneKeyDown}
            onkeyUp={props.PhoneKeyUp}
            onFocus={props.PhoneFocus}
            onBlur={props.PhoneBlur}
            readonly={props.PhoneReadOnly}
            error={props.PhoneError}
          />
          <div className="w-full space-y-3">
            <h6 className="text-white text-xs font-light opacity-75">
              {PasswordInfo}
            </h6>
            <PasswordTextFieldDark
              placeholder="Password"
              id={props.PasswordID}
              value={props.Password}
              onChange={props.PasswordChange}
              onKeyPress={props.PasswordKeyPress}
              onkeyDown={props.PasswordKeyDown}
              onkeyUp={props.PasswordKeyUp}
              onFocus={props.PasswordFocus}
              onBlur={props.PasswordBlur}
              readonly={props.PasswordReadOnly}
              error={props.PasswordError}
            />
          </div>
          <div className="flex w-full">
            <CheckBoxBlue
              Checked={props.TermsChecked}
              OnCnange={props.TermsCheckedChange}
            />
            <TermsAndCondition />
          </div>
          <LargeButtonBlue
            Disabled={props.SubmitDisabled}
            onClick={props.SubmitClick}
            content="Continue"
          />
          <AuthFooter />
        </motion.div>
      </AnimatePresence>
    </AuthContainer>
  );
};

export default RegisterUI;
