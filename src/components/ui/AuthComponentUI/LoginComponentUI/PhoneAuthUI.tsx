import React, { ChangeEvent, FC, KeyboardEvent, FocusEvent } from 'react';
import CheckBoxBlue from '../../../checkbox/CheckBoxBlue';
import LargeButtonBlue from '../../../button/LargeButtonBlue';
import OtherAccountAuthUI from './OtherAccountAuthUI';
import AuthDivider from '../../../divider/AuthDivider';
import IconNumberTextFieldDark from '../../../textfield/IconNumberTextFieldDark';
import { PhonePrivacyPolicy } from '../../../terms & policy/PhonePrivacyPolicy';

interface IProps {
  Phone: string;
  PhoneID?: string;
  PhoneChange: (event: ChangeEvent<HTMLInputElement>) => void;
  PhoneKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PhoneKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PhoneKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  PhonePolicyChecked: boolean;
  PhonePolicyCheckedChange: (event: ChangeEvent<HTMLInputElement>) => void;
  PhoneSubmitDisabled: boolean;
  PhoneSubmitClick: () => void;
  FacebookSignIn: () => void;
  GoogleSignIn: () => void;
  AppleSignIn: () => void;
  PhoneError?: boolean;
  PhoneFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  PhoneBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

/**
 * @author
 * @function @OtherAccountAuthUI
 **/

const container =
  'px-[2px] pt-[2px] w-full flex flex-col justify-center items-center';

const PhoneAuthUI: FC<IProps> = (props) => {
  return (
    <div className={`${container} ${'space-y-7'}`}>
      <IconNumberTextFieldDark
        id={props.PhoneID}
        placeholder="Phone Number"
        icon="/icons/phone.svg"
        type="tel"
        dataPhonecode="+91"
        value={props.Phone}
        onChange={props.PhoneChange}
        onKeyPress={props.PhoneKeyPress}
        onkeyDown={props.PhoneKeyDown}
        onkeyUp={props.PhoneKeyUp}
        onFocus={props.PhoneFocus}
        onBlur={props.PhoneBlur}
        error={props.PhoneError}
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
