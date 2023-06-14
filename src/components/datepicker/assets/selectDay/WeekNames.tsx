import React, { FC } from 'react';

interface IProps {
  value: Array<string>;
}

/**
 * @author
 * @function @WeekNames
 **/

export const WeekNames: FC<IProps> = (props) => {
  return (
    <div className="grid grid-cols-7 relative">
      {props.value.map((value) => (
        <div
          key={value}
          className="m-1 justify-center flex opacity-60 text-white text-[12px]"
        >
          {value}
        </div>
      ))}
    </div>
  );
};
