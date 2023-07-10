'use client'

import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { IsInformationHandler } from './CheckInfoHandler';
import { LoginPhoneAuthUIProps } from './Screen/Login/Setup.Login.PhoneScreen';
import { LoginEmailAuthUIProps } from './Screen/Login/Setup.Login.EmailScreen';
import { LoginOtherAccountAuthUIProps } from './Screen/Login/Setup.Login.OtherAccountScreen';
import { LoginOTPAuthUIProps } from './Screen/Login/Setup.Login.OTPScreen';
import { LoginPasswordAuthUIProps } from './Screen/Login/Setup.Login.PasswordScreen';
import { LoginForgotPasswordAuthUIProps } from './Screen/Login/Setup.Login.ForgotPasswordScreen';
import { RegisterNameAuthUIProps } from './Screen/Register/Setup.Register.NameScreen';
import { RegisterPhoneAuthUIProps } from './Screen/Register/Setup.Register.PhoneScreen';
import { RegisterOTPAuthUIProps } from './Screen/Register/Setup.Register.OTPScreen';
import { RegisterEmailAuthUIProps } from './Screen/Register/Setup.Register.EmailScreen';
import { RegisterPasswordAuthUIProps } from './Screen/Register/Setup.Register.PasswordScreen';
import { RegisterVerifyEmailAuthUIProps } from './Screen/Register/Setup.Register.VerifyEmailScreen';
import { RegisterProfilePictureAuthUIProps } from './Screen/Register/Setup.Register.ProfilePictureScreen';
import { RegisterBirthdayAuthUIProps } from './Screen/Register/Setup.Register.BirthdayScreen';
import { RegisterGenderAuthUIProps } from './Screen/Register/Setup.Register.GenderScreen';
import AuthContentContainer from '../../container/Auth/AuthContentContainer';
import AuthBodyContainer from '../../container/Auth/AuthBodyContainer';

// Dynamic Imports
const LoginPhoneAuthUI = dynamic<LoginPhoneAuthUIProps>(
  () => import('./Screen/Login/Setup.Login.PhoneScreen').then((x) => x.LoginPhoneAuthUI),
  { ssr: false }
);

const LoginEmailAuthUI = dynamic<LoginEmailAuthUIProps>(
  () => import('./Screen/Login/Setup.Login.EmailScreen').then((x) => x.LoginEmailAuthUI),
  { ssr: false }
);

const LoginOtherAccountAuthUI = dynamic<LoginOtherAccountAuthUIProps>(
  () =>
    import('./Screen/Login/Setup.Login.OtherAccountScreen').then(
      (x) => x.LoginOtherAccountAuthUI
    ),
  { ssr: false }
);

const LoginOTPAuthUI = dynamic<LoginOTPAuthUIProps>(
  () => import('./Screen/Login/Setup.Login.OTPScreen').then((x) => x.LoginOTPAuthUI),
  { ssr: false }
);

const LoginPasswordAuthUI = dynamic<LoginPasswordAuthUIProps>(
  () =>
    import('./Screen/Login/Setup.Login.PasswordScreen').then((x) => x.LoginPasswordAuthUI),
  { ssr: false }
);

const LoginForgotPasswordAuthUI = dynamic<LoginForgotPasswordAuthUIProps>(
  () =>
    import('./Screen/Login/Setup.Login.ForgotPasswordScreen').then(
      (x) => x.LoginForgotPasswordAuthUI
    ),
  { ssr: false }
);

const RegisterNameAuthUI = dynamic<RegisterNameAuthUIProps>(
  () =>
    import('./Screen/Register/Setup.Register.NameScreen').then((x) => x.RegisterNameAuthUI),
  { ssr: false }
);

const RegisterPhoneAuthUI = dynamic<RegisterPhoneAuthUIProps>(
  () =>
    import('./Screen/Register/Setup.Register.PhoneScreen').then(
      (x) => x.RegisterPhoneAuthUI
    ),
  { ssr: false }
);

const RegisterOTPAuthUI = dynamic<RegisterOTPAuthUIProps>(
  () =>
    import('./Screen/Register/Setup.Register.OTPScreen').then((x) => x.RegisterOTPAuthUI),
  { ssr: false }
);

const RegisterEmailAuthUI = dynamic<RegisterEmailAuthUIProps>(
  () =>
    import('./Screen/Register/Setup.Register.EmailScreen').then(
      (x) => x.RegisterEmailAuthUI
    ),
  { ssr: false }
);

