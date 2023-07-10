interface IProps {
  AfterScreen:
    | 'initial-load'
    | 'after-name'
    | 'after-phone'
    | 'after-email'
    | 'after-verify-email'
    | 'after-profile-picture'
    | 'after-date-of-birth'
    | 'after-gender';
  ScreenState: 'initial' | 'normal';
  FirebaseUser: UserType;
  userProfile: IUserProfile | undefined;
  FirebaseLoading: boolean;
  handleIsInformationContent: Dispatch<AuthScreenType>;
  setInitialSlide: Dispatch<number>;
  setFinish: Dispatch<boolean>;
  setLoading: Dispatch<boolean>;
  setError: Dispatch<AuthErrorType>;
  setCheckInfoLoading: Dispatch<boolean>;
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
  ScreenState,
  FirebaseUser,
  userProfile,
  FirebaseLoading,
  handleIsInformationContent,
  setInitialSlide,
  setFinish,
  setLoading,
  setError,
  ShowToast,
  setCheckInfoLoading,
}: IProps) => {
  if (!FirebaseLoading && FirebaseUser && userProfile) {
    try {
      const FullName = userProfile._data.fullName;
      const PhoneNumber = userProfile._data.phoneNumber;
      const EmailAddress = userProfile._data.emailAddress;
      const EmailAddressVerified = userProfile._data.isVerified?.emailAddress;
      const ProfilePicture = userProfile._data.photoURL;
      const DateOfBirth = userProfile._data.dateOfBirth;
      const Gender = userProfile._data.gender;
      if (AfterScreen === 'initial-load') {
        if (!FullName || (FullName && FullName.length < 1)) {
          handleIsInformationContent('register-name');
        } else if (!PhoneNumber || (PhoneNumber && PhoneNumber.length < 1)) {
          handleIsInformationContent('register-phone');
        } else if (!EmailAddress || (EmailAddress && EmailAddress.length < 1)) {
          handleIsInformationContent('register-email');
        } else if (
          EmailAddress &&
          EmailAddress.length > 0 &&
          !EmailAddressVerified &&
          EmailAddressVerified === false
        ) {
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
            if (ScreenState === 'initial') setInitialSlide(1);
            setFinish(true);
            setLoading(false);
            setCheckInfoLoading(false);
          }
        }
      }
      if (AfterScreen === 'after-name') {
        if (!PhoneNumber || (PhoneNumber && PhoneNumber.length < 1)) {
          handleIsInformationContent('register-phone');
        } else if (!EmailAddress || (EmailAddress && EmailAddress.length < 1)) {
          handleIsInformationContent('register-email');
        } else if (
          EmailAddress &&
          EmailAddress.length > 0 &&
          !EmailAddressVerified &&
          EmailAddressVerified === false
        ) {
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
        } else {
          if (ScreenState === 'initial') setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setCheckInfoLoading(false);
        }
      }
      if (AfterScreen === 'after-phone') {
        if (!EmailAddress || (EmailAddress && EmailAddress.length < 1)) {
          handleIsInformationContent('register-email');
        } else if (
          EmailAddress &&
          EmailAddress.length > 0 &&
          !EmailAddressVerified &&
          EmailAddressVerified === false
        ) {
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
        } else {
          if (ScreenState === 'initial') setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setCheckInfoLoading(false);
        }
      }
      if (AfterScreen === 'after-email') {
        if (
          EmailAddress &&
          EmailAddress.length > 0 &&
          !EmailAddressVerified &&
          EmailAddressVerified === false
        ) {
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
        } else {
          if (ScreenState === 'initial') setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setCheckInfoLoading(false);
        }
      }
      if (AfterScreen === 'after-verify-email') {
        if (!ProfilePicture || (ProfilePicture && ProfilePicture.length < 1)) {
          handleIsInformationContent('register-profile-picture');
        } else if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
          handleIsInformationContent('register-date-of-birth');
        } else if (!Gender || (Gender && Gender.length < 1)) {
          handleIsInformationContent('register-gender');
        } else {
          if (ScreenState === 'initial') setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setCheckInfoLoading(false);
        }
      }
      if (AfterScreen === 'after-profile-picture') {
        if (!DateOfBirth || (DateOfBirth && DateOfBirth.length < 1)) {
          handleIsInformationContent('register-date-of-birth');
        } else if (!Gender || (Gender && Gender.length < 1)) {
          handleIsInformationContent('register-gender');
        } else {
          if (ScreenState === 'initial') setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setCheckInfoLoading(false);
        }
      }
      if (AfterScreen === 'after-date-of-birth') {
        if (!Gender || (Gender && Gender.length < 1)) {
          handleIsInformationContent('register-gender');
        } else {
          if (ScreenState === 'initial') setInitialSlide(1);
          setFinish(true);
          setLoading(false);
          setCheckInfoLoading(false);
        }
      }
      if (AfterScreen === 'after-gender') {
        setFinish(true);
        setLoading(false);
        setCheckInfoLoading(false);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError({ show: true, type: 'get-user-failed' });
        ShowToast(error.name, error.message, 'Error', true);
      }
    }
  }
};
