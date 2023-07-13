'use client';

import SetupContentHeader from 'components/label/SetupContentHeader';
import SetupHeaderDescription from 'components/label/SetupHeaderDescription';
import SetupHeaderLabel from 'components/label/SetupHeaderLabel';

interface IProps {
  Screen: AuthScreenType;
}

function SetupScreenTitle({ Screen }: IProps) {
  return (
    <>
      <SetupHeaderLabel>
        {Screen === 'login-phone' && `Let's add your Emotion account`}
        {Screen === 'login-email' && `Let's add your Emotion account`}
        {Screen === 'login-others' && `Let's add your Emotion account`}
        {Screen === 'login-otp' && `Verify your phone number with OTP`}
        {Screen === 'login-password' && `Let's add your Emotion account`}
        {Screen === 'login-forgot-password' && `Let's add your Emotion account`}
        {Screen === 'register-name' && `Who's going to use this account ?`}
        {Screen === 'register-phone' && `Let's add your phone number`}
        {Screen === 'register-otp' && `Verify your phone number with OTP`}
        {Screen === 'register-email' && `Link your email with your account`}
        {Screen === 'register-verify-email' && `Verify the email you provided`}
        {Screen === 'register-password' && `Create a super memorable password`}
        {Screen === 'register-profile-picture' &&
          `Let's add a profile picture for your account`}
        {Screen === 'register-date-of-birth' &&
          `Now add your birthday to get rewards`}
        {Screen === 'register-gender' &&
          `Now add your gender for better search`}
      </SetupHeaderLabel>
      <SetupHeaderDescription>
        {Screen === 'login-phone' &&
          `One account connects yourself across Emotion services and prodcuts.`}
        {Screen === 'login-email' &&
          `One account connects yourself across Emotion services and prodcuts.`}
        {Screen === 'login-others' &&
          `One account connects yourself across Emotion services and prodcuts.`}
        {Screen === 'login-otp' &&
          `One account connects yourself across Emotion services and prodcuts.`}
        {Screen === 'login-password' &&
          `One account connects yourself across Emotion services and prodcuts.`}
        {Screen === 'login-forgot-password' &&
          `One account connects yourself across Emotion services and prodcuts.`}
        {Screen === 'register-name' &&
          `We will use this name in all your future orders and our services.`}
        {Screen === 'register-phone' &&
          `We will use this phone number in all your future orders and our services.`}
        {Screen === 'register-otp' &&
          `We will use this phone number in all your future orders and our services.`}
        {Screen === 'register-email' &&
          `You can also use your email and password for login to your account.`}
        {Screen === 'register-verify-email' &&
          `You can also use your email and password for login to your account.`}
        {Screen === 'register-password' &&
          `Choose a password that's as unique as you are, but make sure it's a secret only you can unlock.`}
        {Screen === 'register-profile-picture' &&
          `We will use this picture in all your future orders and all across services.`}
        {Screen === 'register-date-of-birth' &&
          `We will add some additional rewards and disounts on your special day.`}
        {Screen === 'register-gender' &&
          `Get personalized search and browsing results base on your info.`}
      </SetupHeaderDescription>
      <SetupContentHeader>
        {Screen === 'login-phone' && 'Sign In'}
        {Screen === 'login-email' && 'Sign In'}
        {Screen === 'login-others' && 'Sign-In Options'}
        {Screen === 'login-otp' && 'Enter OTP'}
        {Screen === 'login-password' && 'Enter Password'}
        {Screen === 'login-forgot-password' && 'Forgot Password'}
        {Screen === 'register-name' && 'Sign Up'}
        {Screen === 'register-phone' && 'Sign Up'}
        {Screen === 'register-otp' && 'Enter OTP'}
        {Screen === 'register-email' && 'Sign Up'}
        {Screen === 'register-verify-email' && 'Sign Up'}
        {Screen === 'register-password' && 'Sign Up'}
        {Screen === 'register-profile-picture' && 'Account setup'}
        {Screen === 'register-date-of-birth' && 'Account setup'}
        {Screen === 'register-gender' && 'Account setup'}
      </SetupContentHeader>
    </>
  );
}

export default SetupScreenTitle;
