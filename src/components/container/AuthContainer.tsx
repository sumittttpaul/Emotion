import React, { useEffect, ReactNode, FC } from 'react';
import { useColorState } from '../../providers/state/ColorState';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @AuthContainer
 **/

const AuthContainer: FC<IProps> = (props) => {
  const { ColorState, setColorState } = useColorState();
  useEffect(() => {
    setColorState({ bgColor: '#202020' });
    document.body.style.backgroundColor = `${ColorState.bgColor}`;
  }, [setColorState, ColorState.bgColor]);
  return (
    <div className="bg-[#121212] flex sm:p-[32px] items-center justify-center h-full sm:h-screen w-screen main-auth">
      <div className="bg-[#202020] w-full h-full px-5 py-14 sm:px-0 sm:h-auto sm:max-w-[470px] flex flex-col justify-center items-center">
        {props.children}
      </div>
    </div>
  );
};

export default AuthContainer;
