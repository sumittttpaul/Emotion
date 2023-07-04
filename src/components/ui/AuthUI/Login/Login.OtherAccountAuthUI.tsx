import React, {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Button } from '@mui/material';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import {
  SignInWithGoogle,
  SignInWithFacebook,
  SignInWithApple,
  SignInWithMicrosoft,
  DeleteAccount,
} from '../../../../algorithms/AuthAlgorithms';
import { useLoaderState } from '../../../../provider/LoadingState';
import { AuthAnimationType, AuthErrorType, AuthType } from '../AuthType';
import { UserProfileEncrytionKey } from '../../../../algorithms/security/CryptionKey';
import {
  DecryptData,
  EncryptData,
} from '../../../../algorithms/security/CryptionSecurity';
import { useQueryClient, useMutation } from 'react-query';
import {
  postUserProfile,
  getUserProfile,
  _userProfileEndURL as cacheKey,
} from '../../../../mongodb/helper/Helper.UserProfile';
import { IUserProfile } from '../../../../mongodb/schema/Schema.UserProfile';
import { UserType } from '../../../../firebase/useAuth';
import { m } from 'framer-motion';
import { CheckDialogAuthUIProps } from '../Dialog/CheckDialogAuthUI';
import dynamic from 'next/dynamic';
import router from 'next/router';

const CheckDialogAuthUI = dynamic<CheckDialogAuthUIProps>(
  () => import('../Dialog/CheckDialogAuthUI').then((x) => x.CheckDialogAuthUI),
  { ssr: false }
);

export interface LoginOtherAccountAuthUIProps {
  Loading: boolean;
  Toast: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  setError: Dispatch<SetStateAction<AuthErrorType>>;
  Animation: AuthAnimationType;
  IsInformation: (Screen: AuthType) => void;
}

/**
 * @author
 * @function @LoginOtherAccountAuthUI
 **/

export const LoginOtherAccountAuthUI: FC<LoginOtherAccountAuthUIProps> = (
  props
) => {
  const queryClient = useQueryClient();
  const createUserProfile = useMutation(postUserProfile, {
    onSuccess: async (data: any) => {
      const stringifyData = JSON.stringify(data);
      const _data: IUserProfile = JSON.parse(stringifyData);
      await queryClient.prefetchQuery([cacheKey, _data._uid], () =>
        getUserProfile(_data._uid)
      );
      const FullName = _data._data.fullName;
      const PhoneNumber = _data._data.phoneNumber;
      const EmailAddress = _data._data.emailAddress;
      const EmailAddressVerified = _data._data.isVerified?.emailAddress;
      const ProfilePicture = _data._data.photoURL;
      if (!FullName || (FullName && FullName.length < 1)) {
        props.IsInformation('register-name');
      } else if (!PhoneNumber || (PhoneNumber && PhoneNumber.length < 1)) {
        props.IsInformation('register-phone');
      } else if (!EmailAddress || (EmailAddress && EmailAddress.length < 1)) {
        props.IsInformation('register-email');
      } else if (!EmailAddressVerified && EmailAddressVerified === false) {
        props.IsInformation('register-verify-email');
      } else if (
        !ProfilePicture ||
        (ProfilePicture && ProfilePicture.length < 1)
      ) {
        props.IsInformation('register-profile-picture');
      } else {
        props.IsInformation('register-date-of-birth');
      }
    },
    onError: (error: any) => {
      ShowToast('Something went wrong', `${error.message}`, 'Error', true);
      DeleteAccount({
        Loading: props.setLoading,
        ShowToast: ShowToast,
        DeleteDataBase: (uid: string) => {
          props.setLoading(false);
          props.setError({ show: true, type: 'database-not-created' });
        },
      });
    },
  });

  // Type
  type StringType = string | undefined;

  // State
  const [CheckDialog, setCheckDialog] = useState(false);
  const [PrevFullName, setPrevFullName] = useState<StringType>(undefined);
  const [PrevPhotoUrl, setPrevPhotoUrl] = useState<StringType>(undefined);
  const [NewFullName, setNewFullName] = useState<StringType>(undefined);
  const [NewPhotoUrl, setNewPhotoUrl] = useState<StringType>(undefined);

  // Loading
  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => setLoader({ show: value });

  // Toast
  const ShowToast = (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => {
    props.setToastSetting({
      Title: title,
      Description: description,
      Type: type,
    });
    props.setToast(show);
  };

  // Screens
  const BackToSignInWithPhoneNumber = () => {
    props.setAuthScreen('login-phone');
  };

  // Database
  const CreateDateBase = (user: UserType) => {
    if (user) {
      try {
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
        createUserProfile.mutate(_data);
      } catch (error: any) {
        props.setLoading(false);
        ShowToast('Something went wrong', `${error.message}`, 'Error', true);
      }
    } else {
      ShowToast(
        'Something went wrong',
        'It seems like user is not exist.',
        'Error',
        true
      );
    }
  };
  const CheckDataBase = async (user: UserType) => {
    if (user) {
      await getUserProfile(user.uid).then((value: any) => {
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
      });
    } else {
      ShowToast(
        'Something went wrong',
        'It seems like user is not exist.',
        'Error',
        true
      );
    }
  };

  // Submit
  const GoogleSignIn = () => {
    SignInWithGoogle({
      ShowToast: ShowToast,
      Loading: props.setLoading,
      CreateDateBase: CreateDateBase,
      CheckDataBase: CheckDataBase,
    });
  };

  const FacebookSignIn = () => {
    SignInWithFacebook({
      ShowToast: ShowToast,
      Loading: props.setLoading,
      CreateDateBase: CreateDateBase,
      CheckDataBase: CheckDataBase,
    });
  };

  const AppleSignIn = () => {
    SignInWithApple({
      ShowToast: ShowToast,
      Loading: props.setLoading,
      CreateDateBase: CreateDateBase,
      CheckDataBase: CheckDataBase,
    });
  };

  const MicrosoftSignIn = () => {
    SignInWithMicrosoft({
      ShowToast: ShowToast,
      Loading: props.setLoading,
      CreateDateBase: CreateDateBase,
      CheckDataBase: CheckDataBase,
    });
  };

  useEffect(() => {
    if (PrevFullName && NewFullName && PrevFullName !== NewFullName) {
      setCheckDialog(true);
      props.setLoading(false);
    } else if (PrevPhotoUrl && NewPhotoUrl && PrevPhotoUrl !== NewPhotoUrl) {
      setCheckDialog(true);
      props.setLoading(false);
    } else if (
      (PrevFullName && NewFullName && PrevFullName === NewFullName) ||
      (PrevPhotoUrl && NewPhotoUrl && PrevPhotoUrl === NewPhotoUrl)
    ) {
      LoadingScreen(true);
      props.setLoading(false);
      router.push('/');
    }
  }, [PrevFullName, PrevPhotoUrl, NewFullName, NewPhotoUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <m.div
        className="w-full relative"
        initial={props.Animation.Initial}
        animate={props.Animation.Final}
        transition={props.Animation.Transition}
      >
        <div className="w-full flex flex-col space-y-4">
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
      <CheckDialogAuthUI
        Open={CheckDialog}
        PrevFullName={PrevFullName}
        PrevPhotoUrl={PrevPhotoUrl}
        NewFullName={NewFullName}
        NewPhotoUrl={NewPhotoUrl}
        setToast={props.setToast}
        setToastSetting={props.setToastSetting}
      />
    </Fragment>
  );
};

interface CustomButtonProps {
  Label: string;
  Description?: string;
  onClick?: () => void;
}

const CustomButton: FC<CustomButtonProps> = (props) => {
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
};
