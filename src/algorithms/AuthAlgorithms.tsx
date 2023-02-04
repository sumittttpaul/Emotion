import firebase from 'firebase/compat/app';
import {
  ResendOTPProps,
  VerifyOTPProps,
  SignInWithPhoneNumberProps,
  SignInWithEmailAndPasswordProps,
  SignInWithFacebookProps,
  SignInWithGoogleProps,
  SignInWithAppleProps,
  SignUpProps,
  UploadAvatarProps,
  DeleteAvatarProps,
  RecaptchaProps,
  PasswordResentProps,
} from './Props/AuthProps';
import 'firebase/compat/auth';
import { AuthError } from '../firebase/AuthError';
import { getDownloadURL } from 'firebase/storage';
import Router from 'next/router';
import {
  Home_Link,
  Register_Link,
  Setup_Account_Link,
} from '../routerLinks/RouterLinks';

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
    grecaptcha: any;
  }
}

// Captcha

export const configureCaptcha = ({
  ToastMessage,
  ToastType,
  ToastShow,
  ResetCaptcha,
}: RecaptchaProps) => {
  if (typeof window === 'object') {
    const Toast = (message: string, type: string, show: boolean) => {
      ToastMessage(message);
      ToastType(type);
      ToastShow(show);
    };
    if (ResetCaptcha) {
      window.recaptchaVerifier.render().then(function (widgetId: any) {
        window.grecaptcha.reset(widgetId);
      });
    } else {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        'verify-sign-in-recaptcha',
        {
          size: 'invisible',
          callback: (response: any) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            console.log('Recaptca Verified');
          },
          'expired-callback': () => {
            Toast(
              'Recaptcha token expired, please refresh the page',
              'Error',
              true
            );
          },
          defaultCountry: 'IN',
        }
      );
    }
  }
};

// OTP

export const ResentOTP = ({
  Phone,
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
    window.grecaptcha.reset(widgetId);
  });
  const number = '+91' + Phone;
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
      const message = AuthError(error.code);
      Toast(`${message}`, 'Error', true);
      console.error('Otp not sent beacuse' + error.code);
    });
};

export const VerifyOTP = ({
  Phone,
  OTP,
  Loading,
  EmptyOTPBox,
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
        if (firebase.auth().currentUser) {
          const UID = firebase.auth().currentUser?.uid;
          Loading(true);
          Router.push({
            pathname: Register_Link,
            query: { id: `${UID}`, phone: `${Phone}` },
          });
        }
      } else {
        Loading(true);
        Router.push(Home_Link);
      }
    })
    .catch((error) => {
      Loading(false);
      const message = AuthError(error.code);
      if (message == 'Invalid verification code') EmptyOTPBox();
      Toast(`${message}`, 'Error', true);
      console.error('OTP verification failed beacuse ' + error.code);
    });
};

export const PasswordReset = ({
  Email,
  Loading,
  ToastShow,
  ToastMessage,
  ToastType,
}: PasswordResentProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  Loading(true);
  firebase
    .auth()
    .sendPasswordResetEmail(Email)
    .then(() => {
      Loading(false);
      Toast('Password reset link sent successfully', 'Success', true);
    })
    .catch((error) => {
      Loading(false);
      const message = AuthError(error.code);
      Toast(`${message}`, 'Error', true);
      console.error('Password reset link not sent beacuse' + error.code);
    });
};

// SignIn

export const SignInWithPhoneNumber = ({
  Phone,
  EmptyPhone,
  ToastShow,
  ToastMessage,
  ToastType,
  ResetCaptcha,
  setResetCaptcha,
  ShowOTPDialog,
  Loading,
}: SignInWithPhoneNumberProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  Loading(true);
  configureCaptcha({
    ToastShow: ToastShow,
    ToastMessage: ToastMessage,
    ToastType: ToastType,
    ResetCaptcha: ResetCaptcha,
  });
  const number = '+91' + Phone;
  const appVerifier = window.recaptchaVerifier;
  firebase
    .auth()
    .signInWithPhoneNumber(number, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      Toast('OTP sent successfully', 'Success', true);
      console.log('OTP sent to ' + number);
      ShowOTPDialog();
      // Loading(false);
    })
    .catch((error) => {
      Loading(false);
      const message = AuthError(error.code);
      Toast(`${message}`, 'Error', true);
      EmptyPhone();
      setResetCaptcha(true);
      console.error('OTP not sent beacuse' + error.code);
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
  LoadingScreen,
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
      LoadingScreen(true);
      Router.push(Home_Link);
      console.error('SingIn with Email & Password Successful !');
    })
    .catch((error) => {
      Loading(false);
      const message = AuthError(error.code);
      Toast(`${message}`, 'Error', true);
      EmptyPasswordTextField();
      console.error(
        'SingIn with Email & Password Failed because ' + error.code
      );
    });
};

