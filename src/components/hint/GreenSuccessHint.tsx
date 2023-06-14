import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  Label: string;
}

/**
 * @author
 * @function @GreenSuccessHint
 **/

export const GreenSuccessHint: FC<IProps> = (props) => {
  return (
    <div className="flex py-1 pl-1 pr-2 rounded-md space-x-1 items-center bg-[#00B46090]">
      <div className="items-start h-full min-w-[15px] mt-1">
        <Image
          height={15}
          width={15}
          src="/icons/success-color.svg"
          alt=""
        />
      </div>
      <div className="text-[13px] font-normal block">{props.Label}</div>
    </div>
  );
};
