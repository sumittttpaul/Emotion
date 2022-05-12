import type { NextPage } from 'next';
import { useState } from 'react';
import LoginUI from '../../../components/ui/LoginUI';
import OtpAuthUI from '../../../components/ui/AuthComponentUI/OtpAuthUI';

const Login: NextPage = () => {
  const [OTP, setOTP] = useState<boolean>(false);

  const StatusOTP = (otpStatus: boolean): void => {
    setOTP(otpStatus);
  };
  return (
    <>
      <LoginUI setOTP={StatusOTP} />
      <OtpAuthUI setShow={OTP} setHide={StatusOTP} />
    </>
  );
};

export default Login;
