import React, { FC } from 'react';

export interface WishlistUIProps {}

/**
 * @author
 * @function @WishlistUI
 **/

export const WishlistUI:FC<WishlistUIProps> = () => {
  return (
    <div className="relative z-10 px-5">
      {/* Content */}
      <h6 className="text-white p-5 w-full text-center">Wishlist UI</h6>
    </div>
  );
};
