import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';

interface IProps {}

/**
 * @author
 * @function @SelectYear
 **/

export const SelectYear: FC<IProps> = (props) => {
  const [selected, setSelected] = useState<number>(new Date().getFullYear());

  const yearRange = (start: any, end: any) => {
    const allyears = Array(end - start + 1)
      .fill(0)
      .map((_, _idx) => start + _idx);
    return allyears.reverse();
  };

  const Years = yearRange(1900, new Date().getFullYear());

  const dayStyles = (Year: any) => {
    if (selected == Year) return 'bg-[rgba(255,255,255,0.1)]';
  };

  return (
    <div className="p-1 xs-300:p-5 max-h-[400px] grid grid-cols-4 scroll">
      {Years.map((year: any) => (
        <motion.button
          onClick={() => setSelected(year)}
          key={year}
          className={`${'text-white text-xs m-1 p-4 rounded-md cursor-default transition-all ease-in delay-150'} ${dayStyles(
            year
          )}`}
        >
          {year}
        </motion.button>
      ))}
    </div>
  );
};
