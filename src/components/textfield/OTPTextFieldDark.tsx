import { OTPTextFieldProps } from './AllTextFieldProps';

function OTPTextFieldDark(props: OTPTextFieldProps) {
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
      onClick={props.onClick}
      value={props.value}
      readOnly={props.readonly}
      className={`${'h-[50px] w-[40px] items-center rounded-lg bg-[#0f0f0f] text-center font-[600] text-white focus:outline-none'} ${
        props.className
      }`}
      aria-label="otp box"
      type="tel"
    />
  );
}

export default OTPTextFieldDark;
