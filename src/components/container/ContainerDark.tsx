import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @ContainerDark
 **/

export const ContainerDark: FC<IProps> = (props) => {
  return (
    <div className="p-0 m-0 flex flex-grow relative w-full h-full bg-[#0f0f0f]">
      {props.children}
    </div>
  );
};
