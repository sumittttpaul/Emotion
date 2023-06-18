import { Dispatch, SetStateAction } from 'react';

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
  PhoneNumber: string;
  EmptyOTPBox: () => void;
  Next: () => void;
  Loading: Dispatch<SetStateAction<boolean>>;
  LoadingScreen: (value: boolean) => void;
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
  Next: () => void;
  setFullName: Dispatch<SetStateAction<string>>;
  setEmailAddress: Dispatch<SetStateAction<string>>;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
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
  updateUserData: () => void;
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
  updateUserData: () => void;
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
  MoveToOTPScreen: () => void;
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
  updateUserData: () => void;
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
  getImageURL: (value: string) => void;
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
  AfterDelete: () => void;
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
