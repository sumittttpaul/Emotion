import React, { ChangeEvent, KeyboardEvent, FC, useState } from 'react';
import { Link } from '@mui/material';
import OTPTextFieldDark from '../../../textfield/OTPTextFieldDark';
import { DialogContainerDark } from '../../../dialog/DialogContainerDark';
import { OTPTimer } from '../../../timer/OTPTimer';

interface IProps {
  open: boolean;
  close: () => void;
  phone: string;
  resend: () => void;
  OTP1: string;
  OTP1Change: (events: ChangeEvent<HTMLInputElement>) => void;
  OTP1KeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP1KeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP1KeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP2: string;
  OTP2Change: (events: ChangeEvent<HTMLInputElement>) => void;
  OTP2KeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP2KeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP2KeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP3: string;
  OTP3Change: (events: ChangeEvent<HTMLInputElement>) => void;
  OTP3KeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP3KeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP3KeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP4: string;
  OTP4Change: (events: ChangeEvent<HTMLInputElement>) => void;
  OTP4KeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP4KeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP4KeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP5: string;
  OTP5Change: (events: ChangeEvent<HTMLInputElement>) => void;
  OTP5KeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP5KeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP5KeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP6: string;
  OTP6Change: (events: ChangeEvent<HTMLInputElement>) => void;
  OTP6KeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP6KeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  OTP6KeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * @author
 * @function @OtpAuthUI
 **/

const OTPAuthUI: FC<IProps> = (props) => {
  const [bool, setBool] = useState(false);

  const closeModal = () => {
    props.close();
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

  const spaceBetween = 'ml-2';

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
        <div className="flex justify-center items-center">
          <OTPTextFieldDark
            area-label="OTP1"
            value={props.OTP1}
            onChange={props.OTP1Change}
            onkeyDown={props.OTP1KeyDown}
            onKeyPress={props.OTP1KeyPress}
            onkeyUp={props.OTP1KeyUp}
          />
          <OTPTextFieldDark
            className={spaceBetween}
            area-label="OTP2"
            value={props.OTP2}
            onChange={props.OTP2Change}
            onkeyDown={props.OTP2KeyDown}
            onKeyPress={props.OTP2KeyPress}
            onkeyUp={props.OTP2KeyUp}
          />
          <OTPTextFieldDark
            className={spaceBetween}
            area-label="OTP3"
            value={props.OTP3}
            onChange={props.OTP3Change}
            onkeyDown={props.OTP3KeyDown}
            onKeyPress={props.OTP3KeyPress}
            onkeyUp={props.OTP3KeyUp}
          />
          <OTPTextFieldDark
            className="ml-8"
            area-label="OTP4"
            value={props.OTP4}
            onChange={props.OTP4Change}
            onkeyDown={props.OTP4KeyDown}
            onKeyPress={props.OTP4KeyPress}
            onkeyUp={props.OTP4KeyUp}
          />
          <OTPTextFieldDark
            className={spaceBetween}
            area-label="OTP5"
            value={props.OTP5}
            onChange={props.OTP5Change}
            onkeyDown={props.OTP5KeyDown}
            onKeyPress={props.OTP5KeyPress}
            onkeyUp={props.OTP5KeyUp}
          />
          <OTPTextFieldDark
            className={spaceBetween}
            area-label="OTP6"
            value={props.OTP6}
            onChange={props.OTP6Change}
            onkeyDown={props.OTP6KeyDown}
            onKeyPress={props.OTP6KeyPress}
            onkeyUp={props.OTP6KeyUp}
          />
        </div>
        <div className="flex h-4">
          {bool ? (
            <>
              <h6 className="text-white text-xs font-light opacity-75">
                Otp not send?&#160;
              </h6>
              <Link
                onClick={handleResend}
                className="text-white underline-offset-2 text-xs"
                component="button"
                underline="always"
              >
                Resend OTP
              </Link>
            </>
          ) : (
            <>
              <OTPTimer min={0} sec={30} resend={showResend} />
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
