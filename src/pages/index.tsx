import type { NextPage } from 'next'
import { useState } from 'react';
import { Link } from '@mui/material';

const Home: NextPage = () => {
  const [OTP, setOTP] = useState<boolean>(false);

  const StatusOTP = (otpStatus:boolean):void => {
    setOTP(otpStatus);
  }
  return (
    <>
      <div className='bg-[#121212] justify-center items-center flex h-screen'>
        <Link className='text-sm font-normal text-white' href='/authentication/login'>Login Now</Link>
      </div>
    </>
  )
}

export default Home;
