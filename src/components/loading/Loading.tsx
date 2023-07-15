'use client';

import {
  Backdrop,
  CircularProgress,
  circularProgressClasses,
} from '@mui/material';
import { LoaderHook } from 'hooks/global/Hooks.Loader';

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
      <div className="relative flex h-[100px] w-[100px] flex-col items-center justify-center text-white opacity-[0.85]">
        <div className="relative block items-center justify-center">
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
