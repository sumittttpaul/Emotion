import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';

interface IProps {}

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
  const [selected, setSelected] = useState<string>('');

  const dayStyles = (month: any) => {
    if (selected == month) return 'bg-[rgba(255,255,255,0.1)]';
  };

  return (
    <div className="p-1 xs-300:p-5 max-h-[400px] grid grid-cols-3 scroll">
      {Months.map((month: any) => (
        <motion.button
          onClick={() => setSelected(month)}
          key={month}
          className={`${'text-white text-xs m-1 py-4 px-7 rounded-md cursor-default transition-all ease-in delay-150'} ${dayStyles(
            month
          )}`}
        >
          {month}
        </motion.button>
      ))}
    </div>
  );
};
