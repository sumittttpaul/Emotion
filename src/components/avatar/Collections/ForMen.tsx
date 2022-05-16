import { PhotographIcon } from '@heroicons/react/outline';
import React, { FC } from 'react';
import { IMensAvatarState } from '../../../redux/reducers/MensAvatarReducer';
import Image from 'next/image';

/**
 * @author
 * @function @ForMen
 **/

const ForMen: FC<IMensAvatarState> = ({MensAvatar}) => {
  return (
    <div className="w-full items-center justify-center space-y-3">
      {/* Heading */}
      <div className="flex space-x-1 items-center">
        <PhotographIcon className="h-6 opacity-60" />
        <h6 className="text-sm font-medium text-center">
          Collections for Boys & Men
        </h6>
      </div>
      {/* Main */}
      <div className="grid grid-cols-5 grid-rows-3 gap-2 ">
        {MensAvatar.map((avatars) => {
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

export default ForMen;
