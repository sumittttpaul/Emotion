import React, { FC } from 'react';
import { SearchButton } from '../../button/SearchButton';
import { MainHeaderNav } from './assets/MainHeaderNav';

interface IProps {}

/**
 * @author
 * @function @HeaderHome
 **/

export const HeaderHome: FC<IProps> = (props) => {
  return (
    <div className="flex relative box-border w-full max-w-[1340px] mx-auto justify-between items-center my-2.5 px-5">
      <div className="flex relative space-x-3">
        <SearchButton />
        <MainHeaderNav />
      </div>
    </div>
  );
};
