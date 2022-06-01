import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @SetupAccountDivider
 **/

export const SetupAccountDivider: FC<IProps> = (props) => {
  return (
    <div className="w-full align-left relative">
      <div className="bg-color-dark h-[1px] w-[40%] relative block" />
    </div>
  );
};
