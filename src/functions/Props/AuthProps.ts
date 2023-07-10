import { Dispatch, SetStateAction } from 'react';
import { ClientUser } from '../../authentication/useClientAuth';

export interface RecaptchaProps {
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
  ResetCaptcha: boolean;
}

export interface ResendOTPProps {
  PhoneNumber: number;
  Loading: Dispatch<boolean>;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface VerifyOTPProps {
  OTP: number;
  EmptyOTPBox: VoidType;
  CreateDateBase: (value: string) => void;
  Loading: Dispatch<boolean>;
  LoadingScreen: (value: boolean) => void;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface ConfirmVerifyEmailAddressProps {
  oobCode: string;
  Loading: Dispatch<boolean>;
  Screen: Dispatch<SetStateAction<'Success' | 'Error' | null>>;
  Updatedatabase: VoidType;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface PasswordResentProps {
  EmailAddress: string;
  Loading: Dispatch<boolean>;
  Next: VoidType;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface ConfirmPasswordResetProps {
  oobCode: string;
  Password: string;
  EmptyPassword: VoidType;
  Loading: Dispatch<boolean>;
  Next: VoidType;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface SignInWithPhoneNumberProps {
  PhoneNumber: number;
  EmptyPhoneNumber: VoidType;
  ResetCaptcha: boolean;
  setResetCaptcha: Dispatch<boolean>;
  MoveToOTPScreen: VoidType;
  Loading: Dispatch<boolean>;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface SignInWithEmailAndPasswordProps {
  EmailAddress: string;
  Password: string;
  Loading: Dispatch<boolean>;
  LoadingScreen: (value: boolean) => void;
  EmptyPasswordTextField: VoidType;
  BackToEmailScreen: VoidType;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}
export interface SignInWithOtherAccountsProps {
  Loading: Dispatch<boolean>;
  Checkdatabase: (user: ClientUser) => void;
  CreateDateBase: (user: ClientUser) => void;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface AddFullNameProps {
  FullName: string;
  Loading: Dispatch<boolean>;
  Updatedatabase: VoidType;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface LinkWithEmailAndPasswordProps {
  EmailAddress: string;
  Password: string;
  Loading: Dispatch<boolean>;
  EmptyPasswordTextField: VoidType;
  BackToEmailScreen: VoidType;
  Next: VoidType;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface LinkWithPhoneNumberProps {
  PhoneNumber: number;
  EmptyPhoneNumber: VoidType;
  ResetCaptcha: boolean;
  setResetCaptcha: Dispatch<boolean>;
  Updatedatabase: VoidType;
  Loading: Dispatch<boolean>;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface VerifyOTPForLinkWithPhoneProps {
  OTP: number;
  EmptyOTPBox: VoidType;
  Updatedatabase: VoidType;
  Loading: Dispatch<boolean>;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface AddPhoneNumberProps {
  OTP: number;
  PhoneNumber: string;
  EmptyOTPBox: VoidType;
  updateUserData: () => void;
  Loading: Dispatch<boolean>;
  LoadingScreen: (value: boolean) => void;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface VerifyEmailProps {
  Next: VoidType;
  Loading: Dispatch<boolean>;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface UploadAvatarProps {
  Progress: (value: string) => void;
  File: File | undefined;
  UpdatedatabaseWithURL: (value: string) => void;
  Loading: Dispatch<boolean>;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface DeleteAvatarProps {
  AvatarURL: string;
  DeletePhotoURLFromdatabase: VoidType;
  Loading: Dispatch<boolean>;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}

export interface SignOutProps {
  Next: VoidType;
}

export interface DeleteAccountProps {
  Loading: Dispatch<boolean>;
  Deletedatabases: (value: string) => void;
  ShowToast: (
    title: string,
    description: string,
    type: 'Error' | 'Success' | 'Info' | 'Warning',
    show: boolean
  ) => void;
}
