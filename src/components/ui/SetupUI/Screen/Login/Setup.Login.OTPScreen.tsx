import { m } from 'framer-motion';
import { useState } from 'react';
import { ToastHook } from 'hooks/Hooks.Toast';
import { LoaderHook } from 'hooks/Hooks.Loader';
import { EncryptData } from 'functions/security/CryptionSecurity';
import { userProfileHook } from 'hooks/Hooks.UserProfile';
import { UserProfileEncrytionKey } from 'functions/security/CryptionKey';
import { DeleteAccount, ResentOTP, VerifyOTP } from 'functions/AuthAlgorithms';
import OTPTimer from 'components/timer/OTPTimer';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import SignInBackButton from 'components/button/Setup/SignInBackButton';
import SignInNextButton from 'components/button/Setup/SignInNextButton';
import SetupOTPTextField from 'components/ui/SetupUI/Input/Setup.OTPTextField';
import OperateUserProfile from 'databases/controllers/Controller.UserProfile';

export interface SetupLoginOTPScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
  setScreen: Dispatch<AuthScreenType>;
  setLoading: Dispatch<boolean>;
  setErrorType: Dispatch<AuthErrorType>;
  setMainScreen: Dispatch<AuthMainScreenType>;
  setResetCaptcha: Dispatch<boolean>;
  Loading: boolean;
}

function SetupLoginOTPScreen(props: SetupLoginOTPScreenProps) {
  const [OTPs, setOTPs] = useState({
    OTP1: '',
    OTP2: '',
    OTP3: '',
    OTP4: '',
    OTP5: '',
    OTP6: '',
  });
  const [Bool, setBool] = useState(false);
  const { setLoader } = LoaderHook();
  const { Toast, setToast } = ToastHook();
  const { PhoneNumber } = userProfileHook();

  // Validation
  const ValidateOTP: boolean =
    OTPs.OTP1.length > 0 &&
    OTPs.OTP1.length == 1 &&
    OTPs.OTP2.length > 0 &&
    OTPs.OTP2.length == 1 &&
    OTPs.OTP3.length > 0 &&
    OTPs.OTP3.length == 1 &&
    OTPs.OTP4.length > 0 &&
    OTPs.OTP4.length == 1 &&
    OTPs.OTP5.length > 0 &&
    OTPs.OTP5.length == 1 &&
    OTPs.OTP6.length > 0 &&
    OTPs.OTP6.length == 1;

  // Handle OTP
  const CancelOTPVerification = () => {
    setToast({ ...Toast, Show: false });
    clearOTP();
    setBool(false);
    props.setResetCaptcha(true);
    props.setScreen('login-phone');
    setToast({
      Title: 'Verification process failed',
      Description: 'You have cancelled the otp verificaiton.',
      Type: 'Error',
      Show: true,
    });
  };
  const clearOTP = () => {
    setOTPs({ OTP1: '', OTP2: '', OTP3: '', OTP4: '', OTP5: '', OTP6: '' });
  };
  const showResend = () => {
    setBool(true);
  };

  // database
  function CreateDateBase(_uid: string) {
    const UserPhoneNumber = EncryptData(
      UserProfileEncrytionKey(_uid, 'PhoneNumber'),
      PhoneNumber
    );
    const _data: IUserProfile = {
      _uid: _uid,
      _data: {
        fullName: '',
        emailAddress: '',
        phoneNumber: UserPhoneNumber,
        photoURL: '',
        dateOfBirth: '',
        age: '',
        gender: '',
        isVerified: {
          phoneNumber: true,
          emailAddress: false,
        },
      },
    };
    OperateUserProfile('CREATE', { create: _data })
      .then(() => {
        props.CheckInfoHandler();
        // setScreen('resgister-name')
      })
      .catch((error) => {
        if (error instanceof Error)
          setToast({
            Title: error.name,
            Description: error.message,
            Type: 'Error',
            Show: true,
          });
        DeleteAccount({
          Loading: props.setLoading,
          ShowToast: (Title, Description, Type, Show) =>
            setToast({
              Title: Title,
              Description: Description,
              Type: Type,
              Show: Show,
            }),
          Deletedatabase: () => {
            // Delete database if by any change it has been created,
            props.setLoading(false);
            props.setMainScreen('Error');
            props.setErrorType('database-not-created');
          },
        });
      });
  }

  // OTP Submit
  const OTPResend = () => {
    ResentOTP({
      PhoneNumber: parseInt(PhoneNumber),
      Loading: props.setLoading,
      ShowToast: (Title, Description, Type, Show) =>
        setToast({
          Title: Title,
          Description: Description,
          Type: Type,
          Show: Show,
        }),
    });
    setBool(false);
  };

  const OTPSubmitClick = () => {
    if (ValidateOTP) {
      VerifyOTP({
        OTP: parseInt(
          OTPs.OTP1 + OTPs.OTP2 + OTPs.OTP3 + OTPs.OTP4 + OTPs.OTP5 + OTPs.OTP6
        ),
        EmptyOTPBox: clearOTP,
        Loading: props.setLoading,
        LoadingScreen: (value) => setLoader(value),
        CreateDateBase: CreateDateBase,
        ShowToast: (Title, Description, Type, Show) =>
          setToast({
            Title: Title,
            Description: Description,
            Type: Type,
            Show: Show,
          }),
      });
    }
  };

  return (
    <m.div
      className={`${props.AnimationDivClassName} w-full relative`}
      initial={props.Animation.Initial}
      animate={props.Animation.Final}
      transition={props.Animation.Transition}
    >
      <div
        className={`${props.ContentClassName} w-full flex flex-col space-y-4`}
      >
        <div className="pb-1.5 flex space-x-1 items-center">
          <p className="text-white/75 text-[14px] tracking-wide font-normal">
            Verification code sent to
          </p>
          <p className="text-white font-[500] text-[14px] tracking-wide">
            {PhoneNumber}
          </p>
        </div>
        <SetupOTPTextField
          OTP1={OTPs.OTP1}
          OTP2={OTPs.OTP2}
          OTP3={OTPs.OTP3}
          OTP4={OTPs.OTP4}
          OTP5={OTPs.OTP5}
          OTP6={OTPs.OTP6}
          setOTP1={(value) => setOTPs({ ...OTPs, OTP1: value })}
          setOTP2={(value) => setOTPs({ ...OTPs, OTP2: value })}
          setOTP3={(value) => setOTPs({ ...OTPs, OTP3: value })}
          setOTP4={(value) => setOTPs({ ...OTPs, OTP4: value })}
          setOTP5={(value) => setOTPs({ ...OTPs, OTP5: value })}
          setOTP6={(value) => setOTPs({ ...OTPs, OTP6: value })}
          HandleSubmit={OTPSubmitClick}
          Loading={props.Loading}
        />
        <div className="w-full flex justify-start h-8">
          {Bool ? (
            <SignInNextButton onClick={OTPResend} Label="Resend OTP" />
          ) : (
            <div className="pt-2">
              <OTPTimer min={1} sec={30} resend={showResend} />
            </div>
          )}
        </div>
        <div className="w-full flex justify-start">
          <SignInBackButton Label="Back" onClick={CancelOTPVerification} />
        </div>
      </div>
      <div className="flex w-full justify-end">
        <SetupSubmitButton Disabled={!ValidateOTP} onClick={OTPSubmitClick}>
          Verify OTP
        </SetupSubmitButton>
      </div>
    </m.div>
  );
}

export default SetupLoginOTPScreen;
