import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import moment from 'moment';

interface IProps {
  setYear: (year: number) => void;
}

/**
 * @author
 * @function @SelectYear
 **/

export const SelectYear: FC<IProps> = (props) => {
  const [selected, setSelected] = useState<string>(
    moment().endOf('year').format('YYYY')
  );

  const yearRange = (start: any, end: any) => {
    const allyears = Array(end - start + 1)
      .fill(0)
      .map((_, _idx) => start + _idx);
    return allyears.reverse();
  };

  const Years = yearRange(1900, new Date().getFullYear());

  const dayStyles = (Year: any) => {
    if (selected == Year) return 'bg-[#ffffff1a]';
  };

  return (
    <motion.div
      className="p-1 xs-300:p-5 max-h-[400px] grid grid-cols-4 scroll"
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.25 }}
    >
      {Years.map((year: any) => (
        <motion.button
          onClick={() => {
            setSelected(year);
            props.setYear(year);
          }}
          key={year}
          className={`${'text-white w-full flex justify-center text-xs m-1 p-4 rounded-md cursor-default transition-all ease-in-out'} ${dayStyles(
            year
          )}`}
        >
          {year}
        </motion.button>
      ))}
    </motion.div>
  );
};
