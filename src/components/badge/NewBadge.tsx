import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {}

/**
 * @author
 * @function @NewBadge
 **/

export const NewBadge: FC<IProps> = (props) => {
  return (
    <div className="flex py-1 px-2 rounded-md space-x-1 items-center bg-[#b48a0090]">
      <div className="w-[17px] h-[17px] min-w-[17px] min-h-[17px]">
        <Image height={17} width={17} src="/icons/new-color.svg" alt="" />
      </div>
      <div className="text-[13px] font-[500] tracking-wide block">New</div>
    </div>
  );
};
