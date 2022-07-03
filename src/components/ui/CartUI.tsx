import React, { FC } from 'react';

export interface CartUIProps {}

/**
 * @author
 * @function @CartUI
 **/

export const CartUI:FC<CartUIProps> = () => {
  return (
    <div className="relative z-10 px-5">
      {/* Content */}
      <h6 className="text-white p-5 w-full text-center">Cart UI</h6>
    </div>
  );
};
