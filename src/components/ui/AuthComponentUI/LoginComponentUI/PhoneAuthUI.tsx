import React, { ChangeEvent, FC, KeyboardEventHandler } from 'react';
import CheckBoxBlue from '../../../checkbox/CheckBoxBlue';
import LargeButtonBlue from '../../../button/LargeButtonBlue';
import OtherAccountAuthUI from './OtherAccountAuthUI';
import AuthDivider from '../../../divider/AuthDivider';
import { useOTPState } from '../../../../providers/state/OTPState';
import IconNumberTextFieldDark from '../../../textfield/IconNumberTextFieldDark';
import { PhonePrivacyPolicy } from '../../../terms & policy/PhonePrivacyPolicy';

interface IProps {
  Phone: string;
  PhoneKeyUp?: KeyboardEventHandler<HTMLDivElement>;
  PhoneKeyPress?: KeyboardEventHandler<HTMLDivElement>;
  PhoneKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  PhoneChange: () => void;

  PhonePolicyChecked: boolean;
  PhonePolicyCheckedChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;

  PhoneSubmitDisabled: boolean;
  PhoneSubmitClick: () => void;

  FacebookSignIn: () => void;
  GoogleSignIn: () => void;
  AppleSignIn: () => void;
}

/**
 * @author
 * @function @OtherAccountAuthUI
 **/

const PhoneAuthUI: FC<IProps> = (props) => {
  const { setOTPDialog } = useOTPState();

  const handleClick = () => {
    setTimeout(() => {
      setOTPDialog({ show: true });
    }, 250);
  };

  return (
    <div className="w-full space-y-7 flex flex-col justify-center items-center">
      <IconNumberTextFieldDark
        placeholder="Phone Number"
        icon="/icons/phone.svg"
        type="tel"
        dataPhonecode="+91"
        value={props.Phone}
        onChange={props.PhoneChange}
        onKeyPress={props.PhoneKeyPress}
        onkeyDown={props.PhoneKeyDown}
        onkeyUp={props.PhoneKeyUp}
      />
      <div className="flex w-full pl-2">
        <CheckBoxBlue
          Checked={props.PhonePolicyChecked}
          OnCnange={props.PhonePolicyCheckedChange}
        />
        <PhonePrivacyPolicy />
      </div>
      <LargeButtonBlue
        onClick={props.PhoneSubmitClick}
        content="verify with OTP"
        Disabled={props.PhoneSubmitDisabled}
      />
      <AuthDivider />
      <OtherAccountAuthUI
        FacebookSignInButton={props.FacebookSignIn}
        GoogleSignInButton={props.GoogleSignIn}
        AppleSignInButton={props.AppleSignIn}
      />
    </div>
  );
};

export default PhoneAuthUI;
