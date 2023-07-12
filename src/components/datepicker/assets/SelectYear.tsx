import { useState } from 'react';
import { m } from 'framer-motion';
import moment from 'moment';

interface IProps {
  setYear: (year: string) => void;
}

function SelectYear(props: IProps) {
  const [selected, setSelected] = useState<string>(
    moment().endOf('year').format('YYYY')
  );

  const yearRange = (start: number, end: number) => {
    const allyears = Array(end - start + 1)
      .fill(0)
      .map((_, _idx) => start + _idx);
    return allyears.reverse();
  };

  const Years = yearRange(1900, new Date().getFullYear());

  const dayStyles = (Year: unknown) => {
    return selected == Year
      ? 'bg-[#ffffff1a] hover:bg-[#ffffff1a]'
      : 'bg-transparent hover:bg-white/5';
  };

  return (
    <m.div
      className="p-5 grid grid-cols-4 scroll"
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.25 }}
    >
      {Years.map((year) => (
        <button
          onClick={() => {
            setSelected(year.toString());
            props.setYear(year.toString());
          }}
          key={year}
          className={`${'text-white w-full flex justify-center text-[13px] m-1 p-4 rounded-md cursor-default transition-colors ease-in-out duration-200'} ${dayStyles(
            year
          )}`}
        >
          {year}
        </button>
      ))}
    </m.div>
  );
}

export default SelectYear;