export const SignInWithFacebook = ({
  ToastMessage,
  ToastType,
  ToastShow,
  LoadingScreen,
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
      LoadingScreen(true);
      Router.push(Home_Link);
      console.log('SignIn with Facebook Successful !');
    })
    .catch((error) => {
      const message = AuthError(error.code);
      Toast(`${message}`, 'Error', true);
      console.error('Failed to SignIn with Facebook because ' + error.code);
    });
};

export const SignInWithGoogle = ({
  ToastMessage,
  ToastType,
  ToastShow,
  LoadingScreen,
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
      LoadingScreen(true);
      Router.push(Home_Link);
      console.log('SignIn with Google Successful !');
    })
    .catch((error) => {
      const message = AuthError(error.code);
      Toast(`${message}`, 'Error', true);
      console.error('Failed to SignIn with Google because ' + error.code);
    });
};

export const SignInWithApple = ({
  ToastMessage,
  ToastType,
  ToastShow,
  LoadingScreen,
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
      LoadingScreen(true);
      Router.push(Home_Link);
      console.log('SignIn with Apple Successful !');
    })
    .catch((error) => {
      const message = AuthError(error.code);
      Toast(`${message}`, 'Error', true);
      console.error('Failed to SignIn with Apple because ' + error.code);
    });
};

// Sign Up

export const SignUp = ({
  FirstName,
  LastName,
  Email,
  Password,
  EmptyPasswordTextField,
  Loading,
  LoadingScreen,
  ToastMessage,
  ToastShow,
  ToastType,
}: SignUpProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  Loading(true);
  const user = firebase.auth().currentUser;
  user
    ?.updateProfile({
      displayName: FirstName + ' ' + LastName,
    })
    .then(() => {
      console.log('Name updated');
      var credential = firebase.auth.EmailAuthProvider.credential(
        Email,
        Password
      );
      user
        ?.linkWithCredential(credential)
        .then(() => {
          console.log('Linking account successfully');
          const { phone } = Router.query;
          if (firebase.auth().currentUser) {
            const UID = firebase.auth().currentUser?.uid;
            LoadingScreen(true);
            Router.push({
              pathname: Setup_Account_Link,
              query: {
                id: `${UID}`,
                firstname: `${FirstName}`,
                lastname: `${LastName}`,
                email: `${Email}`,
                phone: `${phone}`,
              },
            });
          }
        })
        .catch((error) => {
          Loading(false);
          EmptyPasswordTextField();
          const message = AuthError(error.code);
          Toast(`${message}`, 'Error', true);
          console.error('Failed to Link account because ' + error.code);
        });
    })
    .catch((error) => {
      Loading(false);
      EmptyPasswordTextField();
      const message = AuthError(error.code);
      Toast(`${message}`, 'Error', true);
      console.error('Name not updated because ' + error.code);
    });
};

// Avatar

export const UploadAvatar = ({
  Progress,
  File,
  getImageURL,
  Loading,
  ToastMessage,
  ToastShow,
  ToastType,
}: UploadAvatarProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  if (File) {
    Loading(true);
    const extension = File.type.split('/')[1];
    const storage = firebase.storage();
    const ref = storage.ref(
      `userAvatar/${firebase.auth().currentUser?.uid}/profilePhoto.${extension}`
    );
    // Start the upload
    const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
    const task = ref.put(File);
    task.on(STATE_CHANGED, (snapshot) => {
      const pct = (
        (snapshot.bytesTransferred / snapshot.totalBytes) *
        100
      ).toFixed(0);
      Progress(pct);
      // Get image Link
      task
        .then(() => getDownloadURL(ref))
        .then((url) => {
          firebase
            .auth()
            .currentUser?.updateProfile({
              photoURL: url,
            })
            .then(() => {
              //Image update successfully
              getImageURL(url);
              Loading(false);
              Toast('Avatar updated successfully', 'Success', true);
            })
            .catch((error) => {
              Loading(false);
              const message = AuthError(error.code);
              Toast(`${message}`, 'Error', true);
              console.log('Avatar upload failed because ' + error.code);
            });
        });
    });
  }
};

export const DeleteAvatar = ({
  AvatarURL,
  AfterDelete,
  Loading,
  ToastMessage,
  ToastShow,
  ToastType,
}: DeleteAvatarProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  if (AvatarURL) {
    Loading(true);
    const storage = firebase.storage();
    let avatarRef = storage.refFromURL(AvatarURL);
    avatarRef
      .delete()
      .then(() => {
        firebase
          .auth()
          .currentUser?.updateProfile({
            photoURL: '',
          })
          .then(() => {
            Loading(false);
            Toast('Avatar deleted successfully', 'Success', true);
            AfterDelete();
          });
      })
      .catch((error) => {
        Loading(false);
        const message = AuthError(error.code);
        Toast(`${message}`, 'Error', true);
        console.log('Avatar delete failed because ' + error.code);
      });
  }
};