const RegisterPasswordAuthUI = dynamic<RegisterPasswordAuthUIProps>(
  () =>
    import('./Screen/Register/Setup.Register.PasswordScreen').then(
      (x) => x.RegisterPasswordAuthUI
    ),
  { ssr: false }
);

const RegisterVerifyEmailAuthUI = dynamic<RegisterVerifyEmailAuthUIProps>(
  () =>
    import('./Screen/Register/Setup.Register.VerifyEmailScreen').then(
      (x) => x.RegisterVerifyEmailAuthUI
    ),
  { ssr: false }
);

const RegisterProfilePictureAuthUI = dynamic<RegisterProfilePictureAuthUIProps>(
  () =>
    import('./Screen/Register/Setup.Register.ProfilePictureScreen').then(
      (x) => x.RegisterProfilePictureAuthUI
    ),
  { ssr: false }
);

const RegisterBirthdayAuthUI = dynamic<RegisterBirthdayAuthUIProps>(
  () =>
    import('./Screen/Register/Setup.Register.BirthdayScreen').then(
      (x) => x.RegisterBirthdayAuthUI
    ),
  { ssr: false }
);

const RegisterGenderAuthUI = dynamic<RegisterGenderAuthUIProps>(
  () =>
    import('./Screen/Register/Setup.Register.GenderScreen').then(
      (x) => x.RegisterGenderAuthUI
    ),
  { ssr: false }
);

/**
 * @author
 * @function @SetupUI
 **/

