import dynamic from 'next/dynamic';
import { ToastHook } from 'hooks/Hooks.Toast';
import { AnimatePresence } from 'framer-motion';
import CheckInfoHandler from 'functions/CheckInfoHandler';
import useClientAuth from 'authentication/useClientAuth';

const SetupLoginPhoneScreen = dynamic<SetupLoginPhoneScreenProps>(
  () => import('interfaces/Setup/Screen/Login/Setup.Screen.Login.Phone'),
  { ssr: false },
);

const SetupLoginEmailScreen = dynamic<SetupLoginEmailScreenProps>(
  () => import('interfaces/Setup/Screen/Login/Setup.Screen.Login.Email'),
  { ssr: false },
);

const SetupLoginOtherAccountScreen = dynamic<SetupLoginOtherAccountScreenProps>(
  () => import('interfaces/Setup/Screen/Login/Setup.Screen.Login.OtherAccount'),
  { ssr: false },
);

const SetupLoginOTPScreen = dynamic<SetupLoginOTPScreenProps>(
  () => import('interfaces/Setup/Screen/Login/Setup.Screen.Login.OTP'),
  { ssr: false },
);

const SetupLoginPasswordScreen = dynamic<SetupLoginPasswordScreenProps>(
  () => import('interfaces/Setup/Screen/Login/Setup.Screen.Login.Password'),
  { ssr: false },
);

const SetupLoginForgotPasswordScreen =
  dynamic<SetupLoginForgotPasswordScreenProps>(
    () =>
      import('interfaces/Setup/Screen/Login/Setup.Screen.Login.ForgotPassword'),
    { ssr: false },
  );

const SetupRegisterNameScreen = dynamic<SetupRegisterNameScreenProps>(
  () => import('interfaces/Setup/Screen/Register/Setup.Screen.Register.Name'),
  { ssr: false },
);

const SetupRegisterPhoneScreen = dynamic<SetupRegisterPhoneScreenProps>(
  () => import('interfaces/Setup/Screen/Register/Setup.Screen.Register.Phone'),
  { ssr: false },
);

const SetupRegisterOTPScreen = dynamic<SetupRegisterOTPScreenProps>(
  () => import('interfaces/Setup/Screen/Register/Setup.Screen.Register.OTP'),
  { ssr: false },
);

const SetupRegisterEmailScreen = dynamic<SetupRegisterEmailScreenProps>(
  () => import('interfaces/Setup/Screen/Register/Setup.Screen.Register.Email'),
  { ssr: false },
);

const SetupRegisterPasswordScreen = dynamic<SetupRegisterPasswordScreenProps>(
  () =>
    import('interfaces/Setup/Screen/Register/Setup.Screen.Register.Password'),
  { ssr: false },
);

const SetupRegisterVerifyEmailScreen =
  dynamic<SetupRegisterVerifyEmailScreenProps>(
    () =>
      import(
        'interfaces/Setup/Screen/Register/Setup.Screen.Register.VerifyEmail'
      ),
    { ssr: false },
  );

const SetupRegisterProfilePictureScreen =
  dynamic<SetupRegisterProfilePictureScreenProps>(
    () =>
      import(
        'interfaces/Setup/Screen/Register/Setup.Screen.Register.ProfilePicture'
      ),
    { ssr: false },
  );

const SetupRegisterBirthdayScreen = dynamic<SetupRegisterBirthdayScreenProps>(
  () =>
    import('interfaces/Setup/Screen/Register/Setup.Screen.Register.Birthday'),
  { ssr: false },
);

const SetupRegisterGenderScreen = dynamic<SetupRegisterGenderScreenProps>(
  () => import('interfaces/Setup/Screen/Register/Setup.Screen.Register.Gender'),
  { ssr: false },
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
    <div className={`${AnimationDivClassName} relative flex w-full`}>
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
      {Loading && (
        <div className="absolute top-0 z-[1] h-full w-full bg-secondary-theme/50 " />
      )}
    </div>
  );
}

export default SetupScreenContent;
