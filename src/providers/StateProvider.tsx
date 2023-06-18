import React, { FC, ReactNode } from 'react';
import { ColorState } from './state/ColorState';
import { LoaderState } from './state/LoadingState';
import { SearchButtonState } from './state/SearchButtonState';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @StateProvider
 **/

export const StateProvider: FC<IProps> = (props) => {
  return (
    <SearchButtonState value={{ show: false }}>
      <ColorState value={{ bgColor: '#0f0f0f' }}>
        <LoaderState value={{ show: false }}>{props.children}</LoaderState>
      </ColorState>
    </SearchButtonState>
  );
};

export default StateProvider;
