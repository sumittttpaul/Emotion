import dynamic from 'next/dynamic';
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
import CheckInfoHandler from 'functions/CheckInfoHandler';
import useClientAuth from 'authentication/useClientAuth';
import { ToastHook } from 'hooks/Hooks.Toast';

const SetupLoginPhoneScreen = dynamic<SetupLoginPhoneScreenProps>(
  () => import('components/ui/SetupUI/Screen/Login/Setup.Login.PhoneScreen'),
  { ssr: false }
);

const SetupLoginEmailScreen = dynamic<SetupLoginEmailScreenProps>(
  () => import('components/ui/SetupUI/Screen/Login/Setup.Login.EmailScreen'),
  { ssr: false }
);

const SetupLoginOtherAccountScreen = dynamic<SetupLoginOtherAccountScreenProps>(
  () =>
    import('components/ui/SetupUI/Screen/Login/Setup.Login.OtherAccountScreen'),
  { ssr: false }
);

const SetupLoginOTPScreen = dynamic<SetupLoginOTPScreenProps>(
  () => import('components/ui/SetupUI/Screen/Login/Setup.Login.OTPScreen'),
  { ssr: false }
);

const SetupLoginPasswordScreen = dynamic<SetupLoginPasswordScreenProps>(
  () => import('components/ui/SetupUI/Screen/Login/Setup.Login.PasswordScreen'),
  { ssr: false }
);

const SetupLoginForgotPasswordScreen =
  dynamic<SetupLoginForgotPasswordScreenProps>(
    () =>
      import(
        'components/ui/SetupUI/Screen/Login/Setup.Login.ForgotPasswordScreen'
      ),
    { ssr: false }
  );

const SetupRegisterNameScreen = dynamic<SetupRegisterNameScreenProps>(
  () =>
    import('components/ui/SetupUI/Screen/Register/Setup.Register.NameScreen'),
  { ssr: false }
);

const SetupRegisterPhoneScreen = dynamic<SetupRegisterPhoneScreenProps>(
  () =>
    import('components/ui/SetupUI/Screen/Register/Setup.Register.PhoneScreen'),
  { ssr: false }
);

const SetupRegisterOTPScreen = dynamic<SetupRegisterOTPScreenProps>(
  () =>
    import('components/ui/SetupUI/Screen/Register/Setup.Register.OTPScreen'),
  { ssr: false }
);

const SetupRegisterEmailScreen = dynamic<SetupRegisterEmailScreenProps>(
  () =>
    import('components/ui/SetupUI/Screen/Register/Setup.Register.EmailScreen'),
  { ssr: false }
);

const SetupRegisterPasswordScreen = dynamic<SetupRegisterPasswordScreenProps>(
  () =>
    import(
      'components/ui/SetupUI/Screen/Register/Setup.Register.PasswordScreen'
    ),
  { ssr: false }
);

const SetupRegisterVerifyEmailScreen =
  dynamic<SetupRegisterVerifyEmailScreenProps>(
    () =>
      import(
        'components/ui/SetupUI/Screen/Register/Setup.Register.VerifyEmailScreen'
      ),
    { ssr: false }
  );

const SetupRegisterProfilePictureScreen =
  dynamic<SetupRegisterProfilePictureScreenProps>(
    () =>
      import(
        'components/ui/SetupUI/Screen/Register/Setup.Register.ProfilePictureScreen'
      ),
    { ssr: false }
  );

const SetupRegisterBirthdayScreen = dynamic<SetupRegisterBirthdayScreenProps>(
  () =>
    import(
      'components/ui/SetupUI/Screen/Register/Setup.Register.BirthdayScreen'
    ),
  { ssr: false }
);

const SetupRegisterGenderScreen = dynamic<SetupRegisterGenderScreenProps>(
  () =>
    import('components/ui/SetupUI/Screen/Register/Setup.Register.GenderScreen'),
  { ssr: false }
);

interface IProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  Screen: AuthScreenType;
  ResetCaptcha: boolean;
  Loading: boolean;
  setLoading: Dispatch<boolean>;
  setSkipDialog: Dispatch<boolean>;
  setResetCaptcha: Dispatch<boolean>;
  setScreen: Dispatch<AuthScreenType>;
  setErrorType: Dispatch<AuthErrorType>;
  setMainScreen: Dispatch<AuthMainScreenType>;
}

