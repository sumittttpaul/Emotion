import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  ClassName?: string;
}

/**
 * @author
 * @function @SetupHeaderLabel
 **/

export const SetupHeaderLabel: FC<IProps> = (props) => {
  return (
    <h5
      className={`${props.ClassName} font-[700] line-clamp-2 text-left w-full text-white text-[25px] md:text-[30px]`}
    >
      {props.children}
    </h5>
  );
};
