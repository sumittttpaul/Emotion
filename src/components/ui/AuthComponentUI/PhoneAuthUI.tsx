import React, { FC } from 'react';
import { Link } from '@mui/material';
import IconTextFieldDark from '../../textfield/IconTextFieldDark';
import CheckBoxBlue from '../../checkbox/CheckBoxBlue';
import LargeButtonBlue from '../../button/LargeButtonBlue';
import OtherAccountAuthUI from './OtherAccountAuthUI';
import AuthDivider from '../../divider/AuthDivider';
import { motion, AnimatePresence } from 'framer-motion';
import { useOtpState } from '../../../providers/state/OtpState';

interface IProps {}

/**
 * @author
 * @function @OtherAccountAuthUI
 **/

const PhoneAuthUI: FC<IProps> = (props) => {
  const { setOtpState } = useOtpState();

  const handleClick = () => {
    setTimeout(() => {
      setOtpState({ setShow: true})
    }, 250);
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="w-full space-y-7 flex flex-col justify-center items-center"
        key=""
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -60 }}
        exit={{ opacity: 0, x: 60 }}
        transition={{ duration: 0.3 }}
      >
        <IconTextFieldDark
          placeholder="Phone Number"
          icon="/icons/phone.svg"
          type="phoneNumber"
          value=""
          onChange={() => {}}
          onkeyUp={() => {}}
        />
        <div className="flex w-full">
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
      </motion.div>
    </AnimatePresence>
  );
};

export default PhoneAuthUI;
