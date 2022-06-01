export interface ResendOTPProps {
  Phone: number;
  Loading: (value: boolean) => void;
  ToastShow: (value: boolean) => void;
  ToastMessage: (value: string) => void;
  ToastType: (value: string) => void;
}

export interface VerifyOTPProps {
  Phone: number;
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

export interface SignUpProps {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  EmptyPasswordTextField: () => void;
  Loading: (value: boolean) => void;
  ToastShow: (value: boolean) => void;
  ToastMessage: (value: string) => void;
  ToastType: (value: string) => void;
}

export interface UploadAvatarProps {
  Progress: (value: string) => void;
  File: File;
  getImageURL: (value: string) => void;
  Loading: (value: boolean) => void;
  ToastShow: (value: boolean) => void;
  ToastMessage: (value: string) => void;
  ToastType: (value: string) => void;
  ProceedNext: () => void;
}
