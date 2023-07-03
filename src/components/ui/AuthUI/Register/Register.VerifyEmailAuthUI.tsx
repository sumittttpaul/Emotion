import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
  Fragment,
} from 'react';
import { AuthAnimationType, AuthType } from '../AuthType';
import { SignInNextButton } from '../../../button/Auth/SignInNextButton';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import { VerifyEmailAddress } from '../../../../algorithms/AuthAlgorithms';
import { CircularProgress } from '@mui/material';
import { GreenSuccessHint } from '../../../hint/GreenSuccessHint';
import { m } from 'framer-motion';

export interface RegisterVerifyEmailAuthUIProps {
  ClassName?: string;
  Loading: boolean;
  Toast: boolean;
  isEmailVerified: boolean | undefined;
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
    props.setLoading(true);
    if (!props.isEmailVerified) {
      VerifyEmailAddress({
        Loading: props.setLoading,
        ShowToast: ShowToast,
        Next: handleSubmitDisabled,
      });
    } else {
      props.IsInformation();
    }
  };

  useEffect(() => {
    if (props.isEmailVerified) {
      setSubmitDisabled(false);
    }
  }, [props.isEmailVerified]);

  return (
    <m.div
      className="w-full relative"
      initial={props.Animation.Initial}
      animate={props.Animation.Final}
      transition={props.Animation.Transition}
    >
      <div className={`${props.ClassName} w-full flex flex-col space-y-4`}>
        {props.isEmailVerified ? (
          <GreenSuccessHint Label="Your email address has been verified successfully." />
        ) : (
          <Fragment>
            <h6 className="font-normal  tracking-wide text-left w-full text-white/75 text-sm">
              To verify your email address, click Verify Email. A verification
              email will be sent to the email address you provided. Click the
              link in the email to verify your address.
            </h6>
            <div className="w-full flex justify-start">
              <SignInNextButton
                Label="I will verify later"
                onClick={props.IsInformation}
              />
            </div>
          </Fragment>
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
    </m.div>
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
