import React, { FC } from 'react';
import ForWomen from '../Collections/ForWomen';
import ForMen from '../Collections/ForMen';

interface IProps {}

/**
 * @author
 * @function @FromAvatars
 **/

export const FromAvatars: FC<IProps> = (props) => {
  return (
    <div className="sm:h-[500px] box-border overflow-auto p-6 space-y-4 h-full w-full items-center justify-center flex flex-col">
      <ForWomen/>
      <ForMen/>
    </div>
  );
};
