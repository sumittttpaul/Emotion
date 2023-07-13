'use client';

import { ClientUserType } from 'authentication/useClientAuth';
import { useUserProfile } from 'hooks/Hooks.UserProfile';

interface IProps {
  Screen: ICheckInfoScreen;
  FirebaseUser: ClientUserType;
  FirebaseLoading: boolean;
  FirebaseError?: Error;
  setErrorType: Dispatch<AuthErrorType>;
  setScreen: Dispatch<AuthScreenType>;
  setMainScreen: Dispatch<MainScreenType>;
  setToast: Dispatch<ToastSettingType>;
}

function CheckInfoHandler({
  Screen,
  FirebaseUser,
  FirebaseLoading,
  FirebaseError,
  setErrorType,
  setScreen,
  setMainScreen,
  setToast,
}: IProps) {
  useUserProfile(
    !FirebaseLoading && FirebaseUser ? FirebaseUser.uid : undefined
  ).then((value) => {
    if (value.userProfile) {
      try {
        const FullName = value.userProfile._data.fullName;
        const PhoneNumber = value.userProfile._data.phoneNumber;
        const EmailAddress = value.userProfile._data.emailAddress;
        const EmailAddressVerified =
          value.userProfile._data.isVerified?.emailAddress;
        const ProfilePicture = value.userProfile._data.photoURL;
        const DateOfBirth = value.userProfile._data.dateOfBirth;
        const Gender = value.userProfile._data.gender;
        if (Screen === 'initial-login-load') {
          if (!FullName || (FullName && FullName.length < 1)) {
            setScreen('register-name');
          } else if (!PhoneNumber || (PhoneNumber && PhoneNumber.length < 1)) {
            setScreen('register-phone');
          } else if (
            !EmailAddress ||
            (EmailAddress && EmailAddress.length < 1)
          ) {
            setScreen('register-email');
          } else if (
            EmailAddress &&
            EmailAddress.length > 0 &&
            !EmailAddressVerified &&
            EmailAddressVerified === false
          ) {
            setScreen('register-verify-email');
          } else if (
            !ProfilePicture ||
            (ProfilePicture && ProfilePicture.length < 1)
          ) {
            setScreen('register-profile-picture');
          } else if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
            setScreen('register-date-of-birth');
          } else if (!Gender || (Gender && Gender.length < 1)) {
            setScreen('register-gender');
          } else if (
            FullName &&
            PhoneNumber &&
            EmailAddress &&
            EmailAddressVerified &&
            ProfilePicture &&
            DateOfBirth &&
            Gender
          ) {
            if (
              FullName.length > 0 &&
              PhoneNumber.length > 0 &&
              EmailAddress.length > 0 &&
              ProfilePicture.length > 0 &&
              DateOfBirth.length > 0 &&
              Gender.length > 0 &&
              EmailAddressVerified === true
            ) {
              setMainScreen('Finish');
            }
          }
        }
        if (Screen === 'after-name') {
          if (!PhoneNumber || (PhoneNumber && PhoneNumber.length < 1)) {
            setScreen('register-phone');
          } else if (
            !EmailAddress ||
            (EmailAddress && EmailAddress.length < 1)
          ) {
            setScreen('register-email');
          } else if (
            EmailAddress &&
            EmailAddress.length > 0 &&
            !EmailAddressVerified &&
            EmailAddressVerified === false
          ) {
            setScreen('register-verify-email');
          } else if (
            !ProfilePicture ||
            (ProfilePicture && ProfilePicture.length < 1)
          ) {
            setScreen('register-profile-picture');
          } else if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
            setScreen('register-date-of-birth');
          } else if (!Gender || (Gender && Gender.length < 1)) {
            setScreen('register-gender');
          } else {
            setMainScreen('Finish');
          }
        }
        if (Screen === 'after-phone') {
          if (!EmailAddress || (EmailAddress && EmailAddress.length < 1)) {
            setScreen('register-email');
          } else if (
            EmailAddress &&
            EmailAddress.length > 0 &&
            !EmailAddressVerified &&
            EmailAddressVerified === false
          ) {
            setScreen('register-verify-email');
          } else if (
            !ProfilePicture ||
            (ProfilePicture && ProfilePicture.length < 1)
          ) {
            setScreen('register-profile-picture');
          } else if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
            setScreen('register-date-of-birth');
          } else if (!Gender || (Gender && Gender.length < 1)) {
            setScreen('register-gender');
          } else {
            setMainScreen('Finish');
          }
        }
        if (Screen === 'after-email') {
          if (
            EmailAddress &&
            EmailAddress.length > 0 &&
            !EmailAddressVerified &&
            EmailAddressVerified === false
          ) {
            setScreen('register-verify-email');
          } else if (
            !ProfilePicture ||
            (ProfilePicture && ProfilePicture.length < 1)
          ) {
            setScreen('register-profile-picture');
          } else if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
            setScreen('register-date-of-birth');
          } else if (!Gender || (Gender && Gender.length < 1)) {
            setScreen('register-gender');
          } else {
            setMainScreen('Finish');
          }
        }
        if (Screen === 'after-verify-email') {
          if (
            !ProfilePicture ||
            (ProfilePicture && ProfilePicture.length < 1)
          ) {
            setScreen('register-profile-picture');
          } else if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
            setScreen('register-date-of-birth');
          } else if (!Gender || (Gender && Gender.length < 1)) {
            setScreen('register-gender');
          } else {
            setMainScreen('Finish');
          }
        }
        if (Screen === 'after-profile-picture') {
          if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
            setScreen('register-date-of-birth');
          } else if (!Gender || (Gender && Gender.length < 1)) {
            setScreen('register-gender');
          } else {
            setMainScreen('Finish');
          }
        }
        if (Screen === 'after-date-of-birth') {
          if (!Gender || (Gender && Gender.length < 1)) {
            setScreen('register-gender');
          } else {
            setMainScreen('Finish');
          }
        }
        if (Screen === 'after-gender') {
          setMainScreen('Finish');
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setMainScreen('Error');
          setErrorType('get-user-failed');
          setToast({
            Title: error.name,
            Description: error.message,
            Type: 'Error',
            Show: false,
          });
        }
      }
    } else if (value.error) {
      setMainScreen('Error');
      setErrorType('get-user-failed');
      setToast({
        Title: value.error.name,
        Description: value.error.message,
        Type: 'Error',
        Show: false,
      });
    }
  });
  if (FirebaseError) {
    setMainScreen('Error');
    setToast({
      Title: FirebaseError.name,
      Description: FirebaseError.message,
      Type: 'Error',
      Show: false,
    });
  }
}

export default CheckInfoHandler;
