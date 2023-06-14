import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  Label: string;
}

/**
 * @author
 * @function @YellowBulbHint
 **/

export const YellowBulbHint: FC<IProps> = (props) => {
  return (
    <div className="flex py-1 pl-1 pr-2 rounded-md space-x-1 items-center bg-[#b48a0090] text-white">
      <div className="items-start h-full min-w-[15px] mt-1">
        <Image
          height={15}
          width={15}
          src="/icons/light-bulb-color.svg"
          alt=""
        />
      </div>
      <div className="text-[13px] font-normal block">{props.Label}</div>
    </div>
  );
};
