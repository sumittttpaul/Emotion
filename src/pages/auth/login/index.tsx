import type { NextPage } from 'next';
import LoginUI from '../../../components/ui/LoginUI';
import OTPAuthUI from '../../../components/ui/AuthComponentUI/LoginComponentUI/OTPAuthUI';
import { ToastDark } from '../../../components/toast/ToastDark';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import {
  InputChangeFocus,
  InputNumberOnly,
} from '../../../algorithms/UIAlgorithms';

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

  // Handle Keys
  const NumberOnly = (event: KeyboardEvent<HTMLInputElement>) => {
    InputNumberOnly(event);
  };
  const ChangeFocus = (event: KeyboardEvent<HTMLInputElement>) => {
    InputChangeFocus(event);
    OTPSubmit();
  };
  const PhoneKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    ValidPhone();
    if (event.key === 'Enter') {
      if (Phone.length == 10) {
        if (PhoneCheck === true) {
          // SignIn
        } else {
          // Privacy policy not check
        }
      } else {
        InvalidPhone();
      }
    }
  };
  const EmailKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (Email.length > 0) {
        // Change focus to password input
      }
    }
  };
  const PasswordKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (Email.length > 0 && Password.length > 8 && EmailCheck === true) {
        // SignIn
      }
    }
  };

  // Buttons
  const PhoneSubmitDisabled: boolean =
    Phone.length < 9 || Phone.length == 9 || PhoneCheck === false;

  const EmailSubmitDisabled: boolean =
    Email.length < 1 || Password.length < 8 || EmailCheck === false;

  const PhoneSubmitClick = () => {
    setToastMessage('OTP sent successfully');
    setToastType('Success');
    setToast(true);
    setTimeout(() => {
      setOTPDialog(true);
    }, 250);
  };

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
        CloseOTPDialog();
      }, 100);
    }
  };

  const FacebookSignIn = () => {};
  const GoogleSignIn = () => {};
  const AppleSignIn = () => {};
  const OTPResend = () => {};

  // OTPDialog and Toast
  const CloseOTPDialog = () => {
    setOTPDialog(false);
    setToast(false);
    setTimeout(() => {
      clearOTP();
    }, 250);
  };
  const CloseToast = () => {
    setToast(false);
  };
  const clearOTP = () => {
    setOTP1('');
    setOTP2('');
    setOTP3('');
    setOTP4('');
    setOTP5('');
    setOTP6('');
  };

  // error
  const ValidPhone = () => {
    if (Phone.length == 10) {
      setPhoneError(false);
    }
  };
  const ValidEmail = () => {
    setEmailError(false);
  };
  const ValidPassword = () => {
    setPasswordError(false);
  };
  const InvalidPhone = () => {
    setPhoneError(true);
  };
  const InvalidEmail = () => {
    setEmailError(true);
  };
  const InvalidPassword = () => {
    setPasswordError(true);
  };

  return (
    <>
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
        close={CloseToast}
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
