import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode
}

/**
 * @author
 * @function @BorderContainerDark
 **/

export const BorderContainerDark: FC<IProps> = (props) => {
  return (
    <div className="text-[rgba(255, 255, 255, 0.70)] border-color-dark border border-solid text-xs font-normal hover:border bg-transparent w-full p-3 rounded-md">
      {props.children}
    </div>
  );
};
