import React, { FC } from 'react';

export interface CollectionsUIProps {}

/**
 * @author
 * @function @CollectionsUI
 **/

export const CollectionsUI: FC<CollectionsUIProps> = (props) => {
  return (
    <div className="relative z-10 px-5">
      {/* Content */}
      <h6 className="text-white p-5 w-full text-center">Collections UI</h6>
    </div>
  );
};
