import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { RegisterSkipAllButton } from '../../../button/Auth/RegisterSkipAllButton';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { AuthTransitionContainer } from '../../../container/Auth/AuthTransitionContainer';
import { UpdateUserData } from '../../../../algorithms/AuthDB';
import { GenderEncrytionKey } from '../../../../algorithms/security/CryptionKey';
import { EncryptData } from '../../../../algorithms/security/CryptionSecurity';
import { useAuth } from '../../../../firebase/AuthProvider';
import { RadioGroupDark } from '../../../radiogroup/RadioGroupDark';
import { AuthType } from '../AuthType';

export interface RegisterGenderAuthUIProps {
  ClassName?: string;
  Toast: boolean;
  setSkipDialog: Dispatch<SetStateAction<boolean>>;
  setFinish: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  Gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  IsInformationFilledBeforeGender: () => void;
}

/**
 * @author
 * @function @RegisterGenderAuthUI
 **/

export const RegisterGenderAuthUI: FC<RegisterGenderAuthUIProps> = (props) => {
  const user = useAuth();

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

  // Screens
  const MoveToFinishScreen = () => {
    props.setFinish(true);
  };

  // Database
  const updateUserData = () => {
    if (user) {
      props.setLoading(true);
      const UserGender = EncryptData(
        props.Gender,
        GenderEncrytionKey(user.uid)
      );
      UpdateUserData(user.uid, {
        Gender: UserGender,
      })
        .then(() => {
          props.setLoading(false);
          MoveToFinishScreen();
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
        <div className="w-full flex items-start pt-2">
          <RadioGroupDark
            theme="dark"
            content={['Male', 'Female', 'Others']}
            value={props.Gender}
            onChange={props.setGender}
          />
        </div>
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will add later"
              onClick={MoveToFinishScreen}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton
              Label="Back"
              onClick={props.IsInformationFilledBeforeGender}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex space-x-2">
          <RegisterSkipAllButton onClick={SkipClick}>
            Skip all
          </RegisterSkipAllButton>
          <AuthSubmitButton
            Disabled={props.Gender === '' && props.Gender.length < 1}
            onClick={SubmitClick}
          >
            Next
          </AuthSubmitButton>
        </div>
      </div>
    </AuthTransitionContainer>
  );
};
