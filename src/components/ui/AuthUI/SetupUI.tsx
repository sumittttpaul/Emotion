import dynamic from 'next/dynamic';
import React, { FC, useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import { AuthType } from './AuthType';
import { useAuth } from '../../../firebase/AuthProvider';
import { User, getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AnimatePresence } from 'framer-motion';
import { GetUserData } from '../../../algorithms/AuthDB';
import { DecryptData } from '../../../algorithms/security/CryptionSecurity';
import {
  DOBEncrytionKey,
  EmailEncrytionKey,
  GenderEncrytionKey,
  NameEncrytionKey,
  PhoneEncrytionKey,
} from '../../../algorithms/security/CryptionKey';
import AuthBodyContainer from '../../container/Auth/AuthBodyContainer';
import AuthContentContainer from '../../container/Auth/AuthContentContainer';
import LoginPhoneAuthUI from './Login/Login.PhoneAuthUI';
import { LoginEmailAuthUIProps } from './Login/Login.EmailAuthUI';
import { LoginOtherAccountAuthUIProps } from './Login/Login.OtherAccountAuthUI';
import { LoginOTPAuthUIProps } from './Login/Login.OTPAuthUI';
import { LoginPasswordAuthUIProps } from './Login/Login.PasswordAuthUI';
import { LoginForgotPasswordAuthUIProps } from './Login/Login.ForgotPasswordAuthUI';
import { RegisterNameAuthUIProps } from './Register/Register.NameAuthUI';
import { RegisterPhoneAuthUIProps } from './Register/Register.PhoneAuthUI';
import { RegisterOTPAuthUIProps } from './Register/Register.OTPAuthUI';
import { RegisterEmailAuthUIProps } from './Register/Register.EmailAuthUI';
import { RegisterPasswordAuthUIProps } from './Register/Register.PasswordAuthUI';
import { RegisterVerifyEmailAuthUIProps } from './Register/Register.VerifyEmailAuthUI';
import { RegisterProfilePictureAuthUIProps } from './Register/Register.ProfilePictureAuthUI';
import { RegisterBirthdayAuthUIProps } from './Register/Register.BirthdayAuthUI';
import { RegisterGenderAuthUIProps } from './Register/Register.GenderAuthUI';

// Dynamic Imports
const LoginEmailAuthUI = dynamic<LoginEmailAuthUIProps>(
  () => import('./Login/Login.EmailAuthUI').then((x) => x.LoginEmailAuthUI),
  { ssr: false }
);

const LoginOtherAccountAuthUI = dynamic<LoginOtherAccountAuthUIProps>(
  () =>
    import('./Login/Login.OtherAccountAuthUI').then(
      (x) => x.LoginOtherAccountAuthUI
    ),
  { ssr: false }
);

const LoginOTPAuthUI = dynamic<LoginOTPAuthUIProps>(
  () => import('./Login/Login.OTPAuthUI').then((x) => x.LoginOTPAuthUI),
  { ssr: false }
);

const LoginPasswordAuthUI = dynamic<LoginPasswordAuthUIProps>(
  () =>
    import('./Login/Login.PasswordAuthUI').then((x) => x.LoginPasswordAuthUI),
  { ssr: false }
);

const LoginForgotPasswordAuthUI = dynamic<LoginForgotPasswordAuthUIProps>(
  () =>
    import('./Login/Login.ForgotPasswordAuthUI').then(
      (x) => x.LoginForgotPasswordAuthUI
    ),
  { ssr: false }
);

const RegisterNameAuthUI = dynamic<RegisterNameAuthUIProps>(
  () =>
    import('./Register/Register.NameAuthUI').then((x) => x.RegisterNameAuthUI),
  { ssr: false }
);

const RegisterPhoneAuthUI = dynamic<RegisterPhoneAuthUIProps>(
  () =>
    import('./Register/Register.PhoneAuthUI').then(
      (x) => x.RegisterPhoneAuthUI
    ),
  { ssr: false }
);

const RegisterOTPAuthUI = dynamic<RegisterOTPAuthUIProps>(
  () =>
    import('./Register/Register.OTPAuthUI').then((x) => x.RegisterOTPAuthUI),
  { ssr: false }
);

const RegisterEmailAuthUI = dynamic<RegisterEmailAuthUIProps>(
  () =>
    import('./Register/Register.EmailAuthUI').then(
      (x) => x.RegisterEmailAuthUI
    ),
  { ssr: false }
);

const RegisterPasswordAuthUI = dynamic<RegisterPasswordAuthUIProps>(
  () =>
    import('./Register/Register.PasswordAuthUI').then(
      (x) => x.RegisterPasswordAuthUI
    ),
  { ssr: false }
);

const RegisterVerifyEmailAuthUI = dynamic<RegisterVerifyEmailAuthUIProps>(
  () =>
    import('./Register/Register.VerifyEmailAuthUI').then(
      (x) => x.RegisterVerifyEmailAuthUI
    ),
  { ssr: false }
);

const RegisterProfilePictureAuthUI = dynamic<RegisterProfilePictureAuthUIProps>(
  () =>
    import('./Register/Register.ProfilePictureAuthUI').then(
      (x) => x.RegisterProfilePictureAuthUI
    ),
  { ssr: false }
);

const RegisterBirthdayAuthUI = dynamic<RegisterBirthdayAuthUIProps>(
  () =>
    import('./Register/Register.BirthdayAuthUI').then(
      (x) => x.RegisterBirthdayAuthUI
    ),
  { ssr: false }
);

const RegisterGenderAuthUI = dynamic<RegisterGenderAuthUIProps>(
  () =>
    import('./Register/Register.GenderAuthUI').then(
      (x) => x.RegisterGenderAuthUI
    ),
  { ssr: false }
);

interface IProps {}

/**
 * @author
 * @function @SetupUI
 **/

export const SetupUI: FC<IProps> = (props) => {
  const FirebaseAuth = getAuth(firebase.app());
  const [user, loading] = useAuthState(FirebaseAuth);
  const [InitialSlide, setInitialSlide] = useState(0);
  const [SkipDialog, setSkipDialog] = useState(false);
  const [Finish, setFinish] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [InformationCheckLoading, setInformationCheckLoading] = useState(false); //true
  const [Toast, setToast] = useState(false);
  const [ToastSetting, setToastSetting] = useState({
    Title: '',
    Description: '',
    Type: '',
  });
  const [Screen, setScreen] = useState<AuthType>('login-phone');

  // User
  const FirebaseUser = useAuth();

  // Extra State
  const [FullName, setFullName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [EmailAddress, setEmailAddress] = useState('');
  const [VerifyEmailAddress, setVerifyEmailAddress] = useState(false);
  const [ProfilePicture, setProfilePicture] = useState('');
  const [DateOfBirth, setDateOfBirth] = useState('');
  const [Gender, setGender] = useState('');

  const [ResetCaptcha, setResetCaptcha] = useState(false);

  const SkipDialogClose = () => setSkipDialog(false);

  const isEmailVerified = FirebaseUser?.emailVerified || false;

  const photoURL = FirebaseUser?.photoURL || '';

  const handleIsInformationContent = (Screen: AuthType) => {
    setInitialSlide(0);
    setScreen(Screen);
    setLoading(false);
    setInformationCheckLoading(false);
  };

  const handleIsInformation = (
    UserFullName: string | undefined,
    UserPhoneNumber: string | undefined,
    UserEmailAddress: string | undefined,
    UserEmailAddressVerified: boolean | undefined,
    UserProfilePicture: string | null,
    UserDateOfBirth: string | undefined,
    UserGender: string | undefined,
    AfterScreen:
      | 'after-login'
      | 'after-name'
      | 'after-phone'
      | 'after-email'
      | 'after-verify-email'
      | 'after-profile-picture'
      | 'after-date-of-birth'
  ) => {
    if (AfterScreen === 'after-login') {
      if (!UserFullName || (UserFullName && UserFullName.length < 1)) {
        handleIsInformationContent('register-name');
      } else if (
        !UserPhoneNumber ||
        (UserPhoneNumber && UserPhoneNumber.length < 1)
      ) {
        handleIsInformationContent('register-phone');
      } else if (
        !UserEmailAddress ||
        (UserEmailAddress && UserEmailAddress.length < 1)
      ) {
        handleIsInformationContent('register-email');
      } else if (
        !UserEmailAddressVerified &&
        UserEmailAddressVerified === false
      ) {
        handleIsInformationContent('register-verify-email');
      } else if (
        !UserProfilePicture ||
        (UserProfilePicture && UserProfilePicture.length < 1)
      ) {
        handleIsInformationContent('register-profile-picture');
      } else if (
        !UserDateOfBirth ||
        (UserDateOfBirth && UserDateOfBirth.length < 1)
      ) {
        handleIsInformationContent('register-date-of-birth');
      } else if (!UserGender || (UserGender && UserGender.length < 1)) {
        handleIsInformationContent('register-gender');
      } else if (
        UserFullName &&
        UserPhoneNumber &&
        UserEmailAddress &&
        UserEmailAddressVerified &&
        UserProfilePicture &&
        UserDateOfBirth &&
        UserGender
      ) {
        if (
          UserFullName.length > 0 &&
          UserPhoneNumber.length > 0 &&
          UserEmailAddress.length > 0 &&
          UserProfilePicture.length > 0 &&
          UserDateOfBirth.length > 0 &&
          UserGender.length > 0 &&
          UserEmailAddressVerified === true
        ) {
          setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setInformationCheckLoading(false);
        }
      }
    }
    if (AfterScreen === 'after-name') {
      if (!UserPhoneNumber || (UserPhoneNumber && UserPhoneNumber.length < 1)) {
        handleIsInformationContent('register-phone');
      } else if (
        !UserEmailAddress ||
        (UserEmailAddress && UserEmailAddress.length < 1)
      ) {
        handleIsInformationContent('register-email');
      } else if (
        !UserEmailAddressVerified &&
        UserEmailAddressVerified === false
      ) {
        handleIsInformationContent('register-verify-email');
      } else if (
        !UserProfilePicture ||
        (UserProfilePicture && UserProfilePicture.length < 1)
      ) {
        handleIsInformationContent('register-profile-picture');
      } else if (
        !UserDateOfBirth ||
        (UserDateOfBirth && UserDateOfBirth.length < 1)
      ) {
        handleIsInformationContent('register-date-of-birth');
      } else if (!UserGender || (UserGender && UserGender.length < 1)) {
        handleIsInformationContent('register-gender');
      } else if (
        UserFullName &&
        UserPhoneNumber &&
        UserEmailAddress &&
        UserEmailAddressVerified &&
        UserProfilePicture &&
        UserDateOfBirth &&
        UserGender
      ) {
        if (
          UserFullName.length > 0 &&
          UserPhoneNumber.length > 0 &&
          UserEmailAddress.length > 0 &&
          UserProfilePicture.length > 0 &&
          UserDateOfBirth.length > 0 &&
          UserGender.length > 0 &&
          UserEmailAddressVerified === true
        ) {
          setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setInformationCheckLoading(false);
        }
      }
    }
    if (AfterScreen === 'after-phone') {
      if (
        !UserEmailAddress ||
        (UserEmailAddress && UserEmailAddress.length < 1)
      ) {
        handleIsInformationContent('register-email');
      } else if (
        !UserEmailAddressVerified &&
        UserEmailAddressVerified === false
      ) {
        handleIsInformationContent('register-verify-email');
      } else if (
        !UserProfilePicture ||
        (UserProfilePicture && UserProfilePicture.length < 1)
      ) {
        handleIsInformationContent('register-profile-picture');
      } else if (
        !UserDateOfBirth ||
        (UserDateOfBirth && UserDateOfBirth.length < 1)
      ) {
        handleIsInformationContent('register-date-of-birth');
      } else if (!UserGender || (UserGender && UserGender.length < 1)) {
        handleIsInformationContent('register-gender');
      } else if (
        UserFullName &&
        UserPhoneNumber &&
        UserEmailAddress &&
        UserEmailAddressVerified &&
        UserProfilePicture &&
        UserDateOfBirth &&
        UserGender
      ) {
        if (
          UserFullName.length > 0 &&
          UserPhoneNumber.length > 0 &&
          UserEmailAddress.length > 0 &&
          UserProfilePicture.length > 0 &&
          UserDateOfBirth.length > 0 &&
          UserGender.length > 0 &&
          UserEmailAddressVerified === true
        ) {
          setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setInformationCheckLoading(false);
        }
      }
    }
    if (AfterScreen === 'after-email') {
      if (!UserEmailAddressVerified && UserEmailAddressVerified === false) {
        handleIsInformationContent('register-verify-email');
      } else if (
        !UserProfilePicture ||
        (UserProfilePicture && UserProfilePicture.length < 1)
      ) {
        handleIsInformationContent('register-profile-picture');
      } else if (
        !UserDateOfBirth ||
        (UserDateOfBirth && UserDateOfBirth.length < 1)
      ) {
        handleIsInformationContent('register-date-of-birth');
      } else if (!UserGender || (UserGender && UserGender.length < 1)) {
        handleIsInformationContent('register-gender');
      } else if (
        UserFullName &&
        UserPhoneNumber &&
        UserEmailAddress &&
        UserEmailAddressVerified &&
        UserProfilePicture &&
        UserDateOfBirth &&
        UserGender
      ) {
        if (
          UserFullName.length > 0 &&
          UserPhoneNumber.length > 0 &&
          UserEmailAddress.length > 0 &&
          UserProfilePicture.length > 0 &&
          UserDateOfBirth.length > 0 &&
          UserGender.length > 0 &&
          UserEmailAddressVerified === true
        ) {
          setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setInformationCheckLoading(false);
        }
      }
    }
    if (AfterScreen === 'after-verify-email') {
      if (
        !UserProfilePicture ||
        (UserProfilePicture && UserProfilePicture.length < 1)
      ) {
        handleIsInformationContent('register-profile-picture');
      } else if (
        !UserDateOfBirth ||
        (UserDateOfBirth && UserDateOfBirth.length < 1)
      ) {
        handleIsInformationContent('register-date-of-birth');
      } else if (!UserGender || (UserGender && UserGender.length < 1)) {
        handleIsInformationContent('register-gender');
      } else if (
        UserFullName &&
        UserPhoneNumber &&
        UserEmailAddress &&
        UserEmailAddressVerified &&
        UserProfilePicture &&
        UserDateOfBirth &&
        UserGender
      ) {
        if (
          UserFullName.length > 0 &&
          UserPhoneNumber.length > 0 &&
          UserEmailAddress.length > 0 &&
          UserProfilePicture.length > 0 &&
          UserDateOfBirth.length > 0 &&
          UserGender.length > 0 &&
          UserEmailAddressVerified === true
        ) {
          setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setInformationCheckLoading(false);
        }
      }
    }
    if (AfterScreen === 'after-profile-picture') {
      if (!UserDateOfBirth || (UserDateOfBirth && UserDateOfBirth.length < 1)) {
        handleIsInformationContent('register-date-of-birth');
      } else if (!UserGender || (UserGender && UserGender.length < 1)) {
        handleIsInformationContent('register-gender');
      } else if (
        UserFullName &&
        UserPhoneNumber &&
        UserEmailAddress &&
        UserEmailAddressVerified &&
        UserProfilePicture &&
        UserDateOfBirth &&
        UserGender
      ) {
        if (
          UserFullName.length > 0 &&
          UserPhoneNumber.length > 0 &&
          UserEmailAddress.length > 0 &&
          UserProfilePicture.length > 0 &&
          UserDateOfBirth.length > 0 &&
          UserGender.length > 0 &&
          UserEmailAddressVerified === true
        ) {
          setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setInformationCheckLoading(false);
        }
      }
    }
    if (AfterScreen === 'after-date-of-birth') {
      if (!UserGender || (UserGender && UserGender.length < 1)) {
        handleIsInformationContent('register-gender');
      } else if (
        UserFullName &&
        UserPhoneNumber &&
        UserEmailAddress &&
        UserEmailAddressVerified &&
        UserProfilePicture &&
        UserDateOfBirth &&
        UserGender
      ) {
        if (
          UserFullName.length > 0 &&
          UserPhoneNumber.length > 0 &&
          UserEmailAddress.length > 0 &&
          UserProfilePicture.length > 0 &&
          UserDateOfBirth.length > 0 &&
          UserGender.length > 0 &&
          UserEmailAddressVerified === true
        ) {
          setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setInformationCheckLoading(false);
        }
      }
    }
  };

  const IsInformationFilledAfterLogin = () => {
    handleIsInformation(
      FullName,
      PhoneNumber,
      EmailAddress,
      VerifyEmailAddress,
      ProfilePicture,
      DateOfBirth,
      Gender,
      'after-login'
    );
  };

  const IsInformationFilledAfterName = () => {
    handleIsInformation(
      FullName,
      PhoneNumber,
      EmailAddress,
      VerifyEmailAddress,
      ProfilePicture,
      DateOfBirth,
      Gender,
      'after-name'
    );
  };

  const IsInformationFilledAfterPhoneAndOTP = () => {
    handleIsInformation(
      FullName,
      PhoneNumber,
      EmailAddress,
      VerifyEmailAddress,
      ProfilePicture,
      DateOfBirth,
      Gender,
      'after-phone'
    );
  };

  const IsInformationFilledAfterEmailAndPassword = () => {
    handleIsInformation(
      FullName,
      PhoneNumber,
      EmailAddress,
      VerifyEmailAddress,
      ProfilePicture,
      DateOfBirth,
      Gender,
      'after-email'
    );
  };

  const IsInformationFilledAfterVerifyEmail = () => {
    handleIsInformation(
      FullName,
      PhoneNumber,
      EmailAddress,
      VerifyEmailAddress,
      ProfilePicture,
      DateOfBirth,
      Gender,
      'after-verify-email'
    );
  };

  const IsInformationFilledAfterProfilePhoto = () => {
    handleIsInformation(
      FullName,
      PhoneNumber,
      EmailAddress,
      VerifyEmailAddress,
      ProfilePicture,
      DateOfBirth,
      Gender,
      'after-profile-picture'
    );
  };

  const IsInformationFilledAfterBirthday = () => {
    handleIsInformation(
      FullName,
      PhoneNumber,
      EmailAddress,
      VerifyEmailAddress,
      ProfilePicture,
      DateOfBirth,
      Gender,
      'after-date-of-birth'
    );
  };

  // useEffect(() => {
  //   if (!loading) {
  //     if (!FirebaseUser) {
  //       handleIsInformationContent('login-phone');
  //     } else if (FirebaseUser) {
  //       GetUserData(FirebaseUser.uid).then((value) => {
  //         const UserName = value.FullName;
  //         const UserPhone = value.PhoneNumber;
  //         const UserEmail = value.EmailAddress;
  //         const UserEmailVerified = FirebaseUser.emailVerified;
  //         const UserPhoto = FirebaseUser.photoURL;
  //         const UserDOB = value.DateOfBirth;
  //         const UserGender = value.Gender;
  //         setFullName(
  //           UserName && UserName.length > 0
  //             ? DecryptData(UserName, NameEncrytionKey(FirebaseUser.uid))
  //             : ''
  //         );
  //         setPhoneNumber(
  //           UserPhone && UserPhone.length > 0
  //             ? DecryptData(UserPhone, PhoneEncrytionKey(FirebaseUser.uid))
  //             : ''
  //         );
  //         setEmailAddress(
  //           UserEmail && UserEmail.length > 0
  //             ? DecryptData(UserEmail, EmailEncrytionKey(FirebaseUser.uid))
  //             : ''
  //         );
  //         setDateOfBirth(
  //           UserDOB && UserDOB.length > 0
  //             ? DecryptData(UserDOB, DOBEncrytionKey(FirebaseUser.uid))
  //             : ''
  //         );
  //         setGender(
  //           UserGender && UserGender.length > 0
  //             ? DecryptData(UserGender, GenderEncrytionKey(FirebaseUser.uid))
  //             : ''
  //         );
  //         handleIsInformation(
  //           UserName,
  //           UserPhone,
  //           UserEmail,
  //           UserEmailVerified,
  //           UserPhoto,
  //           UserDOB,
  //           UserGender,
  //           'after-login'
  //         );
  //       });
  //     }
  //   }
  // }, [loading]);

  useEffect(() => {
    setVerifyEmailAddress(isEmailVerified);
    setProfilePicture(photoURL);
  }, [isEmailVerified, photoURL]);

  // Class
  const ContentClassName = 'h-[300px]';
  const ContainerClassName = 'h-[350px]';

  return (
    <AuthBodyContainer
      InitialSlide={InitialSlide}
      SkipDialogOpen={SkipDialog}
      SkipDialogClose={SkipDialogClose}
      Finish={Finish}
      InformationCheckLoading={InformationCheckLoading}
      Loading={Loading}
      AuthScreen={Screen}
      Toast={{
        Open: Toast,
        onClose: setToast,
        MessageTitle: ToastSetting.Title,
        MessageDescription: ToastSetting.Description,
        Type: ToastSetting.Type,
      }}
    >
      <AuthContentContainer ClassName={ContainerClassName} AuthScreen={Screen}>
        <AnimatePresence mode="sync" initial={true}>
          {Screen === 'login-phone' && (
            <LoginPhoneAuthUI
              ClassName={ContentClassName}
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
              Toast={Toast}
              Loading={Loading}
              setAuthScreen={setScreen}
              setLoading={setLoading}
              setToast={setToast}
              setToastSetting={setToastSetting}
              setFullName={setFullName}
              setEmailAddress={setEmailAddress}
              setPhoneNumber={setPhoneNumber}
              IsInformationFilled={IsInformationFilledAfterLogin}
            />
          )}
          {Screen === 'login-otp' && (
            <LoginOTPAuthUI
              ClassName={ContentClassName}
              PhoneNumber={PhoneNumber}
              Toast={Toast}
              Loading={Loading}
              setResetCaptcha={setResetCaptcha}
              setAuthScreen={setScreen}
              setLoading={setLoading}
              setToast={setToast}
              setToastSetting={setToastSetting}
              IsInformationFilled={IsInformationFilledAfterLogin}
            />
          )}
          {Screen === 'login-password' && (
            <LoginPasswordAuthUI
              ClassName={ContentClassName}
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
              setSkipDialog={setSkipDialog}
              Toast={Toast}
              Loading={Loading}
              setAuthScreen={setScreen}
              setLoading={setLoading}
              setToast={setToast}
              setToastSetting={setToastSetting}
              FullName={FullName}
              setFullName={setFullName}
              IsInformationFilledAfterName={IsInformationFilledAfterName}
            />
          )}
          {Screen === 'register-phone' && (
            <RegisterPhoneAuthUI
              ClassName={ContentClassName}
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
              IsInformationFilledBeforePhoneAndOTP={
                IsInformationFilledAfterLogin
              }
              IsInformationFilledAfterPhoneAndOTP={
                IsInformationFilledAfterPhoneAndOTP
              }
            />
          )}
          {Screen === 'register-otp' && (
            <RegisterOTPAuthUI
              ClassName={ContentClassName}
              PhoneNumber={PhoneNumber}
              Toast={Toast}
              Loading={Loading}
              setResetCaptcha={setResetCaptcha}
              setAuthScreen={setScreen}
              setLoading={setLoading}
              setToast={setToast}
              setToastSetting={setToastSetting}
              IsInformationFilledAfterPhoneAndOTP={
                IsInformationFilledAfterPhoneAndOTP
              }
            />
          )}
          {Screen === 'register-email' && (
            <RegisterEmailAuthUI
              ClassName={ContentClassName}
              setSkipDialog={setSkipDialog}
              EmailAddress={EmailAddress}
              setEmailAddress={setEmailAddress}
              Toast={Toast}
              Loading={Loading}
              setAuthScreen={setScreen}
              setLoading={setLoading}
              setToast={setToast}
              setToastSetting={setToastSetting}
              IsInformationFilledBeforeEmailAndPassword={
                IsInformationFilledAfterLogin
              }
              IsInformationFilledAfterEmailAndPassword={
                IsInformationFilledAfterEmailAndPassword
              }
            />
          )}
          {Screen === 'register-password' && (
            <RegisterPasswordAuthUI
              ClassName={ContentClassName}
              EmailAddress={EmailAddress}
              Toast={Toast}
              Loading={Loading}
              setAuthScreen={setScreen}
              setLoading={setLoading}
              setToast={setToast}
              setToastSetting={setToastSetting}
              IsInformationFilledAfterEmailAndPassword={
                IsInformationFilledAfterEmailAndPassword
              }
            />
          )}
          {Screen === 'register-verify-email' && (
            <RegisterVerifyEmailAuthUI
              ClassName={ContentClassName}
              isEmailVerified={VerifyEmailAddress}
              Toast={Toast}
              Loading={Loading}
              setAuthScreen={setScreen}
              setLoading={setLoading}
              setToast={setToast}
              setToastSetting={setToastSetting}
              IsInformationFilledBeforeVerifyEmail={
                IsInformationFilledAfterLogin
              }
              IsInformationFilledAfterVerifyEmail={
                IsInformationFilledAfterVerifyEmail
              }
            />
          )}
          {Screen === 'register-profile-picture' && (
            <RegisterProfilePictureAuthUI
              ClassName={ContentClassName}
              setSkipDialog={setSkipDialog}
              Toast={Toast}
              setAuthScreen={setScreen}
              setToast={setToast}
              setToastSetting={setToastSetting}
              IsInformationFilledBeforeProfilePhoto={
                IsInformationFilledAfterLogin
              }
              IsInformationFilledAfterProfilePhoto={
                IsInformationFilledAfterProfilePhoto
              }
            />
          )}
          {Screen === 'register-date-of-birth' && (
            <RegisterBirthdayAuthUI
              ClassName={ContentClassName}
              setSkipDialog={setSkipDialog}
              Toast={Toast}
              setLoading={setLoading}
              setAuthScreen={setScreen}
              setToast={setToast}
              setToastSetting={setToastSetting}
              DateOfBirth={DateOfBirth}
              setDateOfBirth={setDateOfBirth}
              IsInformationFilledBeforeBirthday={IsInformationFilledAfterLogin}
              IsInformationFilledAfterBirthday={
                IsInformationFilledAfterBirthday
              }
            />
          )}
          {Screen === 'register-gender' && (
            <RegisterGenderAuthUI
              ClassName={ContentClassName}
              setSkipDialog={setSkipDialog}
              Toast={Toast}
              setFinish={setFinish}
              setLoading={setLoading}
              setAuthScreen={setScreen}
              setToast={setToast}
              setToastSetting={setToastSetting}
              Gender={Gender}
              setGender={setGender}
              IsInformationFilledBeforeGender={IsInformationFilledAfterLogin}
            />
          )}
        </AnimatePresence>
      </AuthContentContainer>
    </AuthBodyContainer>
  );
};
