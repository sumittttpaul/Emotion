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
    <div className="w-full flex flex-col space-y-[1px]">
      <h6 className="text-[13px] text-white opacity-75">{props.heading}</h6>
      <h6 className="text-[11px] opacity-50 font-[350] text-white">
        {props.subheading}
      </h6>
    </div>
  );
};
