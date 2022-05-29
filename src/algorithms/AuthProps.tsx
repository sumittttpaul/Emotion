export interface ResendOTPProps {
  phoneNumber: number;
  Loading: (value: boolean) => void;
  ErrorToastMessage: (value: string) => void;
  SuccessToastMessage: (value: string) => void;
}

export interface VerifyOTPProps {
  OTP: number;
  Loading: (value: boolean) => void;
  ErrorToastMessage: (value: string) => void;
}

export interface SignInWithPhoneNumberProps {
  phoneNumber: number;
  Loading: (value: boolean) => void;
  ShowOTPDialog: () => void;
  EmptyPhoneNumberTextField: () => void;
  ErrorToastMessage: (value: string) => void;
  SuccessToastMessage: (value: string) => void;
}

export interface SignInWithEmailAndPasswordProps {
  Email: string;
  Password: string;
  Loading: (value: boolean) => void;
  EmptyPasswordTextField: () => void;
  ErrorToastMessage: (value: string) => void;
}

export interface SignInWithFacebookProps {
  ErrorToastMessage: (value: string) => void;
}

export interface SignInWithGoogleProps {
  ErrorToastMessage: (value: string) => void;
}

export interface SignInWithAppleProps {
  ErrorToastMessage: (value: string) => void;
}
