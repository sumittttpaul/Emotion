import type { NextPage } from 'next';
import { Button } from '@mui/material';

const Home: NextPage = () => {
  return (
    <>
      <div className="justify-center items-center flex flex-col space-y-5 h-screen w-full bg-[#121212]">
        <Button
          className="py-8 px-20 rounded-lg text-sm font-normal text-white hover:bg-[#202020] bg-[#202020]"
          href="/auth/login"
        >
          Login Now
        </Button>
      </div>
    </>
  );
};

export default Home;
