import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @AuthFooter
 **/

export const AuthFooter: FC<IProps> = (props) => {
  return (
    <div className="flex">
      <h6 className="text-[11px] font-light text-[rgba(255,255,255,0.75)] flex items-center">
      Discover the new you through Agewear-lifestyle
      </h6>
    </div>
  );
};
