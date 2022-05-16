import React, { FC } from 'react';
import { PhotographIcon } from '@heroicons/react/outline';
import { IWomensAvatarState } from '../../../redux/reducers/WomensAvatarReducer';
import Image from 'next/image';
import { Button } from '@mui/material';

/**
 * @author
 * @function @ForWomen
 **/

const ForWomen: FC<IWomensAvatarState> = ({ WomensAvatar }) => {
  return (
    <div className="w-full items-center justify-center space-y-3">
      {/* Heading */}
      <div className="flex space-x-1 items-center">
        <PhotographIcon className="h-6 opacity-60" />
        <h6 className="text-sm font-medium text-center">
          Collections for Girls & Women
        </h6>
      </div>
      {/* Main */}
      <div className="grid grid-cols-5 grid-rows-5 gap-2 ">
        {WomensAvatar.map((avatars) => {
          return (
            <div>
              <Image
                height={440}
                width={440}
                className="rounded-[50%]"
                src={avatars.iconURL}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForWomen;
