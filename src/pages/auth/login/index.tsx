import type { NextPage } from 'next';
import LoginUI from '../../../components/ui/LoginUI';
import OtpAuthUI from '../../../components/ui/AuthComponentUI/OtpAuthUI';

const Login: NextPage = () => {
  return (
    <>
      <LoginUI />
      <OtpAuthUI />
    </>
  );
};

export default Login;
