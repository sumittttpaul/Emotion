import React, { FC } from 'react';
import { Link } from '@mui/material';
import OTPTextFieldDark from '../../../textfield/OTPTextFieldDark';
import { useOTPState } from '../../../../providers/state/OTPState';
import { DialogContainerDark } from '../../../dialog/DialogContainerDark';

interface IProps {}

/**
 * @author
 * @function @OtpAuthUI
 **/

const OTPAuthUI: FC<IProps> = (props) => {
  const { OTPDialog, setOTPDialog } = useOTPState();

  const closeModal = () => {
    setOTPDialog({ show: false });
  };

  return (
    <DialogContainerDark show={OTPDialog.show} close={closeModal}>
      <div className="flex flex-col px-14 py-10 space-y-7 items-center">
        <h6 className="text-white font-medium text-center text-md">
          OTP Verification
        </h6>
        <h6 className="text-white text-[14px] font-light opacity-75">
          Verification code sent to 8794007993
        </h6>
        <div className="space-x-8 flex justify-center items-center">
          <div className="space-x-2 flex justify-center items-center">
            <OTPTextFieldDark value="" onChange={() => {}} onkeyUp={() => {}} />
            <OTPTextFieldDark value="" onChange={() => {}} onkeyUp={() => {}} />
            <OTPTextFieldDark value="" onChange={() => {}} onkeyUp={() => {}} />
          </div>
          <div className="space-x-2 flex justify-center items-center">
            <OTPTextFieldDark value="" onChange={() => {}} onkeyUp={() => {}} />
            <OTPTextFieldDark value="" onChange={() => {}} onkeyUp={() => {}} />
            <OTPTextFieldDark value="" onChange={() => {}} onkeyUp={() => {}} />
          </div>
        </div>
        <div className="flex">
          <h6 className="text-white text-xs font-light opacity-75">
            Otp not send?&#160;
          </h6>
          <Link
            href="#"
            className="text-white text-xs"
            component="button"
            underline="always"
          >
            Resend OTP
          </Link>
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
