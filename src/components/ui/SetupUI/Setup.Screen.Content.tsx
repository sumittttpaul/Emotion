'use client';

import dynamic from 'next/dynamic';
import { SetupHook } from 'hooks/Hooks.Setup';
import { AnimatePresence } from 'framer-motion';
import { SetupLoginPhoneScreenProps } from 'components/ui/SetupUI/Screen/Login/Setup.Login.PhoneScreen';
import { SetupLoginEmailScreenProps } from 'components/ui/SetupUI/Screen/Login/Setup.Login.EmailScreen';
import { SetupLoginOtherAccountScreenProps } from 'components/ui/SetupUI/Screen/Login/Setup.Login.OtherAccountScreen';
import { SetupLoginOTPScreenProps } from 'components/ui/SetupUI/Screen/Login/Setup.Login.OTPScreen';
import { SetupLoginPasswordScreenProps } from 'components/ui/SetupUI/Screen/Login/Setup.Login.PasswordScreen';
import { SetupLoginForgotPasswordScreenProps } from 'components/ui/SetupUI/Screen/Login/Setup.Login.ForgotPasswordScreen';
import { SetupRegisterNameScreenProps } from 'components/ui/SetupUI/Screen/Register/Setup.Register.NameScreen';
import { SetupRegisterPhoneScreenProps } from 'components/ui/SetupUI/Screen/Register/Setup.Register.PhoneScreen';
import { SetupRegisterOTPScreenProps } from 'components/ui/SetupUI/Screen/Register/Setup.Register.OTPScreen';
import { SetupRegisterEmailScreenProps } from 'components/ui/SetupUI/Screen/Register/Setup.Register.EmailScreen';
import { SetupRegisterPasswordScreenProps } from 'components/ui/SetupUI/Screen/Register/Setup.Register.PasswordScreen';
import { SetupRegisterVerifyEmailScreenProps } from 'components/ui/SetupUI/Screen/Register/Setup.Register.VerifyEmailScreen';
import { SetupRegisterProfilePictureScreenProps } from 'components/ui/SetupUI/Screen/Register/Setup.Register.ProfilePictureScreen';
import { SetupRegisterBirthdayScreenProps } from 'components/ui/SetupUI/Screen/Register/Setup.Register.BirthdayScreen';
import { SetupRegisterGenderScreenProps } from 'components/ui/SetupUI/Screen/Register/Setup.Register.GenderScreen';
import CheckInfoHandler from './CheckInfoHandler';

const SetupLoginPhoneScreen = dynamic<SetupLoginPhoneScreenProps>(
  () => import('components/ui/SetupUI/Screen/Login/Setup.Login.PhoneScreen')
);

const SetupLoginEmailScreen = dynamic<SetupLoginEmailScreenProps>(
  () => import('components/ui/SetupUI/Screen/Login/Setup.Login.EmailScreen')
);

const SetupLoginOtherAccountScreen = dynamic<SetupLoginOtherAccountScreenProps>(
  () =>
    import('components/ui/SetupUI/Screen/Login/Setup.Login.OtherAccountScreen')
);

const SetupLoginOTPScreen = dynamic<SetupLoginOTPScreenProps>(
  () => import('components/ui/SetupUI/Screen/Login/Setup.Login.OTPScreen')
);

const SetupLoginPasswordScreen = dynamic<SetupLoginPasswordScreenProps>(
  () => import('components/ui/SetupUI/Screen/Login/Setup.Login.PasswordScreen')
);

const SetupLoginForgotPasswordScreen =
  dynamic<SetupLoginForgotPasswordScreenProps>(
    () =>
      import(
        'components/ui/SetupUI/Screen/Login/Setup.Login.ForgotPasswordScreen'
      )
  );

const SetupRegisterNameScreen = dynamic<SetupRegisterNameScreenProps>(
  () =>
    import('components/ui/SetupUI/Screen/Register/Setup.Register.NameScreen')
);

const SetupRegisterPhoneScreen = dynamic<SetupRegisterPhoneScreenProps>(
  () =>
    import('components/ui/SetupUI/Screen/Register/Setup.Register.PhoneScreen')
);

const SetupRegisterOTPScreen = dynamic<SetupRegisterOTPScreenProps>(
  () => import('components/ui/SetupUI/Screen/Register/Setup.Register.OTPScreen')
);

