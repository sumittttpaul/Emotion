import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { Link } from '@mui/material';

const Home: NextPage = () => {
  const [OTP, setOTP] = useState<boolean>(false);

  const StatusOTP = (otpStatus:boolean):void => {
    setOTP(otpStatus);
  }

  return (
    <>
      <div className='justify-center items-center flex h-screen w-full'>
        <Link className='p-20 rounded-lg text-sm font-normal text-white bg-[#121212]' href='/authentication/login'>Login Now</Link>
      </div>
    </>
  )
}

export default Home;
