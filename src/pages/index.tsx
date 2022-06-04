import type { NextPage } from 'next';
import { Button } from '@mui/material';
import Router from 'next/router';

/**
 * @Home_Page
 **/
const Home: NextPage = () => {
  return (
    <>
      <div className="justify-center items-center flex flex-col space-y-5 h-screen w-full bg-[#121212]">
        <Button
          onClick={() => {
            Router.push('/auth/login');
          }}
          className="py-8 px-20 rounded-lg text-sm font-normal text-white hover:bg-[#202020] bg-[#202020]"
        >
          Login Now
        </Button>
      </div>
    </>
  );
};

export default Home;
