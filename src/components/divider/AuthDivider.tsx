import React, { FC } from 'react';

/**
 * @author
 * @function @AuthDivider
 **/

const AuthDivider: FC = () => {
  return (
    <div className="flex w-full items-center space-x-3">
      <div className="h-[1px] bg-[#ffffff4d] w-full" />
      <h6 className="text-[12px] text-[#ffffff66]">Or</h6>
      <div className="h-[1px] bg-[#ffffff4d] w-full" />
    </div>
  );
};

export default AuthDivider;
