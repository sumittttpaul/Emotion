import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
  KeyboardEvent,
} from 'react';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { RegisterSkipAllButton } from '../../../button/Auth/RegisterSkipAllButton';
import IconNumberTextFieldDark from '../../../textfield/IconNumberTextFieldDark';
import { LinkWithPhoneNumber } from '../../../../algorithms/AuthAlgorithms';
import { InputNumberOnly } from '../../../../algorithms/UIAlgorithms';
import { AuthAnimationType, AuthType } from '../AuthType';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { useAuth } from '../../../../firebase/useAuth';
import { UserProfileEncrytionKey } from '../../../../algorithms/security/CryptionKey';
import { EncryptData } from '../../../../algorithms/security/CryptionSecurity';
import { useQueryClient, useMutation } from 'react-query';
import {
  _userProfileEndURL as cacheKey,
  putUserProfile,
  getUserProfile,
} from '../../../../mongodb/helper/Helper.UserProfile';
import { IUserProfileDataUpdate } from '../../../../mongodb/schema/Schema.UserProfile';
import { m } from 'framer-motion';

export interface RegisterPhoneAuthUIProps {
  ClassName?: string;
  Loading: boolean;
  Toast: boolean;
  PhoneNumber: string;
  ResetCaptcha: boolean;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  setResetCaptcha: Dispatch<SetStateAction<boolean>>;
  setSkipDialog: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  Animation: AuthAnimationType;
  IsInformation: () => void;
}

/**
 * @author
 * @function @RegisterPhoneAuthUI
 **/

export const RegisterPhoneAuthUI: FC<RegisterPhoneAuthUIProps> = (props) => {
  const { FirebaseUser } = useAuth();
  const queryClient = useQueryClient();
  const updateUserProfile = useMutation(
    (data: IUserProfileDataUpdate) => putUserProfile(FirebaseUser?.uid, data),
    {
      onSuccess: async () => {
        await queryClient.prefetchQuery([cacheKey, FirebaseUser?.uid], () =>
          getUserProfile(FirebaseUser?.uid)
        );
        props.setLoading(false);
        MoveToOTPScreen();
      },
      onError: (error: Error) => {
        props.setLoading(false);
        ShowToast(error.name, error.message, 'Error', true);
      },
    }
  );

  // ID
  const PhoneNumberID = 'PhoneNumber-TextField-Login';

  // State
  const [PhoneNumberError, setPhoneNumberError] = useState(false);

  // Change
  const PhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value.slice(-10);
    event.target.maxLength = 10;
    props.setPhoneNumber(event.target.value);
  };
  const EmptyPhoneNumber = () => {
    props.setPhoneNumber('');
  };

  // Events
  const PhoneNumberKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ValidatePhoneNumber) {
      ValidPhoneNumber();
    }
    if (event.key === 'Enter') {
      if (ValidatePhoneNumber) {
        PhoneNumberSubmitClick();
      } else {
        InvalidPhoneNumber();
      }
    }
  };
  const PhoneNumberKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Backspace') InputNumberOnly(event);
  };
  const PhoneNumberBlur = () => {
    if (ValidatePhoneNumber) {
      ValidPhoneNumber();
    } else {
      setPhoneNumberError(true);
    }
  };

  // Validation
  const ValidatePhoneNumber = props.PhoneNumber.length == 10;
  const PhoneNumberSubmitDisabled: boolean =
    props.PhoneNumber.length < 10 || !ValidatePhoneNumber;

  const ValidPhoneNumber = () => {
    setPhoneNumberError(false);
    HideToast();
  };
  const InvalidPhoneNumber = () => {
    setPhoneNumberError(true);
    ShowToast(
      'Invalid phone number',
      'Please check your phone number.',
      'Error',
      true
    );
  };

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

  // Screens
  const MoveToOTPScreen = () => {
    props.setAuthScreen('register-otp');
  };
  const BackToName = () => {
    props.setAuthScreen('register-name');
  };
  const SkipClick = () => {
    props.setSkipDialog(true);
  };

  // Database
  const UpdateDataBase = () => {
    if (FirebaseUser) {
      try {
        const UserPhoneNumber = EncryptData(
          UserProfileEncrytionKey(FirebaseUser.uid, 'PhoneNumber'),
          props.PhoneNumber.toString()
        );
        const _data: IUserProfileDataUpdate = {
          '_data.phoneNumber': UserPhoneNumber,
        };
        updateUserProfile.mutate(_data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          props.setLoading(false);
          ShowToast(error.name, error.message, 'Error', true);
        }
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

  // Submit
  const PhoneNumberSubmitClick = () => {
    if (ValidatePhoneNumber) {
      LinkWithPhoneNumber({
        PhoneNumber: parseInt(props.PhoneNumber),
        EmptyPhoneNumber: EmptyPhoneNumber,
        Loading: props.setLoading,
        ShowToast: ShowToast,
        ResetCaptcha: props.ResetCaptcha,
        setResetCaptcha: props.setResetCaptcha,
        UpdateDataBase: UpdateDataBase,
      });
    } else {
      ShowToast(
        'Incorrect phone number',
        'Please enter a valid phone number.',
        'Error',
        true
      );
    }
  };

  return (
    <m.div
      className="w-full relative"
      initial={props.Animation.Initial}
      animate={props.Animation.Final}
      transition={props.Animation.Transition}
    >
      <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
        <IconNumberTextFieldDark
          id={PhoneNumberID}
          placeholder="Phone Number"
          icon="/icons/phone.svg"
          type="tel"
          dataPhonecode="+91"
          value={props.PhoneNumber.slice(-10)}
          onChange={PhoneNumberChange}
          onkeyDown={PhoneNumberKeyDown}
          onkeyUp={PhoneNumberKeyUp}
          onBlur={PhoneNumberBlur}
          error={PhoneNumberError}
          readonly={props.Loading}
          valid={!PhoneNumberSubmitDisabled}
        />
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will add later"
              onClick={props.IsInformation}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton Label="Back" onClick={BackToName} />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex space-x-2">
          <RegisterSkipAllButton onClick={SkipClick}>
            Skip all
          </RegisterSkipAllButton>
          <AuthSubmitButton
            Disabled={PhoneNumberSubmitDisabled}
            onClick={PhoneNumberSubmitClick}
          >
            Next
          </AuthSubmitButton>
        </div>
      </div>
    </m.div>
  );
};
