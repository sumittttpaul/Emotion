import React, { FC, ReactNode } from 'react';
import { ColorState } from './state/ColorState';
import { LoaderState } from './state/LoadingState';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @StateProvider
 **/

export const StateProvider: FC<IProps> = (props) => {
  return (
    <ColorState>
      {/* <LoaderState value={{ show: false }}> */}
        {props.children}
        {/* </LoaderState> */}
    </ColorState>
  );
};
