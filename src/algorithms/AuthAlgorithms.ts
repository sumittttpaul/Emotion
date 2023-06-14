import firebase from 'firebase/compat/app';
import {
  ResendOTPProps,
  VerifyOTPProps,
  SignInWithPhoneNumberProps,
  SignInWithEmailAndPasswordProps,
  SignInWithOtherAccountsProps,
  UploadAvatarProps,
  DeleteAvatarProps,
  RecaptchaProps,
  PasswordResentProps,
  AddFullNameProps,
  LinkWithEmailAndPasswordProps,
  VerifyEmailProps,
  LinkWithPhoneNumberProps,
  VerifyOTPForLinkWithPhoneProps,
} from './Props/AuthProps';
import 'firebase/compat/auth';
import { AuthError } from '../firebase/AuthError';
import { getDownloadURL } from 'firebase/storage';
import { Home_Link } from '../routerLinks/RouterLinks';
import Router from 'next/router';
import { CreateUserProfileData } from './AuthDB';
import {
  EmailEncrytionKey,
  NameEncrytionKey,
  PhoneEncrytionKey,
} from './security/CryptionKey';
import { EncryptData } from './security/CryptionSecurity';

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
    grecaptcha: any;
  }
}

// Captcha

export const configureCaptcha = ({
  ShowToast,
  ResetCaptcha,
}: RecaptchaProps) => {
  if (typeof window === 'object') {
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
          },
          'expired-callback': () => {
            ShowToast(
              'Recaptcha token expired',
              'Your recaptcha token has been expired, please refresh the page.',
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
  PhoneNumber,
  Loading,
  ShowToast,
}: ResendOTPProps) => {
  Loading(true);
  window.recaptchaVerifier.render().then(function (widgetId: any) {
    window.grecaptcha.reset(widgetId);
  });
  const number = '+91' + PhoneNumber;
  const appVerifier = window.recaptchaVerifier;
  firebase
    .auth()
    .signInWithPhoneNumber(number, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      Loading(false);
      ShowToast(
        'OTP sent successfully',
        'An OTP has been sent to your phone number.',
        'Success',
        true
      );
    })
    .catch((error) => {
      Loading(false);
      const message = AuthError(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

export const VerifyOTP = ({
  OTP,
  PhoneNumber,
  Loading,
  LoadingScreen,
  EmptyOTPBox,
  ShowToast,
  Next,
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
    .then((result) => {
      const IsNewUser = result.additionalUserInfo?.isNewUser;
      const user = firebase.auth().currentUser;
      if (user) {
        if (IsNewUser) {
          const UserPhoneNumber = EncryptData(
            PhoneNumber,
            PhoneEncrytionKey(user.uid)
          );
          CreateUserProfileData({
            UserId: user.uid,
            FullName: '',
            EmailAddress: '',
            PhoneNumber: UserPhoneNumber,
            DateOfBirth: '',
            Gender: '',
            Loading: Loading,
            ShowToast: ShowToast,
            Next: Next,
          });
        } else {
          LoadingScreen(true);
          Loading(false);
          Router.push(Home_Link);
        }
      }
    })
    .catch((error) => {
      Loading(false);
      const message = AuthError(error.code);
      if (message == 'Invalid verification code') EmptyOTPBox();
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

export const PasswordReset = ({
  EmailAddress,
  Loading,
  ShowToast,
}: PasswordResentProps) => {
  Loading(true);
  firebase
    .auth()
    .sendPasswordResetEmail(EmailAddress)
    .then(() => {
      Loading(false);
      ShowToast(
        'Password reset link sent successfully',
        'A link to reset your password has been sent to your email address.',
        'Success',
        true
      );
    })
    .catch((error) => {
      Loading(false);
      const message = AuthError(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

// SignIn

export const SignInWithPhoneNumber = ({
  PhoneNumber,
  EmptyPhoneNumber,
  ResetCaptcha,
  setResetCaptcha,
  Loading,
  MoveToOTPScreen,
  ShowToast,
}: SignInWithPhoneNumberProps) => {
  Loading(true);
  configureCaptcha({
    ShowToast: ShowToast,
    ResetCaptcha: ResetCaptcha,
  });
  const number = '+91' + PhoneNumber;
  const appVerifier = window.recaptchaVerifier;
  firebase
    .auth()
    .signInWithPhoneNumber(number, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      ShowToast(
        'OTP sent successfully',
        'An OTP has been sent to your phone number.',
        'Success',
        true
      );
      MoveToOTPScreen();
      Loading(false);
    })
    .catch((error) => {
      Loading(false);
      const message = AuthError(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
      EmptyPhoneNumber();
      setResetCaptcha(true);
    });
};

export const SignInWithEmailAndPassword = ({
  EmailAddress,
  Password,
  EmptyPasswordTextField,
  Loading,
  LoadingScreen,
  BackToEmailScreen,
  ShowToast,
}: SignInWithEmailAndPasswordProps) => {
  Loading(true);
  firebase
    .auth()
    .signInWithEmailAndPassword(EmailAddress, Password)
    .then(() => {
      LoadingScreen(true);
      Loading(false);
      Router.push(Home_Link);
    })
    .catch((error) => {
      BackToEmailScreen();
      Loading(false);
      const message = AuthError(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
      EmptyPasswordTextField();
    });
};

export const SignInWithFacebook = ({
  Loading,
  LoadingScreen,
  ShowToast,
  Next,
  setFullName,
  setEmailAddress,
  setPhoneNumber,
}: SignInWithOtherAccountsProps) => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  Loading(true);
  firebase
    .auth()
    .signInWithPopup(facebookProvider)
    .then((result) => {
      const IsNewUser = result.additionalUserInfo?.isNewUser;
      const user = firebase.auth().currentUser;
      if (user) {
        if (IsNewUser) {
          const UserFullName = user.displayName;
          const UserEmailAddress = user.email;
          const UserPhoneNumber = user.phoneNumber;
          setFullName(UserFullName ? UserFullName : '');
          setEmailAddress(UserEmailAddress ? UserEmailAddress : '');
          setPhoneNumber(UserPhoneNumber ? UserPhoneNumber : '');
          CreateUserProfileData({
            UserId: user.uid,
            FullName:
              UserFullName && UserFullName.length > 0
                ? EncryptData(UserFullName, NameEncrytionKey(user.uid))
                : '',
            EmailAddress:
              UserEmailAddress && UserEmailAddress.length > 0
                ? EncryptData(UserEmailAddress, EmailEncrytionKey(user.uid))
                : '',
            PhoneNumber:
              UserPhoneNumber && UserPhoneNumber.length > 0
                ? EncryptData(UserPhoneNumber, PhoneEncrytionKey(user.uid))
                : '',
            DateOfBirth: '',
            Gender: '',
            Loading: () => {},
            ShowToast: ShowToast,
            Next: Next,
          });
        } else {
          LoadingScreen(true);
          Loading(false);
          Router.push(Home_Link);
        }
      }
    })
    .catch((error) => {
      Loading(false);
      const message = AuthError(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

export const SignInWithGoogle = ({
  Loading,
  LoadingScreen,
  ShowToast,
  Next,
  setFullName,
  setEmailAddress,
  setPhoneNumber,
}: SignInWithOtherAccountsProps) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  Loading(true);
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const IsNewUser = result.additionalUserInfo?.isNewUser;
      const user = firebase.auth().currentUser;
      if (user) {
        if (IsNewUser) {
          const UserFullName = user.displayName;
          const UserEmailAddress = user.email;
          const UserPhoneNumber = user.phoneNumber;
          setFullName(UserFullName ? UserFullName : '');
          setEmailAddress(UserEmailAddress ? UserEmailAddress : '');
          setPhoneNumber(UserPhoneNumber ? UserPhoneNumber : '');
          CreateUserProfileData({
            UserId: user.uid,
            FullName:
              UserFullName && UserFullName.length > 0
                ? EncryptData(UserFullName, NameEncrytionKey(user.uid))
                : '',
            EmailAddress:
              UserEmailAddress && UserEmailAddress.length > 0
                ? EncryptData(UserEmailAddress, EmailEncrytionKey(user.uid))
                : '',
            PhoneNumber:
              UserPhoneNumber && UserPhoneNumber.length > 0
                ? EncryptData(UserPhoneNumber, PhoneEncrytionKey(user.uid))
                : '',
            DateOfBirth: '',
            Gender: '',
            Loading: () => {},
            ShowToast: ShowToast,
            Next: Next,
          });
        } else {
          LoadingScreen(true);
          Loading(false);
          Router.push(Home_Link);
        }
      }
    })
    .catch((error) => {
      Loading(false);
      const message = AuthError(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

export const SignInWithApple = ({
  Loading,
  LoadingScreen,
  ShowToast,
  Next,
  setFullName,
  setEmailAddress,
  setPhoneNumber,
}: SignInWithOtherAccountsProps) => {
  const appleProvider = new firebase.auth.OAuthProvider('apple.com');
  Loading(true);
  firebase
    .auth()
    .signInWithPopup(appleProvider)
    .then((result) => {
      const IsNewUser = result.additionalUserInfo?.isNewUser;
      const user = firebase.auth().currentUser;
      if (user) {
        if (IsNewUser) {
          const UserFullName = user.displayName;
          const UserEmailAddress = user.email;
          const UserPhoneNumber = user.phoneNumber;
          setFullName(UserFullName ? UserFullName : '');
          setEmailAddress(UserEmailAddress ? UserEmailAddress : '');
          setPhoneNumber(UserPhoneNumber ? UserPhoneNumber : '');
          CreateUserProfileData({
            UserId: user.uid,
            FullName:
              UserFullName && UserFullName.length > 0
                ? EncryptData(UserFullName, NameEncrytionKey(user.uid))
                : '',
            EmailAddress:
              UserEmailAddress && UserEmailAddress.length > 0
                ? EncryptData(UserEmailAddress, EmailEncrytionKey(user.uid))
                : '',
            PhoneNumber:
              UserPhoneNumber && UserPhoneNumber.length > 0
                ? EncryptData(UserPhoneNumber, PhoneEncrytionKey(user.uid))
                : '',
            DateOfBirth: '',
            Gender: '',
            Loading: () => {},
            ShowToast: ShowToast,
            Next: Next,
          });
        } else {
          LoadingScreen(true);
          Loading(false);
          Router.push(Home_Link);
        }
      }
    })
    .catch((error) => {
      Loading(false);
      const message = AuthError(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

export const SignInWithMicrosoft = ({
  Loading,
  LoadingScreen,
  ShowToast,
  Next,
  setFullName,
  setEmailAddress,
  setPhoneNumber,
}: SignInWithOtherAccountsProps) => {
  const microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com');
  Loading(true);
  firebase
    .auth()
    .signInWithPopup(microsoftProvider)
    .then((result) => {
      const IsNewUser = result.additionalUserInfo?.isNewUser;
      const user = firebase.auth().currentUser;
      if (user) {
        if (IsNewUser) {
          const UserFullName = user.displayName;
          const UserEmailAddress = user.email;
          const UserPhoneNumber = user.phoneNumber;
          setFullName(UserFullName ? UserFullName : '');
          setEmailAddress(UserEmailAddress ? UserEmailAddress : '');
          setPhoneNumber(UserPhoneNumber ? UserPhoneNumber : '');
          CreateUserProfileData({
            UserId: user.uid,
            FullName:
              UserFullName && UserFullName.length > 0
                ? EncryptData(UserFullName, NameEncrytionKey(user.uid))
                : '',
            EmailAddress:
              UserEmailAddress && UserEmailAddress.length > 0
                ? EncryptData(UserEmailAddress, EmailEncrytionKey(user.uid))
                : '',
            PhoneNumber:
              UserPhoneNumber && UserPhoneNumber.length > 0
                ? EncryptData(UserPhoneNumber, PhoneEncrytionKey(user.uid))
                : '',
            DateOfBirth: '',
            Gender: '',
            Loading: () => {},
            ShowToast: ShowToast,
            Next: Next,
          });
        } else {
          LoadingScreen(true);
          Loading(false);
          Router.push(Home_Link);
        }
      }
    })
    .catch((error) => {
      Loading(false);
      const message = AuthError(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

// Sign Up

export const AddFullName = ({
  FullName,
  Loading,
  ShowToast,
  updateUserData,
}: AddFullNameProps) => {
  Loading(true);
  const user = firebase.auth().currentUser;
  if (user) {
    user
      .updateProfile({
        displayName: FullName,
      })
      .then(() => {
        // Loading(false);
        updateUserData();
      })
      .catch((error) => {
        Loading(false);
        const message = AuthError(error.code);
        ShowToast('Something went wrong', `${message}`, 'Error', true);
      });
  }
};

export const VerifyEmailAddress = ({
  Loading,
  ShowToast,
  Next,
}: VerifyEmailProps) => {
  Loading(true);
  const user = firebase.auth().currentUser;
  if (user) {
    user
      .sendEmailVerification()
      .then(() => {
        Loading(false);
        ShowToast(
          'Email verification link sent successfully',
          'A link to reset your password has been sent to your email address.',
          'Success',
          true
        );
        Next();
      })
      .catch((error) => {
        Loading(false);
        const message = AuthError(error.code);
        ShowToast('Something went wrong', `${message}`, 'Error', true);
      });
  }
};

export const LinkWithEmailAndPassword = ({
  EmailAddress,
  Password,
  ShowToast,
  Loading,
  EmptyPasswordTextField,
  BackToEmailScreen,
  updateUserData,
}: LinkWithEmailAndPasswordProps) => {
  Loading(true);
  const user = firebase.auth().currentUser;
  var credential = firebase.auth.EmailAuthProvider.credential(
    EmailAddress,
    Password
  );
  if (user) {
    user
      .linkWithCredential(credential)
      .then(() => {
        // Loading(false);
        updateUserData();
      })
      .catch((error) => {
        Loading(false);
        BackToEmailScreen();
        EmptyPasswordTextField();
        const message = AuthError(error.code);
        ShowToast('Something went wrong', `${message}`, 'Error', true);
      });
  }
};

export const LinkWithPhoneNumber = ({
  PhoneNumber,
  EmptyPhoneNumber,
  ResetCaptcha,
  setResetCaptcha,
  MoveToOTPScreen,
  ShowToast,
  Loading,
}: LinkWithPhoneNumberProps) => {
  Loading(true);
  configureCaptcha({
    ShowToast: ShowToast,
    ResetCaptcha: ResetCaptcha,
  });
  const number = '+91' + PhoneNumber;
  const appVerifier = window.recaptchaVerifier;
  const user = firebase.auth().currentUser;
  if (user) {
    user
      .linkWithPhoneNumber(number, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        ShowToast(
          'OTP sent successfully',
          'An OTP has been sent to your phone number.',
          'Success',
          true
        );
        MoveToOTPScreen();
        Loading(false);
      })
      .catch((error) => {
        Loading(false);
        const message = AuthError(error.code);
        ShowToast('Something went wrong', `${message}`, 'Error', true);
        EmptyPhoneNumber();
        setResetCaptcha(true);
      });
  }
};

export const VerifyOTPForLinkWithPhone = ({
  OTP,
  EmptyOTPBox,
  Loading,
  ShowToast,
  updateUserData,
}: VerifyOTPForLinkWithPhoneProps) => {
  Loading(true);
  const code = OTP.toString();
  const user = firebase.auth().currentUser;
  var credential = firebase.auth.PhoneAuthProvider.credential(
    window.confirmationResult.verificationId,
    code
  );
  if (user) {
    user
      .linkWithCredential(credential)
      .then(() => {
        // Loading(false);
        updateUserData();
      })
      .catch((error) => {
        Loading(false);
        const message = AuthError(error.code);
        if (message == 'Invalid verification code') EmptyOTPBox();
        ShowToast('Something went wrong', `${message}`, 'Error', true);
      });
  }
};

export const ResentOTPForLinkWithPhone = ({
  PhoneNumber,
  Loading,
  ShowToast,
}: ResendOTPProps) => {
  Loading(true);
  window.recaptchaVerifier.render().then(function (widgetId: any) {
    window.grecaptcha.reset(widgetId);
  });
  const number = '+91' + PhoneNumber;
  const appVerifier = window.recaptchaVerifier;
  const user = firebase.auth().currentUser;
  if (user) {
    user
      .linkWithPhoneNumber(number, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        Loading(false);
        ShowToast(
          'OTP sent successfully',
          'An OTP has been sent to your phone number.',
          'Success',
          true
        );
      })
      .catch((error) => {
        Loading(false);
        const message = AuthError(error.code);
        ShowToast('Something went wrong', `${message}`, 'Error', true);
      });
  }
};

// Avatar

export const UploadAvatar = ({
  Progress,
  File,
  getImageURL,
  Loading,
  ShowToast,
}: UploadAvatarProps) => {
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
              ShowToast(
                'Avatar updated successfully',
                'You profile picture has been updated for your account.',
                'Success',
                true
              );
            })
            .catch((error) => {
              Loading(false);
              const message = AuthError(error.code);
              ShowToast('Something went wrong', `${message}`, 'Error', true);
            });
        });
    });
  }
};

export const DeleteAvatar = ({
  AvatarURL,
  AfterDelete,
  Loading,
  ShowToast,
}: DeleteAvatarProps) => {
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
            ShowToast(
              'Avatar deleted successfully',
              'You profile picture has been removed from your account.',
              'Success',
              true
            );
            AfterDelete();
          });
      })
      .catch((error) => {
        Loading(false);
        const message = AuthError(error.code);
        ShowToast('Something went wrong', `${message}`, 'Error', true);
      });
  }
};
