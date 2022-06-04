import { NextPage } from 'next';
import Router from 'next/router';
import {
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
  useState,
  useEffect,
} from 'react';
import { SignUp } from '../../../algorithms/AuthAlgorithms';
import { ToastDark } from '../../../components/toast/ToastDark';
import RegisterUI from '../../../components/ui/RegisterUI';
import { NoAccessToNullUserPages } from '../../../hoc/ProtectedRoutes';
import { useLoaderState } from '../../../providers/state/LoadingState';

const Register: NextPage = () => {
  // ID
  const FirstNameID = 'FirstName-TextField-Signup';
  const LastNameID = 'LastName-TextField-Signup';
  const PhoneID = 'PhoneNumber-TextField-Signup';
  const EmailID = 'EmailAddress-TextField-Signup';
  const PasswordID = 'Password-TextField-Signup';

  // State
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const [TermsCheck, setTermsCheck] = useState(false);
  const [Toast, setToast] = useState(false);
  const [ToastMessage, setToastMessage] = useState('');
  const [ToastType, setToastType] = useState('');
  const [FirstNameError, setFirstNameError] = useState(false);
  const [LastNameError, setLastNameError] = useState(false);
  const [EmailError, setEmailError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);
  const [SubmitLoader, setSubmitLoader] = useState(false);

  // Handle State
  const FirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const LastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const EmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const PhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value.slice(-10);
    event.target.maxLength = 10;
    setPhone(event.target.value);
  };
  const PasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const TermsCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTermsCheck(event.target.checked);
  };

  // Loading
  const { setLoader } = useLoaderState();
  /* Loading Screen Defined but not used yet */
  const LoadingScreen = (value: boolean) => {
    setLoader({ show: value });
  };
  const SubmitLoading = (value: boolean) => {
    setSubmitLoader(value);
  };

  // Valid Format
  var passwordExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var emailExpression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Validate
  var ValidateFirstName = FirstName.length > 0;
  var ValidateLastName = LastName.length > 0;
  var ValidateEmail = Email.toLowerCase().match(emailExpression);
  var ValidatePassword =
    passwordExpression.test(Password) && Password.length > 8;

  // Handle Keys
  const FirstNameKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ValidateFirstName) {
      ValidFirstName();
    }
    if (event.key === 'Enter') {
      if (ValidateFirstName) {
        document.getElementById(LastNameID)?.focus();
      } else {
        InvalidFirstName();
      }
    }
  };
  const LastNameKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ValidateLastName) {
      ValidLastName();
    }
    if (event.key === 'Enter') {
      if (ValidateLastName) {
        document.getElementById(EmailID)?.focus();
      } else {
        InvalidLastName();
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
        SubmitClick();
      } else {
        InvalidPassword();
      }
    }
  };

  // Handle Blur
  const FirstNameBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (ValidateFirstName) {
      ValidFirstName();
    } else {
      setFirstNameError(true);
    }
  };
  const LastNameBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (ValidateLastName) {
      ValidLastName();
    } else {
      setLastNameError(true);
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

  // error
  const ValidFirstName = () => {
    setFirstNameError(false);
    HideToast();
  };
  const ValidLastName = () => {
    setLastNameError(false);
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
  const InvalidFirstName = () => {
    setFirstNameError(true);
    ShowToast('First name is empty', 'Error', true);
  };
  const InvalidLastName = () => {
    setLastNameError(true);
    ShowToast('Last name is empty', 'Error', true);
  };
  const InvalidEmail = () => {
    setEmailError(true);
    ShowToast('Invalid email', 'Error', true);
  };
  const InvalidPassword = () => {
    setPasswordError(true);
    ShowToast('Invalid password', 'Error', true);
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

  // Buttons
  const SubmitDisabled: boolean =
    !ValidateFirstName ||
    !ValidateLastName ||
    !ValidateEmail ||
    !ValidatePassword ||
    TermsCheck === false;

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
  const EmptyPassword = () => {
    setPassword('');
  };

  // Sign Up
  const SubmitClick = () => {
    setTimeout(() => {
      if (
        ValidateFirstName &&
        ValidateLastName &&
        ValidateEmail &&
        ValidatePassword
      ) {
        SignUp({
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          Password: Password,
          EmptyPasswordTextField: EmptyPassword,
          ToastMessage: AuthToastMessage,
          ToastType: AuthToastType,
          ToastShow: AuthToast,
          Loading: SubmitLoading,
        });
        ShowToast(ToastMessage, ToastType, Toast);
      } else {
        ShowToast('Incorrect input value', 'Error', true);
        EmptyPassword();
      }
    }, 250);
  };

  useEffect(() => {
    const { phone } = Router.query;
    setPhone(`${phone}`);
  }, [Phone, setPhone]);
  return (
    <>
      <RegisterUI
        FirstName={FirstName}
        FirstNameID={FirstNameID}
        FirstNameChange={FirstNameChange}
        FirstNameKeyUp={FirstNameKeyUp}
        LastName={LastName}
        LastNameID={LastNameID}
        LastNameChange={LastNameChange}
        LastNameKeyUp={LastNameKeyUp}
        Email={Email}
        EmailID={EmailID}
        EmailChange={EmailChange}
        EmailKeyUp={EmailKeyUp}
        Phone={Phone}
        PhoneID={PhoneID}
        PhoneChange={PhoneChange}
        Password={Password}
        PasswordID={PasswordID}
        PasswordChange={PasswordChange}
        PasswordKeyUp={PasswordKeyUp}
        FirstNameError={FirstNameError}
        LastNameError={LastNameError}
        EmailError={EmailError}
        PasswordError={PasswordError}
        FirstNameReadOnly={SubmitLoader}
        LastNameReadOnly={SubmitLoader}
        EmailReadOnly={SubmitLoader}
        PhoneReadOnly={true}
        PasswordReadOnly={SubmitLoader}
        FirstNameBlur={FirstNameBlur}
        LastNameBlur={LastNameBlur}
        EmailBlur={EmailBlur}
        PasswordBlur={PasswordBlur}
        TermsChecked={TermsCheck}
        TermsCheckedChange={TermsCheckChange}
        SubmitClick={SubmitClick}
        SubmitDisabled={SubmitDisabled}
        SubmitLoading={SubmitLoader}
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
        bgColor="bg-[#121212] sm:bg-[#202020]"
      />
    </>
  );
};

export default Register;

export const getServerSideProps = NoAccessToNullUserPages(() => {
  return {
    props: {},
  };
});
