import React, { FC, ReactNode } from 'react';
import { ColorState } from './state/ColorState';
import { HomePageState } from './state/HomePageState';
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
    <HomePageState value={{ Page: 'Discover' }}>
      <SearchButtonState value={{ show: false }}>
        <ColorState>
          <LoaderState value={{ show: false }}>{props.children}</LoaderState>
        </ColorState>
      </SearchButtonState>
    </HomePageState>
  );
};

export default StateProvider;