const SetupRegisterEmailScreen = dynamic<SetupRegisterEmailScreenProps>(
  () =>
    import('components/ui/SetupUI/Screen/Register/Setup.Register.EmailScreen')
);

const SetupRegisterPasswordScreen = dynamic<SetupRegisterPasswordScreenProps>(
  () =>
    import(
      'components/ui/SetupUI/Screen/Register/Setup.Register.PasswordScreen'
    )
);

const SetupRegisterVerifyEmailScreen =
  dynamic<SetupRegisterVerifyEmailScreenProps>(
    () =>
      import(
        'components/ui/SetupUI/Screen/Register/Setup.Register.VerifyEmailScreen'
      )
  );

const SetupRegisterProfilePictureScreen =
  dynamic<SetupRegisterProfilePictureScreenProps>(
    () =>
      import(
        'components/ui/SetupUI/Screen/Register/Setup.Register.ProfilePictureScreen'
      )
  );

const SetupRegisterBirthdayScreen = dynamic<SetupRegisterBirthdayScreenProps>(
  () =>
    import(
      'components/ui/SetupUI/Screen/Register/Setup.Register.BirthdayScreen'
    )
);

const SetupRegisterGenderScreen = dynamic<SetupRegisterGenderScreenProps>(
  () =>
    import('components/ui/SetupUI/Screen/Register/Setup.Register.GenderScreen')
);

interface IProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  userProfile?: IUserProfile;
}

function SetupScreenContent({
  ContentClassName,
  AnimationDivClassName,
  Animation,
  userProfile,
}: IProps) {
  const { Screen } = SetupHook();

  const CheckInfo = (Screen: ICheckInfoScreen) => {
    CheckInfoHandler({ userProfile: userProfile, Screen: Screen });
  };

  return (
    <div className={`${AnimationDivClassName} w-full flex`}>
      <AnimatePresence mode="wait" initial={true}>
        {Screen === 'login-phone' && (
          <SetupLoginPhoneScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
          />
        )}
        {Screen === 'login-email' && (
          <SetupLoginEmailScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
          />
        )}
        {Screen === 'login-others' && (
          <SetupLoginOtherAccountScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            userProfile={userProfile}
            CheckInfoHandler={() => CheckInfo('initial-login-load')}
          />
        )}
        {Screen === 'login-otp' && (
          <SetupLoginOTPScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            CheckInfoHandler={() => CheckInfo('initial-login-load')}
          />
        )}
        {Screen === 'login-password' && (
          <SetupLoginPasswordScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
          />
        )}
        {Screen === 'login-forgot-password' && (
          <SetupLoginForgotPasswordScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
          />
        )}
        {Screen === 'register-name' && (
          <SetupRegisterNameScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            CheckInfoHandler={() => CheckInfo('after-name')}
          />
        )}
        {Screen === 'register-phone' && (
          <SetupRegisterPhoneScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            CheckInfoHandler={() => CheckInfo('after-phone')} // For "I will add later" button
          />
        )}
        {Screen === 'register-otp' && (
          <SetupRegisterOTPScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            CheckInfoHandler={() => CheckInfo('after-phone')}
          />
        )}
        {Screen === 'register-email' && (
          <SetupRegisterEmailScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            CheckInfoHandler={() => CheckInfo('after-email')} // For "I will add later" button
          />
        )}
        {Screen === 'register-password' && (
          <SetupRegisterPasswordScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            CheckInfoHandler={() => CheckInfo('after-email')}
          />
        )}
        {Screen === 'register-verify-email' && (
          <SetupRegisterVerifyEmailScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            CheckInfoHandler={() => CheckInfo('after-verify-email')}
          />
        )}
        {Screen === 'register-profile-picture' && (
          <SetupRegisterProfilePictureScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            CheckInfoHandler={() => CheckInfo('after-profile-picture')}
          />
        )}
        {Screen === 'register-date-of-birth' && (
          <SetupRegisterBirthdayScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            CheckInfoHandler={() => CheckInfo('after-date-of-birth')}
          />
        )}
        {Screen === 'register-gender' && (
          <SetupRegisterGenderScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            CheckInfoHandler={() => CheckInfo('after-gender')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default SetupScreenContent;
