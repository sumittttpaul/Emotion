import React, { FC, useState } from 'react';
import { m } from 'framer-motion';
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
    <m.div
      className="p-5 grid grid-cols-4 scroll"
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.25 }}
    >
      {Years.map((year: any) => (
        <button
          onClick={() => {
            setSelected(year);
            props.setYear(year);
          }}
          key={year}
          className={`${'text-white hover:bg-white/5 w-full flex justify-center text-[13px] m-1 p-4 rounded-md cursor-default transition-all ease-in-out'} ${dayStyles(
            year
          )}`}
        >
          {year}
        </button>
      ))}
    </m.div>
  );
};
