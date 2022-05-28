import React, { FC } from 'react';
import { Link } from '@mui/material';
import CheckBoxBlue from '../../../checkbox/CheckBoxBlue';
import LargeButtonBlue from '../../../button/LargeButtonBlue';
import OtherAccountAuthUI from './OtherAccountAuthUI';
import AuthDivider from '../../../divider/AuthDivider';
import { useOTPState } from '../../../../providers/state/OTPState';
import IconNumberTextFieldDark from '../../../textfield/IconNumberTextFieldDark';

interface IProps {}

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
        value=""
        onChange={() => {}}
        onkeyUp={() => {}}
      />
      <div className="flex w-full pl-2">
        <CheckBoxBlue />
        <div className="flex items-center">
          <h6 className="ml-3 text-xs font-light text-[rgba(255,255,255,0.75)]">
            I agree with&#160;
            <Link
              className="text-white text-xs"
              component="button"
              underline="always"
            >
              privacy policy
            </Link>
          </h6>
        </div>
      </div>
      <LargeButtonBlue onClick={handleClick} content="verify with OTP" />
      <AuthDivider />
      <OtherAccountAuthUI />
    </div>
  );
};

export default PhoneAuthUI;
