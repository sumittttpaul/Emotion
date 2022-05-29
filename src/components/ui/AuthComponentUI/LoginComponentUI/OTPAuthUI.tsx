import React, { FC, useState } from 'react';
import { Link } from '@mui/material';
import OTPTextFieldDark from '../../../textfield/OTPTextFieldDark';
import { useOTPState } from '../../../../providers/state/OTPState';
import { DialogContainerDark } from '../../../dialog/DialogContainerDark';
import { OTPTimer } from '../../../timer/OTPTimer';

interface IProps {
  open: boolean;
  close: () => void;
  phone: string;
  resend: () => void;
  OTP1: string;
  OTP1Change: () => void;
  OTP2: string;
  OTP2Change: () => void;
  OTP3: string;
  OTP3Change: () => void;
  OTP4: string;
  OTP4Change: () => void;
  OTP5: string;
  OTP5Change: () => void;
  OTP6: string;
  OTP6Change: () => void;
}

/**
 * @author
 * @function @OtpAuthUI
 **/

const OTPAuthUI: FC<IProps> = (props) => {
  const { OTPDialog, setOTPDialog } = useOTPState();
  const [bool, setBool] = useState(false);

  const closeModal = () => {
    setOTPDialog({ show: false });
    setTimeout(() => {
      setBool(false);
    }, 200);
  };

  const showResend = () => {
    setBool(true);
  };

  const handleResend = () => {
    setBool(false);
    props.resend();
  };

  return (
    <DialogContainerDark show={props.open} close={() => {}}>
      <div className="flex flex-col px-14 py-10 space-y-7 items-center">
        <h6 className="text-white font-medium text-center text-md">
          OTP Verification
        </h6>
        <h6 className="text-white text-[14px] font-light opacity-75">
          {'Verification code sent to '}
          {props.phone}
        </h6>
        <div className="space-x-8 flex justify-center items-center">
          <div className="space-x-2 flex justify-center items-center">
            <OTPTextFieldDark area-label="OTP1" value={props.OTP1} onChange={props.OTP1Change} />
            <OTPTextFieldDark area-label="OTP2" value={props.OTP2} onChange={props.OTP2Change} />
            <OTPTextFieldDark area-label="OTP3" value={props.OTP3} onChange={props.OTP3Change} />
          </div>
          <div className="space-x-2 flex justify-center items-center">
            <OTPTextFieldDark area-label="OTP4" value={props.OTP4} onChange={props.OTP4Change} />
            <OTPTextFieldDark area-label="OTP5" value={props.OTP5} onChange={props.OTP5Change} />
            <OTPTextFieldDark area-label="OTP6" value={props.OTP6} onChange={props.OTP6Change} />
          </div>
        </div>
        <div className="flex h-4">
          {bool ? (
            <>
              <h6 className="text-white text-xs font-light opacity-75">
                Otp not send?&#160;
              </h6>
              <Link
                onClick={handleResend}
                className="text-white text-xs"
                component="button"
                underline="always"
              >
                Resend OTP
              </Link>
            </>
          ) : (
            <>
              <OTPTimer min={1} sec={30} resend={showResend} />
            </>
          )}
        </div>
        <Link
          onClick={closeModal}
          className="text-white text-xs"
          component="button"
          underline="always"
        >
          Cancel
        </Link>
      </div>
    </DialogContainerDark>
  );
};

export default OTPAuthUI;
