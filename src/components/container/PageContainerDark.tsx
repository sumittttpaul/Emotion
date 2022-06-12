import React, { useEffect, FC, ReactNode } from 'react';
import { useColorState } from '../../providers/state/ColorState';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @PageContainerDark
 **/

export const PageContainerDark: FC<IProps> = ({ children }) => {
  const { ColorState, setColorState } = useColorState();
  useEffect(() => {
    setColorState({ bgColor: '#121212' });
    document.body.style.backgroundColor = `${ColorState.bgColor}`;
  }, [setColorState, ColorState.bgColor]);
  return (
    <div className="p-0 m-0 relative box-border flex flex-col h-full w-full sm:h-screen bg-[#121212] items-center justify-center overflow-none">
      {children}
    </div>
  );
};
