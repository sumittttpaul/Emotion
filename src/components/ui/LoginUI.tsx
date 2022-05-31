import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useState,
  FocusEvent,
} from 'react';
import AuthContainer from '../container/AuthContainer';
import { Tab } from '@headlessui/react';
import { DeviceMobileIcon, MailIcon } from '@heroicons/react/solid';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import EmailAuthUI from './AuthComponentUI/LoginComponentUI/EmailAuthUI';
import PhoneAuthUI from './AuthComponentUI/LoginComponentUI/PhoneAuthUI';
import { Link, useTheme } from '@mui/material';
import Router from 'next/router';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../tab/SelectAvatarTabPanel';
import { AuthHeaderLabel } from '../label/AuthHeaderLabel';

interface IProps {
  Phone: string;
  PhoneID?: string;
  PhoneChange: (event: ChangeEvent<HTMLInputElement>) => void;
  PhoneKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PhoneKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PhoneKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  Email: string;
  EmailID?: string;
  EmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  EmailKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  EmailKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  EmailKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  Password: string;
  PasswordID?: string;
  PasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  PasswordKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PasswordKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PasswordKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PhonePolicyChecked: boolean;
  PhonePolicyCheckedChange: (event: ChangeEvent<HTMLInputElement>) => void;
  EmailPolicyChecked: boolean;
  EmailPolicyCheckedChange: (event: ChangeEvent<HTMLInputElement>) => void;
  PhoneSubmitDisabled: boolean;
  PhoneSubmitClick: () => void;
  EmailSubmitDisabled: boolean;
  EmailSubmitClick: () => void;
  FacebookSignIn: () => void;
  GoogleSignIn: () => void;
  AppleSignIn: () => void;
  TabClick: (value: boolean) => void;
  PhoneError?: boolean;
  EmailError?: boolean;
  PasswordError?: boolean;
  PhoneFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  PhoneBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  EmailFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  EmailBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  PasswordFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  PasswordBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

/**
 * @author
 * @function @LoginUI
 **/

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const LoginUI: FC<IProps> = (props) => {
  const [Tabvalue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleChangeIndex = (index: number) => {
    setTabValue(index);
  };

  const handlePhoneClick = () => {
    setTabValue(0);
    props.TabClick(true);
  };

  const handleEmailClick = () => {
    setTabValue(1);
    props.TabClick(false);
  };

  return (
    <AuthContainer>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="w-full max-w-[350px] space-y-7 flex flex-col justify-center items-center"
          key=""
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.25 }}
        >
          <AuthHeaderLabel label="Sign in with an Agewear Account" />
          <div className="w-full px-[2px]">
            <LayoutGroup>
              <Tab.Group>
                <Tab.List className="flex space-x-2 rounded-md bg-[#121212] p-[5px]">
                  <Tab
                    onClick={handlePhoneClick}
                    className={({ selected }) =>
                      classNames(
                        'w-full relative rounded-md text-[13px] outline-none custom-tab-transition-color',
                        selected ? 'text-white' : 'text-white/[0.50]'
                      )
                    }
                  >
                    {Tabvalue ? (
                      ''
                    ) : (
                      <motion.div
                        layoutId="SegmentedControlActive"
                        className="w-full h-full absolute rounded-md outline-none z-[1] bg-[#202020]"
                      />
                    )}
                    <div className="flex w-full py-4 relative justify-center space-x-1 z-[2]">
                      <DeviceMobileIcon height={20} width={20} />
                      <h6>Phone</h6>
                    </div>
                  </Tab>
                  <Tab
                    onClick={handleEmailClick}
                    className={({ selected }) =>
                      classNames(
                        'w-full relative rounded-md text-[13px] outline-none custom-tab-transition-color',
                        selected ? 'text-white' : 'text-white/[0.50]'
                      )
                    }
                  >
                    {Tabvalue ? (
                      <motion.div
                        layoutId="SegmentedControlActive"
                        className="w-full h-full absolute rounded-md outline-none z-[1] bg-[#202020]"
                      />
                    ) : (
                      ''
                    )}
                    <div className="flex w-full py-4 relative justify-center space-x-2 z-[2]">
                      <MailIcon height={20} width={20} />
                      <h6>Email</h6>
                    </div>
                  </Tab>
                </Tab.List>
              </Tab.Group>
            </LayoutGroup>
          </div>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={Tabvalue}
            onChangeIndex={handleChangeIndex}
            className="w-full"
            id="SwipeableViews"
            containerStyle={{
              transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
            }}
          >
            <TabPanel value={Tabvalue} index={0} dir={theme.direction}>
              <PhoneAuthUI
                Phone={props.Phone}
                PhoneID={props.PhoneID}
                PhoneKeyUp={props.PhoneKeyUp}
                PhoneKeyPress={props.PhoneKeyPress}
                PhoneKeyDown={props.PhoneKeyDown}
                PhoneChange={props.PhoneChange}
                PhonePolicyChecked={props.PhonePolicyChecked}
                PhonePolicyCheckedChange={props.PhonePolicyCheckedChange}
                PhoneSubmitDisabled={props.PhoneSubmitDisabled}
                PhoneSubmitClick={props.PhoneSubmitClick}
                FacebookSignIn={props.FacebookSignIn}
                GoogleSignIn={props.GoogleSignIn}
                AppleSignIn={props.AppleSignIn}
                PhoneError={props.PhoneError}
                PhoneFocus={props.PhoneFocus}
                PhoneBlur={props.PhoneBlur}
              />
            </TabPanel>
            <TabPanel value={Tabvalue} index={1} dir={theme.direction}>
              <EmailAuthUI
                Email={props.Email}
                EmailID={props.EmailID}
                EmailKeyUp={props.EmailKeyUp}
                EmailKeyPress={props.EmailKeyPress}
                EmailKeyDown={props.EmailKeyDown}
                EmailChange={props.EmailChange}
                Password={props.Password}
                PasswordID={props.PasswordID}
                PasswordKeyUp={props.PasswordKeyUp}
                PasswordKeyPress={props.PasswordKeyPress}
                PasswordKeyDown={props.PasswordKeyDown}
                PasswordChange={props.PasswordChange}
                EmailPolicyChecked={props.EmailPolicyChecked}
                EmailPolicyCheckedChange={props.EmailPolicyCheckedChange}
                EmailSubmitDisabled={props.EmailSubmitDisabled}
                EmailSubmitClick={props.EmailSubmitClick}
                EmailError={props.EmailError}
                PasswordError={props.PasswordError}
                EmailFocus={props.EmailFocus}
                EmailBlur={props.EmailBlur}
                PasswordFocus={props.PasswordFocus}
                PasswordBlur={props.PasswordBlur}
              />
            </TabPanel>
          </SwipeableViews>
          <div className="flex">
            <h6 className="text-xs font-light text-[rgba(255,255,255,0.75)] flex items-center">
              Don&apos;t have an Agewear account?&#160;
              <Link
                onClick={() => {
                  Router.push('/auth/register');
                }}
                className="text-white text-xs"
                component="button"
                underline="always"
              >
                Sign Up
              </Link>
            </h6>
          </div>
        </motion.div>
      </AnimatePresence>
    </AuthContainer>
  );
};

export default LoginUI;
