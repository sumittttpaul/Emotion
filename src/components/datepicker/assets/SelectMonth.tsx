import React, { FC, useState } from 'react';
import { m } from 'framer-motion';
import moment from 'moment';

interface IProps {
  setMonth: (month: string) => void;
}

/**
 * @author
 * @function @SelectMonth
 **/

const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const SelectMonth: FC<IProps> = (props) => {
  const [selected, setSelected] = useState<string>(
    moment().endOf('month').format('MMM')
  );

  const dayStyles = (month: string) => {
    return selected == month
      ? 'bg-[#ffffff1a] hover:bg-[#ffffff1a]'
      : 'bg-transparent hover:bg-white/5';
  };

  return (
    <m.div
      className="p-5 h-full items-center justify-center grid grid-cols-3 scroll"
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.25 }}
    >
      {Months.map((month) => (
        <button
          onClick={() => {
            setSelected(month);
            props.setMonth(month);
          }}
          key={month}
          className={`${'text-white text-[13px] m-1 p-4 rounded-md cursor-default transition-colors ease-in-out duration-150'} ${dayStyles(
            month
          )}`}
        >
          {month}
        </button>
      ))}
    </m.div>
  );
};
