/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { FC } from 'react';
import { LinearProgress, linearProgressClasses, styled } from '@mui/material';

const LoadingLinearProgressUI = styled(LinearProgress)(() => ({
  height: 3,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#00000000',
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: '#ffffff90',
  },
}));

export interface LoadingLinearProgressProps {}

/**
 * @author
 * @function @LoadingLinearProgress
 **/

export const LoadingLinearProgress: FC<LoadingLinearProgressProps> = () => {
  return (
    <div className="absolute z-10 top-0 w-full h-full bg-secondary-theme/50 cursor-wait">
      <LoadingLinearProgressUI
        sx={{
          color: '#202020',
        }}
      />
    </div>
  );
};
