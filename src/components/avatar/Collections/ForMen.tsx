import { PhotographIcon } from '@heroicons/react/outline';
import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @ForMen
 **/

const ForMen: FC<IProps> = (props) => {
  return (
    <div className="w-full h-full items-center justify-center">
      {/* Heading */}
      <div className="flex space-x-1 items-center">
        <PhotographIcon className="h-6 opacity-60" />
        <h6 className="text-sm font-medium text-center">
          Collections for Boys & Men
        </h6>
      </div>
      {/* Main */}
      <div className="w-full"></div>
    </div>
  );
};

export default ForMen;
