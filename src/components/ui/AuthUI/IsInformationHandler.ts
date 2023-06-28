import { Dispatch, SetStateAction } from 'react';
import { UserType } from '../../../firebase/useAuth';
import { IUserProfile } from '../../../mongodb/schema/Schema.UserProfile';
import { AuthType } from './AuthType';

interface IProps {
  AfterScreen:
    | 'after-login'
    | 'after-name'
    | 'after-phone'
    | 'after-email'
    | 'after-verify-email'
    | 'after-profile-picture'
    | 'after-date-of-birth';
  FirebaseUser: UserType;
  userProfile: IUserProfile;
  FirebaseLoading: boolean;
  isuserProfileLoading: boolean;
  handleIsInformationContent: (value: AuthType) => void;
  setInitialSlide: Dispatch<SetStateAction<number>>;
  setFinish: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setInformationCheckLoading: Dispatch<SetStateAction<boolean>>;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

/**
 * @author
 * @function @IsInformationHandler
 **/

export const IsInformationHandler = ({
  AfterScreen,
  FirebaseUser,
  userProfile,
  FirebaseLoading,
  isuserProfileLoading,
  handleIsInformationContent,
  setInitialSlide,
  setFinish,
  setLoading,
  setInformationCheckLoading,
  ShowToast,
}: IProps) => {
  if (
    !FirebaseLoading &&
    !isuserProfileLoading &&
    FirebaseUser &&
    userProfile
  ) {
    try {
      const FullName = userProfile._data.fullName;
      const PhoneNumber = userProfile._data.phoneNumber;
      const EmailAddress = userProfile._data.emailAddress;
      const EmailAddressVerified = userProfile._data.isVerified?.emailAddress;
      const ProfilePicture = userProfile._data.photoURL;
      const DateOfBirth = userProfile._data.dateOfBirth;
      const Gender = userProfile._data.gender;
      if (AfterScreen === 'after-login') {
        if (!FullName || (FullName && FullName.length < 1)) {
          handleIsInformationContent('register-name');
        } else if (!PhoneNumber || (PhoneNumber && PhoneNumber.length < 1)) {
          handleIsInformationContent('register-phone');
        } else if (!EmailAddress || (EmailAddress && EmailAddress.length < 1)) {
          handleIsInformationContent('register-email');
        } else if (!EmailAddressVerified && EmailAddressVerified === false) {
          handleIsInformationContent('register-verify-email');
        } else if (
          !ProfilePicture ||
          (ProfilePicture && ProfilePicture.length < 1)
        ) {
          handleIsInformationContent('register-profile-picture');
        } else if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
          handleIsInformationContent('register-date-of-birth');
        } else if (!Gender || (Gender && Gender.length < 1)) {
          handleIsInformationContent('register-gender');
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
            setInitialSlide(1);
            setFinish(true);
            setLoading(false);
            setInformationCheckLoading(false);
          }
        }
      }
      if (AfterScreen === 'after-name') {
        if (!PhoneNumber || (PhoneNumber && PhoneNumber.length < 1)) {
          handleIsInformationContent('register-phone');
        } else if (!EmailAddress || (EmailAddress && EmailAddress.length < 1)) {
          handleIsInformationContent('register-email');
        } else if (!EmailAddressVerified && EmailAddressVerified === false) {
          handleIsInformationContent('register-verify-email');
        } else if (
          !ProfilePicture ||
          (ProfilePicture && ProfilePicture.length < 1)
        ) {
          handleIsInformationContent('register-profile-picture');
        } else if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
          handleIsInformationContent('register-date-of-birth');
        } else if (!Gender || (Gender && Gender.length < 1)) {
          handleIsInformationContent('register-gender');
        } else if (
          PhoneNumber &&
          EmailAddress &&
          EmailAddressVerified &&
          ProfilePicture &&
          DateOfBirth &&
          Gender
        ) {
          if (
            PhoneNumber.length > 0 &&
            EmailAddress.length > 0 &&
            ProfilePicture.length > 0 &&
            DateOfBirth.length > 0 &&
            Gender.length > 0 &&
            EmailAddressVerified === true
          ) {
            setInitialSlide(1);
            setFinish(true);
            setLoading(false);
            setInformationCheckLoading(false);
          }
        }
      }
      if (AfterScreen === 'after-phone') {
        if (!EmailAddress || (EmailAddress && EmailAddress.length < 1)) {
          handleIsInformationContent('register-email');
        } else if (!EmailAddressVerified && EmailAddressVerified === false) {
          handleIsInformationContent('register-verify-email');
        } else if (
          !ProfilePicture ||
          (ProfilePicture && ProfilePicture.length < 1)
        ) {
          handleIsInformationContent('register-profile-picture');
        } else if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
          handleIsInformationContent('register-date-of-birth');
        } else if (!Gender || (Gender && Gender.length < 1)) {
          handleIsInformationContent('register-gender');
        } else if (
          EmailAddress &&
          EmailAddressVerified &&
          ProfilePicture &&
          DateOfBirth &&
          Gender
        ) {
          if (
            EmailAddress.length > 0 &&
            ProfilePicture.length > 0 &&
            DateOfBirth.length > 0 &&
            Gender.length > 0 &&
            EmailAddressVerified === true
          ) {
            setInitialSlide(1);
            setFinish(true);
            setLoading(false);
            setInformationCheckLoading(false);
          }
        }
      }
      if (AfterScreen === 'after-email') {
        if (!EmailAddressVerified && EmailAddressVerified === false) {
          handleIsInformationContent('register-verify-email');
        } else if (
          !ProfilePicture ||
          (ProfilePicture && ProfilePicture.length < 1)
        ) {
          handleIsInformationContent('register-profile-picture');
        } else if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
          handleIsInformationContent('register-date-of-birth');
        } else if (!Gender || (Gender && Gender.length < 1)) {
          handleIsInformationContent('register-gender');
        } else if (
          EmailAddressVerified &&
          ProfilePicture &&
          DateOfBirth &&
          Gender
        ) {
          if (
            ProfilePicture.length > 0 &&
            DateOfBirth.length > 0 &&
            Gender.length > 0 &&
            EmailAddressVerified === true
          ) {
            setInitialSlide(1);
            setFinish(true);
            setLoading(false);
            setInformationCheckLoading(false);
          }
        }
      }
      if (AfterScreen === 'after-verify-email') {
        if (!ProfilePicture || (ProfilePicture && ProfilePicture.length < 1)) {
          handleIsInformationContent('register-profile-picture');
        } else if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
          handleIsInformationContent('register-date-of-birth');
        } else if (!Gender || (Gender && Gender.length < 1)) {
          handleIsInformationContent('register-gender');
        } else if (ProfilePicture && DateOfBirth && Gender) {
          if (
            ProfilePicture.length > 0 &&
            DateOfBirth.length > 0 &&
            Gender.length > 0
          ) {
            setInitialSlide(1);
            setFinish(true);
            setLoading(false);
            setInformationCheckLoading(false);
          }
        }
      }
      if (AfterScreen === 'after-profile-picture') {
        if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
          handleIsInformationContent('register-date-of-birth');
        } else if (!Gender || (Gender && Gender.length < 1)) {
          handleIsInformationContent('register-gender');
        } else if (DateOfBirth && Gender) {
          if (DateOfBirth.length > 0 && Gender.length > 0) {
            setInitialSlide(1);
            setFinish(true);
            setLoading(false);
            setInformationCheckLoading(false);
          }
        }
      }
      if (AfterScreen === 'after-date-of-birth') {
        if (!Gender || (Gender && Gender.length < 1)) {
          handleIsInformationContent('register-gender');
        } else if (Gender) {
          if (Gender.length > 0) {
            setInitialSlide(1);
            setFinish(true);
            setLoading(false);
            setInformationCheckLoading(false);
          }
        }
      }
    } catch (error: any) {
      ShowToast(
        'Something went wrong',
        `${error.message} in the database`,
        'Error',
        true
      );
    }
  }
};
