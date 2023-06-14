import React, { FC } from 'react';
import { LinearProgress, linearProgressClasses, styled } from '@mui/material';

export interface AuthLoadingProps {}

const AuthLoadingUI = styled(LinearProgress)(({ theme }) => ({
  height: 3,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#00000000',
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: '#ffffff90',
  },
}));

/**
 * @author
 * @function @AuthLoading
 **/

export const AuthLoading: FC<AuthLoadingProps> = (props) => {
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
