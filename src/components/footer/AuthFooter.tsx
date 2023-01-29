import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @AuthFooter
 **/

export const AuthFooter: FC<IProps> = (props) => {
  return (
    <div className="flex">
      <h6 className="text-[11.5px] font-[300] text-white whitespace-normal opacity-80 flex items-center">
        Discover the new you with Emotion-outfit.
      </h6>
    </div>
  );
};
