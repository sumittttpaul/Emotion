'use client';

import dynamic from 'next/dynamic';
import router from 'next/navigation';
import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { Button } from '@mui/material';
import { SetupCheckDialogProps } from 'components/ui/SetupUI/Dialog/Setup.CheckDialog';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { SignInBackButton } from 'components/button/Setup/SignInBackButton';
import {
  DeleteAccount,
  SignInWithApple,
  SignInWithFacebook,
  SignInWithGoogle,
  SignInWithMicrosoft,
} from 'functions/AuthAlgorithms';
import { SetupHook } from 'hooks/Hooks.Setup';
import { LoaderHook } from 'hooks/Hooks.Loader';
import { ClientUser } from 'authentication/useClientAuth';
import { ToastHook } from 'hooks/Hooks.Toast';
import { DecryptData, EncryptData } from 'functions/security/CryptionSecurity';
import { UserProfileEncrytionKey } from 'functions/security/CryptionKey';
import OperateUserProfile from 'databases/controller/Controller.UserProfile';

const SetupCheckDialog = dynamic<SetupCheckDialogProps>(() =>
  import('components/ui/SetupUI/Dialog/Setup.CheckDialog').then(
    (x) => x.SetupCheckDialog
  )
);

export interface SetupLoginOtherAccountScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  userProfile?: IUserProfile;
  CheckInfoHandler: VoidType;
}

