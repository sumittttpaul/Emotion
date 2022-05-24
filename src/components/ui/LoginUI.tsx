import React, { FC, useState } from 'react';
import AuthContainer from '../container/AuthContainer';
import { Tab } from '@headlessui/react';
import { DeviceMobileIcon, MailIcon } from '@heroicons/react/solid';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import EmailAuthUI from './AuthComponentUI/LoginComponentUI/EmailAuthUI';
import PhoneAuthUI from './AuthComponentUI/LoginComponentUI/PhoneAuthUI';
import { Link, useTheme } from '@mui/material';
import Router from 'next/router';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../tab/SelectAvatarTabPanel';
import { AuthHeaderLabel } from '../label/AuthHeaderLabel';

interface IProps {}

/**
 * @author
 * @function @LoginUI
 **/

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const LoginUI: FC<IProps> = (props) => {
  const [value, setValue] = useState(true);
  const [Tabvalue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleChangeIndex = (index: number) => {
    setTabValue(index);
  };

  const handlePhoneClick = () => {
    setValue(true);
    setTabValue(0);
  };

  const handleEmailClick = () => {
    setValue(false);
    setTabValue(1);
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
          <div className="w-full">
            {/* @ts-ignore: Unreachable code error */}
            <AnimateSharedLayout>
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
            </AnimateSharedLayout>
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
              <PhoneAuthUI />
            </TabPanel>
            <TabPanel value={Tabvalue} index={1} dir={theme.direction}>
              <EmailAuthUI />
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
