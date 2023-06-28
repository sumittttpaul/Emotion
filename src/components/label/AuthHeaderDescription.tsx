import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  ClassName?: string;
}

/**
 * @author
 * @function @AuthHeaderDescription
 **/

export const AuthHeaderDescription: FC<IProps> = (props) => {
  return (
    <h6
      className={`${props.ClassName} font-normal line-clamp-2 text-left w-full h-10 text-white/75 text-[15px]`}
    >
      {props.children}
    </h6>
  );
};