function SetupLoginOtherAccountScreen(
  props: SetupLoginOtherAccountScreenProps
) {
  type StringType = string | undefined;
  const [CheckDialog, setCheckDialog] = useState(false);
  const [PrevFullName, setPrevFullName] = useState<StringType>(undefined);
  const [PrevPhotoUrl, setPrevPhotoUrl] = useState<StringType>(undefined);
  const [NewFullName, setNewFullName] = useState<StringType>(undefined);
  const [NewPhotoUrl, setNewPhotoUrl] = useState<StringType>(undefined);
  const { setScreen, setLoading, setErrorType, setMainScreen } = SetupHook();
  const { setLoader } = LoaderHook();
  const { setToast } = ToastHook();

  // Screens
  const BackToSignInWithPhoneNumber = () => {
    setScreen('login-phone');
  };

  // databases
  function CreateDateBase(user: ClientUser) {
    if (user) {
      const UserFullName =
        user.displayName && user.displayName.length > 0
          ? EncryptData(
              UserProfileEncrytionKey(user.uid, 'FullName'),
              user.displayName
            )
          : '';
      const UserEmailAddress =
        user.email && user.email.length > 0
          ? EncryptData(
              UserProfileEncrytionKey(user.uid, 'EmailAddress'),
              user.email
            )
          : '';
      const UserPhoneNumber =
        user.phoneNumber && user.phoneNumber.length > 0
          ? EncryptData(
              UserProfileEncrytionKey(user.uid, 'PhoneNumber'),
              user.phoneNumber
            )
          : '';
      const UserPhotoURL =
        user.photoURL && user.photoURL.length > 0
          ? EncryptData(
              UserProfileEncrytionKey(user.uid, 'PhotoURL'),
              user.photoURL
            )
          : '';
      const UserEmailAddressVerified = user.emailVerified
        ? user.emailVerified
        : false;
      const _data: IUserProfile = {
        _uid: user.uid,
        _data: {
          fullName: UserFullName,
          emailAddress: UserEmailAddress,
          phoneNumber: UserPhoneNumber,
          photoURL: UserPhotoURL,
          dateOfBirth: '',
          age: '',
          gender: '',
          isVerified: {
            phoneNumber: true,
            emailAddress: UserEmailAddressVerified,
          },
        },
      };
      OperateUserProfile('CREATE', { create: _data })
        .then(async () => {
          props.CheckInfoHandler();
          // const _data = props.userProfile;
          // const FullName = _data._data.fullName;
          // const PhoneNumber = _data._data.phoneNumber;
          // const EmailAddress = _data._data.emailAddress;
          // const EmailAddressVerified = _data._data.isVerified?.emailAddress;
          // const ProfilePicture = _data._data.photoURL;
          // if (!FullName || (FullName && FullName.length < 1)) {
          //   setScreen('register-name');
          // } else if (!PhoneNumber || (PhoneNumber && PhoneNumber.length < 1)) {
          //   setScreen('register-phone');
          // } else if (
          //   !EmailAddress ||
          //   (EmailAddress && EmailAddress.length < 1)
          // ) {
          //   setScreen('register-email');
          // } else if (!EmailAddressVerified && EmailAddressVerified === false) {
          //   setScreen('register-verify-email');
          // } else if (
          //   !ProfilePicture ||
          //   (ProfilePicture && ProfilePicture.length < 1)
          // ) {
          //   setScreen('register-profile-picture');
          // } else {
          //   setScreen('register-date-of-birth');
          // }
        })
        .catch((error) => {
          if (error instanceof Error)
            setToast({
              Title: error.name,
              Description: error.message,
              Type: 'Error',
              Show: true,
            });
          DeleteAccount({
            Loading: setLoading,
            ShowToast: (Title, Description, Type, Show) =>
              setToast({
                Title: Title,
                Description: Description,
                Type: Type,
                Show: Show,
              }),
            Deletedatabases: () => {
              // Delete database if by any change it has been created
              setLoading(false);
              setMainScreen('Error');
              setErrorType('databases-not-created');
            },
          });
        });
    } else {
      setToast({
        Title: 'Something went wrong',
        Description: 'It seems like user is not exist.',
        Type: 'Error',
        Show: true,
      });
    }
  }

  function Checkdatabase(user: ClientUser) {
    if (user) {
      const value = props.userProfile;
      // Prev Value
      setPrevFullName(
        value && value._data && value._data.fullName
          ? DecryptData(
              UserProfileEncrytionKey(user.uid, 'FullName'),
              value._data.fullName
            )
          : undefined
      );
      setPrevPhotoUrl(
        value && value._data && value._data.photoURL
          ? DecryptData(
              UserProfileEncrytionKey(user.uid, 'PhotoURL'),
              value._data.photoURL
            )
          : undefined
      );
      // New Value
      setNewFullName(
        user.displayName && user.displayName.length > 0
          ? user.displayName
          : undefined
      );
      setNewPhotoUrl(
        user.photoURL && user.photoURL.length > 0 ? user.photoURL : undefined
      );
    } else {
      setToast({
        Title: 'Something went wrong',
        Description: 'It seems like user is not exist.',
        Type: 'Error',
        Show: true,
      });
    }
  }

  // Submit
  const GoogleSignIn = () => {
    SignInWithGoogle({
      Loading: setLoading,
      CreateDateBase: CreateDateBase,
      Checkdatabase: Checkdatabase,
      ShowToast: (Title, Description, Type, Show) =>
        setToast({
          Title: Title,
          Description: Description,
          Type: Type,
          Show: Show,
        }),
    });
  };

  const FacebookSignIn = () => {
    SignInWithFacebook({
      Loading: setLoading,
      CreateDateBase: CreateDateBase,
      Checkdatabase: Checkdatabase,
      ShowToast: (Title, Description, Type, Show) =>
        setToast({
          Title: Title,
          Description: Description,
          Type: Type,
          Show: Show,
        }),
    });
  };

  const AppleSignIn = () => {
    SignInWithApple({
      Loading: setLoading,
      CreateDateBase: CreateDateBase,
      Checkdatabase: Checkdatabase,
      ShowToast: (Title, Description, Type, Show) =>
        setToast({
          Title: Title,
          Description: Description,
          Type: Type,
          Show: Show,
        }),
    });
  };

  const MicrosoftSignIn = () => {
    SignInWithMicrosoft({
      Loading: setLoading,
      CreateDateBase: CreateDateBase,
      Checkdatabase: Checkdatabase,
      ShowToast: (Title, Description, Type, Show) =>
        setToast({
          Title: Title,
          Description: Description,
          Type: Type,
          Show: Show,
        }),
    });
  };

  useEffect(() => {
    if (PrevFullName && NewFullName && PrevFullName !== NewFullName) {
      setCheckDialog(true);
      setLoading(false);
    } else if (PrevPhotoUrl && NewPhotoUrl && PrevPhotoUrl !== NewPhotoUrl) {
      setCheckDialog(true);
      setLoading(false);
    } else if (
      PrevFullName &&
      NewFullName &&
      PrevPhotoUrl &&
      NewPhotoUrl &&
      PrevFullName === NewFullName &&
      PrevPhotoUrl === NewPhotoUrl
    ) {
      setLoader(true);
      setLoading(false);
      router.redirect('/');
    }
  }, [PrevFullName, PrevPhotoUrl, NewFullName, NewPhotoUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <m.div
        className={`${props.AnimationDivClassName} w-full relative`}
        initial={props.Animation.Initial}
        animate={props.Animation.Final}
        transition={props.Animation.Transition}
      >
        <div
          className={`${props.ContentClassName} w-full flex flex-col space-y-4`}
        >
          <div className="w-full flex flex-col space-y-2">
            <CustomButton onClick={GoogleSignIn} Label="Google" />
            <CustomButton onClick={FacebookSignIn} Label="Facebook" />
            <CustomButton onClick={AppleSignIn} Label="Apple" />
            <CustomButton onClick={MicrosoftSignIn} Label="Microsoft" />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton
              Label="Back"
              onClick={BackToSignInWithPhoneNumber}
            />
          </div>
        </div>
      </m.div>
      <SetupCheckDialog
        Open={CheckDialog}
        PrevFullName={PrevFullName}
        PrevPhotoUrl={PrevPhotoUrl}
        NewFullName={NewFullName}
        NewPhotoUrl={NewPhotoUrl}
      />
    </>
  );
}

interface CustomButtonProps {
  Label: string;
  Description?: string;
  onClick?: () => void;
}

function CustomButton(props: CustomButtonProps) {
  return (
    <Button
      aria-label="apple-sign-in-button"
      disableFocusRipple
      onClick={props.onClick}
      className="bg-white/5 hover:bg-white/10 cursor-default text-white h-[50px] justify-center items-center flex w-full rounded-lg button-text-lower"
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff50 !important',
        },
      }}
    >
      <div className="flex w-full px-3">
        {/* <Image height={20} width={20} src={props.Icon} alt="" /> */}
        <div
          className={`${
            props.Description ? '-space-y-1 ?' : ''
          } w-full flex flex-col`}
        >
          <div className="w-full text-start text-[13px] font-normal tracking-wide">
            {props.Label}
          </div>
          <div className="w-full text-start text-[12px] font-normal text-white/75">
            {props.Description}
          </div>
        </div>
        <div className="flex h-full items-center justify-center">
          <ChevronRightIcon
            className={`${props.Description ? 'mt-3' : 'mt-1'} h-4 w-4 block`}
          />
        </div>
      </div>
    </Button>
  );
}

export default SetupLoginOtherAccountScreen;
