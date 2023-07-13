type ChildrenType = {
  children: React.ReactNode;
};

type VoidType = () => void;

type Dispatch<A> = (value: A) => void;

type DATAType = IUserProfile;

type UPDATE_DATAType = IUserProfileDataUpdate;

type GETType = {
  _uid: string;
};

type POSTType = {
  _data: IUserProfile;
};

type PUTType = {
  _uid: string;
  _data: IUserProfileDataUpdate;
};

type DELETEType = {
  _uid: string;
};

type FetchType = 'CREATE' | 'UPDATE' | 'DELETE';

type FetchDataType = {
  uid?: string;
  create?: IUserProfile;
  update?: IUserProfileDataUpdate;
};

type ParamType = {
  _uid: string;
};

interface ISuccess {
  name: string;
  message: string;
}

interface IError {
  name: string;
  message: string;
}

interface IServerError {
  status: number;
  statusText: string;
}

interface IUserProfileDataUpdate {
  '_data.fullName'?: string;
  '_data.emailAddress'?: string;
  '_data.phoneNumber'?: string;
  '_data.photoURL'?: string;
  '_data.dateOfBirth'?: string;
  '_data.age'?: string;
  '_data.gender'?: string;
  '_data.isVerified.phoneNumber'?: boolean;
  '_data.isVerified.emailAddress'?: boolean;
}

interface IUserProfileData {
  fullName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  photoURL?: string;
  dateOfBirth?: string;
  age?: string;
  gender?: string;
  isVerified?: {
    phoneNumber?: boolean;
    emailAddress?: boolean;
  };
}

interface IUserProfileDataConstructor {
  _data: IUserProfileData;
}

interface IUserProfileID {
  _uid: string;
}

interface IUserProfile extends IUserProfileID, IUserProfileDataConstructor {}

interface IUserProfileHook {
  FullName: string;
  EmailAddress: string;
  PhoneNumber: string;
  PhotoUrl: string;
  DateOfBirth: string;
  Gender: string;
  isEmailVerified: boolean | undefined;
  setFullName: Dispatch<string>;
  setEmailAddress: Dispatch<string>;
  setPhoneNumber: Dispatch<string>;
  setPhotoUrl: Dispatch<string>;
  setDateOfBirth: Dispatch<string>;
  setGender: Dispatch<string>;
  setIsEmailVerified: Dispatch<boolean | undefined>;
}

type AuthScreenType =
  | 'login-phone'
  | 'login-email'
  | 'login-others'
  | 'login-otp'
  | 'login-password'
  | 'login-forgot-password'
  | 'register-name'
  | 'register-phone'
  | 'register-otp'
  | 'register-email'
  | 'register-password'
  | 'register-verify-email'
  | 'register-profile-picture'
  | 'register-date-of-birth'
  | 'register-gender'
  | null;

type AuthAnimationType = {
  Initial: {
    x: number;
    opacity: number;
  };
  Final: {
    x: number;
    opacity: number;
  };
  Transition: {
    type: string;
  };
};

type AuthErrorType = 'database-not-created' | 'get-user-failed' | undefined;

type ToastSettingType = {
  Show: boolean;
  Title: string;
  Description: string;
  Type: 'Error' | 'Success' | 'Info' | 'Warning' | '' | '';
};

type MainScreenType = 'Error' | 'CheckInfo' | 'Finish' | 'Setup';

interface ISetupHook {
  ResetCaptcha: boolean;
  setResetCaptcha: Dispatch<boolean>;
  SkipDialog: boolean;
  setSkipDialog: Dispatch<boolean>;
  Loading: boolean;
  setLoading: Dispatch<boolean>;
  MainScreen: MainScreenType;
  setMainScreen: Dispatch<MainScreenType>;
  ErrorType: AuthErrorType;
  setErrorType: Dispatch<AuthErrorType>;
  Screen: AuthScreenType;
  setScreen: Dispatch<AuthScreenType>;
}

interface IToastHook {
  Toast: ToastSettingType;
  setToast: Dispatch<ToastSettingType>;
}

interface IToastDark {
  Open: boolean;
  onClose: Dispatch<boolean>;
  MessageTitle: string;
  MessageDescription: string;
  Type: string;
}

interface ILoaderHook {
  Loader: boolean;
  setLoader: Dispatch<boolean>;
}

interface IDeviceHook {
  isMobile: boolean;
  setIsMobile: Dispatch<boolean>;
}

interface IHomePageHook {
  HomePage: 'Discover' | 'Offers' | 'Collections';
  setHomePage: Dispatch<'Discover' | 'Offers' | 'Collections'>;
}

type ICheckInfoScreen =
  | 'initial-login-load'
  | 'after-name'
  | 'after-phone'
  | 'after-email'
  | 'after-verify-email'
  | 'after-profile-picture'
  | 'after-date-of-birth'
  | 'after-gender';
