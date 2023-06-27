import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { m } from 'framer-motion';
import React, { FC } from 'react';

interface IProps {
  currentMonth: () => void;
  currentYear: () => void;
  isthisMonth: boolean;
  prevMonthClick: () => void;
  nextMonthClick: () => void;
}

/**
 * @author
 * @function @SelectDayHeader
 **/

export const SelectDayHeader: FC<IProps> = (props) => {
  const MonthAndYear = () => {
    return props.currentMonth() + ', ' + props.currentYear();
  };
  return (
    <div className="w-full flex justify-between">
      <h6 className="text-white text-xs font-medium px-2.5 pb-3">
        {MonthAndYear()}
      </h6>
      <div className="block relative -mt-2 -mr-2">
        <div className="flex space-x-3">
          <m.button
            onClick={props.prevMonthClick}
            whileTap={{ scale: 0.9 }}
            className="text-white p-[4px] rounded-md bg-[#ffffff1a] opacity-100 hover:opacity-75 relative block cursor-default"
          >
            <ChevronUpIcon className="text-white h-[16px]" />
          </m.button>
          <m.button
            onClick={props.nextMonthClick}
            whileTap={{ scale: props.isthisMonth ? 1 : 0.9 }}
            disabled={props.isthisMonth}
            className="text-white disabled:opacity-50 p-[4px] rounded-md bg-[#ffffff1a] opacity-100 hover:opacity-75 relative block cursor-default"
          >
            <ChevronDownIcon className="text-white h-[16px]" />
          </m.button>
        </div>
      </div>
    </div>
  );
};
