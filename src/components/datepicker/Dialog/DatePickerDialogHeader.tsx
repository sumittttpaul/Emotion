import React, { FC } from 'react';

interface IProps {
  setHeaderDates: string;
}

/**
 * @author
 * @function @DatePickerDialogHeader
 **/

export const DatePickerDialogHeader: FC<IProps> = (props) => {
  return (
    <div className="text-white text-lg bg-[#151515] w-full relative block  whitespace-nowrap text-left">
      <h6 className="text-[10px] opacity-50 py-1 px-3 ">
        Choose your Date of Birth
      </h6>
      <h6 className="px-7 pb-4 text-2xl">{props.setHeaderDates}</h6>
    </div>
  );
};
