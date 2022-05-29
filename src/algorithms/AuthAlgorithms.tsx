import firebase from 'firebase/compat/app';
import { useAuth } from '../firebase/AuthProvider';
import {
  ResendOTPProps,
  VerifyOTPProps,
  SignInWithPhoneNumberProps,
  SignInWithEmailAndPasswordProps,
  SignInWithFacebookProps,
  SignInWithGoogleProps,
  SignInWithAppleProps,
} from './AuthProps';

var window: any;
var grecaptcha: any;

const user = useAuth();

// Captcha

export const configureCaptcha = () => {
  if (typeof window === 'object') {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
          console.log('Recaptca Verified : ' + response);
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
  ErrorToastMessage,
  SuccessToastMessage,
}: ResendOTPProps) => {
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
      SuccessToastMessage('OTP sent successfully !');
      console.log('Otp has been sent to ' + number);
    })
    .catch((error) => {
      Loading(false);
      ErrorToastMessage('OTP not sent !');
      console.log('Otp not sent beacuse' + error.message);
    });
};

export const VerifyOTP = ({
  OTP,
  Loading,
  ErrorToastMessage,
}: VerifyOTPProps) => {
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
      } else {
        // navigate to home page
      }
    })
    .catch((error) => {
      Loading(false);
      ErrorToastMessage('Verification Failed');
      console.log('OTP verification failed beacuse ' + error.message);
    });
};

// SignIn

export const SignInWithPhoneNumber = ({
  phoneNumber,
  EmptyPhoneNumberTextField,
  ErrorToastMessage,
  SuccessToastMessage,
  ShowOTPDialog,
  Loading,
}: SignInWithPhoneNumberProps) => {
  if (!user) {
    Loading(true);
    configureCaptcha();
    // const getNumber = phoneNumber.slice(-10);
    const number = '+91' + phoneNumber;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(number, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        Loading(false);
        SuccessToastMessage('OTP sent successfully !');
        ShowOTPDialog();
        console.log('Otp has been sent to ' + number);
      })
      .catch((error) => {
        Loading(false);
        ErrorToastMessage('OTP not sent !');
        EmptyPhoneNumberTextField();
        console.log('Otp not sent beacuse' + error.message);
      });
  } else {
    console.log('user already exist');
  }
};

export const SignInWithEmailAndPassword = ({
  Email,
  Password,
  EmptyPasswordTextField,
  ErrorToastMessage,
  Loading,
}: SignInWithEmailAndPasswordProps) => {
  if (!user) {
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
        ErrorToastMessage('SignIn Failed');
        EmptyPasswordTextField();
        console.log(
          'SingIn with Email & Password Failed because ' + error.message
        );
      });
  } else {
    console.log('user already exist');
  }
};

export const SignInWithFacebook = ({
  ErrorToastMessage,
}: SignInWithFacebookProps) => {
  if (!user) {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        console.log('Signed in with Facebook!');
        // navigate to home page
      })
      .catch((error) => {
        ErrorToastMessage('SignIn Failed');
        console.error(
          'Failed to SignIn with Facebook because ' + error.message
        );
      });
  } else {
    console.log('user already exist');
  }
};

export const SignInWithGoogle = ({
  ErrorToastMessage,
}: SignInWithGoogleProps) => {
  if (!user) {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log('Signed in with Google!');
        // navigate to home page
      })
      .catch((error) => {
        ErrorToastMessage('SignIn Failed');
        console.error('Failed to SignIn with Google because ' + error.message);
      });
  } else {
    console.log('user already exist');
  }
};

export const SignInWithApple = ({
  ErrorToastMessage,
}: SignInWithAppleProps) => {
  if (!user) {
    const appleProvider = new firebase.auth.OAuthProvider('apple.com');
    firebase
      .auth()
      .signInWithPopup(appleProvider)
      .then((result) => {
        console.log('Signed in with Apple!');
        // navigate to home page
      })
      .catch((error) => {
        ErrorToastMessage('SignIn Failed');
        console.error('Failed to SignIn with Apple because ' + error.message);
      });
  } else {
    console.log('user already exist');
  }
};
