import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @CartUI
 **/

export const CartUI: FC<IProps> = (props) => {
  return (
    <div className="relative z-10">
      {/* Content */}
      <h6 className="text-white p-5 w-full text-center">Cart UI</h6>
    </div>
  );
};
