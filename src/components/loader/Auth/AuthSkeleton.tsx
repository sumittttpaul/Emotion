import { Skeleton } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  ClassName: string;
}

/**
 * @author
 * @function @AuthSkeleton
 **/

export const AuthSkeleton: FC<IProps> = (props) => {
  const backgroundColor = '#FFFFFF1F';
  return (
    <div className={`${props.ClassName} flex w-full items-center justify-center`}>
      <div className="w-full h-full hidden ml-14 md:p-14 md:flex items-center justify-center">
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ backgroundColor: backgroundColor, maxHeight: 350 }}
        />
      </div>
      <div className="w-full h-full flex p-5 md:p-14 flex-col items-center justify-center">
        <div className="w-full flex flex-col -space-y-3">
          <Skeleton
            variant="text"
            width="100%"
            height={50}
            sx={{ backgroundColor: backgroundColor }}
          />
          <Skeleton
            variant="text"
            width="50%"
            height={50}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
        <div className="w-full flex flex-col mt-2">
          <Skeleton
            variant="text"
            width="100%"
            height={30}
            sx={{ backgroundColor: backgroundColor }}
          />
          <Skeleton
            variant="text"
            width="70%"
            height={30}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
        <div className='w-full flex justify-start mt-2'>
          <Skeleton
            variant="text"
            width="30%"
            height={60}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
        <div className='w-full flex justify-start'>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={250}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
        <div className='w-full flex justify-end mt-7'>
          <Skeleton
            variant="rectangular"
            width={160}
            height={50}
            sx={{ backgroundColor: backgroundColor }}
          />
        </div>
      </div>
    </div>
  );
};
