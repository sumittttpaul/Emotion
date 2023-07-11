/* eslint-disable @typescript-eslint/no-empty-interface */
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

function LoadingLinearProgress() {
  return (
    <div className="absolute z-10 top-0 w-full h-full bg-secondary-theme/50 cursor-wait">
      <LoadingLinearProgressUI
        sx={{
          color: '#202020',
        }}
      />
    </div>
  );
}

export default LoadingLinearProgress;
