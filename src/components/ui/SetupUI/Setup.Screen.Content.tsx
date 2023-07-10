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

const SetupLoginOTPScreen = dynamic<SetupLoginOTPScreenProps>(() =>
  import('components/ui/SetupUI/Screen/Login/Setup.Login.OTPScreen')
  )
);

const SetupLoginPasswordScreen = dynamic<SetupLoginPasswordScreenProps>(() =>
  import('components/ui/SetupUI/Screen/Login/Setup.Login.PasswordScreen')
  )
);

const SetupLoginForgotPasswordScreen =
  dynamic<SetupLoginForgotPasswordScreenProps>(() =>
    import(
      'components/ui/SetupUI/Screen/Login/Setup.Login.ForgotPasswordScreen'
    ).then((x) => x.SetupLoginForgotPasswordScreen)
  );

const RegisterNameScreenProps = dynamic<RegisterNameScreenPropsProps>(() =>
  import(
    'components/ui/SetupUI/Screen/Register/Setup.Register.NameScreen'
  ).then((x) => x.RegisterNameScreenProps)
);

const RegisterPhoneScreenProps = dynamic<RegisterPhoneScreenPropsProps>(() =>
  import(
    'components/ui/SetupUI/Screen/Register/Setup.Register.PhoneScreen'
  ).then((x) => x.RegisterPhoneScreenProps)
);

const RegisterOTPScreenProps = dynamic<RegisterOTPScreenPropsProps>(() =>
  import('components/ui/SetupUI/Screen/Register/Setup.Register.OTPScreen').then(
    (x) => x.RegisterOTPScreenProps
  )
);

const RegisterEmailScreenProps = dynamic<RegisterEmailScreenPropsProps>(() =>
  import(
    'components/ui/SetupUI/Screen/Register/Setup.Register.EmailScreen'
  ).then((x) => x.RegisterEmailScreenProps)
);

const RegisterPasswordScreenProps = dynamic<RegisterPasswordScreenPropsProps>(
  () =>
    import(
      'components/ui/SetupUI/Screen/Register/Setup.Register.PasswordScreen'
    ).then((x) => x.RegisterPasswordScreenProps)
);

const RegisterVerifyEmailScreenProps =
  dynamic<RegisterVerifyEmailScreenPropsProps>(() =>
    import(
      'components/ui/SetupUI/Screen/Register/Setup.Register.VerifyEmailScreen'
    ).then((x) => x.RegisterVerifyEmailScreenProps)
  );

const RegisterProfilePictureScreenProps =
  dynamic<RegisterProfilePictureScreenPropsProps>(() =>
    import(
      'components/ui/SetupUI/Screen/Register/Setup.Register.ProfilePictureScreen'
    ).then((x) => x.RegisterProfilePictureScreenProps)
  );

const RegisterBirthdayScreenProps = dynamic<RegisterBirthdayScreenPropsProps>(
  () =>
    import(
      'components/ui/SetupUI/Screen/Register/Setup.Register.BirthdayScreen'
    ).then((x) => x.RegisterBirthdayScreenProps)
);

const RegisterGenderScreenProps = dynamic<RegisterGenderScreenPropsProps>(() =>
  import(
    'components/ui/SetupUI/Screen/Register/Setup.Register.GenderScreen'
  ).then((x) => x.RegisterGenderScreenProps)
);

interface IProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  userProfile: IUserProfile;
  CheckInfoHandler: Dispatch<AuthScreenType>;
}