function SetupScreenContent({
  ContentClassName,
  AnimationDivClassName,
  Animation,
  Screen,
  Loading,
  ResetCaptcha,
  setSkipDialog,
  setScreen,
  setErrorType,
  setMainScreen,
  setLoading,
  setResetCaptcha,
}: IProps) {
  const { FirebaseUser, FirebaseLoading, FirebaseError } = useClientAuth();
  const { setToast } = ToastHook();

  const CheckInfoData = {
    FirebaseUser: FirebaseUser,
    FirebaseLoading: FirebaseLoading,
    FirebaseError: FirebaseError,
    setErrorType: setErrorType,
    setScreen: setScreen,
    setMainScreen: setMainScreen,
    setToast: setToast,
  };

  const SetCheckInfo = (Screen: ICheckInfoScreen) => {
    CheckInfoHandler({ ...CheckInfoData, Screen: Screen });
  };

  return (
    <div className={`${AnimationDivClassName} w-full flex`}>
      <AnimatePresence mode="wait" initial={true}>
        {Screen === 'login-phone' && (
          <SetupLoginPhoneScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            Loading={Loading}
            ResetCaptcha={ResetCaptcha}
            setScreen={setScreen}
            setLoading={setLoading}
            setResetCaptcha={setResetCaptcha}
          />
        )}
        {Screen === 'login-email' && (
          <SetupLoginEmailScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            Loading={Loading}
            setScreen={setScreen}
          />
        )}
        {Screen === 'login-others' && (
          <SetupLoginOtherAccountScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            setScreen={setScreen}
            setLoading={setLoading}
            setErrorType={setErrorType}
            setMainScreen={setMainScreen}
            CheckInfoHandler={() => SetCheckInfo('initial-login-load')}
          />
        )}
        {Screen === 'login-otp' && (
          <SetupLoginOTPScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            Loading={Loading}
            setScreen={setScreen}
            setLoading={setLoading}
            setErrorType={setErrorType}
            setMainScreen={setMainScreen}
            setResetCaptcha={setResetCaptcha}
            CheckInfoHandler={() => SetCheckInfo('initial-login-load')}
          />
        )}
        {Screen === 'login-password' && (
          <SetupLoginPasswordScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            Loading={Loading}
            setScreen={setScreen}
            setLoading={setLoading}
          />
        )}
        {Screen === 'login-forgot-password' && (
          <SetupLoginForgotPasswordScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            setScreen={setScreen}
            setLoading={setLoading}
          />
        )}
        {Screen === 'register-name' && (
          <SetupRegisterNameScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            Loading={Loading}
            setLoading={setLoading}
            setSkipDialog={setSkipDialog}
            CheckInfoHandler={() => SetCheckInfo('after-name')}
          />
        )}
        {Screen === 'register-phone' && (
          <SetupRegisterPhoneScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            Loading={Loading}
            ResetCaptcha={ResetCaptcha}
            setScreen={setScreen}
            setLoading={setLoading}
            setResetCaptcha={setResetCaptcha}
            setSkipDialog={setSkipDialog}
            CheckInfoHandler={() => SetCheckInfo('after-phone')} // For "I will add later" button
          />
        )}
        {Screen === 'register-otp' && (
          <SetupRegisterOTPScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            Loading={Loading}
            setScreen={setScreen}
            setLoading={setLoading}
            setResetCaptcha={setResetCaptcha}
            CheckInfoHandler={() => SetCheckInfo('after-phone')}
          />
        )}
        {Screen === 'register-email' && (
          <SetupRegisterEmailScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            Loading={Loading}
            setScreen={setScreen}
            setLoading={setLoading}
            setSkipDialog={setSkipDialog}
            CheckInfoHandler={() => SetCheckInfo('after-email')} // For "I will add later" button
          />
        )}
        {Screen === 'register-password' && (
          <SetupRegisterPasswordScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            Loading={Loading}
            setLoading={setLoading}
            setScreen={setScreen}
            CheckInfoHandler={() => SetCheckInfo('after-email')}
          />
        )}
        {Screen === 'register-verify-email' && (
          <SetupRegisterVerifyEmailScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            setLoading={setLoading}
            CheckInfoHandler={() => SetCheckInfo('after-verify-email')}
          />
        )}
        {Screen === 'register-profile-picture' && (
          <SetupRegisterProfilePictureScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            setScreen={setScreen}
            setSkipDialog={setSkipDialog}
            CheckInfoHandler={() => SetCheckInfo('after-profile-picture')}
          />
        )}
        {Screen === 'register-date-of-birth' && (
          <SetupRegisterBirthdayScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            setLoading={setLoading}
            setScreen={setScreen}
            setSkipDialog={setSkipDialog}
            CheckInfoHandler={() => SetCheckInfo('after-date-of-birth')}
          />
        )}
        {Screen === 'register-gender' && (
          <SetupRegisterGenderScreen
            AnimationDivClassName={AnimationDivClassName}
            ContentClassName={ContentClassName}
            Animation={Animation}
            setLoading={setLoading}
            setScreen={setScreen}
            setSkipDialog={setSkipDialog}
            CheckInfoHandler={() => SetCheckInfo('after-gender')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default SetupScreenContent;
