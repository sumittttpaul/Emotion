import Image from 'next/image';
import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @HotBadge
 **/

export const HotBadge: FC<IProps> = (props) => {
  return (
    <div className="flex py-1 px-2 rounded-md space-x-1 items-center bg-[#91020090]">
      <div className="w-[17px] h-[17px] min-w-[17px] min-h-[17px]">
        <Image height={17} width={17} src="/icons/fire-color.svg" alt="" />
      </div>
      <div className="text-[13px] font-[500] tracking-wide block">Hot</div>
    </div>
  );
};
