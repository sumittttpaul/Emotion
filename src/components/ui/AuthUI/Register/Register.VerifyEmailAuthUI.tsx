import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { AuthType } from '../AuthType';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { AuthTransitionContainer } from '../../../container/Auth/AuthTransitionContainer';
import { VerifyEmailAddress } from '../../../../algorithms/AuthAlgorithms';
import { CircularProgress } from '@mui/material';
import { GreenSuccessHint } from '../../../hint/GreenSuccessHint';
import { SignInBackButton } from '../../../button/Auth/SignInBackButton';

export interface RegisterVerifyEmailAuthUIProps {
  ClassName?: string;
  isEmailVerified: boolean;
  Loading: boolean;
  Toast: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setToast: Dispatch<SetStateAction<boolean>>;
  setToastSetting: Dispatch<
    SetStateAction<{ Title: string; Description: string; Type: string }>
  >;
  setAuthScreen: Dispatch<SetStateAction<AuthType>>;
  IsInformationAfterVerifyEmail: () => void;
  IsInformationBeforeVerifyEmail: () => void;
}

/**
 * @author
 * @function @RegisterVerifyEmailAuthUI
 **/

export const RegisterVerifyEmailAuthUI: FC<RegisterVerifyEmailAuthUIProps> = (
  props
) => {
  // State
  const [SubmitDisabled, setSubmitDisabled] = useState(false);

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

  // Handle
  const handleSubmitDisabled = () => {
    setSubmitDisabled(true);
  };

  // Submit
  const VerifyEmailClick = () => {
    if (props.isEmailVerified) {
      props.IsInformationAfterVerifyEmail();
    } else {
      VerifyEmailAddress({
        Loading: props.setLoading,
        ShowToast: ShowToast,
        Next: handleSubmitDisabled,
      });
    }
  };

  useEffect(() => {
    if (props.isEmailVerified) {
      setSubmitDisabled(false);
    }
  }, [props.isEmailVerified]);

  return (
    <AuthTransitionContainer>
      <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
        {!props.isEmailVerified && (
          <h6 className="font-normal  tracking-wide text-left w-full text-white/75 text-sm">
            To verify your email address, click Verify. A verification email
            will be sent to the email address you provided. Click the link in
            the email to verify your address.
          </h6>
        )}
        {!props.isEmailVerified && (
          <div className="w-full flex flex-col space-y-1">
            <div className="w-full flex justify-start">
              <SignInNextButton
                Label="I will add later"
                onClick={props.IsInformationAfterVerifyEmail}
              />
            </div>
            <div className="w-full flex justify-start">
              <SignInBackButton
                Label="Back"
                onClick={props.IsInformationBeforeVerifyEmail}
              />
            </div>
          </div>
        )}
        {props.isEmailVerified && (
          <div className="flex justify-start">
            <GreenSuccessHint Label="Your email address has been verified successfully." />
          </div>
        )}
      </div>
      <div className="flex w-full justify-end">
        <div className="flex">
          <CustomSubmitButton
            Loading={SubmitDisabled}
            Disabled={SubmitDisabled}
            onClick={VerifyEmailClick}
          >
            {props.isEmailVerified ? 'Next' : 'Verify Email'}
          </CustomSubmitButton>
        </div>
      </div>
    </AuthTransitionContainer>
  );
};

interface CustomSubmitButtonProps {
  Disabled: boolean;
  onClick: () => void;
  Loading: boolean;
  children: ReactNode;
}

const CustomSubmitButton: FC<CustomSubmitButtonProps> = (props) => {
  return (
    <AuthSubmitButton Disabled={props.Disabled} onClick={props.onClick}>
      {props.children}
      {props.Loading && (
        <div className="absolute w-full h-full rounded-lg flex items-center justify-center bg-[#104A82] text-white cursor-default">
          <CircularProgress className="text-white" size={20} />
        </div>
      )}
    </AuthSubmitButton>
  );
};