function SetupScreenContent({
  ContentClassName,
  AnimationDivClassName,
  Animation,
  userProfile,
  CheckInfoHandler,
}: IProps) {
  const { Screen } = SetupHook();
  return (
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
          CheckInfoHandler={CheckInfoHandler}
        />
      )}
      {Screen === 'login-otp' && (
        <SetupLoginOTPScreen
          AnimationDivClassName={AnimationDivClassName}
          ContentClassName={ContentClassName}
          Animation={Animation}
          CheckInfoHandler={CheckInfoHandler}
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
      {/* {Screen === 'register-name' && (
        <RegisterNameScreenProps
          ClassName={ContentClassName}
          Animation={Animation}
          setSkipDialog={setSkipDialog}
          Toast={Toast}
          Loading={Loading}
          setAuthScreen={setScreen}
          setLoading={setLoading}
          setToast={setToast}
          setToastSetting={setToastSetting}
          FullName={FullName}
          setFullName={setFullName}
          IsInformation={() => IsInformation_AfterName('normal')}
        />
      )}
      {Screen === 'register-phone' && (
        <RegisterPhoneScreenProps
          ClassName={ContentClassName}
          Animation={Animation}
          PhoneNumber={PhoneNumber}
          setPhoneNumber={setPhoneNumber}
          ResetCaptcha={ResetCaptcha}
          setResetCaptcha={setResetCaptcha}
          setSkipDialog={setSkipDialog}
          Toast={Toast}
          Loading={Loading}
          setAuthScreen={setScreen}
          setLoading={setLoading}
          setToast={setToast}
          setToastSetting={setToastSetting}
          IsInformation={() => IsInformation_AfterPhoneAndOTP('normal')}
        />
      )}
      {Screen === 'register-otp' && (
        <RegisterOTPScreenProps
          ClassName={ContentClassName}
          Animation={Animation}
          PhoneNumber={PhoneNumber}
          Toast={Toast}
          Loading={Loading}
          setResetCaptcha={setResetCaptcha}
          setAuthScreen={setScreen}
          setLoading={setLoading}
          setToast={setToast}
          setToastSetting={setToastSetting}
          IsInformation={() => IsInformation_AfterPhoneAndOTP('normal')}
        />
      )}
      {Screen === 'register-email' && (
        <RegisterEmailScreenProps
          ClassName={ContentClassName}
          Animation={Animation}
          setSkipDialog={setSkipDialog}
          EmailAddress={EmailAddress}
          setEmailAddress={setEmailAddress}
          Toast={Toast}
          Loading={Loading}
          setAuthScreen={setScreen}
          setLoading={setLoading}
          setToast={setToast}
          setToastSetting={setToastSetting}
          IsInformation={() => IsInformation_AfterEmailAndPassword('normal')}
        />
      )}
      {Screen === 'register-password' && (
        <RegisterPasswordScreenProps
          ClassName={ContentClassName}
          Animation={Animation}
          EmailAddress={EmailAddress}
          Toast={Toast}
          Loading={Loading}
          setAuthScreen={setScreen}
          setLoading={setLoading}
          setToast={setToast}
          setToastSetting={setToastSetting}
          IsInformation={() => IsInformation_AfterEmailAndPassword('normal')}
        />
      )}
      {Screen === 'register-verify-email' && (
        <RegisterVerifyEmailScreenProps
          isEmailVerified={isEmailVerified}
          ClassName={ContentClassName}
          Animation={Animation}
          Toast={Toast}
          Loading={Loading}
          setAuthScreen={setScreen}
          setLoading={setLoading}
          setToast={setToast}
          setToastSetting={setToastSetting}
          IsInformation={() => IsInformation_AfterVerifyEmail('normal')}
        />
      )}
      {Screen === 'register-profile-picture' && (
        <RegisterProfilePictureScreenProps
          ClassName={ContentClassName}
          Animation={Animation}
          setSkipDialog={setSkipDialog}
          Toast={Toast}
          setAuthScreen={setScreen}
          setToast={setToast}
          setToastSetting={setToastSetting}
          IsInformation={() => IsInformation_AfterProfilePhoto('normal')}
        />
      )}
      {Screen === 'register-date-of-birth' && (
        <RegisterBirthdayScreenProps
          ClassName={ContentClassName}
          Animation={Animation}
          setSkipDialog={setSkipDialog}
          Toast={Toast}
          setLoading={setLoading}
          setAuthScreen={setScreen}
          setToast={setToast}
          setToastSetting={setToastSetting}
          DateOfBirth={DateOfBirth}
          setDateOfBirth={setDateOfBirth}
          IsInformation={() => IsInformation_AfterBirthday('normal')}
        />
      )}
      {Screen === 'register-gender' && (
        <RegisterGenderScreenProps
          ClassName={ContentClassName}
          Animation={Animation}
          setSkipDialog={setSkipDialog}
          Toast={Toast}
          setFinish={setFinish}
          setLoading={setLoading}
          setAuthScreen={setScreen}
          setToast={setToast}
          setToastSetting={setToastSetting}
          Gender={Gender}
          setGender={setGender}
          IsInformation={() => IsInformation_AfterGender('normal')}
        />
      )} */}
    </AnimatePresence>
  );
}

export default SetupScreenContent;
