import type { NextPage } from 'next';
import LoginUI from '../../../components/ui/LoginUI';
import OTPAuthUI from '../../../components/ui/AuthComponentUI/LoginComponentUI/OTPAuthUI';
import { ToastDark } from '../../../components/toast/ToastDark';
import { ChangeEvent, KeyboardEvent, useState, FocusEvent } from 'react';
import {
  InputChangeFocus,
  InputNumberOnly,
} from '../../../algorithms/UIAlgorithms';
import {
  SignInWithPhoneNumber,
  VerifyOTP,
} from '../../../algorithms/AuthAlgorithms';

const Login: NextPage = () => {
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
  const LaadingScreen = (value: boolean) => {
    console.log('Loading : ' + value);
  };

  // Valid Format
  var passwordExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var emailExpression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var ValidateEmail = Email.toLowerCase().match(emailExpression);
  var ValidatePassword =
    passwordExpression.test(Password) && Password.length > 8;
  var ValidatePhone = Phone.length == 10;

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
        // SignIn
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
        // Change focus to password input
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
        // SignIn
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
  const EmailSubmitDisabled: boolean =
    Email.length < 1 || Password.length < 8 || EmailCheck === false;

  const EmailSubmitClick = () => {};

  const TabClick = (value: boolean) => {
    if (value) {
      setTimeout(() => {
        setEmail('');
        setPassword('');
        setEmailCheck(false);
      }, 250);
    } else {
      setTimeout(() => {
        setPhone('');
        setPhoneCheck(false);
      }, 250);
    }
  };

  const FacebookSignIn = () => {};
  const GoogleSignIn = () => {};
  const AppleSignIn = () => {};
  const OTPResend = () => {};

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
  const clearOTP = () => {
    setOTP1('');
    setOTP2('');
    setOTP3('');
    setOTP4('');
    setOTP5('');
    setOTP6('');
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
  const EmptyEmail = () => {
    setEmail('');
  };
  const EmptyPassword = () => {
    setPassword('');
  };

  // signIn with phone number
  const PhoneSubmitClick = () => {
    setTimeout(() => {
      if (ValidatePhone) {
        SignInWithPhoneNumber({
          Phone: parseInt(Phone),
          EmptyPhone: EmptyPhone,
          Loading: LaadingScreen,
          ShowOTPDialog: ShowOTPDialog,
          ToastMessage: AuthToastMessage,
          ToastType: AuthToastType,
          ToastShow: AuthToast,
        });
        ShowToast(ToastMessage, ToastType, Toast);
      } else {
        InvalidPhone();
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
          OTP: parseInt(OTP1 + OTP2 + OTP3 + OTP4 + OTP5 + OTP6),
          Loading: LaadingScreen,
          ToastMessage: AuthToastMessage,
          ToastType: AuthToastType,
          ToastShow: AuthToast,
        });
        ShowToast(ToastMessage, ToastType, Toast);
        CloseOTPDialog();
      }, 200);
    }
  };

  const recaptchaContainer =
    'h-full sm:h-screen w-full absolute flex flex-col text-center items-center justify-center';
  return (
    <>
      <div className={recaptchaContainer} id="verify-sign-in-recaptcha" />
      <LoginUI
        Phone={Phone.slice(-10)}
        PhoneChange={PhoneChange}
        PhoneKeyUp={PhoneKeyUp}
        PhoneKeyPress={NumberOnly}
        Email={Email}
        EmailChange={EmailChange}
        EmailKeyUp={EmailKeyUp}
        Password={Password}
        PasswordChange={PasswordChange}
        PasswordKeyUp={PasswordKeyUp}
        PhonePolicyChecked={PhoneCheck}
        PhonePolicyCheckedChange={PhoneCheckChange}
        EmailPolicyChecked={EmailCheck}
        EmailPolicyCheckedChange={EmailCheckChange}
        PhoneSubmitDisabled={PhoneSubmitDisabled}
        EmailSubmitDisabled={EmailSubmitDisabled}
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
      />
      <OTPAuthUI
        open={OTPDialog}
        close={CloseOTPDialog}
        phone={Phone}
        resend={OTPResend}
        OTP1={OTP1}
        OTP1Change={OTP1Change}
        OTP1KeyPress={NumberOnly}
        OTP1KeyUp={ChangeFocus}
        OTP2={OTP2}
        OTP2Change={OTP2Change}
        OTP2KeyPress={NumberOnly}
        OTP2KeyUp={ChangeFocus}
        OTP3={OTP3}
        OTP3Change={OTP3Change}
        OTP3KeyPress={NumberOnly}
        OTP3KeyUp={ChangeFocus}
        OTP4={OTP4}
        OTP4Change={OTP4Change}
        OTP4KeyPress={NumberOnly}
        OTP4KeyUp={ChangeFocus}
        OTP5={OTP5}
        OTP5Change={OTP5Change}
        OTP5KeyPress={NumberOnly}
        OTP5KeyUp={ChangeFocus}
        OTP6={OTP6}
        OTP6Change={OTP6Change}
        OTP6KeyPress={NumberOnly}
        OTP6KeyUp={ChangeFocus}
      />
      <ToastDark
        message={ToastMessage}
        open={Toast}
        close={HideToast}
        autoHideDuration={6000}
        slideDirection="down"
        positionVertical="top"
        positionHorizontal="center"
        type={ToastType}
        bgColor="bg-[#121212] sm:bg-[#202020]"
      />
    </>
  );
};

export default Login;
