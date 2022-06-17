import React, { useEffect, FC, ReactNode } from 'react';
import { useColorState } from '../../providers/state/ColorState';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @PageContainerDark
 **/

export const PageContainerDark: FC<IProps> = (props) => {
  const { ColorState, setColorState } = useColorState();
  useEffect(() => {
    // setColorState({ bgColor: '#121212' });
    document.body.style.backgroundColor = `${ColorState.bgColor}`;
  }, [setColorState, ColorState.bgColor]);
  return (
    <div className="p-0 m-0 flex flex-col flex-grow relative w-full bg-[#121212]">
      {props.children}
    </div>
  );
};
