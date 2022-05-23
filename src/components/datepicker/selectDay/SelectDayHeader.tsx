import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
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
          <motion.button
            onClick={props.prevMonthClick}
            whileTap={{ scale: 0.9 }}
            className="text-white p-[4px] rounded-md bg-[rgba(255,255,255,0.1)] relative block"
          >
            <ChevronUpIcon className="text-white h-[16px] opacity-60" />
          </motion.button>
          {props.isthisMonth ? (
            ''
          ) : (
            <motion.button
              onClick={props.nextMonthClick}
              whileTap={{ scale: 0.9 }}
              className="text-white p-[4px] rounded-md bg-[rgba(255,255,255,0.1)] relative block"
            >
              <ChevronDownIcon className="text-white h-[16px] opacity-60" />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};
