import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import moment from 'moment';
import { SelectDayHeader } from './selectDay/SelectDayHeader';
import { WeekNames } from './selectDay/WeekNames';

interface IProps {
  year: number;
  month: number;
  day: number;
  setDay: (day: number) => void;
  setMonth: (month: number) => void;
}

/**
 * @author
 * @function @CustomCalender
 **/

export const SelectDay: FC<IProps> = (props) => {
  const [value, setValue] = useState(moment(props.year + '-' + props.month));
  const [calender, setCalender] = useState([]);

  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').startOf('week');

  const isSelected = (day: any) => {
    return value.isSame(day, 'day');
  };

  const afterTaday = (day: any) => {
    return day.isAfter(new Date(), 'day');
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

  const prevMonthClick = () => {
    setValue(prevMonth());
    props.setMonth(parseInt(value.clone().subtract(1, 'month').format('M')));
  };

  const nextMonthClick = () => {
    setValue(nextMonth());
    props.setMonth(parseInt(value.clone().add(1, 'month').format('M')));
  };

  const disableDay = 'opacity-30 select-none pointer-events-none touch-none';

  const dayStyles = (day: any) => {
    if (isSelected(day)) return 'bg-[#ffffff1a]';
    if (afterTaday(day)) return disableDay;
    if (isBefore1(day)) return disableDay;
    if (isBefore2(day)) return disableDay;
    if (isAfter1(day)) return disableDay;
    if (isAfter2(day)) return disableDay;
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
    <motion.div
      className="w-full h-full relative box-border p-5"
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.25 }}
    >
      <SelectDayHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        isthisMonth={isthisMonth()}
        prevMonthClick={prevMonthClick}
        nextMonthClick={nextMonthClick}
      />
      <WeekNames value={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']} />
      <div className="relative w-full h-full text-center">
        {calender.map((week: any) => (
          <div key={week} className="grid grid-cols-7 relative">
            {week.map((day: any) => (
              <motion.button
                onClick={() => {
                  setValue(day);
                  props.setDay(day.format('DD'));
                }}
                className={`${'py-[4px] px-[5px] xs-350:py-[8px] xs-350:px-[9px] xs-400:py-[10px] xs-400:px-[11px] m-1 text-white text-[12px] rounded-md cursor-default text-center box-border relative inline-block transition-all ease-in-out'} 
                ${dayStyles(day)}`}
                key={day}
              >
                {day.format('D')}
              </motion.button>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
