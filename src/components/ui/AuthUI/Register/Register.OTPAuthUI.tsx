import React, {
  ChangeEvent,
  FC,
  useState,
  Dispatch,
  SetStateAction,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import { OTPTimer } from '../../../timer/OTPTimer';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import OTPTextFieldDark from '../../../textfield/OTPTextFieldDark';
import {
  ResentOTPForLinkWithPhone,
  VerifyOTPForLinkWithPhone,
} from '../../../../algorithms/AuthAlgorithms';
import {
  ClickToFocus,
  InputChangeFocus,
  InputNumberOnly,
} from '../../../../algorithms/UIAlgorithms';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { AuthTransitionContainer } from '../../../container/Auth/AuthTransitionContainer';
import { AuthType } from '../AuthType';
import { useAuth } from '../../../../firebase/useAuth';
import { useQueryClient, useMutation } from 'react-query';
import {
  _userProfileEndURL as cacheKey,
  putUserProfile,
  getUserProfile,
} from '../../../../mongodb/helper/Helper.UserProfile';
import { IUserProfileDataUpdate } from '../../../../mongodb/schema/Schema.UserProfile';

export interface RegisterOTPAuthUIProps {
  ClassName?: string;
  PhoneNumber: string;
  Loading: boolean;
  Toast: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setResetCaptcha: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  IsInformationAfterPhoneAndOTP: () => void;
}

/**
 * @author
 * @function @RegisterOtpAuthUI
 **/

export const RegisterOTPAuthUI: FC<RegisterOTPAuthUIProps> = (props) => {
  const { FirebaseUser } = useAuth();
  const queryClient = useQueryClient();
  const updateUserProfile = useMutation(
    (data: IUserProfileDataUpdate) => putUserProfile(FirebaseUser?.uid, data),
    {
      onSuccess: async () => {
        await queryClient.prefetchQuery([cacheKey, FirebaseUser?.uid], () =>
          getUserProfile(FirebaseUser?.uid)
        );
        props.IsInformationAfterPhoneAndOTP();
      },
      onError: (error: any) => {
        props.setLoading(false);
        ShowToast('Something went wrong', `${error.message}`, 'Error', true);
      },
    }
  );

  // ID
  const OTP1ID = 'RegisterOTPInputField1';
  const OTP2ID = 'RegisterOTPInputField2';
  const OTP3ID = 'RegisterOTPInputField3';
  const OTP4ID = 'RegisterOTPInputField4';
  const OTP5ID = 'RegisterOTPInputField5';
  const OTP6ID = 'RegisterOTPInputField6';

  // State
  const [OTP1, setOTP1] = useState('');
  const [OTP2, setOTP2] = useState('');
  const [OTP3, setOTP3] = useState('');
  const [OTP4, setOTP4] = useState('');
  const [OTP5, setOTP5] = useState('');
  const [OTP6, setOTP6] = useState('');
  const [Bool, setBool] = useState(false);

  // Change
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

  // Validation
  const OTPSubmitDisabled: boolean =
    OTP1.length < 1 ||
    OTP1.length == 0 ||
    OTP2.length < 1 ||
    OTP2.length == 0 ||
    OTP3.length < 1 ||
    OTP3.length == 0 ||
    OTP4.length < 1 ||
    OTP4.length == 0 ||
    OTP5.length < 1 ||
    OTP5.length == 0 ||
    OTP6.length < 1 ||
    OTP6.length == 0;

  // Toast
  const ShowToast = (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => {
    props.setToastSetting({
      Title: title,
      Description: description,
      Type: type,
    });
    props.setToast(show);
  };
  const HideToast = () => {
    props.setToast(false);
  };

  // Handle OTP
  const CancelOTPVerification = () => {
    HideToast();
    clearOTP();
    setBool(false);
    props.setResetCaptcha(true);
    props.setAuthScreen('register-phone');
    ShowToast(
      'Verification process failed',
      'You have cancelled the otp verificaiton.',
      'Error',
      true
    );
  };
  const clearOTP = () => {
    setOTP1('');
    setOTP2('');
    setOTP3('');
    setOTP4('');
    setOTP5('');
    setOTP6('');
  };
  const showResend = () => {
    setBool(true);
  };

  // Handle Click
  const OTPClick = (event: MouseEvent<HTMLInputElement>) => {
    ClickToFocus(event);
  };

  // Handle Keys
  const NumberOnly = (event: KeyboardEvent<HTMLInputElement>) => {
    InputNumberOnly(event);
  };
  const ChangeFocus = (event: KeyboardEvent<HTMLInputElement>) => {
    InputChangeFocus(event);
    if (event.key === 'Enter') OTPSubmitClick();
  };

  // Empty TextField
  const EmptyOTP = () => {
    clearOTP();
    if (typeof window === 'object')
      document.getElementById('RegisterOTPInputField1')?.focus();
  };

  // Database
  const UpdateDataBase = () => {
    if (FirebaseUser) {
      try {
        const _data: IUserProfileDataUpdate = {
          '_data.isVerified.phoneNumber': true,
        };
        updateUserProfile.mutate(_data);
      } catch (error: any) {
        props.setLoading(false);
        ShowToast('Something went wrong', `${error.message}`, 'Error', true);
      }
    } else {
      ShowToast(
        'Something went wrong',
        'It seems like user is not exist.',
        'Error',
        true
      );
    }
  };

  // OTP Submit
  const OTPResend = () => {
    ResentOTPForLinkWithPhone({
      PhoneNumber: parseInt(props.PhoneNumber),
      Loading: props.setLoading,
      ShowToast: ShowToast,
    });
    setBool(false);
  };

  const OTPSubmitClick = () => {
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
      VerifyOTPForLinkWithPhone({
        OTP: parseInt(OTP1 + OTP2 + OTP3 + OTP4 + OTP5 + OTP6),
        EmptyOTPBox: EmptyOTP,
        Loading: props.setLoading,
        ShowToast: ShowToast,
        UpdateDataBase: UpdateDataBase,
      });
    }
  };

  const spaceBetween = 'ml-2';

  return (
    <AuthTransitionContainer>
      <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
        <div className="pb-1.5 flex space-x-1 items-center">
          <div className="text-white/75 text-[14px] tracking-wide font-normal">
            Verification code sent to
          </div>
          <div className="text-white font-[500] text-[14px] tracking-wide">
            {props.PhoneNumber}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <OTPTextFieldDark
            id={OTP1ID}
            onClick={OTPClick}
            area-label="OTP1"
            value={OTP1}
            onChange={OTP1Change}
            onKeyPress={NumberOnly}
            onkeyUp={ChangeFocus}
          />
          <OTPTextFieldDark
            id={OTP2ID}
            onClick={OTPClick}
            className={spaceBetween}
            area-label="OTP2"
            value={OTP2}
            onChange={OTP2Change}
            onKeyPress={NumberOnly}
            onkeyUp={ChangeFocus}
          />
          <OTPTextFieldDark
            id={OTP3ID}
            onClick={OTPClick}
            className={spaceBetween}
            area-label="OTP3"
            value={OTP3}
            onChange={OTP3Change}
            onKeyPress={NumberOnly}
            onkeyUp={ChangeFocus}
          />
          <OTPTextFieldDark
            id={OTP4ID}
            onClick={OTPClick}
            className="ml-8"
            area-label="OTP4"
            value={OTP4}
            onChange={OTP4Change}
            onKeyPress={NumberOnly}
            onkeyUp={ChangeFocus}
          />
          <OTPTextFieldDark
            id={OTP5ID}
            onClick={OTPClick}
            className={spaceBetween}
            area-label="OTP5"
            value={OTP5}
            onChange={OTP5Change}
            onKeyPress={NumberOnly}
            onkeyUp={ChangeFocus}
          />
          <OTPTextFieldDark
            id={OTP6ID}
            onClick={OTPClick}
            className={spaceBetween}
            area-label="OTP6"
            value={OTP6}
            onChange={OTP6Change}
            onKeyPress={NumberOnly}
            onkeyUp={ChangeFocus}
          />
        </div>
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
        <div className="flex">
          <AuthSubmitButton
            Disabled={OTPSubmitDisabled}
            onClick={OTPSubmitClick}
          >
            Verify OTP
          </AuthSubmitButton>
        </div>
      </div>
    </AuthTransitionContainer>
  );
};
