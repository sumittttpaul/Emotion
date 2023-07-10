'use client';

import React, { FC, ReactNode } from 'react';
import { SetupHeaderLabel } from '../../label/SetupHeaderLabel';
import { SetupHeaderDescription } from '../../label/SetupHeaderDescription';
import { SetupContentHeader } from '../../label/SetupContentHeader';
import {
  AuthAnimationType,
  AuthScreenType,
} from '../../ui/SetupUI/AuthScreenType';
import { m } from 'framer-motion';

interface IProps {
  children: ReactNode;
  ClassName: string;
  AuthScreen: AuthScreenType;
  Animation: AuthAnimationType;
}

/**
 * @author
 * @function @AuthContentContainer
 **/

const AuthContentContainer: FC<IProps> = (props) => {
  return (
    <div className="w-full space-y-5 flex flex-col justify-center items-center">
      <m.div
        className="space-y-5 flex flex-col justify-center items-center w-full relative"
        initial={props.Animation.Initial}
        animate={props.Animation.Final}
        transition={props.Animation.Transition}
      >
        <SetupHeaderLabel ClassName="px-5 pt-5">
          {props.AuthScreen === 'login-phone' &&
            `Let's add your Emotion account`}
          {props.AuthScreen === 'login-email' &&
            `Let's add your Emotion account`}
          {props.AuthScreen === 'login-others' &&
            `Let's add your Emotion account`}
          {props.AuthScreen === 'login-otp' &&
            `Verify your phone number with OTP`}
          {props.AuthScreen === 'login-password' &&
            `Let's add your Emotion account`}
          {props.AuthScreen === 'login-forgot-password' &&
            `Let's add your Emotion account`}
          {props.AuthScreen === 'register-name' &&
            `Who's going to use this account ?`}
          {props.AuthScreen === 'register-phone' &&
            `Let's add your phone number`}
          {props.AuthScreen === 'register-otp' &&
            `Verify your phone number with OTP`}
          {props.AuthScreen === 'register-email' &&
            `Link your email with your account`}
          {props.AuthScreen === 'register-verify-email' &&
            `Verify the email you provided`}
          {props.AuthScreen === 'register-password' &&
            `Create a super memorable password`}
          {props.AuthScreen === 'register-profile-picture' &&
            `Let's add a profile picture for your account`}
          {props.AuthScreen === 'register-date-of-birth' &&
            `Now add your birthday to get rewards`}
          {props.AuthScreen === 'register-gender' &&
            `Now add your gender for better search`}
        </SetupHeaderLabel>
        <SetupHeaderDescription ClassName="px-5">
          {props.AuthScreen === 'login-phone' &&
            `One account connects yourself across Emotion services and prodcuts.`}
          {props.AuthScreen === 'login-email' &&
            `One account connects yourself across Emotion services and prodcuts.`}
          {props.AuthScreen === 'login-others' &&
            `One account connects yourself across Emotion services and prodcuts.`}
          {props.AuthScreen === 'login-otp' &&
            `One account connects yourself across Emotion services and prodcuts.`}
          {props.AuthScreen === 'login-password' &&
            `One account connects yourself across Emotion services and prodcuts.`}
          {props.AuthScreen === 'login-forgot-password' &&
            `One account connects yourself across Emotion services and prodcuts.`}
          {props.AuthScreen === 'register-name' &&
            `We will use this name in all your future orders and our services.`}
          {props.AuthScreen === 'register-phone' &&
            `We will use this phone number in all your future orders and our services.`}
          {props.AuthScreen === 'register-otp' &&
            `We will use this phone number in all your future orders and our services.`}
          {props.AuthScreen === 'register-email' &&
            `You can also use your email and password for login to your account.`}
          {props.AuthScreen === 'register-verify-email' &&
            `You can also use your email and password for login to your account.`}
          {props.AuthScreen === 'register-password' &&
            `Choose a password that's as unique as you are, but make sure it's a secret only you can unlock.`}
          {props.AuthScreen === 'register-profile-picture' &&
            `We will use this picture in all your future orders and all across services.`}
          {props.AuthScreen === 'register-date-of-birth' &&
            `We will add some additional rewards and disounts on your special day.`}
          {props.AuthScreen === 'register-gender' &&
            `Get personalized search and browsing results base on your info.`}
        </SetupHeaderDescription>
        <SetupContentHeader ClassName="px-5">
          {props.AuthScreen === 'login-phone' && 'Sign In'}
          {props.AuthScreen === 'login-email' && 'Sign In'}
          {props.AuthScreen === 'login-others' && 'Sign-In Options'}
          {props.AuthScreen === 'login-otp' && 'Enter OTP'}
          {props.AuthScreen === 'login-password' && 'Enter Password'}
          {props.AuthScreen === 'login-forgot-password' && 'Forgot Password'}
          {props.AuthScreen === 'register-name' && 'Sign Up'}
          {props.AuthScreen === 'register-phone' && 'Sign Up'}
          {props.AuthScreen === 'register-otp' && 'Enter OTP'}
          {props.AuthScreen === 'register-email' && 'Sign Up'}
          {props.AuthScreen === 'register-verify-email' && 'Sign Up'}
          {props.AuthScreen === 'register-password' && 'Sign Up'}
          {props.AuthScreen === 'register-profile-picture' && 'Account setup'}
          {props.AuthScreen === 'register-date-of-birth' && 'Account setup'}
          {props.AuthScreen === 'register-gender' && 'Account setup'}
        </SetupContentHeader>
      </m.div>
      <div
        className={`${props.ClassName} px-5 w-full relative overflow-hidden`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default AuthContentContainer;
