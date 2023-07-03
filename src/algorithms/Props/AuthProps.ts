import { Dispatch, SetStateAction } from 'react';
import { UserType } from '../../firebase/useAuth';

export interface RecaptchaProps {
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
  ResetCaptcha: boolean;
}

export interface ResendOTPProps {
  PhoneNumber: number;
  Loading: Dispatch<SetStateAction<boolean>>;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface VerifyOTPProps {
  OTP: number;
  EmptyOTPBox: () => void;
  CreateDateBase: (value: string) => void;
  Loading: Dispatch<SetStateAction<boolean>>;
  LoadingScreen: (value: boolean) => void;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface ConfirmVerifyEmailAddressProps {
  oobCode: string;
  Loading: Dispatch<SetStateAction<boolean>>;
  Screen: Dispatch<SetStateAction<'Success' | 'Error' | null>>;
  UpdateDataBase: () => void;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface PasswordResentProps {
  EmailAddress: string;
  Loading: Dispatch<SetStateAction<boolean>>;
  Next: () => void;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface ConfirmPasswordResetProps {
  oobCode: string;
  Password: string;
  EmptyPassword: () => void;
  Loading: Dispatch<SetStateAction<boolean>>;
  Next: () => void;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface SignInWithPhoneNumberProps {
  PhoneNumber: number;
  EmptyPhoneNumber: () => void;
  ResetCaptcha: boolean;
  setResetCaptcha: Dispatch<SetStateAction<boolean>>;
  MoveToOTPScreen: () => void;
  Loading: Dispatch<SetStateAction<boolean>>;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface SignInWithEmailAndPasswordProps {
  EmailAddress: string;
  Password: string;
  Loading: Dispatch<SetStateAction<boolean>>;
  LoadingScreen: (value: boolean) => void;
  EmptyPasswordTextField: () => void;
  BackToEmailScreen: () => void;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}
export interface SignInWithOtherAccountsProps {
  Loading: Dispatch<SetStateAction<boolean>>;
  LoadingScreen: (value: boolean) => void;
  CreateDateBase: (user: UserType) => void;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface AddFullNameProps {
  FullName: string;
  Loading: Dispatch<SetStateAction<boolean>>;
  UpdateDataBase: () => void;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface LinkWithEmailAndPasswordProps {
  EmailAddress: string;
  Password: string;
  Loading: Dispatch<SetStateAction<boolean>>;
  EmptyPasswordTextField: () => void;
  BackToEmailScreen: () => void;
  Next: () => void;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface LinkWithPhoneNumberProps {
  PhoneNumber: number;
  EmptyPhoneNumber: () => void;
  ResetCaptcha: boolean;
  setResetCaptcha: Dispatch<SetStateAction<boolean>>;
  UpdateDataBase: () => void;
  Loading: Dispatch<SetStateAction<boolean>>;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface VerifyOTPForLinkWithPhoneProps {
  OTP: number;
  EmptyOTPBox: () => void;
  UpdateDataBase: () => void;
  Loading: Dispatch<SetStateAction<boolean>>;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface AddPhoneNumberProps {
  OTP: number;
  PhoneNumber: string;
  EmptyOTPBox: () => void;
  updateUserData: () => void;
  Loading: Dispatch<SetStateAction<boolean>>;
  LoadingScreen: (value: boolean) => void;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface VerifyEmailProps {
  Next: () => void;
  Loading: Dispatch<SetStateAction<boolean>>;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface UploadAvatarProps {
  Progress: (value: string) => void;
  File: File | undefined;
  UpdateDataBaseWithURL: (value: string) => void;
  Loading: Dispatch<SetStateAction<boolean>>;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface DeleteAvatarProps {
  AvatarURL: string;
  DeletePhotoURLFromDataBase: () => void;
  Loading: Dispatch<SetStateAction<boolean>>;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface SignOutProps {
  Next: () => void;
}

export interface DeleteAccountProps {
  Loading: Dispatch<SetStateAction<boolean>>;
  DeleteDataBase: (value: string) => void;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}
