import type { NextPage } from 'next';
import { ChangeEvent, KeyboardEvent, FocusEvent, useState } from 'react';
import { PasswordReset } from '../../../algorithms/AuthAlgorithms';
import { ToastDark } from '../../../components/toast/ToastDark';
import ForgotPasswordUI from '../../../components/ui/ForgotPasswordUI';
import { NoAccessToUserExistPages } from '../../../hoc/ProtectedRoutes';

/**
 * @ForgotPassword_Page
 **/
const ForgotPassword: NextPage = () => {
  // ID
  const EmailID = 'EmailAddress-TextField-Forgot-Password';

  // State
  const [Email, setEmail] = useState('');
  const [Toast, setToast] = useState(false);
  const [ToastMessage, setToastMessage] = useState('');
  const [ToastType, setToastType] = useState('');
  const [Loading, setLoading] = useState(false);
  const [EmailError, setEmailError] = useState(false);

  // Handle State
  const EmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Loading
  const SubmitLoading = (value: boolean) => {
    setLoading(value);
  };

  // Valid Format
  var emailExpression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Validate
  var ValidateEmail = Email.toLowerCase().match(emailExpression);

  // Handle Key
  const EmailKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ValidateEmail) {
      ValidEmail();
    }
    if (event.key === 'Enter') {
      if (ValidateEmail) {
        SubmitClick();
      } else {
        InvalidEmail();
      }
    }
  };

  // Handle Blur
  const EmailBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (ValidateEmail) {
      ValidEmail();
    } else {
      setEmailError(true);
    }
  };

  // Error
  const ValidEmail = () => {
    setEmailError(false);
    HideToast();
  };
  const InvalidEmail = () => {
    setEmailError(true);
    ShowToast('Invalid email', 'Error', true);
  };

  // Disabled
  const SubmitDisabled: boolean | any = Email.length < 1 || !ValidateEmail;

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

  // Submit
  const SubmitClick = () => {
    setTimeout(() => {
      if (ValidateEmail) {
        PasswordReset({
          Email: Email,
          ToastMessage: AuthToastMessage,
          ToastType: AuthToastType,
          ToastShow: AuthToast,
          Loading: SubmitLoading,
        });
      } else {
        ShowToast('Incorrect email', 'Error', true);
      }
    }, 250);
  };

  return (
    <>
      <ForgotPasswordUI
        Email={Email}
        EmailID={EmailID}
        EmailChange={EmailChange}
        EmailError={EmailError}
        EmailReadOnly={Loading}
        EmailKeyUp={EmailKeyUp}
        EmailBlur={EmailBlur}
        SubmitClick={SubmitClick}
        SubmitDisabled={SubmitDisabled}
        SubmitLoading={Loading}
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

export default ForgotPassword;

export const getServerSideProps = NoAccessToUserExistPages(() => {
  return {
    props: {},
  };
});
