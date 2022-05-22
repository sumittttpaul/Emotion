import type { NextPage } from 'next';
import LoginUI from '../../../components/ui/LoginUI';
import OTPAuthUI from '../../../components/ui/AuthComponentUI/OTPAuthUI';

const Login: NextPage = () => {
  return (
    <>
      <LoginUI />
      <OTPAuthUI />
    </>
  );
};

export default Login;
