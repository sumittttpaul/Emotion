'use client';

import { SetupHook } from 'hooks/Hooks.Setup';
import { ToastHook } from 'hooks/Hooks.Toast';
import useClientAuth from 'authentication/useClientAuth';

interface IProps {
  Screen: ICheckInfoScreen;
  userProfile?: IUserProfile;
}

function CheckInfoHandler({ userProfile, Screen }: IProps) {
  const { FirebaseUser, FirebaseLoading } = useClientAuth();
  const { setErrorType, setScreen, setMainScreen } = SetupHook();
  const { setToast } = ToastHook();

  if (!FirebaseLoading && FirebaseUser && userProfile) {
    try {
      const FullName = userProfile._data.fullName;
      const PhoneNumber = userProfile._data.phoneNumber;
      const EmailAddress = userProfile._data.emailAddress;
      const EmailAddressVerified = userProfile._data.isVerified?.emailAddress;
      const ProfilePicture = userProfile._data.photoURL;
      const DateOfBirth = userProfile._data.dateOfBirth;
      const Gender = userProfile._data.gender;
      if (Screen === 'initial-login-load') {
        if (!FullName || (FullName && FullName.length < 1)) {
          setScreen('register-name');
        } else if (!PhoneNumber || (PhoneNumber && PhoneNumber.length < 1)) {
          setScreen('register-phone');
        } else if (!EmailAddress || (EmailAddress && EmailAddress.length < 1)) {
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
        } else if (!EmailAddress || (EmailAddress && EmailAddress.length < 1)) {
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
        if (!ProfilePicture || (ProfilePicture && ProfilePicture.length < 1)) {
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
          Show: true,
        });
      }
    }
  }
}

export default CheckInfoHandler;
