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
      <div className="w-[15px] h-[15px] min-w-[15px] min-h-[15px]">
        <Image height={15} width={15} src="/icons/new-color.svg" alt="" />
      </div>
      <div className="text-[11px] font-[500] tracking-wide block">New</div>
    </div>
  );
};
