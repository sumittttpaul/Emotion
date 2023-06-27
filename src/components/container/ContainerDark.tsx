import React, { useEffect, FC, ReactNode } from 'react';
import { useReduxStore } from '../../redux/useReduxStore';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @ContainerDark
 **/

export const ContainerDark: FC<IProps> = (props) => {
  const { color } = useReduxStore((state) => state.PageColor);
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="p-0 m-0 flex flex-grow relative w-full h-full bg-[#0f0f0f]">
      {props.children}
    </div>
  );
};
