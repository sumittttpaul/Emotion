import type { NextPage } from 'next';
import LoginUI from '../../../components/ui/LoginUI';
import OTPAuthUI from '../../../components/ui/ComponentUI/Login/OTPAuthUI';
import { ToastDark } from '../../../components/toast/ToastDark';
import {
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  useState,
  FocusEvent,
} from 'react';
import {
  ClickToFocus,
  InputChangeFocus,
  InputNumberOnly,
} from '../../../algorithms/UIAlgorithms';
import {
  ResentOTP,
  SignInWithApple,
  SignInWithEmailAndPassword,
  SignInWithFacebook,
  SignInWithGoogle,
  SignInWithPhoneNumber,
  VerifyOTP,
} from '../../../algorithms/AuthAlgorithms';
import { useLoaderState } from '../../../providers/state/LoadingState';
import { NoAccessToUserExistPages } from '../../../hoc/ProtectedRoutes';

/**
 * @Login_Page
 **/
const Login: NextPage = () => {
  // ID
  const PhoneID = 'PhoneNumber-TextField-Login';
  const EmailID = 'EmailAddress-TextField-Login';
  const PasswordID = 'Password-TextField-Login';

  // State
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [OTP1, setOTP1] = useState('');
  const [OTP2, setOTP2] = useState('');
  const [OTP3, setOTP3] = useState('');
  const [OTP4, setOTP4] = useState('');
  const [OTP5, setOTP5] = useState('');
  const [OTP6, setOTP6] = useState('');
  const [PhoneCheck, setPhoneCheck] = useState(false);
  const [EmailCheck, setEmailCheck] = useState(false);
  const [OTPDialog, setOTPDialog] = useState(false);
  const [Toast, setToast] = useState(false);
  const [ToastMessage, setToastMessage] = useState('');
  const [ToastType, setToastType] = useState('');
  const [PhoneError, setPhoneError] = useState(false);
  const [EmailError, setEmailError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);
  const [PhoneLoader, setPhoneLoader] = useState(false);
  const [EmailLoader, setEmailLoader] = useState(false);
  const [EmptyOTPBox, setEmptyOTPBox] = useState(false);
  const [ResetCaptcha, setResetCaptcha] = useState(false);

  // Handle State
  const PhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value.slice(-10);
    event.target.maxLength = 10;
    setPhone(event.target.value);
  };
  const EmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const PasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const OTP1Change = (event: ChangeEvent<HTMLInputElement>) => {
    setOTP1(event.target.value.trim());
  };
  const OTP2Change = (event: ChangeEvent<HTMLInputElement>) => {
    setOTP2(event.target.value.trim());
  };
  const OTP3Change = (event: ChangeEvent<HTMLInputElement>) => {
    setOTP3(event.target.value.trim());
  };
  const OTP4Change = (event: ChangeEvent<HTMLInputElement>) => {
    setOTP4(event.target.value.trim());
  };
  const OTP5Change = (event: ChangeEvent<HTMLInputElement>) => {
    setOTP5(event.target.value.trim());
  };
  const OTP6Change = (event: ChangeEvent<HTMLInputElement>) => {
    setOTP6(event.target.value.trim());
  };
  const PhoneCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneCheck(event.target.checked);
  };
  const EmailCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailCheck(event.target.checked);
  };

  // Loading
  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => {
    setLoader({ show: value });
  };
  const PhoneLoading = (value: boolean) => {
    setPhoneLoader(value);
  };
  const EmailLoading = (value: boolean) => {
    setEmailLoader(value);
  };

  // Valid Format
  var passwordExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var emailExpression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Validate
  var ValidateEmail = Email.toLowerCase().match(emailExpression);
  var ValidatePassword =
    passwordExpression.test(Password) && Password.length > 8;
  var ValidatePhone = Phone.length == 10;

  // Handle Click
  const OTPClick = (event: MouseEvent<HTMLInputElement>) => {
    ClickToFocus(event);
  };

  // Handle Keys
  const NumberOnly = (event: KeyboardEvent<HTMLInputElement>) => {
    InputNumberOnly(event);
  };
  const ChangeFocus = (event: KeyboardEvent<HTMLInputElement>) => {
    InputChangeFocus(event);
    OTPSubmit();
  };
  const PhoneKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ValidatePhone) {
      ValidPhone();
    }
    if (event.key === 'Enter') {
      if (ValidatePhone) {
        PhoneSubmitClick();
      } else {
        InvalidPhone();
      }
    }
  };
  const EmailKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ValidateEmail) {
      ValidEmail();
    }
    if (event.key === 'Enter') {
      if (ValidateEmail) {
        document.getElementById(PasswordID)?.focus();
      } else {
        InvalidEmail();
      }
    }
  };
  const PasswordKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ValidatePassword) {
      ValidPassword();
    }
    if (event.key === 'Enter') {
      if (ValidatePassword) {
        EmailSubmitClick();
      } else {
        InvalidPassword();
      }
    }
  };

  // Handle Blur
  const PhoneBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (ValidatePhone) {
      ValidPhone();
    } else {
      setPhoneError(true);
    }
  };
  const EmailBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (ValidateEmail) {
      ValidEmail();
    } else {
      setEmailError(true);
    }
  };
  const PasswordBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (ValidatePassword) {
      ValidPassword();
    } else {
      setPasswordError(true);
    }
  };

  // Buttons
  const PhoneSubmitDisabled: boolean =
    Phone.length < 9 || Phone.length == 9 || PhoneCheck === false;
  const EmailSubmitDisabled: boolean | any =
    Email.length < 1 ||
    !ValidateEmail ||
    !ValidatePassword ||
    Password.length < 8 ||
    EmailCheck === false;
  const TabClick = (value: boolean) => {
    if (value) {
      setTimeout(() => {
        setEmail('');
        setPassword('');
        setEmailCheck(false);
        ValidEmail();
        ValidPassword();
      }, 200);
    } else {
      setTimeout(() => {
        setPhone('');
        setPhoneCheck(false);
        ValidPhone();
      }, 200);
    }
  };

  // error
  const ValidPhone = () => {
    setPhoneError(false);
    HideToast();
  };
  const ValidEmail = () => {
    setEmailError(false);
    HideToast();
  };
  const ValidPassword = () => {
    setPasswordError(false);
    HideToast();
  };
  const InvalidPhone = () => {
    setPhoneError(true);
    ShowToast('Invalid phone number', 'Error', true);
  };
  const InvalidEmail = () => {
    setEmailError(true);
    ShowToast('Invalid email', 'Error', true);
  };
  const InvalidPassword = () => {
    setPasswordError(true);
    ShowToast('Invalid password', 'Error', true);
  };

  // OTPDialog
  const ShowOTPDialog = () => {
    setOTPDialog(true);
  };
  const CloseOTPDialog = () => {
    setOTPDialog(false);
    HideToast();
    setTimeout(() => {
      clearOTP();
    }, 250);
  };
  const CancelOTPVerification = () => {
    setOTPDialog(false);
    HideToast();
    setTimeout(() => {
      clearOTP();
      setResetCaptcha(true);
      ShowToast('Verification process failed', 'Error', true);
    }, 250);
  };
  const clearOTP = () => {
    setOTP1('');
    setOTP2('');
    setOTP3('');
    setOTP4('');
    setOTP5('');
    setOTP6('');
  };
  const CloseOTPDialogByButton = (value: boolean) => {
    PhoneLoading(value);
  };

  // Toast
  const ShowToast = (message: string, type: string, show: boolean) => {
    setToastMessage(message);
    setToastType(type);
    setToast(show);
  };
  const HideToast = () => {
    setToast(false);
  };

  // Auth Toast
  const AuthToastMessage = (value: string) => {
    setToastMessage(value);
  };
  const AuthToastType = (value: string) => {
    setToastType(value);
  };
  const AuthToast = (value: boolean) => {
    setToast(value);
  };

  // Empty TextField
  const EmptyPhone = () => {
    setPhone('');
  };
  const EmptyPassword = () => {
    setPassword('');
  };
  const EmptyOTP = () => {
    clearOTP();
    if (typeof window === 'object')
      document.getElementById('OTPInputField1')?.focus();
  };

  // signIn with phone number
  const PhoneSubmitClick = () => {
    setTimeout(() => {
      if (ValidatePhone) {
        SignInWithPhoneNumber({
          Phone: parseInt(Phone),
          EmptyPhone: EmptyPhone,
          Loading: PhoneLoading,
          ShowOTPDialog: ShowOTPDialog,
          ToastMessage: AuthToastMessage,
          ToastType: AuthToastType,
          ToastShow: AuthToast,
          ResetCaptcha: ResetCaptcha,
          setResetCaptcha: (e) => setResetCaptcha(e),
        });
        ShowToast(ToastMessage, ToastType, Toast);
      } else {
        ShowToast('Incorrect phone number', 'Error', true);
      }
    }, 250);
  };

  // OTP Submit
  const OTPSubmit = () => {
    if (
      OTP1.length > 0 &&
      OTP1.length == 1 &&
      OTP2.length > 0 &&
      OTP2.length == 1 &&
      OTP3.length > 0 &&
      OTP3.length == 1 &&
      OTP4.length > 0 &&
      OTP4.length == 1 &&
      OTP5.length > 0 &&
      OTP5.length == 1 &&
      OTP6.length > 0 &&
      OTP6.length == 1
    ) {
      setTimeout(() => {
        VerifyOTP({
          Phone: parseInt(Phone),
          OTP: parseInt(OTP1 + OTP2 + OTP3 + OTP4 + OTP5 + OTP6),
          EmptyOTPBox: EmptyOTP,
          Loading: LoadingScreen,
          ToastMessage: AuthToastMessage,
          ToastType: AuthToastType,
          ToastShow: AuthToast,
        });
        ShowToast(ToastMessage, ToastType, Toast);
      }, 200);
    }
  };

  // Resend OTP
  const OTPResend = () => {
    setTimeout(() => {
      ResentOTP({
        Phone: parseInt(Phone),
        Loading: LoadingScreen,
        ToastMessage: AuthToastMessage,
        ToastType: AuthToastType,
        ToastShow: AuthToast,
      });
      ShowToast(ToastMessage, ToastType, Toast);
    }, 250);
  };

  // signIn with email and password
  const EmailSubmitClick = () => {
    setTimeout(() => {
      if (ValidateEmail && ValidatePassword) {
        SignInWithEmailAndPassword({
          Email: Email,
          Password: Password,
          EmptyPasswordTextField: EmptyPassword,
          ToastMessage: AuthToastMessage,
          ToastType: AuthToastType,
          ToastShow: AuthToast,
          Loading: EmailLoading,
          LoadingScreen: LoadingScreen,
        });
        ShowToast(ToastMessage, ToastType, Toast);
      } else {
        ShowToast('Incorrect email or password', 'Error', true);
        EmptyPassword();
      }
    }, 250);
  };

  const FacebookSignIn = () => {
    setTimeout(() => {
      SignInWithFacebook({
        ToastMessage: AuthToastMessage,
        ToastType: AuthToastType,
        ToastShow: AuthToast,
        LoadingScreen: LoadingScreen,
      });
    }, 150);
  };
  const GoogleSignIn = () => {
    setTimeout(() => {
      SignInWithGoogle({
        ToastMessage: AuthToastMessage,
        ToastType: AuthToastType,
        ToastShow: AuthToast,
        LoadingScreen: LoadingScreen,
      });
    }, 150);
  };
  const AppleSignIn = () => {
    setTimeout(() => {
      SignInWithApple({
        ToastMessage: AuthToastMessage,
        ToastType: AuthToastType,
        ToastShow: AuthToast,
        LoadingScreen: LoadingScreen,
      });
    }, 150);
  };

  const recaptchaContainer =
    'h-full sm:h-screen w-full absolute flex text-center items-center justify-center';

  return (
    <>
      <div className={recaptchaContainer} id="verify-sign-in-recaptcha" />
      <LoginUI
        Phone={Phone.slice(-10)}
        PhoneID={PhoneID}
        PhoneChange={PhoneChange}
        PhoneKeyUp={PhoneKeyUp}
        PhoneKeyPress={NumberOnly}
        Email={Email}
        EmailID={EmailID}
        EmailChange={EmailChange}
        EmailKeyUp={EmailKeyUp}
        Password={Password}
        PasswordID={PasswordID}
        PasswordChange={PasswordChange}
        PasswordKeyUp={PasswordKeyUp}
        PhonePolicyChecked={PhoneCheck}
        PhonePolicyCheckedChange={PhoneCheckChange}
        EmailPolicyChecked={EmailCheck}
        EmailPolicyCheckedChange={EmailCheckChange}
        PhoneSubmitDisabled={PhoneSubmitDisabled}
        EmailSubmitDisabled={EmailSubmitDisabled}
        PhoneSubmitLoading={PhoneLoader}
        EmailSubmitLoading={EmailLoader}
        PhoneSubmitClick={PhoneSubmitClick}
        EmailSubmitClick={EmailSubmitClick}
        TabClick={TabClick}
        FacebookSignIn={FacebookSignIn}
        GoogleSignIn={GoogleSignIn}
        AppleSignIn={AppleSignIn}
        PhoneError={PhoneError}
        EmailError={EmailError}
        PasswordError={PasswordError}
        PhoneBlur={PhoneBlur}
        EmailBlur={EmailBlur}
        PasswordBlur={PasswordBlur}
        PhoneReadOnly={PhoneLoader}
        EmailReadOnly={EmailLoader}
        PasswordReadOnly={EmailLoader}
      />
      <OTPAuthUI
        open={OTPDialog}
        close={CancelOTPVerification}
        phone={Phone}
        resend={OTPResend}
        PhoneLoading={CloseOTPDialogByButton}
        OTP1={OTP1}
        OTP1Click={OTPClick}
        OTP1Change={OTP1Change}
        OTP1KeyPress={NumberOnly}
        OTP1KeyUp={ChangeFocus}
        OTP2={OTP2}
        OTP2Click={OTPClick}
        OTP2Change={OTP2Change}
        OTP2KeyPress={NumberOnly}
        OTP2KeyUp={ChangeFocus}
        OTP3={OTP3}
        OTP3Click={OTPClick}
        OTP3Change={OTP3Change}
        OTP3KeyPress={NumberOnly}
        OTP3KeyUp={ChangeFocus}
        OTP4={OTP4}
        OTP4Click={OTPClick}
        OTP4Change={OTP4Change}
        OTP4KeyPress={NumberOnly}
        OTP4KeyUp={ChangeFocus}
        OTP5={OTP5}
        OTP5Click={OTPClick}
        OTP5Change={OTP5Change}
        OTP5KeyPress={NumberOnly}
        OTP5KeyUp={ChangeFocus}
        OTP6={OTP6}
        OTP6Click={OTPClick}
        OTP6Change={OTP6Change}
        OTP6KeyPress={NumberOnly}
        OTP6KeyUp={ChangeFocus}
      />
      <ToastDark
        message={ToastMessage}
        open={Toast}
        close={HideToast}
        type={ToastType}
        autoHideDuration={6000}
        slideDirection="down"
        positionVertical="top"
        positionHorizontal="center"
        bgColor="bg-[#0f0f0f] sm:bg-[#202020]"
      />
    </>
  );
};

export const getServerSideProps = NoAccessToUserExistPages(() => {
  return {
    props: {},
  };
});

export default Login;
