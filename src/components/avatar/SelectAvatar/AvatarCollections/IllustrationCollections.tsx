import { FilmIcon } from '@heroicons/react/solid';
import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @IllustrationCollections
 **/

export const IllustrationCollections: FC<IProps> = (props) => {
  return (
    <div className="relative flex flex-col space-y-3 box-border w-full">
      {/* Heading */}
      <div className="flex space-x-2 items-center">
        <FilmIcon className="h-6 opacity-60" />
        <h6 className="text-sm font-medium text-center">Explore Illustrations</h6>
      </div>
    </div>
  );
};
