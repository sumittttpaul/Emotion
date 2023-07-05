/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { FC } from 'react';
import { LinearProgress, linearProgressClasses, styled } from '@mui/material';

const AuthLoadingUI = styled(LinearProgress)(() => ({
  height: 3,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#00000000',
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: '#ffffff90',
  },
}));

export interface AuthLoadingProps {}

/**
 * @author
 * @function @AuthLoading
 **/

export const AuthLoading: FC<AuthLoadingProps> = () => {
  return (
    <div className="absolute z-10 top-0 w-full h-full bg-secondary-theme/50 cursor-wait">
      <AuthLoadingUI
        sx={{
          color: '#202020',
        }}
      />
    </div>
  );
};
