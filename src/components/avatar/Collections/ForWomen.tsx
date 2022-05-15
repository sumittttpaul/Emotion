import React, { FC } from 'react';
import { PhotographIcon } from '@heroicons/react/outline';
import { IAvatarState } from '../../../redux/reducers/AvatarReducer';

/**
 * @author
 * @function @ForWomen
 **/

const ForWomen: FC<IAvatarState> = ({Names}) => {
  return (
    <div className="w-full items-center justify-center">
      {/* Heading */}
      <div className="flex space-x-1 items-center">
        <PhotographIcon className="h-6 opacity-60" />
        <h6 className="text-sm font-medium text-center">
          Collections for Girls & Women
        </h6>
      </div>
      {/* Main */}
      <div className="w-full">{Names.map((ShowName)=>{
        return <h6>{ShowName.fullName}</h6>
      })}
      </div>
    </div>
  );
};

export default ForWomen;
