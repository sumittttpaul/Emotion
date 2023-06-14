import React, { FC, useState } from 'react';
import { m } from 'framer-motion';
import moment from 'moment';

interface IProps {
  setMonth: (month: number) => void;
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

  const getMonthNumber = (month: any) => {
    var d = Date.parse(month + '10, 2002');
    if (!isNaN(d)) {
      return new Date(d).getMonth() + 1;
    }
  };

  const dayStyles = (month: any) => {
    if (selected == month) return 'bg-[#ffffff1a]';
  };

  return (
    <m.div
      className="p-5 h-full items-center justify-center grid grid-cols-3 scroll"
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.25 }}
    >
      {Months.map((month: any) => (
        <button
          onClick={() => {
            setSelected(month);
            props.setMonth(getMonthNumber(month) || 0);
          }}
          key={month}
          className={`${'text-white text-[13px] hover:bg-white/5 m-1 p-4 rounded-md cursor-default transition-all ease-in-out'} ${dayStyles(
            month
          )}`}
        >
          {month}
        </button>
      ))}
    </m.div>
  );
};