export const SetupUI: FC = () => {
  const [InitialSlide, setInitialSlide] = useState(0);
  const [SkipDialog, setSkipDialog] = useState(false);
  const [Finish, setFinish] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Toast, setToast] = useState(false);
  const [InitialLoading, setInitialLoading] = useState(true); // true
  const [CheckInfoLoading, setCheckInfoLoading] = useState(true); // true
  const [Error, setError] = useState<AuthErrorType>({
    show: false,
    type: undefined, // undefined
  });
  const [ToastSetting, setToastSetting] = useState<ToastSettingType>({
    Title: '',
    Description: '',
    Type: '',
  });
  const [Screen, setScreen] = useState<AuthScreenType>(null); // null

  const { isLoading, data } = useQuery(
    [cacheKey, FirebaseUser?.uid],
    () => getUserProfile(FirebaseUser?.uid),
    { staleTime: Infinity }
  );
  const userProfile = data as IUserProfile;

  Extra State
  const [FullName, setFullName] = useState('');
  const [EmailAddress, setEmailAddress] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [DateOfBirth, setDateOfBirth] = useState('');
  const [Gender, setGender] = useState('');
  const [ResetCaptcha, setResetCaptcha] = useState(false);
  const [isEmailVerified, setisEmailVerified] = useState<boolean | undefined>(
    undefined
  );

  const SkipDialogClose = () => setSkipDialog(false);

  const ShowToast = (
    title: string,
    desccription: string,
    type: string,
    show: boolean
  ) => {
    setToast(show);
    setToastSetting({
      Title: title,
      Description: desccription,
      Type: type,
    });
  };

  const handleIsInformationContent = (Screen: AuthScreenType) => {
    setInitialSlide(0);
    setScreen(Screen);
    setLoading(false);
    setCheckInfoLoading(false);
  };

  const handleIsformationProps = {
    FirebaseUser: FirebaseUser,
    userProfile: undefined,
    FirebaseLoading: FirebaseLoading,
    handleIsInformationContent: handleIsInformationContent,
    setInitialSlide: setInitialSlide,
    setScreen: setScreen,
    setFinish: setFinish,
    setLoading: setLoading,
    setError: setError,
    setCheckInfoLoading: setCheckInfoLoading,
    ShowToast: ShowToast,
  };

  const IsInformation_AfterLogin = (Screen: AuthScreenType) => {
    handleIsInformationContent(Screen);
  };

  const IsInformation_InitialLoad = (ScreenState: 'initial' | 'normal') => {
    IsInformationHandler({
      AfterScreen: 'initial-load',
      ScreenState: ScreenState,
      ...handleIsformationProps,
    });
  };

  const IsInformation_AfterName = (ScreenState: 'initial' | 'normal') => {
    IsInformationHandler({
      AfterScreen: 'after-name',
      ScreenState: ScreenState,
      ...handleIsformationProps,
    });
  };

  const IsInformation_AfterPhoneAndOTP = (
    ScreenState: 'initial' | 'normal'
  ) => {
    IsInformationHandler({
      AfterScreen: 'after-phone',
      ScreenState: ScreenState,
      ...handleIsformationProps,
    });
  };

  const IsInformation_AfterEmailAndPassword = (
    ScreenState: 'initial' | 'normal'
  ) => {
    IsInformationHandler({
      AfterScreen: 'after-email',
      ScreenState: ScreenState,
      ...handleIsformationProps,
    });
  };

  const IsInformation_AfterVerifyEmail = (
    ScreenState: 'initial' | 'normal'
  ) => {
    IsInformationHandler({
      AfterScreen: 'after-verify-email',
      ScreenState: ScreenState,
      ...handleIsformationProps,
    });
  };

  const IsInformation_AfterProfilePhoto = (
    ScreenState: 'initial' | 'normal'
  ) => {
    IsInformationHandler({
      AfterScreen: 'after-profile-picture',
      ScreenState: ScreenState,
      ...handleIsformationProps,
    });
  };

  const IsInformation_AfterBirthday = (ScreenState: 'initial' | 'normal') => {
    IsInformationHandler({
      AfterScreen: 'after-date-of-birth',
      ScreenState: ScreenState,
      ...handleIsformationProps,
    });
  };

  const IsInformation_AfterGender = (ScreenState: 'initial' | 'normal') => {
    IsInformationHandler({
      AfterScreen: 'after-gender',
      ScreenState: ScreenState,
      ...handleIsformationProps,
    });
  };

  useEffect(() => {
    if (InitialLoading && !FirebaseLoading && !isLoading)
      setInitialLoading(false);
  }, [InitialLoading, FirebaseLoading, isLoading]);

  useEffect(() => {
    if (InitialLoading) return;
    if (FirebaseUser) {
      IsInformation_InitialLoad('initial');
    } else {
      handleIsInformationContent('login-phone');
    }
  }, [InitialLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (data) {
      if (FirebaseUser) {
        if (userProfile._data.fullName) {
          const UserFullName = DecryptData(
            UserProfileEncrytionKey(FirebaseUser.uid, 'FullName'),
            userProfile._data.fullName
          );
          setFullName(UserFullName ? UserFullName : '');
        }
        if (userProfile._data.emailAddress) {
          const UserEmailAddress = DecryptData(
            UserProfileEncrytionKey(FirebaseUser.uid, 'EmailAddress'),
            userProfile._data.emailAddress
          );
          setEmailAddress(UserEmailAddress ? UserEmailAddress : '');
        }
        if (userProfile._data.phoneNumber) {
          const UserPhoneNumber = DecryptData(
            UserProfileEncrytionKey(FirebaseUser.uid, 'PhoneNumber'),
            userProfile._data.phoneNumber
          );
          setPhoneNumber(UserPhoneNumber ? UserPhoneNumber : '');
        }
        if (userProfile._data.dateOfBirth) {
          const UserDateOfBirth = DecryptData(
            UserProfileEncrytionKey(FirebaseUser.uid, 'DateOfBirth'),
            userProfile._data.dateOfBirth
          );
          setDateOfBirth(UserDateOfBirth ? UserDateOfBirth : '');
        }
        if (userProfile._data.gender) {
          const UserGender = DecryptData(
            UserProfileEncrytionKey(FirebaseUser.uid, 'Gender'),
            userProfile._data.gender
          );
          setGender(UserGender ? UserGender : '');
        }
      }
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!FirebaseAuth) return;
    return FirebaseAuth.onIdTokenChanged(async (user) => {
      if (!user) return;
      if (user.emailVerified) setisEmailVerified(true);
    });
  }, []);

  // Class
  const BodyClassName = 'h-full md:h-[652px]';
  const ContainerClassName = 'h-[350px]';
  const ContentClassName = 'h-[300px]';

  // Animation
  const Animation = {
    Initial: { x: 50, opacity: 0 },
    Final: { x: 0, opacity: 1 },
    Transition: { type: 'tween' },
  };

  return (
      <AuthBodyContainer
        ClassName={BodyClassName}
        Animation={Animation}
        InitialSlide={InitialSlide}
        SkipDialogOpen={SkipDialog}
        SkipDialogClose={SkipDialogClose}
        Finish={Finish}
        Error={Error}
        Loading={Loading}
        AuthScreen={Screen}
        ShowToast={Toast}
        setAuthScreen={setScreen}
        ToastSetting={ToastSetting}
        setLoading={setLoading}
        setToast={setToast}
        setToastSetting={setToastSetting}
        setError={setError}
        CheckInfoLoading={CheckInfoLoading}
        Toast={{
          Open: Toast,
          onClose: setToast,
          MessageTitle: ToastSetting.Title,
          MessageDescription: ToastSetting.Description,
          Type: ToastSetting.Type,
        }}
      >
        <AuthContentContainer
          ClassName={ContainerClassName}
          Animation={Animation}
          AuthScreen={Screen}
        >
          <AnimatePresence mode="wait" initial={true}>
            {Screen === 'login-phone' && (
              <LoginPhoneAuthUI
                ClassName={ContentClassName}
                Animation={Animation}
                PhoneNumber={PhoneNumber}
                setPhoneNumber={setPhoneNumber}
                ResetCaptcha={ResetCaptcha}
                setResetCaptcha={setResetCaptcha}
                Toast={Toast}
                Loading={Loading}
                setAuthScreen={setScreen}
                setLoading={setLoading}
                setToast={setToast}
                setToastSetting={setToastSetting}
              />
            )}
            {Screen === 'login-email' && (
              <LoginEmailAuthUI
                ClassName={ContentClassName}
                Animation={Animation}
                EmailAddress={EmailAddress}
                setEmailAddress={setEmailAddress}
                Toast={Toast}
                Loading={Loading}
                setAuthScreen={setScreen}
                setLoading={setLoading}
                setToast={setToast}
                setToastSetting={setToastSetting}
              />
            )}
            {Screen === 'login-others' && (
              <LoginOtherAccountAuthUI
                Animation={Animation}
                Toast={Toast}
                Loading={Loading}
                setAuthScreen={setScreen}
                setToast={setToast}
                setLoading={setLoading}
                setError={setError}
                setToastSetting={setToastSetting}
                IsInformation={IsInformation_AfterLogin}
              />
            )}
            {Screen === 'login-otp' && (
              <LoginOTPAuthUI
                ClassName={ContentClassName}
                Animation={Animation}
                PhoneNumber={PhoneNumber}
                Toast={Toast}
                Loading={Loading}
                setError={setError}
                setResetCaptcha={setResetCaptcha}
                setAuthScreen={setScreen}
                setLoading={setLoading}
                setToast={setToast}
                setToastSetting={setToastSetting}
                IsInformation={IsInformation_AfterLogin}
              />
            )}
            {Screen === 'login-password' && (
              <LoginPasswordAuthUI
                ClassName={ContentClassName}
                Animation={Animation}
                EmailAddress={EmailAddress}
                Toast={Toast}
                Loading={Loading}
                setAuthScreen={setScreen}
                setLoading={setLoading}
                setToast={setToast}
                setToastSetting={setToastSetting}
              />
            )}
            {Screen === 'login-forgot-password' && (
              <LoginForgotPasswordAuthUI
                ClassName={ContentClassName}
                Animation={Animation}
                EmailAddress={EmailAddress}
                Toast={Toast}
                Loading={Loading}
                setAuthScreen={setScreen}
                setLoading={setLoading}
                setToast={setToast}
                setToastSetting={setToastSetting}
              />
            )}
            {Screen === 'register-name' && (
              <RegisterNameAuthUI
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
              <RegisterPhoneAuthUI
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
              <RegisterOTPAuthUI
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
              <RegisterEmailAuthUI
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
                IsInformation={() =>
                  IsInformation_AfterEmailAndPassword('normal')
                }
              />
            )}
            {Screen === 'register-password' && (
              <RegisterPasswordAuthUI
                ClassName={ContentClassName}
                Animation={Animation}
                EmailAddress={EmailAddress}
                Toast={Toast}
                Loading={Loading}
                setAuthScreen={setScreen}
                setLoading={setLoading}
                setToast={setToast}
                setToastSetting={setToastSetting}
                IsInformation={() =>
                  IsInformation_AfterEmailAndPassword('normal')
                }
              />
            )}
            {Screen === 'register-verify-email' && (
              <RegisterVerifyEmailAuthUI
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
              <RegisterProfilePictureAuthUI
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
              <RegisterBirthdayAuthUI
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
              <RegisterGenderAuthUI
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
            )}
          </AnimatePresence>
        </AuthContentContainer>
      </AuthBodyContainer>
  );
};
