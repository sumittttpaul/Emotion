import Router from 'next/router';
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
  SignOutProps,
  ConfirmPasswordResetProps,
  ConfirmVerifyEmailAddressProps,
  DeleteAccountProps,
} from './Props/AuthProps';
import { AuthErrorMessage } from '../firebase/AuthErrorMessage';
import { Home_Link } from '../routerLinks/RouterLinks';
import {
  FirebaseAuth,
  _firebaseAuth,
  _firebaseStorage,
} from '../firebase/clientApp';

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
    grecaptcha: any;
  }
}

// Captcha

const configureCaptcha = ({ ShowToast, ResetCaptcha }: RecaptchaProps) => {
  if (typeof window === 'object') {
    if (ResetCaptcha) {
      window.recaptchaVerifier.render().then(function (widgetId: any) {
        window.grecaptcha.reset(widgetId);
      });
    } else {
      window.recaptchaVerifier = new _firebaseAuth.RecaptchaVerifier(
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
        },
        FirebaseAuth
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
  _firebaseAuth
    .signInWithPhoneNumber(FirebaseAuth, number, appVerifier)
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
      const message = AuthErrorMessage(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

export const VerifyOTP = ({
  OTP,
  Loading,
  LoadingScreen,
  EmptyOTPBox,
  ShowToast,
  CreateDateBase,
}: VerifyOTPProps) => {
  Loading(true);
  const code = OTP.toString();
  var credential = _firebaseAuth.PhoneAuthProvider.credential(
    window.confirmationResult.verificationId,
    code
  );
  _firebaseAuth
    .signInWithCredential(FirebaseAuth, credential)
    .then((result) => {
      const getAdditionalUserInfo = _firebaseAuth.getAdditionalUserInfo(result);
      if (getAdditionalUserInfo) {
        const IsNewUser = getAdditionalUserInfo.isNewUser;
        const user = FirebaseAuth.currentUser;
        if (user) {
          if (IsNewUser) CreateDateBase(user.uid);
          else {
            LoadingScreen(true);
            Loading(false);
            Router.push(Home_Link);
          }
        }
      }
    })
    .catch((error) => {
      Loading(false);
      const message = AuthErrorMessage(error.code);
      if (message == 'Invalid verification code') EmptyOTPBox();
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

export const PasswordReset = ({
  EmailAddress,
  Loading,
  ShowToast,
  Next,
}: PasswordResentProps) => {
  Loading(true);
  _firebaseAuth
    .sendPasswordResetEmail(FirebaseAuth, EmailAddress)
    .then(() => {
      Loading(false);
      ShowToast(
        'Password reset link sent successfully',
        'A link to reset your password has been sent to your email address.',
        'Success',
        true
      );
      Next();
    })
    .catch((error) => {
      Loading(false);
      const message = AuthErrorMessage(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

export const ConfirmPasswordReset = ({
  oobCode,
  Password,
  EmptyPassword,
  Loading,
  ShowToast,
  Next,
}: ConfirmPasswordResetProps) => {
  Loading(true);
  _firebaseAuth
    .verifyPasswordResetCode(FirebaseAuth, oobCode)
    .then((email) =>
      _firebaseAuth
        .confirmPasswordReset(FirebaseAuth, oobCode, Password)
        .then(() =>
          _firebaseAuth
            .signInWithEmailAndPassword(FirebaseAuth, email, Password)
            .then(() => {
              Loading(false);
              Next();
            })
            .catch((error) => {
              Loading(false);
              EmptyPassword();
              const message = AuthErrorMessage(error.code);
              ShowToast('Something went wrong', `${message}`, 'Error', true);
            })
        )
        .catch((error) => {
          Loading(false);
          EmptyPassword();
          const message = AuthErrorMessage(error.code);
          ShowToast('Something went wrong', `${message}`, 'Error', true);
        })
    )
    .catch((error) => {
      Loading(false);
      EmptyPassword();
      const message = AuthErrorMessage(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

export const ConfirmVerifyEmailAddress = ({
  oobCode,
  Screen,
  Loading,
  ShowToast,
  UpdateDataBase,
}: ConfirmVerifyEmailAddressProps) => {
  Loading(true);
  Screen(null);
  const user = FirebaseAuth.currentUser;
  if (user) {
    _firebaseAuth
      .applyActionCode(FirebaseAuth, oobCode)
      .then(() =>
        user
          .reload()
          .then(() => user.getIdToken(true).then(() => UpdateDataBase()))
      )
      .catch((error) => {
        Loading(false);
        Screen('Error');
        const message = AuthErrorMessage(error.code);
        ShowToast('Something went wrong', `${message}`, 'Error', true);
      });
  }
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
  _firebaseAuth
    .signInWithPhoneNumber(FirebaseAuth, number, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      // ShowToast(
      //   'OTP sent successfully',
      //   'An OTP has been sent to your phone number.',
      //   'Success',
      //   true
      // );
      MoveToOTPScreen();
      Loading(false);
    })
    .catch((error) => {
      Loading(false);
      const message = AuthErrorMessage(error.code);
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
  _firebaseAuth
    .signInWithEmailAndPassword(FirebaseAuth, EmailAddress, Password)
    .then(() => {
      LoadingScreen(true);
      Loading(false);
      Router.push(Home_Link);
    })
    .catch((error) => {
      BackToEmailScreen();
      Loading(false);
      const message = AuthErrorMessage(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
      EmptyPasswordTextField();
    });
};

// other account

const OtherAccountHandler = (_uid: string) => {};

export const SignInWithFacebook = ({
  Loading,
  ShowToast,
  CreateDateBase,
}: SignInWithOtherAccountsProps) => {
  const facebookProvider = new _firebaseAuth.FacebookAuthProvider();
  Loading(true);
  _firebaseAuth
    .signInWithPopup(FirebaseAuth, facebookProvider)
    .then((result) => {
      const getAdditionalUserInfo = _firebaseAuth.getAdditionalUserInfo(result);
      if (getAdditionalUserInfo) {
        const IsNewUser = getAdditionalUserInfo.isNewUser;
        const user = FirebaseAuth.currentUser;
        if (user) {
          if (IsNewUser) CreateDateBase(user);
          else {
            // LoadingScreen(true);
            // Loading(false);
            // Router.push(Home_Link);
          }
        }
      }
    })
    .catch((error) => {
      Loading(false);
      const message = AuthErrorMessage(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

export const SignInWithGoogle = ({
  Loading,
  ShowToast,
  CreateDateBase,
  CheckDataBase,
}: SignInWithOtherAccountsProps) => {
  const googleProvider = new _firebaseAuth.GoogleAuthProvider();
  Loading(true);
  _firebaseAuth
    .signInWithPopup(FirebaseAuth, googleProvider)
    .then((result) => {
      const getAdditionalUserInfo = _firebaseAuth.getAdditionalUserInfo(result);
      if (getAdditionalUserInfo) {
        const IsNewUser = getAdditionalUserInfo.isNewUser;
        const user = FirebaseAuth.currentUser;
        if (user) {
          if (IsNewUser) CreateDateBase(user);
          else CheckDataBase(user);
          // LoadingScreen(true);
          // Loading(false);
          // Router.push(Home_Link);
        }
      }
    })
    .catch((error) => {
      Loading(false);
      const message = AuthErrorMessage(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

export const SignInWithApple = ({
  Loading,
  ShowToast,
  CreateDateBase,
}: SignInWithOtherAccountsProps) => {
  const appleProvider = new _firebaseAuth.OAuthProvider('apple.com');
  Loading(true);
  _firebaseAuth
    .signInWithPopup(FirebaseAuth, appleProvider)
    .then((result) => {
      const getAdditionalUserInfo = _firebaseAuth.getAdditionalUserInfo(result);
      if (getAdditionalUserInfo) {
        const IsNewUser = getAdditionalUserInfo.isNewUser;
        const user = FirebaseAuth.currentUser;
        if (user) {
          if (IsNewUser) CreateDateBase(user);
          else {
            // LoadingScreen(true);
            // Loading(false);
            // Router.push(Home_Link);
          }
        }
      }
    })
    .catch((error) => {
      Loading(false);
      const message = AuthErrorMessage(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

export const SignInWithMicrosoft = ({
  Loading,
  ShowToast,
  CreateDateBase,
}: SignInWithOtherAccountsProps) => {
  const microsoftProvider = new _firebaseAuth.OAuthProvider('microsoft.com');
  Loading(true);
  _firebaseAuth
    .signInWithPopup(FirebaseAuth, microsoftProvider)
    .then((result) => {
      const getAdditionalUserInfo = _firebaseAuth.getAdditionalUserInfo(result);
      if (getAdditionalUserInfo) {
        const IsNewUser = getAdditionalUserInfo.isNewUser;
        const user = FirebaseAuth.currentUser;
        if (user) {
          if (IsNewUser) CreateDateBase(user);
          else {
            // LoadingScreen(true);
            // Loading(false);
            // Router.push(Home_Link);
          }
        }
      }
    })
    .catch((error) => {
      Loading(false);
      const message = AuthErrorMessage(error.code);
      ShowToast('Something went wrong', `${message}`, 'Error', true);
    });
};

// Sign Up

export const AddFullName = ({
  FullName,
  Loading,
  ShowToast,
  UpdateDataBase,
}: AddFullNameProps) => {
  Loading(true);
  const user = FirebaseAuth.currentUser;
  if (user) {
    _firebaseAuth
      .updateProfile(user, {
        displayName: FullName,
      })
      .then(() => UpdateDataBase())
      .catch((error) => {
        Loading(false);
        const message = AuthErrorMessage(error.code);
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
  const user = FirebaseAuth.currentUser;
  if (user) {
    _firebaseAuth
      .sendEmailVerification(user)
      .then(() => {
        Loading(false);
        ShowToast(
          'Email verification link sent successfully',
          'A link to verify your email has been sent to your email address.',
          'Success',
          true
        );
        Next();
      })
      .catch((error) => {
        Loading(false);
        const message = AuthErrorMessage(error.code);
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
  Next,
}: LinkWithEmailAndPasswordProps) => {
  Loading(true);
  const user = FirebaseAuth.currentUser;
  var credential = _firebaseAuth.EmailAuthProvider.credential(
    EmailAddress,
    Password
  );
  if (user) {
    _firebaseAuth
      .linkWithCredential(user, credential)
      .then(() => Next())
      .catch((error) => {
        Loading(false);
        BackToEmailScreen();
        EmptyPasswordTextField();
        const message = AuthErrorMessage(error.code);
        ShowToast('Something went wrong', `${message}`, 'Error', true);
      });
  }
};

export const LinkWithPhoneNumber = ({
  PhoneNumber,
  EmptyPhoneNumber,
  ResetCaptcha,
  setResetCaptcha,
  UpdateDataBase, // MoveToOTPScreen
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
  const user = FirebaseAuth.currentUser;
  if (user) {
    _firebaseAuth
      .linkWithPhoneNumber(user, number, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        // ShowToast(
        //   'OTP sent successfully',
        //   'An OTP has been sent to your phone number.',
        //   'Success',
        //   true
        // );
        UpdateDataBase();
      })
      .catch((error) => {
        Loading(false);
        const message = AuthErrorMessage(error.code);
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
  UpdateDataBase,
}: VerifyOTPForLinkWithPhoneProps) => {
  Loading(true);
  const code = OTP.toString();
  const user = FirebaseAuth.currentUser;
  var credential = _firebaseAuth.PhoneAuthProvider.credential(
    window.confirmationResult.verificationId,
    code
  );
  if (user) {
    _firebaseAuth
      .linkWithCredential(user, credential)
      .then(() => UpdateDataBase())
      .catch((error) => {
        Loading(false);
        const message = AuthErrorMessage(error.code);
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
  const user = FirebaseAuth.currentUser;
  if (user) {
    _firebaseAuth
      .linkWithPhoneNumber(user, number, appVerifier)
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
        const message = AuthErrorMessage(error.code);
        ShowToast('Something went wrong', `${message}`, 'Error', true);
      });
  }
};

// Avatar

export const UploadAvatar = ({
  Progress,
  File,
  Loading,
  ShowToast,
  UpdateDataBaseWithURL,
}: UploadAvatarProps) => {
  if (File) {
    Loading(true);
    const user = FirebaseAuth.currentUser;
    if (user) {
      const metadata = {
        contentType: 'image/png',
      };
      const extension = File.type.split('/')[1];
      const storage = _firebaseStorage.getStorage();
      const storageRef = _firebaseStorage.ref(
        storage,
        `userAvatar/${user.uid}/profilePhoto.${extension}`
      );
      const uploadTask = _firebaseStorage.uploadBytesResumable(
        storageRef,
        File,
        metadata
      );
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const pct = (
            (snapshot.bytesTransferred / snapshot.totalBytes) *
            100
          ).toFixed(0);
          Progress(pct);
        },
        (error) => {
          Loading(false);
          const message = AuthErrorMessage(error.code);
          ShowToast('Something went wrong', `${message}`, 'Error', true);
        },
        () => {
          _firebaseStorage
            .getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
              _firebaseAuth
                .updateProfile(user, {
                  photoURL: url,
                })
                .then(() => UpdateDataBaseWithURL(url))
                .catch((error) => {
                  Loading(false);
                  const message = AuthErrorMessage(error.code);
                  ShowToast(
                    'Something went wrong',
                    `${message}`,
                    'Error',
                    true
                  );
                });
            });
        }
      );
    } else {
      Loading(false);
      ShowToast(
        'Something went wrong',
        'The user is currently not signed in.',
        'Error',
        true
      );
    }
  } else {
    ShowToast('Check file', 'File not found.', 'Error', true);
  }
};

export const DeleteAvatar = ({
  AvatarURL,
  DeletePhotoURLFromDataBase,
  Loading,
  ShowToast,
}: DeleteAvatarProps) => {
  if (AvatarURL) {
    Loading(true);
    const user = FirebaseAuth.currentUser;
    if (user) {
      const storage = _firebaseStorage.getStorage();
      const avatarRef = _firebaseStorage.ref(storage, AvatarURL);
      _firebaseStorage
        .deleteObject(avatarRef)
        .then(() => {
          _firebaseAuth
            .updateProfile(user, {
              photoURL: '',
            })
            .then(() => DeletePhotoURLFromDataBase())
            .catch((error) => {
              Loading(false);
              const message = AuthErrorMessage(error.code);
              ShowToast('Something went wrong', `${message}`, 'Error', true);
            });
        })
        .catch((error) => {
          Loading(false);
          const message = AuthErrorMessage(error.code);
          ShowToast('Something went wrong', `${message}`, 'Error', true);
        });
    } else {
      Loading(false);
      ShowToast(
        'Something went wrong',
        'The user is currently not signed in.',
        'Error',
        true
      );
    }
  } else {
    ShowToast('Check avatar', 'Avatar not found.', 'Error', true);
  }
};

export const SignOut = ({ Next }: SignOutProps) => {
  const user = FirebaseAuth.currentUser;
  if (user) _firebaseAuth.signOut(FirebaseAuth).then(() => Next());
};

export const DeleteAccount = ({
  DeleteDataBase,
  ShowToast,
  Loading,
}: DeleteAccountProps) => {
  const user = FirebaseAuth.currentUser;
  if (user) {
    Loading(true);
    const _uid = user.uid;
    _firebaseAuth
      .deleteUser(user)
      .then(() => DeleteDataBase(_uid))
      .catch((error) => {
        Loading(false);
        const message = AuthErrorMessage(error.code);
        ShowToast('Something went wrong', `${message}`, 'Error', true);
      });
  } else {
    ShowToast('User not found', 'User is not signed it.', 'Error', true);
  }
};
