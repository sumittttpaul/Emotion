import React, { useEffect, FC, ReactNode } from 'react';
import { useColorState } from '../../providers/state/ColorState';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @ContainerDark
 **/

export const ContainerDark: FC<IProps> = (props) => {
  const { ColorState, setColorState } = useColorState();
  useEffect(() => {
    setColorState({ bgColor: '#0f0f0f' });
    document.body.style.backgroundColor = `${ColorState.bgColor}`;
  }, [setColorState, ColorState.bgColor]);
  return (
    <div className="p-0 m-0 flex flex-grow relative w-full h-full bg-[#0f0f0f]">
      {props.children}
    </div>
  );
};
