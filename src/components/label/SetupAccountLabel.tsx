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
    <div className="w-full flex flex-col">
      <h6 className="text-xs text-white">{props.heading}</h6>
      <h6 className="text-[10px] opacity-60 font-[350] text-white">
        {props.subheading}
      </h6>
    </div>
  );
};
