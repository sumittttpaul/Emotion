import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
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
    <motion.div
      className="p-1 xs-300:p-5 max-h-[400px] grid grid-cols-3 scroll"
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.25 }}
    >
      {Months.map((month: any) => (
        <motion.button
          onClick={() => {
            setSelected(month);
            props.setMonth(getMonthNumber(month) || 0);
          }}
          key={month}
          className={`${'text-white text-xs m-1 py-4 px-7 rounded-md cursor-default transition-all ease-in-out'} ${dayStyles(
            month
          )}`}
        >
          {month}
        </motion.button>
      ))}
    </motion.div>
  );
};
