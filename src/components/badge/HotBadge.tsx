import Image from 'next/image';
import React, { FC } from 'react';

/**
 * @author
 * @function @HotBadge
 **/

export const HotBadge: FC = () => {
  return (
    <div className="flex py-1 px-2 rounded-md space-x-1 items-center bg-[#91020090]">
      <div className="w-[15px] h-[15px] min-w-[15px] min-h-[15px]">
        <Image height={15} width={15} src="/icons/fire-color.svg" alt="" />
      </div>
      <div className="text-[11px] font-[500] tracking-wide block">Hot</div>
    </div>
  );
};
