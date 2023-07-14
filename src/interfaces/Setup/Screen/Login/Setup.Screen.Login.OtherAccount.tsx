import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { Button } from '@mui/material';
import { ChevronRightIcon } from '@heroicons/react/solid';
import SignInBackButton from 'components/button/Setup/SignInBackButton';
import {
  DeleteAccount,
  SignInWithApple,
  SignInWithFacebook,
  SignInWithGoogle,
  SignInWithMicrosoft,
} from 'functions/AuthAlgorithms';
import { LoaderHook } from 'hooks/Hooks.Loader';
import { ClientUserType } from 'authentication/useClientAuth';
import { ToastHook } from 'hooks/Hooks.Toast';
import { DecryptData, EncryptData } from 'functions/security/CryptionSecurity';
import { UserProfileEncrytionKey } from 'functions/security/CryptionKey';
import OperateUserProfile from 'databases/controllers/Controller.UserProfile';
import { FetchUserProfile } from 'hooks/Hooks.FetchUserProfile';

const SetupCheckDialog = dynamic<SetupCheckDialogProps>(
  () => import('interfaces/Setup/Dialog/Setup.Dialog.Check'),
  { ssr: false }
);

function SetupLoginOtherAccountScreen(
  props: SetupLoginOtherAccountScreenProps
) {
  type StringType = {
    FullName: string | undefined;
    PhotoUrl: string | undefined;
  };
  const [CheckDialog, setCheckDialog] = useState(false);
  const [PrevData, setPrevData] = useState<StringType>({
    FullName: undefined,
    PhotoUrl: undefined,
  });
  const [NewData, setNewData] = useState<StringType>({
    FullName: undefined,
    PhotoUrl: undefined,
  });
  const { setLoader } = LoaderHook();
  const { setToast } = ToastHook();
  const router = useRouter();

  // Screens
  const BackToSignInWithPhoneNumber = () => {
    props.setScreen('login-phone');
  };

  // database
  function CreateDateBase(user: ClientUserType) {
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
              Title: 'Something went wrong',
              Description: error.message,
              Type: 'Error',
              Show: true,
            });
          DeleteAccount({
            Loading: props.setLoading,
            ShowToast: (Title, Description, Type, Show) =>
              setToast({
                Title: Title,
                Description: Description,
                Type: Type,
                Show: Show,
              }),
            Deletedatabase: () => {
              // Delete database if by any change it has been created
              props.setLoading(false);
              props.setMainScreen('Error');
              props.setErrorType('database-not-created');
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

  function Checkdatabase(user: ClientUserType) {
    FetchUserProfile(user ? user.uid : undefined).then((getData) => {
      const value = getData.userProfile;
      const error = getData.error;
      // PrevData. Value
      if (user && value) {
        setPrevData({
          ...PrevData,
          FullName:
            value && value._data && value._data.fullName
              ? DecryptData(
                  UserProfileEncrytionKey(user.uid, 'FullName'),
                  value._data.fullName
                )
              : undefined,
        });
        setPrevData({
          ...PrevData,
          PhotoUrl:
            value && value._data && value._data.photoURL
              ? DecryptData(
                  UserProfileEncrytionKey(user.uid, 'PhotoURL'),
                  value._data.photoURL
                )
              : undefined,
        });
        // NewData. Value
        setNewData({
          ...NewData,
          FullName:
            user.displayName && user.displayName.length > 0
              ? user.displayName
              : undefined,
        });
        setNewData({
          ...NewData,
          PhotoUrl:
            user.photoURL && user.photoURL.length > 0
              ? user.photoURL
              : undefined,
        });
      } else {
        if (error) {
          props.setMainScreen('Error');
          setToast({
            Title: 'Something went wrong',
            Description: error.message,
            Type: 'Error',
            Show: false,
          });
        }
      }
    });
    if (!user) {
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
      Loading: props.setLoading,
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
      Loading: props.setLoading,
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
      Loading: props.setLoading,
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
      Loading: props.setLoading,
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
    if (
      PrevData.FullName &&
      NewData.FullName &&
      PrevData.FullName !== NewData.FullName
    ) {
      setCheckDialog(true);
      props.setLoading(false);
    } else if (
      PrevData.PhotoUrl &&
      NewData.PhotoUrl &&
      PrevData.PhotoUrl !== NewData.PhotoUrl
    ) {
      setCheckDialog(true);
      props.setLoading(false);
    } else if (
      PrevData.FullName &&
      NewData.FullName &&
      PrevData.PhotoUrl &&
      NewData.PhotoUrl &&
      PrevData.FullName === NewData.FullName &&
      PrevData.PhotoUrl === NewData.PhotoUrl
    ) {
      setLoader(true);
      props.setLoading(false);
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    PrevData.FullName,
    PrevData.PhotoUrl,
    NewData.FullName,
    NewData.PhotoUrl,
  ]);

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
        PrevFullName={PrevData.FullName}
        PrevPhotoUrl={PrevData.PhotoUrl}
        NewFullName={NewData.FullName}
        NewPhotoUrl={NewData.PhotoUrl}
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
          <label className="w-full text-start text-[13px] font-normal tracking-wide">
            {props.Label}
          </label>
          <p className="w-full text-start text-[12px] font-normal text-white/75">
            {props.Description}
          </p>
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
