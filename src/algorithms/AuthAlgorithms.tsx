import firebase from 'firebase/compat/app';
import {
  ResendOTPProps,
  VerifyOTPProps,
  SignInWithPhoneNumberProps,
  SignInWithEmailAndPasswordProps,
  SignInWithFacebookProps,
  SignInWithGoogleProps,
  SignInWithAppleProps,
} from './AuthProps';
import 'firebase/compat/auth';

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}
var grecaptcha: any;

// Captcha

export const configureCaptcha = () => {
  if (typeof window === 'object') {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'verify-sign-in-recaptcha',
      {
        size: 'invisible',
        callback: (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
          console.log('Recaptca Verified');
        },
        'expired-callback': () => {
          // token expire
        },
        defaultCountry: 'IN',
      }
    );
  }
};

// OTP

export const ResentOTP = ({
  phoneNumber,
  Loading,
  ToastMessage,
  ToastType,
  ToastShow,
}: ResendOTPProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  Loading(true);
  window.recaptchaVerifier.render().then(function (widgetId: any) {
    grecaptcha.reset(widgetId);
  });
  // const getNumber = phoneNumber.slice(-10);
  const number = '+91' + phoneNumber;
  const appVerifier = window.recaptchaVerifier;
  firebase
    .auth()
    .signInWithPhoneNumber(number, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      Loading(false);
      Toast('OTP sent successfully', 'Success', true);
      console.log('Otp has been sent to ' + number);
    })
    .catch((error) => {
      Loading(false);
      Toast('OTP not sent', 'Error', true);
      console.log('Otp not sent beacuse' + error.message);
    });
};

export const VerifyOTP = ({
  OTP,
  Loading,
  ToastMessage,
  ToastType,
  ToastShow,
}: VerifyOTPProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  Loading(true);
  const code = OTP.toString();
  var credential = firebase.auth.PhoneAuthProvider.credential(
    window.confirmationResult.verificationId,
    code
  );
  firebase
    .auth()
    .signInWithCredential(credential)
    .then((result: any) => {
      console.log('user is verified and SignIn');
      const IsNewUser = result.additionalUserInfo.isNewUser;
      if (IsNewUser) {
        // navigate to SignUp page
        Loading(false);
      } else {
        // navigate to home page
        Loading(false);
      }
    })
    .catch((error) => {
      Loading(false);
      Toast('Verification Failed', 'Error', true);
      console.log('OTP verification failed beacuse ' + error.message);
    });
};

// SignIn

export const SignInWithPhoneNumber = ({
  Phone,
  EmptyPhone,
  ToastShow,
  ToastMessage,
  ToastType,
  ShowOTPDialog,
  Loading,
}: SignInWithPhoneNumberProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  Loading(true);
  configureCaptcha();
  // const getNumber = phoneNumber.slice(-10);
  const number = '+91' + Phone;
  const appVerifier = window.recaptchaVerifier;
  firebase
    .auth()
    .signInWithPhoneNumber(number, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      Loading(false);
      Toast('OTP sent successfully', 'Success', true);
      console.log('OTP sent to ' + number);
      ShowOTPDialog();
    })
    .catch((error) => {
      Loading(false);
      Toast('OTP not sent', 'Error', true);
      EmptyPhone();
      console.log('OTP not sent beacuse' + error.message);
    });
};

export const SignInWithEmailAndPassword = ({
  Email,
  Password,
  EmptyPasswordTextField,
  ToastMessage,
  ToastType,
  ToastShow,
  Loading,
}: SignInWithEmailAndPasswordProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  Loading(true);
  firebase
    .auth()
    .signInWithEmailAndPassword(Email, Password)
    .then(() => {
      // navigate to home page
      Loading(false);
      console.log('SingIn with Email & Password Successful !');
    })
    .catch((error) => {
      Loading(false);
      Toast('SignIn Failed', 'Error', true);
      EmptyPasswordTextField();
      console.log(
        'SingIn with Email & Password Failed because ' + error.message
      );
    });
};

export const SignInWithFacebook = ({
  ToastMessage,
  ToastType,
  ToastShow,
}: SignInWithFacebookProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(facebookProvider)
    .then((result) => {
      console.log('Signed in with Facebook!');
      // navigate to home page
    })
    .catch((error) => {
      Toast('SignIn Failed', 'Error', true);
      console.error('Failed to SignIn with Facebook because ' + error.message);
    });
};

export const SignInWithGoogle = ({
  ToastMessage,
  ToastType,
  ToastShow,
}: SignInWithGoogleProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      console.log('Signed in with Google!');
      // navigate to home page
    })
    .catch((error) => {
      Toast('SignIn Failed', 'Error', true);
      console.error('Failed to SignIn with Google because ' + error.message);
    });
};

export const SignInWithApple = ({
  ToastMessage,
  ToastType,
  ToastShow,
}: SignInWithAppleProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  const appleProvider = new firebase.auth.OAuthProvider('apple.com');
  firebase
    .auth()
    .signInWithPopup(appleProvider)
    .then((result) => {
      console.log('Signed in with Apple!');
      // navigate to home page
    })
    .catch((error) => {
      Toast('SignIn Failed', 'Error', true);
      console.error('Failed to SignIn with Apple because ' + error.message);
    });
};
