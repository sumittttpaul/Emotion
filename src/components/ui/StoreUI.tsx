import React, { FC } from 'react';
import { MainHeader } from '../header/MainHeader/MainHeader';
import { DiscoverUI } from './StoreComponentUI/DiscoverUI';

interface IProps {}

/**
 * @author
 * @function @StoreUI
 **/

export const StoreUI: FC<IProps> = (props) => {
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader CurrentPage="Discover" />
      <DiscoverUI/>
    </main>
  );
};
