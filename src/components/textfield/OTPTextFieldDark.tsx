import React, { FC, KeyboardEventHandler, ChangeEventHandler } from 'react';

interface IProps {
  onkeyUp: KeyboardEventHandler;
  onChange: ChangeEventHandler;
  value: string;
}

/**
 * @author
 * @function @OTPTextFieldDark
 **/

const OTPTextFieldDark: FC<IProps> = (props) => {
  return (
    <input
      onChange={props.onChange}
      onKeyUp={props.onkeyUp}
      value={props.value}
      className="text-white rounded-md focus:outline-none bg-[#121212] h-[50px] w-[40px] text-center items-center"
      aria-label="otp box"
      type="otp"
    />
  );
};

export default OTPTextFieldDark;
