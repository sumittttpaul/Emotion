import Image from 'next/image';
import React, { FC } from 'react';

interface IProps {
  heading: string;
  subheading: string;
}

/**
 * @author
 * @function @SetupAccountLabel
 **/

export const SetupAccountLabel: FC<IProps> = (props) => {
  return (
    <div className="flex w-full">
      <div className="w-full flex flex-col space-y-1">
        <h6 className="text-[13px] font-[300] text-white">{props.heading}</h6>
        <h6 className="text-[11px] font-[300] opacity-75 text-white">
          {props.subheading}
        </h6>
      </div>
    </div>
  );
};
