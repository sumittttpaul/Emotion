'use client';

import { m } from 'framer-motion';
import { useState } from 'react';
import { ToastHook } from 'hooks/Hooks.Toast';
import { SignInBackButton } from 'components/button/Setup/SignInBackButton';
import { SignInNextButton } from 'components/button/Setup/SignInNextButton';
import { OTPTimer } from 'components/timer/OTPTimer';
import {
  ResentOTPForLinkWithPhone,
  VerifyOTPForLinkWithPhone,
} from 'functions/AuthAlgorithms';
import { SetupHook, userProfileHook } from 'hooks/Hooks.Setup';
import { SetupSubmitButton } from 'components/button/Setup/SetupSubmitButton';
import SetupOTPTextField from '../../Input/Setup.OTPTextField';
import OperateUserProfile from 'databases/controller/Controller.UserProfile';
import useClientAuth from 'authentication/useClientAuth';

export interface SetupRegisterOTPScreenProps {
  ContentClassName?: string;
  AnimationDivClassName?: string;
  Animation: AuthAnimationType;
  CheckInfoHandler: VoidType;
}

function SetupRegisterOTPScreen(props: SetupRegisterOTPScreenProps) {
  const { FirebaseUser } = useClientAuth();
  const [OTPs, setOTPs] = useState({
    OTP1: '',
    OTP2: '',
    OTP3: '',
    OTP4: '',
    OTP5: '',
    OTP6: '',
  });
  const [Bool, setBool] = useState(false);
  const { setScreen, setLoading, setResetCaptcha } = SetupHook();
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
    setResetCaptcha(true);
    setScreen('login-phone');
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
  const Updatedatabase = () => {
    if (FirebaseUser) {
      const _data: IUserProfileDataUpdate = {
        '_data.isVerified.phoneNumber': true,
      };
      OperateUserProfile('UPDATE', { uid: FirebaseUser.uid, update: _data })
        .then(() => {
          props.CheckInfoHandler();
        })
        .catch((error) => {
          if (error instanceof Error) {
            setLoading(false);
            setToast({
              Title: error.name,
              Description: error.message,
              Type: 'Error',
              Show: true,
            });
          }
        });
    } else {
      setToast({
        Title: 'Something went wrong',
        Description: 'It seems like user is not exist.',
        Type: 'Error',
        Show: true,
      });
    }
  };

  // OTP Submit
  const OTPResend = () => {
    ResentOTPForLinkWithPhone({
      PhoneNumber: parseInt(PhoneNumber),
      Loading: setLoading,
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
      VerifyOTPForLinkWithPhone({
        OTP: parseInt(
          OTPs.OTP1 + OTPs.OTP2 + OTPs.OTP3 + OTPs.OTP4 + OTPs.OTP5 + OTPs.OTP6
        ),
        EmptyOTPBox: clearOTP,
        Loading: setLoading,
        Updatedatabase: Updatedatabase,
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
          <div className="text-white/75 text-[14px] tracking-wide font-normal">
            Verification code sent to
          </div>
          <div className="text-white font-[500] text-[14px] tracking-wide">
            {PhoneNumber}
          </div>
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

export default SetupRegisterOTPScreen;
