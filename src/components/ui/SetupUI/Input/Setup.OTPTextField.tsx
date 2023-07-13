'use client';

import OTPTextFieldDark from 'components/textfield/OTPTextFieldDark';
import {
  ClickToFocus,
  InputChangeFocus,
  InputNumberOnly,
} from 'functions/UIAlgorithms';
import { LoaderHook } from 'hooks/Hooks.Loader';
import { SetupHook } from 'hooks/Hooks.UserProfile';

interface IProps {
  OTP1: string;
  setOTP1: Dispatch<string>;
  OTP2: string;
  setOTP2: Dispatch<string>;
  OTP3: string;
  setOTP3: Dispatch<string>;
  OTP4: string;
  setOTP4: Dispatch<string>;
  OTP5: string;
  setOTP5: Dispatch<string>;
  OTP6: string;
  setOTP6: Dispatch<string>;
  HandleSubmit: VoidType;
}

function SetupOTPTextField({
  OTP1,
  setOTP1,
  OTP2,
  setOTP2,
  OTP3,
  setOTP3,
  OTP4,
  setOTP4,
  OTP5,
  setOTP5,
  OTP6,
  setOTP6,
  HandleSubmit,
}: IProps) {
  const { Loader } = LoaderHook();
  const { Loading } = SetupHook();

  const OTP1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOTP1(event.target.value.trim());
  };
  const OTP2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOTP2(event.target.value.trim());
  };
  const OTP3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOTP3(event.target.value.trim());
  };
  const OTP4Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOTP4(event.target.value.trim());
  };
  const OTP5Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOTP5(event.target.value.trim());
  };
  const OTP6Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOTP6(event.target.value.trim());
  };

  const OTPClick = (event: React.MouseEvent<HTMLInputElement>) => {
    ClickToFocus(event);
  };

  const NumberOnly = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Backspace') InputNumberOnly(event);
  };

  const ChangeFocus = (event: React.KeyboardEvent<HTMLInputElement>) => {
    InputChangeFocus(event);
    if (event.key === 'Enter') HandleSubmit();
  };

  const spaceBetween = 'ml-2';

  return (
    <div className="flex justify-center items-center">
      <OTPTextFieldDark
        onClick={OTPClick}
        area-label="OTP1"
        value={OTP1}
        onChange={OTP1Change}
        onkeyDown={NumberOnly}
        onkeyUp={ChangeFocus}
      />
      <OTPTextFieldDark
        onClick={OTPClick}
        className={spaceBetween}
        area-label="OTP2"
        value={OTP2}
        onChange={OTP2Change}
        onkeyDown={NumberOnly}
        onkeyUp={ChangeFocus}
        readonly={Loader || Loading}
      />
      <OTPTextFieldDark
        onClick={OTPClick}
        className={spaceBetween}
        area-label="OTP3"
        value={OTP3}
        onChange={OTP3Change}
        onkeyDown={NumberOnly}
        onkeyUp={ChangeFocus}
        readonly={Loader || Loading}
      />
      <OTPTextFieldDark
        onClick={OTPClick}
        className="ml-8"
        area-label="OTP4"
        value={OTP4}
        onChange={OTP4Change}
        onkeyDown={NumberOnly}
        onkeyUp={ChangeFocus}
        readonly={Loader || Loading}
      />
      <OTPTextFieldDark
        onClick={OTPClick}
        className={spaceBetween}
        area-label="OTP5"
        value={OTP5}
        onChange={OTP5Change}
        onkeyDown={NumberOnly}
        onkeyUp={ChangeFocus}
        readonly={Loader || Loading}
      />
      <OTPTextFieldDark
        onClick={OTPClick}
        className={spaceBetween}
        area-label="OTP6"
        value={OTP6}
        onChange={OTP6Change}
        onkeyDown={NumberOnly}
        onkeyUp={ChangeFocus}
        readonly={Loader || Loading}
      />
    </div>
  );
}

export default SetupOTPTextField;
