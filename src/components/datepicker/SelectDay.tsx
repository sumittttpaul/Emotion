import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import moment from 'moment';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';

interface IProps {
  year: number;
  month: number;
}

/**
 * @author
 * @function @CustomCalender
 **/

const weekNames: any = [
  {
    weeks: 'Sun',
  },
  {
    weeks: 'Mon',
  },
  {
    weeks: 'Tue',
  },
  {
    weeks: 'Wed',
  },
  {
    weeks: 'Thu',
  },
  {
    weeks: 'Fri',
  },
  {
    weeks: 'Sat',
  },
];

export const SelectDay: FC<IProps> = (props) => {
  const [value, setValue] = useState(moment(props.year + '-' + props.month));
  const [calender, setCalender] = useState([]);

  // const get = moment('2002-10').daysInMonth();
  // const set = value.date(get);
  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').startOf('week');

  const isSelected = (day: any) => {
    return value.isSame(day, 'day');
  };

  const afterTaday = (day: any) => {
    return day.isAfter(new Date(), 'day');
  };

  const isToday = (day: any) => {
    return day.isSame(new Date(), 'day');
  };

  const isBefore1 = (day: any) => {
    return day.isSame(beforeMonth(), 'day');
  };

  const isBefore2 = (day: any) => {
    return day.isBefore(beforeMonth(), 'day');
  };

  const isAfter1 = (day: any) => {
    return day.isSame(afterMonth(), 'day');
  };

  const isAfter2 = (day: any) => {
    return day.isAfter(afterMonth(), 'day');
  };

  const isthisMonth = () => {
    return value.isSame(new Date(), 'month');
  };

  // Last date of previous month
  const beforeMonth = () => {
    return value.clone().subtract(1, 'month').endOf('month');
  };

  // First date of previous month
  const afterMonth = () => {
    return value.clone().add(1, 'month').startOf('month');
  };

  // button
  const prevMonth = () => {
    return value.clone().subtract(1, 'month');
  };

  // button
  const nextMonth = () => {
    return value.clone().add(1, 'month');
  };

  const currentMonth = () => {
    return value.format('MMM');
  };

  const currentYear = () => {
    return value.format('YYYY');
  };

  const disableDay = 'opacity-30 select-none pointer-events-none touch-none';

  const dayStyles = (day: any) => {
    if (isSelected(day)) return 'bg-[rgba(255,255,255,0.1)]';
    if (afterTaday(day)) return disableDay;
    if (isBefore1(day)) return disableDay;
    if (isBefore2(day)) return disableDay;
    if (isAfter1(day)) return disableDay;
    if (isAfter2(day)) return disableDay;
    // if (isToday(day)) return 'bg-[rgba(255,255,255,0.03)] text-white';
  };

  useEffect(() => {
    const day = startDay.clone().subtract(1, 'day');
    const a: any = [];
    while (day.isBefore(endDay, 'day')) {
      a.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, 'day').clone())
      );
    }
    setCalender(a);
  }, [value, startDay, endDay]);

  return (
    <div className="w-full h-full relative box-border p-5">
      <div className="w-full flex justify-between">
        <h6 className="text-white text-xs font-medium px-2.5 pb-3">
          {currentMonth()}, {currentYear()}
        </h6>
        <div className="block relative -mt-2 -mr-2">
          <div className="flex space-x-3">
            <motion.button
              onClick={() => {
                setValue(prevMonth());
              }}
              whileTap={{ scale: 0.9 }}
              className="text-white p-[4px] rounded-md bg-[rgba(255,255,255,0.1)] relative block"
            >
              <ChevronUpIcon className="text-white h-[16px] opacity-60" />
            </motion.button>
            {isthisMonth() ? (
              ''
            ) : (
              <motion.button
                onClick={() => {
                  setValue(nextMonth());
                }}
                whileTap={{ scale: 0.9 }}
                className="text-white p-[4px] rounded-md bg-[rgba(255,255,255,0.1)] relative block"
              >
                <ChevronDownIcon className="text-white h-[16px] opacity-60" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 relative">
        {weekNames.map((w: any) => (
          <div
            key={w}
            className="m-1 justify-center flex opacity-60 text-white text-[12px]"
          >
            {w.weeks}
          </div>
        ))}
      </div>
      <div className="relative w-full h-full text-center">
        {calender.map((week: any) => (
          <div key={week} className="grid grid-cols-7 relative">
            {week.map((day: any) => (
              <motion.button
                onClick={() => {
                  setValue(day);
                }}
                className={`${'py-[4px] px-[5px] xs-350:py-[8px] xs-350:px-[9px] xs-400:py-[10px] xs-400:px-[11px] m-1 text-white text-[12px] rounded-md cursor-default text-center box-border relative inline-block transition-all ease-in delay-150'} 
                ${dayStyles(day)}`}
                key={day}
              >
                {day.format('D')}
              </motion.button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
