import type { NextPage } from 'next'
import { useState } from 'react';
import LoginUI from '../components/ui/LoginUI';
import OtpUI from '../components/ui/OtpUI';

const Home: NextPage = () => {
  const [OTP, setOTP] = useState<boolean>(false);

  const StatusOTP = (otpStatus:boolean):void => {
    setOTP(otpStatus);
  }
  return (
    <>
      <LoginUI setOTP={StatusOTP}/>
      <OtpUI setShow={OTP} setHide={StatusOTP}/>
    </>
  )
}

export default Home;
