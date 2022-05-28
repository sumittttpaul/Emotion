import type { NextPage } from 'next';
import { Button } from '@mui/material';
import { ToastDark } from '../components/toast/ToastDark';
import { useState } from 'react';

const Home: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (value: boolean) => {
    setOpen(value);
  };

  return (
    <>
      <div className="justify-center items-center flex flex-col space-y-5 h-screen w-full bg-[#202020]">
        <Button
          onClick={handleClick}
          className="py-8 px-20 rounded-lg text-sm font-normal text-white bg-[#202020]"
          // href="/auth/login"
        >
          Login Now
        </Button>
        <ToastDark
          message="OTP Sent successfully"
          open={open}
          close={handleClose}
          slideDirection="down"
          positionVertical="top"
          positionHorizontal="center"
          type="success"
        />
      </div>
    </>
  );
};

export default Home;
