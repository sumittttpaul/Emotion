/* ---- Dialog ---- */

interface SetupCheckDialogProps {
  Open: boolean;
  PrevFullName?: string;
  PrevPhotoUrl?: string;
  NewFullName?: string;
  NewPhotoUrl?: string;
}

interface SetupSkipDialogProps {
  Open: boolean;
  onClose: () => void;
}

/* ---- Screen - Login ---- */

interface SetupLoginEmailScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  setScreen: Dispatch<AuthScreenType>;
  Loading: boolean;
}

interface SetupLoginForgotPasswordScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  setScreen: Dispatch<AuthScreenType>;
  setLoading: Dispatch<boolean>;
}

interface SetupLoginOtherAccountScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  setLoading: Dispatch<boolean>;
  setErrorType: Dispatch<AuthErrorType>;
  setMainScreen: Dispatch<AuthMainScreenType>;
}

interface SetupLoginOTPScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  setLoading: Dispatch<boolean>;
  setErrorType: Dispatch<AuthErrorType>;
  setMainScreen: Dispatch<AuthMainScreenType>;
  setResetCaptcha: Dispatch<boolean>;
  Loading: boolean;
}

interface SetupLoginPasswordScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  setScreen: Dispatch<AuthScreenType>;
  setLoading: Dispatch<boolean>;
  Loading: boolean;
}

interface SetupLoginPhoneScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  setScreen: Dispatch<AuthScreenType>;
  setLoading: Dispatch<boolean>;
  ResetCaptcha: boolean;
  setResetCaptcha: Dispatch<boolean>;
  Loading: boolean;
}

/* ---- Screen - Register ---- */

interface SetupRegisterBirthdayScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  setSkipDialog: Dispatch<boolean>;
  setLoading: Dispatch<boolean>;
}

interface SetupRegisterEmailScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  setSkipDialog: Dispatch<boolean>;
  setLoading: Dispatch<boolean>;
  Loading: boolean;
}

interface SetupRegisterGenderScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  setSkipDialog: Dispatch<boolean>;
  setLoading: Dispatch<boolean>;
}

interface SetupRegisterNameScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setSkipDialog: Dispatch<boolean>;
  setLoading: Dispatch<boolean>;
  Loading: boolean;
}

interface SetupRegisterOTPScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  setResetCaptcha: Dispatch<boolean>;
  setLoading: Dispatch<boolean>;
  Loading: boolean;
}

interface SetupRegisterPasswordScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  setLoading: Dispatch<boolean>;
  Loading: boolean;
}

interface SetupRegisterPhoneScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  ResetCaptcha: boolean;
  setResetCaptcha: Dispatch<boolean>;
  setSkipDialog: Dispatch<boolean>;
  setLoading: Dispatch<boolean>;
  Loading: boolean;
}

interface SetupRegisterProfilePictureScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  setSkipDialog: Dispatch<boolean>;
}

interface SetupRegisterVerifyEmailScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setLoading: Dispatch<boolean>;
}

/* ---- Screen ---- */

interface SetupErrorScreenProps {
  Type: 'database-not-created' | 'get-user-failed' | undefined;
  ToastTitle: string;
  ToastDescription: string;
  ClassName?: string;
}

interface SetupFinishScreenProps {
  ClassName: string;
}
