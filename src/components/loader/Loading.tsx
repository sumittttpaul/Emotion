import {
  Backdrop,
  CircularProgress,
  circularProgressClasses,
} from '@mui/material';
import React, { FC } from 'react';
import { useLoaderState } from '../../providers/state/LoadingState';

interface IProps {}

/**
 * @author
 * @function @Loading
 **/

export const Loading: FC<IProps> = (props) => {
  const { Loader } = useLoaderState();
  const ShowLoader: any = Loader.show;
  return (
    <Backdrop
      className="backdrop-blur-sm transition-all ease-out"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={ShowLoader}
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
};
