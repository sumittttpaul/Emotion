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
    <div className="border-color-dark border border-solid hover:border bg-transparent w-full p-3 rounded-md flex items-center justify-center">
      {props.children}
    </div>
  );
};
