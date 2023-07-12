'use client';

import {
  Backdrop,
  CircularProgress,
  circularProgressClasses,
} from '@mui/material';
import { LoaderHook } from 'hooks/Hooks.Loader';

function Loading() {
  const { Loader } = LoaderHook();
  return (
    <Backdrop
      className="backdrop-blur-sm transition-all ease-out"
      sx={{
        backgroundColor: '#000000a6',
        zIndex: (theme) => theme.zIndex.drawer + 1000,
      }}
      open={Loader}
    >
      <div className="relative text-white flex flex-col opacity-[0.85] items-center justify-center h-[100px] w-[100px]">
        <div className="block relative items-center justify-center">
          <h6 className="text-xs">Loading</h6>
        </div>
        <CircularProgress
          disableShrink={true}
          size={100}
          value={100}
          thickness={1}
          className="absolute text-white"
          sx={{
            animationDuration: '600ms',
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
        />
      </div>
    </Backdrop>
  );
}

export default Loading;
