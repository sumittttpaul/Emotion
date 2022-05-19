import type { NextPage } from 'next';
import { Link } from '@mui/material';

const Home: NextPage = () => {
  return (
    <>
      <div className="justify-center items-center flex h-screen w-full">
        <Link
          className="p-20 rounded-lg text-sm font-normal text-white bg-[#121212]"
          href="/auth/login"
        >
          Login Now
        </Link>
      </div>
    </>
  );
};

export default Home;
