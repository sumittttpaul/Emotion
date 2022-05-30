import React, { FC, KeyboardEvent, ChangeEvent } from 'react';

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onkeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onkeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

/**
 * @author
 * @function @OTPTextFieldDark
 **/

const OTPTextFieldDark: FC<IProps> = (props) => {
  return (
    <input
      maxLength={1}
      autoCorrect="off"
      autoComplete="off"
      tabIndex={1}
      onChange={props.onChange}
      onKeyUp={props.onkeyUp}
      onKeyDown={props.onkeyDown}
      onKeyPress={props.onKeyPress}
      value={props.value}
      className={`${"text-white rounded-md focus:outline-none bg-[#121212] h-[50px] w-[40px] text-center items-center"} ${props.className}`}
      aria-label="otp box"
      type="otp"
    />
  );
};

export default OTPTextFieldDark;
