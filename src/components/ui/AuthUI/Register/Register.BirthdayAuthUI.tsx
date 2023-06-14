import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { RegisterSkipAllButton } from '../../../button/Auth/RegisterSkipAllButton';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { AuthTransitionContainer } from '../../../container/Auth/AuthTransitionContainer';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { useAuth } from '../../../../firebase/AuthProvider';
import { DOBEncrytionKey } from '../../../../algorithms/security/CryptionKey';
import { EncryptData } from '../../../../algorithms/security/CryptionSecurity';
import { UpdateUserData } from '../../../../algorithms/AuthDB';
import { DatePickerButton } from '../../../datepicker/DatePickerButton';
import { AuthType } from '../AuthType';

export interface RegisterBirthdayAuthUIProps {
  ClassName?: string;
  Toast: boolean;
  setSkipDialog: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  DateOfBirth: string;
  setDateOfBirth: Dispatch<SetStateAction<string>>;
  IsInformationFilledAfterBirthday: () => void;
  IsInformationFilledBeforeBirthday: () => void;
}

/**
 * @author
 * @function @RegisterBirthdayAuthUI
 **/

export const RegisterBirthdayAuthUI: FC<RegisterBirthdayAuthUIProps> = (
  props
) => {
  const user = useAuth();

  // State
  const [SubmitDisabled, setSubmitDisabled] = useState(true);

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

  // Database
  const updateUserData = () => {
    if (user) {
      props.setLoading(true);
      const UserDOB = EncryptData(props.DateOfBirth, DOBEncrytionKey(user.uid));
      UpdateUserData(user.uid, {
        DateOfBirth: UserDOB,
      })
        .then(() => {
          // props.setLoading(false);
          props.IsInformationFilledAfterBirthday();
        })
        .catch((error) => {
          props.setLoading(false);
          ShowToast('Something went wrong', `${error.message}`, 'Error', true);
          console.error(
            'User data not updates not created because ' + error.message
          );
        });
    } else {
      ShowToast(
        'Something went wrong',
        'It seems like user is not exist.',
        'Error',
        true
      );
    }
  };

  const SkipClick = () => {
    props.setSkipDialog(true);
  };

  // Submit
  const SubmitClick = () => {
    updateUserData();
  };

  return (
    <AuthTransitionContainer>
      <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
        <div className="w-full flex items-start justify-center pt-2">
          <DatePickerButton
            theme="dark"
            getDOB={props.setDateOfBirth}
            setSubmitDisabled={setSubmitDisabled}
          />
        </div>
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will add later"
              onClick={props.IsInformationFilledAfterBirthday}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton
              Label="Back"
              onClick={props.IsInformationFilledBeforeBirthday}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex space-x-2">
          <RegisterSkipAllButton onClick={SkipClick}>
            Skip all
          </RegisterSkipAllButton>
          <AuthSubmitButton Disabled={SubmitDisabled} onClick={SubmitClick}>
            Next
          </AuthSubmitButton>
        </div>
      </div>
    </AuthTransitionContainer>
  );
};
