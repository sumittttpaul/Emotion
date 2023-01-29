import React, { FC } from 'react';
import { OTPTextFieldProps } from './AllTextFieldProps';

/**
 * @author
 * @function @OTPTextFieldDark
 **/

const OTPTextFieldDark: FC<OTPTextFieldProps> = (props) => {
  return (
    <input
      id={props.id}
      maxLength={1}
      autoCorrect="off"
      autoComplete="off"
      tabIndex={1}
      onChange={props.onChange}
      onKeyUp={props.onkeyUp}
      onKeyDown={props.onkeyDown}
      onKeyPress={props.onKeyPress}
      value={props.value}
      className={`${'text-white rounded-md focus:outline-none bg-[#0f0f0f] h-[50px] w-[40px] text-center items-center'} ${
        props.className
      }`}
      aria-label="otp box"
      type="otp"
    />
  );
};

export default OTPTextFieldDark;
