export interface ResendOTPProps {
  phoneNumber: number;
  Loading: (value: boolean) => void;
  ToastShow: (value: boolean) => void;
  ToastMessage: (value: string) => void;
  ToastType: (value: string) => void;
}

export interface VerifyOTPProps {
  OTP: number;
  Loading: (value: boolean) => void;
  ToastShow: (value: boolean) => void;
  ToastMessage: (value: string) => void;
  ToastType: (value: string) => void;
}

export interface SignInWithPhoneNumberProps {
  Phone: number;
  EmptyPhone: () => void;
  Loading: (value: boolean) => void;
  ShowOTPDialog: () => void;
  ToastShow: (value: boolean) => void;
  ToastMessage: (value: string) => void;
  ToastType: (value: string) => void;
}

export interface SignInWithEmailAndPasswordProps {
  Email: string;
  Password: string;
  Loading: (value: boolean) => void;
  EmptyPasswordTextField: () => void;
  ToastShow: (value: boolean) => void;
  ToastMessage: (value: string) => void;
  ToastType: (value: string) => void;
}

export interface SignInWithFacebookProps {
  ToastShow: (value: boolean) => void;
  ToastMessage: (value: string) => void;
  ToastType: (value: string) => void;
}

export interface SignInWithGoogleProps {
  ToastShow: (value: boolean) => void;
  ToastMessage: (value: string) => void;
  ToastType: (value: string) => void;
}

export interface SignInWithAppleProps {
  ToastShow: (value: boolean) => void;
  ToastMessage: (value: string) => void;
  ToastType: (value: string) => void;
}
