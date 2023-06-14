import React, { Dispatch, FC, SetStateAction } from 'react';
import { AvatarButton } from '../../../avatar/AvatarButton';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { AuthTransitionContainer } from '../../../container/Auth/AuthTransitionContainer';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { RegisterSkipAllButton } from '../../../button/Auth/RegisterSkipAllButton';
import { AuthType } from '../AuthType';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';

export interface RegisterProfilePictureAuthUIProps {
  ClassName?: string;
  Toast: boolean;
  setSkipDialog: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  IsInformationFilledAfterProfilePhoto: () => void;
  IsInformationFilledBeforeProfilePhoto: () => void;
}

/**
 * @author
 * @function @RegisterProfilePictureAuthUI
 **/

export const RegisterProfilePictureAuthUI: FC<
  RegisterProfilePictureAuthUIProps
> = (props) => {
  const SkipClick = () => {
    props.setSkipDialog(true);
  };

  return (
    <AuthTransitionContainer>
      <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
        <div className="w-full flex items-start justify-center pt-2">
          <AvatarButton
            setToast={props.setToast}
            setToastSetting={props.setToastSetting}
          />
        </div>
        <div className="w-full flex flex-col space-y-1">
          <div className="w-full flex justify-start">
            <SignInNextButton
              Label="I will add later"
              onClick={props.IsInformationFilledAfterProfilePhoto}
            />
          </div>
          <div className="w-full flex justify-start">
            <SignInBackButton
              Label="Back"
              onClick={props.IsInformationFilledBeforeProfilePhoto}
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
            Disabled={false}
            onClick={props.IsInformationFilledAfterProfilePhoto}
          >
            Next
          </AuthSubmitButton>
        </div>
      </div>
    </AuthTransitionContainer>
  );
};
